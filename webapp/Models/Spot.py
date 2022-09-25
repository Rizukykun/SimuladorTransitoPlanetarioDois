from __future__ import unicode_literals
import matplotlib
matplotlib.use('Agg')
import numpy as np

class Spot (object):

	def __init__(self, radius, intensity, latitude, longitude):
		self.radius = radius
		self.intensity = intensity
		self.latitude = np.radians(latitude)
		self.longitude = np.radians(longitude)