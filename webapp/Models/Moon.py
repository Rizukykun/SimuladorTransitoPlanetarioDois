from __future__ import unicode_literals
import matplotlib
matplotlib.use('Agg')
import numpy as np

class Moon (object):
	
	#pm = 0.0751017821823 #moon period
	#rm = 0.0288431223213 # moon radius
	#dm = 4.10784266075 # moon distance
	tm0 = 1.15612181491 # moon first transit time
	#kind = 'big-fst_'
	
	pos = np.random.choice([-1, 1])
	
	
	def __init__(self, radius, mass, albedo, distance, orbit):
		self.radius = radius
		self.mass = mass
		self.albedo = albedo
		self.distance = distance
		self.orbit = orbit
		
		
		
	# moon orbit in equatorial plane of planet
	def moonOrbit(self, Rs_pix, Rpl_pix, tstep):
		self.distance = self.distance * self.pos    
		Rmoon = self.radius * Rs_pix
		dmoon = self.distance * Rpl_pix
		theta_m0 = self.tm0
		
		theta_m = 2*np.pi * tstep / (self.orbit.period*24.) - theta_m0
		xm = dmoon * np.cos(theta_m)
		ym = dmoon * np.sin(theta_m) * np.cos(self.orbit.inclinationAngle) 
		
		pair = []
		pair.append(xm)
		pair.append(ym)
		
		return pair
	
	def dMoon(self, Rpl_pix):
		return self.distance * Rpl_pix
	
	def rMoon(self, Rs_pix):
		return self.radius * Rs_pix