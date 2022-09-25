from __future__ import unicode_literals
import matplotlib
matplotlib.use('Agg')
import numpy as np

class Orbit (object):
	def __init__(self, semiaxis, period, inclinationAngle, obliquityAngle, eccentricity):
		self.semiaxis = semiaxis #(in Rstar)
		self.period = period #(in days), assumed circular orbit
		self.inclinationAngle = np.radians(inclinationAngle) #(in rad)
		self.obliquityAngle = obliquityAngle
		self.eccentricity = eccentricity
		
		
	def returndt(self): #intervalo entre os pontos
		return 2 #ou 20 testar