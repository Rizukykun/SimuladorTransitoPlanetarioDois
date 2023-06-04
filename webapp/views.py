# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.urls import reverse

from webapp.Models.Main import Main
from webapp.Models.Moon import Moon
from webapp.Models.Orbit import Orbit
from webapp.Models.Planet import Planet
from webapp.Models.Spot import Spot
from webapp.Models.Star import Star

from datetime import datetime

# Create your views here.

def home(request):

	return render(request, 'webapp/index.html')

def simulator(request):	
	now = datetime.now()
	timestamp = now.strftime("%Y%m%d%H%M%S%f")
	video_name = timestamp + '.webm'
	if(request.method == 'GET'):

		try:
			if (request.GET['video']) != "":
				return simulator2(request)
		except:
			print("Not a Prerendered one")

		try:
			if (request.GET['sim']) != "":
				return simulator2(request)
		except:
			print("Rendering Simulation...")
		
		moons = []

		if int(request.GET['room']) > 0:
			for x in range(1, int(request.GET['room'])+1):

				radius = 'moonRadius_' + str(x)
				mass = 'moonMass_' + str(x)
				albedo = 'moonAlbedo_' + str(x)
				distance = 'moonDistance_' + str(x)
				semiaxis = 'moonSemiaxis_' + str(x)
				period = 'moonPeriod_'+ str(x)
				inclinationAngle = 'moonInclinationAngle_'+ str(x)
				obliquityAngle = 'moonObliquityAngle_'+ str(x)
				eccentricity = 'moonEccentricity_'+ str(x)

				moon = Moon(float(request.GET[radius]), float(request.GET[mass]), float(request.GET[albedo]), float(request.GET[distance]),Orbit(float(request.GET[semiaxis]), float(request.GET[period]), float(request.GET[inclinationAngle]), float(request.GET[obliquityAngle]), float(request.GET[eccentricity])))

				moons.append(moon)


		spots = []

		if int(request.GET['room2']) > 0:
			for x in range(1, int(request.GET['room2'])+1):

				radius = 'spotRadius_' + str(x)
				intensity = 'spotIntensity_' + str(x)
				latitude = 'spotLatitude_' + str(x)
				longitude = 'spotLongitude_' + str(x)
				
				spot = Spot(float(request.GET[radius]), float(request.GET[intensity]), float(request.GET[latitude]), float(request.GET[longitude]))

				spots.append(spot)

		
		star = Star(request.GET['starName'], float(request.GET['starRadius']), float(request.GET['starMass']), float(request.GET['effectiveTemperature']), spots)
		planet = Planet(float(request.GET['planetMass']), float(request.GET['planetRadius']), float(request.GET['atmosphere']), float(request.GET['planetAlbedo']), Orbit(float(request.GET['planetSemiaxis']), float(request.GET['planetPeriod']), float(request.GET['planetInclinationAngle']), float(request.GET['planetObliquityAngle']), float(request.GET['planetEccentricity'])))	
		try:
			noise = request.GET['noise']
		except:
			noise = "null"
		main = Main()
		main.plotImgs(planet, star, moons, request.GET['starColor'], noise)

		main.makeVideo(video_name)

		return redirect(reverse('simulator') + f'?sim={video_name}')

	return render(request, 'webapp/simulator.html')

def simulator2(request):
	return render(request, 'webapp/simulator.html')

