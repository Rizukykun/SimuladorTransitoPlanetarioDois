from __future__ import unicode_literals
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib import gridspec
from webapp.SMOOTH import blur_image
import numpy as np
import os
import glob

class Main (object):

	def __init__(self):
		print ('Initialize')

	def makeVideo(self):
		try:
			os.remove("webapp/static/video/test.webm")
		except OSError:
			pass
		os.system("ffmpeg -r 10 -start_number 40 -i ./webapp/output/frames/img_%d.png -b:v 1000k ./webapp/static/video/test.webm")
		
	def plotImgs(self, planet, star, moons, maps, noise):
	
		plt.rcParams['xtick.minor.visible'] = True
		plt.rcParams['ytick.minor.visible'] = True
		plt.rcParams['legend.borderaxespad'] = .3
		plt.rcParams['legend.handlelength'] = 1.
		
		sMa = planet.orbit.semiaxis #semi-major axis of planetary orbit (in Rstar)
		Rs_pix = star.radius #stellar radius (in ~pixel?)
		Rplan = planet.radius #planetary radius (in Rstar) (1 Rjup = 6.9911e4 km = 0.100447 Rsun)
		ImgStar = star.returnimgStar()

		Ny, Nx = ImgStar.shape

		Rpl_pix = Rplan * Rs_pix

		coordp = planet.planetOrbit(Rs_pix, ImgStar)
		xp = coordp[0]
		yp = coordp[1]

		tlstep = planet.tlstep(Rs_pix, ImgStar)
		tstep = tlstep[0]
		Lstep = tlstep[1]
		
		
		#VARIAVEIS DE MATRIZ
		kk = np.arange(Ny * Nx) 

		q, = np.where((xp+(Nx/2) + 98 > 0) & (xp+(Nx/2) - 98 < Nx))
		i = int(np.mean(q))
		x0 = xp[i] + Nx/2
		y0 = yp[i] + Ny/2
		planet = np.zeros(Ny * Nx) + 1
		
		# Planet:
		ii, = np.where((kk/Nx-y0)**2+(kk-Nx*np.int64(1.*kk/Nx)-x0)**2 < Rpl_pix**2)
		planet[ii] = 0.

		
		# Moons:
		if len(moons) > 0:
			for x in range(0, len(moons)):
				
				ll, = np.where((kk/Nx-(y0-moons[x].moonOrbit(Rs_pix, Rpl_pix, tstep)[1][i]))**2+(kk-Nx*np.int64(kk/Nx)-(x0-moons[x].moonOrbit(Rs_pix, Rpl_pix, tstep)[0][i]))**2 < moons[x].rMoon(Rs_pix)**2)
				planet[ll]=0.
		
		planet = planet.reshape([Ny, Nx])
				
		Lmin = np.sum(ImgStar*planet) / ImgStar.sum()

		
		color = '.9'
		g = 1

		## @@@ Guilherme Barros - Primeiro incremento de teste - Deleção de imagens da pasta
		files = glob.glob('webapp/output/frames/*')
		for f in files:
			os.remove(f)
		files = glob.glob('webapp/static/video/*')
		for f in files:
			os.remove(f)

		#print 'Loop start. '
		for i in q:
			planet = np.zeros(Ny * Nx) + 1

			x0 = xp[i] + Nx/2
			y0 = yp[i] + Ny/2

			# Planet:
			ii, = np.where((kk/Nx-y0)**2+(kk-Nx*np.int64(1.*kk/Nx)-x0)**2 < Rpl_pix**2)
			planet[ii] = 0.

			# Moon:
			if len(moons) > 0:
				for x in range(0, len(moons)):
					ll, = np.where((kk/Nx-(y0-moons[x].moonOrbit(Rs_pix, Rpl_pix, tstep)[1][i]))**2+(kk-Nx*np.int64(kk/Nx)-(x0-moons[x].moonOrbit(Rs_pix, Rpl_pix, tstep)[0][i]))**2 < moons[x].rMoon(Rs_pix)**2)
					planet[ll]=0.
			planet = planet.reshape([Ny, Nx])

			# try 2
			#img = add_fog(ImgStar*planet, fog_coeff= 1)

			# Smooth image
			img = blur_image(ImgStar*planet, 5)

			Lstep[i] = np.sum(img)
			#if L!=0: Lstep[i] = np.sum(img)* np.random.np.random.normal(1., 3e-4)
			#else:    Lstep[i] = np.sum(img)
			lc = Lstep / ImgStar.sum()
			#lc = lc + (1 - np.nanmax(lc))

			# Plotting ============================================================
			fig = plt.figure(figsize=(8, 6), dpi=128)#, facecolor='k', edgecolor='k')
			gs = gridspec.GridSpec(4, 1)#, width_ratios=[1, 1])
			#ax = fig.add_subplot(111)
			ax = plt.subplot(gs[:3, :])
			ax.imshow(img, cmap=maps, interpolation='gaussian', origin='lower')
			ax = plt.subplot(gs[3:, :])
			ax.plot(tstep[:i], lc[:i], '.-', lw=.8, ms=3, c='#ef9f4f')
			ax.set_xlim(tstep[0], tstep[-1])#*1.1)
			ax.set_ylim(Lmin*.999, 1.001)
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
			fig.savefig('webapp/output/frames/img_' + str(i) + '.png', dpi=128, facecolor='k')
			plt.close('all')
			g += 1
			# =====================================================================
		print ('Process Done!')
		return "Ok!"