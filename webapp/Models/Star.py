from __future__ import unicode_literals
import matplotlib
matplotlib.use('Agg')
import math
import numpy as np

class Star (object):
	
	#MATRIX LEN
	matrixLen = 856
	
	#Maximus middle of star intensity
	maximusIntensity=240.

	#Input
	coeficienteHum = 0.5
	coeficienteDois = 0.3

	imgStar = np.asarray([])
	
	def __init__(self, name, radius, mass, effectiveTemperature, spots):

		self.name = name
		self.radius = radius
		self.mass = mass
		self.effectiveTemperature = effectiveTemperature
		self.spots = spots
		self.ImgStar()
		self.createSpots()
		
		
	def ImgStar(self):
		global imgStar
	
		star = [[ 0.0 for i in range(self.matrixLen)] for j in range(self.matrixLen)]
		cont = 0
		
		for j in range(len(star)):
			for i in range(len(star[j])):
				
				#Distance to de Middle of Star
				middleDistance = math.sqrt(pow(i-self.matrixLen/2,2) + pow(j-self.matrixLen/2,2))
				
				if middleDistance <= self.radius:
					cosTheta = math.sqrt(1-pow(middleDistance/self.radius,2))
					star[i][j] = int(self.maximusIntensity * (1 - self.coeficienteHum *(1 - cosTheta) - self.coeficienteDois * (pow(1 - cosTheta, 2))))
					cont = cont + 1
		
		imgStar = np.asarray(star)
		return np.asarray(star)

	def returnimgStar(self):
		global imgStar
		return imgStar

	def createSpots(self):
		global imgStar


		for i in range(0, len(self.spots)):

			spotTeste = self.spots[i]

			# Parametros da mancha
			raioMancha = self.radius*0.05  # raio em funcao do raio da estrela em pixels

			estrela = self.returnimgStar()


			#######  inserir manchas

			#posicao da mancha em pixels em relacao ao centro da estrela
			ys=self.radius*np.sin(spotTeste.latitude)  
			xs=self.radius*np.cos(spotTeste.latitude)*np.sin(spotTeste.longitude)
			anguloHelio=np.arccos(np.cos(spotTeste.latitude)*np.cos(spotTeste.longitude))

			Ny, Nx = self.returnimgStar().shape

			# efeito de projecao pela mancha estar a um anguloHeliocentrico do centro da estrela - elipcidade
			yy = ys + Ny/2 # posicao em pixel com relacao a origem da matriz
			xx = xs + Nx/2 # posicao em pixel com relacao a origem da matriz

			kk = np.arange(Ny * Nx)
			vx = kk-Nx*np.int64(1.*kk/Nx) - xx
			vy = kk/Ny - yy

			# angulo de rotacao da mancha
			anguloRot=np.abs(np.arctan(ys/xs))    # em radianos
			if spotTeste.latitude*spotTeste.longitude > 0: anguloRot=-anguloRot

			ii, = np.where((((vx*np.cos(anguloRot)-vy*np.sin(anguloRot))/np.cos(anguloHelio))**2+(vx*np.sin(anguloRot)+vy*np.cos(anguloRot))**2) < raioMancha**2)
			 
			spot = np.zeros(Ny * Nx) + 1
					
			spot[ii]=spotTeste.intensity
			spot = spot.reshape([Ny, Nx])

			imgStar = estrela * spot