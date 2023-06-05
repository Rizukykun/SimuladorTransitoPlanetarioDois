from __future__ import unicode_literals
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib import gridspec
import numpy as np
import os
import glob
import cv2
import subprocess
import random

class Main (object):

	def __init__(self):
		print ('Initialize')

	def makeVideo(self, videoname):
		imgList = []
		for filename in glob.glob('webapp/output/frames/*.png'):
			img = cv2.imread(filename)
			height, width, layers = img.shape
			size = (width,height)
			imgList.append(img)

		out = cv2.VideoWriter('webapp/static/video/' + videoname, cv2.VideoWriter_fourcc('V','P','8','0'), 15, size)
		for i in range(len(imgList)):
			out.write(imgList[i])
		out.release()
		return True
		
	def plotImgs(self, planet, star, moons, maps, noiseType, noise, CMEposX: int, CMEposY: int, CMEMajorRadius: int, CMEMinorRadius: int, CMEAngle: float):
		CMErad = CMEAngle * np.pi / 180
		cosa = np.cos(CMErad) #Cosseno do ângulo informado
		sina = np.sin(CMErad) #Seno do ângulo informado
		seed = random.randint(0,10000) #Seed para a geração da CME

		#Parâmetros de plotagem
		plt.rcParams['xtick.minor.visible'] = True
		plt.rcParams['ytick.minor.visible'] = True
		plt.rcParams['legend.borderaxespad'] = .3
		plt.rcParams['legend.handlelength'] = 1.
		color = '.9'
		
		Rs_pix = star.radius #Raio estimado da estrela em pixels
		Rplan = planet.radius #Raio do planeta em RSol (1 Rjup = 6.9911e4 km = 0.100447 Rsun)
		ImgStar = star.returnimgStar()
		ImgStarSoma = ImgStar.sum()
		
		#A maneira de gerar o ruído será diferente. Não precisaremos disso agora. Estará comentado até implementarmos o noise
		# if (float(noise) > 0):
		# 	ImgStar = add_fog(ImgStar, fog_coeff= float(noise))

		Ny, Nx = ImgStar.shape

		Rpl_pix = Rplan * Rs_pix #Raio do planeta em pixel

		coordp = planet.planetOrbit(Rs_pix, ImgStar)
		xp = coordp[0]
		yp = coordp[1]

		tlstep = planet.tlstep(Rs_pix, ImgStar)
		tstep = tlstep[0]
		lc = tlstep[1]
		

		#VARIAVEIS DE MATRIZ
		kk = np.arange(Ny * Nx) 

		q, = np.where((xp+(Nx/2) + 98 > 0) & (xp+(Nx/2) - 98 < Nx))
		i = int(np.mean(q))
		
		#os valores estão invertidos para que a verificação dos limites reais seja realizada no laço de plotagem		
		Lmin = 1 #Limite mínimo do Gráfico
		Lmax = 0 #Limite máximo do Gráfico

		#Limpeza das imagens e do vídeo nas pastas para a geração de novos
		files = glob.glob('webapp/output/frames/*')
		for f in files:
			os.remove(f)
		files = glob.glob('webapp/static/video/*')
		for f in files:
			os.remove(f)

		vetorCMEs = []
		if noiseType == "CME":			
			for i in range(10):
				#Chamar o exe
				subprocess.call([r"./GeradorCME.exe", str(i), str(seed)])
				#Ler o arquivo
				f = open(f"CMEFrame{i}.txt", "r")
				vetor = f.read().split(",")
				for j in range(len(vetor)):
					vetor[j] = float(vetor[j])
				ndvetor = np.asarray(vetor)
				#Salvar para depois
				vetorCMEs.append(ndvetor)

		#Loop de Geração de Imagens e Gráficos
		for i in q:
			#Inicializa a geração da sombra na frente da estrela
			planet = np.zeros(Ny * Nx) + 1

			x0 = xp[i] + Nx/2
			y0 = yp[i] + Ny/2

			# Planeta:
			ii, = np.where((kk/Nx-y0)**2+(kk-Nx*np.int64(1.*kk/Nx)-x0)**2 < Rpl_pix**2)
			planet[ii] = 0.

			# Lua(s):
			if len(moons) > 0:
				for x in range(0, len(moons)):
					ll, = np.where((kk/Nx-(y0-moons[x].moonOrbit(Rs_pix, Rpl_pix, tstep)[1][i]))**2+(kk-Nx*np.int64(kk/Nx)-(x0-moons[x].moonOrbit(Rs_pix, Rpl_pix, tstep)[0][i]))**2 < moons[x].rMoon(Rs_pix)**2)
					planet[ll]=0.
			
			planet = planet.reshape([Ny, Nx])

			img = ImgStar*planet

			if noiseType == "CME":
				#Criar mascara da elipse
				frame = int((i - q[0]) / (len(q) / 10))
				cme = vetorCMEs[frame]

				rMai = (CMEMajorRadius / len(q)) + (CMEMajorRadius / len(q)) * (i - q[0])
				rMen = (CMEMinorRadius / len(q)) + (CMEMinorRadius / len(q)) * (i - q[0])

				mascara = np.zeros(856*856)
				
				dd = rMai * rMai
				DD = rMen * rMen

				arrayX = np.arange(0,Nx)
				arrayY = np.arange(0,Nx)
				
				mascara = np.empty((Nx,Nx))
				for y in arrayY:
					a = np.power(cosa*(arrayX-CMEposX)+sina*(y-CMEposY),2)
					b = np.power(sina*(arrayX-CMEposX)-cosa*(y-CMEposY),2)
					distancia = (a/dd)+(b/DD)
					mascara[y] = (np.where(distancia <= 1, 1-(distancia*distancia*distancia*distancia),0))
				
				mascara = mascara.reshape(Nx*Nx)

				#Multiplicar cme pela mascara
				cme = cme*mascara
				cme = cme.reshape(Nx, Nx)

				#Aplicar CME
				img = np.maximum(img, cme)

			lc[i] = np.sum(img) / ImgStarSoma

			# Plotting ============================================================
			fig = plt.figure(figsize=(8, 6), dpi=128)#, facecolor='k', edgecolor='k')
			gs = gridspec.GridSpec(4, 1)#, width_ratios=[1, 1])
			ax = plt.subplot(gs[:3, :])
			ax.imshow(img, cmap=maps, interpolation='gaussian', origin='lower')
			ax = plt.subplot(gs[3:, :])
			ax.plot(tstep[q[0]:i], lc[q[0]:i], '.-', lw=.8, ms=3, c='#ef9f4f')
			ax.set_xlim(tstep[0], tstep[-1])

			Lmax = np.max(lc[q[0]:i + 1])

			Lmin = np.min(lc[q[0]:i + 1])
			if (Lmax == Lmin):
				Lmin = 1
			ax.set_ylim(Lmin*.999, Lmax + 0.001)
			ax.set_xlabel('time (h)', fontweight='bold')
			ax.set_ylabel(r'flux (L$\star$)', fontweight='bold')
			ax.grid(which='major', c=color, alpha=.6, lw=.6)
			ax.grid(which='minor', c=color, alpha=.3, lw=.3)
			ax.set_facecolor('k')
			for sp in ('left','bottom', 'right', 'top'):
				ax.spines[sp].set_color(color)
			ax.xaxis.label.set_color(color)
			ax.yaxis.label.set_color(color)
			ax.tick_params(axis='both', which='both', colors=color)
			fig.tight_layout()			
			fig.savefig('webapp/output/frames/img_' + str(f"{i:03}") + '.png', dpi=128, facecolor='k')
			plt.close('all')
			# =====================================================================
		print ('Process Done!')
		return "Ok!"