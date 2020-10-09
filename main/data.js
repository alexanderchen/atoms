// "Line position","Red","Green","Blue","Opacity","Audio frequency (Hz)","Relative amplitude"
var LINE_DATA = [
	[
		"helium", // name of element
		[
			[71.86,0.377,0,0,0.896,154.5,0.896],
			[93.48,0.377,0,0,1.,173.5,1.],
			[132.2,0.6197,0,0,1.,217.8,1.],
			[212.4,1.,0.7238,0,1.,383.8,1.],
			[295.2,0,0.9528,0.5161,0.2549,831.8,0.2549],
			[298.4,0,0.9348,0.6106,0.9989,861.5,0.9989],
			[307.8,0,0.8205,0.8409,0.4844,957.1,0.4844],
			[328.7,0,0.2268,1.,0.731,1228.,0.731],
			[352.8,0.4126,0,1.,1.,1687.,1.],
			[361.2,0.4805,0,1.,0.2549,1899.,0.2549],
			[387.9,0.3045,0,0.6417,0.351,2859.,0.351],
			[397.4,0.2146,0,0.4524,0.9262,3349.,0.9262]
		]
	],
	[
		"lithium",
		[
			[129.2,0.5973,0,0,1.,213.8,1.],
			[189.6,1.,0,0,0.9881,321.9,0.9881],
			[386.7,0.3156,0,0.6652,0.3626,2805.,0.3626]
		]
	],
	[
		"nitrogen",
		[
			[39.12,0.377,0,0,1.,131.1,1.],
			[53.17,0.377,0,0,1.,140.4,1.],
			[55.77,0.377,0,0,1.,142.3,1.],
			[57.64,0.377,0,0,1.,143.6,1.],
			[59.38,0.377,0,0,1.,144.9,1.],
			[60.14,0.377,0,0,1.,145.4,1.],
			[127.7,0.5862,0,0,1.,211.9,1.],
			[134.5,0.6372,0,0,1.,221.,1.],
			[135.4,0.6442,0,0,1.,222.3,1.],
			[136.3,0.6508,0,0,1.,223.5,1.],
			[137.7,0.6616,0,0,1.,225.5,1.],
			[149.4,0.8532,0,0,1.,243.,1.],
			[150.4,0.8725,0,0,1.,244.7,1.],
			[151.7,0.896,0,0,1.,246.7,1.],
			[153.2,0.9237,0,0,1.,249.2,1.],
			[154.2,0.9433,0,0,1.,250.9,1.],
			[155.9,0.9657,0,0,1.,253.8,1.],
			[156.2,0.9684,0,0,1.,254.3,1.],
			[157.6,0.9799,0,0,1.,256.6,1.],
			[158.8,0.9902,0,0,1.,258.8,1.],
			[199.2,1.,0.4196,0,1.,345.8,1.],
			[200.1,1.,0.4498,0,0.9997,348.3,0.9997],
			[214.6,1.,0.7716,0,1.,390.6,1.],
			[217.,1.,0.8259,0,1.,398.4,1.],
			[223.5,1.,0.9319,0,1.,420.3,1.],
			[224.8,1.,0.946,0,1.,424.6,1.],
			[270.7,0,1.,0,0.9985,645.2,0.9985],
			[271.9,0,1.,0,1.,652.6,1.],
			[303.6,0,0.9057,0.763,1.,912.6,1.],
			[305.,0,0.898,0.8036,0.9997,926.8,0.9997],
			[306.5,0,0.8569,0.8237,1.,942.8,1.],
			[308.5,0,0.8012,0.85,0.9997,964.8,0.9997],
			[315.3,0,0.6151,0.9382,1.,1044.,1.],
			[389.,0.2941,0,0.6199,1.,2910.,1.],
			[390.,0.2846,0,0.5999,0.9985,2959.,0.9985]
		]
	],
	[
		"carbon",
		[
			[13.91,0.377,0,0,1.,116.7,1.],
			[88.5,0.377,0,0,1.,168.8,1.],
			[141.2,0.7017,0,0,1.,230.6,1.],
			[198.7,1.,0.4033,0,1.,344.6,1.],
			[199.5,1.,0.4331,0,1.,346.9,1.],
			[262.,0,1.,0,1.,592.5,1.],
			[294.8,0,0.9553,0.503,1.,827.8,1.],
			[306.8,0,0.8484,0.8277,1.,946.1,1.],
			[322.8,0,0.4187,1.,1.,1143.,1.]
		]
	],
	[
		"boron",
		[
			[175.5,1.,0,0,1.,290.5,1.],
			[205.7,1.,0.5755,0,0.9603,364.,0.9603],
			[217.9,1.,0.8444,0,1.,401.2,1.],
			[218.2,1.,0.8505,0,1.,402.1,1.]
		]
	],
	[
		"beryllium",
		[
			[20.8,0.377,0,0,0.9407,120.4,0.9407],
			[38.12,0.377,0,0,1.,130.5,1.],
			[44.81,0.377,0,0,0.9953,134.8,0.9953],
			[50.17,0.377,0,0,0.9407,138.3,0.9407],
			[69.18,0.377,0,0,0.6542,152.3,0.6542],
			[79.09,0.377,0,0,1.,160.5,1.],
			[84.54,0.377,0,0,1.,165.2,1.],
			[101.7,0.39,0,0,1.,181.7,1.],
			[111.6,0.4642,0,0,1.,192.3,1.],
			[121.3,0.538,0,0,1.,203.8,1.],
			[127.4,0.5836,0,0,0.9407,211.5,0.9407],
			[143.5,0.7447,0,0,1.,234.,1.],
			[152.6,0.9142,0,0,1.,248.3,1.],
			[177.1,1.,0,0,0.9953,293.7,0.9953],
			[214.3,1.,0.7651,0,0.9953,389.6,0.9953],
			[244.2,0.3118,1.,0,0.9953,502.7,0.9953],
			[273.8,0,1.,0,1.,665.5,1.],
			[291.2,0,0.9753,0.3981,1.,796.7,1.],
			[315.1,0,0.62,0.9358,1.,1041.,1.],
			[329.1,0,0.2122,1.,1.,1234.,1.],
			[342.7,0.2195,0,1.,1.,1471.,1.],
			[345.1,0.2868,0,1.,0.6542,1519.,0.6542],
			[347.4,0.3316,0,1.,1.,1565.,1.],
			[359.2,0.4737,0,1.,1.,1845.,1.],
			[374.7,0.4302,0,0.9067,1.,2319.,1.]
		]
	],
	[
		"hydrogen",
		[
			[143.7,0.7479,0,0,1.,234.3,1.],
			[313.9,0,0.6536,0.9199,1.,1027.,1.],
			[366.,0.4772,0,1.,1.,2035.,1.],
			[389.8,0.2863,0,0.6035,0.9999,2950.,0.9999]
		]
	],
	[
		"oxygen",
		[
			[0.493,0.377,0,0,0.9964,110.,0.9964],
			[1.499,0.377,0,0,1.,110.4,1.],
			[4.856,0.377,0,0,1.,112.1,1.],
			[5.355,0.377,0,0,1.,112.3,1.],
			[11.37,0.377,0,0,0.6482,115.4,0.6482],
			[22.63,0.377,0,0,1.,121.4,1.],
			[29.32,0.377,0,0,0.7556,125.2,0.7556],
			[51.93,0.377,0,0,0.8375,139.6,0.8375],
			[52.26,0.377,0,0,1.,139.8,1.],
			[74.56,0.377,0,0,1.,156.7,1.],
			[84.33,0.377,0,0,0.9855,165.,0.9855],
			[99.79,0.377,0,0,1.,179.8,1.],
			[134.6,0.638,0,0,0.7556,221.1,0.7556],
			[139.5,0.6749,0,0,0.6482,228.1,0.6482],
			[154.5,0.9492,0,0,1.,251.4,1.],
			[162.6,1.,0,0,0.7556,265.4,0.7556],
			[163.4,1.,0,0,0.7556,266.9,0.7556],
			[173.8,1.,0,0,0.7556,287.,0.7556],
			[174.3,1.,0,0,0.6482,288.,0.6482],
			[184.3,1.,0,0,1.,309.4,1.],
			[189.4,1.,0,0,0.7556,321.2,0.7556],
			[195.4,1.,0.2901,0,1.,336.,1.],
			[200.5,1.,0.459,0,0.6482,349.4,0.6482],
			[204.1,1.,0.5404,0,1.,359.5,1.],
			[242.3,0.4172,1.,0,0.8375,493.9,0.8375],
			[256.4,0,1.,0,0.9999,562.,0.9999],
			[266.9,0,1.,0,0.973,621.6,0.973],
			[267.1,0,1.,0,1.,622.4,1.],
			[363.2,0.4791,0,1.,0.7556,1954.,0.7556],
			[376.7,0.4111,0,0.8665,0.6482,2392.,0.6482]
		]
	],
	[
		"flourine",
		[
			[19.98,0.377,0,0,1.,119.9,1.],
			[24.53,0.377,0,0,1.,122.4,1.],
			[39.28,0.377,0,0,0.9999,131.2,0.9999],
			[42.66,0.377,0,0,0.9953,133.4,0.9953],
			[44.78,0.377,0,0,0.9953,134.7,0.9953],
			[48.51,0.377,0,0,0.3893,137.2,0.3893],
			[51.39,0.377,0,0,0.9922,139.2,0.9922],
			[57.43,0.377,0,0,0.9763,143.4,0.9763],
			[60.13,0.377,0,0,1.,145.4,1.],
			[66.8,0.377,0,0,0.9953,150.4,0.9953],
			[68.88,0.377,0,0,1.,152.1,1.],
			[69.1,0.377,0,0,0.4284,152.2,0.4284],
			[79.76,0.377,0,0,1.,161.,1.],
			[87.21,0.377,0,0,1.,167.6,1.],
			[96.25,0.377,0,0,1.,176.2,1.],
			[103.4,0.4024,0,0,0.9763,183.4,0.9763],
			[109.5,0.449,0,0,1.,190.1,1.],
			[113.,0.4749,0,0,1.,193.9,1.],
			[114.4,0.4856,0,0,1.,195.6,1.],
			[116.6,0.502,0,0,1.,198.1,1.],
			[120.4,0.5312,0,0,0.6039,202.7,0.6039],
			[122.6,0.5474,0,0,0.9999,205.4,0.9999],
			[131.,0.6104,0,0,0.6914,216.1,0.6914],
			[158.6,0.9886,0,0,1.,258.4,1.],
			[165.1,1.,0,0,1.,270.2,1.],
			[176.,1.,0,0,1.,291.5,1.],
			[185.,1.,0,0,0.3491,311.1,0.3491],
			[195.2,1.,0.2861,0,0.3893,335.7,0.3893]
		]
	],
	[
		"neon",
		[
			[5.68,0.377,0,0,0.978,112.5,0.978],
			[6.3,0.377,0,0,0.2869,112.8,0.2869],
			[45.6,0.377,0,0,0.9998,135.3,0.9998],
			[46.42,0.377,0,0,1.,135.8,1.],
			[51.11,0.377,0,0,1.,139.,1.],
			[52.76,0.377,0,0,0.6194,140.1,0.6194],
			[56.11,0.377,0,0,1.,142.5,1.],
			[75.48,0.377,0,0,1.,157.4,1.],
			[82.61,0.377,0,0,1.,163.5,1.],
			[94.23,0.377,0,0,0.9994,174.2,0.9994],
			[96.76,0.377,0,0,1.,176.7,1.],
			[97.59,0.377,0,0,1.,177.6,1.],
			[107.1,0.4302,0,0,1.,187.4,1.],
			[132.2,0.6196,0,0,0.8427,217.8,0.8427],
			[134.8,0.6393,0,0,0.3286,221.4,0.3286],
			[140.1,0.6806,0,0,0.9953,228.9,0.9953],
			[149.3,0.8528,0,0,1.,243.,1.],
			[155.5,0.9625,0,0,0.3286,253.1,0.3286],
			[159.7,0.9977,0,0,1.,260.4,1.],
			[161.7,1.,0,0,0.9953,263.9,0.9953],
			[166.6,1.,0,0,0.9989,272.9,0.9989],
			[167.2,1.,0,0,0.6039,274.,0.6039],
			[168.6,1.,0,0,0.3286,276.7,0.3286],
			[172.6,1.,0,0,0.2657,284.5,0.2657],
			[173.4,1.,0,0,0.9953,286.,0.9953],
			[174.1,1.,0,0,0.227,287.6,0.227],
			[175.3,1.,0,0,0.2335,290.,0.2335],
			[178.3,1.,0,0,0.9989,296.3,0.9989],
			[179.5,1.,0,0,0.255,298.8,0.255],
			[181.6,1.,0,0,0.4755,303.3,0.4755],
			[182.5,1.,0,0,0.2974,305.4,0.2974],
			[183.6,1.,0,0,0.9953,307.9,0.9953],
			[184.8,1.,0,0,0.3286,310.5,0.3286],
			[185.7,1.,0,0,0.9981,312.6,0.9981],
			[190.4,1.,0.02131,0,0.6039,323.6,0.6039],
			[192.6,1.,0.1425,0,0.9953,329.,0.9953],
			[197.,1.,0.3461,0,0.9953,340.2,0.9953],
			[201.2,1.,0.4759,0,0.345,351.4,0.345],
			[202.5,1.,0.5036,0,0.9981,354.9,0.9981],
			[203.5,1.,0.5259,0,0.913,357.6,0.913],
			[205.5,1.,0.5707,0,0.8427,363.3,0.8427],
			[206.4,1.,0.5893,0,0.2763,365.8,0.2763],
			[208.4,1.,0.6338,0,0.8492,371.6,0.8492],
			[209.6,1.,0.6604,0,0.24,375.2,0.24],
			[211.8,1.,0.71,0,0.9953,381.9,0.9953],
			[212.7,1.,0.7303,0,0.8961,384.7,0.8961],
			[214.8,1.,0.7751,0,1.,391.1,1.],
			[217.9,1.,0.8441,0,0.8961,401.1,0.8961],
			[218.8,1.,0.8644,0,0.6778,404.1,0.6778],
			[219.6,1.,0.8815,0,0.8961,406.7,0.8961],
			[223.6,1.,0.9327,0,0.9712,420.5,0.9712],
			[225.2,1.,0.9508,0,0.8931,426.1,0.8931],
			[228.1,0.9743,0.9822,0,0.9684,436.8,0.9684],
			[231.1,0.8934,1.,0,0.3794,448.,0.3794],
			[234.4,0.7831,1.,0,0.934,460.9,0.934],
			[243.7,0.3384,1.,0,0.9597,500.4,0.9597],
			[246.4,0.1924,1.,0,0.2763,512.8,0.2763],
			[255.2,0,1.,0,0.345,555.6,0.345],
			[256.6,0,1.,0,0.5205,563.3,0.5205],
			[258.5,0,1.,0,0.748,573.4,0.748],
			[259.9,0,1.,0,1.,581.2,1.],
			[262.7,0,1.,0,0.2763,596.5,0.2763],
			[263.9,0,1.,0,0.4937,603.6,0.4937],
			[264.5,0,1.,0,0.6346,606.9,0.6346],
			[265.7,0,1.,0,1.,614.5,1.],
			[266.9,0,1.,0,0.9383,621.4,0.9383],
			[270.2,0,1.,0,0.3286,641.7,0.3286],
			[279.5,0,1.,0,0.4718,704.4,0.4718],
			[280.7,0,0.9988,0.02541,0.6566,713.5,0.6566],
			[281.1,0,0.998,0.04153,0.3327,716.7,0.3327],
			[284.6,0,0.9919,0.165,0.5379,742.5,0.5379],
			[285.5,0,0.9902,0.1992,0.9967,749.9,0.9967],
			[287.8,0,0.9862,0.2816,0.6479,768.,0.6479],
			[288.4,0,0.985,0.305,0.5379,773.3,0.5379],
			[291.9,0,0.9715,0.4182,0.409,802.5,0.409],
			[296.4,0,0.946,0.5518,0.9745,842.9,0.9745],
			[299.5,0,0.9289,0.6417,0.8835,871.6,0.8835],
			[300.5,0,0.9234,0.6705,0.3834,881.1,0.3834],
			[302.6,0,0.9115,0.7327,0.3593,902.1,0.3593],
			[304.3,0,0.9017,0.784,0.9998,919.9,0.9998],
			[306.4,0,0.8602,0.8221,0.3286,941.5,0.3286],
			[310.7,0,0.7416,0.8782,0.9252,989.2,0.9252],
			[311.5,0,0.7185,0.8892,0.9985,998.8,0.9985],
			[313.4,0,0.6656,0.9142,0.7969,1021.,0.7969],
			[314.7,0,0.6302,0.931,0.3794,1037.,0.3794],
			[315.5,0,0.6089,0.9411,0.2443,1046.,0.2443],
			[316.3,0,0.5873,0.9513,0.8427,1056.,0.8427],
			[317.4,0,0.5564,0.9659,1.,1070.,1.],
			[318.4,0,0.5275,0.9796,0.9798,1084.,0.9798],
			[321.,0,0.4618,1.,0.8661,1117.,0.8661],
			[321.3,0,0.4542,1.,1.,1122.,1.],
			[324.6,0,0.3772,1.,0.9782,1168.,0.9782],
			[325.,0,0.3664,1.,0.6039,1174.,0.6039],
			[327.6,0,0.2665,1.,0.6117,1212.,0.6117],
			[328.7,0,0.2258,1.,1.,1229.,1.],
			[329.4,0,0.1999,1.,1.,1239.,1.],
			[331.7,0,0.1175,1.,0.6595,1275.,0.6595],
			[332.2,0,0.09729,1.,0.8931,1284.,0.8931],
			[333.6,0,0.04926,1.,0.6914,1307.,0.6914],
			[334.4,0,0.0201,1.,0.7175,1321.,0.7175],
			[335.5,0.01342,0,1.,0.8325,1338.,0.8325],
			[336.3,0.03703,0,1.,0.4662,1353.,0.4662],
			[337.2,0.0615,0,1.,0.3933,1368.,0.3933],
			[338.4,0.09694,0,1.,0.3794,1390.,0.3794],
			[339.1,0.1157,0,1.,0.4303,1402.,0.4303],
			[341.8,0.1919,0,1.,0.6736,1452.,0.6736],
			[342.5,0.2134,0,1.,0.748,1467.,0.748],
			[343.4,0.2371,0,1.,0.2784,1483.,0.2784],
			[344.6,0.2714,0,1.,0.2614,1508.,0.2614],
			[345.7,0.297,0,1.,0.2784,1530.,0.2784],
			[346.2,0.3086,0,1.,1.,1542.,1.],
			[347.3,0.331,0,1.,0.4207,1565.,0.4207],
			[348.4,0.3537,0,1.,0.6148,1589.,0.6148],
			[350.7,0.3922,0,1.,0.5152,1639.,0.5152],
			[351.4,0.3984,0,1.,0.8116,1653.,0.8116],
			[352.5,0.4091,0,1.,0.2593,1679.,0.2593],
			[353.6,0.4202,0,1.,0.4847,1706.,0.4847],
			[356.6,0.4491,0,1.,0.2335,1779.,0.2335],
			[357.6,0.4582,0,1.,0.9834,1803.,0.9834],
			[360.5,0.481,0,1.,0.2636,1879.,0.2636],
			[363.7,0.4788,0,1.,0.2292,1968.,0.2292],
			[366.5,0.4769,0,1.,0.27,2051.,0.27],
			[369.5,0.4748,0,1.,0.2357,2144.,0.2357],
			[372.6,0.4501,0,0.9486,0.411,2246.,0.411],
			[373.1,0.4448,0,0.9375,0.3245,2265.,0.3245],
			[382.5,0.3558,0,0.7498,0.3734,2621.,0.3734],
			[393.3,0.253,0,0.5333,0.2869,3127.,0.2869]
		]
	]	
];