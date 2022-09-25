from __future__ import unicode_literals
import matplotlib
matplotlib.use('Agg')
import numpy as np

class Planet (object):
	
	def __init__(self, mass, radius, atmosphere, albedo, orbit):
		self.mass = mass
		self.radius = radius #(in Rstar)
		self.atmosphere = atmosphere
		self.albedo = albedo
		self.orbit = orbit
		
	def tlstep(self, Rs_pix, ImgStar):
		Rpl_pix = self.radius * Rs_pix
		Rorb_pix = self.orbit.semiaxis * Rs_pix
		
		tdur = self.orbit.period*24/(2*np.pi * Rorb_pix) * (Rs_pix + Rpl_pix) # transit duration in hours / 2pi
		
		tdur = self.orbit.period*24/(2*np.pi * Rorb_pix) * (Rs_pix + Rpl_pix) # transit duration in hours / 2pi

		nstep = int(tdur*60.*4/self.orbit.returndt())# + 0.5) # number of steps
		if nstep%2!=0: nstep = nstep+1
		tstep = np.arange(-nstep/2., nstep/2., 1) * self.orbit.returndt()/60. # in hours
		Lstep = np.zeros(nstep) + ImgStar.sum()# / ImgStar.sum()
		
		tlstep = []
		tlstep.append(tstep)
		tlstep.append(Lstep)
		
		return tlstep
	
	def planetOrbit(self,Rs_pix, ImgStar):
		tstep = self.tlstep(Rs_pix, ImgStar)
		theta_p = 2*np.pi * tstep[0] / (self.orbit.period*24.) - np.pi/2.
		xp = self.orbit.semiaxis * Rs_pix * np.cos(theta_p)
		yp = self.orbit.semiaxis * Rs_pix * np.sin(theta_p) * np.cos(self.orbit.inclinationAngle)
		
		pair = []
		pair.append(xp)
		pair.append(yp)
		return pair
	
	def createPlanet(self, Ny, Nx, kk, y0, x0, Rpl_pix, Rs_pix, moon):
		planet = np.zeros(Ny * Nx) + 1
		# Planet:
		ii, = np.where((kk/Nx-y0)**2+(kk-Nx*np.int64(1.*kk/Nx)-x0)**2 < Rpl_pix**2)
		planet[ii] = 0.
		
		if len(moon) > 0:            
			for x in range(0, len(moon)):
				moon[x]