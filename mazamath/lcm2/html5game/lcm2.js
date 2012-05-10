var JSON_game = {
	Extensions: [	{
		jsFiles:["multiplayer.js"]
}
],
	Sounds: [
	    {
		pName: "snd_monkey",
		kind: 3,
		extension: ".mp3",
		origName: "snd_monkey",
		effects: 0,
		volume: 1,
		pan: 0,
		preload: true
	    },
	    {
		pName: "snd_me",
		kind: 3,
		extension: ".mp3",
		origName: "snd_me",
		effects: 0,
		volume: 1,
		pan: 0,
		preload: true
	    },
	    {
		pName: "snd_wood",
		kind: 0,
		extension: ".wav",
		origName: "snd_wood",
		effects: 0,
		volume: 1,
		pan: 0,
		preload: true
	    },
	    {
		pName: "snd_explosion",
		kind: 0,
		extension: ".wav",
		origName: "snd_explosion",
		effects: 0,
		volume: 1,
		pan: 0,
		preload: true
	    },
	    {
		pName: "snd_click",
		kind: 0,
		extension: ".wav",
		origName: "snd_click",
		effects: 0,
		volume: 1,
		pan: 0,
		preload: true
	    },
	    {
		pName: "snd_applause",
		kind: 0,
		extension: ".wav",
		origName: "snd_applause",
		effects: 0,
		volume: 1,
		pan: 0,
		preload: true
	    },
	    {
		pName: "snd_celebrate",
		kind: 2,
		extension: ".mp3",
		origName: "snd_celebrate",
		effects: 0,
		volume: 0.86,
		pan: 0,
		preload: true
	    },
	    {
		pName: "snd_shout1",
		kind: 0,
		extension: ".WAV",
		origName: "snd_shout1",
		effects: 0,
		volume: 1,
		pan: 0,
		preload: true
	    },
	    {
		pName: "snd_shout2",
		kind: 0,
		extension: ".WAV",
		origName: "snd_shout2",
		effects: 0,
		volume: 1,
		pan: 0,
		preload: true
	    },
	    {
		pName: "snd_shout3",
		kind: 0,
		extension: ".WAV",
		origName: "snd_shout3",
		effects: 0,
		volume: 1,
		pan: 0,
		preload: true
	    },
	    {
		pName: "snd_shout4",
		kind: 0,
		extension: ".WAV",
		origName: "snd_shout4",
		effects: 0,
		volume: 1,
		pan: 0,
		preload: true
	    }	],
	Sprites: [
	    {
		pName: "spr_wood",
		width: 32, height: 32,
		smooth: false,
		colCheck: true,
		bboxLeft: 5, bboxRight: 26, bboxBottom: 31,		TPEntryIndex: [ 0],
		Masks: [ 
[	0x7E,0x07,0xFF,0xFF,0xE0,0x07,0xFF,0xFF,0xE0,0x07,0xFF,0xFF,0xE0,0x07,0xFF,0xFF,0xE0,0x07,0xFF,0xFF,0xE0,0x07,0xFF,0xFF,0xE0,0x03,0xFF,0xFF,0xC0,0x03,0xFF,0xFF,
	0xC0,0x03,0xFF,0xFF,0xC0,0x03,0xFF,0xFF,0xC0,0x03,0xFF,0xFF,0xC0,0x03,0xFF,0xFF,0xC0,0x03,0xFF,0xFF,0xC0,0x03,0xFF,0xFF,0xC0,0x03,0xFF,0xFF,0xC0,0x03,0xFF,0xFF,
	0xC0,0x03,0xFF,0xFF,0xC0,0x03,0xFF,0xFF,0xC0,0x03,0xFF,0xFF,0xC0,0x03,0xFF,0xFF,0xC0,0x03,0xFF,0xFF,0xC0,0x03,0xFF,0xFF,0xC0,0x03,0xFF,0xFF,0xC0,0x07,0xFF,0xFF,
	0xC0,0x07,0xFF,0xFF,0xC0,0x07,0xFF,0xFF,0xC0,0x07,0xFF,0xFF,0xE0,0x07,0xFF,0xFF,0xE0,0x07,0xFF,0xFF,0xE0,0x07,0xFF,0xFF,0xE0,0x07,0xFF,0xFF,0xE0,0x07,0xFF,0xFF,
	0x00,0xE0]
]
	    },
	    {
		pName: "spr_island1",
		width: 64, height: 65,
		smooth: false,
		colCheck: true,
		bboxLeft: 3, bboxRight: 50, bboxTop: 4, bboxBottom: 55,		TPEntryIndex: [ 1],
		Masks: [ 
[	0xA0,0x00,0x00,0x3F,0x85,0x00,0x02,0x01,0xFF,0xE0,0x84,0x00,0x02,0x03,0xFF,0xF0,0x84,0x00,0x02,0x03,0xFF,0xF8,0x84,0x00,0x02,0x07,0xFF,0xFC,0x84,0x00,0x02,0x07,
	0xFF,0xFC,0x84,0x00,0x02,0x07,0xFF,0xFC,0x84,0x00,0x02,0x0F,0xFF,0xF8,0x84,0x00,0x02,0x0F,0xFF,0xF0,0x84,0x00,0x02,0x1F,0xFF,0x80,0x84,0x00,0x01,0x1F,0xFC,0x85,
	0x00,0x04,0x1F,0xFE,0x00,0x1F,0x80,0x82,0x00,0x04,0x0F,0xFE,0x00,0xBF,0xFC,0x82,0x00,0x0D,0x0F,0xF0,0x01,0xFF,0xFF,0xC0,0x00,0x00,0x02,0x10,0x01,0xFF,0xFF,0xF0,
	0x83,0x00,0x03,0x07,0xFF,0xFF,0xF8,0x83,0x00,0x03,0x07,0xFF,0xFF,0xFE,0x83,0x00,0x00,0x0F,0x82,0xFF,0x00,0x80,0x82,0x00,0x00,0x17,0x82,0xFF,0x00,0xC0,0x82,0x00,
	0x00,0x2F,0x82,0xFF,0x00,0xC0,0x82,0x00,0x00,0x1F,0x82,0xFF,0x00,0xE0,0x82,0x00,0x00,0x0F,0x82,0xFF,0x00,0xC0,0x82,0x00,0x00,0x1F,0x82,0xFF,0x00,0xE0,0x82,0x00,
	0x00,0x5F,0x82,0xFF,0x00,0xE0,0x82,0x00,0x00,0x7F,0x82,0xFF,0x00,0xE0,0x82,0x00,0x00,0x7F,0x82,0xFF,0x00,0xE0,0x82,0x00,0x00,0x7F,0x82,0xFF,0x00,0xC0,0x82,0x00,
	0x00,0xDF,0x82,0xFF,0x00,0xC0,0x82,0x00,0x83,0xFF,0x00,0x80,0x82,0x00,0x82,0xFF,0x00,0xFE,0x82,0x00,0x00,0x01,0x82,0xFF,0x00,0xF8,0x82,0x00,0x00,0x01,0x82,0xFF,
	0x00,0x90,0x82,0x00,0x00,0x03,0x82,0xFF,0x00,0xD0,0x82,0x00,0x00,0x03,0x82,0xFF,0x00,0xE8,0x82,0x00,0x00,0x03,0x82,0xFF,0x00,0xF0,0x82,0x00,0x00,0x02,0x82,0xFF,
	0x00,0xF0,0x82,0x00,0x00,0x01,0x82,0xFF,0x00,0xF0,0x82,0x00,0x00,0x01,0x82,0xFF,0x00,0xFC,0x82,0x00,0x00,0x01,0x82,0xFF,0x00,0xFC,0x82,0x00,0x00,0x01,0x82,0xFF,
	0x00,0xFC,0x82,0x00,0x00,0x01,0x82,0xFF,0x00,0xF0,0x82,0x00,0x00,0x01,0x82,0xFF,0x00,0xF8,0x82,0x00,0x00,0x01,0x82,0xFF,0x00,0xF0,0x82,0x00,0x00,0x01,0x82,0xFF,
	0x00,0xE0,0x83,0x00,0x03,0xFF,0xFF,0xFB,0xC0,0x83,0x00,0x02,0x7F,0xFF,0xFC,0x84,0x00,0x02,0x3F,0xFF,0xE6,0x84,0x00,0x02,0x1F,0xFF,0xC8,0x84,0x00,0x02,0x01,0xFF,
	0xE8,0x85,0x00,0x01,0x04,0xC0,0x85,0x00,0x01,0x0F,0xC0,0x85,0x00,0x00,0x06,0xCB,0x00]
]
	    },
	    {
		pName: "spr_island2",
		width: 64, height: 65,
		smooth: false,
		colCheck: true,
 bboxRight: 63, bboxTop: 2, bboxBottom: 61,		TPEntryIndex: [ 2],
		Masks: [ 
[	0x91,0x00,0x01,0x01,0xF8,0x83,0x00,0x03,0x01,0x80,0x07,0xFC,0x84,0x00,0x02,0x1F,0xFF,0xFC,0x84,0x00,0x02,0xFF,0xFF,0xFC,0x83,0x00,0x03,0x01,0xFF,0xFF,0xFE,0x83,
	0x00,0x03,0x03,0xFF,0xFF,0xFE,0x83,0x00,0x00,0x0F,0x82,0xFF,0x83,0x00,0x00,0x07,0x82,0xFF,0x04,0x80,0x30,0x00,0x00,0x0F,0x82,0xFF,0x04,0xC0,0x78,0x00,0x00,0x0F,
	0x83,0xFF,0x03,0xFC,0x00,0x00,0x0F,0x83,0xFF,0x03,0xFE,0x00,0x00,0x0F,0x84,0xFF,0x02,0x00,0x00,0x07,0x84,0xFF,0x02,0x00,0x00,0x03,0x84,0xFF,0x02,0x80,0x00,0x03,
	0x84,0xFF,0x02,0xC0,0x00,0x03,0x84,0xFF,0x02,0xE0,0x00,0x07,0x84,0xFF,0x02,0xF0,0x00,0x07,0x84,0xFF,0x02,0xF0,0x00,0x03,0x84,0xFF,0x02,0xF8,0x00,0x07,0x84,0xFF,
	0x02,0xF8,0x00,0x07,0x84,0xFF,0x02,0xF8,0x00,0x07,0x84,0xFF,0x02,0xF8,0x00,0x0F,0x84,0xFF,0x02,0xF8,0x00,0x0F,0x84,0xFF,0x02,0xFC,0x00,0x1F,0x84,0xFF,0x02,0xFC,
	0x00,0x1F,0x84,0xFF,0x02,0xFE,0x00,0x1F,0x85,0xFF,0x01,0x80,0x1F,0x85,0xFF,0x01,0xE0,0x3F,0x85,0xFF,0x01,0xF8,0x3F,0x85,0xFF,0x01,0xF8,0x3F,0x85,0xFF,0x01,0xFC,
	0x3F,0x85,0xFF,0x01,0xFC,0x3F,0x85,0xFF,0x01,0xFC,0x3F,0x85,0xFF,0x01,0xFC,0x7F,0x85,0xFF,0x01,0xFE,0x7F,0xC6,0xFF,0x00,0x7F,0x85,0xFF,0x01,0xFE,0x7F,0x85,0xFF,
	0x01,0xFC,0x7F,0x85,0xFF,0x01,0xF8,0x7F,0x85,0xFF,0x01,0xF8,0x3F,0x85,0xFF,0x01,0xFC,0x3F,0x85,0xFF,0x01,0xE8,0x3F,0x85,0xFF,0x01,0xE0,0x1F,0x85,0xFF,0x01,0xE0,
	0x0F,0x82,0xFF,0x04,0xFE,0xFF,0xFF,0xC0,0x1F,0x82,0xFF,0x04,0xFC,0x3F,0xFF,0xC0,0x0F,0x82,0xFF,0x04,0xF8,0x03,0xFC,0x80,0x03,0x82,0xFF,0x00,0xF4,0x83,0x00,0x03,
	0x1F,0xFF,0xFF,0xFD,0x83,0x00,0x03,0x0F,0xBF,0xFF,0xF8,0x83,0x00,0x03,0x1F,0xFB,0xFF,0xB8,0x83,0x00,0x02,0x08,0x3C,0x3F,0x9B,0x00]
]
	    },
	    {
		pName: "spr_island3",
		width: 64, height: 65,
		smooth: false,
		colCheck: true,
		bboxLeft: 15, bboxRight: 54, bboxTop: 18, bboxBottom: 53,		TPEntryIndex: [ 3],
		Masks: [ 
[	0xFF,0x00,0x91,0x00,0x01,0x03,0xFC,0x85,0x00,0x01,0x07,0xFF,0x85,0x00,0x02,0x1F,0xFF,0xC0,0x84,0x00,0x02,0x3F,0xFF,0xC0,0x84,0x00,0x02,0x3F,0xFF,0xF0,0x84,0x00,
	0x02,0x7F,0xFF,0xF8,0x84,0x00,0x02,0xFF,0xFF,0xFC,0x84,0x00,0x82,0xFF,0x00,0xE0,0x82,0x00,0x00,0x01,0x82,0xFF,0x00,0xFC,0x82,0x00,0x00,0x01,0x82,0xFF,0x00,0xFC,
	0x82,0x00,0x00,0x01,0x82,0xFF,0x00,0xFE,0x82,0x00,0x00,0x01,0x83,0xFF,0x82,0x00,0x00,0x01,0x83,0xFF,0x03,0x80,0x00,0x00,0x01,0x83,0xFF,0x03,0xC0,0x00,0x00,0x01,
	0x83,0xFF,0x03,0xE0,0x00,0x00,0x01,0x83,0xFF,0x03,0xF4,0x00,0x00,0x01,0x83,0xFF,0x03,0xF0,0x00,0x00,0x01,0x83,0xFF,0x00,0xF0,0x82,0x00,0x83,0xFF,0x00,0xFE,0x82,
	0x00,0x83,0xFF,0x00,0xFE,0x82,0x00,0x00,0x7F,0x82,0xFF,0x00,0xFE,0x82,0x00,0x00,0x3F,0x82,0xFF,0x00,0xFE,0x82,0x00,0x00,0x1F,0x82,0xFF,0x00,0xFE,0x82,0x00,0x00,
	0x0F,0x82,0xFF,0x00,0xFE,0x82,0x00,0x00,0x0F,0x82,0xFF,0x00,0xFE,0x82,0x00,0x00,0x07,0x82,0xFF,0x00,0xFC,0x82,0x00,0x00,0x07,0x82,0xFF,0x00,0xFC,0x82,0x00,0x00,
	0x07,0x82,0xFF,0x00,0xF4,0x82,0x00,0x00,0x01,0x82,0xFF,0x00,0xF0,0x83,0x00,0x03,0x1D,0xFF,0xFF,0xE0,0x84,0x00,0x02,0xFF,0xFF,0xC0,0x84,0x00,0x01,0x7F,0xFF,0x85,
	0x00,0x01,0x7F,0xFD,0x85,0x00,0x02,0x0F,0xFF,0x80,0x84,0x00,0x01,0x03,0xFC,0x85,0x00,0x01,0x01,0xB8,0xD9,0x00]
]
	    },
	    {
		pName: "spr_weld",
 height: 64,
		smooth: false,
		bboxLeft: 1, bboxRight: 14, bboxTop: 1, bboxBottom: 63,		TPEntryIndex: [ 4, 5, 6, 7, 8, 8, 7, 6, 5, 4]
	    },
	    {
		pName: "spr_explosion",
		width: 32, height: 32,
		smooth: false,
		colCheck: true,
 bboxRight: 30, bboxTop: 1, bboxBottom: 30,		TPEntryIndex: [ 9, 10, 11, 12, 13, 14, 15],
		Masks: [ 
[	0x84,0x00,0x56,0x03,0x80,0x00,0x00,0x0F,0xF0,0x00,0x00,0x0F,0xF8,0x00,0x3F,0x3F,0xFF,0x00,0x7F,0xFF,0xFF,0x80,0x7F,0xFF,0xFF,0xF0,0x7F,0xFF,0xFF,0xF0,0x3F,0xFF,
	0xFF,0xF8,0x3F,0xFF,0xFF,0xFC,0x3F,0xFF,0xFF,0xFE,0x1F,0xFF,0xFF,0xFE,0x1F,0xFF,0xFF,0xFE,0x3F,0xFF,0xFF,0xFE,0x7F,0xFF,0xFF,0xFE,0x7F,0xFF,0xFF,0xFC,0x7F,0xFF,
	0xFF,0xFC,0x3F,0xFF,0xFF,0xFC,0x3F,0xFF,0xFF,0xFC,0x3F,0xFF,0xFF,0xFC,0x3F,0xFF,0xFF,0xFC,0x7F,0xFF,0xFF,0xFE,0x7F,0xFF,0xFF,0xFE,0x82,0xFF,0x00,0xFE,0x82,0xFF,
	0x18,0xFE,0x7F,0xFF,0xFF,0xFE,0x3F,0xFF,0xFF,0xFE,0x1F,0xFF,0xFF,0xFC,0x00,0xFF,0xFF,0xF8,0x00,0xFF,0x7F,0xF0,0x00,0x7F,0x00,0x60,0x83,0x00]
]
	    },
	    {
		pName: "spr_bridge",
		width: 128, height: 64,
		smooth: false,
 bboxRight: 127, bboxBottom: 63,		TPEntryIndex: [ 16]
	    },
	    {
		pName: "spr_wood_multiple",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 1, bboxRight: 27, bboxTop: 2, bboxBottom: 31,		TPEntryIndex: [ 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]
	    },
	    {
		pName: "spr_help",
		width: 32, height: 32,
		smooth: false,
 bboxRight: 31, bboxBottom: 31,		TPEntryIndex: [ 49]
	    },
	    {
		pName: "spr_dashboard",
		width: 448, height: 80,
		smooth: false,
 bboxRight: 447, bboxBottom: 79,		TPEntryIndex: [ 50]
	    },
	    {
		pName: "spr_score",
		width: 64, height: 32,
		smooth: false,
		bboxLeft: 3, bboxRight: 37, bboxTop: 10, bboxBottom: 19,		TPEntryIndex: [ 51]
	    },
	    {
		pName: "spr_control",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 6, bboxRight: 28, bboxTop: 3, bboxBottom: 30,		TPEntryIndex: [ 52]
	    },
	    {
		pName: "spr_wait",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 7, bboxRight: 25, bboxTop: 7, bboxBottom: 24,		TPEntryIndex: [ 53, 54, 55, 56, 57, 58, 59, 60, 61, 62]
	    },
	    {
		pName: "spr_left_arrow",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 1, bboxRight: 29, bboxTop: 3, bboxBottom: 28,		TPEntryIndex: [ 63]
	    },
	    {
		pName: "spr_right_arrow",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 2, bboxRight: 30, bboxTop: 3, bboxBottom: 28,		TPEntryIndex: [ 64]
	    },
	    {
		pName: "spr_gem_blue",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 7, bboxRight: 24, bboxTop: 3, bboxBottom: 28,		TPEntryIndex: [ 65]
	    },
	    {
		pName: "spr_gem_green",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 7, bboxRight: 24, bboxTop: 3, bboxBottom: 28,		TPEntryIndex: [ 66]
	    },
	    {
		pName: "spr_gem_purple",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 7, bboxRight: 24, bboxTop: 3, bboxBottom: 28,		TPEntryIndex: [ 67]
	    },
	    {
		pName: "spr_gem_red",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 7, bboxRight: 24, bboxTop: 3, bboxBottom: 28,		TPEntryIndex: [ 68]
	    },
	    {
		pName: "spr_gem_yellow",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 7, bboxRight: 24, bboxTop: 3, bboxBottom: 28,		TPEntryIndex: [ 69]
	    },
	    {
		pName: "spr_sword",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 7, bboxRight: 25, bboxBottom: 31,		TPEntryIndex: [ 70]
	    },
	    {
		pName: "spr_me",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 2, bboxRight: 29, bboxBottom: 31,		TPEntryIndex: [ 71, 72, 73]
	    },
	    {
		pName: "spr_me2",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 2, bboxRight: 29, bboxBottom: 31,		TPEntryIndex: [ 74, 75, 76]
	    },
	    {
		pName: "spr_sinhika",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 1, bboxRight: 30, bboxBottom: 31,		TPEntryIndex: [ 77, 78, 79, 80, 81, 81, 82, 83, 84, 85]
	    },
	    {
		pName: "spr_sinhika_recovering",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 6, bboxRight: 26, bboxBottom: 31,		TPEntryIndex: [ 86, 87]
	    },
	    {
		pName: "spr_green",
		width: 64, height: 64,
		smooth: false,
 bboxRight: 63, bboxBottom: 63,		TPEntryIndex: [ 88]
	    },
	    {
		pName: "spr_red",
		width: 64, height: 64,
		smooth: false,
 bboxRight: 63, bboxBottom: 63,		TPEntryIndex: [ 89]
	    },
	    {
		pName: "spr_lcm",
		width: 64, height: 64,
		smooth: false,
 bboxRight: 63, bboxBottom: 63,		TPEntryIndex: [ 90]
	    },
	    {
		pName: "spr_hcf",
		width: 64, height: 64,
		smooth: false,
 bboxRight: 63, bboxBottom: 63,		TPEntryIndex: [ 91]
	    },
	    {
		pName: "spr_celebrate",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 1, bboxRight: 30, bboxBottom: 31,		TPEntryIndex: [ 92, 93, 94, 92, 92, 93, 94, 92, 92, 93, 94, 92]
	    },
	    {
		pName: "spr_key",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 1, bboxRight: 30, bboxTop: 10, bboxBottom: 31,		TPEntryIndex: [ 95]
	    },
	    {
		pName: "spr_treasure",
		width: 32, height: 32,
		smooth: false,
		bboxLeft: 2, bboxRight: 29, bboxTop: 8, bboxBottom: 30,		TPEntryIndex: [ 96]
	    },
	    {
		pName: "spr_neel",
		width: 439, height: 554,
		smooth: false,
 bboxRight: 438, bboxBottom: 553,		TPEntryIndex: [ 97]
	    },
	    {
		pName: "spr_left",
		width: 32, height: 32,
		smooth: false,
 bboxRight: 31, bboxBottom: 31,		TPEntryIndex: [ 98]
	    },
	    {
		pName: "spr_path",
		width: 32, height: 32,
		smooth: false,
 bboxRight: 31, bboxTop: 8, bboxBottom: 21,		TPEntryIndex: [ 99]
	    },
	    {
		pName: "spr_play",
		width: 64, height: 32,
		smooth: false,
 bboxRight: 63, bboxBottom: 31,		TPEntryIndex: [ 100]
	    },
	    {
		pName: "spr_right",
		width: 32, height: 32,
		smooth: false,
 bboxRight: 31, bboxBottom: 31,		TPEntryIndex: [ 101]
	    },
	    {
		pName: "spr_select",
		width: 64, height: 32,
		smooth: false,
 bboxRight: 63, bboxBottom: 31,		TPEntryIndex: [ 102]
	    },
	    {
		pName: "spr_sound",
		width: 32, height: 32,
		smooth: false,
 bboxRight: 31, bboxBottom: 31,		TPEntryIndex: [ 103]
	    },
	    {
		pName: "spr_sampati",
		width: 175, height: 143,
		smooth: false,
		bboxLeft: 4, bboxRight: 171, bboxTop: 3, bboxBottom: 139,		TPEntryIndex: [ 104]
	    },
	    {
		pName: "spr_ravana",
		width: 164, height: 76,
		smooth: false,
 bboxRight: 163, bboxBottom: 75,		TPEntryIndex: [ 105]
	    },
	    {
		pName: "spr_sita",
		width: 52, height: 108,
		smooth: false,
 bboxRight: 51, bboxBottom: 107,		TPEntryIndex: [ 106]
	    },
	    {
		pName: "spr_hanuman",
		width: 74, height: 128,
		smooth: false,
 bboxRight: 73, bboxBottom: 127,		TPEntryIndex: [ 107]
	    },
	    {
		pName: "spr_sugriva",
		width: 50, height: 69,
		smooth: false,
 bboxRight: 49, bboxBottom: 68,		TPEntryIndex: [ 108]
	    },
	    {
		pName: "spr_whiteboard",
		width: 320, height: 160,
		smooth: false,
 bboxRight: 319, bboxBottom: 159,		TPEntryIndex: [ 109]
	    },
		null	],
	Backgrounds: [
		{ pName: "back_plane", transparent: false, smooth: false, preload: false, TPEntryIndex: 110 },
		{ pName: "back_water", transparent: false, smooth: false, preload: false, TPEntryIndex: 111 },
		{ pName: "back_island1", transparent: false, smooth: false, preload: false, TPEntryIndex: 112 },
		{ pName: "back_island2", transparent: false, smooth: false, preload: false, TPEntryIndex: 113 },
		{ pName: "back_island3", transparent: false, smooth: false, preload: false, TPEntryIndex: 114 },
		{ pName: "bg_HCF", transparent: false, smooth: false, preload: false, TPEntryIndex: 91 },
		{ pName: "bg_LCM", transparent: false, smooth: false, preload: false, TPEntryIndex: 90 }	],
	Paths: [
		{ pName: "path_me", kind: 1, closed: false, precision: 4, points : [
{ x:0, y:0, speed:100 },
{ x:32, y:-64, speed:100 },
{ x:80, y:-96, speed:100 },
{ x:112, y:-96, speed:100 },
{ x:128, y:-80, speed:100 },
{ x:160, y:-48, speed:100 },
{ x:160, y:-16, speed:100 },
{ x:112, y:0, speed:100 },
{ x:80, y:-32, speed:100 },
{ x:96, y:-64, speed:100 },
{ x:112, y:-80, speed:100 },
{ x:144, y:-96, speed:100 },
{ x:176, y:-96, speed:100 },
{ x:192, y:-80, speed:100 },
{ x:208, y:-64, speed:100 },
{ x:224, y:-48, speed:100 },
{ x:240, y:-32, speed:100 },
{ x:250, y:0, speed:100 } ]},
		{ pName: "path_monkey", kind: 1, closed: false, precision: 4, points : [
{ x:0, y:0, speed:100 },
{ x:32, y:-64, speed:100 },
{ x:48, y:-112, speed:100 },
{ x:112, y:-48, speed:100 },
{ x:48, y:-32, speed:100 },
{ x:16, y:-96, speed:100 },
{ x:96, y:-112, speed:100 },
{ x:144, y:-112, speed:100 },
{ x:192, y:-64, speed:100 },
{ x:160, y:-48, speed:100 },
{ x:112, y:-64, speed:100 },
{ x:112, y:-96, speed:100 },
{ x:144, y:-96, speed:100 },
{ x:192, y:-112, speed:100 },
{ x:240, y:-64, speed:100 },
{ x:240, y:-48, speed:100 },
{ x:240, y:-32, speed:100 },
{ x:250, y:0, speed:100 },
{ x:256, y:0, speed:100 } ]},
		{ pName: "path0", kind: 0, closed: true, precision: 4, points : [
{ x:48, y:256, speed:100 },
{ x:112, y:208, speed:100 },
{ x:160, y:176, speed:100 },
{ x:144, y:224, speed:100 },
{ x:192, y:208, speed:100 },
{ x:224, y:224, speed:100 },
{ x:240, y:256, speed:100 } ]},
		{ pName: "path1", kind: 0, closed: true, precision: 4, points : [
{ x:64, y:272, speed:100 },
{ x:96, y:144, speed:100 },
{ x:80, y:224, speed:100 },
{ x:112, y:240, speed:100 },
{ x:144, y:224, speed:100 },
{ x:224, y:192, speed:100 },
{ x:192, y:112, speed:100 },
{ x:176, y:160, speed:100 },
{ x:128, y:176, speed:100 },
{ x:192, y:192, speed:100 },
{ x:224, y:128, speed:100 },
{ x:192, y:240, speed:100 },
{ x:256, y:192, speed:100 },
{ x:240, y:224, speed:100 },
{ x:240, y:256, speed:100 },
{ x:272, y:272, speed:100 } ]},
		{ pName: "path2", kind: 0, closed: true, precision: 4, points : [
{ x:48, y:256, speed:100 },
{ x:96, y:224, speed:100 },
{ x:176, y:208, speed:100 },
{ x:144, y:176, speed:100 },
{ x:192, y:192, speed:100 },
{ x:112, y:224, speed:100 },
{ x:240, y:256, speed:100 } ]},
		{ pName: "path3", kind: 0, closed: true, precision: 4, points : [
{ x:48, y:256, speed:100 },
{ x:80, y:208, speed:100 },
{ x:128, y:208, speed:100 },
{ x:144, y:224, speed:100 },
{ x:192, y:192, speed:100 },
{ x:224, y:224, speed:100 },
{ x:240, y:256, speed:100 } ]}	],
	Scripts: [
gml_Script_initialize_stage
,
gml_Script_create_bridge_segments
,
gml_Script_random_int32
,
gml_Script_maza_irandom_range
,
gml_Script_move_sinhika
,
gml_Script_move_player
,
gml_Script_initialize_player
,
gml_Script_create_wood_bridge
,
gml_Script_get_player_me
,
gml_Script_splash_html
,
gml_Script_player_moves_ready
,
gml_Script_get_move
,
gml_Script_get_player_name
,
gml_Script_send_move
,
gml_Script_get_random_seed
,
gml_Script_get_mode
,
gml_Script_initialize_gcd
,
gml_Script_initialize_lcm
,
gml_Script_end_stage
,
gml_Script_end_lcm
,
gml_Script_end_gcd
,
gml_Script_goto_room
,
gml_Script_next_state
,
gml_Script_load_game_narrative
,
gml_Script_load_story
	],
	Fonts: [
		{ pName: "font_multiple", size: 18, bold: true, italic: false, first: 32, last: 127, charset: 0, antialias: 4, fontname: "Arial", TPageEntry: 115, scaleX: 1, scaleY: 1, glyphs: [
			{ i: 32, c: " ", x: 14, y: 113, w: 7, h: 29, shift: 7, offset: 0  },
			{ i: 33, c: "!", x: 205, y: 113, w: 3, h: 23, shift: 7, offset: 2  },
			{ i: 34, c: "\"", x: 169, y: 113, w: 9, h: 12, shift: 11, offset: 1  },
			{ i: 35, c: "#", x: 130, y: 31, w: 14, h: 23, shift: 13, offset: 0  },
			{ i: 36, c: "$", x: 218, y: 61, w: 11, h: 25, shift: 13, offset: 1  },
			{ i: 37, c: "%", x: 217, y: 0, w: 16, h: 24, shift: 18, offset: 1  },
			{ i: 38, c: "&", x: 36, y: 31, w: 16, h: 23, shift: 17, offset: 1  },
			{ i: 39, c: "'", x: 233, y: 113, w: 3, h: 12, shift: 6, offset: 1  },
			{ i: 40, c: "(", x: 73, y: 113, w: 6, h: 28, shift: 8, offset: 1  },
			{ i: 41, c: ")", x: 97, y: 113, w: 6, h: 28, shift: 8, offset: 1  },
			{ i: 42, c: "*", x: 159, y: 113, w: 8, h: 14, shift: 9, offset: 0  },
			{ i: 43, c: "+", x: 210, y: 88, w: 11, h: 21, shift: 14, offset: 1  },
			{ i: 44, c: ",", x: 190, y: 113, w: 3, h: 27, shift: 7, offset: 1  },
			{ i: 45, c: "-", x: 150, y: 113, w: 7, h: 18, shift: 8, offset: 1  },
			{ i: 46, c: ".", x: 215, y: 113, w: 3, h: 23, shift: 7, offset: 1  },
			{ i: 47, c: "/", x: 132, y: 113, w: 7, h: 23, shift: 7, offset: 0  },
			{ i: 48, c: "0", x: 65, y: 88, w: 11, h: 23, shift: 13, offset: 1  },
			{ i: 49, c: "1", x: 123, y: 113, w: 7, h: 23, shift: 13, offset: 2  },
			{ i: 50, c: "2", x: 104, y: 88, w: 11, h: 23, shift: 13, offset: 1  },
			{ i: 51, c: "3", x: 13, y: 88, w: 11, h: 23, shift: 13, offset: 1  },
			{ i: 52, c: "4", x: 120, y: 61, w: 12, h: 23, shift: 13, offset: 0  },
			{ i: 53, c: "5", x: 39, y: 88, w: 11, h: 23, shift: 13, offset: 1  },
			{ i: 54, c: "6", x: 231, y: 61, w: 11, h: 23, shift: 13, offset: 1  },
			{ i: 55, c: "7", x: 244, y: 61, w: 11, h: 23, shift: 13, offset: 1  },
			{ i: 56, c: "8", x: 0, y: 88, w: 11, h: 23, shift: 13, offset: 1  },
			{ i: 57, c: "9", x: 130, y: 88, w: 11, h: 23, shift: 13, offset: 1  },
			{ i: 58, c: ":", x: 200, y: 113, w: 3, h: 23, shift: 7, offset: 2  },
			{ i: 59, c: ";", x: 185, y: 113, w: 3, h: 27, shift: 7, offset: 2  },
			{ i: 60, c: "<", x: 196, y: 88, w: 12, h: 21, shift: 14, offset: 1  },
			{ i: 61, c: "=", x: 235, y: 88, w: 12, h: 18, shift: 14, offset: 1  },
			{ i: 62, c: ">", x: 182, y: 88, w: 12, h: 21, shift: 14, offset: 1  },
			{ i: 63, c: "?", x: 90, y: 61, w: 13, h: 23, shift: 15, offset: 1  },
			{ i: 64, c: "@", x: 0, y: 0, w: 22, h: 29, shift: 23, offset: 1  },
			{ i: 65, c: "A", x: 122, y: 0, w: 17, h: 23, shift: 17, offset: 0  },
			{ i: 66, c: "B", x: 162, y: 31, w: 14, h: 23, shift: 17, offset: 2  },
			{ i: 67, c: "C", x: 54, y: 31, w: 15, h: 23, shift: 17, offset: 1  },
			{ i: 68, c: "D", x: 178, y: 31, w: 14, h: 23, shift: 17, offset: 2  },
			{ i: 69, c: "E", x: 241, y: 31, w: 13, h: 23, shift: 16, offset: 2  },
			{ i: 70, c: "F", x: 190, y: 61, w: 12, h: 23, shift: 15, offset: 2  },
			{ i: 71, c: "G", x: 18, y: 31, w: 16, h: 23, shift: 19, offset: 1  },
			{ i: 72, c: "H", x: 15, y: 61, w: 13, h: 23, shift: 17, offset: 2  },
			{ i: 73, c: "I", x: 210, y: 113, w: 3, h: 23, shift: 7, offset: 2  },
			{ i: 74, c: "J", x: 52, y: 88, w: 11, h: 23, shift: 13, offset: 0  },
			{ i: 75, c: "K", x: 71, y: 31, w: 15, h: 23, shift: 17, offset: 2  },
			{ i: 76, c: "L", x: 134, y: 61, w: 12, h: 23, shift: 15, offset: 2  },
			{ i: 77, c: "M", x: 141, y: 0, w: 17, h: 23, shift: 21, offset: 2  },
			{ i: 78, c: "N", x: 60, y: 61, w: 13, h: 23, shift: 17, offset: 2  },
			{ i: 79, c: "O", x: 0, y: 31, w: 16, h: 23, shift: 18, offset: 1  },
			{ i: 80, c: "P", x: 75, y: 61, w: 13, h: 23, shift: 16, offset: 2  },
			{ i: 81, c: "Q", x: 87, y: 0, w: 17, h: 24, shift: 18, offset: 1  },
			{ i: 82, c: "R", x: 146, y: 31, w: 14, h: 23, shift: 17, offset: 2  },
			{ i: 83, c: "S", x: 210, y: 31, w: 14, h: 23, shift: 16, offset: 1  },
			{ i: 84, c: "T", x: 30, y: 61, w: 13, h: 23, shift: 15, offset: 1  },
			{ i: 85, c: "U", x: 0, y: 61, w: 13, h: 23, shift: 17, offset: 2  },
			{ i: 86, c: "V", x: 160, y: 0, w: 17, h: 23, shift: 16, offset: 0  },
			{ i: 87, c: "W", x: 24, y: 0, w: 23, h: 23, shift: 23, offset: 0  },
			{ i: 88, c: "X", x: 235, y: 0, w: 16, h: 23, shift: 16, offset: 0  },
			{ i: 89, c: "Y", x: 179, y: 0, w: 17, h: 23, shift: 16, offset: -1  },
			{ i: 90, c: "Z", x: 194, y: 31, w: 14, h: 23, shift: 14, offset: 0  },
			{ i: 91, c: "[", x: 81, y: 113, w: 6, h: 28, shift: 8, offset: 2  },
			{ i: 92, c: "\\", x: 114, y: 113, w: 7, h: 23, shift: 7, offset: 0  },
			{ i: 93, c: "]", x: 89, y: 113, w: 6, h: 28, shift: 8, offset: 0  },
			{ i: 94, c: "^", x: 51, y: 113, w: 12, h: 15, shift: 14, offset: 1  },
			{ i: 95, c: "_", x: 106, y: 0, w: 14, h: 28, shift: 14, offset: -1  },
			{ i: 96, c: "`", x: 225, y: 113, w: 6, h: 10, shift: 8, offset: 0  },
			{ i: 97, c: "a", x: 148, y: 61, w: 12, h: 23, shift: 13, offset: 1  },
			{ i: 98, c: "b", x: 162, y: 61, w: 12, h: 23, shift: 15, offset: 2  },
			{ i: 99, c: "c", x: 91, y: 88, w: 11, h: 23, shift: 13, offset: 1  },
			{ i: 100, c: "d", x: 176, y: 61, w: 12, h: 23, shift: 15, offset: 1  },
			{ i: 101, c: "e", x: 156, y: 88, w: 11, h: 23, shift: 13, offset: 1  },
			{ i: 102, c: "f", x: 41, y: 113, w: 8, h: 23, shift: 8, offset: 0  },
			{ i: 103, c: "g", x: 116, y: 31, w: 12, h: 28, shift: 15, offset: 1  },
			{ i: 104, c: "h", x: 117, y: 88, w: 11, h: 23, shift: 15, offset: 2  },
			{ i: 105, c: "i", x: 195, y: 113, w: 3, h: 23, shift: 7, offset: 2  },
			{ i: 106, c: "j", x: 65, y: 113, w: 6, h: 28, shift: 8, offset: -1  },
			{ i: 107, c: "k", x: 143, y: 88, w: 11, h: 23, shift: 13, offset: 2  },
			{ i: 108, c: "l", x: 220, y: 113, w: 3, h: 23, shift: 7, offset: 2  },
			{ i: 109, c: "m", x: 198, y: 0, w: 17, h: 23, shift: 21, offset: 2  },
			{ i: 110, c: "n", x: 26, y: 88, w: 11, h: 23, shift: 15, offset: 2  },
			{ i: 111, c: "o", x: 45, y: 61, w: 13, h: 23, shift: 15, offset: 1  },
			{ i: 112, c: "p", x: 88, y: 31, w: 12, h: 28, shift: 15, offset: 2  },
			{ i: 113, c: "q", x: 102, y: 31, w: 12, h: 28, shift: 15, offset: 1  },
			{ i: 114, c: "r", x: 105, y: 113, w: 7, h: 23, shift: 9, offset: 2  },
			{ i: 115, c: "s", x: 169, y: 88, w: 11, h: 23, shift: 13, offset: 1  },
			{ i: 116, c: "t", x: 141, y: 113, w: 7, h: 23, shift: 8, offset: 0  },
			{ i: 117, c: "u", x: 78, y: 88, w: 11, h: 23, shift: 15, offset: 2  },
			{ i: 118, c: "v", x: 226, y: 31, w: 13, h: 23, shift: 13, offset: 0  },
			{ i: 119, c: "w", x: 49, y: 0, w: 19, h: 23, shift: 19, offset: 0  },
			{ i: 120, c: "x", x: 105, y: 61, w: 13, h: 23, shift: 13, offset: 0  },
			{ i: 121, c: "y", x: 70, y: 0, w: 15, h: 28, shift: 14, offset: -1  },
			{ i: 122, c: "z", x: 223, y: 88, w: 10, h: 23, shift: 12, offset: 1  },
			{ i: 123, c: "{", x: 23, y: 113, w: 7, h: 28, shift: 9, offset: 1  },
			{ i: 124, c: "|", x: 180, y: 113, w: 3, h: 29, shift: 7, offset: 2  },
			{ i: 125, c: "}", x: 32, y: 113, w: 7, h: 28, shift: 9, offset: 1  },
			{ i: 126, c: "~", x: 0, y: 113, w: 12, h: 17, shift: 14, offset: 1  },
			{ i: 127, x: 204, y: 61, w: 12, h: 23, shift: 18, offset: 3  },
			],
		},
		{ pName: "fnt_h", size: 12, bold: false, italic: false, first: 32, last: 127, charset: 0, antialias: 4, fontname: "Comic Sans MS", TPageEntry: 116, scaleX: 1, scaleY: 1, glyphs: [
			{ i: 32, c: " ", x: 223, y: 50, w: 5, h: 23, shift: 5, offset: 0  },
			{ i: 33, c: "!", x: 126, y: 75, w: 2, h: 19, shift: 4, offset: 1  },
			{ i: 34, c: "\"", x: 97, y: 75, w: 6, h: 11, shift: 8, offset: 1  },
			{ i: 35, c: "#", x: 50, y: 0, w: 13, h: 18, shift: 13, offset: 0  },
			{ i: 36, c: "$", x: 120, y: 0, w: 10, h: 21, shift: 11, offset: 0  },
			{ i: 37, c: "%", x: 106, y: 0, w: 12, h: 18, shift: 13, offset: 0  },
			{ i: 38, c: "&", x: 169, y: 0, w: 11, h: 18, shift: 10, offset: 0  },
			{ i: 39, c: "'", x: 151, y: 75, w: 2, h: 11, shift: 6, offset: 2  },
			{ i: 40, c: "(", x: 52, y: 75, w: 5, h: 21, shift: 6, offset: 1  },
			{ i: 41, c: ")", x: 45, y: 75, w: 5, h: 21, shift: 6, offset: 0  },
			{ i: 42, c: "*", x: 67, y: 75, w: 7, h: 12, shift: 9, offset: 1  },
			{ i: 43, c: "+", x: 88, y: 50, w: 8, h: 17, shift: 8, offset: 0  },
			{ i: 44, c: ",", x: 122, y: 75, w: 2, h: 20, shift: 4, offset: 1  },
			{ i: 45, c: "-", x: 90, y: 75, w: 5, h: 14, shift: 7, offset: 1  },
			{ i: 46, c: ".", x: 138, y: 75, w: 2, h: 18, shift: 4, offset: 1  },
			{ i: 47, c: "/", x: 197, y: 25, w: 8, h: 19, shift: 9, offset: 1  },
			{ i: 48, c: "0", x: 149, y: 25, w: 9, h: 18, shift: 10, offset: 0  },
			{ i: 49, c: "1", x: 8, y: 75, w: 6, h: 18, shift: 7, offset: 1  },
			{ i: 50, c: "2", x: 227, y: 25, w: 8, h: 18, shift: 10, offset: 1  },
			{ i: 51, c: "3", x: 161, y: 50, w: 7, h: 18, shift: 10, offset: 1  },
			{ i: 52, c: "4", x: 60, y: 25, w: 10, h: 18, shift: 10, offset: 0  },
			{ i: 53, c: "5", x: 70, y: 50, w: 8, h: 18, shift: 10, offset: 1  },
			{ i: 54, c: "6", x: 10, y: 50, w: 8, h: 18, shift: 10, offset: 1  },
			{ i: 55, c: "7", x: 83, y: 25, w: 9, h: 18, shift: 10, offset: 1  },
			{ i: 56, c: "8", x: 50, y: 50, w: 8, h: 18, shift: 10, offset: 1  },
			{ i: 57, c: "9", x: 187, y: 25, w: 8, h: 19, shift: 10, offset: 1  },
			{ i: 58, c: ":", x: 142, y: 75, w: 2, h: 17, shift: 5, offset: 1  },
			{ i: 59, c: ";", x: 105, y: 75, w: 3, h: 19, shift: 5, offset: 1  },
			{ i: 60, c: "<", x: 83, y: 75, w: 5, h: 16, shift: 6, offset: 1  },
			{ i: 61, c: "=", x: 59, y: 75, w: 6, h: 16, shift: 8, offset: 1  },
			{ i: 62, c: ">", x: 76, y: 75, w: 5, h: 16, shift: 7, offset: 1  },
			{ i: 63, c: "?", x: 125, y: 50, w: 7, h: 19, shift: 9, offset: 1  },
			{ i: 64, c: "@", x: 35, y: 0, w: 13, h: 20, shift: 15, offset: 1  },
			{ i: 65, c: "A", x: 218, y: 0, w: 10, h: 18, shift: 12, offset: 1  },
			{ i: 66, c: "B", x: 30, y: 50, w: 8, h: 18, shift: 10, offset: 1  },
			{ i: 67, c: "C", x: 0, y: 50, w: 8, h: 18, shift: 10, offset: 0  },
			{ i: 68, c: "D", x: 230, y: 0, w: 10, h: 18, shift: 12, offset: 1  },
			{ i: 69, c: "E", x: 179, y: 50, w: 7, h: 18, shift: 10, offset: 1  },
			{ i: 70, c: "F", x: 138, y: 25, w: 9, h: 18, shift: 10, offset: 1  },
			{ i: 71, c: "G", x: 242, y: 0, w: 10, h: 18, shift: 11, offset: 0  },
			{ i: 72, c: "H", x: 194, y: 0, w: 10, h: 18, shift: 12, offset: 1  },
			{ i: 73, c: "I", x: 60, y: 50, w: 8, h: 18, shift: 9, offset: 0  },
			{ i: 74, c: "J", x: 206, y: 0, w: 10, h: 18, shift: 11, offset: 0  },
			{ i: 75, c: "K", x: 207, y: 25, w: 8, h: 18, shift: 10, offset: 1  },
			{ i: 76, c: "L", x: 170, y: 50, w: 7, h: 18, shift: 9, offset: 1  },
			{ i: 77, c: "M", x: 65, y: 0, w: 13, h: 18, shift: 15, offset: 1  },
			{ i: 78, c: "N", x: 92, y: 0, w: 12, h: 18, shift: 13, offset: 0  },
			{ i: 79, c: "O", x: 156, y: 0, w: 11, h: 18, shift: 13, offset: 1  },
			{ i: 80, c: "P", x: 205, y: 50, w: 7, h: 18, shift: 8, offset: 1  },
			{ i: 81, c: "Q", x: 19, y: 0, w: 14, h: 21, shift: 14, offset: 0  },
			{ i: 82, c: "R", x: 105, y: 25, w: 9, h: 18, shift: 11, offset: 1  },
			{ i: 83, c: "S", x: 94, y: 25, w: 9, h: 18, shift: 11, offset: 1  },
			{ i: 84, c: "T", x: 36, y: 25, w: 10, h: 18, shift: 11, offset: 0  },
			{ i: 85, c: "U", x: 48, y: 25, w: 10, h: 18, shift: 12, offset: 1  },
			{ i: 86, c: "V", x: 72, y: 25, w: 9, h: 19, shift: 10, offset: 1  },
			{ i: 87, c: "W", x: 0, y: 0, w: 17, h: 18, shift: 17, offset: 0  },
			{ i: 88, c: "X", x: 24, y: 25, w: 10, h: 18, shift: 12, offset: 1  },
			{ i: 89, c: "Y", x: 0, y: 25, w: 10, h: 18, shift: 11, offset: 0  },
			{ i: 90, c: "Z", x: 12, y: 25, w: 10, h: 18, shift: 12, offset: 1  },
			{ i: 91, c: "[", x: 31, y: 75, w: 5, h: 21, shift: 6, offset: 2  },
			{ i: 92, c: "\\", x: 107, y: 50, w: 7, h: 19, shift: 8, offset: 1  },
			{ i: 93, c: "]", x: 38, y: 75, w: 5, h: 21, shift: 6, offset: 0  },
			{ i: 94, c: "^", x: 110, y: 75, w: 6, h: 9, shift: 8, offset: 1  },
			{ i: 95, c: "_", x: 80, y: 0, w: 10, h: 22, shift: 10, offset: 0  },
			{ i: 96, c: "`", x: 146, y: 75, w: 3, h: 9, shift: 9, offset: 1  },
			{ i: 97, c: "a", x: 247, y: 25, w: 8, h: 18, shift: 8, offset: 0  },
			{ i: 98, c: "b", x: 127, y: 25, w: 9, h: 18, shift: 10, offset: 0  },
			{ i: 99, c: "c", x: 143, y: 50, w: 7, h: 18, shift: 8, offset: 0  },
			{ i: 100, c: "d", x: 116, y: 25, w: 9, h: 18, shift: 9, offset: 0  },
			{ i: 101, c: "e", x: 116, y: 50, w: 7, h: 19, shift: 8, offset: 0  },
			{ i: 102, c: "f", x: 20, y: 50, w: 8, h: 18, shift: 8, offset: 1  },
			{ i: 103, c: "g", x: 178, y: 25, w: 7, h: 22, shift: 8, offset: 0  },
			{ i: 104, c: "h", x: 40, y: 50, w: 8, h: 18, shift: 9, offset: -1  },
			{ i: 105, c: "i", x: 130, y: 75, w: 2, h: 18, shift: 5, offset: 1  },
			{ i: 106, c: "j", x: 80, y: 50, w: 6, h: 23, shift: 8, offset: -2  },
			{ i: 107, c: "k", x: 98, y: 50, w: 7, h: 19, shift: 9, offset: 1  },
			{ i: 108, c: "l", x: 134, y: 75, w: 2, h: 18, shift: 5, offset: 1  },
			{ i: 109, c: "m", x: 143, y: 0, w: 11, h: 18, shift: 12, offset: -1  },
			{ i: 110, c: "n", x: 217, y: 25, w: 8, h: 18, shift: 9, offset: -1  },
			{ i: 111, c: "o", x: 152, y: 50, w: 7, h: 18, shift: 8, offset: 0  },
			{ i: 112, c: "p", x: 160, y: 25, w: 7, h: 23, shift: 9, offset: 1  },
			{ i: 113, c: "q", x: 169, y: 25, w: 7, h: 22, shift: 8, offset: 0  },
			{ i: 114, c: "r", x: 240, y: 50, w: 6, h: 18, shift: 8, offset: 1  },
			{ i: 115, c: "s", x: 16, y: 75, w: 6, h: 18, shift: 7, offset: 0  },
			{ i: 116, c: "t", x: 0, y: 75, w: 6, h: 18, shift: 7, offset: 0  },
			{ i: 117, c: "u", x: 214, y: 50, w: 7, h: 18, shift: 8, offset: 0  },
			{ i: 118, c: "v", x: 134, y: 50, w: 7, h: 19, shift: 8, offset: 0  },
			{ i: 119, c: "w", x: 182, y: 0, w: 10, h: 19, shift: 11, offset: 0  },
			{ i: 120, c: "x", x: 237, y: 25, w: 8, h: 18, shift: 9, offset: 0  },
			{ i: 121, c: "y", x: 132, y: 0, w: 9, h: 23, shift: 9, offset: 0  },
			{ i: 122, c: "z", x: 196, y: 50, w: 7, h: 18, shift: 9, offset: 1  },
			{ i: 123, c: "{", x: 24, y: 75, w: 5, h: 21, shift: 6, offset: 1  },
			{ i: 124, c: "|", x: 118, y: 75, w: 2, h: 21, shift: 7, offset: 3  },
			{ i: 125, c: "}", x: 188, y: 50, w: 6, h: 21, shift: 6, offset: 0  },
			{ i: 126, c: "~", x: 230, y: 50, w: 8, h: 14, shift: 10, offset: 1  },
			{ i: 127, x: 248, y: 50, w: 6, h: 18, shift: 8, offset: 1  },
			],
		}	],
	Timelines: [
	],
	Triggers: [{ },{pName:"lcm_success",moment: 0,constant: "",pFunc:gml_Trigger_lcm_success}
],
	GMObjects: [
		{			pName: "obj_wood",  visible: true,  depth: 100,  parent: -100,  CreateEvent: gml_Object_obj_wood_Create_0,
 DrawEvent: gml_Object_obj_wood_Draw_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_weld",  spriteIndex: 4,  visible: true,  depth: 100,  parent: -100,  CreateEvent: gml_Object_obj_weld_Create_0,
 TriggerEvents: [  ],
 CollisionEvents: [  6, gml_Object_obj_weld_Collision_6, 0, gml_Object_obj_weld_Collision_0 ]
 },
		{			pName: "obj_explosion",  spriteIndex: 5,  visible: true,  parent: -100,  CreateEvent: gml_Object_obj_explosion_Create_0,
 ObjAlarm0: gml_Object_obj_explosion_Alarm_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_controller",  spriteIndex: -1,  visible: true,  persistent: true,  depth: 1000,  parent: -100,  CreateEvent: gml_Object_obj_controller_Create_0,
 StepNormalEvent: gml_Object_obj_controller_Step_0,
 GlobalLeftButtonReleased: gml_Object_obj_controller_Mouse_56,
 GlobalLeftButtonPressed: gml_Object_obj_controller_Mouse_53,
 NoHealthEvent: gml_Object_obj_controller_Other_9,
 StartGameEvent: gml_Object_obj_controller_Other_2,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_dashboard",  spriteIndex: 9,  visible: true,  depth: 1000,  parent: -100,  StartRoomEvent: gml_Object_obj_dashboard_Other_4,
 DrawEvent: gml_Object_obj_dashboard_Draw_0,
 KeyPressed_ALT: gml_Object_obj_dashboard_KeyPress_18,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_spinner",  spriteIndex: -1,  visible: true,  parent: -100,  CreateEvent: gml_Object_obj_spinner_Create_0,
 DrawEvent: gml_Object_obj_spinner_Draw_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_bridge",  spriteIndex: 6,  visible: true,  solid: true,  depth: 10,  parent: -100,  CreateEvent: gml_Object_obj_bridge_Create_0,
 DrawEvent: gml_Object_obj_bridge_Draw_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_wood_multiple",  spriteIndex: 7,  visible: true,  depth: 100,  CreateEvent: gml_Object_obj_wood_multiple_Create_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_help",  spriteIndex: 8,  visible: true,  parent: -100,  ObjAlarm0: gml_Object_obj_help_Alarm_0,
 Key_H: gml_Object_obj_help_Keyboard_72,
 LeftButtonDown: gml_Object_obj_help_Mouse_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_delta_score",  spriteIndex: 10,  visible: true,  parent: -100,  CreateEvent: gml_Object_obj_delta_score_Create_0,
 DrawEvent: gml_Object_obj_delta_score_Draw_0,
 TriggerEvents: [  ],
 CollisionEvents: [  3, gml_Object_obj_delta_score_Collision_3 ]
 },
		{			pName: "obj_score",  spriteIndex: 10,  visible: true,  parent: -100,  DrawEvent: gml_Object_obj_score_Draw_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_client",  spriteIndex: -1,  visible: true,  parent: -100,  StepNormalEvent: gml_Object_obj_client_Step_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_player",  spriteIndex: -1,  parent: -100,  CreateEvent: gml_Object_obj_player_Create_0,
 ObjAlarm1: gml_Object_obj_player_Alarm_1,
 ObjAlarm0: gml_Object_obj_player_Alarm_0,
 StepNormalEvent: gml_Object_obj_player_Step_0,
 GlobalRightButtonReleased: gml_Object_obj_player_Mouse_57,
 GlobalLeftButtonReleased: gml_Object_obj_player_Mouse_56,
 RightButtonPressed: gml_Object_obj_player_Mouse_5,
 LeftButtonPressed: gml_Object_obj_player_Mouse_4,
 EndOfPathEvent: gml_Object_obj_player_Other_8,
 DrawEvent: gml_Object_obj_player_Draw_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_player_B",  spriteIndex: 21,  visible: true,  parent: 12,  CreateEvent: gml_Object_obj_player_B_Create_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_player_A",  spriteIndex: 22,  visible: true,  parent: 12,  CreateEvent: gml_Object_obj_player_A_Create_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_sinhika",  spriteIndex: 23,  visible: true,  parent: -100,  CreateEvent: gml_Object_obj_sinhika_Create_0,
 ObjAlarm0: gml_Object_obj_sinhika_Alarm_0,
 TriggerEvents: [  ],
 CollisionEvents: [  12, gml_Object_obj_sinhika_Collision_12 ]
 },
		{			pName: "obj_control_player",  spriteIndex: 11,  visible: true,  parent: -100,  CreateEvent: gml_Object_obj_control_player_Create_0,
 StepNormalEvent: gml_Object_obj_control_player_Step_0,
 LeftButtonDown: gml_Object_obj_control_player_Mouse_0,
 DrawEvent: gml_Object_obj_control_player_Draw_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_gem",  spriteIndex: 15,  visible: true,  parent: -100,  BoundaryEvent: gml_Object_obj_gem_Other_1,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_sword",  spriteIndex: 20,  visible: true,  parent: -100,  StepNormalEvent: gml_Object_obj_sword_Step_0,
 TriggerEvents: [  ],
 CollisionEvents: [  17, gml_Object_obj_sword_Collision_17 ]
 },
		{			pName: "obj_celebrate",  spriteIndex: 29,  visible: true,  parent: -100,  CreateEvent: gml_Object_obj_celebrate_Create_0,
 ObjAlarm0: gml_Object_obj_celebrate_Alarm_0,
 DrawEvent: gml_Object_obj_celebrate_Draw_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_hcf",  spriteIndex: 28,  parent: -100,  LeftButtonPressed: gml_Object_obj_hcf_Mouse_4,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_lcm",  spriteIndex: 27,  parent: -100,  LeftButtonPressed: gml_Object_obj_lcm_Mouse_4,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_me",  spriteIndex: 21,  visible: true,  parent: -100,  TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_model_controller",  spriteIndex: -1,  visible: true,  parent: -100,  CreateEvent: gml_Object_obj_model_controller_Create_0,
 StartRoomEvent: gml_Object_obj_model_controller_Other_4,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_treasure",  spriteIndex: 31,  visible: true,  depth: 1,  parent: -100,  ObjAlarm0: gml_Object_obj_treasure_Alarm_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_key",  spriteIndex: 30,  visible: true,  parent: -100,  TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_left_arrow",  spriteIndex: 33,  visible: true,  parent: -100,  LeftButtonReleased: gml_Object_obj_left_arrow_Mouse_7,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_neel",  spriteIndex: 32,  visible: true,  parent: -100,  CreateEvent: gml_Object_obj_neel_Create_0,
 DrawEvent: gml_Object_obj_neel_Draw_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_play_game",  spriteIndex: 35,  visible: true,  parent: -100,  LeftButtonReleased: gml_Object_obj_play_game_Mouse_7,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_right_arrow",  spriteIndex: 36,  visible: true,  parent: -100,  LeftButtonReleased: gml_Object_obj_right_arrow_Mouse_7,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_sel_path",  spriteIndex: 37,  visible: true,  parent: -100,  LeftButtonReleased: gml_Object_obj_sel_path_Mouse_7,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_sel_shout",  spriteIndex: 37,  visible: true,  parent: -100,  LeftButtonDown: gml_Object_obj_sel_shout_Mouse_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_snd_left",  spriteIndex: 33,  visible: true,  parent: -100,  LeftButtonReleased: gml_Object_obj_snd_left_Mouse_7,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_snd_right",  spriteIndex: 36,  visible: true,  parent: -100,  LeftButtonReleased: gml_Object_obj_snd_right_Mouse_7,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_snd_play",  spriteIndex: 38,  visible: true,  parent: -100,  LeftButtonReleased: gml_Object_obj_snd_play_Mouse_7,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		{			pName: "obj_whiteboard",  spriteIndex: 44,  visible: true,  parent: -100,  CreateEvent: gml_Object_obj_whiteboard_Create_0,
 ObjAlarm0: gml_Object_obj_whiteboard_Alarm_0,
 LeftButtonDown: gml_Object_obj_whiteboard_Mouse_0,
 DrawEvent: gml_Object_obj_whiteboard_Draw_0,
 TriggerEvents: [  ],
 CollisionEvents: [  ]
 },
		null,
		{			pName: "obj_boundary",  spriteIndex: 4,  parent: -100,  TriggerEvents: [  ],
 CollisionEvents: [  ]
 }	],
	GMRooms: [
		{	
			pName:"lcm",
			width:6400,
			height:480,
			showColour:false,
			enableViews:true,
			backgrounds:[
				{ visible:true,  index:1,  },
				{ },
				{ },
				{ },
				{ },
				{ },
				{ },
				{ }			],
			views:[
				{ visible:true,  hborder:200,  vborder:200,  hspeed:10,  vspeed:10,  index:13  },
				{ visible:true,  hview:64,  hport:64,  index:-100  },
				{ yview:64,  wview:1280,  hview:256,  xport:320,  wport:320,  hport:64,  index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  }			],
			pInstances:[
				{ x:0,  y:0,  index:3,  id:100000,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:0,  y:0,  index:4,  id:100001,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:0,  y:160,  index:6,  id:100002,  pCode: gml_RoomCC_lcm_2_Create,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:0,  y:96,  index:24,  id:100003,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:128,  y:160,  index:14,  id:100004,  pCode: gml_RoomCC_lcm_4_Create,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:0,  y:96,  index:15,  id:100005,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:128,  y:192,  index:13,  id:100006,  pCode: gml_RoomCC_lcm_6_Create,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:0,  y:32,  index:8,  id:100007,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:0,  y:0,  index:10,  id:100008,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:160,  y:0,  index:16,  id:100009,  pCode: gml_RoomCC_lcm_9_Create,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:288,  y:0,  index:16,  id:100010,  pCode: gml_RoomCC_lcm_10_Create,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:416,  y:0,  index:16,  id:100011,  pCode: gml_RoomCC_lcm_11_Create,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:0,  y:0,  index:11,  id:100012,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:0,  y:96,  index:25,  id:100013,  scaleX:1,  scaleY:1,  colour:4294967295  }			],
			tiles:[
				{ x:320 , y:64 , index:2 , w:64 , h:65 , depth:1000000 , id:10000000 , colour:-1  },
				{ x:864 , y:64 , index:2 , w:64 , h:65 , depth:1000000 , id:10000001 , colour:-1  },
				{ x:928 , y:96 , index:2 , w:64 , h:65 , depth:1000000 , id:10000002 , colour:-1  },
				{ x:1344 , y:256 , index:2 , w:64 , h:65 , depth:1000000 , id:10000003 , colour:-1  },
				{ x:1504 , y:224 , index:2 , w:64 , h:65 , depth:1000000 , id:10000004 , colour:-1  },
				{ x:2336 , y:64 , index:2 , w:64 , h:65 , depth:1000000 , id:10000005 , colour:-1  },
				{ x:2432 , y:256 , index:2 , w:64 , h:65 , depth:1000000 , id:10000006 , colour:-1  },
				{ x:2656 , y:96 , index:2 , w:64 , h:65 , depth:1000000 , id:10000007 , colour:-1  },
				{ x:2944 , y:96 , index:2 , w:64 , h:65 , depth:1000000 , id:10000008 , colour:-1  },
				{ x:2880 , y:64 , index:2 , w:64 , h:65 , depth:1000000 , id:10000009 , colour:-1  },
				{ x:3552 , y:288 , index:2 , w:64 , h:65 , depth:1000000 , id:10000010 , colour:-1  },
				{ x:3616 , y:256 , index:2 , w:64 , h:65 , depth:1000000 , id:10000011 , colour:-1  },
				{ x:3712 , y:224 , index:2 , w:64 , h:65 , depth:1000000 , id:10000012 , colour:-1  },
				{ x:3648 , y:96 , index:3 , w:64 , h:65 , depth:1000000 , id:10000013 , colour:-1  },
				{ x:3520 , y:64 , index:3 , w:64 , h:65 , depth:1000000 , id:10000014 , colour:-1  },
				{ x:2560 , y:64 , index:3 , w:64 , h:65 , depth:1000000 , id:10000015 , colour:-1  },
				{ x:1376 , y:64 , index:3 , w:64 , h:65 , depth:1000000 , id:10000016 , colour:-1  },
				{ x:1440 , y:64 , index:3 , w:64 , h:65 , depth:1000000 , id:10000017 , colour:-1  },
				{ x:448 , y:64 , index:3 , w:64 , h:65 , depth:1000000 , id:10000018 , colour:-1  },
				{ x:64 , y:64 , index:3 , w:64 , h:65 , depth:1000000 , id:10000019 , colour:-1  },
				{ x:384 , y:224 , index:4 , w:64 , h:65 , depth:1000000 , id:10000020 , colour:-1  },
				{ x:800 , y:64 , index:4 , w:64 , h:65 , depth:1000000 , id:10000021 , colour:-1  },
				{ x:1056 , y:256 , index:4 , w:64 , h:65 , depth:1000000 , id:10000022 , colour:-1  },
				{ x:1824 , y:64 , index:4 , w:64 , h:65 , depth:1000000 , id:10000023 , colour:-1  },
				{ x:1888 , index:4 , w:64 , h:65 , depth:1000000 , id:10000024 , colour:-1  },
				{ x:1888 , y:64 , index:4 , w:64 , h:65 , depth:1000000 , id:10000025 , colour:-1  },
				{ x:1888 , y:256 , index:4 , w:64 , h:65 , depth:1000000 , id:10000026 , colour:-1  },
				{ x:2784 , y:96 , index:4 , w:64 , h:65 , depth:1000000 , id:10000027 , colour:-1  },
				{ x:2880 , y:288 , index:4 , w:64 , h:65 , depth:1000000 , id:10000028 , colour:-1  },
				{ x:3008 , y:256 , index:4 , w:64 , h:65 , depth:1000000 , id:10000029 , colour:-1  },
				{ x:4096 , y:64 , index:4 , w:64 , h:65 , depth:1000000 , id:10000030 , colour:-1  },
				{ x:3936 , y:64 , index:4 , w:64 , h:65 , depth:1000000 , id:10000031 , colour:-1  },
				{ x:192 , y:288 , index:1 , w:32 , h:32 , depth:1000000 , id:10000032 , colour:-1  }			]	
		}	,
		{	
			pName:"Modelling_Room",
			pCaption:"Welcome to Maza Room",
			width:640,
			height:480,
			backgrounds:[
				{ },
				{ },
				{ },
				{ },
				{ },
				{ },
				{ },
				{ }			],
			views:[
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  }			],
			pInstances:[
				{ x:256,  y:224,  index:21,  id:100014,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:128,  y:224,  index:20,  id:100015,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:32,  y:192,  index:23,  id:100016,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:64,  y:32,  index:35,  id:100017,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:192,  y:320,  index:22,  id:100018,  pCode: gml_RoomCC_Modelling_Room_4_Create,  scaleX:1,  scaleY:1,  colour:4294967295  }			],
			tiles:[
			]	
		}	,
		{	
			pName:"Celebration_Room",
			pCaption:"Welcome to Maza Room",
			width:640,
			height:480,
			pCode: gml_Room_Celebration_Room_Create,
			backgrounds:[
				{ },
				{ },
				{ },
				{ },
				{ },
				{ },
				{ },
				{ }			],
			views:[
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  }			],
			pInstances:[
				{ x:320,  y:288,  index:19,  id:100019,  scaleX:1,  scaleY:1,  colour:4294967295  }			],
			tiles:[
			]	
		}	,
		{	
			pName:"dummy_hcf",
			pCaption:"HCF DUMMY",
			width:640,
			height:480,
			pCode: gml_Room_dummy_hcf_Create,
			backgrounds:[
				{ },
				{ },
				{ },
				{ },
				{ },
				{ },
				{ },
				{ }			],
			views:[
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  }			],
			pInstances:[
				{ x:384,  y:224,  index:22,  id:100020,  scaleX:1,  scaleY:1,  colour:4294967295  }			],
			tiles:[
				{ index:5 , w:64 , h:64 , depth:1000000 , id:10000033 , colour:-1  }			]	
		}	,
		{	
			pName:"home",
			pCaption:"HOME",
			width:930,
			height:550,
			backgrounds:[
				{ },
				{ },
				{ },
				{ },
				{ },
				{ },
				{ },
				{ }			],
			views:[
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  },
				{ index:-100  }			],
			pInstances:[
				{ x:0,  y:32,  index:27,  id:100021,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:576,  y:256,  index:26,  id:100022,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:640,  y:256,  index:29,  id:100023,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:576,  y:384,  index:32,  id:100024,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:640,  y:384,  index:33,  id:100025,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:768,  y:384,  index:31,  id:100026,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:768,  y:256,  index:30,  id:100027,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:832,  y:480,  index:28,  id:100028,  scaleX:1,  scaleY:1,  colour:4294967295  },
				{ x:704,  y:384,  index:34,  id:100029,  scaleX:1,  scaleY:1,  colour:4294967295  }			],
			tiles:[
			]	
		}		],
	RoomOrder: [0,1,2,3,4	],
	TPageEntries: [
		{ x:518, y:762, w:22, h:32, XOffset:5, YOffset:0, CropWidth:22, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:666, y:86, w:48, h:52, XOffset:3, YOffset:4, CropWidth:48, CropHeight:52, ow:64, oh:65, tp:0},
		{ x:598, y:86, w:64, h:60, XOffset:0, YOffset:2, CropWidth:64, CropHeight:60, ow:64, oh:65, tp:0},
		{ x:970, y:78, w:40, h:36, XOffset:15, YOffset:18, CropWidth:40, CropHeight:36, ow:64, oh:65, tp:0},
		{ x:498, y:694, w:14, h:63, XOffset:1, YOffset:1, CropWidth:14, CropHeight:63, ow:16, oh:64, tp:0},
		{ x:498, y:762, w:14, h:63, XOffset:1, YOffset:1, CropWidth:14, CropHeight:63, ow:16, oh:64, tp:0},
		{ x:514, y:370, w:14, h:63, XOffset:1, YOffset:1, CropWidth:14, CropHeight:63, ow:16, oh:64, tp:0},
		{ x:518, y:694, w:14, h:63, XOffset:1, YOffset:1, CropWidth:14, CropHeight:63, ow:16, oh:64, tp:0},
		{ x:518, y:218, w:14, h:63, XOffset:1, YOffset:1, CropWidth:14, CropHeight:63, ow:16, oh:64, tp:0},
		{ x:446, y:546, w:11, h:11, XOffset:11, YOffset:13, CropWidth:11, CropHeight:11, ow:32, oh:32, tp:0},
		{ x:566, y:222, w:21, h:18, XOffset:6, YOffset:7, CropWidth:21, CropHeight:18, ow:32, oh:32, tp:0},
		{ x:518, y:318, w:27, h:25, XOffset:3, YOffset:4, CropWidth:27, CropHeight:25, ow:32, oh:32, tp:0},
		{ x:718, y:122, w:30, h:30, XOffset:1, YOffset:1, CropWidth:30, CropHeight:30, ow:32, oh:32, tp:0},
		{ x:210, y:986, w:30, h:29, XOffset:0, YOffset:1, CropWidth:30, CropHeight:29, ow:32, oh:32, tp:0},
		{ x:470, y:986, w:29, h:27, XOffset:1, YOffset:3, CropWidth:29, CropHeight:27, ow:32, oh:32, tp:0},
		{ x:518, y:798, w:26, h:26, XOffset:3, YOffset:4, CropWidth:26, CropHeight:26, ow:32, oh:32, tp:0},
		{ x:326, y:918, w:128, h:64, XOffset:0, YOffset:0, CropWidth:128, CropHeight:64, ow:128, oh:64, tp:0},
		{ x:550, y:582, w:18, h:28, XOffset:7, YOffset:2, CropWidth:18, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:550, y:614, w:18, h:28, XOffset:7, YOffset:2, CropWidth:18, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:554, y:158, w:18, h:28, XOffset:7, YOffset:2, CropWidth:18, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:554, y:814, w:18, h:28, XOffset:7, YOffset:2, CropWidth:18, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:550, y:258, w:19, h:28, XOffset:7, YOffset:2, CropWidth:19, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:546, y:442, w:19, h:28, XOffset:7, YOffset:2, CropWidth:19, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:550, y:782, w:19, h:28, XOffset:7, YOffset:2, CropWidth:19, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:546, y:746, w:20, h:29, XOffset:6, YOffset:2, CropWidth:20, CropHeight:29, ow:32, oh:32, tp:0},
		{ x:538, y:710, w:20, h:30, XOffset:6, YOffset:2, CropWidth:20, CropHeight:30, ow:32, oh:32, tp:0},
		{ x:526, y:830, w:22, h:30, XOffset:5, YOffset:2, CropWidth:22, CropHeight:30, ow:32, oh:32, tp:0},
		{ x:526, y:866, w:22, h:30, XOffset:5, YOffset:2, CropWidth:22, CropHeight:30, ow:32, oh:32, tp:0},
		{ x:518, y:438, w:23, h:30, XOffset:5, YOffset:2, CropWidth:23, CropHeight:30, ow:32, oh:32, tp:0},
		{ x:522, y:542, w:23, h:30, XOffset:5, YOffset:2, CropWidth:23, CropHeight:30, ow:32, oh:32, tp:0},
		{ x:538, y:226, w:21, h:28, XOffset:7, YOffset:2, CropWidth:21, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:546, y:410, w:21, h:28, XOffset:7, YOffset:2, CropWidth:21, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:518, y:286, w:25, h:28, XOffset:3, YOffset:2, CropWidth:25, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:538, y:194, w:22, h:28, XOffset:3, YOffset:2, CropWidth:22, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:526, y:902, w:23, h:28, XOffset:2, YOffset:2, CropWidth:23, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:526, y:934, w:23, h:28, XOffset:2, YOffset:2, CropWidth:23, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:518, y:474, w:24, h:28, XOffset:1, YOffset:2, CropWidth:24, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:522, y:578, w:24, h:28, XOffset:1, YOffset:2, CropWidth:24, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:522, y:610, w:24, h:28, XOffset:1, YOffset:2, CropWidth:24, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:522, y:642, w:24, h:28, XOffset:1, YOffset:2, CropWidth:24, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:554, y:846, w:18, h:28, XOffset:7, YOffset:2, CropWidth:18, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:554, y:878, w:18, h:28, XOffset:7, YOffset:2, CropWidth:18, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:554, y:910, w:18, h:28, XOffset:7, YOffset:2, CropWidth:18, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:562, y:326, w:18, h:28, XOffset:7, YOffset:2, CropWidth:18, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:562, y:646, w:18, h:28, XOffset:7, YOffset:2, CropWidth:18, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:550, y:290, w:18, h:29, XOffset:7, YOffset:2, CropWidth:18, CropHeight:29, ow:32, oh:32, tp:0},
		{ x:546, y:474, w:18, h:29, XOffset:7, YOffset:2, CropWidth:18, CropHeight:29, ow:32, oh:32, tp:0},
		{ x:550, y:510, w:18, h:29, XOffset:7, YOffset:2, CropWidth:18, CropHeight:29, ow:32, oh:32, tp:0},
		{ x:550, y:546, w:18, h:29, XOffset:7, YOffset:2, CropWidth:18, CropHeight:29, ow:32, oh:32, tp:0},
		{ x:718, y:86, w:32, h:32, XOffset:0, YOffset:0, CropWidth:32, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:446, y:2, w:448, h:80, XOffset:0, YOffset:0, CropWidth:448, CropHeight:80, ow:448, oh:80, tp:0},
		{ x:262, y:806, w:35, h:10, XOffset:3, YOffset:10, CropWidth:35, CropHeight:10, ow:64, oh:32, tp:0},
		{ x:534, y:350, w:23, h:28, XOffset:6, YOffset:3, CropWidth:23, CropHeight:28, ow:32, oh:32, tp:0},
		{ x:518, y:350, w:11, h:16, XOffset:11, YOffset:9, CropWidth:11, CropHeight:16, ow:32, oh:32, tp:0},
		{ x:1006, y:118, w:16, h:17, XOffset:8, YOffset:7, CropWidth:16, CropHeight:17, ow:32, oh:32, tp:0},
		{ x:882, y:150, w:17, h:12, XOffset:7, YOffset:9, CropWidth:17, CropHeight:12, ow:32, oh:32, tp:0},
		{ x:566, y:390, w:18, h:13, XOffset:7, YOffset:10, CropWidth:18, CropHeight:13, ow:32, oh:32, tp:0},
		{ x:570, y:742, w:15, h:17, XOffset:10, YOffset:7, CropWidth:15, CropHeight:17, ow:32, oh:32, tp:0},
		{ x:574, y:246, w:12, h:17, XOffset:10, YOffset:7, CropWidth:12, CropHeight:17, ow:32, oh:32, tp:0},
		{ x:570, y:442, w:16, h:17, XOffset:8, YOffset:8, CropWidth:16, CropHeight:17, ow:32, oh:32, tp:0},
		{ x:570, y:466, w:18, h:13, XOffset:8, YOffset:11, CropWidth:18, CropHeight:13, ow:32, oh:32, tp:0},
		{ x:570, y:486, w:18, h:13, XOffset:7, YOffset:9, CropWidth:18, CropHeight:13, ow:32, oh:32, tp:0},
		{ x:566, y:974, w:15, h:17, XOffset:8, YOffset:8, CropWidth:15, CropHeight:17, ow:32, oh:32, tp:0},
		{ x:506, y:986, w:29, h:26, XOffset:1, YOffset:3, CropWidth:29, CropHeight:26, ow:32, oh:32, tp:0},
		{ x:514, y:510, w:29, h:26, XOffset:2, YOffset:3, CropWidth:29, CropHeight:26, ow:32, oh:32, tp:0},
		{ x:562, y:678, w:18, h:26, XOffset:7, YOffset:3, CropWidth:18, CropHeight:26, ow:32, oh:32, tp:0},
		{ x:562, y:710, w:18, h:26, XOffset:7, YOffset:3, CropWidth:18, CropHeight:26, ow:32, oh:32, tp:0},
		{ x:566, y:190, w:18, h:26, XOffset:7, YOffset:3, CropWidth:18, CropHeight:26, ow:32, oh:32, tp:0},
		{ x:566, y:942, w:18, h:26, XOffset:7, YOffset:3, CropWidth:18, CropHeight:26, ow:32, oh:32, tp:0},
		{ x:566, y:358, w:18, h:26, XOffset:7, YOffset:3, CropWidth:18, CropHeight:26, ow:32, oh:32, tp:0},
		{ x:542, y:966, w:19, h:32, XOffset:7, YOffset:0, CropWidth:19, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:818, y:122, w:28, h:31, XOffset:2, YOffset:0, CropWidth:28, CropHeight:31, ow:32, oh:32, tp:0},
		{ x:494, y:838, w:28, h:32, XOffset:2, YOffset:0, CropWidth:28, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:246, y:986, w:28, h:31, XOffset:2, YOffset:0, CropWidth:28, CropHeight:31, ow:32, oh:32, tp:0},
		{ x:850, y:122, w:28, h:31, XOffset:2, YOffset:0, CropWidth:28, CropHeight:31, ow:32, oh:32, tp:0},
		{ x:790, y:86, w:28, h:32, XOffset:2, YOffset:0, CropWidth:28, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:278, y:986, w:28, h:31, XOffset:2, YOffset:0, CropWidth:28, CropHeight:31, ow:32, oh:32, tp:0},
		{ x:146, y:986, w:28, h:32, XOffset:3, YOffset:0, CropWidth:28, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:310, y:986, w:27, h:32, XOffset:3, YOffset:0, CropWidth:27, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:754, y:122, w:28, h:32, XOffset:2, YOffset:0, CropWidth:28, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:342, y:986, w:27, h:32, XOffset:2, YOffset:0, CropWidth:27, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:494, y:874, w:28, h:32, XOffset:1, YOffset:0, CropWidth:28, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:374, y:986, w:27, h:32, XOffset:2, YOffset:0, CropWidth:27, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:822, y:86, w:28, h:32, XOffset:2, YOffset:0, CropWidth:28, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:406, y:986, w:27, h:32, XOffset:3, YOffset:0, CropWidth:27, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:178, y:986, w:28, h:32, XOffset:3, YOffset:0, CropWidth:28, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:538, y:674, w:20, h:31, XOffset:6, YOffset:1, CropWidth:20, CropHeight:31, ow:32, oh:32, tp:0},
		{ x:526, y:158, w:21, h:32, XOffset:6, YOffset:0, CropWidth:21, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:458, y:918, w:64, h:64, XOffset:0, YOffset:0, CropWidth:64, CropHeight:64, ow:64, oh:64, tp:0},
		{ x:446, y:370, w:64, h:64, XOffset:0, YOffset:0, CropWidth:64, CropHeight:64, ow:64, oh:64, tp:0},
		{ x:448, y:440, w:64, h:64, XOffset:0, YOffset:0, CropWidth:64, CropHeight:64, ow:64, oh:64, tp:0},
		{ x:900, y:80, w:64, h:64, XOffset:0, YOffset:0, CropWidth:64, CropHeight:64, ow:64, oh:64, tp:0},
		{ x:438, y:986, w:26, h:32, XOffset:3, YOffset:0, CropWidth:26, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:786, y:122, w:28, h:32, XOffset:3, YOffset:0, CropWidth:28, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:854, y:86, w:28, h:32, XOffset:1, YOffset:0, CropWidth:28, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:666, y:142, w:30, h:11, XOffset:1, YOffset:10, CropWidth:30, CropHeight:11, ow:32, oh:32, tp:0},
		{ x:534, y:382, w:28, h:23, XOffset:2, YOffset:8, CropWidth:28, CropHeight:23, ow:32, oh:32, tp:0},
		{ x:2, y:2, w:439, h:554, XOffset:0, YOffset:0, CropWidth:439, CropHeight:554, ow:439, oh:554, tp:0},
		{ x:70, y:986, w:32, h:32, XOffset:0, YOffset:0, CropWidth:32, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:542, y:1002, w:32, h:14, XOffset:0, YOffset:8, CropWidth:32, CropHeight:14, ow:32, oh:32, tp:0},
		{ x:2, y:986, w:64, h:32, XOffset:0, YOffset:0, CropWidth:64, CropHeight:32, ow:64, oh:32, tp:0},
		{ x:970, y:118, w:32, h:32, XOffset:0, YOffset:0, CropWidth:32, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:446, y:510, w:64, h:32, XOffset:0, YOffset:0, CropWidth:64, CropHeight:32, ow:64, oh:32, tp:0},
		{ x:754, y:86, w:32, h:32, XOffset:0, YOffset:0, CropWidth:32, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:326, y:694, w:168, h:137, XOffset:4, YOffset:3, CropWidth:168, CropHeight:137, ow:175, oh:143, tp:0},
		{ x:326, y:838, w:164, h:76, XOffset:0, YOffset:0, CropWidth:164, CropHeight:76, ow:164, oh:76, tp:0},
		{ x:262, y:694, w:52, h:108, XOffset:0, YOffset:0, CropWidth:52, CropHeight:108, ow:52, oh:108, tp:0},
		{ x:446, y:86, w:74, h:128, XOffset:0, YOffset:0, CropWidth:74, CropHeight:128, ow:74, oh:128, tp:0},
		{ x:970, y:2, w:50, h:69, XOffset:0, YOffset:0, CropWidth:50, CropHeight:69, ow:50, oh:69, tp:0},
		{ x:2, y:822, w:320, h:160, XOffset:0, YOffset:0, CropWidth:320, CropHeight:160, ow:320, oh:160, tp:0},
		{ x:528, y:88, w:64, h:64, XOffset:0, YOffset:0, CropWidth:64, CropHeight:64, ow:64, oh:64, tp:0},
		{ x:108, y:988, w:32, h:32, XOffset:0, YOffset:0, CropWidth:32, CropHeight:32, ow:32, oh:32, tp:0},
		{ x:900, y:4, w:64, h:65, XOffset:0, YOffset:0, CropWidth:64, CropHeight:65, ow:64, oh:65, tp:0},
		{ x:448, y:220, w:64, h:65, XOffset:0, YOffset:0, CropWidth:64, CropHeight:65, ow:64, oh:65, tp:0},
		{ x:448, y:296, w:64, h:65, XOffset:0, YOffset:0, CropWidth:64, CropHeight:65, ow:64, oh:65, tp:0},
		{ x:2, y:562, w:256, h:256, XOffset:0, YOffset:0, CropWidth:256, CropHeight:256, ow:256, oh:256, tp:0},
		{ x:262, y:562, w:256, h:128, XOffset:0, YOffset:0, CropWidth:256, CropHeight:128, ow:256, oh:128, tp:0}	],
	Textures: ["lcm2_texture_0.png"],
	Options: {		debugMode: true,
		gameId: 824535216,
		gameGuid: "83bfbb15-5ff5-4962-8e10-07c474d2c1b1",
		fullScreen: false,
		interpolatePixels: true,
		showCursor: true,
		scale: -1,
		allowFullScreenKey: true,
		freezeOnLostFocus: false,
		showLoadingBar: true,
		displayErrors: true,
		writeErrors: false,
		abortErrors: false,
		variableErrors: true,
		WebGL: 0,
		CreateEventOrder: false
}
};

function gmlConst() {
}
function gmlInitGlobal() {
}

// #####################################################################################################
// // Initialize Stage for Game 
// var xval, yval; 
// create_bridge_segments(global.num_bridge_segments); 
// xval = (global.num_bridge_segments + 1) * global.BRIDGE_WIDTH - obj_player_B.sprite_width; 
// yval = obj_player_B.y; 
// global.problem_value[global.num_bridge_segments] = 0; 
// // 2 minutes == 120s to finish. 
// global.timer = room_speed * 120; 
//  
// // Choose type of problem 
// if (global.problem_type[global.num_bridge_segments] == global.LCM) { 
//   initialize_lcm(xval, yval); 
// } else if (global.problem_type[global.num_bridge_segments] == global.GCD) { 
//   initialize_gcd(xval, yval); 
// } else { 
//   show_message('Unknown problem type: ' + global.problem_type[global.num_bridge_segments]); 
// } 
//  
// with obj_sinhika { 
//   move_sinhika(); 
// } 
//  
// 
function gml_Script_initialize_stage( _inst, _other ){
var gmlxval,gmlyval;
gml_Script_create_bridge_segments( _inst , _other , global.gmlnum_bridge_segments );
gmlxval=(((global.gmlnum_bridge_segments+1)*global.gmlBRIDGE_WIDTH)-yyInst(13).get_sprite_width());
gmlyval=yyInst(13).y;
array_set_1D( global, "__gmlproblem_value__" , global.gmlnum_bridge_segments,  0 );
global.gmltimer=(g_pBuiltIn.room_speed*120);
if ((array_get_1D( global, "__gmlproblem_type__" , global.gmlnum_bridge_segments ) ==global.gmlLCM)) {{
gml_Script_initialize_lcm( _inst , _other , gmlxval, gmlyval );
}
;}
 else {if ((array_get_1D( global, "__gmlproblem_type__" , global.gmlnum_bridge_segments ) ==global.gmlGCD)) {{
gml_Script_initialize_gcd( _inst , _other , gmlxval, gmlyval );
}
;}
 else {{
show_message( ("Unknown problem type: "+array_get_1D( global, "__gmlproblem_type__" , global.gmlnum_bridge_segments ) ) );
}
;};};
{
var __yy__v0 = GetWithArray(15 );
for( var __yy__v1 in __yy__v0 ) {
 var __yy__v2 = __yy__v0[__yy__v1];
{
gml_Script_move_sinhika( __yy__v2 , _inst  );
}
}
}
;
}

// #####################################################################################################
// // Draw bridge segments 
// var num_segments; 
// num_segments = argument0; 
//  
// var xval, yval, i, bridge; 
// yval = obj_player_B.y - obj_player_B.sprite_height; 
// xval = global.BRIDGE_WIDTH; 
//  
// for (i = 0; i < num_segments; i += 1) { 
//   bridge = instance_create(xval, yval, obj_bridge); 
//   bridge.problem_type = global.problem_type[i]; 
//   bridge.problem_value = global.problem_value[i]; 
//   bridge.num1 = global.problem_num1[i]; 
//   bridge.num2 = global.problem_num2[i]; 
//   xval += global.BRIDGE_WIDTH; 
// } 
//  
// 
function gml_Script_create_bridge_segments( _inst, _other , argument0){
var gmlnum_segments;
gmlnum_segments=argument0;
var gmlxval,gmlyval,gmli,gmlbridge;
gmlyval=(yyInst(13).y-yyInst(13).get_sprite_height());
gmlxval=global.gmlBRIDGE_WIDTH;
for (gmli=0 ; (gmli<gmlnum_segments) ; gmli+=1) {
gmlbridge=instance_create( gmlxval, gmlyval, 6 );
yyInst(gmlbridge).gmlproblem_type=array_get_1D( global, "__gmlproblem_type__" , gmli ) ;
yyInst(gmlbridge).gmlproblem_value=array_get_1D( global, "__gmlproblem_value__" , gmli ) ;
yyInst(gmlbridge).gmlnum1=array_get_1D( global, "__gmlproblem_num1__" , gmli ) ;
yyInst(gmlbridge).gmlnum2=array_get_1D( global, "__gmlproblem_num2__" , gmli ) ;
gmlxval+=global.gmlBRIDGE_WIDTH;
}
;
}

// #####################################################################################################
// // Pseudo random number generator parameters 
// // modulus = 2^32 
// var increment, multiplier; 
// multiplier = 1103515245; 
// increment = 12345; 
// // x_n should be seeded 
// global.x_n = (multiplier * global.x_n + increment) & $3FFFFFFF; // bits 30..0 
// return global.x_n; 
//  
// 
function gml_Script_random_int32( _inst, _other ){
var gmlincrement,gmlmultiplier;
gmlmultiplier=1103515245;
gmlincrement=12345;
global.gmlx_n=(((gmlmultiplier*global.gmlx_n)+gmlincrement)&1073741823);
return global.gmlx_n;
}

// #####################################################################################################
// var low, high, gen; 
// low = argument0; 
// high = argument1; 
//  
// gen = random_int32() / $3FFFFFFF; 
// return low + floor(gen * (high - low)); // in range [low, high) 
//  
// 
function gml_Script_maza_irandom_range( _inst, _other , argument0, argument1){
var gmllow,gmlhigh,gmlgen;
gmllow=argument0;
gmlhigh=argument1;
gmlgen=(gml_Script_random_int32( _inst , _other  )/1073741823);
return (gmllow+floor( (gmlgen*(gmlhigh-gmllow)) ));
}

// #####################################################################################################
// //self.y -= maza_irandom_range(2,8) * global.GRID_SPACE_WIDTH; 
// //self.x -= maza_irandom_range(2,8) * global.GRID_SPACE_WIDTH; 
// var player, distrance; 
// player = instance_nearest(self.x, self.y, obj_player); 
// if (player != noone) { 
//   distance = distance_to_point(player.x, player.y); 
//   move_towards_point(player.x, player.y, 2); 
//   self.alarm[0] = distance / 2 + 5; 
// } 
//  
// 
function gml_Script_move_sinhika( _inst, _other ){
var gmlplayer,gmldistrance;
gmlplayer=instance_nearest( _inst , _inst.x, _inst.y, 12 );
if ((gmlplayer!=(-4))) {{
_inst.gmldistance=distance_to_point( _inst , yyInst(gmlplayer).x, yyInst(gmlplayer).y );
move_towards_point( _inst , yyInst(gmlplayer).x, yyInst(gmlplayer).y, 2 );
array_set_1D( _inst, "__alarm__" , 0,  ((_inst.gmldistance/2)+5) );
}
;}
;
}

// #####################################################################################################
// // Move the player - given multiple and direction (-ve multiple indicates backward) 
// self.multiple = get_move(self.player); 
// sound_play(self.sound); 
// self.start_jump_x = self.x; 
// if (path_exists(self.path)) { 
//   path_delete(self.path); 
// } 
//  
// self.jumping = abs(self.multiple) + 1; 
// // Scale the path to match jump size 
// self.path = path_duplicate(self.original_path); 
// var length; 
// length = path_get_x(self.path, 1) - path_get_x(self.path, 0); 
//  
// switch(sign(self.multiple)) { 
//   case 0: 
//     path_scale(self.path, 0, 1); 
//     break; 
//   case -1: 
//     path_scale(self.path, (self.jump * global.GRID_SPACE_WIDTH)/length, 1); 
//     path_shift(self.path, self.multiple * global.GRID_SPACE_WIDTH, 0); 
//     path_reverse(self.path); 
//     break; 
//   case 1: 
//     path_scale(self.path, (self.jump * global.GRID_SPACE_WIDTH)/length, 1); 
//     break;  
// } 
//  
// health -= 2; // uses up energy to move 
// path_start(self.path, 30 /* speed */, 0 /*endaction */,false /* absolute*/); 
// // Having moved, player is no longer ready to move 
// self.move_ready = false; 
//  
// 
function gml_Script_move_player( _inst, _other ){
_inst.gmlmultiple=gml_Script_get_move( _inst , _other , _inst.gmlplayer );
sound_play( _inst.gmlsound );
_inst.gmlstart_jump_x=_inst.x;
if (path_exists( _inst.gmlpath ) > 0.5) {{
path_delete( _inst.gmlpath );
}
;}
;
_inst.gmljumping=(abs( _inst.gmlmultiple )+1);
_inst.gmlpath=path_duplicate( _inst.gmloriginal_path );
var gmllength;
gmllength=(path_get_x( _inst.gmlpath, 1 )-path_get_x( _inst.gmlpath, 0 ));
switch(sign( _inst.gmlmultiple )) {
case 0:
path_scale( _inst.gmlpath, 0, 1 );
break;
case -1:
path_scale( _inst.gmlpath, ((_inst.gmljump*global.gmlGRID_SPACE_WIDTH)/gmllength), 1 );
path_shift( _inst.gmlpath, (_inst.gmlmultiple*global.gmlGRID_SPACE_WIDTH), 0 );
path_reverse( _inst.gmlpath );
break;
case 1:
path_scale( _inst.gmlpath, ((_inst.gmljump*global.gmlGRID_SPACE_WIDTH)/gmllength), 1 );
break;
};
g_pBuiltIn.set_health_function( g_pBuiltIn.health - 2 );
path_start( _inst , _inst.gmlpath, 30, 0, 0 );
_inst.gmlmove_ready=0;
}

// #####################################################################################################
// var xval, num, jump; 
//  
// xval = argument0;     // x-position for player 
// jump = argument1;     // Jump length for player 
//  
// self.x = xval; 
// self.jump = jump; 
// self.count_x = 0; 
// self.min_segment_x = self.x; 
// self.max_segment_x = self.x; 
//  
// 
function gml_Script_initialize_player( _inst, _other , argument0, argument1){
var gmlxval,gmlnum,gmljump;
gmlxval=argument0;
gmljump=argument1;
_inst.setx( gmlxval );
_inst.gmljump=gmljump;
_inst.gmlcount_x=0;
_inst.gmlmin_segment_x=_inst.x;
_inst.gmlmax_segment_x=_inst.x;
}

// #####################################################################################################
// // Create a wooden bridge from (x1, y1) to (x2, y1)  
// var x1, y1, x2, y2, count_x, wood_obj; 
// x1 = argument0; 
// y1 = argument1; 
// x2 = argument2; 
// count_x = argument3; 
// wood_obj = argument4; 
//  
// while (x1 < x2) { 
//   i_wood = instance_create(x1, y1, wood_obj); 
//   i_wood.num = count_x; 
//   count_x += 1; 
//   x1 += global.GRID_SPACE_WIDTH; 
//   wood_obj = obj_wood; 
// } 
//  
// 
function gml_Script_create_wood_bridge( _inst, _other , argument0, argument1, argument2, argument3, argument4){
var gmlx1,gmly1,gmlx2,gmly2,gmlcount_x,gmlwood_obj;
gmlx1=argument0;
gmly1=argument1;
gmlx2=argument2;
gmlcount_x=argument3;
gmlwood_obj=argument4;
while ((gmlx1<gmlx2)) {
_inst.gmli_wood=instance_create( gmlx1, gmly1, gmlwood_obj );
yyInst(_inst.gmli_wood).gmlnum=gmlcount_x;
gmlcount_x+=1;
gmlx1+=global.gmlGRID_SPACE_WIDTH;
gmlwood_obj=0;
}
;
}

// #####################################################################################################
// // Return which player I am 
// switch(get_mode()) { 
//   case global.NOT_BROWSER: return global.player_me; 
//   case global.GM_BROWSER: return global.player_me; 
//   case global.BROWSER: return global.PLAYER_BOTH; // js_getPlayerMe(); 
// } 
// 
function gml_Script_get_player_me( _inst, _other ){
switch(gml_Script_get_mode( _inst , _other  )) {
case global.gmlNOT_BROWSER:
return global.gmlplayer_me;
case global.gmlGM_BROWSER:
return global.gmlplayer_me;
case global.gmlBROWSER:
return global.gmlPLAYER_BOTH;
};
}

// #####################################################################################################
// var splash; 
// splash = argument0; 
// switch(get_mode()) { 
//   case global.NOT_BROWSER:  
//     //splash_show_web(working_directory + "/" + splash, 30000); 
//     break; 
//   case global.GM_BROWSER: 
//   case global.BROWSER: 
// } 
//  
// 
function gml_Script_splash_html( _inst, _other , argument0){
var gmlsplash;
gmlsplash=argument0;
switch(gml_Script_get_mode( _inst , _other  )) {
case global.gmlNOT_BROWSER:
break;
case global.gmlGM_BROWSER:
case global.gmlBROWSER:
};
}

// #####################################################################################################
// // Return true if both players are ready to move 
// if (get_player_me() == global.PLAYER_BOTH) { 
//   if (instance_exists(obj_player_A) && instance_exists(obj_player_B)) { 
//     return obj_player_A.move_ready && obj_player_B.move_ready; 
//   } 
//   return false; 
// } 
//  
// switch(get_mode()) { 
//   case global.NOT_BROWSER: return false; 
//   case global.GM_BROWSER: return false; 
//   case global.BROWSER: return js_isReady(); 
// } 
//  
//  
// 
function gml_Script_player_moves_ready( _inst, _other ){
if ((gml_Script_get_player_me( _inst , _other  )==global.gmlPLAYER_BOTH)) {{
if (((instance_exists( 14 ) > 0.5)&&(instance_exists( 13 ) > 0.5))) {{
return ((yyInst(14).gmlmove_ready > 0.5)&&(yyInst(13).gmlmove_ready > 0.5));
}
;}
;
return 0;
}
;}
;
switch(gml_Script_get_mode( _inst , _other  )) {
case global.gmlNOT_BROWSER:
return 0;
case global.gmlGM_BROWSER:
return 0;
case global.gmlBROWSER:
return js_isReady(  );
};
}

// #####################################################################################################
// // Get Move for player 
// var player; 
// player = argument0; 
//  
// switch(get_mode()) { 
//   case global.NOT_BROWSER:  
//   case global.GM_BROWSER:  
//     if (player == 'A') return obj_player_A.multiple; 
//     if (player == 'B') return obj_player_B.multiple; 
//     return 0;  
//   case global.BROWSER: return js_getMove(player); 
// } 
//  
// 
function gml_Script_get_move( _inst, _other , argument0){
var gmlplayer;
gmlplayer=argument0;
switch(gml_Script_get_mode( _inst , _other  )) {
case global.gmlNOT_BROWSER:
case global.gmlGM_BROWSER:
if ((gmlplayer=="A")) {return yyInst(14).gmlmultiple;}
;
if ((gmlplayer=="B")) {return yyInst(13).gmlmultiple;}
;
return 0;
case global.gmlBROWSER:
return js_getMove( gmlplayer );
};
}

// #####################################################################################################
// // Return name of the player 
// var player; 
// player = argument0; 
// switch(get_mode()) { 
//   case global.NOT_BROWSER: return player; 
//   case global.GM_BROWSER: return player; 
//   case global.BROWSER: return js_getPlayerName(player); 
// } 
//  
// 
function gml_Script_get_player_name( _inst, _other , argument0){
var gmlplayer;
gmlplayer=argument0;
switch(gml_Script_get_mode( _inst , _other  )) {
case global.gmlNOT_BROWSER:
return gmlplayer;
case global.gmlGM_BROWSER:
return gmlplayer;
case global.gmlBROWSER:
return js_getPlayerName( gmlplayer );
};
}

// #####################################################################################################
// // Send Move for player 
// var multiple; 
// multiple = argument0; 
//  
// switch(get_mode()) { 
//   case global.NOT_BROWSER: break; 
//   case global.GM_BROWSER: break; 
//   case global.BROWSER: js_sendMove(multiple); 
// } 
//  
// 
function gml_Script_send_move( _inst, _other , argument0){
var gmlmultiple;
gmlmultiple=argument0;
switch(gml_Script_get_mode( _inst , _other  )) {
case global.gmlNOT_BROWSER:
break;
case global.gmlGM_BROWSER:
break;
case global.gmlBROWSER:
js_sendMove( gmlmultiple );
};
}

// #####################################################################################################
// switch(get_mode()) { 
//   case global.NOT_BROWSER:  
//   case global.GM_BROWSER: return 876238619; 
//   case global.BROWSER: return js_getRandomSeed(); 
// } 
//  
// 
function gml_Script_get_random_seed( _inst, _other ){
switch(gml_Script_get_mode( _inst , _other  )) {
case global.gmlNOT_BROWSER:
case global.gmlGM_BROWSER:
return 876238619;
case global.gmlBROWSER:
return js_getRandomSeed(  );
};
}

// #####################################################################################################
// if (os_browser == browser_not_a_browser) return global.NOT_BROWSER; 
//  
// return global.GM_BROWSER; 
//  
// //return global.BROWSER; 
// 
function gml_Script_get_mode( _inst, _other ){
if ((g_pBuiltIn.get_os_browser()==(-1))) {return global.gmlNOT_BROWSER;}
;
return global.gmlGM_BROWSER;
}

// #####################################################################################################
// // Initialize GCD problem 
// var xval, yval; 
//  
// xval = argument0; 
// yval = argument1; 
//  
// instance_activate_object(obj_key); 
// obj_key.visible = true; 
// instance_activate_object(obj_treasure); 
// obj_treasure.visible = true; 
// instance_deactivate_object(obj_player_A); 
// var rnd, key_rnd, treasure_rnd; 
// rnd[0] = maza_irandom_range(2,10); 
// rnd[1] = maza_irandom_range(2,10); 
// rnd[2] = maza_irandom_range(2,10); 
// key_rnd = rnd[0] * rnd[1]; 
// treasure_rnd = rnd[1] * rnd[2]; 
// if (key_rnd > treasure_rnd) { 
//   var t; 
//   t = treasure_rnd; 
//   treasure_rnd = key_rnd; 
//   key_rnd = t; 
// } 
// obj_treasure.x = xval + treasure_rnd * global.GRID_SPACE_WIDTH; 
// obj_treasure.y = yval - obj_player_B.sprite_height; 
// obj_treasure.num = treasure_rnd; 
// obj_key.x = xval + key_rnd * global.GRID_SPACE_WIDTH; 
// obj_key.y = yval - obj_player_B.sprite_height; 
// obj_key.num = key_rnd; 
// global.problem_num1[global.num_bridge_segments] = treasure_rnd; 
// global.problem_num2[global.num_bridge_segments] = key_rnd; 
// with obj_player { 
//   initialize_player(xval, 0); 
// } 
//  
// create_wood_bridge(obj_player_B.x + global.GRID_SPACE_WIDTH, obj_player_B.y, 
//                    obj_treasure.x + global.GRID_SPACE_WIDTH, 1, obj_wood); 
//                     
// // No idea why we need following line - seems to be bug in GM:HTML5 
// // view_visible[global.DASHBOARD_VIEW] = true; 
// view_visible[global.MAIN_VIEW] = true; 
// // Make the main vie show the treasure 
// view_object[global.MAIN_VIEW] = obj_treasure.id; 
// view_xview[global.MAIN_VIEW] = obj_treasure.x - 3 * global.GRID_SPACE_WIDTH; 
// obj_treasure.alarm[0] = room_speed * 3; // 3 seconds 
//  
// 
function gml_Script_initialize_gcd( _inst, _other , argument0, argument1){
var gmlxval,gmlyval;
gmlxval=argument0;
gmlyval=argument1;
instance_activate_object( _inst , 25 );
yyInst(25).visible=1;
instance_activate_object( _inst , 24 );
yyInst(24).visible=1;
instance_deactivate_object( _inst , 14 );
var gmlrnd,gmlkey_rnd,gmltreasure_rnd;
array_set_1D( _inst, "__gmlrnd__" , 0,  gml_Script_maza_irandom_range( _inst , _other , 2, 10 ) );
array_set_1D( _inst, "__gmlrnd__" , 1,  gml_Script_maza_irandom_range( _inst , _other , 2, 10 ) );
array_set_1D( _inst, "__gmlrnd__" , 2,  gml_Script_maza_irandom_range( _inst , _other , 2, 10 ) );
gmlkey_rnd=(array_get_1D( _inst, "__gmlrnd__" , 0 ) *array_get_1D( _inst, "__gmlrnd__" , 1 ) );
gmltreasure_rnd=(array_get_1D( _inst, "__gmlrnd__" , 1 ) *array_get_1D( _inst, "__gmlrnd__" , 2 ) );
if ((gmlkey_rnd>gmltreasure_rnd)) {{
var gmlt;
gmlt=gmltreasure_rnd;
gmltreasure_rnd=gmlkey_rnd;
gmlkey_rnd=gmlt;
}
;}
;
yyInst(24).setx( (gmlxval+(gmltreasure_rnd*global.gmlGRID_SPACE_WIDTH)) );
yyInst(24).sety( (gmlyval-yyInst(13).get_sprite_height()) );
yyInst(24).gmlnum=gmltreasure_rnd;
yyInst(25).setx( (gmlxval+(gmlkey_rnd*global.gmlGRID_SPACE_WIDTH)) );
yyInst(25).sety( (gmlyval-yyInst(13).get_sprite_height()) );
yyInst(25).gmlnum=gmlkey_rnd;
array_set_1D( global, "__gmlproblem_num1__" , global.gmlnum_bridge_segments,  gmltreasure_rnd );
array_set_1D( global, "__gmlproblem_num2__" , global.gmlnum_bridge_segments,  gmlkey_rnd );
{
var __yy__v3 = GetWithArray(12 );
for( var __yy__v4 in __yy__v3 ) {
 var __yy__v5 = __yy__v3[__yy__v4];
{
gml_Script_initialize_player( __yy__v5 , _inst , gmlxval, 0 );
}
}
}
;
gml_Script_create_wood_bridge( _inst , _other , (yyInst(13).x+global.gmlGRID_SPACE_WIDTH), yyInst(13).y, (yyInst(24).x+global.gmlGRID_SPACE_WIDTH), 1, 0 );
array_set_1D( g_pBuiltIn, "__view_visible__" , global.gmlMAIN_VIEW,  1 );
array_set_1D( g_pBuiltIn, "__view_object__" , global.gmlMAIN_VIEW,  yyInst(24).id );
array_set_1D( g_pBuiltIn, "__view_xview__" , global.gmlMAIN_VIEW,  (yyInst(24).x-(3*global.gmlGRID_SPACE_WIDTH)) );
array_set_1D( yyInst(24), "__alarm__" , 0,  (g_pBuiltIn.room_speed*3) );
}

// #####################################################################################################
// // Initialize LCM problem 
// var xval, yval; 
// xval = argument0; 
// yval = argument1; 
//  
// instance_deactivate_object(obj_key); 
// instance_deactivate_object(obj_treasure); 
// instance_activate_object(obj_player_A); 
// with obj_player { 
//   initialize_player(xval, maza_irandom_range(2,10)); 
// } 
// global.problem_num1[global.num_bridge_segments] = obj_player_A.jump; 
// global.problem_num2[global.num_bridge_segments] = obj_player_B.jump; 
//  
// 
function gml_Script_initialize_lcm( _inst, _other , argument0, argument1){
var gmlxval,gmlyval;
gmlxval=argument0;
gmlyval=argument1;
instance_deactivate_object( _inst , 25 );
instance_deactivate_object( _inst , 24 );
instance_activate_object( _inst , 14 );
{
var __yy__v6 = GetWithArray(12 );
for( var __yy__v7 in __yy__v6 ) {
 var __yy__v8 = __yy__v6[__yy__v7];
{
gml_Script_initialize_player( __yy__v8 , _inst , gmlxval, gml_Script_maza_irandom_range( __yy__v8 , _inst , 2, 10 ) );
}
}
}
;
array_set_1D( global, "__gmlproblem_num1__" , global.gmlnum_bridge_segments,  yyInst(14).gmljump );
array_set_1D( global, "__gmlproblem_num2__" , global.gmlnum_bridge_segments,  yyInst(13).gmljump );
}

// #####################################################################################################
// with obj_player { hspeed = 0; vspeed = 0;} 
//  
// global.num_bridge_segments += 1; 
// var yval; 
// yval = obj_player_B.y - obj_player_B.sprite_height; 
// instance_create(global.num_bridge_segments * global.BRIDGE_WIDTH, yval, obj_bridge); 
// // Remove all old wood objects except the ones for the players 
// with obj_wood { 
//   instance_destroy(); 
// } 
//  
// goto_room(Modelling_Room); 
//  
// 
function gml_Script_end_stage( _inst, _other ){
{
var __yy__v9 = GetWithArray(12 );
for( var __yy__v10 in __yy__v9 ) {
 var __yy__v11 = __yy__v9[__yy__v10];
{
__yy__v11.sethspeed( 0 );
__yy__v11.setvspeed( 0 );
}
}
}
;
global.gmlnum_bridge_segments+=1;
var gmlyval;
gmlyval=(yyInst(13).y-yyInst(13).get_sprite_height());
instance_create( (global.gmlnum_bridge_segments*global.gmlBRIDGE_WIDTH), gmlyval, 6 );
{
var __yy__v12 = GetWithArray(0 );
for( var __yy__v13 in __yy__v12 ) {
 var __yy__v14 = __yy__v12[__yy__v13];
{
instance_destroy( __yy__v14  );
}
}
}
;
gml_Script_goto_room( _inst , _other , 1 );
}

// #####################################################################################################
// // End LCM 
// with obj_player { 
//   self.current_count = (self.x - self.min_segment_x) div global.GRID_SPACE_WIDTH; 
// } 
// if (obj_player_A.current_count != 0 &&  
//     obj_player_A.current_count == obj_player_B.current_count &&  
//     obj_player_B.current_count mod obj_player_B.jump == 0 &&  
//     obj_player_A.current_count mod obj_player_A.jump == 0 &&  
//     obj_player_B.jumping == 0 and obj_player_A.jumping == 0) { 
//   global.problem_value[global.num_bridge_segments] = self.current_count; 
//   var weld; 
//   weld = instance_create(obj_player_A.x, obj_player_A.y, obj_weld); // Weld the wood together 
//   with instance_create(obj_player_A.x, obj_player_A.y - global.GRID_SPACE_WIDTH, obj_delta_score) { 
//     delta_score = 100; 
//   } 
//  
//   obj_sinhika.speed = 0; 
//   obj_sinhika.x = 0; 
//   obj_sinhika.y = 0; 
//   return 0; 
// }  
//  
// 
function gml_Script_end_lcm( _inst, _other ){
{
var __yy__v15 = GetWithArray(12 );
for( var __yy__v16 in __yy__v15 ) {
 var __yy__v17 = __yy__v15[__yy__v16];
{
__yy__v17.gmlcurrent_count=(~~((__yy__v17.x-__yy__v17.gmlmin_segment_x)/global.gmlGRID_SPACE_WIDTH));
}
}
}
;
if ((((yyInst(14).gmlcurrent_count!=0))&&((yyInst(14).gmlcurrent_count==yyInst(13).gmlcurrent_count))&&(((yyInst(13).gmlcurrent_count%yyInst(13).gmljump)==0))&&(((yyInst(14).gmlcurrent_count%yyInst(14).gmljump)==0))&&((yyInst(13).gmljumping==0))&&((yyInst(14).gmljumping==0)))) {{
array_set_1D( global, "__gmlproblem_value__" , global.gmlnum_bridge_segments,  _inst.gmlcurrent_count );
var gmlweld;
gmlweld=instance_create( yyInst(14).x, yyInst(14).y, 1 );
{
var __yy__v18 = GetWithArray(instance_create( yyInst(14).x, (yyInst(14).y-global.gmlGRID_SPACE_WIDTH), 9 ) );
for( var __yy__v19 in __yy__v18 ) {
 var __yy__v20 = __yy__v18[__yy__v19];
{
__yy__v20.gmldelta_score=100;
}
}
}
;
yyInst(15).setspeed( 0 );
yyInst(15).setx( 0 );
yyInst(15).sety( 0 );
return 0;
}
;}
;
}

// #####################################################################################################
// // End GCD 
// if (self.x == obj_key.x) { 
//   self.has_key = true; 
//   obj_key.visible = false; 
// } 
// if (self.x == obj_treasure.x && self.has_key) { // Found 
//   global.problem_value[global.num_bridge_segments] = self.jump; 
//   var weld; 
//   // Weld the wood together 
//   weld = instance_create(self.x, self.y - self.sprite_height, obj_weld); 
//   with instance_create(self.x, self.y - global.GRID_SPACE_WIDTH, obj_delta_score) { 
//     delta_score = 100; 
//   } 
//  
//   obj_sinhika.speed = 0; 
//   obj_sinhika.x = 0; 
//   obj_sinhika.y = 0; 
//   obj_treasure.visible = false; 
//   obj_key.visible = false; 
//   return 0; 
// } 
//  
// 
function gml_Script_end_gcd( _inst, _other ){
if ((_inst.x==yyInst(25).x)) {{
_inst.gmlhas_key=1;
yyInst(25).visible=0;
}
;}
;
if ((((_inst.x==yyInst(24).x))&&(_inst.gmlhas_key > 0.5))) {{
array_set_1D( global, "__gmlproblem_value__" , global.gmlnum_bridge_segments,  _inst.gmljump );
var gmlweld;
gmlweld=instance_create( _inst.x, (_inst.y-_inst.get_sprite_height()), 1 );
{
var __yy__v21 = GetWithArray(instance_create( _inst.x, (_inst.y-global.gmlGRID_SPACE_WIDTH), 9 ) );
for( var __yy__v22 in __yy__v21 ) {
 var __yy__v23 = __yy__v21[__yy__v22];
{
__yy__v23.gmldelta_score=100;
}
}
}
;
yyInst(15).setspeed( 0 );
yyInst(15).setx( 0 );
yyInst(15).sety( 0 );
yyInst(24).visible=0;
yyInst(25).visible=0;
return 0;
}
;}
;
}

// #####################################################################################################
// room_goto(argument0) 
// 
function gml_Script_goto_room( _inst, _other , argument0){
room_goto( argument0 );
}

// #####################################################################################################
// // State Transition 
// with obj_model_controller { 
//   switch(state) { 
//     case STATE_INTRO: return STATE_STORY; 
//     case STATE_ENCOURAGE: return STATE_STORY; 
//     case STATE_STORY: return STATE_TRAINING; 
//     case STATE_TRAINING: return STATE_PROBLEM; 
//     case STATE_PROBLEM: return STATE_PROBLEM; // Next transition by button 
//     case STATE_HCF_CORRECT: 
//     case STATE_HCF_WRONG: 
//     case STATE_LCM_CORRECT: 
//     case STATE_LCM_WRONG: return STATE_DONE; 
//   } 
//   return STATE_DONE; 
// } 
// 
function gml_Script_next_state( _inst, _other ){
{
var __yy__v24 = GetWithArray(23 );
for( var __yy__v25 in __yy__v24 ) {
 var __yy__v26 = __yy__v24[__yy__v25];
{
switch(__yy__v26.gmlstate) {
case __yy__v26.gmlSTATE_INTRO:
return __yy__v26.gmlSTATE_STORY;
case __yy__v26.gmlSTATE_ENCOURAGE:
return __yy__v26.gmlSTATE_STORY;
case __yy__v26.gmlSTATE_STORY:
return __yy__v26.gmlSTATE_TRAINING;
case __yy__v26.gmlSTATE_TRAINING:
return __yy__v26.gmlSTATE_PROBLEM;
case __yy__v26.gmlSTATE_PROBLEM:
return __yy__v26.gmlSTATE_PROBLEM;
case __yy__v26.gmlSTATE_HCF_CORRECT:
case __yy__v26.gmlSTATE_HCF_WRONG:
case __yy__v26.gmlSTATE_LCM_CORRECT:
case __yy__v26.gmlSTATE_LCM_WRONG:
return __yy__v26.gmlSTATE_DONE;
};
return __yy__v26.gmlSTATE_DONE;
}
}
}
;
}

// #####################################################################################################
// var txtfile, i, read, state; 
// global.actors = ds_map_create(); 
// ds_map_add(global.actors, "hn", spr_hanuman); 
// ds_map_add(global.actors, "tb", spr_sampati); 
// ds_map_add(global.actors, "rn", spr_ravana); 
// ds_map_add(global.actors, "st", spr_sita); 
//  
// txtfile = file_text_open_read("game.dt"); 
// // First state must be INTRO state in file 
// state = obj_model_controller.STATE_INTRO; 
// i = 0; 
// while (!file_text_eof(txtfile)) { 
//   read = file_text_read_string(txtfile); 
//   file_text_readln(txtfile); 
//   // Ignore comment lines 
//   if (string_copy(read, 1, 2) == '//') continue; 
//   // State line - pick up the state 
//   if (string_digits(read) == read) {  
//     global.state_end_counter[state] = i; 
//     state = real(string_digits(read)); 
//     continue; 
//   } 
//   global.game_text[i] = read; 
//   i += 1; 
// } 
// global.state_end_counter[state] = i; 
// file_text_close(txtfile); 
//  
// 
function gml_Script_load_game_narrative( _inst, _other ){
var gmltxtfile,gmli,gmlread,gmlstate;
global.gmlactors=ds_map_create(  );
ds_map_add( global.gmlactors, "hn", 42 );
ds_map_add( global.gmlactors, "tb", 39 );
ds_map_add( global.gmlactors, "rn", 40 );
ds_map_add( global.gmlactors, "st", 41 );
gmltxtfile=file_text_open_read( "game.dt" );
gmlstate=yyInst(23).gmlSTATE_INTRO;
gmli=0;
while (!(file_text_eof( gmltxtfile ) > 0.5)) {
gmlread=file_text_read_string( gmltxtfile );
file_text_readln( gmltxtfile );
if ((string_copy( gmlread, 1, 2 )=="//")) {continue;}
;
if ((string_digits( gmlread )==gmlread)) {{
array_set_1D( global, "__gmlstate_end_counter__" , gmlstate,  gmli );
gmlstate=real( string_digits( gmlread ) );
continue;
}
;}
;
array_set_1D( global, "__gmlgame_text__" , gmli,  gmlread );
gmli+=1;
}
;
array_set_1D( global, "__gmlstate_end_counter__" , gmlstate,  gmli );
file_text_close( gmltxtfile );
}

// #####################################################################################################
// var txtfile, i, read, seq_num, prev_seq_num; 
//  
// txtfile = file_text_open_read("sundar_kaand.dt"); 
// global.num_story = 0; 
// prev_seq_num = -1; 
// for (i = 0; !file_text_eof(txtfile); i += 1) { 
//   read = file_text_read_string(txtfile); 
//   seq_num = real(string_copy(read, 0, 3)); 
//   if (prev_seq_num + 1 != seq_num and prev_seq_num != -1) { 
//     global.story[i,0] = ''; 
//     global.story[i,1] = ''; 
//     i += 1; 
//   } 
//   prev_seq_num = seq_num; 
//   global.story[i,0] = string_copy(read, 5, 2); 
//   global.story[i,1] = string_copy(read, 8, string_length(read)); 
//   read = file_text_readln(txtfile); 
// } 
// file_text_close(txtfile); 
// // Set up a sentinel to indicate end of story 
// i += 1; 
// global.story[i,0] = ''; 
// global.story[i,1] = ''; 
// global.num_story = i; 
// global.current_story = 0; 
//  
// 
function gml_Script_load_story( _inst, _other ){
var gmltxtfile,gmli,gmlread,gmlseq_num,gmlprev_seq_num;
gmltxtfile=file_text_open_read( "sundar_kaand.dt" );
global.gmlnum_story=0;
gmlprev_seq_num=-1;
for (gmli=0 ; !(file_text_eof( gmltxtfile ) > 0.5) ; gmli+=1) {
gmlread=file_text_read_string( gmltxtfile );
gmlseq_num=real( string_copy( gmlread, 0, 3 ) );
if (((((gmlprev_seq_num+1)!=gmlseq_num))&&((gmlprev_seq_num!=-1)))) {{
array_set_2D( global, "__gmlstory__" , gmli, 0,  "" );
array_set_2D( global, "__gmlstory__" , gmli, 1,  "" );
gmli+=1;
}
;}
;
gmlprev_seq_num=gmlseq_num;
array_set_2D( global, "__gmlstory__" , gmli, 0,  string_copy( gmlread, 5, 2 ) );
array_set_2D( global, "__gmlstory__" , gmli, 1,  string_copy( gmlread, 8, string_length( gmlread ) ) );
gmlread=file_text_readln( gmltxtfile );
}
;
file_text_close( gmltxtfile );
gmli+=1;
array_set_2D( global, "__gmlstory__" , gmli, 0,  "" );
array_set_2D( global, "__gmlstory__" , gmli, 1,  "" );
global.gmlnum_story=gmli;
global.gmlcurrent_story=0;
}

// #####################################################################################################
// 
function gml_Trigger_lcm_success( _inst, _other )
{
}

// #####################################################################################################
// { 
// self.num = 0; 
// self.text_color = c_white; 
//  
//  
// } 
// 
function gml_Object_obj_wood_Create_0( _inst, _other )
{
{
_inst.gmlnum=0;
_inst.gmltext_color=16777215;
}
;
}

// #####################################################################################################
// { 
// draw_self() 
// if (self.num != 0) { 
//   draw_set_color(self.text_color); 
//   draw_set_font(-1); 
//   draw_set_halign(fa_center); 
//   draw_set_valign(fa_middle); 
//   draw_text(x + global.GRID_SPACE_WIDTH/2, y + global.GRID_SPACE_WIDTH/2, string(self.num)); 
// } 
//  
// } 
// 
function gml_Object_obj_wood_Draw_0( _inst, _other )
{
{
draw_self( _inst  );
if ((_inst.gmlnum!=0)) {{
draw_set_color( _inst.gmltext_color );
draw_set_font( -1 );
draw_set_halign( 1 );
draw_set_valign( 1 );
draw_text( (_inst.x+(global.gmlGRID_SPACE_WIDTH/2)), (_inst.y+(global.gmlGRID_SPACE_WIDTH/2)), string( _inst.gmlnum ) );
}
;}
;
}
;
}

// #####################################################################################################
// { 
// sound_play(snd_applause); 
// sleep(50); 
// self.hspeed = -10; 
// with obj_player { 
//   self.hspeed = -10; 
// } 
//  
//  
// } 
// 
function gml_Object_obj_weld_Create_0( _inst, _other )
{
{
sound_play( 5 );
sleep( 50 );
_inst.sethspeed( -10 );
{
var __yy__v27 = GetWithArray(12 );
for( var __yy__v28 in __yy__v27 ) {
 var __yy__v29 = __yy__v27[__yy__v28];
{
__yy__v29.sethspeed( -10 );
}
}
}
;
}
;
}

// #####################################################################################################
// { 
// instance_destroy(); 
// end_stage(); 
//  
// } 
// 
function gml_Object_obj_weld_Collision_6( _inst, _other )
{
{
instance_destroy( _inst  );
gml_Script_end_stage( _inst , _other  );
}
;
}

// #####################################################################################################
// { 
// sound_play(snd_click); 
// with other { 
//   instance_destroy(); 
// } 
//  
//  
// } 
// 
function gml_Object_obj_weld_Collision_0( _inst, _other )
{
{
sound_play( 4 );
{
instance_destroy( _other  );
}
;
}
;
}

// #####################################################################################################
// { 
// sound_play(snd_explosion); 
// alarm[0] := 30; 
//  
// } 
// 
function gml_Object_obj_explosion_Create_0( _inst, _other )
{
{
sound_play( 3 );
array_set_1D( _inst, "__alarm__" , 0,  30 );
}
;
}

// #####################################################################################################
// { 
// instance_destroy(); 
// sleep(100); 
// health -= self.delta_health; 
//  
// } 
// 
function gml_Object_obj_explosion_Alarm_0( _inst, _other )
{
{
instance_destroy( _inst  );
sleep( 100 );
g_pBuiltIn.set_health_function( g_pBuiltIn.health - _inst.gmldelta_health );
}
;
}

// #####################################################################################################
// { 
// global.GRID_SPACE_WIDTH = 32; 
// global.MAIN_VIEW = 0; 
// global.DASHBOARD_VIEW = 1; 
// global.BRIDGE_WIDTH = 4 * global.GRID_SPACE_WIDTH; // Dont know how to get sprite width 
// global.PLAYER_A = "A"; 
// global.PLAYER_B = "B"; 
// global.PLAYER_BOTH = "BOTH"; 
// global.player_me = global.PLAYER_BOTH; // Initialized to both players 
// global.LCM = 'lcm'; 
// global.GCD = 'gcd'; 
// global.current_story = -1; // Location in story 
//  
// // Modes of operation 
// global.NOT_BROWSER = 0; // Windows 
// global.GM_BROWSER = 1;  // GM browser 
// global.BROWSER = 2;     // Hosted  
//  
// self.scroll = false; 
// global.problem_type[0] = ''; // Problem 
// global.problem_value[0] = 0; 
// global.problem_num1[0] = 0; 
// global.problem_num2[0] = 0; 
// global.num_bridge_segments = 0; 
//  
//  
// } 
// 
function gml_Object_obj_controller_Create_0( _inst, _other )
{
{
global.gmlGRID_SPACE_WIDTH=32;
global.gmlMAIN_VIEW=0;
global.gmlDASHBOARD_VIEW=1;
global.gmlBRIDGE_WIDTH=(4*global.gmlGRID_SPACE_WIDTH);
global.gmlPLAYER_A="A";
global.gmlPLAYER_B="B";
global.gmlPLAYER_BOTH="BOTH";
global.gmlplayer_me=global.gmlPLAYER_BOTH;
global.gmlLCM="lcm";
global.gmlGCD="gcd";
global.gmlcurrent_story=-1;
global.gmlNOT_BROWSER=0;
global.gmlGM_BROWSER=1;
global.gmlBROWSER=2;
_inst.gmlscroll=0;
array_set_1D( global, "__gmlproblem_type__" , 0,  "" );
array_set_1D( global, "__gmlproblem_value__" , 0,  0 );
array_set_1D( global, "__gmlproblem_num1__" , 0,  0 );
array_set_1D( global, "__gmlproblem_num2__" , 0,  0 );
global.gmlnum_bridge_segments=0;
}
;
}

// #####################################################################################################
// { 
// if (self.scroll) { 
//   var delta_x, delta_y, view_mouse_delta_x, view_mouse_delta_y; 
//   view_mouse_delta_x = self.orig_view_mouse_x - (mouse_x - view_xview[global.MAIN_VIEW]); 
//   delta_x = view_mouse_delta_x div 10; 
//   view_mouse_delta_y = self.orig_view_mouse_y - (mouse_y - view_yview[global.MAIN_VIEW]); 
//   delta_y = view_mouse_delta_y div 10; 
//    
//   view_xview[global.MAIN_VIEW] += delta_x; 
//   view_yview[global.MAIN_VIEW] += delta_y; 
//   if (view_xview[global.MAIN_VIEW] + view_wview[global.MAIN_VIEW] > room_width) { 
//     view_xview[global.MAIN_VIEW] = room_width - view_wview[global.MAIN_VIEW]; 
//   } 
//   if (view_xview[global.MAIN_VIEW] < view_xport[global.MAIN_VIEW]) { 
//     view_xview[global.MAIN_VIEW] = view_xport[global.MAIN_VIEW]; 
//   } 
//   if (view_yview[global.MAIN_VIEW] + view_hview[global.MAIN_VIEW] > room_height) { 
//     view_yview[global.MAIN_VIEW] = room_height - view_hview[global.MAIN_VIEW]; 
//   } 
//   if (view_yview[global.MAIN_VIEW] < view_yport[global.MAIN_VIEW]) { 
//     view_yview[global.MAIN_VIEW] = view_yport[global.MAIN_VIEW]; 
//   } 
// } 
//  
//  
// } 
// 
function gml_Object_obj_controller_Step_0( _inst, _other )
{
{
if (_inst.gmlscroll > 0.5) {{
var gmldelta_x,gmldelta_y,gmlview_mouse_delta_x,gmlview_mouse_delta_y;
gmlview_mouse_delta_x=(_inst.gmlorig_view_mouse_x-(g_pBuiltIn.mouse_x-array_get_1D( g_pBuiltIn, "__view_xview__" , global.gmlMAIN_VIEW ) ));
gmldelta_x=(~~(gmlview_mouse_delta_x/10));
gmlview_mouse_delta_y=(_inst.gmlorig_view_mouse_y-(g_pBuiltIn.mouse_y-array_get_1D( g_pBuiltIn, "__view_yview__" , global.gmlMAIN_VIEW ) ));
gmldelta_y=(~~(gmlview_mouse_delta_y/10));
array_set_1D( g_pBuiltIn, "__view_xview__" , global.gmlMAIN_VIEW,  array_get_1D( g_pBuiltIn, "__view_xview__" , global.gmlMAIN_VIEW )  + gmldelta_x );
array_set_1D( g_pBuiltIn, "__view_yview__" , global.gmlMAIN_VIEW,  array_get_1D( g_pBuiltIn, "__view_yview__" , global.gmlMAIN_VIEW )  + gmldelta_y );
if (((array_get_1D( g_pBuiltIn, "__view_xview__" , global.gmlMAIN_VIEW ) +array_get_1D( g_pBuiltIn, "__view_wview__" , global.gmlMAIN_VIEW ) )>g_pBuiltIn.room_width)) {{
array_set_1D( g_pBuiltIn, "__view_xview__" , global.gmlMAIN_VIEW,  (g_pBuiltIn.room_width-array_get_1D( g_pBuiltIn, "__view_wview__" , global.gmlMAIN_VIEW ) ) );
}
;}
;
if ((array_get_1D( g_pBuiltIn, "__view_xview__" , global.gmlMAIN_VIEW ) <array_get_1D( g_pBuiltIn, "__view_xport__" , global.gmlMAIN_VIEW ) )) {{
array_set_1D( g_pBuiltIn, "__view_xview__" , global.gmlMAIN_VIEW,  array_get_1D( g_pBuiltIn, "__view_xport__" , global.gmlMAIN_VIEW )  );
}
;}
;
if (((array_get_1D( g_pBuiltIn, "__view_yview__" , global.gmlMAIN_VIEW ) +array_get_1D( g_pBuiltIn, "__view_hview__" , global.gmlMAIN_VIEW ) )>g_pBuiltIn.room_height)) {{
array_set_1D( g_pBuiltIn, "__view_yview__" , global.gmlMAIN_VIEW,  (g_pBuiltIn.room_height-array_get_1D( g_pBuiltIn, "__view_hview__" , global.gmlMAIN_VIEW ) ) );
}
;}
;
if ((array_get_1D( g_pBuiltIn, "__view_yview__" , global.gmlMAIN_VIEW ) <array_get_1D( g_pBuiltIn, "__view_yport__" , global.gmlMAIN_VIEW ) )) {{
array_set_1D( g_pBuiltIn, "__view_yview__" , global.gmlMAIN_VIEW,  array_get_1D( g_pBuiltIn, "__view_yport__" , global.gmlMAIN_VIEW )  );
}
;}
;
}
;}
;
}
;
}

// #####################################################################################################
// { 
// if (!self.scroll) return 0; 
//  
// self.scroll = false; 
// view_object[global.MAIN_VIEW] = self.orig_view_object; 
//  
//  
// } 
// 
function gml_Object_obj_controller_Mouse_56( _inst, _other )
{
{
if (!(_inst.gmlscroll > 0.5)) {return 0;}
;
_inst.gmlscroll=0;
array_set_1D( g_pBuiltIn, "__view_object__" , global.gmlMAIN_VIEW,  _inst.gmlorig_view_object );
}
;
}

// #####################################################################################################
// { 
// if (instance_position(mouse_x, mouse_y, all) != noone) return 0; 
// self.scroll = true; 
//  
// // Store relative coords of mouse in view area 
// self.orig_view_mouse_x = mouse_x - view_xview[global.MAIN_VIEW]; 
// self.orig_view_mouse_y = mouse_y - view_yview[global.MAIN_VIEW]; 
// self.orig_view_object = view_object[global.MAIN_VIEW]; 
// view_object[global.MAIN_VIEW] = noone; 
//  
//  
// } 
// 
function gml_Object_obj_controller_Mouse_53( _inst, _other )
{
{
if ((instance_position( g_pBuiltIn.mouse_x, g_pBuiltIn.mouse_y, (-3) )!=(-4))) {return 0;}
;
_inst.gmlscroll=1;
_inst.gmlorig_view_mouse_x=(g_pBuiltIn.mouse_x-array_get_1D( g_pBuiltIn, "__view_xview__" , global.gmlMAIN_VIEW ) );
_inst.gmlorig_view_mouse_y=(g_pBuiltIn.mouse_y-array_get_1D( g_pBuiltIn, "__view_yview__" , global.gmlMAIN_VIEW ) );
_inst.gmlorig_view_object=array_get_1D( g_pBuiltIn, "__view_object__" , global.gmlMAIN_VIEW ) ;
array_set_1D( g_pBuiltIn, "__view_object__" , global.gmlMAIN_VIEW,  (-4) );
}
;
}

// #####################################################################################################
// { 
// show_message("Sorry, you lost"); 
// sleep(2000); 
// instance_deactivate_object(obj_player_A); 
// instance_deactivate_object(obj_player_B); 
// instance_deactivate_object(obj_sinhika); 
//  
//  
// } 
// 
function gml_Object_obj_controller_Other_9( _inst, _other )
{
{
show_message( "Sorry, you lost" );
sleep( 2000 );
instance_deactivate_object( _inst , 14 );
instance_deactivate_object( _inst , 13 );
instance_deactivate_object( _inst , 15 );
}
;
}

// #####################################################################################################
// { 
// global.problem_value[0] = 0; 
// global.num_bridge_segments = 0; 
// global.problem = ''; 
// health = 100; 
// score = 0; 
//  
// global.x_n = get_random_seed(); 
//  
// goto_room(Modelling_Room); 
// global.lcm_correct = "true"; // ???  
//  
// obj_help.splash = "Intro.htm"; 
// obj_help.alarm[0] = 10; 
//  
//  
// } 
// 
function gml_Object_obj_controller_Other_2( _inst, _other )
{
{
array_set_1D( global, "__gmlproblem_value__" , 0,  0 );
global.gmlnum_bridge_segments=0;
global.gmlproblem="";
g_pBuiltIn.set_health_function( 100 );
g_pBuiltIn.score=0;
global.gmlx_n=gml_Script_get_random_seed( _inst , _other  );
gml_Script_goto_room( _inst , _other , 1 );
global.gmllcm_correct="true";
yyInst(8).gmlsplash="Intro.htm";
array_set_1D( yyInst(8), "__alarm__" , 0,  10 );
}
;
}

// #####################################################################################################
// { 
// obj_player_B.name = get_player_name('B'); 
// var i; 
// obj_player_A.name = ''; 
// for (i = 1; i <= string_length(obj_player_B.name); i += 1) { 
//   obj_player_A.name += string_char_at(obj_player_B.name, i); 
// } 
// initialize_stage(); 
//  
//  
// } 
// 
function gml_Object_obj_dashboard_Other_4( _inst, _other )
{
{
yyInst(13).gmlname=gml_Script_get_player_name( _inst , _other , "B" );
var gmli;
yyInst(14).gmlname="";
for (gmli=1 ; (gmli<=string_length( yyInst(13).gmlname )) ; gmli+=1) {
yyInst(14).gmlname+=string_char_at( yyInst(13).gmlname, gmli );
}
;
gml_Script_initialize_stage( _inst , _other  );
}
;
}

// #####################################################################################################
// { 
// // Draw the dashboard area 
// draw_self(); 
// // Setup drawing specs 
// draw_set_color(c_white); 
// draw_set_halign(fa_left); 
// draw_set_valign(fa_top); 
// draw_set_font(-1); 
//  
// var x_base; 
// x_base = self.x + 96; 
// // Draw Strength for players 
// draw_text(x_base, self.y + 4, "Jump"); 
//  
// // Draw Health 
// var x_health, y_health; 
// x_health = x_base + 2 * global.GRID_SPACE_WIDTH; 
// y_health = self.y + 1.5*global.GRID_SPACE_WIDTH; 
// draw_text(x_base, y_health, "Health"); 
// draw_healthbar(x_health, y_health, x_health + 250, y_health + 15, health, c_silver, c_red, c_lime, 0, true, true); 
//  
//  
// } 
// 
function gml_Object_obj_dashboard_Draw_0( _inst, _other )
{
{
draw_self( _inst  );
draw_set_color( 16777215 );
draw_set_halign( 0 );
draw_set_valign( 0 );
draw_set_font( -1 );
var gmlx_base;
gmlx_base=(_inst.x+96);
draw_text( gmlx_base, (_inst.y+4), "Jump" );
var gmlx_health,gmly_health;
gmlx_health=(gmlx_base+(2*global.gmlGRID_SPACE_WIDTH));
gmly_health=(_inst.y+(1.5*global.gmlGRID_SPACE_WIDTH));
draw_text( gmlx_base, gmly_health, "Health" );
draw_healthbar( gmlx_health, gmly_health, (gmlx_health+250), (gmly_health+15), g_pBuiltIn.health, 12632256, 255, 65280, 0, 1, 1 );
}
;
}

// #####################################################################################################
// { 
// global.level = get_integer("Enter level", 0) 
// initialize_stage(); 
//  
//  
// } 
// 
function gml_Object_obj_dashboard_KeyPress_18( _inst, _other )
{
{
global.gmllevel=get_integer( "Enter level", 0 );
gml_Script_initialize_stage( _inst , _other  );
}
;
}

// #####################################################################################################
// { 
// self.value = 1; 
// self.min = 1; 
// self.max = 10; 
// self.prev_date = 0; 
//  
//  
// } 
// 
function gml_Object_obj_spinner_Create_0( _inst, _other )
{
{
_inst.gmlvalue=1;
_inst.gmlmin=1;
_inst.gmlmax=10;
_inst.gmlprev_date=0;
}
;
}

// #####################################################################################################
// { 
// //////////////// Spinner Input //////////////////// 
// // 
// var x_spinner, y_spinner, min_value, max_value; 
// x_spinner := self.x 
// y_spinner := self.y 
// min_value := self.min 
// max_value := self.max 
// // place in the draw event 
// // value = the value initialise this variable your self!!! 
// // set 'treat uninitialised variables as value 0' to true 
// // example: spinner(5,5,0,255); 
// // 
// ///////////////////////////////////////////////////// 
// y_spinner += 4; // To center in the grid 
// //x_pm = x_spinner coordinate plus and minus 
// x_pm := x_spinner + 10 + string_width(string(max_value)); 
// //width_pm = the width and height of the plus and minus box 
// width_pm := 2.5 + string_height('1')/2; 
// draw_set_color(c_gray); 
// //draw up triangle 
// draw_triangle(x_pm, y_spinner + width_pm, x_pm + width_pm, y_spinner + width_pm, x_pm + width_pm/2, y_spinner, false); 
// //draw down triangle 
// draw_triangle(x_pm, y_spinner + width_pm, x_pm + width_pm, y_spinner + width_pm, x_pm + width_pm/2, y_spinner + 2*width_pm, false); 
// // Divide the two triangles 
// draw_set_color(c_black); 
// draw_rectangle(x_pm, y_spinner + width_pm - 1, x_pm + width_pm, y_spinner + width_pm + 1, false); 
// // Draw the value of the spinner 
// draw_set_color(c_white); 
// draw_text(x_spinner + width_pm, y_spinner + 10, "x " + string(value)); 
//  
// current_date = date_current_datetime(); 
// // Control sensitivity of spinner 
// if (date_second_span(prev_date,current_date) < 0.08) { 
// //  return 0; 
// } 
// //if plus pressed 
// if (mouse_check_button(mb_left) and value < max_value and mouse_x > x_pm and mouse_x < x_pm + width_pm and mouse_y > y_spinner and mouse_y < y_spinner + width_pm) { 
//   value += 1; 
// } 
// /*if (mouse_wheel_up() and value < max_value and mouse_x > x_pm and mouse_x < x_pm + width_pm and mouse_y > y_spinner and mouse_y < y_spinner + width_pm) { 
//   value += 1; 
// } 
// if (mouse_wheel_down() and value > min_value and mouse_x > x_pm and mouse_x < x_pm + width_pm and mouse_y > y_spinner and mouse_y < y_spinner + width_pm) { 
//   value -= 1; 
// } 
// */ 
// //minus pressed 
// if (mouse_check_button(mb_left) and value > min_value and mouse_x > x_pm and mouse_x < x_pm + width_pm and mouse_y > y_spinner + width_pm and mouse_y < y_spinner + 2*width_pm) { 
//   value -= 1; 
// } 
// prev_date := current_date 
//  
//  
// } 
// 
function gml_Object_obj_spinner_Draw_0( _inst, _other )
{
{
var gmlx_spinner,gmly_spinner,gmlmin_value,gmlmax_value;
gmlx_spinner=_inst.x;
gmly_spinner=_inst.y;
gmlmin_value=_inst.gmlmin;
gmlmax_value=_inst.gmlmax;
gmly_spinner+=4;
_inst.gmlx_pm=(gmlx_spinner+10+string_width( string( gmlmax_value ) ));
_inst.gmlwidth_pm=(2.5+(string_height( "1" )/2));
draw_set_color( 8421504 );
draw_triangle( _inst.gmlx_pm, (gmly_spinner+_inst.gmlwidth_pm), (_inst.gmlx_pm+_inst.gmlwidth_pm), (gmly_spinner+_inst.gmlwidth_pm), (_inst.gmlx_pm+(_inst.gmlwidth_pm/2)), gmly_spinner, 0 );
draw_triangle( _inst.gmlx_pm, (gmly_spinner+_inst.gmlwidth_pm), (_inst.gmlx_pm+_inst.gmlwidth_pm), (gmly_spinner+_inst.gmlwidth_pm), (_inst.gmlx_pm+(_inst.gmlwidth_pm/2)), (gmly_spinner+(2*_inst.gmlwidth_pm)), 0 );
draw_set_color( 0 );
draw_rectangle( _inst.gmlx_pm, (gmly_spinner+_inst.gmlwidth_pm-1), (_inst.gmlx_pm+_inst.gmlwidth_pm), (gmly_spinner+_inst.gmlwidth_pm+1), 0 );
draw_set_color( 16777215 );
draw_text( (gmlx_spinner+_inst.gmlwidth_pm), (gmly_spinner+10), ("x "+string( _inst.gmlvalue )) );
_inst.gmlcurrent_date=date_current_datetime(  );
if ((date_second_span( _inst.gmlprev_date, _inst.gmlcurrent_date )<0.08)) {{
}
;}
;
if (((mouse_check_button( 1 ) > 0.5)&&((_inst.gmlvalue<gmlmax_value))&&((g_pBuiltIn.mouse_x>_inst.gmlx_pm))&&((g_pBuiltIn.mouse_x<(_inst.gmlx_pm+_inst.gmlwidth_pm)))&&((g_pBuiltIn.mouse_y>gmly_spinner))&&((g_pBuiltIn.mouse_y<(gmly_spinner+_inst.gmlwidth_pm))))) {{
_inst.gmlvalue+=1;
}
;}
;
if (((mouse_check_button( 1 ) > 0.5)&&((_inst.gmlvalue>gmlmin_value))&&((g_pBuiltIn.mouse_x>_inst.gmlx_pm))&&((g_pBuiltIn.mouse_x<(_inst.gmlx_pm+_inst.gmlwidth_pm)))&&((g_pBuiltIn.mouse_y>(gmly_spinner+_inst.gmlwidth_pm)))&&((g_pBuiltIn.mouse_y<(gmly_spinner+(2*_inst.gmlwidth_pm)))))) {{
_inst.gmlvalue-=1;
}
;}
;
_inst.gmlprev_date=_inst.gmlcurrent_date;
}
;
}

// #####################################################################################################
// { 
// self.problem_type = ''; 
// self.problem_value = 0; 
// self.num1 = 0; 
// self.num2 = 0; 
//  
//  
// } 
// 
function gml_Object_obj_bridge_Create_0( _inst, _other )
{
{
_inst.gmlproblem_type="";
_inst.gmlproblem_value=0;
_inst.gmlnum1=0;
_inst.gmlnum2=0;
}
;
}

// #####################################################################################################
// { 
// draw_self(); 
// draw_set_color(c_blue); 
// draw_set_halign(fa_center); 
// draw_set_valign(fa_middle); 
// if (self.problem_type == '') { // Neither LCM nor GCD - this is the BEGIN segment 
//   draw_text(x + sprite_width/2, y + sprite_height/2, "BEGIN"); 
// } else if (self.problem_type == global.LCM) { // LCM segment 
//   var display; 
//   display = string(self.num1) + " x " + string(self.problem_value div self.num1); 
//   display += "# LCM = " + string(self.problem_value); 
//   display += "#" + string(self.num2) + " x " + string(self.problem_value div self.num2); 
//   draw_text(x + sprite_width/2, y + sprite_height/2, display); 
// } else if (self.problem_type == global.GCD) { // GCD segment 
//   var display; 
//   display = string(self.num1) + " / " + string(self.num1 div self.problem_value); 
//   display += "# GCD = " + string(self.problem_value); 
//   display += "#" + string(self.num2) + " / " + string(self.num2 div self.problem_value); 
//   draw_text(x + sprite_width/2, y + sprite_height/2, display); 
// } 
//  
//  
// } 
// 
function gml_Object_obj_bridge_Draw_0( _inst, _other )
{
{
draw_self( _inst  );
draw_set_color( 16711680 );
draw_set_halign( 1 );
draw_set_valign( 1 );
if ((_inst.gmlproblem_type=="")) {{
draw_text( (_inst.x+(_inst.get_sprite_width()/2)), (_inst.y+(_inst.get_sprite_height()/2)), "BEGIN" );
}
;}
 else {if ((_inst.gmlproblem_type==global.gmlLCM)) {{
var gmldisplay;
gmldisplay=(string( _inst.gmlnum1 )+" x "+string( (~~(_inst.gmlproblem_value/_inst.gmlnum1)) ));
gmldisplay+=("# LCM = "+string( _inst.gmlproblem_value ));
gmldisplay+=("#"+string( _inst.gmlnum2 )+" x "+string( (~~(_inst.gmlproblem_value/_inst.gmlnum2)) ));
draw_text( (_inst.x+(_inst.get_sprite_width()/2)), (_inst.y+(_inst.get_sprite_height()/2)), gmldisplay );
}
;}
 else {if ((_inst.gmlproblem_type==global.gmlGCD)) {{
var gmldisplay;
gmldisplay=(string( _inst.gmlnum1 )+" / "+string( (~~(_inst.gmlnum1/_inst.gmlproblem_value)) ));
gmldisplay+=("# GCD = "+string( _inst.gmlproblem_value ));
gmldisplay+=("#"+string( _inst.gmlnum2 )+" / "+string( (~~(_inst.gmlnum2/_inst.gmlproblem_value)) ));
draw_text( (_inst.x+(_inst.get_sprite_width()/2)), (_inst.y+(_inst.get_sprite_height()/2)), gmldisplay );
}
;}
;};};
}
;
}

// #####################################################################################################
// { 
// self.num = 0; 
// self.text_color = c_black; 
//  
// } 
// 
function gml_Object_obj_wood_multiple_Create_0( _inst, _other )
{
{
_inst.gmlnum=0;
_inst.gmltext_color=0;
}
;
}

// #####################################################################################################
// { 
// // Raise this alarm after setting splash for game. 
// // This alarm is used to indicate end of a stage. 
// sound_play(snd_applause); 
// sleep(1000); 
// splash_html(self.splash); 
//  
//  
// } 
// 
function gml_Object_obj_help_Alarm_0( _inst, _other )
{
{
sound_play( 5 );
sleep( 1000 );
gml_Script_splash_html( _inst , _other , _inst.gmlsplash );
}
;
}

// #####################################################################################################
// { 
// goto_room(home); 
//  
// } 
// 
function gml_Object_obj_help_Keyboard_72( _inst, _other )
{
{
gml_Script_goto_room( _inst , _other , 4 );
}
;
}

// #####################################################################################################
// { 
// self.splash = "Help.htm"; 
// self.alarm[0] := 1; 
//  
//  
//  
// } 
// 
function gml_Object_obj_help_Mouse_0( _inst, _other )
{
{
_inst.gmlsplash="Help.htm";
array_set_1D( _inst, "__alarm__" , 0,  1 );
}
;
}

// #####################################################################################################
// { 
// self.delta_score = 0; 
// move_towards_point(obj_score.x, obj_score.y, 10); 
//  
// } 
// 
function gml_Object_obj_delta_score_Create_0( _inst, _other )
{
{
_inst.gmldelta_score=0;
move_towards_point( _inst , yyInst(10).x, yyInst(10).y, 10 );
}
;
}

// #####################################################################################################
// { 
// draw_text(self.x, self.y, "+" + string(self.delta_score)); 
//  
// } 
// 
function gml_Object_obj_delta_score_Draw_0( _inst, _other )
{
{
draw_text( _inst.x, _inst.y, ("+"+string( _inst.gmldelta_score )) );
}
;
}

// #####################################################################################################
// { 
// score += self.delta_score; 
// instance_destroy(); 
//  
// } 
// 
function gml_Object_obj_delta_score_Collision_3( _inst, _other )
{
{
g_pBuiltIn.score+=_inst.gmldelta_score;
instance_destroy( _inst  );
}
;
}

// #####################################################################################################
// { 
// draw_self(); 
// draw_set_color(c_white); 
// draw_set_halign(fa_left); 
// draw_set_valign(fa_top); 
// draw_set_font(-1); 
//  
// draw_text(self.x + 48, self.y + 8, string(score)); 
//  
//  
// } 
// 
function gml_Object_obj_score_Draw_0( _inst, _other )
{
{
draw_self( _inst  );
draw_set_color( 16777215 );
draw_set_halign( 0 );
draw_set_valign( 0 );
draw_set_font( -1 );
draw_text( (_inst.x+48), (_inst.y+8), string( g_pBuiltIn.score ) );
}
;
}

// #####################################################################################################
// { 
//   with obj_player {  
//     if (self.move_ready) { 
//       move_player();  
//     } 
//   } 
//   if (obj_sinhika.move_ready) { 
//     move_sinhika(); 
//   } 
//  
//  
// } 
// 
function gml_Object_obj_client_Step_0( _inst, _other )
{
{
{
var __yy__v30 = GetWithArray(12 );
for( var __yy__v31 in __yy__v30 ) {
 var __yy__v32 = __yy__v30[__yy__v31];
{
if (__yy__v32.gmlmove_ready > 0.5) {{
gml_Script_move_player( __yy__v32 , _inst  );
}
;}
;
}
}
}
;
if (yyInst(15).gmlmove_ready > 0.5) {{
gml_Script_move_sinhika( _inst , _other  );
}
;}
;
}
;
}

// #####################################################################################################
// { 
// self.jump = 0;  // Size of jump 
// self.path = -1; 
// self.count_x = 0; // Count from nearest bridge segment in X 
// self.jumping = 0; 
// self.image_speed = 0; 
// self.image_index = 1; // face left = 0, face straight = 1, face right = 2 
// self.recovering = false; 
// self.selected = false; 
// self.step = 0; // counter for subimage 
// self.multiple = 0;    // can be negative also 
// self.start_jump_x = 0; // x-value at beginning of jump 
// self.min_segment_x = 0; // Min x-value for player for this segment 
// self.max_segment_x = 0; // Max x-value for player for this segment 
// self.move_ready = false; // Whether move is ready 
// self.name = '';   // Name of this player 
// self.player = ''; // Which player this is - A or B 
// self.has_key = false; // Does object have key? 
//  
//  
// } 
// 
function gml_Object_obj_player_Create_0( _inst, _other )
{
{
_inst.gmljump=0;
_inst.gmlpath=-1;
_inst.gmlcount_x=0;
_inst.gmljumping=0;
_inst.image_speed=0;
_inst.set_image_index( 1 );
_inst.gmlrecovering=0;
_inst.gmlselected=0;
_inst.gmlstep=0;
_inst.gmlmultiple=0;
_inst.gmlstart_jump_x=0;
_inst.gmlmin_segment_x=0;
_inst.gmlmax_segment_x=0;
_inst.gmlmove_ready=0;
_inst.gmlname="";
_inst.gmlplayer="";
_inst.gmlhas_key=0;
}
;
}

// #####################################################################################################
// { 
// // Recovery period over. 
// self.recovering = false; 
// self.image_speed = 0; 
// self.image_index = 0; 
//  
// } 
// 
function gml_Object_obj_player_Alarm_1( _inst, _other )
{
{
_inst.gmlrecovering=0;
_inst.image_speed=0;
_inst.set_image_index( 0 );
}
;
}

// #####################################################################################################
// { 
// // End of a Jump 
//  
// // If sequence of jumps not over, continue to next jump 
// if (self.jumping > 1) { 
//   path_start(self.path, 30 /* speed */, 0 /*endaction */,false /* absolute*/); 
//   return 0; 
// } 
// self.jumping = 0; 
// self.multiple = 0; 
// self.move_ready = false; 
//  
// // If other player already recognized success in finding LCM, return 
// if (obj_sinhika.speed == 0) return 0; 
//  
// // If LCM found, take success action 
// if (global.problem_type[global.num_bridge_segments] == global.LCM) { 
//   end_lcm(); 
// }  
//  
// // If GCD found, take success action 
// if (global.problem_type[global.num_bridge_segments] == global.GCD) { 
//   end_gcd(); 
// } 
//  
// // Take time to recover from jump 
// self.alarm[1] = 10; 
// self.image_speed = 1; 
// self.recovering = true; 
//  
//  
// } 
// 
function gml_Object_obj_player_Alarm_0( _inst, _other )
{
{
if ((_inst.gmljumping>1)) {{
path_start( _inst , _inst.gmlpath, 30, 0, 0 );
return 0;
}
;}
;
_inst.gmljumping=0;
_inst.gmlmultiple=0;
_inst.gmlmove_ready=0;
if ((yyInst(15).speed==0)) {return 0;}
;
if ((array_get_1D( global, "__gmlproblem_type__" , global.gmlnum_bridge_segments ) ==global.gmlLCM)) {{
gml_Script_end_lcm( _inst , _other  );
}
;}
;
if ((array_get_1D( global, "__gmlproblem_type__" , global.gmlnum_bridge_segments ) ==global.gmlGCD)) {{
gml_Script_end_gcd( _inst , _other  );
}
;}
;
array_set_1D( _inst, "__alarm__" , 1,  10 );
_inst.image_speed=1;
_inst.gmlrecovering=1;
}
;
}

// #####################################################################################################
// { 
// if (!self.selected) return 0; 
// if (mouse_check_button(mb_left)) { 
//   var x_distance, new_multiple; 
//   x_distance = self.x + global.GRID_SPACE_WIDTH/2 - mouse_x; 
//   new_multiple = x_distance div 10 + 1; // Converts simple click to 1 
//   // Disallow multiple larger than 10 
//   if (abs(new_multiple) > 10) { 
//     new_multiple = sign(new_multiple) * 10; 
//   } 
//   if (self.multiple != new_multiple) { 
//     sound_play(snd_click); 
//     self.multiple = new_multiple; 
//   } 
//   // Clamp multiple so that self.x >= self.min_segment_x i.e. cannot go behind stage beginning. 
//   if (self.x + self.multiple * self.jump < self.min_segment_x) { 
//     self.multiple = (self.min_segment_x - self.x) div self.jump; 
//   } 
//   image_index = sign(self.multiple) + 1; // 0 = right, 1 = straight, 2 = left 
// } 
//  
// if (mouse_check_button(mb_right)) { // Always set in X direction 
//   var distance, new_jump; 
//   distance = distance_to_point(mouse_x - global.GRID_SPACE_WIDTH/2, mouse_y - global.GRID_SPACE_WIDTH/2); 
//   new_jump = min(10, distance div 10 + 1); 
//   if (self.jump != new_jump) { 
//     sound_play(snd_click); 
//     self.jump = new_jump; 
//   } 
// } 
//  
//  
// } 
// 
function gml_Object_obj_player_Step_0( _inst, _other )
{
{
if (!(_inst.gmlselected > 0.5)) {return 0;}
;
if (mouse_check_button( 1 ) > 0.5) {{
var gmlx_distance,gmlnew_multiple;
gmlx_distance=(_inst.x+(global.gmlGRID_SPACE_WIDTH/2)-g_pBuiltIn.mouse_x);
gmlnew_multiple=((~~(gmlx_distance/10))+1);
if ((abs( gmlnew_multiple )>10)) {{
gmlnew_multiple=(sign( gmlnew_multiple )*10);
}
;}
;
if ((_inst.gmlmultiple!=gmlnew_multiple)) {{
sound_play( 4 );
_inst.gmlmultiple=gmlnew_multiple;
}
;}
;
if (((_inst.x+(_inst.gmlmultiple*_inst.gmljump))<_inst.gmlmin_segment_x)) {{
_inst.gmlmultiple=(~~((_inst.gmlmin_segment_x-_inst.x)/_inst.gmljump));
}
;}
;
_inst.set_image_index( (sign( _inst.gmlmultiple )+1) );
}
;}
;
if (mouse_check_button( 2 ) > 0.5) {{
var gmldistance,gmlnew_jump;
gmldistance=distance_to_point( _inst , (g_pBuiltIn.mouse_x-(global.gmlGRID_SPACE_WIDTH/2)), (g_pBuiltIn.mouse_y-(global.gmlGRID_SPACE_WIDTH/2)) );
gmlnew_jump=min( 10, ((~~(gmldistance/10))+1) );
if ((_inst.gmljump!=gmlnew_jump)) {{
sound_play( 4 );
_inst.gmljump=gmlnew_jump;
}
;}
;
}
;}
;
}
;
}

// #####################################################################################################
// { 
// if (not self.selected) return 0; 
//  
// self.selected = false; 
//  
//  
// } 
// 
function gml_Object_obj_player_Mouse_57( _inst, _other )
{
{
if (!(_inst.gmlselected > 0.5)) {return 0;}
;
_inst.gmlselected=0;
}
;
}

// #####################################################################################################
// { 
// if (not self.selected) return 0; 
//  
// self.selected = false; 
//  
// // Cannot move if still recovering 
// if (self.recovering) return 0; 
//  
// self.move_ready = true; 
// send_move(self.multiple); 
//  
// } 
// 
function gml_Object_obj_player_Mouse_56( _inst, _other )
{
{
if (!(_inst.gmlselected > 0.5)) {return 0;}
;
_inst.gmlselected=0;
if (_inst.gmlrecovering > 0.5) {return 0;}
;
_inst.gmlmove_ready=1;
gml_Script_send_move( _inst , _other , _inst.gmlmultiple );
}
;
}

// #####################################################################################################
// { 
// // Select only if user is at beginning location on bridge for GCD problem 
// if (global.problem_type[global.num_bridge_segments] == global.GCD && self.jumping == 0 && self.x == self.min_segment_x) { 
//   self.selected = true; 
//   self.has_key = false; 
//   obj_key.visible = true; 
// } 
//  
// } 
// 
function gml_Object_obj_player_Mouse_5( _inst, _other )
{
{
if ((((array_get_1D( global, "__gmlproblem_type__" , global.gmlnum_bridge_segments ) ==global.gmlGCD))&&((_inst.gmljumping==0))&&((_inst.x==_inst.gmlmin_segment_x)))) {{
_inst.gmlselected=1;
_inst.gmlhas_key=0;
yyInst(25).visible=1;
}
;}
;
}
;
}

// #####################################################################################################
// { 
// // Select only if there is a positive jump 
// if (self.jump > 0) { 
//   self.selected = true; 
// } else if (self.jump == 0) { 
//   show_message("Use right mouse to set jump length."); 
// } 
//  
// } 
// 
function gml_Object_obj_player_Mouse_4( _inst, _other )
{
{
if ((_inst.gmljump>0)) {{
_inst.gmlselected=1;
}
;}
 else {if ((_inst.gmljump==0)) {{
show_message( "Use right mouse to set jump length." );
}
;}
;};
}
;
}

// #####################################################################################################
// { 
// self.jumping -= 1; 
// sound_play(snd_wood); 
// // Draw wood tiles for numbers - the jump number is a wood_multiple tile 
// var j, i_wood, wood_obj; 
//  
// if (self.count_x != 0) { 
//   wood_obj = obj_wood_multiple; 
// } else { 
//   wood_obj = obj_wood; 
// } 
//  
// if (self.x > self.max_segment_x) { 
//   var final; 
//   final = self.start_jump_x + sign(self.multiple) * self.jump * global.GRID_SPACE_WIDTH; 
//   create_wood_bridge(self.start_jump_x, self.y, final, self.count_x, wood_obj); 
//   self.max_segment_x += self.jump * global.GRID_SPACE_WIDTH; 
//   self.count_x += self.jump; 
// } 
//  
// self.start_jump_x = self.x; 
// self.alarm[0] = 10; // Timeout so that wood gets drawn 
//  
//  
// } 
// 
function gml_Object_obj_player_Other_8( _inst, _other )
{
{
_inst.gmljumping-=1;
sound_play( 2 );
var gmlj,gmli_wood,gmlwood_obj;
if ((_inst.gmlcount_x!=0)) {{
gmlwood_obj=7;
}
;}
 else {{
gmlwood_obj=0;
}
;};
if ((_inst.x>_inst.gmlmax_segment_x)) {{
var gmlfinal;
gmlfinal=(_inst.gmlstart_jump_x+(sign( _inst.gmlmultiple )*_inst.gmljump*global.gmlGRID_SPACE_WIDTH));
gml_Script_create_wood_bridge( _inst , _other , _inst.gmlstart_jump_x, _inst.y, gmlfinal, _inst.gmlcount_x, gmlwood_obj );
_inst.gmlmax_segment_x+=(_inst.gmljump*global.gmlGRID_SPACE_WIDTH);
_inst.gmlcount_x+=_inst.gmljump;
}
;}
;
_inst.gmlstart_jump_x=_inst.x;
array_set_1D( _inst, "__alarm__" , 0,  10 );
}
;
}

// #####################################################################################################
// { 
// draw_self(); 
// if (self.selected) { 
//   draw_set_color(c_white); 
//   draw_set_font(font_multiple); 
//   draw_set_halign(fa_center); 
//   draw_set_valign(fa_middle); 
//   self.step = (self.step + 1) mod sprite_get_number(self.sprite_index); 
//   draw_sprite(self.sprite_index, step, mouse_x, mouse_y); 
//   var value; 
//   if (mouse_check_button(mb_left)) { 
//     draw_set_color(c_white); 
//     value = abs(self.multiple); 
//   } else { 
//     draw_set_color(c_red); 
//     value = self.jump; 
//   } 
//   draw_text(self.x + global.GRID_SPACE_WIDTH/2, self.y + global.GRID_SPACE_WIDTH/2, value); 
// } 
//  
//  
// } 
// 
function gml_Object_obj_player_Draw_0( _inst, _other )
{
{
draw_self( _inst  );
if (_inst.gmlselected > 0.5) {{
draw_set_color( 16777215 );
draw_set_font( 0 );
draw_set_halign( 1 );
draw_set_valign( 1 );
_inst.gmlstep=((_inst.gmlstep+1)%sprite_get_number( _inst.sprite_index ));
draw_sprite( _inst , _inst.sprite_index, _inst.gmlstep, g_pBuiltIn.mouse_x, g_pBuiltIn.mouse_y );
var gmlvalue;
if (mouse_check_button( 1 ) > 0.5) {{
draw_set_color( 16777215 );
gmlvalue=abs( _inst.gmlmultiple );
}
;}
 else {{
draw_set_color( 255 );
gmlvalue=_inst.gmljump;
}
;};
draw_text( (_inst.x+(global.gmlGRID_SPACE_WIDTH/2)), (_inst.y+(global.gmlGRID_SPACE_WIDTH/2)), gmlvalue );
}
;}
;
}
;
}

// #####################################################################################################
// { 
// event_inherited(); 
// self.original_path = path_me; 
// self.name = 'B'; 
// self.player = 'B'; 
//  
//  
// } 
// 
function gml_Object_obj_player_B_Create_0( _inst, _other )
{
{
event_inherited( _inst , _other  );
_inst.gmloriginal_path=0;
_inst.gmlname="B";
_inst.gmlplayer="B";
}
;
}

// #####################################################################################################
// { 
// event_inherited(); 
// self.original_path = path_monkey; 
// self.name = 'A'; 
// self.player = 'A'; 
//  
//  
// } 
// 
function gml_Object_obj_player_A_Create_0( _inst, _other )
{
{
event_inherited( _inst , _other  );
_inst.gmloriginal_path=1;
_inst.gmlname="A";
_inst.gmlplayer="A";
}
;
}

// #####################################################################################################
// { 
// self.recovering = false; 
// self.move_ready = false; 
// self.name = 'Sinhika'; 
//  
//  
// } 
// 
function gml_Object_obj_sinhika_Create_0( _inst, _other )
{
{
_inst.gmlrecovering=0;
_inst.gmlmove_ready=0;
_inst.gmlname="Sinhika";
}
;
}

// #####################################################################################################
// { 
// // Recovered alarm 
// self.recovering = false; 
// self.sprite_index = spr_sinhika; 
// self.move_ready = true; 
//  
//  
// } 
// 
function gml_Object_obj_sinhika_Alarm_0( _inst, _other )
{
{
_inst.gmlrecovering=0;
_inst.sprite_index=23;
_inst.gmlmove_ready=1;
}
;
}

// #####################################################################################################
// { 
// // Passive sinhika does not collide 
// if (self.recovering) { 
//   return 0; 
// } 
// // Players in initial location do not collide 
// // Jumping players do not collide 
// with other { 
//   if (self.jumping > 0) return 0; 
//   if (self.x == self.min_segment_x) return 0; 
// } 
// // If both players in same number, do not collide 
// if (instance_exists(obj_player_A)) { 
//   if (obj_player_B.x == obj_player_A.x) return 0; 
// } 
//  
// self.recovering = true; 
// self.sprite_index = spr_sinhika_recovering; 
// motion_set(maza_irandom_range(0, 360), maza_irandom_range(1,2)); 
// alarm[0] = maza_irandom_range(30, 60); 
// var explosion; 
// explosion = instance_create(self.x, self.y, obj_explosion); 
// explosion.delta_health = 20; 
//  
//  
// } 
// 
function gml_Object_obj_sinhika_Collision_12( _inst, _other )
{
{
if (_inst.gmlrecovering > 0.5) {{
return 0;
}
;}
;
{
if ((_other.gmljumping>0)) {return 0;}
;
if ((_other.x==_other.gmlmin_segment_x)) {return 0;}
;
}
;
if (instance_exists( 14 ) > 0.5) {{
if ((yyInst(13).x==yyInst(14).x)) {return 0;}
;
}
;}
;
_inst.gmlrecovering=1;
_inst.sprite_index=24;
motion_set( _inst , gml_Script_maza_irandom_range( _inst , _other , 0, 360 ), gml_Script_maza_irandom_range( _inst , _other , 1, 2 ) );
array_set_1D( _inst, "__alarm__" , 0,  gml_Script_maza_irandom_range( _inst , _other , 30, 60 ) );
var gmlexplosion;
gmlexplosion=instance_create( _inst.x, _inst.y, 2 );
yyInst(gmlexplosion).gmldelta_health=20;
}
;
}

// #####################################################################################################
// { 
// self.step = 0; 
//  
//  
// } 
// 
function gml_Object_obj_control_player_Create_0( _inst, _other )
{
{
_inst.gmlstep=0;
}
;
}

// #####################################################################################################
// { 
// if (!instance_exists(self.player_id)) return 0; 
//  
// if (object_get_parent(self.player_id) == obj_player) { 
//   image_index = sign((self.player_id).multiple) + 1; 
// } 
//      
//  
// } 
// 
function gml_Object_obj_control_player_Step_0( _inst, _other )
{
{
if (!(instance_exists( _inst.gmlplayer_id ) > 0.5)) {return 0;}
;
if ((object_get_parent( _inst.gmlplayer_id )==12)) {{
_inst.set_image_index( (sign( yyInst(_inst.gmlplayer_id).gmlmultiple )+1) );
}
;}
;
}
;
}

// #####################################################################################################
// { 
// if (!instance_exists(self.player_id)) return 0; 
// view_object[global.MAIN_VIEW] = self.player_id; 
//  
// } 
// 
function gml_Object_obj_control_player_Mouse_0( _inst, _other )
{
{
if (!(instance_exists( _inst.gmlplayer_id ) > 0.5)) {return 0;}
;
array_set_1D( g_pBuiltIn, "__view_object__" , global.gmlMAIN_VIEW,  _inst.gmlplayer_id );
}
;
}

// #####################################################################################################
// { 
// if (!instance_exists(self.player_id)) return 0; 
//  
// draw_self(); 
// draw_set_color(c_white); 
// draw_set_halign(fa_center); 
// draw_set_valign(fa_bottom); 
// draw_set_font(-1); 
//  
// draw_text_transformed(self.x + global.GRID_SPACE_WIDTH/2, self.y + 1.5*global.GRID_SPACE_WIDTH,  
//                       (self.player_id).name, 0.75, 0.75, 0); 
// if (object_get_parent(self.player_id) == obj_player) { 
//   draw_set_font(font_multiple); 
//   draw_set_halign(fa_center); 
//   draw_set_valign(fa_middle); 
//   draw_sprite(spr_wood_multiple, -1, self.x + global.GRID_SPACE_WIDTH, self.y); 
//   draw_set_color(c_black); 
//   draw_text(self.x + 1.5*global.GRID_SPACE_WIDTH, self.y + global.GRID_SPACE_WIDTH/2,  
//             (self.player_id).jump); 
//   if ((self.player_id).multiple != 0) {             
//       draw_set_color(c_white); 
//       draw_text(self.x + 2.5*global.GRID_SPACE_WIDTH, self.y + global.GRID_SPACE_WIDTH/2,  
//                 " x " + string(abs((self.player_id).multiple))); 
//   } 
// } 
//  
// } 
// 
function gml_Object_obj_control_player_Draw_0( _inst, _other )
{
{
if (!(instance_exists( _inst.gmlplayer_id ) > 0.5)) {return 0;}
;
draw_self( _inst  );
draw_set_color( 16777215 );
draw_set_halign( 1 );
draw_set_valign( 2 );
draw_set_font( -1 );
draw_text_transformed( (_inst.x+(global.gmlGRID_SPACE_WIDTH/2)), (_inst.y+(1.5*global.gmlGRID_SPACE_WIDTH)), yyInst(_inst.gmlplayer_id).gmlname, 0.75, 0.75, 0 );
if ((object_get_parent( _inst.gmlplayer_id )==12)) {{
draw_set_font( 0 );
draw_set_halign( 1 );
draw_set_valign( 1 );
draw_sprite( _inst , 7, -1, (_inst.x+global.gmlGRID_SPACE_WIDTH), _inst.y );
draw_set_color( 0 );
draw_text( (_inst.x+(1.5*global.gmlGRID_SPACE_WIDTH)), (_inst.y+(global.gmlGRID_SPACE_WIDTH/2)), yyInst(_inst.gmlplayer_id).gmljump );
if ((yyInst(_inst.gmlplayer_id).gmlmultiple!=0)) {{
draw_set_color( 16777215 );
draw_text( (_inst.x+(2.5*global.gmlGRID_SPACE_WIDTH)), (_inst.y+(global.gmlGRID_SPACE_WIDTH/2)), (" x "+string( abs( yyInst(_inst.gmlplayer_id).gmlmultiple ) )) );
}
;}
;
}
;}
;
}
;
}

// #####################################################################################################
// { 
// instance_destroy(); 
//  
//  
// } 
// 
function gml_Object_obj_gem_Other_1( _inst, _other )
{
{
instance_destroy( _inst  );
}
;
}

// #####################################################################################################
// { 
// self.x = mouse_x; 
// self.y = mouse_y; 
//  
//  
// } 
// 
function gml_Object_obj_sword_Step_0( _inst, _other )
{
{
_inst.setx( g_pBuiltIn.mouse_x );
_inst.sety( g_pBuiltIn.mouse_y );
}
;
}

// #####################################################################################################
// { 
// with other { instance_destroy(); } 
//  
//  
// } 
// 
function gml_Object_obj_sword_Collision_17( _inst, _other )
{
{
{
instance_destroy( _other  );
}
;
}
;
}

// #####################################################################################################
// { 
// action_set_alarm( 220, 0 ); 
// } 
// 
function gml_Object_obj_celebrate_Create_0( _inst, _other )
{
{
action_set_alarm( _inst , 220, 0 );
}
;
}

// #####################################################################################################
// { 
// goto_room(Modelling_Room); 
//  
// } 
// 
function gml_Object_obj_celebrate_Alarm_0( _inst, _other )
{
{
gml_Script_goto_room( _inst , _other , 1 );
}
;
}

// #####################################################################################################
// { 
// draw_set_color( c_blue ); 
// draw_set_font( fnt_h ); 
// if (global.lcm_correct = "true"){ 
//     draw_text( 300, 100, 'Celebration Room ##Collect Bonus Points :-)' ); 
// } 
// if (global.lcm_correct = "false"){ 
//     draw_text( 300, 100, 'Crying Room ##No Bonus Points :-(' ); 
// } 
// draw_sprite(spr_celebrate,0, 300,300); 
//  
//  
// } 
// 
function gml_Object_obj_celebrate_Draw_0( _inst, _other )
{
{
draw_set_color( 16711680 );
draw_set_font( 1 );
if ((global.gmllcm_correct=="true")) {{
draw_text( 300, 100, "Celebration Room ##Collect Bonus Points :-)" );
}
;}
;
if ((global.gmllcm_correct=="false")) {{
draw_text( 300, 100, "Crying Room ##No Bonus Points :-(" );
}
;}
;
draw_sprite( _inst , 29, 0, 300, 300 );
}
;
}

// #####################################################################################################
// { 
// if (global.problem_type[global.num_bridge_segments] = global.GCD){ 
//     obj_model_controller.state = obj_model_controller.STATE_HCF_CORRECT; 
// } 
// if (global.problem_type[global.num_bridge_segments] = global.LCM){ 
//     obj_model_controller.state = obj_model_controller.STATE_HCF_WRONG; 
// } 
// with obj_lcm { instance_destroy();} 
// instance_destroy(); 
// obj_whiteboard.counter = global.state_end_counter[obj_model_controller.state - 1]; 
// obj_whiteboard.alarm[0] = 1; 
//  
//  
// } 
// 
function gml_Object_obj_hcf_Mouse_4( _inst, _other )
{
{
if ((array_get_1D( global, "__gmlproblem_type__" , global.gmlnum_bridge_segments ) ==global.gmlGCD)) {{
yyInst(23).gmlstate=yyInst(23).gmlSTATE_HCF_CORRECT;
}
;}
;
if ((array_get_1D( global, "__gmlproblem_type__" , global.gmlnum_bridge_segments ) ==global.gmlLCM)) {{
yyInst(23).gmlstate=yyInst(23).gmlSTATE_HCF_WRONG;
}
;}
;
{
var __yy__v33 = GetWithArray(21 );
for( var __yy__v34 in __yy__v33 ) {
 var __yy__v35 = __yy__v33[__yy__v34];
{
instance_destroy( __yy__v35  );
}
}
}
;
instance_destroy( _inst  );
yyInst(35).gmlcounter=array_get_1D( global, "__gmlstate_end_counter__" , (yyInst(23).gmlstate-1) ) ;
array_set_1D( yyInst(35), "__alarm__" , 0,  1 );
}
;
}

// #####################################################################################################
// { 
// if (global.problem_type[global.num_bridge_segments] == global.LCM){ 
//   obj_model_controller.state = obj_model_controller.STATE_LCM_CORRECT; 
// } 
// if (global.problem_type[global.num_bridge_segments] == global.GCD){ 
//   obj_model_controller.state = obj_model_controller.STATE_LCM_WRONG; 
// } 
// with obj_hcf { instance_destroy();} 
// instance_destroy(); 
// obj_whiteboard.counter = global.state_end_counter[obj_model_controller.state - 1]; 
// obj_whiteboard.alarm[0] = 1; 
//  
//  
// } 
// 
function gml_Object_obj_lcm_Mouse_4( _inst, _other )
{
{
if ((array_get_1D( global, "__gmlproblem_type__" , global.gmlnum_bridge_segments ) ==global.gmlLCM)) {{
yyInst(23).gmlstate=yyInst(23).gmlSTATE_LCM_CORRECT;
}
;}
;
if ((array_get_1D( global, "__gmlproblem_type__" , global.gmlnum_bridge_segments ) ==global.gmlGCD)) {{
yyInst(23).gmlstate=yyInst(23).gmlSTATE_LCM_WRONG;
}
;}
;
{
var __yy__v36 = GetWithArray(20 );
for( var __yy__v37 in __yy__v36 ) {
 var __yy__v38 = __yy__v36[__yy__v37];
{
instance_destroy( __yy__v38  );
}
}
}
;
instance_destroy( _inst  );
yyInst(35).gmlcounter=array_get_1D( global, "__gmlstate_end_counter__" , (yyInst(23).gmlstate-1) ) ;
array_set_1D( yyInst(35), "__alarm__" , 0,  1 );
}
;
}

// #####################################################################################################
// { 
// // If Story is already loaded, no need to load 
// self.STATE_INTRO = 0; 
// self.STATE_ENCOURAGE = 1; 
// self.STATE_STORY = 2; 
// self.STATE_TRAINING = 3; 
// self.STATE_PROBLEM = 4; 
// self.STATE_HCF_CORRECT = 5; 
// self.STATE_HCF_WRONG = 6; 
// self.STATE_LCM_CORRECT = 7; 
// self.STATE_LCM_WRONG = 8; 
// self.STATE_DONE = 9; 
//  
// if (global.current_story == -1) { 
//   load_story(); 
//   load_game_narrative(); 
//   self.state = self.STATE_INTRO; 
// } else { 
//   self.state = self.STATE_ENCOURAGE; 
// } 
//  
//  
// } 
// 
function gml_Object_obj_model_controller_Create_0( _inst, _other )
{
{
_inst.gmlSTATE_INTRO=0;
_inst.gmlSTATE_ENCOURAGE=1;
_inst.gmlSTATE_STORY=2;
_inst.gmlSTATE_TRAINING=3;
_inst.gmlSTATE_PROBLEM=4;
_inst.gmlSTATE_HCF_CORRECT=5;
_inst.gmlSTATE_HCF_WRONG=6;
_inst.gmlSTATE_LCM_CORRECT=7;
_inst.gmlSTATE_LCM_WRONG=8;
_inst.gmlSTATE_DONE=9;
if ((global.gmlcurrent_story==-1)) {{
gml_Script_load_story( _inst , _other  );
gml_Script_load_game_narrative( _inst , _other  );
_inst.gmlstate=_inst.gmlSTATE_INTRO;
}
;}
 else {{
_inst.gmlstate=_inst.gmlSTATE_ENCOURAGE;
}
;};
}
;
}

// #####################################################################################################
// { 
// var coin_toss; 
// coin_toss = maza_irandom_range(1,100); 
//  
// if (coin_toss <= 50){ 
//   global.problem_type[global.num_bridge_segments] = global.LCM; 
//   self.problem = 'Monkey and its shadow reaching the same point with different jump lengths' ; 
// } 
// else { 
//   self.problem = 'Monkey picking up key and going to treasure with the same jump length'; 
//   global.problem_type[global.num_bridge_segments] = global.GCD; 
// } 
//  
// var problem_seq_num; 
// problem_seq_num = global.state_end_counter[self.STATE_PROBLEM] - 1; 
// global.game_text[problem_seq_num] = self.problem; 
//  
// if (global.lcm_correct == "true"){ 
//     global.lcm_correct = "false"; 
// } 
//  
//  
// } 
// 
function gml_Object_obj_model_controller_Other_4( _inst, _other )
{
{
var gmlcoin_toss;
gmlcoin_toss=gml_Script_maza_irandom_range( _inst , _other , 1, 100 );
if ((gmlcoin_toss<=50)) {{
array_set_1D( global, "__gmlproblem_type__" , global.gmlnum_bridge_segments,  global.gmlLCM );
_inst.gmlproblem="Monkey and its shadow reaching the same point with different jump lengths";
}
;}
 else {{
_inst.gmlproblem="Monkey picking up key and going to treasure with the same jump length";
array_set_1D( global, "__gmlproblem_type__" , global.gmlnum_bridge_segments,  global.gmlGCD );
}
;};
var gmlproblem_seq_num;
gmlproblem_seq_num=(array_get_1D( global, "__gmlstate_end_counter__" , _inst.gmlSTATE_PROBLEM ) -1);
array_set_1D( global, "__gmlgame_text__" , gmlproblem_seq_num,  _inst.gmlproblem );
if ((global.gmllcm_correct=="true")) {{
global.gmllcm_correct="false";
}
;}
;
}
;
}

// #####################################################################################################
// { 
// // View object should be shifted back to key and then to player B 
// if (view_object[global.MAIN_VIEW] == self.id) { 
//   view_object[global.MAIN_VIEW] = obj_key.id; 
//   self.alarm[0] = room_speed * 3; 
// } else if (view_object[global.MAIN_VIEW] == obj_key.id) { 
//   view_object[global.MAIN_VIEW] = obj_player_B.id; 
// } 
//  
//  
// } 
// 
function gml_Object_obj_treasure_Alarm_0( _inst, _other )
{
{
if ((array_get_1D( g_pBuiltIn, "__view_object__" , global.gmlMAIN_VIEW ) ==_inst.id)) {{
array_set_1D( g_pBuiltIn, "__view_object__" , global.gmlMAIN_VIEW,  yyInst(25).id );
array_set_1D( _inst, "__alarm__" , 0,  (g_pBuiltIn.room_speed*3) );
}
;}
 else {if ((array_get_1D( g_pBuiltIn, "__view_object__" , global.gmlMAIN_VIEW ) ==yyInst(25).id)) {{
array_set_1D( g_pBuiltIn, "__view_object__" , global.gmlMAIN_VIEW,  yyInst(13).id );
}
;}
;};
}
;
}

// #####################################################################################################
// { 
// if (global.path > 1) {  
//     global.path -= 1; 
// } 
// else { 
//     global.path = 1; 
// } 
//  
//  
// } 
// 
function gml_Object_obj_left_arrow_Mouse_7( _inst, _other )
{
{
if ((global.gmlpath>1)) {{
global.gmlpath-=1;
}
;}
 else {{
global.gmlpath=1;
}
;};
}
;
}

// #####################################################################################################
// { 
// global.total_points = 1000; 
// global.path = 1; 
// global.snd = 1; 
// global.path_text = ""; 
// global.shout_text = ""; 
//  
//  
// } 
// 
function gml_Object_obj_neel_Create_0( _inst, _other )
{
{
global.gmltotal_points=1000;
global.gmlpath=1;
global.gmlsnd=1;
global.gmlpath_text="";
global.gmlshout_text="";
}
;
}

// #####################################################################################################
// { 
// draw_set_color( c_blue ); 
// draw_set_font( fnt_h ); 
// draw_text(600,30,'Total Reward Points Avaialable : ' + string (global.total_points)); 
// draw_sprite(spr_neel,0,0,0); 
// draw_text(600,70,'Select Jump Path [500 points]'); 
//  
// draw_set_color( c_red ); 
// if (global.path = 1) { draw_path(path0,500, 240, false); draw_text(700,200,'Path 1'); } 
// if (global.path = 2) { draw_path(path1,500, 240, false); draw_text(700,200,'Path 2'); } 
// if (global.path = 3) { draw_path(path2,500, 240, false); draw_text(700,200,'Path 3'); } 
// if (global.path = 4) { draw_path(path3,500, 240, false); draw_text(700,200,'Path 4'); } 
//  
// draw_set_color( c_blue ); 
// draw_text(600,325,'Select Shout [500 points]'); 
//  
// draw_set_color( c_red ); 
// if (global.snd = 1)  draw_text(700,350,'Shout 1'); 
// if (global.snd = 2)  draw_text(700,350,'Shout 2'); 
// if (global.snd = 3)  draw_text(700,350,'Shout 3'); 
// if (global.snd = 4)  draw_text(700,350,'Shout 4'); 
//  
// draw_set_color (c_green); 
// draw_text(600, 500, global.path_text); 
// draw_text(600, 525, global.shout_text); 
//  
//  
//  
// } 
// 
function gml_Object_obj_neel_Draw_0( _inst, _other )
{
{
draw_set_color( 16711680 );
draw_set_font( 1 );
draw_text( 600, 30, ("Total Reward Points Avaialable : "+string( global.gmltotal_points )) );
draw_sprite( _inst , 32, 0, 0, 0 );
draw_text( 600, 70, "Select Jump Path [500 points]" );
draw_set_color( 255 );
if ((global.gmlpath==1)) {{
draw_path( 2, 500, 240, 0 );
draw_text( 700, 200, "Path 1" );
}
;}
;
if ((global.gmlpath==2)) {{
draw_path( 3, 500, 240, 0 );
draw_text( 700, 200, "Path 2" );
}
;}
;
if ((global.gmlpath==3)) {{
draw_path( 4, 500, 240, 0 );
draw_text( 700, 200, "Path 3" );
}
;}
;
if ((global.gmlpath==4)) {{
draw_path( 5, 500, 240, 0 );
draw_text( 700, 200, "Path 4" );
}
;}
;
draw_set_color( 16711680 );
draw_text( 600, 325, "Select Shout [500 points]" );
draw_set_color( 255 );
if ((global.gmlsnd==1)) {draw_text( 700, 350, "Shout 1" );}
;
if ((global.gmlsnd==2)) {draw_text( 700, 350, "Shout 2" );}
;
if ((global.gmlsnd==3)) {draw_text( 700, 350, "Shout 3" );}
;
if ((global.gmlsnd==4)) {draw_text( 700, 350, "Shout 4" );}
;
draw_set_color( 32768 );
draw_text( 600, 500, global.gmlpath_text );
draw_text( 600, 525, global.gmlshout_text );
}
;
}

// #####################################################################################################
// { 
// goto_room(lcm); 
//  
// } 
// 
function gml_Object_obj_play_game_Mouse_7( _inst, _other )
{
{
gml_Script_goto_room( _inst , _other , 0 );
}
;
}

// #####################################################################################################
// { 
// if (global.path < 4) { global.path += 1;} 
// else {global.path = 4;} 
//  
//  
// } 
// 
function gml_Object_obj_right_arrow_Mouse_7( _inst, _other )
{
{
if ((global.gmlpath<4)) {{
global.gmlpath+=1;
}
;}
 else {{
global.gmlpath=4;
}
;};
}
;
}

// #####################################################################################################
// { 
// global.path_selected = global.path; 
// global.path_text = "The Path selected is Path " + string(global.path); 
//  
//  
// } 
// 
function gml_Object_obj_sel_path_Mouse_7( _inst, _other )
{
{
global.gmlpath_selected=global.gmlpath;
global.gmlpath_text=("The Path selected is Path "+string( global.gmlpath ));
}
;
}

// #####################################################################################################
// { 
// global.shout_selected = global.snd ; 
// global.shout_text = "The Shout selected is Shout " + string(global.snd); 
//  
//  
// } 
// 
function gml_Object_obj_sel_shout_Mouse_0( _inst, _other )
{
{
global.gmlshout_selected=global.gmlsnd;
global.gmlshout_text=("The Shout selected is Shout "+string( global.gmlsnd ));
}
;
}

// #####################################################################################################
// { 
// if (global.snd > 1) {  
//     global.snd -= 1; 
// } 
// else { 
//     global.snd = 1; 
// } 
//  
//  
// } 
// 
function gml_Object_obj_snd_left_Mouse_7( _inst, _other )
{
{
if ((global.gmlsnd>1)) {{
global.gmlsnd-=1;
}
;}
 else {{
global.gmlsnd=1;
}
;};
}
;
}

// #####################################################################################################
// { 
// if (global.snd < 4) { global.snd += 1;} 
// else {global.snd = 4;} 
//  
//  
// } 
// 
function gml_Object_obj_snd_right_Mouse_7( _inst, _other )
{
{
if ((global.gmlsnd<4)) {{
global.gmlsnd+=1;
}
;}
 else {{
global.gmlsnd=4;
}
;};
}
;
}

// #####################################################################################################
// { 
// if (global.snd = 1)  sound_play(snd_shout1); 
// if (global.snd = 2)  sound_play(snd_shout2); 
// if (global.snd = 3)  sound_play(snd_shout3); 
// if (global.snd = 4)  sound_play(snd_shout4); 
//  
//  
// } 
// 
function gml_Object_obj_snd_play_Mouse_7( _inst, _other )
{
{
if ((global.gmlsnd==1)) {sound_play( 7 );}
;
if ((global.gmlsnd==2)) {sound_play( 8 );}
;
if ((global.gmlsnd==3)) {sound_play( 9 );}
;
if ((global.gmlsnd==4)) {sound_play( 10 );}
;
}
;
}

// #####################################################################################################
// { 
// self.alarm[0] = 100; 
// self.counter = 0; 
// if (obj_model_controller.state != obj_model_controller.STATE_INTRO) { 
//   self.counter = global.state_end_counter[obj_model_controller.state - 1]; 
// } 
//  
//  
// } 
// 
function gml_Object_obj_whiteboard_Create_0( _inst, _other )
{
{
array_set_1D( _inst, "__alarm__" , 0,  100 );
_inst.gmlcounter=0;
if ((yyInst(23).gmlstate!=yyInst(23).gmlSTATE_INTRO)) {{
_inst.gmlcounter=array_get_1D( global, "__gmlstate_end_counter__" , (yyInst(23).gmlstate-1) ) ;
}
;}
;
}
;
}

// #####################################################################################################
// { 
// // Story next line alarm 
// if (obj_model_controller.state == obj_model_controller.STATE_DONE) { 
//   goto_room(lcm); 
//   return 0; 
// } 
//  
// if (obj_model_controller.state == obj_model_controller.STATE_STORY) { 
//   global.current_story += 1; 
//   if (global.current_story >= global.num_story) { 
//     global.current_story = 0; 
//   } else if (global.story[global.current_story,1] == '') { 
//     obj_model_controller.state = next_state(); 
//     self.counter = global.state_end_counter[obj_model_controller.state - 1]; 
//   } 
// } else { 
//   self.counter += 1; 
//   if (global.state_end_counter[obj_model_controller.state] == self.counter) { 
//     obj_model_controller.state = next_state(); 
//     self.counter = global.state_end_counter[obj_model_controller.state - 1]; 
//   } 
//   if (obj_model_controller.state == obj_model_controller.STATE_PROBLEM) { 
//     obj_lcm.visible = true; 
//     obj_hcf.visible = true; 
//   } 
// } 
//  
// alarm[0] = 100; 
//  
//  
// } 
// 
function gml_Object_obj_whiteboard_Alarm_0( _inst, _other )
{
{
if ((yyInst(23).gmlstate==yyInst(23).gmlSTATE_DONE)) {{
gml_Script_goto_room( _inst , _other , 0 );
return 0;
}
;}
;
if ((yyInst(23).gmlstate==yyInst(23).gmlSTATE_STORY)) {{
global.gmlcurrent_story+=1;
if ((global.gmlcurrent_story>=global.gmlnum_story)) {{
global.gmlcurrent_story=0;
}
;}
 else {if ((array_get_2D( global, "__gmlstory__" , global.gmlcurrent_story, 1 ) =="")) {{
yyInst(23).gmlstate=gml_Script_next_state( _inst , _other  );
_inst.gmlcounter=array_get_1D( global, "__gmlstate_end_counter__" , (yyInst(23).gmlstate-1) ) ;
}
;}
;};
}
;}
 else {{
_inst.gmlcounter+=1;
if ((array_get_1D( global, "__gmlstate_end_counter__" , yyInst(23).gmlstate ) ==_inst.gmlcounter)) {{
yyInst(23).gmlstate=gml_Script_next_state( _inst , _other  );
_inst.gmlcounter=array_get_1D( global, "__gmlstate_end_counter__" , (yyInst(23).gmlstate-1) ) ;
}
;}
;
if ((yyInst(23).gmlstate==yyInst(23).gmlSTATE_PROBLEM)) {{
yyInst(21).visible=1;
yyInst(20).visible=1;
}
;}
;
}
;};
array_set_1D( _inst, "__alarm__" , 0,  100 );
}
;
}

// #####################################################################################################
// { 
// obj_model_controller.state = obj_model_controller.STATE_PROBLEM; 
// obj_whiteboard.counter = global.state_end_counter[obj_model_controller.state - 1]; 
//  
//  
// } 
// 
function gml_Object_obj_whiteboard_Mouse_0( _inst, _other )
{
{
yyInst(23).gmlstate=yyInst(23).gmlSTATE_PROBLEM;
yyInst(35).gmlcounter=array_get_1D( global, "__gmlstate_end_counter__" , (yyInst(23).gmlstate-1) ) ;
}
;
}

// #####################################################################################################
// { 
// draw_self(); 
// draw_set_color( c_blue ); 
// draw_set_font( fnt_h ); 
// draw_set_halign(fa_center); 
// draw_set_valign(fa_middle); 
// // Story 
// var actor, sprite; 
// if (obj_model_controller.state != obj_model_controller.STATE_STORY) { 
//   draw_set_color(c_black); 
//   draw_rectangle(self.x, self.y, self.x + sprite_width, self.y + sprite_height, 0); 
//   draw_set_color(c_white); 
//   draw_sprite(spr_sugriva, -1, self.x + sprite_width - 50, self.y + sprite_height - 50); 
//   draw_text_ext(self.x + sprite_width/2, self.y + sprite_height/2,  
//       global.game_text[self.counter], 20, sprite_width); 
// } else { 
//   actor = global.story[global.current_story, 0]; 
//   sprite = ds_map_find_value(global.actors, actor); 
//   if (sprite != 0) { 
//     draw_sprite(sprite, -1, self.x + sprite_width/2, self.y +sprite_height/2); 
//   } 
//   draw_text_ext(self.x + sprite_width/2, self.y + sprite_height/2,  
//                 global.story[global.current_story,1], 20, sprite_width); 
// } 
//  
//  
// } 
// 
function gml_Object_obj_whiteboard_Draw_0( _inst, _other )
{
{
draw_self( _inst  );
draw_set_color( 16711680 );
draw_set_font( 1 );
draw_set_halign( 1 );
draw_set_valign( 1 );
var gmlactor,gmlsprite;
if ((yyInst(23).gmlstate!=yyInst(23).gmlSTATE_STORY)) {{
draw_set_color( 0 );
draw_rectangle( _inst.x, _inst.y, (_inst.x+_inst.get_sprite_width()), (_inst.y+_inst.get_sprite_height()), 0 );
draw_set_color( 16777215 );
draw_sprite( _inst , 43, -1, (_inst.x+_inst.get_sprite_width()-50), (_inst.y+_inst.get_sprite_height()-50) );
draw_text_ext( (_inst.x+(_inst.get_sprite_width()/2)), (_inst.y+(_inst.get_sprite_height()/2)), array_get_1D( global, "__gmlgame_text__" , _inst.gmlcounter ) , 20, _inst.get_sprite_width() );
}
;}
 else {{
gmlactor=array_get_2D( global, "__gmlstory__" , global.gmlcurrent_story, 0 ) ;
gmlsprite=ds_map_find_value( global.gmlactors, gmlactor );
if ((gmlsprite!=0)) {{
draw_sprite( _inst , gmlsprite, -1, (_inst.x+(_inst.get_sprite_width()/2)), (_inst.y+(_inst.get_sprite_height()/2)) );
}
;}
;
draw_text_ext( (_inst.x+(_inst.get_sprite_width()/2)), (_inst.y+(_inst.get_sprite_height()/2)), array_get_2D( global, "__gmlstory__" , global.gmlcurrent_story, 1 ) , 20, _inst.get_sprite_width() );
}
;};
}
;
}

// #####################################################################################################
// self.problem = '';
// self.problem_value = 0;
function gml_RoomCC_lcm_2_Create( _inst )
{
_inst.gmlproblem="";
_inst.gmlproblem_value=0;
}

// #####################################################################################################
// self.sound = snd_monkey;
function gml_RoomCC_lcm_4_Create( _inst )
{
_inst.gmlsound=0;
}

// #####################################################################################################
// self.sound = snd_me;
function gml_RoomCC_lcm_6_Create( _inst )
{
_inst.gmlsound=1;
}

// #####################################################################################################
// self.player_id = obj_player_A;
// self.sprite_index = spr_me2;
// self.image_speed = 0;
function gml_RoomCC_lcm_9_Create( _inst )
{
_inst.gmlplayer_id=14;
_inst.sprite_index=22;
_inst.image_speed=0;
}

// #####################################################################################################
// self.player_id = obj_player_B;
// self.sprite_index = spr_me;
// self.image_speed = 0;
function gml_RoomCC_lcm_10_Create( _inst )
{
_inst.gmlplayer_id=13;
_inst.sprite_index=21;
_inst.image_speed=0;
}

// #####################################################################################################
// self.player_id = obj_sinhika;
// self.sprite_index = spr_sinhika;
// self.image_speed = 0;
function gml_RoomCC_lcm_11_Create( _inst )
{
_inst.gmlplayer_id=15;
_inst.sprite_index=23;
_inst.image_speed=0;
}

// #####################################################################################################
// self.image_speed = 0;
// self.image_index = 1;
function gml_RoomCC_Modelling_Room_4_Create( _inst )
{
_inst.image_speed=0;
_inst.set_image_index( 1 );
}

// #####################################################################################################
// //sound_play(snd_celebrate);
function gml_Room_Celebration_Room_Create(_inst)
{
}

// #####################################################################################################
// global.rm = "hcf";
function gml_Room_dummy_hcf_Create(_inst)
{
global.gmlrm="hcf";
}

var ng={};(function(og,undefined){if(!(Object.prototype.defineProperty instanceof Function)&&Object.prototype.__defineGetter__ instanceof Function&&Object.prototype.__defineSetter__ instanceof Function){Object.defineProperty=function(pg,qg,rg){if(rg.sg instanceof Function)pg.__defineGetter__(qg,rg.sg);if(rg.tg instanceof Function)pg.__defineSetter__(qg,rg.tg);}}function ug(){};og.vg=function(wg,xg){var yg=wg;ug.prototype=xg.prototype;wg.prototype=new ug;wg.prototype.constructor=yg;};og.zg=function zg(context,ah){
return function(){ah.apply(context,arguments);};};og.bh=function bh(length){if(length===undefined)length=0;var ch=new Array(length||0);for(var i=0;i<length;++i)ch[i]=0;return ch;};og.dh=function dh(eh,fh){if(eh===null)return false;if((fh instanceof Function)&&(eh instanceof fh))return true;if((eh.constructor.__implements!=undefined)&&(eh.constructor.__implements[fh]))return true;return false;};og.gh=function(hh){return Math.abs(parseInt(hh));};})(ng);var ih=Array;var jh=ng.bh;if(typeof(ng)==="undefined")ng={};if(typeof(ng.kh)==="undefined")ng.kh={
};if(typeof(ng.kh.lh)==="undefined")ng.kh.lh={};if(typeof(ng.mh)==="undefined")ng.mh={};if(typeof(ng.mh.Math)==="undefined")ng.mh.Math={};if(typeof(ng.nh)==="undefined")ng.nh={};if(typeof(ng.nh.ph)==="undefined")ng.nh.ph={};if(typeof(ng.nh.qh)==="undefined")ng.nh.qh={};if(typeof(ng.nh.rh)==="undefined")ng.nh.rh={};(function(){ng.kh.sh='Box2D.Collision.IBroadPhase';function th(){th.th.apply(this,arguments);};ng.kh.th=th;function uh(){uh.uh.apply(this,arguments);};ng.kh.uh=uh;function vh(){vh.vh.apply(this,
arguments);if(this.constructor===vh)this.vh.apply(this,arguments);};ng.kh.vh=vh;function wh(){wh.wh.apply(this,arguments);};ng.kh.wh=wh;function xh(){xh.xh.apply(this,arguments);if(this.constructor===xh)this.xh.apply(this,arguments);};ng.kh.xh=xh;function yh(){yh.yh.apply(this,arguments);};ng.kh.yh=yh;function zh(){zh.zh.apply(this,arguments);};ng.kh.zh=zh;function ai(){ai.ai.apply(this,arguments);};ng.kh.ai=ai;function bi(){bi.bi.apply(this,arguments);};ng.kh.bi=bi;function ci(){ci.ci.apply(this,arguments);
};ng.kh.ci=ci;function di(){di.di.apply(this,arguments);if(this.constructor===di)this.di.apply(this,arguments);};ng.kh.di=di;function ei(){ei.ei.apply(this,arguments);};ng.kh.ei=ei;function fi(){fi.fi.apply(this,arguments);};ng.kh.fi=fi;function gi(){gi.gi.apply(this,arguments);};ng.kh.gi=gi;function hi(){hi.hi.apply(this,arguments);if(this.constructor===hi)this.hi.apply(this,arguments);};ng.kh.hi=hi;function ii(){ii.ii.apply(this,arguments);if(this.constructor===ii)this.ii.apply(this,arguments);};ng.kh.ii=ii;
function ji(){ji.ji.apply(this,arguments);};ng.kh.ji=ji;function ki(){ki.ki.apply(this,arguments);if(this.constructor===ki)this.ki.apply(this,arguments);};ng.kh.ki=ki;function li(){li.li.apply(this,arguments);};ng.kh.li=li;function mi(){mi.mi.apply(this,arguments);};ng.kh.mi=mi;function ni(){ni.ni.apply(this,arguments);};ng.kh.ni=ni;function oi(){oi.oi.apply(this,arguments);if(this.constructor===oi)this.oi.apply(this,arguments);};ng.kh.oi=oi;function qi(){qi.qi.apply(this,arguments);};ng.kh.qi=qi;function ri(){
ri.ri.apply(this,arguments);};ng.kh.ri=ri;function si(){si.si.apply(this,arguments);};ng.kh.si=si;function ti(){ti.ti.apply(this,arguments);};ng.kh.ti=ti;function ui(){ui.ui.apply(this,arguments);if(this.constructor===ui)this.ui.apply(this,arguments);};ng.kh.ui=ui;function vi(){vi.vi.apply(this,arguments);};ng.kh.vi=vi;function wi(){wi.wi.apply(this,arguments);};ng.kh.wi=wi;function xi(){xi.xi.apply(this,arguments);if(this.constructor===xi)this.xi.apply(this,arguments);};ng.kh.lh.xi=xi;function yi(){yi.yi.apply(this,
arguments);if(this.constructor===yi)this.yi.apply(this,arguments);};ng.kh.lh.yi=yi;function zi(){zi.zi.apply(this,arguments);if(this.constructor===zi)this.zi.apply(this,arguments);};ng.kh.lh.zi=zi;function aj(){aj.aj.apply(this,arguments);};ng.kh.lh.aj=aj;function bj(){bj.bj.apply(this,arguments);if(this.constructor===bj)this.bj.apply(this,arguments);};ng.kh.lh.bj=bj;function cj(){cj.cj.apply(this,arguments);if(this.constructor===cj)this.cj.apply(this,arguments);};ng.kh.lh.cj=cj;ng.mh.dj='Box2D.Common.b2internal';
function ej(){ej.ej.apply(this,arguments);if(this.constructor===ej)this.ej.apply(this,arguments);};ng.mh.ej=ej;function fj(){fj.fj.apply(this,arguments);};ng.mh.fj=fj;function gj(){gj.gj.apply(this,arguments);if(this.constructor===gj)this.gj.apply(this,arguments);};ng.mh.Math.gj=gj;function hj(){hj.hj.apply(this,arguments);if(this.constructor===hj)this.hj.apply(this,arguments);};ng.mh.Math.hj=hj;function ij(){ij.ij.apply(this,arguments);};ng.mh.Math.ij=ij;function jj(){jj.jj.apply(this,arguments);};ng.mh.Math.jj=jj;
function kj(){kj.kj.apply(this,arguments);if(this.constructor===kj)this.kj.apply(this,arguments);};ng.mh.Math.kj=kj;function lj(){lj.lj.apply(this,arguments);if(this.constructor===lj)this.lj.apply(this,arguments);};ng.mh.Math.lj=lj;function mj(){mj.mj.apply(this,arguments);if(this.constructor===mj)this.mj.apply(this,arguments);};ng.mh.Math.mj=mj;function nj(){nj.nj.apply(this,arguments);if(this.constructor===nj)this.nj.apply(this,arguments);};ng.nh.nj=nj;function oj(){oj.oj.apply(this,arguments);if(this.constructor===oj)this.oj.apply(this,
arguments);};ng.nh.oj=oj;function pj(){pj.pj.apply(this,arguments);};ng.nh.pj=pj;function qj(){qj.qj.apply(this,arguments);};ng.nh.qj=qj;function rj(){rj.rj.apply(this,arguments);};ng.nh.rj=rj;function sj(){sj.sj.apply(this,arguments);if(this.constructor===sj)this.sj.apply(this,arguments);};ng.nh.sj=sj;function tj(){tj.tj.apply(this,arguments);if(this.constructor===tj)this.tj.apply(this,arguments);};ng.nh.tj=tj;function uj(){uj.uj.apply(this,arguments);};ng.nh.uj=uj;function vj(){vj.vj.apply(this,arguments);
};ng.nh.vj=vj;function wj(){wj.wj.apply(this,arguments);if(this.constructor===wj)this.wj.apply(this,arguments);};ng.nh.wj=wj;function xj(){xj.xj.apply(this,arguments);if(this.constructor===xj)this.xj.apply(this,arguments);};ng.nh.xj=xj;function yj(){yj.yj.apply(this,arguments);if(this.constructor===yj)this.yj.apply(this,arguments);};ng.nh.yj=yj;function zj(){zj.zj.apply(this,arguments);};ng.nh.zj=zj;function ak(){ak.ak.apply(this,arguments);if(this.constructor===ak)this.ak.apply(this,arguments);};ng.nh.ak=ak;
function bk(){bk.bk.apply(this,arguments);};ng.nh.ph.bk=bk;function ck(){ck.ck.apply(this,arguments);if(this.constructor===ck)this.ck.apply(this,arguments);};ng.nh.ph.ck=ck;function dk(){dk.dk.apply(this,arguments);if(this.constructor===dk)this.dk.apply(this,arguments);};ng.nh.ph.dk=dk;function ek(){ek.ek.apply(this,arguments);};ng.nh.ph.ek=ek;function fk(){fk.fk.apply(this,arguments);};ng.nh.ph.fk=fk;function gk(){gk.gk.apply(this,arguments);if(this.constructor===gk)this.gk.apply(this,arguments);};ng.nh.ph.gk=gk;
function hk(){hk.hk.apply(this,arguments);};ng.nh.ph.hk=hk;function ik(){ik.ik.apply(this,arguments);};ng.nh.ph.ik=ik;function jk(){jk.jk.apply(this,arguments);if(this.constructor===jk)this.jk.apply(this,arguments);};ng.nh.ph.jk=jk;function kk(){kk.kk.apply(this,arguments);};ng.nh.ph.kk=kk;function lk(){lk.lk.apply(this,arguments);if(this.constructor===lk)this.lk.apply(this,arguments);};ng.nh.ph.lk=lk;function mk(){mk.mk.apply(this,arguments);};ng.nh.ph.mk=mk;function nk(){nk.nk.apply(this,arguments);}
;ng.nh.ph.nk=nk;function ok(){ok.ok.apply(this,arguments);};ng.nh.ph.ok=ok;function pk(){pk.pk.apply(this,arguments);if(this.constructor===pk)this.pk.apply(this,arguments);};ng.nh.ph.pk=pk;function qk(){qk.qk.apply(this,arguments);};ng.nh.qh.qk=qk;function rk(){rk.rk.apply(this,arguments);};ng.nh.qh.rk=rk;function sk(){sk.sk.apply(this,arguments);};ng.nh.qh.sk=sk;function tk(){tk.tk.apply(this,arguments);};ng.nh.qh.tk=tk;function uk(){uk.uk.apply(this,arguments);};ng.nh.qh.uk=uk;function vk(){vk.vk.apply(this,
arguments);};ng.nh.qh.vk=vk;function wk(){wk.wk.apply(this,arguments);};ng.nh.qh.wk=wk;function xk(){xk.xk.apply(this,arguments);if(this.constructor===xk)this.xk.apply(this,arguments);};ng.nh.rh.xk=xk;function yk(){yk.yk.apply(this,arguments);if(this.constructor===yk)this.yk.apply(this,arguments);};ng.nh.rh.yk=yk;function zk(){zk.zk.apply(this,arguments);if(this.constructor===zk)this.zk.apply(this,arguments);};ng.nh.rh.zk=zk;function al(){al.al.apply(this,arguments);if(this.constructor===al)this.al.apply(this,
arguments);};ng.nh.rh.al=al;function bl(){bl.bl.apply(this,arguments);if(this.constructor===bl)this.bl.apply(this,arguments);};ng.nh.rh.bl=bl;function cl(){cl.cl.apply(this,arguments);if(this.constructor===cl)this.cl.apply(this,arguments);};ng.nh.rh.cl=cl;function dl(){dl.dl.apply(this,arguments);};ng.nh.rh.dl=dl;function el(){el.el.apply(this,arguments);if(this.constructor===el)this.el.apply(this,arguments);};ng.nh.rh.el=el;function fl(){fl.fl.apply(this,arguments);if(this.constructor===fl)this.fl.apply(this,
arguments);};ng.nh.rh.fl=fl;function gl(){gl.gl.apply(this,arguments);};ng.nh.rh.gl=gl;function hl(){hl.hl.apply(this,arguments);if(this.constructor===hl)this.hl.apply(this,arguments);};ng.nh.rh.hl=hl;function il(){il.il.apply(this,arguments);if(this.constructor===il)this.il.apply(this,arguments);};ng.nh.rh.il=il;function jl(){jl.jl.apply(this,arguments);if(this.constructor===jl)this.jl.apply(this,arguments);};ng.nh.rh.jl=jl;function kl(){kl.kl.apply(this,arguments);if(this.constructor===kl)this.kl.apply(this,
arguments);};ng.nh.rh.kl=kl;function ll(){ll.ll.apply(this,arguments);if(this.constructor===ll)this.ll.apply(this,arguments);};ng.nh.rh.ll=ll;function ml(){ml.ml.apply(this,arguments);if(this.constructor===ml)this.ml.apply(this,arguments);};ng.nh.rh.ml=ml;function nl(){nl.nl.apply(this,arguments);if(this.constructor===nl)this.nl.apply(this,arguments);};ng.nh.rh.nl=nl;function ol(){ol.ol.apply(this,arguments);if(this.constructor===ol)this.ol.apply(this,arguments);};ng.nh.rh.ol=ol;function pl(){pl.pl.apply(this,
arguments);if(this.constructor===pl)this.pl.apply(this,arguments);};ng.nh.rh.pl=pl;function ql(){ql.ql.apply(this,arguments);if(this.constructor===ql)this.ql.apply(this,arguments);};ng.nh.rh.ql=ql;function rl(){rl.rl.apply(this,arguments);if(this.constructor===rl)this.rl.apply(this,arguments);};ng.nh.rh.rl=rl;function sl(){sl.sl.apply(this,arguments);if(this.constructor===sl)this.sl.apply(this,arguments);};ng.nh.rh.sl=sl;})();ng.tl=[];(function(){var xi=ng.kh.lh.xi,yi=ng.kh.lh.yi,zi=ng.kh.lh.zi,aj=ng.kh.lh.aj,
bj=ng.kh.lh.bj,cj=ng.kh.lh.cj,ej=ng.mh.ej,dj=ng.mh.dj,fj=ng.mh.fj,gj=ng.mh.Math.gj,hj=ng.mh.Math.hj,ij=ng.mh.Math.ij,jj=ng.mh.Math.jj,kj=ng.mh.Math.kj,lj=ng.mh.Math.lj,mj=ng.mh.Math.mj,th=ng.kh.th,uh=ng.kh.uh,vh=ng.kh.vh,wh=ng.kh.wh,xh=ng.kh.xh,yh=ng.kh.yh,zh=ng.kh.zh,ai=ng.kh.ai,bi=ng.kh.bi,ci=ng.kh.ci,di=ng.kh.di,ei=ng.kh.ei,fi=ng.kh.fi,gi=ng.kh.gi,hi=ng.kh.hi,ii=ng.kh.ii,ji=ng.kh.ji,ki=ng.kh.ki,li=ng.kh.li,mi=ng.kh.mi,ni=ng.kh.ni,oi=ng.kh.oi,qi=ng.kh.qi,ri=ng.kh.ri,si=ng.kh.si,ti=ng.kh.ti,ui=ng.kh.ui,
vi=ng.kh.vi,wi=ng.kh.wi,sh=ng.kh.sh;th.th=function(){this.ul=new lj();this.vl=new lj();};th.prototype.wl=function(){var xl=this.vl.x-this.ul.x;var yl=this.vl.y-this.ul.y;var zl=xl>=0.0&&yl>=0.0;zl=zl&&this.ul.wl()&&this.vl.wl();return zl;};th.prototype.am=function(){return new lj((this.ul.x+this.vl.x)/2,(this.ul.y+this.vl.y)/2);};th.prototype.bm=function(){return new lj((this.vl.x-this.ul.x)/2,(this.vl.y-this.ul.y)/2);};th.prototype.cm=function(dm){var em=true;em=em&&this.ul.x<=dm.ul.x;em=em&&this.ul.y<=dm.ul.y;
em=em&&dm.vl.x<=this.vl.x;em=em&&dm.vl.y<=this.vl.y;return em;};th.prototype.fm=function(gm,hm){var im=(-Number.MAX_VALUE);var jm=Number.MAX_VALUE;var km=hm.lm.x;var mm=hm.lm.y;var xl=hm.nm.x-hm.lm.x;var yl=hm.nm.y-hm.lm.y;var om=Math.abs(xl);var pm=Math.abs(yl);var qm=gm.qm;var rm=0;var sm=0;var tm=0;var um=0;var vm=0;{if(om<Number.MIN_VALUE){if(km<this.ul.x||this.vl.x<km)return false;}else {rm=1.0/xl;sm=(this.ul.x-km)*rm;tm=(this.vl.x-km)*rm;vm=(-1.0);if(sm>tm){um=sm;sm=tm;tm=um;vm=1.0;}if(sm>im){qm.x=vm;qm.y=0;
im=sm;}jm=Math.min(jm,tm);if(im>jm)return false;}}{if(pm<Number.MIN_VALUE){if(mm<this.ul.y||this.vl.y<mm)return false;}else {rm=1.0/yl;sm=(this.ul.y-mm)*rm;tm=(this.vl.y-mm)*rm;vm=(-1.0);if(sm>tm){um=sm;sm=tm;tm=um;vm=1.0;}if(sm>im){qm.y=vm;qm.x=0;im=sm;}jm=Math.min(jm,tm);if(im>jm)return false;}}gm.wm=im;return true;};th.prototype.xm=function(other){var ym=other.ul.x-this.vl.x;var zm=other.ul.y-this.vl.y;var an=this.ul.x-other.vl.x;var bn=this.ul.y-other.vl.y;if(ym>0.0||zm>0.0)return false;if(an>0.0||bn>0.0)return false;
return true;};th.cn=function(dn,en){var dm=new th();dm.cn(dn,en);return dm;};th.prototype.cn=function(dn,en){this.ul.x=Math.min(dn.ul.x,en.ul.x);this.ul.y=Math.min(dn.ul.y,en.ul.y);this.vl.x=Math.max(dn.vl.x,en.vl.x);this.vl.y=Math.max(dn.vl.y,en.vl.y);};uh.uh=function(){};uh.prototype.fn=function(){return(this.value&1)==0;};uh.prototype.gn=function(){return(this.value&1)==1;};uh.prototype.hn=function(jn){var kn=this.value;var mn=this.nn;var on=this.pn;this.value=jn.value;this.nn=jn.nn;this.pn=jn.pn;jn.value=kn;
jn.nn=mn;jn.pn=on;};vh.vh=function(){};vh.prototype.vh=function(){this.qn=new jh();this.qn[0]=0.0;this.qn[1]=0.0;this.rn=new jh();this.rn[0]=0.0;this.rn[1]=0.0;};wh.wh=function(){};wh.sn=function(tn,un,qm,offset){if(offset===undefined)offset=0;var vn;var wn=0;vn=un[0];var xn=vn.hh;vn=un[1];var yn=vn.hh;var zn=qm.x*xn.x+qm.y*xn.y-offset;var ao=qm.x*yn.x+qm.y*yn.y-offset;if(zn<=0.0)tn[wn++].bo(un[0]);if(ao<=0.0)tn[wn++].bo(un[1]);if(zn*ao<0.0){var co=zn/(zn-ao);vn=tn[wn];var eo=vn.hh;eo.x=xn.x+co*(yn.x-xn.x);
eo.y=xn.y+co*(yn.y-xn.y);vn=tn[wn];var fo;if(zn>0.0){fo=un[0];vn.id=fo.id;}else {fo=un[1];vn.id=fo.id;}++wn;}return wn;};wh.go=function(ho,io,jo,ko,lo){if(jo===undefined)jo=0;var mo=parseInt(ho.no);var oo=ho.po;var qo=ho.ro;var so=parseInt(ko.no);var to=ko.po;var uo;var eo;uo=io.vo;eo=qo[jo];var wo=(uo.zo.x*eo.x+uo.ap.x*eo.y);var bp=(uo.zo.y*eo.x+uo.ap.y*eo.y);uo=lo.vo;var cp=(uo.zo.x*wo+uo.zo.y*bp);var dp=(uo.ap.x*wo+uo.ap.y*bp);var index=0;var ep=Number.MAX_VALUE;for(var i=0;i<so;++i){eo=to[i];var fp=eo.x*cp+eo.y*dp;
if(fp<ep){ep=fp;index=i;}}eo=oo[jo];uo=io.vo;var gp=io.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);var hp=io.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);eo=to[index];uo=lo.vo;var ip=lo.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);var jp=lo.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);ip-=gp;jp-=hp;var kp=ip*wo+jp*bp;return kp;};wh.lp=function(mp,ho,io,ko,lo){var mo=parseInt(ho.no);var qo=ho.ro;var eo;var uo;uo=lo.vo;eo=ko.np;var xl=lo.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);var yl=lo.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);uo=io.vo;
eo=ho.np;xl-=io.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);yl-=io.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);var op=(xl*io.vo.zo.x+yl*io.vo.zo.y);var pp=(xl*io.vo.ap.x+yl*io.vo.ap.y);var qp=0;var rp=(-Number.MAX_VALUE);for(var i=0;i<mo;++i){eo=qo[i];var fp=(eo.x*op+eo.y*pp);if(fp>rp){rp=fp;qp=i;}}var vm=wh.go(ho,io,qp,ko,lo);var sp=parseInt(qp-1>=0?qp-1:mo-1);var up=wh.go(ho,io,sp,ko,lo);var vp=parseInt(qp+1<mo?qp+1:0);var wp=wh.go(ho,io,vp,ko,lo);var xp=0;var yp=0;var zp=0;if(up>vm&&up>wp){zp=(-1);xp=sp;yp=up;}else if(wp>vm){
zp=1;xp=vp;yp=wp;}else {mp[0]=qp;return vm;}while(true){if(zp==(-1))qp=xp-1>=0?xp-1:mo-1;else qp=xp+1<mo?xp+1:0;vm=wh.go(ho,io,qp,ko,lo);if(vm>yp){xp=qp;yp=vm;}else {break;}}mp[0]=xp;return yp;};wh.aq=function(c,ho,io,jo,ko,lo){if(jo===undefined)jo=0;var mo=parseInt(ho.no);var qo=ho.ro;var so=parseInt(ko.no);var to=ko.po;var bq=ko.ro;var uo;var eo;uo=io.vo;eo=qo[jo];var cp=(uo.zo.x*eo.x+uo.ap.x*eo.y);var dp=(uo.zo.y*eo.x+uo.ap.y*eo.y);uo=lo.vo;var cq=(uo.zo.x*cp+uo.zo.y*dp);dp=(uo.ap.x*cp+uo.ap.y*dp);cp=cq;var index=0;
var ep=Number.MAX_VALUE;for(var i=0;i<so;++i){eo=bq[i];var fp=(cp*eo.x+dp*eo.y);if(fp<ep){ep=fp;index=i;}}var dq;var eq=parseInt(index);var fq=parseInt(eq+1<so?eq+1:0);dq=c[0];eo=to[eq];uo=lo.vo;dq.hh.x=lo.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);dq.hh.y=lo.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);dq.id.gq.hq=jo;dq.id.gq.iq=eq;dq.id.gq.jq=0;dq=c[1];eo=to[fq];uo=lo.vo;dq.hh.x=lo.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);dq.hh.y=lo.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);dq.id.gq.hq=jo;dq.id.gq.iq=fq;dq.id.gq.jq=1;
};wh.kq=function(){var lq=new ih(2);lq[0]=new vi();lq[1]=new vi();return lq;};wh.mq=function(nq,oq,pq,qq,rq){var vn;nq.sq=0;var tq=oq.uq+qq.uq;var vq=0;wh.wq[0]=vq;var xq=wh.lp(wh.wq,oq,pq,qq,rq);vq=wh.wq[0];if(xq>tq)return;var yq=0;wh.zq[0]=yq;var ar=wh.lp(wh.zq,qq,rq,oq,pq);yq=wh.zq[0];if(ar>tq)return;var ho;var ko;var io;var lo;var jo=0;var br=0;var cr=0.98;var dr=0.001;var uo;if(ar>cr*xq+dr){ho=qq;ko=oq;io=rq;lo=pq;jo=yq;nq.er=hi.fr;br=1;}else {ho=oq;ko=qq;io=pq;lo=rq;jo=vq;nq.er=hi.gr;br=0;}var iq=wh.hr;wh.aq(iq,
ho,io,jo,ko,lo);var mo=parseInt(ho.no);var oo=ho.po;var ir=oo[jo];var jr;if(jo+1<mo){jr=oo[parseInt(jo+1)];}else {jr=oo[0];}var kr=wh.lr;kr.bo(jr.x-ir.x,jr.y-ir.y);kr.mr();var nr=wh.or;nr.x=kr.y;nr.y=(-kr.x);var pr=wh.qr;pr.bo(0.5*(ir.x+jr.x),0.5*(ir.y+jr.y));var rr=wh.sr;uo=io.vo;rr.x=(uo.zo.x*kr.x+uo.ap.x*kr.y);rr.y=(uo.zo.y*kr.x+uo.ap.y*kr.y);var tr=wh.ur;tr.x=(-rr.x);tr.y=(-rr.y);var qm=wh.vr;qm.x=rr.y;qm.y=(-rr.x);var wr=wh.xr;var yr=wh.zr;wr.x=io.position.x+(uo.zo.x*ir.x+uo.ap.x*ir.y);wr.y=io.position.y+(uo.zo.y*ir.x+uo.ap.y*ir.y);
yr.x=io.position.x+(uo.zo.x*jr.x+uo.ap.x*jr.y);yr.y=io.position.y+(uo.zo.y*jr.x+uo.ap.y*jr.y);var as=qm.x*wr.x+qm.y*wr.y;var bs=(-rr.x*wr.x)-rr.y*wr.y+tq;var cs=rr.x*yr.x+rr.y*yr.y+tq;var ds=wh.es;var fs=wh.gs;var hs=0;hs=wh.sn(ds,iq,tr,bs);if(hs<2)return;hs=wh.sn(fs,ds,rr,cs);if(hs<2)return;nq.is.js(nr);nq.ks.js(pr);var ls=0;for(var i=0;i<fj.ms;++i){vn=fs[i];var kp=qm.x*vn.hh.x+qm.y*vn.hh.y-as;if(kp<=tq){var ns=nq.os[ls];uo=lo.vo;var cq=vn.hh.x-lo.position.x;var ps=vn.hh.y-lo.position.y;ns.ks.x=(cq*uo.zo.x+ps*uo.zo.y);
ns.ks.y=(cq*uo.ap.x+ps*uo.ap.y);ns.qs.bo(vn.id);ns.qs.gq.br=br;++ls;}}nq.sq=ls;};wh.rs=function(nq,ss,io,ts,lo){nq.sq=0;var uo;var eo;uo=io.vo;eo=ss.us;var vs=io.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);var ws=io.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);uo=lo.vo;eo=ts.us;var xs=lo.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);var ys=lo.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);var xl=xs-vs;var yl=ys-ws;var zs=xl*xl+yl*yl;var at=ss.uq+ts.uq;if(zs>at*at){return;}nq.er=hi.bt;nq.ks.js(ss.us);nq.is.ct();nq.sq=1;nq.os[0].ks.js(ts.us);
nq.os[0].qs.dt=0;};wh.et=function(nq,ft,io,gt,lo){nq.sq=0;var ht;var xl=0;var yl=0;var it=0;var jt=0;var eo;var uo;uo=lo.vo;eo=gt.us;var kt=lo.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);var lt=lo.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);xl=kt-io.position.x;yl=lt-io.position.y;uo=io.vo;var mt=(xl*uo.zo.x+yl*uo.zo.y);var nt=(xl*uo.ap.x+yl*uo.ap.y);var ot=0;var pt=0;var kp=(-Number.MAX_VALUE);var at=ft.uq+gt.uq;var qt=parseInt(ft.no);var rt=ft.po;var st=ft.ro;for(var i=0;i<qt;++i){eo=rt[i];xl=mt-eo.x;yl=nt-eo.y;eo=st[i];var vm=eo.x*xl+eo.y*yl;
if(vm>at){return;}if(vm>kp){kp=vm;pt=i;}}var tt=parseInt(pt);var ut=parseInt(tt+1<qt?tt+1:0);var vt=rt[tt];var wt=rt[ut];if(kp<Number.MIN_VALUE){nq.sq=1;nq.er=hi.gr;nq.is.js(st[pt]);nq.ks.x=0.5*(vt.x+wt.x);nq.ks.y=0.5*(vt.y+wt.y);nq.os[0].ks.js(gt.us);nq.os[0].qs.dt=0;return;}var xt=(mt-vt.x)*(wt.x-vt.x)+(nt-vt.y)*(wt.y-vt.y);var yt=(mt-wt.x)*(vt.x-wt.x)+(nt-wt.y)*(vt.y-wt.y);if(xt<=0.0){if((mt-vt.x)*(mt-vt.x)+(nt-vt.y)*(nt-vt.y)>at*at)return;nq.sq=1;nq.er=hi.gr;nq.is.x=mt-vt.x;nq.is.y=nt-vt.y;nq.is.mr();
nq.ks.js(vt);nq.os[0].ks.js(gt.us);nq.os[0].qs.dt=0;}else if(yt<=0){if((mt-wt.x)*(mt-wt.x)+(nt-wt.y)*(nt-wt.y)>at*at)return;nq.sq=1;nq.er=hi.gr;nq.is.x=mt-wt.x;nq.is.y=nt-wt.y;nq.is.mr();nq.ks.js(wt);nq.os[0].ks.js(gt.us);nq.os[0].qs.dt=0;}else {var zt=0.5*(vt.x+wt.x);var au=0.5*(vt.y+wt.y);kp=(mt-zt)*st[tt].x+(nt-au)*st[tt].y;if(kp>at)return;nq.sq=1;nq.er=hi.gr;nq.is.x=st[tt].x;nq.is.y=st[tt].y;nq.is.mr();nq.ks.bo(zt,au);nq.os[0].ks.js(gt.us);nq.os[0].qs.dt=0;}};wh.xm=function(bu,jn){var sm=jn.ul;var tm=bu.vl;
var ym=sm.x-tm.x;var zm=sm.y-tm.y;sm=bu.ul;tm=jn.vl;var an=sm.x-tm.x;var bn=sm.y-tm.y;if(ym>0.0||zm>0.0)return false;if(an>0.0||bn>0.0)return false;return true;};ng.tl.push(function(){ng.kh.wh.hr=wh.kq();ng.kh.wh.es=wh.kq();ng.kh.wh.gs=wh.kq();ng.kh.wh.wq=new jh(1);ng.kh.wh.zq=new jh(1);ng.kh.wh.lr=new lj();ng.kh.wh.or=new lj();ng.kh.wh.qr=new lj();ng.kh.wh.vr=new lj();ng.kh.wh.sr=new lj();ng.kh.wh.ur=new lj();ng.kh.wh.xr=new lj();ng.kh.wh.zr=new lj();ng.kh.wh.cu=new lj();ng.kh.wh.du=0x000000ff;});xh.xh=function(){
this.gq=new wi();};xh.prototype.xh=function(){this.gq.eu=this;};xh.prototype.bo=function(id){this.dt=id.fu;};xh.prototype.gu=function(){var id=new xh();id.dt=this.dt;return id;};Object.defineProperty(xh.prototype,'key',{hu:false,iu:true,sg:function(){return this.fu;}});Object.defineProperty(xh.prototype,'key',{hu:false,iu:true,tg:function(value){if(value===undefined)value=0;this.fu=value;this.gq.ju=this.fu&0x000000ff;this.gq.ku=((this.fu&0x0000ff00)>>8)&0x000000ff;this.gq.lu=((this.fu&0x00ff0000)>>16)&0x000000ff;
this.gq.mu=((this.fu&0xff000000)>>24)&0x000000ff;}});yh.yh=function(){this.position=new lj();this.nu=new lj();this.qm=new lj();this.id=new xh();};zh.zh=function(){};zh.ou=function(gm,pu,hm){++zh.qu;var ru=hm.ru;var su=hm.su;var tu=hm.tu;var uu=hm.uu;var vu=zh.wu;vu.xu(pu,ru,tu,su,uu);var rt=vu.po;var yu=20;var zu=zh.av;var bv=zh.cv;var dv=0;var ev=vu.fv();var gv=ev.hv();var iv=gv;var i=0;var qg;var jv=0;while(jv<yu){dv=vu.kv;for(i=0;i<dv;i++){zu[i]=rt[i].lv;bv[i]=rt[i].mv;}switch(vu.kv){case 1:break;case 2:vu.nv();break;
case 3:vu.ov();break;default :fj.pv(false);}if(vu.kv==3){break;}qg=vu.fv();iv=qg.hv();if(iv>gv){}gv=iv;var qv=vu.rv();if(qv.hv()<Number.MIN_VALUE*Number.MIN_VALUE){break;}var sv=rt[vu.kv];sv.lv=ru.tv(ij.uv(tu.vo,qv.vv()));sv.wv=ij.xv(tu,ru.yv(sv.lv));sv.mv=su.tv(ij.uv(uu.vo,qv));sv.zv=ij.xv(uu,su.yv(sv.mv));sv.w=ij.aw(sv.zv,sv.wv);++jv;++zh.bw;var cw=false;for(i=0;i<dv;i++){if(sv.lv==zu[i]&&sv.mv==bv[i]){cw=true;break;}}if(cw){break;}++vu.kv;}zh.dw=ij.ew(zh.dw,jv);vu.fw(gm.gw,gm.hw);gm.iw=ij.aw(gm.gw,
gm.hw).jw();gm.kw=jv;vu.lw(pu);if(hm.mw){var nw=ru.uq;var pw=su.uq;if(gm.iw>nw+pw&&gm.iw>Number.MIN_VALUE){gm.iw-=nw+pw;var qm=ij.aw(gm.hw,gm.gw);qm.mr();gm.gw.x+=nw*qm.x;gm.gw.y+=nw*qm.y;gm.hw.x-=pw*qm.x;gm.hw.y-=pw*qm.y;}else {qg=new lj();qg.x=.5*(gm.gw.x+gm.hw.x);qg.y=.5*(gm.gw.y+gm.hw.y);gm.gw.x=gm.hw.x=qg.x;gm.gw.y=gm.hw.y=qg.y;gm.iw=0.0;}}};ng.tl.push(function(){ng.kh.zh.wu=new oi();ng.kh.zh.av=new jh(3);ng.kh.zh.cv=new jh(3);});ai.ai=function(){};bi.bi=function(){this.gw=new lj();this.hw=new lj();}
;ci.ci=function(){};ci.prototype.bo=function(qw){switch(qw.rw()){case cj.sw:{var gt=(qw instanceof xi?qw:null);this.po=new ih(1,true);this.po[0]=gt.us;this.kv=1;this.uq=gt.uq;}break;case cj.tw:{var ft=(qw instanceof bj?qw:null);this.po=ft.po;this.kv=ft.no;this.uq=ft.uq;}break;default :fj.pv(false);}};ci.prototype.tv=function(qv){var uw=0;var vw=this.po[0].x*qv.x+this.po[0].y*qv.y;for(var i=1;i<this.kv;++i){var value=this.po[i].x*qv.x+this.po[i].y*qv.y;if(value>vw){uw=i;vw=value;}}return uw;};ci.prototype.ww=function(qv){
var uw=0;var vw=this.po[0].x*qv.x+this.po[0].y*qv.y;for(var i=1;i<this.kv;++i){var value=this.po[i].x*qv.x+this.po[i].y*qv.y;if(value>vw){uw=i;vw=value;}}return this.po[uw];};ci.prototype.xw=function(){return this.kv;};ci.prototype.yv=function(index){if(index===undefined)index=0;fj.pv(0<=index&&index<this.kv);return this.po[index];};di.di=function(){};di.prototype.di=function(){this.yw=null;this.zw=null;this.ax=0;this.bx=0;};di.prototype.cx=function(dm,dx){var ex=this.fx();var gx=fj.hx;var ix=fj.hx;ex.dm.ul.x=dm.ul.x-gx;
ex.dm.ul.y=dm.ul.y-ix;ex.dm.vl.x=dm.vl.x+gx;ex.dm.vl.y=dm.vl.y+ix;ex.dx=dx;this.jx(ex);return ex;};di.prototype.kx=function(nn){this.lx(nn);this.mx(nn);};di.prototype.nx=function(nn,dm,ox){fj.pv(nn.px());if(nn.dm.cm(dm)){return false;}this.lx(nn);var gx=fj.hx+fj.qx*(ox.x>0?ox.x:(-ox.x));var ix=fj.hx+fj.qx*(ox.y>0?ox.y:(-ox.y));nn.dm.ul.x=dm.ul.x-gx;nn.dm.ul.y=dm.ul.y-ix;nn.dm.vl.x=dm.vl.x+gx;nn.dm.vl.y=dm.vl.y+ix;this.jx(nn);return true;};di.prototype.rx=function(kw){if(kw===undefined)kw=0;if(this.yw==null)return;
for(var i=0;i<kw;i++){var ex=this.yw;var sx=0;while(ex.px()==false){ex=(this.ax>>sx)&1?ex.tx:ex.ux;sx=(sx+1)&31;}++this.ax;this.lx(ex);this.jx(ex);}};di.prototype.vx=function(nn){return nn.dm;};di.prototype.wx=function(nn){return nn.dx;};di.prototype.xx=function(yx,dm){if(this.yw==null)return;var zx=new ih();var ay=0;zx[ay++]=this.yw;while(ay>0){var ex=zx[--ay];if(ex.dm.xm(dm)){if(ex.px()){var by=yx(ex);if(!by)return;}else {zx[ay++]=ex.ux;zx[ay++]=ex.tx;}}}};di.prototype.fm=function(yx,hm){if(this.yw==null)return;
var lm=hm.lm;var nm=hm.nm;var lq=ij.aw(lm,nm);lq.mr();var hh=ij.cy(1.0,lq);var dy=ij.ey(hh);var fy=hm.fy;var gy=new th();var cq=0;var ps=0;{cq=lm.x+fy*(nm.x-lm.x);ps=lm.y+fy*(nm.y-lm.y);gy.ul.x=Math.min(lm.x,cq);gy.ul.y=Math.min(lm.y,ps);gy.vl.x=Math.max(lm.x,cq);gy.vl.y=Math.max(lm.y,ps);}var zx=new ih();var ay=0;zx[ay++]=this.yw;while(ay>0){var ex=zx[--ay];if(ex.dm.xm(gy)==false){continue;}var c=ex.dm.am();var h=ex.dm.bm();var kp=Math.abs(hh.x*(lm.x-c.x)+hh.y*(lm.y-c.y))-dy.x*h.x-dy.y*h.y;if(kp>0.0)continue;if(ex.px()){
var hy=new ki();hy.lm=hm.lm;hy.nm=hm.nm;hy.fy=hm.fy;fy=yx(hy,ex);if(fy==0.0)return;if(fy>0.0){cq=lm.x+fy*(nm.x-lm.x);ps=lm.y+fy*(nm.y-lm.y);gy.ul.x=Math.min(lm.x,cq);gy.ul.y=Math.min(lm.y,ps);gy.vl.x=Math.max(lm.x,cq);gy.vl.y=Math.max(lm.y,ps);}}else {zx[ay++]=ex.ux;zx[ay++]=ex.tx;}}};di.prototype.fx=function(){if(this.zw){var ex=this.zw;this.zw=ex.parent;ex.parent=null;ex.ux=null;ex.tx=null;return ex;}return new fi();};di.prototype.mx=function(ex){ex.parent=this.zw;this.zw=ex;};di.prototype.jx=function(iy){
++this.bx;if(this.yw==null){this.yw=iy;this.yw.parent=null;return;}var jy=iy.dm.am();var ky=this.yw;if(ky.px()==false){do {var ux=ky.ux;var tx=ky.tx;var ly=Math.abs((ux.dm.ul.x+ux.dm.vl.x)/2-jy.x)+Math.abs((ux.dm.ul.y+ux.dm.vl.y)/2-jy.y);var my=Math.abs((tx.dm.ul.x+tx.dm.vl.x)/2-jy.x)+Math.abs((tx.dm.ul.y+tx.dm.vl.y)/2-jy.y);if(ly<my){ky=ux;}else {ky=tx;}}while(ky.px()==false)}var ny=ky.parent;var oy=this.fx();oy.parent=ny;oy.dx=null;oy.dm.cn(iy.dm,ky.dm);if(ny){if(ky.parent.ux==ky){ny.ux=oy;}else {ny.tx=oy;
}oy.ux=ky;oy.tx=iy;ky.parent=oy;iy.parent=oy;do {if(ny.dm.cm(oy.dm))break;ny.dm.cn(ny.ux.dm,ny.tx.dm);oy=ny;ny=ny.parent;}while(ny)}else {oy.ux=ky;oy.tx=iy;ky.parent=oy;iy.parent=oy;this.yw=oy;}};di.prototype.lx=function(iy){if(iy==this.yw){this.yw=null;return;}var oy=iy.parent;var ny=oy.parent;var ky;if(oy.ux==iy){ky=oy.tx;}else {ky=oy.ux;}if(ny){if(ny.ux==oy){ny.ux=ky;}else {ny.tx=ky;}ky.parent=ny;this.mx(oy);while(ny){var py=ny.dm;ny.dm=th.cn(ny.ux.dm,ny.tx.dm);if(py.cm(ny.dm))break;ny=ny.parent;}}else {
this.yw=ky;ky.parent=null;this.mx(oy);}};ei.ei=function(){this.qy=new di();this.ry=new ih();this.sy=new ih();this.ty=0;};ei.prototype.cx=function(dm,dx){var nn=this.qy.cx(dm,dx);++this.uy;this.vy(nn);return nn;};ei.prototype.kx=function(nn){this.wy(nn);--this.uy;this.qy.kx(nn);};ei.prototype.nx=function(nn,dm,ox){var xy=this.qy.nx(nn,dm,ox);if(xy){this.vy(nn);}};ei.prototype.xm=function(ru,su){var yy=this.qy.vx(ru);var zy=this.qy.vx(su);return yy.xm(zy);};ei.prototype.wx=function(nn){return this.qy.wx(nn);
};ei.prototype.vx=function(nn){return this.qy.vx(nn);};ei.prototype.az=function(){return this.uy;};ei.prototype.bz=function(yx){var cz=this;cz.ty=0;var i=0,dz;for(i=0;i<cz.ry.length;++i){dz=cz.ry[i];function ez(nn){if(nn==dz)return true;if(cz.ty==cz.sy.length){cz.sy[cz.ty]=new gi();}var fz=cz.sy[cz.ty];fz.ru=nn<dz?nn:dz;fz.su=nn>=dz?nn:dz;++cz.ty;return true;};var gz=cz.qy.vx(dz);cz.qy.xx(ez,gz);}cz.ry.length=0;for(var i=0;i<cz.ty;){var hz=cz.sy[i];var iz=cz.qy.wx(hz.ru);var jz=cz.qy.wx(hz.su);yx(iz,jz);++i;while(i<cz.ty){
var fz=cz.sy[i];if(fz.ru!=hz.ru||fz.su!=hz.su){break;}++i;}}};ei.prototype.xx=function(yx,dm){this.qy.xx(yx,dm);};ei.prototype.fm=function(yx,hm){this.qy.fm(yx,hm);};ei.prototype.kz=function(){};ei.prototype.rx=function(kw){if(kw===undefined)kw=0;this.qy.rx(kw);};ei.prototype.vy=function(nn){this.ry[this.ry.length]=nn;};ei.prototype.wy=function(nn){var i=parseInt(this.ry.indexOf(nn));this.ry.splice(i,1);};ei.prototype.lz=function(mz,nz){return 0;};ei.__implements={};ei.__implements[sh]=true;fi.fi=function(){
this.dm=new th();};fi.prototype.px=function(){return this.ux==null;};gi.gi=function(){};hi.hi=function(){this.sq=0;};hi.prototype.hi=function(){this.os=new ih(fj.ms);for(var i=0;i<fj.ms;i++){this.os[i]=new ii();}this.is=new lj();this.ks=new lj();};hi.prototype.oz=function(){for(var i=0;i<fj.ms;i++){((this.os[i] instanceof ii?this.os[i]:null)).oz();}this.is.ct();this.ks.ct();this.er=0;this.sq=0;};hi.prototype.bo=function(pz){this.sq=pz.sq;for(var i=0;i<fj.ms;i++){((this.os[i] instanceof ii?this.os[i]:null)).bo(pz.os[i]);
}this.is.js(pz.is);this.ks.js(pz.ks);this.er=pz.er;};hi.prototype.gu=function(){var qz=new hi();qz.bo(this);return qz;};ng.tl.push(function(){ng.kh.hi.bt=0x0001;ng.kh.hi.gr=0x0002;ng.kh.hi.fr=0x0004;});ii.ii=function(){this.ks=new lj();this.qs=new xh();};ii.prototype.ii=function(){this.oz();};ii.prototype.oz=function(){this.ks.ct();this.rz=0.0;this.sz=0.0;this.qs.dt=0;};ii.prototype.bo=function(pz){this.ks.js(pz.ks);this.rz=pz.rz;this.sz=pz.sz;this.qs.bo(pz.qs);};ji.ji=function(){this.qg=new lj();};ji.prototype.tz=function(uz,
vz,wz){if(vz===undefined)vz=0;if(wz===undefined)wz=0;return this.qg;};ji.prototype.xz=function(uz){return this.qg;};ki.ki=function(){this.lm=new lj();this.nm=new lj();};ki.prototype.ki=function(lm,nm,fy){if(lm===undefined)lm=null;if(nm===undefined)nm=null;if(fy===undefined)fy=1;if(lm)this.lm.js(lm);if(nm)this.nm.js(nm);this.fy=fy;};li.li=function(){this.qm=new lj();};mi.mi=function(){this.lm=new lj();this.nm=new lj();};mi.prototype.yz=function(zz,qm,aab,bab){if(bab===undefined)bab=0;var vm=aab.lm;var cab=aab.nm.x-vm.x;
var dab=aab.nm.y-vm.y;var xl=this.nm.x-this.lm.x;var yl=this.nm.y-this.lm.y;var eab=yl;var fab=(-xl);var gab=100.0*Number.MIN_VALUE;var hab=(-(cab*eab+dab*fab));if(hab>gab){var iab=vm.x-this.lm.x;var jab=vm.y-this.lm.y;var bu=(iab*eab+jab*fab);if(0.0<=bu&&bu<=bab*hab){var kab=(-cab*jab)+dab*iab;if((-gab*hab)<=kab&&kab<=hab*(1.0+gab)){bu/=hab;var lab=Math.sqrt(eab*eab+fab*fab);eab/=lab;fab/=lab;zz[0]=bu;qm.bo(eab,fab);return true;}}}return false;};mi.prototype.mab=function(dm){this.nab(dm);this.oab(dm);};mi.prototype.nab=function(dm){
var xl=this.nm.x-this.lm.x;var yl=this.nm.y-this.lm.y;var zz=Math.min(xl>0?(dm.vl.x-this.lm.x)/xl:xl<0?(dm.ul.x-this.lm.x)/xl:Number.POSITIVE_INFINITY,yl>0?(dm.vl.y-this.lm.y)/yl:yl<0?(dm.ul.y-this.lm.y)/yl:Number.POSITIVE_INFINITY);this.nm.x=this.lm.x+xl*zz;this.nm.y=this.lm.y+yl*zz;};mi.prototype.oab=function(dm){var xl=(-this.nm.x)+this.lm.x;var yl=(-this.nm.y)+this.lm.y;var zz=Math.min(xl>0?(dm.vl.x-this.nm.x)/xl:xl<0?(dm.ul.x-this.nm.x)/xl:Number.POSITIVE_INFINITY,yl>0?(dm.vl.y-this.nm.y)/yl:yl<0?(dm.ul.y-this.nm.y)/yl:Number.POSITIVE_INFINITY);
this.lm.x=this.nm.x+xl*zz;this.lm.y=this.nm.y+yl*zz;};ni.ni=function(){this.ks=new lj();this.pab=new lj();};ni.prototype.qab=function(pu,ru,tu,su,uu){this.rab=ru;this.sab=su;var ay=parseInt(pu.ay);fj.pv(0<ay&&ay<3);var tab;var uab;var vab;var wab;var xab;var yab;var zab=0;var abb=0;var bbb=0;var cbb=0;var dbb=0;var ebb=0;var uo;var eo;var vm=0;var fbb=0;if(ay==1){this.er=ni.gbb;tab=this.rab.yv(pu.lv[0]);wab=this.sab.yv(pu.mv[0]);eo=tab;uo=tu.vo;zab=tu.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);abb=tu.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);
eo=wab;uo=uu.vo;bbb=uu.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);cbb=uu.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);this.pab.x=bbb-zab;this.pab.y=cbb-abb;this.pab.mr();}else if(pu.mv[0]==pu.mv[1]){this.er=ni.gr;uab=this.rab.yv(pu.lv[0]);vab=this.rab.yv(pu.lv[1]);wab=this.sab.yv(pu.mv[0]);this.ks.x=0.5*(uab.x+vab.x);this.ks.y=0.5*(uab.y+vab.y);this.pab=ij.hbb(ij.aw(vab,uab),1.0);this.pab.mr();eo=this.pab;uo=tu.vo;dbb=uo.zo.x*eo.x+uo.ap.x*eo.y;ebb=uo.zo.y*eo.x+uo.ap.y*eo.y;eo=this.ks;uo=tu.vo;zab=tu.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);
abb=tu.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);eo=wab;uo=uu.vo;bbb=uu.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);cbb=uu.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);vm=(bbb-zab)*dbb+(cbb-abb)*ebb;if(vm<0.0){this.pab.ibb();}}else if(pu.lv[0]==pu.lv[0]){this.er=ni.fr;xab=this.sab.yv(pu.mv[0]);yab=this.sab.yv(pu.mv[1]);tab=this.rab.yv(pu.lv[0]);this.ks.x=0.5*(xab.x+yab.x);this.ks.y=0.5*(xab.y+yab.y);this.pab=ij.hbb(ij.aw(yab,xab),1.0);this.pab.mr();eo=this.pab;uo=uu.vo;dbb=uo.zo.x*eo.x+uo.ap.x*eo.y;ebb=uo.zo.y*eo.x+uo.ap.y*eo.y;
eo=this.ks;uo=uu.vo;bbb=uu.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);cbb=uu.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);eo=tab;uo=tu.vo;zab=tu.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);abb=tu.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);vm=(zab-bbb)*dbb+(abb-cbb)*ebb;if(vm<0.0){this.pab.ibb();}}else {uab=this.rab.yv(pu.lv[0]);vab=this.rab.yv(pu.lv[1]);xab=this.sab.yv(pu.mv[0]);yab=this.sab.yv(pu.mv[1]);var jbb=ij.xv(tu,tab);var kbb=ij.lbb(tu.vo,ij.aw(vab,uab));var mbb=ij.xv(uu,wab);var nbb=ij.lbb(uu.vo,ij.aw(yab,xab));
var bu=kbb.x*kbb.x+kbb.y*kbb.y;var obb=nbb.x*nbb.x+nbb.y*nbb.y;var lq=ij.aw(nbb,kbb);var c=kbb.x*lq.x+kbb.y*lq.y;var pbb=nbb.x*lq.x+nbb.y*lq.y;var jn=kbb.x*nbb.x+kbb.y*nbb.y;var hab=bu*obb-jn*jn;vm=0.0;if(hab!=0.0){vm=ij.qbb((jn*pbb-c*obb)/hab,0.0,1.0);}var rbb=(jn*vm+pbb)/obb;if(rbb<0.0){rbb=0.0;vm=ij.qbb((jn-c)/bu,0.0,1.0);}tab=new lj();tab.x=uab.x+vm*(vab.x-uab.x);tab.y=uab.y+vm*(vab.y-uab.y);wab=new lj();wab.x=xab.x+vm*(yab.x-xab.x);wab.y=xab.y+vm*(yab.y-xab.y);if(vm==0.0||vm==1.0){this.er=ni.fr;this.pab=ij.hbb(ij.aw(yab,
xab),1.0);this.pab.mr();this.ks=wab;eo=this.pab;uo=uu.vo;dbb=uo.zo.x*eo.x+uo.ap.x*eo.y;ebb=uo.zo.y*eo.x+uo.ap.y*eo.y;eo=this.ks;uo=uu.vo;bbb=uu.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);cbb=uu.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);eo=tab;uo=tu.vo;zab=tu.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);abb=tu.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);fbb=(zab-bbb)*dbb+(abb-cbb)*ebb;if(vm<0.0){this.pab.ibb();}}else {this.er=ni.gr;this.pab=ij.hbb(ij.aw(vab,uab),1.0);this.ks=tab;eo=this.pab;uo=tu.vo;dbb=uo.zo.x*eo.x+uo.ap.x*eo.y;
ebb=uo.zo.y*eo.x+uo.ap.y*eo.y;eo=this.ks;uo=tu.vo;zab=tu.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);abb=tu.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);eo=wab;uo=uu.vo;bbb=uu.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);cbb=uu.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);fbb=(bbb-zab)*dbb+(cbb-abb)*ebb;if(vm<0.0){this.pab.ibb();}}}};ni.prototype.sbb=function(tu,uu){var tbb;var ubb;var tab;var wab;var gw;var hw;var vbb=0;var qm;switch(this.er){case ni.gbb:{tbb=ij.uv(tu.vo,this.pab);ubb=ij.uv(uu.vo,this.pab.vv());tab=this.rab.ww(tbb);
wab=this.sab.ww(ubb);gw=ij.xv(tu,tab);hw=ij.xv(uu,wab);vbb=(hw.x-gw.x)*this.pab.x+(hw.y-gw.y)*this.pab.y;return vbb;}case ni.gr:{qm=ij.lbb(tu.vo,this.pab);gw=ij.xv(tu,this.ks);ubb=ij.uv(uu.vo,qm.vv());wab=this.sab.ww(ubb);hw=ij.xv(uu,wab);vbb=(hw.x-gw.x)*qm.x+(hw.y-gw.y)*qm.y;return vbb;}case ni.fr:{qm=ij.lbb(uu.vo,this.pab);hw=ij.xv(uu,this.ks);tbb=ij.uv(tu.vo,qm.vv());tab=this.rab.ww(tbb);gw=ij.xv(tu,tab);vbb=(gw.x-hw.x)*qm.x+(gw.y-hw.y)*qm.y;return vbb;}default :fj.pv(false);return 0.0;}};ng.tl.push(function(){
ng.kh.ni.gbb=0x01;ng.kh.ni.gr=0x02;ng.kh.ni.fr=0x04;});oi.oi=function(){this.wbb=new ri();this.xbb=new ri();this.ybb=new ri();this.po=new ih(3);};oi.prototype.oi=function(){this.po[0]=this.wbb;this.po[1]=this.xbb;this.po[2]=this.ybb;};oi.prototype.xu=function(pu,ru,tu,su,uu){fj.pv(0<=pu.ay&&pu.ay<=3);var zbb;var acb;this.kv=pu.ay;var rt=this.po;for(var i=0;i<this.kv;i++){var hh=rt[i];hh.lv=pu.lv[i];hh.mv=pu.mv[i];zbb=ru.yv(hh.lv);acb=su.yv(hh.mv);hh.wv=ij.xv(tu,zbb);hh.zv=ij.xv(uu,acb);hh.w=ij.aw(hh.zv,hh.wv);
hh.bu=0;}if(this.kv>1){var bcb=pu.ccb;var dcb=this.ecb();if(dcb<.5*bcb||2.0*bcb<dcb||dcb<Number.MIN_VALUE){this.kv=0;}}if(this.kv==0){hh=rt[0];hh.lv=0;hh.mv=0;zbb=ru.yv(0);acb=su.yv(0);hh.wv=ij.xv(tu,zbb);hh.zv=ij.xv(uu,acb);hh.w=ij.aw(hh.zv,hh.wv);this.kv=1;}};oi.prototype.lw=function(pu){pu.ccb=this.ecb();pu.ay=ng.gh(this.kv);var rt=this.po;for(var i=0;i<this.kv;i++){pu.lv[i]=ng.gh(rt[i].lv);pu.mv[i]=ng.gh(rt[i].mv);}};oi.prototype.rv=function(){switch(this.kv){case 1:return this.wbb.w.vv();case 2:{var fcb=ij.aw(this.xbb.w,
this.wbb.w);var fbb=ij.gcb(fcb,this.wbb.w.vv());if(fbb>0.0){return ij.cy(1.0,fcb);}else {return ij.hbb(fcb,1.0);}}default :fj.pv(false);return new lj();}};oi.prototype.fv=function(){switch(this.kv){case 0:fj.pv(false);return new lj();case 1:return this.wbb.w;case 2:return new lj(this.wbb.bu*this.wbb.w.x+this.xbb.bu*this.xbb.w.x,this.wbb.bu*this.wbb.w.y+this.xbb.bu*this.xbb.w.y);default :fj.pv(false);return new lj();}};oi.prototype.fw=function(jbb,mbb){switch(this.kv){case 0:fj.pv(false);break;case 1:jbb.js(this.wbb.wv);
mbb.js(this.wbb.zv);break;case 2:jbb.x=this.wbb.bu*this.wbb.wv.x+this.xbb.bu*this.xbb.wv.x;jbb.y=this.wbb.bu*this.wbb.wv.y+this.xbb.bu*this.xbb.wv.y;mbb.x=this.wbb.bu*this.wbb.zv.x+this.xbb.bu*this.xbb.zv.x;mbb.y=this.wbb.bu*this.wbb.zv.y+this.xbb.bu*this.xbb.zv.y;break;case 3:mbb.x=jbb.x=this.wbb.bu*this.wbb.wv.x+this.xbb.bu*this.xbb.wv.x+this.ybb.bu*this.ybb.wv.x;mbb.y=jbb.y=this.wbb.bu*this.wbb.wv.y+this.xbb.bu*this.xbb.wv.y+this.ybb.bu*this.ybb.wv.y;break;default :fj.pv(false);break;}};oi.prototype.ecb=function(){
switch(this.kv){case 0:fj.pv(false);return 0.0;case 1:return 0.0;case 2:return ij.aw(this.wbb.w,this.xbb.w).jw();case 3:return ij.gcb(ij.aw(this.xbb.w,this.wbb.w),ij.aw(this.ybb.w,this.wbb.w));default :fj.pv(false);return 0.0;}};oi.prototype.nv=function(){var hcb=this.wbb.w;var icb=this.xbb.w;var fcb=ij.aw(icb,hcb);var jcb=(-(hcb.x*fcb.x+hcb.y*fcb.y));if(jcb<=0.0){this.wbb.bu=1.0;this.kv=1;return;}var kcb=(icb.x*fcb.x+icb.y*fcb.y);if(kcb<=0.0){this.xbb.bu=1.0;this.kv=1;this.wbb.bo(this.xbb);return;}var lcb=1.0/(kcb+jcb);
this.wbb.bu=kcb*lcb;this.xbb.bu=jcb*lcb;this.kv=2;};oi.prototype.ov=function(){var hcb=this.wbb.w;var icb=this.xbb.w;var mcb=this.ybb.w;var fcb=ij.aw(icb,hcb);var ncb=ij.ocb(hcb,fcb);var pcb=ij.ocb(icb,fcb);var kcb=pcb;var jcb=(-ncb);var qcb=ij.aw(mcb,hcb);var rcb=ij.ocb(hcb,qcb);var scb=ij.ocb(mcb,qcb);var tcb=scb;var ucb=(-rcb);var vcb=ij.aw(mcb,icb);var wcb=ij.ocb(icb,vcb);var xcb=ij.ocb(mcb,vcb);var ycb=xcb;var zcb=(-wcb);var adb=ij.gcb(fcb,qcb);var bdb=adb*ij.gcb(icb,mcb);var cdb=adb*ij.gcb(mcb,hcb);var ddb=adb*ij.gcb(hcb,
icb);if(jcb<=0.0&&ucb<=0.0){this.wbb.bu=1.0;this.kv=1;return;}if(kcb>0.0&&jcb>0.0&&ddb<=0.0){var lcb=1.0/(kcb+jcb);this.wbb.bu=kcb*lcb;this.xbb.bu=jcb*lcb;this.kv=2;return;}if(tcb>0.0&&ucb>0.0&&cdb<=0.0){var edb=1.0/(tcb+ucb);this.wbb.bu=tcb*edb;this.ybb.bu=ucb*edb;this.kv=2;this.xbb.bo(this.ybb);return;}if(kcb<=0.0&&zcb<=0.0){this.xbb.bu=1.0;this.kv=1;this.wbb.bo(this.xbb);return;}if(tcb<=0.0&&ycb<=0.0){this.ybb.bu=1.0;this.kv=1;this.wbb.bo(this.ybb);return;}if(ycb>0.0&&zcb>0.0&&bdb<=0.0){var fdb=1.0/(ycb+zcb);
this.xbb.bu=ycb*fdb;this.ybb.bu=zcb*fdb;this.kv=2;this.wbb.bo(this.ybb);return;}var gdb=1.0/(bdb+cdb+ddb);this.wbb.bu=bdb*gdb;this.xbb.bu=cdb*gdb;this.ybb.bu=ddb*gdb;this.kv=3;};qi.qi=function(){this.lv=new jh(3);this.mv=new jh(3);};ri.ri=function(){};ri.prototype.bo=function(other){this.wv.js(other.wv);this.zv.js(other.zv);this.w.js(other.w);this.bu=other.bu;this.lv=other.lv;this.mv=other.mv;};si.si=function(){};si.hdb=function(hm){++si.idb;var ru=hm.ru;var su=hm.su;var jdb=hm.jdb;var kdb=hm.kdb;fj.pv(jdb.ldb==kdb.ldb);
fj.pv(1.0-jdb.ldb>Number.MIN_VALUE);var at=ru.uq+su.uq;var mdb=hm.mdb;var ndb=0.0;var odb=1000;var jv=0;var target=0.0;si.pdb.ay=0;si.qdb.mw=false;for(;;){jdb.rdb(si.sdb,ndb);kdb.rdb(si.tdb,ndb);si.qdb.ru=ru;si.qdb.su=su;si.qdb.tu=si.sdb;si.qdb.uu=si.tdb;zh.ou(si.udb,si.pdb,si.qdb);if(si.udb.iw<=0.0){ndb=1.0;break;}si.vdb.qab(si.pdb,ru,si.sdb,su,si.tdb);var kp=si.vdb.sbb(si.sdb,si.tdb);if(kp<=0.0){ndb=1.0;break;}if(jv==0){if(kp>at){target=ij.ew(at-mdb,0.75*at);}else {target=ij.ew(kp-mdb,0.02*at);}}if(kp-target<0.5*mdb){
if(jv==0){ndb=1.0;break;}break;}var wdb=ndb;{var xdb=ndb;var ydb=1.0;var zdb=kp;jdb.rdb(si.sdb,ydb);kdb.rdb(si.tdb,ydb);var aeb=si.vdb.sbb(si.sdb,si.tdb);if(aeb>=target){ndb=1.0;break;}var beb=0;for(;;){var x=0;if(beb&1){x=xdb+(target-zdb)*(ydb-xdb)/(aeb-zdb);}else {x=0.5*(xdb+ydb);}jdb.rdb(si.sdb,x);kdb.rdb(si.tdb,x);var pbb=si.vdb.sbb(si.sdb,si.tdb);if(ij.ceb(pbb-target)<0.025*mdb){wdb=x;break;}if(pbb>target){xdb=x;zdb=pbb;}else {ydb=x;aeb=pbb;}++beb;++si.deb;if(beb==50){break;}}si.eeb=ij.ew(si.eeb,beb);
}if(wdb<(1.0+100.0*Number.MIN_VALUE)*ndb){break;}ndb=wdb;jv++;++si.feb;if(jv==odb){break;}}si.geb=ij.ew(si.geb,jv);return ndb;};ng.tl.push(function(){ng.kh.si.idb=0;ng.kh.si.feb=0;ng.kh.si.geb=0;ng.kh.si.deb=0;ng.kh.si.eeb=0;ng.kh.si.pdb=new qi();ng.kh.si.qdb=new ai();ng.kh.si.sdb=new kj();ng.kh.si.tdb=new kj();ng.kh.si.vdb=new ni();ng.kh.si.udb=new bi();});ti.ti=function(){this.ru=new ci();this.su=new ci();this.jdb=new jj();this.kdb=new jj();};ui.ui=function(){this.heb=new lj();};ui.prototype.ui=function(){
this.os=new ih(fj.ms);for(var i=0;i<fj.ms;i++){this.os[i]=new lj();}};ui.prototype.qab=function(nq,pq,ieb,rq,jeb){if(ieb===undefined)ieb=0;if(jeb===undefined)jeb=0;if(nq.sq==0){return;}var i=0;var eo;var uo;var dbb=0;var ebb=0;var keb=0;var leb=0;var meb=0;var neb=0;switch(nq.er){case hi.bt:{uo=pq.vo;eo=nq.ks;var zab=pq.position.x+uo.zo.x*eo.x+uo.ap.x*eo.y;var abb=pq.position.y+uo.zo.y*eo.x+uo.ap.y*eo.y;uo=rq.vo;eo=nq.os[0].ks;var bbb=rq.position.x+uo.zo.x*eo.x+uo.ap.x*eo.y;var cbb=rq.position.y+uo.zo.y*eo.x+uo.ap.y*eo.y;
var xl=bbb-zab;var yl=cbb-abb;var oeb=xl*xl+yl*yl;if(oeb>Number.MIN_VALUE*Number.MIN_VALUE){var qv=Math.sqrt(oeb);this.heb.x=xl/qv;this.heb.y=yl/qv;}else {this.heb.x=1;this.heb.y=0;}var peb=zab+ieb*this.heb.x;var qeb=abb+ieb*this.heb.y;var reb=bbb-jeb*this.heb.x;var seb=cbb-jeb*this.heb.y;this.os[0].x=0.5*(peb+reb);this.os[0].y=0.5*(qeb+seb);}break;case hi.gr:{uo=pq.vo;eo=nq.is;dbb=uo.zo.x*eo.x+uo.ap.x*eo.y;ebb=uo.zo.y*eo.x+uo.ap.y*eo.y;uo=pq.vo;eo=nq.ks;keb=pq.position.x+uo.zo.x*eo.x+uo.ap.x*eo.y;leb=pq.position.y+uo.zo.y*eo.x+uo.ap.y*eo.y;
this.heb.x=dbb;this.heb.y=ebb;for(i=0;i<nq.sq;i++){uo=rq.vo;eo=nq.os[i].ks;meb=rq.position.x+uo.zo.x*eo.x+uo.ap.x*eo.y;neb=rq.position.y+uo.zo.y*eo.x+uo.ap.y*eo.y;this.os[i].x=meb+0.5*(ieb-(meb-keb)*dbb-(neb-leb)*ebb-jeb)*dbb;this.os[i].y=neb+0.5*(ieb-(meb-keb)*dbb-(neb-leb)*ebb-jeb)*ebb;}}break;case hi.fr:{uo=rq.vo;eo=nq.is;dbb=uo.zo.x*eo.x+uo.ap.x*eo.y;ebb=uo.zo.y*eo.x+uo.ap.y*eo.y;uo=rq.vo;eo=nq.ks;keb=rq.position.x+uo.zo.x*eo.x+uo.ap.x*eo.y;leb=rq.position.y+uo.zo.y*eo.x+uo.ap.y*eo.y;this.heb.x=(-dbb);
this.heb.y=(-ebb);for(i=0;i<nq.sq;i++){uo=pq.vo;eo=nq.os[i].ks;meb=pq.position.x+uo.zo.x*eo.x+uo.ap.x*eo.y;neb=pq.position.y+uo.zo.y*eo.x+uo.ap.y*eo.y;this.os[i].x=meb+0.5*(jeb-(meb-keb)*dbb-(neb-leb)*ebb-ieb)*dbb;this.os[i].y=neb+0.5*(jeb-(meb-keb)*dbb-(neb-leb)*ebb-ieb)*ebb;}}break;}};vi.vi=function(){this.hh=new lj();this.id=new xh();};vi.prototype.bo=function(other){this.hh.js(other.hh);this.id.bo(other.id);};wi.wi=function(){};Object.defineProperty(wi.prototype,'referenceEdge',{hu:false,iu:true,
sg:function(){return this.ju;}});Object.defineProperty(wi.prototype,'referenceEdge',{hu:false,iu:true,tg:function(value){if(value===undefined)value=0;this.ju=value;this.eu.fu=(this.eu.fu&0xffffff00)|(this.ju&0x000000ff);}});Object.defineProperty(wi.prototype,'incidentEdge',{hu:false,iu:true,sg:function(){return this.ku;}});Object.defineProperty(wi.prototype,'incidentEdge',{hu:false,iu:true,tg:function(value){if(value===undefined)value=0;this.ku=value;this.eu.fu=(this.eu.fu&0xffff00ff)|((this.ku<<8)&0x0000ff00);
}});Object.defineProperty(wi.prototype,'incidentVertex',{hu:false,iu:true,sg:function(){return this.lu;}});Object.defineProperty(wi.prototype,'incidentVertex',{hu:false,iu:true,tg:function(value){if(value===undefined)value=0;this.lu=value;this.eu.fu=(this.eu.fu&0xff00ffff)|((this.lu<<16)&0x00ff0000);}});Object.defineProperty(wi.prototype,'flip',{hu:false,iu:true,sg:function(){return this.mu;}});Object.defineProperty(wi.prototype,'flip',{hu:false,iu:true,tg:function(value){if(value===undefined)value=0;
this.mu=value;this.eu.fu=(this.eu.fu&0x00ffffff)|((this.mu<<24)&0xff000000);}});})();(function(){var ej=ng.mh.ej,dj=ng.mh.dj,fj=ng.mh.fj,xi=ng.kh.lh.xi,yi=ng.kh.lh.yi,zi=ng.kh.lh.zi,aj=ng.kh.lh.aj,bj=ng.kh.lh.bj,cj=ng.kh.lh.cj,gj=ng.mh.Math.gj,hj=ng.mh.Math.hj,ij=ng.mh.Math.ij,jj=ng.mh.Math.jj,kj=ng.mh.Math.kj,lj=ng.mh.Math.lj,mj=ng.mh.Math.mj,nj=ng.nh.nj,oj=ng.nh.oj,pj=ng.nh.pj,qj=ng.nh.qj,rj=ng.nh.rj,sj=ng.nh.sj,tj=ng.nh.tj,uj=ng.nh.uj,vj=ng.nh.vj,wj=ng.nh.wj,xj=ng.nh.xj,yj=ng.nh.yj,zj=ng.nh.zj,
ak=ng.nh.ak,th=ng.kh.th,uh=ng.kh.uh,vh=ng.kh.vh,wh=ng.kh.wh,xh=ng.kh.xh,yh=ng.kh.yh,zh=ng.kh.zh,ai=ng.kh.ai,bi=ng.kh.bi,ci=ng.kh.ci,di=ng.kh.di,ei=ng.kh.ei,fi=ng.kh.fi,gi=ng.kh.gi,hi=ng.kh.hi,ii=ng.kh.ii,ji=ng.kh.ji,ki=ng.kh.ki,li=ng.kh.li,mi=ng.kh.mi,ni=ng.kh.ni,oi=ng.kh.oi,qi=ng.kh.qi,ri=ng.kh.ri,si=ng.kh.si,ti=ng.kh.ti,ui=ng.kh.ui,vi=ng.kh.vi,wi=ng.kh.wi,sh=ng.kh.sh;ng.vg(xi,ng.kh.lh.cj);xi.prototype.__super=ng.kh.lh.cj.prototype;xi.xi=function(){ng.kh.lh.cj.cj.apply(this,arguments);this.us=new lj();
};xi.prototype.gu=function(){var vm=new xi();vm.bo(this);return vm;};xi.prototype.bo=function(other){this.__super.bo.call(this,other);if(ng.dh(other,xi)){var teb=(other instanceof xi?other:null);this.us.js(teb.us);}};xi.prototype.ueb=function(transform,qg){var uo=transform.vo;var xl=transform.position.x+(uo.zo.x*this.us.x+uo.ap.x*this.us.y);var yl=transform.position.y+(uo.zo.y*this.us.x+uo.ap.y*this.us.y);xl=qg.x-xl;yl=qg.y-yl;return(xl*xl+yl*yl)<=this.uq*this.uq;};xi.prototype.fm=function(gm,hm,transform){
var uo=transform.vo;var it=transform.position.x+(uo.zo.x*this.us.x+uo.ap.x*this.us.y);var jt=transform.position.y+(uo.zo.y*this.us.x+uo.ap.y*this.us.y);var veb=hm.lm.x-it;var web=hm.lm.y-jt;var jn=(veb*veb+web*web)-this.uq*this.uq;var cab=hm.nm.x-hm.lm.x;var dab=hm.nm.y-hm.lm.y;var c=(veb*cab+web*dab);var xeb=(cab*cab+dab*dab);var yeb=c*c-xeb*jn;if(yeb<0.0||xeb<Number.MIN_VALUE){return false;}var bu=(-(c+Math.sqrt(yeb)));if(0.0<=bu&&bu<=hm.fy*xeb){bu/=xeb;gm.wm=bu;gm.qm.x=veb+bu*cab;gm.qm.y=web+bu*dab;gm.qm.mr();
return true;}return false;};xi.prototype.zeb=function(dm,transform){var uo=transform.vo;var km=transform.position.x+(uo.zo.x*this.us.x+uo.ap.x*this.us.y);var mm=transform.position.y+(uo.zo.y*this.us.x+uo.ap.y*this.us.y);dm.ul.bo(km-this.uq,mm-this.uq);dm.vl.bo(km+this.uq,mm+this.uq);};xi.prototype.afb=function(bfb,cfb){if(cfb===undefined)cfb=0;bfb.dfb=cfb*fj.efb*this.uq*this.uq;bfb.jy.js(this.us);bfb.ffb=bfb.dfb*(0.5*this.uq*this.uq+(this.us.x*this.us.x+this.us.y*this.us.y));};xi.prototype.gfb=function(qm,
offset,uz,c){if(offset===undefined)offset=0;var qg=ij.xv(uz,this.us);var hfb=(-(ij.ocb(qm,qg)-offset));if(hfb<(-this.uq)+Number.MIN_VALUE){return 0;}if(hfb>this.uq){c.js(qg);return Math.PI*this.uq*this.uq;}var ifb=this.uq*this.uq;var jfb=hfb*hfb;var kfb=ifb*(Math.asin(hfb/this.uq)+Math.PI/2)+hfb*Math.sqrt(ifb-jfb);var lfb=(-2/3*Math.pow(ifb-jfb,1.5)/kfb);c.x=qg.x+qm.x*lfb;c.y=qg.y+qm.y*lfb;return kfb;};xi.prototype.mfb=function(){return this.us;};xi.prototype.nfb=function(position){this.us.js(position);};
xi.prototype.ofb=function(){return this.uq;};xi.prototype.pfb=function(at){if(at===undefined)at=0;this.uq=at;};xi.prototype.xi=function(at){if(at===undefined)at=0;this.__super.cj.call(this);this.er=cj.sw;this.uq=at;};yi.yi=function(){};yi.prototype.yi=function(){this.qt=0;this.qfb=true;this.rt=[];};ng.vg(zi,ng.kh.lh.cj);zi.prototype.__super=ng.kh.lh.cj.prototype;zi.zi=function(){ng.kh.lh.cj.cj.apply(this,arguments);this.rfb=new lj();this.wbb=new lj();this.xbb=new lj();this.sfb=new lj();this.tfb=new lj();
this.heb=new lj();this.ufb=new lj();this.vfb=new lj();this.wfb=new lj();};zi.prototype.ueb=function(transform,qg){return false;};zi.prototype.fm=function(gm,hm,transform){var uo;var cab=hm.nm.x-hm.lm.x;var dab=hm.nm.y-hm.lm.y;uo=transform.vo;var gp=transform.position.x+(uo.zo.x*this.wbb.x+uo.ap.x*this.wbb.y);var hp=transform.position.y+(uo.zo.y*this.wbb.x+uo.ap.y*this.wbb.y);var eab=transform.position.y+(uo.zo.y*this.xbb.x+uo.ap.y*this.xbb.y)-hp;var fab=(-(transform.position.x+(uo.zo.x*this.xbb.x+uo.ap.x*this.xbb.y)-gp));
var gab=100.0*Number.MIN_VALUE;var hab=(-(cab*eab+dab*fab));if(hab>gab){var iab=hm.lm.x-gp;var jab=hm.lm.y-hp;var bu=(iab*eab+jab*fab);if(0.0<=bu&&bu<=hm.fy*hab){var kab=(-cab*jab)+dab*iab;if((-gab*hab)<=kab&&kab<=hab*(1.0+gab)){bu/=hab;gm.wm=bu;var lab=Math.sqrt(eab*eab+fab*fab);gm.qm.x=eab/lab;gm.qm.y=fab/lab;return true;}}}return false;};zi.prototype.zeb=function(dm,transform){var uo=transform.vo;var gp=transform.position.x+(uo.zo.x*this.wbb.x+uo.ap.x*this.wbb.y);var hp=transform.position.y+(uo.zo.y*this.wbb.x+uo.ap.y*this.wbb.y);
var ip=transform.position.x+(uo.zo.x*this.xbb.x+uo.ap.x*this.xbb.y);var jp=transform.position.y+(uo.zo.y*this.xbb.x+uo.ap.y*this.xbb.y);if(gp<ip){dm.ul.x=gp;dm.vl.x=ip;}else {dm.ul.x=ip;dm.vl.x=gp;}if(hp<jp){dm.ul.y=hp;dm.vl.y=jp;}else {dm.ul.y=jp;dm.vl.y=hp;}};zi.prototype.afb=function(bfb,cfb){if(cfb===undefined)cfb=0;bfb.dfb=0;bfb.jy.js(this.wbb);bfb.ffb=0;};zi.prototype.gfb=function(qm,offset,uz,c){if(offset===undefined)offset=0;var xfb=new lj(qm.x*offset,qm.y*offset);var vt=ij.xv(uz,this.wbb);var wt=ij.xv(uz,
this.xbb);var yfb=ij.ocb(qm,vt)-offset;var oeb=ij.ocb(qm,wt)-offset;if(yfb>0){if(oeb>0){return 0;}else {vt.x=(-oeb/(yfb-oeb)*vt.x)+yfb/(yfb-oeb)*wt.x;vt.y=(-oeb/(yfb-oeb)*vt.y)+yfb/(yfb-oeb)*wt.y;}}else {if(oeb>0){wt.x=(-oeb/(yfb-oeb)*vt.x)+yfb/(yfb-oeb)*wt.x;wt.y=(-oeb/(yfb-oeb)*vt.y)+yfb/(yfb-oeb)*wt.y;}else {}}c.x=(xfb.x+vt.x+wt.x)/3;c.y=(xfb.y+vt.y+wt.y)/3;return 0.5*((vt.x-xfb.x)*(wt.y-xfb.y)-(vt.y-xfb.y)*(wt.x-xfb.x));};zi.prototype.zfb=function(){return this.agb;};zi.prototype.bgb=function(){return this.wbb;
};zi.prototype.cgb=function(){return this.xbb;};zi.prototype.dgb=function(){return this.sfb;};zi.prototype.egb=function(){return this.tfb;};zi.prototype.fgb=function(){return this.heb;};zi.prototype.ggb=function(){return this.ufb;};zi.prototype.hgb=function(){return this.vfb;};zi.prototype.igb=function(){return this.wfb;};zi.prototype.jgb=function(){return this.kgb;};zi.prototype.lgb=function(){return this.mgb;};zi.prototype.xz=function(uz){var uo=uz.vo;return new lj(uz.position.x+(uo.zo.x*this.sfb.x+uo.ap.x*this.sfb.y),
uz.position.y+(uo.zo.y*this.sfb.x+uo.ap.y*this.sfb.y));};zi.prototype.ngb=function(){return this.ogb;};zi.prototype.pgb=function(){return this.qgb;};zi.prototype.tz=function(uz,xl,yl){if(xl===undefined)xl=0;if(yl===undefined)yl=0;var uo=uz.vo;var gp=uz.position.x+(uo.zo.x*this.sfb.x+uo.ap.x*this.sfb.y);var hp=uz.position.y+(uo.zo.y*this.sfb.x+uo.ap.y*this.sfb.y);var ip=uz.position.x+(uo.zo.x*this.tfb.x+uo.ap.x*this.tfb.y);var jp=uz.position.y+(uo.zo.y*this.tfb.x+uo.ap.y*this.tfb.y);if((gp*xl+hp*yl)>(ip*xl+jp*yl)){
this.rfb.x=gp;this.rfb.y=hp;}else {this.rfb.x=ip;this.rfb.y=jp;}return this.rfb;};zi.prototype.zi=function(vt,wt){this.__super.cj.call(this);this.er=cj.rgb;this.qgb=null;this.ogb=null;this.wbb=vt;this.xbb=wt;this.ufb.bo(this.xbb.x-this.wbb.x,this.xbb.y-this.wbb.y);this.agb=this.ufb.mr();this.heb.bo(this.ufb.y,(-this.ufb.x));this.sfb.bo((-fj.sgb*(this.heb.x-this.ufb.x))+this.wbb.x,(-fj.sgb*(this.heb.y-this.ufb.y))+this.wbb.y);this.tfb.bo((-fj.sgb*(this.heb.x+this.ufb.x))+this.xbb.x,(-fj.sgb*(this.heb.y+this.ufb.y))+this.xbb.y);
this.vfb=this.heb;this.wfb.bo((-this.heb.x),(-this.heb.y));};zi.prototype.tgb=function(qp,ugb,vgb,wgb){this.qgb=qp;this.sfb=ugb;this.vfb=vgb;this.kgb=wgb;};zi.prototype.xgb=function(qp,ugb,vgb,wgb){this.ogb=qp;this.tfb=ugb;this.wfb=vgb;this.mgb=wgb;};aj.aj=function(){this.dfb=0.0;this.jy=new lj(0,0);this.ffb=0.0;};ng.vg(bj,ng.kh.lh.cj);bj.prototype.__super=ng.kh.lh.cj.prototype;bj.bj=function(){ng.kh.lh.cj.cj.apply(this,arguments);};bj.prototype.gu=function(){var vm=new bj();vm.bo(this);return vm;};
bj.prototype.bo=function(other){this.__super.bo.call(this,other);if(ng.dh(other,bj)){var teb=(other instanceof bj?other:null);this.np.js(teb.np);this.no=teb.no;this.ygb(this.no);for(var i=0;i<this.no;i++){this.po[i].js(teb.po[i]);this.ro[i].js(teb.ro[i]);}}};bj.prototype.zgb=function(rt,qt){if(qt===undefined)qt=0;var hh=new ih();var i=0,eo;for(i=0;i<rt.length;++i){eo=rt[i];hh.push(eo);}this.ahb(hh,qt);};bj.bhb=function(rt,qt){if(qt===undefined)qt=0;var chb=new bj();chb.zgb(rt,qt);return chb;};bj.prototype.ahb=function(rt,
qt){if(qt===undefined)qt=0;if(qt==0)qt=rt.length;fj.pv(2<=qt);this.no=qt;this.ygb(qt);var i=0;for(i=0;i<this.no;i++){this.po[i].js(rt[i]);}for(i=0;i<this.no;++i){var eq=parseInt(i);var fq=parseInt(i+1<this.no?i+1:0);var qp=ij.aw(this.po[fq],this.po[eq]);fj.pv(qp.hv()>Number.MIN_VALUE);this.ro[i].js(ij.hbb(qp,1.0));this.ro[i].mr();}this.np=bj.dhb(this.po,this.no);};bj.ehb=function(rt,qt){if(qt===undefined)qt=0;var chb=new bj();chb.ahb(rt,qt);return chb;};bj.prototype.fhb=function(ghb,hhb){if(ghb===undefined)ghb=0;
if(hhb===undefined)hhb=0;this.no=4;this.ygb(4);this.po[0].bo((-ghb),(-hhb));this.po[1].bo(ghb,(-hhb));this.po[2].bo(ghb,hhb);this.po[3].bo((-ghb),hhb);this.ro[0].bo(0.0,(-1.0));this.ro[1].bo(1.0,0.0);this.ro[2].bo(0.0,1.0);this.ro[3].bo((-1.0),0.0);this.np.ct();};bj.ihb=function(ghb,hhb){if(ghb===undefined)ghb=0;if(hhb===undefined)hhb=0;var chb=new bj();chb.fhb(ghb,hhb);return chb;};bj.prototype.jhb=function(ghb,hhb,jy,khb){if(ghb===undefined)ghb=0;if(hhb===undefined)hhb=0;if(jy===undefined)jy=null;
if(khb===undefined)khb=0.0;this.no=4;this.ygb(4);this.po[0].bo((-ghb),(-hhb));this.po[1].bo(ghb,(-hhb));this.po[2].bo(ghb,hhb);this.po[3].bo((-ghb),hhb);this.ro[0].bo(0.0,(-1.0));this.ro[1].bo(1.0,0.0);this.ro[2].bo(0.0,1.0);this.ro[3].bo((-1.0),0.0);this.np=jy;var uz=new kj();uz.position=jy;uz.vo.bo(khb);for(var i=0;i<this.no;++i){this.po[i]=ij.xv(uz,this.po[i]);this.ro[i]=ij.lbb(uz.vo,this.ro[i]);}};bj.lhb=function(ghb,hhb,jy,khb){if(ghb===undefined)ghb=0;if(hhb===undefined)hhb=0;if(jy===undefined)jy=null;
if(khb===undefined)khb=0.0;var chb=new bj();chb.jhb(ghb,hhb,jy,khb);return chb;};bj.prototype.mhb=function(vt,wt){this.no=2;this.ygb(2);this.po[0].js(vt);this.po[1].js(wt);this.np.x=0.5*(vt.x+wt.x);this.np.y=0.5*(vt.y+wt.y);this.ro[0]=ij.hbb(ij.aw(wt,vt),1.0);this.ro[0].mr();this.ro[1].x=(-this.ro[0].x);this.ro[1].y=(-this.ro[0].y);};bj.nhb=function(vt,wt){var chb=new bj();chb.mhb(vt,wt);return chb;};bj.prototype.ueb=function(uz,qg){var eo;var uo=uz.vo;var cq=qg.x-uz.position.x;var ps=qg.y-uz.position.y;var ohb=(cq*uo.zo.x+ps*uo.zo.y);
var phb=(cq*uo.ap.x+ps*uo.ap.y);for(var i=0;i<this.no;++i){eo=this.po[i];cq=ohb-eo.x;ps=phb-eo.y;eo=this.ro[i];var fp=(eo.x*cq+eo.y*ps);if(fp>0.0){return false;}}return true;};bj.prototype.fm=function(gm,hm,transform){var qhb=0.0;var rhb=hm.fy;var cq=0;var ps=0;var uo;var eo;cq=hm.lm.x-transform.position.x;ps=hm.lm.y-transform.position.y;uo=transform.vo;var vs=(cq*uo.zo.x+ps*uo.zo.y);var ws=(cq*uo.ap.x+ps*uo.ap.y);cq=hm.nm.x-transform.position.x;ps=hm.nm.y-transform.position.y;uo=transform.vo;var xs=(cq*uo.zo.x+ps*uo.zo.y);
var ys=(cq*uo.ap.x+ps*uo.ap.y);var xl=xs-vs;var yl=ys-ws;var index=parseInt((-1));for(var i=0;i<this.no;++i){eo=this.po[i];cq=eo.x-vs;ps=eo.y-ws;eo=this.ro[i];var shb=(eo.x*cq+eo.y*ps);var thb=(eo.x*xl+eo.y*yl);if(thb==0.0){if(shb<0.0){return false;}}else {if(thb<0.0&&shb<qhb*thb){qhb=shb/thb;index=i;}else if(thb>0.0&&shb<rhb*thb){rhb=shb/thb;}}if(rhb<qhb-Number.MIN_VALUE){return false;}}if(index>=0){gm.wm=qhb;uo=transform.vo;eo=this.ro[index];gm.qm.x=(uo.zo.x*eo.x+uo.ap.x*eo.y);gm.qm.y=(uo.zo.y*eo.x+uo.ap.y*eo.y);
return true;}return false;};bj.prototype.zeb=function(dm,uz){var uo=uz.vo;var eo=this.po[0];var uhb=uz.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);var vhb=uz.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);var whb=uhb;var xhb=vhb;for(var i=1;i<this.no;++i){eo=this.po[i];var vz=uz.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);var wz=uz.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);uhb=uhb<vz?uhb:vz;vhb=vhb<wz?vhb:wz;whb=whb>vz?whb:vz;xhb=xhb>wz?xhb:wz;}dm.ul.x=uhb-this.uq;dm.ul.y=vhb-this.uq;dm.vl.x=whb+this.uq;dm.vl.y=xhb+this.uq;};bj.prototype.afb=function(bfb,
cfb){if(cfb===undefined)cfb=0;if(this.no==2){bfb.jy.x=0.5*(this.po[0].x+this.po[1].x);bfb.jy.y=0.5*(this.po[0].y+this.po[1].y);bfb.dfb=0.0;bfb.ffb=0.0;return;}var yhb=0.0;var zhb=0.0;var kfb=0.0;var ffb=0.0;var vs=0.0;var ws=0.0;var aib=1.0/3.0;for(var i=0;i<this.no;++i){var nm=this.po[i];var bib=i+1<this.no?this.po[parseInt(i+1)]:this.po[0];var cib=nm.x-vs;var dib=nm.y-ws;var eib=bib.x-vs;var fib=bib.y-ws;var gib=cib*fib-dib*eib;var hib=0.5*gib;kfb+=hib;yhb+=hib*aib*(vs+nm.x+bib.x);zhb+=hib*aib*(ws+nm.y+bib.y);
var iib=vs;var jib=ws;var kib=cib;var lib=dib;var mib=eib;var nib=fib;var oib=aib*(0.25*(kib*kib+mib*kib+mib*mib)+(iib*kib+iib*mib))+0.5*iib*iib;var pib=aib*(0.25*(lib*lib+nib*lib+nib*nib)+(jib*lib+jib*nib))+0.5*jib*jib;ffb+=gib*(oib+pib);}bfb.dfb=cfb*kfb;yhb*=1.0/kfb;zhb*=1.0/kfb;bfb.jy.bo(yhb,zhb);bfb.ffb=cfb*ffb;};bj.prototype.gfb=function(qm,offset,uz,c){if(offset===undefined)offset=0;var qib=ij.uv(uz.vo,qm);var rib=offset-ij.ocb(qm,uz.position);var sib=new jh();var tib=0;var uib=parseInt((-1));var vib=parseInt((-1));
var wib=false;var i=0;for(i=0;i<this.no;++i){sib[i]=ij.ocb(qib,this.po[i])-rib;var xib=sib[i]<(-Number.MIN_VALUE);if(i>0){if(xib){if(!wib){uib=i-1;tib++;}}else {if(wib){vib=i-1;tib++;}}}wib=xib;}switch(tib){case 0:if(wib){var yib=new aj();this.afb(yib,1);c.js(ij.xv(uz,yib.jy));return yib.dfb;}else {return 0;}break;case 1:if(uib==(-1)){uib=this.no-1;}else {vib=this.no-1;}break;}var zib=parseInt((uib+1)%this.no);var ajb=parseInt((vib+1)%this.no);var bjb=(0-sib[uib])/(sib[zib]-sib[uib]);var cjb=(0-sib[vib])/(sib[ajb]-sib[vib]);
var djb=new lj(this.po[uib].x*(1-bjb)+this.po[zib].x*bjb,this.po[uib].y*(1-bjb)+this.po[zib].y*bjb);var ejb=new lj(this.po[vib].x*(1-cjb)+this.po[ajb].x*cjb,this.po[vib].y*(1-cjb)+this.po[ajb].y*cjb);var kfb=0;var jy=new lj();var nm=this.po[zib];var bib;i=zib;while(i!=ajb){i=(i+1)%this.no;if(i==ajb)bib=ejb;else bib=this.po[i];var hib=0.5*((nm.x-djb.x)*(bib.y-djb.y)-(nm.y-djb.y)*(bib.x-djb.x));kfb+=hib;jy.x+=hib*(djb.x+nm.x+bib.x)/3;jy.y+=hib*(djb.y+nm.y+bib.y)/3;nm=bib;}jy.fjb(1/kfb);c.js(ij.xv(uz,jy));return kfb;
};bj.prototype.xw=function(){return this.no;};bj.prototype.gjb=function(){return this.po;};bj.prototype.hjb=function(){return this.ro;};bj.prototype.tv=function(qv){var uw=0;var vw=this.po[0].x*qv.x+this.po[0].y*qv.y;for(var i=1;i<this.no;++i){var value=this.po[i].x*qv.x+this.po[i].y*qv.y;if(value>vw){uw=i;vw=value;}}return uw;};bj.prototype.ww=function(qv){var uw=0;var vw=this.po[0].x*qv.x+this.po[0].y*qv.y;for(var i=1;i<this.no;++i){var value=this.po[i].x*qv.x+this.po[i].y*qv.y;if(value>vw){uw=i;vw=value;
}}return this.po[uw];};bj.prototype.kz=function(){return false;};bj.prototype.bj=function(){this.__super.cj.call(this);this.er=cj.tw;this.np=new lj();this.po=new ih();this.ro=new ih();};bj.prototype.ygb=function(ay){if(ay===undefined)ay=0;for(var i=parseInt(this.po.length);i<ay;i++){this.po[i]=new lj();this.ro[i]=new lj();}};bj.dhb=function(ijb,ay){if(ay===undefined)ay=0;var c=new lj();var kfb=0.0;var vs=0.0;var ws=0.0;var jjb=1.0/3.0;for(var i=0;i<ay;++i){var nm=ijb[i];var bib=i+1<ay?ijb[parseInt(i+1)]:ijb[0];var cib=nm.x-vs;
var dib=nm.y-ws;var eib=bib.x-vs;var fib=bib.y-ws;var gib=(cib*fib-dib*eib);var hib=0.5*gib;kfb+=hib;c.x+=hib*jjb*(vs+nm.x+bib.x);c.y+=hib*jjb*(ws+nm.y+bib.y);}c.x*=1.0/kfb;c.y*=1.0/kfb;return c;};bj.kjb=function(ljb,ijb,ay){if(ay===undefined)ay=0;var i=0;var qg=new ih(ay+1);for(i=0;i<ay;++i){qg[i]=ijb[i];}qg[ay]=qg[0];var mjb=Number.MAX_VALUE;for(i=1;i<=ay;++i){var njb=qg[parseInt(i-1)];var ojb=qg[i].x-njb.x;var pjb=qg[i].y-njb.y;var length=Math.sqrt(ojb*ojb+pjb*pjb);ojb/=length;pjb/=length;var qjb=(-pjb);var rjb=ojb;
var uhb=Number.MAX_VALUE;var vhb=Number.MAX_VALUE;var whb=(-Number.MAX_VALUE);var xhb=(-Number.MAX_VALUE);for(var sjb=0;sjb<ay;++sjb){var xl=qg[sjb].x-njb.x;var yl=qg[sjb].y-njb.y;var cab=(ojb*xl+pjb*yl);var dab=(qjb*xl+rjb*yl);if(cab<uhb)uhb=cab;if(dab<vhb)vhb=dab;if(cab>whb)whb=cab;if(dab>xhb)xhb=dab;}var kfb=(whb-uhb)*(xhb-vhb);if(kfb<0.95*mjb){mjb=kfb;ljb.vo.zo.x=ojb;ljb.vo.zo.y=pjb;ljb.vo.ap.x=qjb;ljb.vo.ap.y=rjb;var yhb=0.5*(uhb+whb);var zhb=0.5*(vhb+xhb);var uo=ljb.vo;ljb.jy.x=njb.x+(uo.zo.x*yhb+uo.ap.x*zhb);
ljb.jy.y=njb.y+(uo.zo.y*yhb+uo.ap.y*zhb);ljb.tjb.x=0.5*(whb-uhb);ljb.tjb.y=0.5*(xhb-vhb);}}};ng.tl.push(function(){ng.kh.lh.bj.ujb=new gj();});cj.cj=function(){};cj.prototype.gu=function(){return null;};cj.prototype.bo=function(other){this.uq=other.uq;};cj.prototype.rw=function(){return this.er;};cj.prototype.ueb=function(uz,qg){return false;};cj.prototype.fm=function(gm,hm,transform){return false;};cj.prototype.zeb=function(dm,uz){};cj.prototype.afb=function(bfb,cfb){if(cfb===undefined)cfb=0;};cj.prototype.gfb=function(qm,
offset,uz,c){if(offset===undefined)offset=0;return 0;};cj.xm=function(vjb,wjb,xjb,yjb){var hm=new ai();hm.ru=new ci();hm.ru.bo(vjb);hm.su=new ci();hm.su.bo(xjb);hm.tu=wjb;hm.uu=yjb;hm.mw=true;var zjb=new qi();zjb.ay=0;var gm=new bi();zh.ou(gm,zjb,hm);return gm.iw<10.0*Number.MIN_VALUE;};cj.prototype.cj=function(){this.er=cj.akb;this.uq=fj.bkb;};ng.tl.push(function(){ng.kh.lh.cj.akb=parseInt((-1));ng.kh.lh.cj.sw=0;ng.kh.lh.cj.tw=1;ng.kh.lh.cj.rgb=2;ng.kh.lh.cj.ckb=3;ng.kh.lh.cj.dkb=1;ng.kh.lh.cj.ekb=0;ng.kh.lh.cj.fkb=parseInt((-1));
});})();(function(){var ej=ng.mh.ej,dj=ng.mh.dj,fj=ng.mh.fj,gj=ng.mh.Math.gj,hj=ng.mh.Math.hj,ij=ng.mh.Math.ij,jj=ng.mh.Math.jj,kj=ng.mh.Math.kj,lj=ng.mh.Math.lj,mj=ng.mh.Math.mj;ej.ej=function(){this.gkb=0;this.hkb=0;this.ikb=0;};ej.prototype.ej=function(xeb,jkb,kkb){if(xeb===undefined)xeb=0;if(jkb===undefined)jkb=0;if(kkb===undefined)kkb=0;this.gkb=ng.gh(255*ij.qbb(xeb,0.0,1.0));this.hkb=ng.gh(255*ij.qbb(jkb,0.0,1.0));this.ikb=ng.gh(255*ij.qbb(kkb,0.0,1.0));};ej.prototype.bo=function(xeb,jkb,kkb){
if(xeb===undefined)xeb=0;if(jkb===undefined)jkb=0;if(kkb===undefined)kkb=0;this.gkb=ng.gh(255*ij.qbb(xeb,0.0,1.0));this.hkb=ng.gh(255*ij.qbb(jkb,0.0,1.0));this.ikb=ng.gh(255*ij.qbb(kkb,0.0,1.0));};Object.defineProperty(ej.prototype,'r',{hu:false,iu:true,tg:function(xeb){if(xeb===undefined)xeb=0;this.gkb=ng.gh(255*ij.qbb(xeb,0.0,1.0));}});Object.defineProperty(ej.prototype,'g',{hu:false,iu:true,tg:function(jkb){if(jkb===undefined)jkb=0;this.hkb=ng.gh(255*ij.qbb(jkb,0.0,1.0));}});Object.defineProperty(ej.prototype,
'b',{hu:false,iu:true,tg:function(kkb){if(kkb===undefined)kkb=0;this.ikb=ng.gh(255*ij.qbb(kkb,0.0,1.0));}});Object.defineProperty(ej.prototype,'color',{hu:false,iu:true,sg:function(){return(this.gkb<<16)|(this.hkb<<8)|(this.ikb);}});fj.fj=function(){};fj.lkb=function(mkb,nkb){if(mkb===undefined)mkb=0;if(nkb===undefined)nkb=0;return Math.sqrt(mkb*nkb);};fj.okb=function(pkb,qkb){if(pkb===undefined)pkb=0;if(qkb===undefined)qkb=0;return pkb>qkb?pkb:qkb;};fj.pv=function(bu){if(!bu){throw "Assertion Failed";
}};ng.tl.push(function(){ng.mh.fj.rkb="2.1alpha";ng.mh.fj.skb=0x0000ffff;ng.mh.fj.efb=Math.PI;ng.mh.fj.ms=2;ng.mh.fj.hx=0.1;ng.mh.fj.qx=2.0;ng.mh.fj.tkb=2.0*fj.bkb;ng.mh.fj.bkb=0.005;ng.mh.fj.ukb=2.0/180.0*fj.efb;ng.mh.fj.sgb=8.0*fj.bkb;ng.mh.fj.vkb=32;ng.mh.fj.wkb=32;ng.mh.fj.xkb=1.0;ng.mh.fj.ykb=0.2;ng.mh.fj.zkb=8.0/180.0*fj.efb;ng.mh.fj.alb=2.0;ng.mh.fj.blb=fj.alb*fj.alb;ng.mh.fj.clb=0.5*fj.efb;ng.mh.fj.dlb=fj.clb*fj.clb;ng.mh.fj.elb=0.2;ng.mh.fj.flb=0.5;ng.mh.fj.glb=0.01;ng.mh.fj.hlb=2.0/180.0*fj.efb;
});})();(function(){var th=ng.kh.th,ej=ng.mh.ej,dj=ng.mh.dj,fj=ng.mh.fj,gj=ng.mh.Math.gj,hj=ng.mh.Math.hj,ij=ng.mh.Math.ij,jj=ng.mh.Math.jj,kj=ng.mh.Math.kj,lj=ng.mh.Math.lj,mj=ng.mh.Math.mj;gj.gj=function(){this.zo=new lj();this.ap=new lj();};gj.prototype.gj=function(){this.ilb();};gj.jlb=function(khb){if(khb===undefined)khb=0;var klb=new gj();klb.bo(khb);return klb;};gj.llb=function(mlb,nlb){var klb=new gj();klb.olb(mlb,nlb);return klb;};gj.prototype.bo=function(khb){if(khb===undefined)khb=0;var c=Math.cos(khb);
var vm=Math.sin(khb);this.zo.x=c;this.ap.x=(-vm);this.zo.y=vm;this.ap.y=c;};gj.prototype.olb=function(mlb,nlb){this.zo.js(mlb);this.ap.js(nlb);};gj.prototype.gu=function(){var klb=new gj();klb.plb(this);return klb;};gj.prototype.plb=function(pz){this.zo.js(pz.zo);this.ap.js(pz.ap);};gj.prototype.qlb=function(pz){this.zo.x+=pz.zo.x;this.zo.y+=pz.zo.y;this.ap.x+=pz.ap.x;this.ap.y+=pz.ap.y;};gj.prototype.ilb=function(){this.zo.x=1.0;this.ap.x=0.0;this.zo.y=0.0;this.ap.y=1.0;};gj.prototype.ct=function(){
this.zo.x=0.0;this.ap.x=0.0;this.zo.y=0.0;this.ap.y=0.0;};gj.prototype.rlb=function(){return Math.atan2(this.zo.y,this.zo.x);};gj.prototype.slb=function(tlb){var bu=this.zo.x;var jn=this.ap.x;var c=this.zo.y;var qv=this.ap.y;var ulb=bu*qv-jn*c;if(ulb!=0.0){ulb=1.0/ulb;}tlb.zo.x=ulb*qv;tlb.ap.x=(-ulb*jn);tlb.zo.y=(-ulb*c);tlb.ap.y=ulb*bu;return tlb;};gj.prototype.vlb=function(tlb,iab,jab){if(iab===undefined)iab=0;if(jab===undefined)jab=0;var wlb=this.zo.x;var xlb=this.ap.x;var ylb=this.zo.y;var zlb=this.ap.y;
var ulb=wlb*zlb-xlb*ylb;if(ulb!=0.0){ulb=1.0/ulb;}tlb.x=ulb*(zlb*iab-xlb*jab);tlb.y=ulb*(wlb*jab-ylb*iab);return tlb;};gj.prototype.ceb=function(){this.zo.ceb();this.ap.ceb();};hj.hj=function(){this.zo=new mj();this.ap=new mj();this.amb=new mj();};hj.prototype.hj=function(mlb,nlb,bmb){if(mlb===undefined)mlb=null;if(nlb===undefined)nlb=null;if(bmb===undefined)bmb=null;if(!mlb&&!nlb&&!bmb){this.zo.ct();this.ap.ct();this.amb.ct();}else {this.zo.js(mlb);this.ap.js(nlb);this.amb.js(bmb);}};hj.prototype.cmb=function(mlb,
nlb,bmb){this.zo.js(mlb);this.ap.js(nlb);this.amb.js(bmb);};hj.prototype.gu=function(){return new hj(this.zo,this.ap,this.amb);};hj.prototype.plb=function(pz){this.zo.js(pz.zo);this.ap.js(pz.ap);this.amb.js(pz.amb);};hj.prototype.qlb=function(pz){this.zo.x+=pz.zo.x;this.zo.y+=pz.zo.y;this.zo.dmb+=pz.zo.dmb;this.ap.x+=pz.ap.x;this.ap.y+=pz.ap.y;this.ap.dmb+=pz.ap.dmb;this.amb.x+=pz.amb.x;this.amb.y+=pz.amb.y;this.amb.dmb+=pz.amb.dmb;};hj.prototype.ilb=function(){this.zo.x=1.0;this.ap.x=0.0;this.amb.x=0.0;
this.zo.y=0.0;this.ap.y=1.0;this.amb.y=0.0;this.zo.dmb=0.0;this.ap.dmb=0.0;this.amb.dmb=1.0;};hj.prototype.ct=function(){this.zo.x=0.0;this.ap.x=0.0;this.amb.x=0.0;this.zo.y=0.0;this.ap.y=0.0;this.amb.y=0.0;this.zo.dmb=0.0;this.ap.dmb=0.0;this.amb.dmb=0.0;};hj.prototype.emb=function(tlb,iab,jab){if(iab===undefined)iab=0;if(jab===undefined)jab=0;var wlb=this.zo.x;var xlb=this.ap.x;var ylb=this.zo.y;var zlb=this.ap.y;var ulb=wlb*zlb-xlb*ylb;if(ulb!=0.0){ulb=1.0/ulb;}tlb.x=ulb*(zlb*iab-xlb*jab);tlb.y=ulb*(wlb*jab-ylb*iab);
return tlb;};hj.prototype.fmb=function(tlb,iab,jab,gmb){if(iab===undefined)iab=0;if(jab===undefined)jab=0;if(gmb===undefined)gmb=0;var wlb=this.zo.x;var ylb=this.zo.y;var hmb=this.zo.dmb;var xlb=this.ap.x;var zlb=this.ap.y;var imb=this.ap.dmb;var jmb=this.amb.x;var kmb=this.amb.y;var lmb=this.amb.dmb;var ulb=wlb*(zlb*lmb-imb*kmb)+ylb*(imb*jmb-xlb*lmb)+hmb*(xlb*kmb-zlb*jmb);if(ulb!=0.0){ulb=1.0/ulb;}tlb.x=ulb*(iab*(zlb*lmb-imb*kmb)+jab*(imb*jmb-xlb*lmb)+gmb*(xlb*kmb-zlb*jmb));tlb.y=ulb*(wlb*(jab*lmb-gmb*kmb)+ylb*(gmb*jmb-iab*lmb)+hmb*(iab*kmb-jab*jmb));
tlb.dmb=ulb*(wlb*(zlb*gmb-imb*jab)+ylb*(imb*iab-xlb*gmb)+hmb*(xlb*jab-zlb*iab));return tlb;};ij.ij=function(){};ij.wl=function(x){if(x===undefined)x=0;return mmb(x);};ij.ocb=function(bu,jn){return bu.x*jn.x+bu.y*jn.y;};ij.gcb=function(bu,jn){return bu.x*jn.y-bu.y*jn.x;};ij.hbb=function(bu,vm){if(vm===undefined)vm=0;var hh=new lj(vm*bu.y,(-vm*bu.x));return hh;};ij.cy=function(vm,bu){if(vm===undefined)vm=0;var hh=new lj((-vm*bu.y),vm*bu.x);return hh;};ij.lbb=function(nmb,hh){var omb=new lj(nmb.zo.x*hh.x+nmb.ap.x*hh.y,
nmb.zo.y*hh.x+nmb.ap.y*hh.y);return omb;};ij.uv=function(nmb,hh){var omb=new lj(ij.ocb(hh,nmb.zo),ij.ocb(hh,nmb.ap));return omb;};ij.xv=function(pmb,hh){var bu=ij.lbb(pmb.vo,hh);bu.x+=pmb.position.x;bu.y+=pmb.position.y;return bu;};ij.qmb=function(pmb,hh){var bu=ij.aw(hh,pmb.position);var cq=(bu.x*pmb.vo.zo.x+bu.y*pmb.vo.zo.y);bu.y=(bu.x*pmb.vo.ap.x+bu.y*pmb.vo.ap.y);bu.x=cq;return bu;};ij.rmb=function(bu,jn){var hh=new lj(bu.x+jn.x,bu.y+jn.y);return hh;};ij.aw=function(bu,jn){var hh=new lj(bu.x-jn.x,bu.y-jn.y);
return hh;};ij.ou=function(bu,jn){var kt=bu.x-jn.x;var lt=bu.y-jn.y;return Math.sqrt(kt*kt+lt*lt);};ij.smb=function(bu,jn){var kt=bu.x-jn.x;var lt=bu.y-jn.y;return(kt*kt+lt*lt);};ij.tmb=function(vm,bu){if(vm===undefined)vm=0;var hh=new lj(vm*bu.x,vm*bu.y);return hh;};ij.umb=function(nmb,vmb){var wmb=gj.llb(ij.rmb(nmb.zo,vmb.zo),ij.rmb(nmb.ap,vmb.ap));return wmb;};ij.xmb=function(nmb,vmb){var wmb=gj.llb(ij.lbb(nmb,vmb.zo),ij.lbb(nmb,vmb.ap));return wmb;};ij.ymb=function(nmb,vmb){var mlb=new lj(ij.ocb(nmb.zo,vmb.zo),
ij.ocb(nmb.ap,vmb.zo));var nlb=new lj(ij.ocb(nmb.zo,vmb.ap),ij.ocb(nmb.ap,vmb.ap));var wmb=gj.llb(mlb,nlb);return wmb;};ij.ceb=function(bu){if(bu===undefined)bu=0;return bu>0.0?bu:(-bu);};ij.ey=function(bu){var jn=new lj(ij.ceb(bu.x),ij.ceb(bu.y));return jn;};ij.zmb=function(nmb){var vmb=gj.llb(ij.ey(nmb.zo),ij.ey(nmb.ap));return vmb;};ij.anb=function(bu,jn){if(bu===undefined)bu=0;if(jn===undefined)jn=0;return bu<jn?bu:jn;};ij.bnb=function(bu,jn){var c=new lj(ij.anb(bu.x,jn.x),ij.anb(bu.y,jn.y));return c;};ij.ew=function(bu,
jn){if(bu===undefined)bu=0;if(jn===undefined)jn=0;return bu>jn?bu:jn;};ij.cnb=function(bu,jn){var c=new lj(ij.ew(bu.x,jn.x),ij.ew(bu.y,jn.y));return c;};ij.qbb=function(bu,dnb,enb){if(bu===undefined)bu=0;if(dnb===undefined)dnb=0;if(enb===undefined)enb=0;return bu<dnb?dnb:bu>enb?enb:bu;};ij.fnb=function(bu,dnb,enb){return ij.cnb(dnb,ij.bnb(bu,enb));};ij.hn=function(bu,jn){var ch=bu[0];bu[0]=jn[0];jn[0]=ch;};ij.gnb=function(){return Math.random()*2-1;};ij.hnb=function(inb,jnb){if(inb===undefined)inb=0;if(jnb===undefined)jnb=0;
var lq=Math.random();lq=(jnb-inb)*lq+inb;return lq;};ij.knb=function(x){if(x===undefined)x=0;x|=(x>>1)&0x7FFFFFFF;x|=(x>>2)&0x3FFFFFFF;x|=(x>>4)&0x0FFFFFFF;x|=(x>>8)&0x00FFFFFF;x|=(x>>16)&0x0000FFFF;return x+1;};ij.lnb=function(x){if(x===undefined)x=0;var em=x>0&&(x&(x-1))==0;return em;};ng.tl.push(function(){ng.mh.Math.ij.mnb=new lj(0.0,0.0);ng.mh.Math.ij.nnb=gj.llb(new lj(1.0,0.0),new lj(0.0,1.0));ng.mh.Math.ij.onb=new kj(ij.mnb,ij.nnb);});jj.jj=function(){this.pnb=new lj();this.qnb=new lj;this.c=new lj();
};jj.prototype.bo=function(other){this.pnb.js(other.pnb);this.qnb.js(other.qnb);this.c.js(other.c);this.rnb=other.rnb;this.bu=other.bu;this.ldb=other.ldb;};jj.prototype.gu=function(){var qz=new jj();qz.pnb.js(this.pnb);qz.qnb.js(this.qnb);qz.c.js(this.c);qz.rnb=this.rnb;qz.bu=this.bu;qz.ldb=this.ldb;return qz;};jj.prototype.rdb=function(uz,ndb){if(ndb===undefined)ndb=0;uz.position.x=(1.0-ndb)*this.qnb.x+ndb*this.c.x;uz.position.y=(1.0-ndb)*this.qnb.y+ndb*this.c.y;var khb=(1.0-ndb)*this.rnb+ndb*this.bu;
uz.vo.bo(khb);var uo=uz.vo;uz.position.x-=(uo.zo.x*this.pnb.x+uo.ap.x*this.pnb.y);uz.position.y-=(uo.zo.y*this.pnb.x+uo.ap.y*this.pnb.y);};jj.prototype.snb=function(rbb){if(rbb===undefined)rbb=0;if(this.ldb<rbb&&1.0-this.ldb>Number.MIN_VALUE){var ndb=(rbb-this.ldb)/(1.0-this.ldb);this.qnb.x=(1.0-ndb)*this.qnb.x+ndb*this.c.x;this.qnb.y=(1.0-ndb)*this.qnb.y+ndb*this.c.y;this.rnb=(1.0-ndb)*this.rnb+ndb*this.bu;this.ldb=rbb;}};kj.kj=function(){this.position=new lj;this.vo=new gj();};kj.prototype.kj=function(tnb,
lq){if(tnb===undefined)tnb=null;if(lq===undefined)lq=null;if(tnb){this.position.js(tnb);this.vo.plb(lq);}};kj.prototype.qab=function(tnb,lq){this.position.js(tnb);this.vo.plb(lq);};kj.prototype.ilb=function(){this.position.ct();this.vo.ilb();};kj.prototype.bo=function(x){this.position.js(x.position);this.vo.plb(x.vo);};kj.prototype.rlb=function(){return Math.atan2(this.vo.zo.y,this.vo.zo.x);};lj.lj=function(){};lj.prototype.lj=function(unb,vnb){if(unb===undefined)unb=0;if(vnb===undefined)vnb=0;this.x=unb;
this.y=vnb;};lj.prototype.ct=function(){this.x=0.0;this.y=0.0;};lj.prototype.bo=function(unb,vnb){if(unb===undefined)unb=0;if(vnb===undefined)vnb=0;this.x=unb;this.y=vnb;};lj.prototype.js=function(hh){this.x=hh.x;this.y=hh.y;};lj.prototype.vv=function(){return new lj((-this.x),(-this.y));};lj.prototype.ibb=function(){this.x=(-this.x);this.y=(-this.y);};lj.wnb=function(unb,vnb){if(unb===undefined)unb=0;if(vnb===undefined)vnb=0;return new lj(unb,vnb);};lj.prototype.gu=function(){return new lj(this.x,this.y);
};lj.prototype.xnb=function(hh){this.x+=hh.x;this.y+=hh.y;};lj.prototype.ynb=function(hh){this.x-=hh.x;this.y-=hh.y;};lj.prototype.fjb=function(bu){if(bu===undefined)bu=0;this.x*=bu;this.y*=bu;};lj.prototype.znb=function(nmb){var cq=this.x;this.x=nmb.zo.x*cq+nmb.ap.x*this.y;this.y=nmb.zo.y*cq+nmb.ap.y*this.y;};lj.prototype.aob=function(nmb){var cq=ij.ocb(this,nmb.zo);this.y=ij.ocb(this,nmb.ap);this.x=cq;};lj.prototype.hbb=function(vm){if(vm===undefined)vm=0;var cq=this.x;this.x=vm*this.y;this.y=(-vm*cq);
};lj.prototype.cy=function(vm){if(vm===undefined)vm=0;var cq=this.x;this.x=(-vm*this.y);this.y=vm*cq;};lj.prototype.bnb=function(jn){this.x=this.x<jn.x?this.x:jn.x;this.y=this.y<jn.y?this.y:jn.y;};lj.prototype.cnb=function(jn){this.x=this.x>jn.x?this.x:jn.x;this.y=this.y>jn.y?this.y:jn.y;};lj.prototype.ceb=function(){if(this.x<0)this.x=(-this.x);if(this.y<0)this.y=(-this.y);};lj.prototype.jw=function(){return Math.sqrt(this.x*this.x+this.y*this.y);};lj.prototype.hv=function(){return(this.x*this.x+this.y*this.y);
};lj.prototype.mr=function(){var length=Math.sqrt(this.x*this.x+this.y*this.y);if(length<Number.MIN_VALUE){return 0.0;}var bob=1.0/length;this.x*=bob;this.y*=bob;return length;};lj.prototype.wl=function(){return ij.wl(this.x)&&ij.wl(this.y);};mj.mj=function(){};mj.prototype.mj=function(x,y,dmb){if(x===undefined)x=0;if(y===undefined)y=0;if(dmb===undefined)dmb=0;this.x=x;this.y=y;this.dmb=dmb;};mj.prototype.ct=function(){this.x=this.y=this.dmb=0.0;};mj.prototype.bo=function(x,y,dmb){if(x===undefined)x=0;
if(y===undefined)y=0;if(dmb===undefined)dmb=0;this.x=x;this.y=y;this.dmb=dmb;};mj.prototype.js=function(hh){this.x=hh.x;this.y=hh.y;this.dmb=hh.dmb;};mj.prototype.vv=function(){return new mj((-this.x),(-this.y),(-this.dmb));};mj.prototype.ibb=function(){this.x=(-this.x);this.y=(-this.y);this.dmb=(-this.dmb);};mj.prototype.gu=function(){return new mj(this.x,this.y,this.dmb);};mj.prototype.xnb=function(hh){this.x+=hh.x;this.y+=hh.y;this.dmb+=hh.dmb;};mj.prototype.ynb=function(hh){this.x-=hh.x;this.y-=hh.y;
this.dmb-=hh.dmb;};mj.prototype.fjb=function(bu){if(bu===undefined)bu=0;this.x*=bu;this.y*=bu;this.dmb*=bu;};})();(function(){var uk=ng.nh.qh.uk,gj=ng.mh.Math.gj,hj=ng.mh.Math.hj,ij=ng.mh.Math.ij,jj=ng.mh.Math.jj,kj=ng.mh.Math.kj,lj=ng.mh.Math.lj,mj=ng.mh.Math.mj,ej=ng.mh.ej,dj=ng.mh.dj,fj=ng.mh.fj,th=ng.kh.th,uh=ng.kh.uh,vh=ng.kh.vh,wh=ng.kh.wh,xh=ng.kh.xh,yh=ng.kh.yh,zh=ng.kh.zh,ai=ng.kh.ai,bi=ng.kh.bi,ci=ng.kh.ci,di=ng.kh.di,ei=ng.kh.ei,fi=ng.kh.fi,gi=ng.kh.gi,hi=ng.kh.hi,ii=ng.kh.ii,ji=ng.kh.ji,
ki=ng.kh.ki,li=ng.kh.li,mi=ng.kh.mi,ni=ng.kh.ni,oi=ng.kh.oi,qi=ng.kh.qi,ri=ng.kh.ri,si=ng.kh.si,ti=ng.kh.ti,ui=ng.kh.ui,vi=ng.kh.vi,wi=ng.kh.wi,sh=ng.kh.sh,xi=ng.kh.lh.xi,yi=ng.kh.lh.yi,zi=ng.kh.lh.zi,aj=ng.kh.lh.aj,bj=ng.kh.lh.bj,cj=ng.kh.lh.cj,nj=ng.nh.nj,oj=ng.nh.oj,pj=ng.nh.pj,qj=ng.nh.qj,rj=ng.nh.rj,sj=ng.nh.sj,tj=ng.nh.tj,uj=ng.nh.uj,vj=ng.nh.vj,wj=ng.nh.wj,xj=ng.nh.xj,yj=ng.nh.yj,zj=ng.nh.zj,ak=ng.nh.ak,bk=ng.nh.ph.bk,ck=ng.nh.ph.ck,dk=ng.nh.ph.dk,ek=ng.nh.ph.ek,fk=ng.nh.ph.fk,gk=ng.nh.ph.gk,
hk=ng.nh.ph.hk,ik=ng.nh.ph.ik,jk=ng.nh.ph.jk,kk=ng.nh.ph.kk,lk=ng.nh.ph.lk,mk=ng.nh.ph.mk,nk=ng.nh.ph.nk,ok=ng.nh.ph.ok,pk=ng.nh.ph.pk,tk=ng.nh.qh.tk,xk=ng.nh.rh.xk,yk=ng.nh.rh.yk,zk=ng.nh.rh.zk,al=ng.nh.rh.al,bl=ng.nh.rh.bl,cl=ng.nh.rh.cl,dl=ng.nh.rh.dl,el=ng.nh.rh.el,fl=ng.nh.rh.fl,gl=ng.nh.rh.gl,hl=ng.nh.rh.hl,il=ng.nh.rh.il,jl=ng.nh.rh.jl,kl=ng.nh.rh.kl,ll=ng.nh.rh.ll,ml=ng.nh.rh.ml,nl=ng.nh.rh.nl,ol=ng.nh.rh.ol,pl=ng.nh.rh.pl,ql=ng.nh.rh.ql,rl=ng.nh.rh.rl,sl=ng.nh.rh.sl;nj.nj=function(){this.cob=new kj();
this.dob=new jj();this.eob=new lj();this.fob=new lj();};nj.prototype.gob=function(hob,iob,job){if(job===undefined)job=0;var kob=Math.atan2(iob.ggb().y,iob.ggb().x);var lob=Math.tan((kob-job)*0.5);var ugb=ij.tmb(lob,iob.ggb());ugb=ij.aw(ugb,iob.fgb());ugb=ij.tmb(fj.sgb,ugb);ugb=ij.rmb(ugb,iob.bgb());var vgb=ij.rmb(hob.ggb(),iob.ggb());vgb.mr();var wgb=ij.ocb(hob.ggb(),iob.fgb())>0.0;hob.xgb(iob,ugb,vgb,wgb);iob.tgb(hob,ugb,vgb,wgb);return kob;};nj.prototype.mob=function(nob){if(this.oob.pob()==true){return null;
}var qob=new wj();qob.rob(this,this.cob,nob);if(this.sob&nj.tob){var uob=this.oob.vob.wob;qob.cx(uob,this.cob);}qob.xob=this.yob;this.yob=qob;++this.zob;qob.apb=this;if(qob.bpb>0.0){this.cpb();}this.oob.sob|=ak.dpb;return qob;};nj.prototype.epb=function(qw,cfb){if(cfb===undefined)cfb=0.0;var nob=new xj();nob.qw=qw;nob.cfb=cfb;return this.mob(nob);};nj.prototype.fpb=function(qob){if(this.oob.pob()==true){return;}var ex=this.yob;var gpb=null;var hpb=false;while(ex!=null){if(ex==qob){if(gpb)gpb.xob=qob.xob;else this.yob=qob.xob;
hpb=true;break;}gpb=ex;ex=ex.xob;}var qp=this.ipb;while(qp){var c=qp.jpb;qp=qp.kpb;var lpb=c.mpb();var npb=c.opb();if(qob==lpb||qob==npb){this.oob.vob.ppb(c);}}if(this.sob&nj.tob){var uob=this.oob.vob.wob;qob.kx(uob);}else {}qob.ppb();qob.apb=null;qob.xob=null;--this.zob;this.cpb();};nj.prototype.qpb=function(position,khb){if(khb===undefined)khb=0;var pbb;if(this.oob.pob()==true){return;}this.cob.vo.bo(khb);this.cob.position.js(position);var uo=this.cob.vo;var eo=this.dob.pnb;this.dob.c.x=(uo.zo.x*eo.x+uo.ap.x*eo.y);
this.dob.c.y=(uo.zo.y*eo.x+uo.ap.y*eo.y);this.dob.c.x+=this.cob.position.x;this.dob.c.y+=this.cob.position.y;this.dob.qnb.js(this.dob.c);this.dob.rnb=this.dob.bu=khb;var uob=this.oob.vob.wob;for(pbb=this.yob;pbb;pbb=pbb.xob){pbb.rpb(uob,this.cob,this.cob);}this.oob.vob.spb();};nj.prototype.tpb=function(uz){this.qpb(uz.position,uz.rlb());};nj.prototype.rdb=function(){return this.cob;};nj.prototype.upb=function(){return this.cob.position;};nj.prototype.vpb=function(position){this.qpb(position,this.rlb());
};nj.prototype.rlb=function(){return this.dob.bu;};nj.prototype.wpb=function(khb){if(khb===undefined)khb=0;this.qpb(this.upb(),khb);};nj.prototype.xpb=function(){return this.dob.c;};nj.prototype.ypb=function(){return this.dob.pnb;};nj.prototype.zpb=function(hh){if(this.er==nj.aqb){return;}this.eob.js(hh);};nj.prototype.bqb=function(){return this.eob;};nj.prototype.cqb=function(dqb){if(dqb===undefined)dqb=0;if(this.er==nj.aqb){return;}this.eqb=dqb;};nj.prototype.fqb=function(){return this.eqb;};nj.prototype.gqb=function(){
var hqb=new oj();hqb.type=this.rw();hqb.iqb=(this.sob&nj.jqb)==nj.jqb;hqb.khb=this.rlb();hqb.kqb=this.lqb;hqb.mqb=this.eqb;hqb.nqb=(this.sob&nj.oqb)==nj.oqb;hqb.pqb=(this.sob&nj.qqb)==nj.qqb;hqb.rqb=(this.sob&nj.sqb)==nj.sqb;hqb.tqb=this.uqb;hqb.vqb.js(this.bqb());hqb.position=this.upb();hqb.dx=this.wx();return hqb;};nj.prototype.wqb=function(xqb,yqb){if(this.er!=nj.zqb){return;}if(this.arb()==false){this.brb(true);}this.fob.x+=xqb.x;this.fob.y+=xqb.y;this.crb+=((yqb.x-this.dob.c.x)*xqb.y-(yqb.y-this.dob.c.y)*xqb.x);
};nj.prototype.drb=function(erb){if(erb===undefined)erb=0;if(this.er!=nj.zqb){return;}if(this.arb()==false){this.brb(true);}this.crb+=erb;};nj.prototype.frb=function(grb,yqb){if(this.er!=nj.zqb){return;}if(this.arb()==false){this.brb(true);}this.eob.x+=this.hrb*grb.x;this.eob.y+=this.hrb*grb.y;this.eqb+=this.irb*((yqb.x-this.dob.c.x)*grb.y-(yqb.y-this.dob.c.y)*grb.x);};nj.prototype.jrb=function(yx){var vqb=this.bqb().gu();var mqb=this.fqb();var jy=this.xpb();var krb=this;var lrb=this.oob.mrb(this.gqb());
var nrb;for(var pbb=krb.yob;pbb;){if(yx(pbb)){var kpb=pbb.xob;if(nrb){nrb.xob=kpb;}else {krb.yob=kpb;}krb.zob--;pbb.xob=lrb.yob;lrb.yob=pbb;lrb.zob++;pbb.apb=lrb;pbb=kpb;}else {nrb=pbb;pbb=pbb.xob;}}krb.cpb();lrb.cpb();var orb=krb.xpb();var prb=lrb.xpb();var qrb=ij.rmb(vqb,ij.cy(mqb,ij.aw(orb,jy)));var rrb=ij.rmb(vqb,ij.cy(mqb,ij.aw(prb,jy)));krb.zpb(qrb);lrb.zpb(rrb);krb.cqb(mqb);lrb.cqb(mqb);krb.srb();lrb.srb();return lrb;};nj.prototype.trb=function(other){var pbb;for(pbb=other.yob;pbb;){var kpb=pbb.xob;other.zob--;
pbb.xob=this.yob;this.yob=pbb;this.zob++;pbb.apb=lrb;pbb=kpb;}krb.zob=0;var krb=this;var lrb=other;var orb=krb.xpb();var prb=lrb.xpb();var qrb=krb.bqb().gu();var rrb=lrb.bqb().gu();var urb=krb.fqb();var vrb=lrb.fqb();krb.cpb();this.srb();};nj.prototype.wrb=function(){return this.xrb;};nj.prototype.yrb=function(){return this.zrb;};nj.prototype.asb=function(data){data.dfb=this.xrb;data.ffb=this.zrb;data.jy.js(this.dob.pnb);};nj.prototype.bsb=function(bfb){fj.pv(this.oob.pob()==false);if(this.oob.pob()==true){
return;}if(this.er!=nj.zqb){return;}this.hrb=0.0;this.zrb=0.0;this.irb=0.0;this.xrb=bfb.dfb;if(this.xrb<=0.0){this.xrb=1.0;}this.hrb=1.0/this.xrb;if(bfb.ffb>0.0&&(this.sob&nj.oqb)==0){this.zrb=bfb.ffb-this.xrb*(bfb.jy.x*bfb.jy.x+bfb.jy.y*bfb.jy.y);this.irb=1.0/this.zrb;}var csb=this.dob.c.gu();this.dob.pnb.js(bfb.jy);this.dob.qnb.js(ij.xv(this.cob,this.dob.pnb));this.dob.c.js(this.dob.qnb);this.eob.x+=this.eqb*(-(this.dob.c.y-csb.y));this.eob.y+=this.eqb*(+(this.dob.c.x-csb.x));};nj.prototype.cpb=function(){
this.xrb=0.0;this.hrb=0.0;this.zrb=0.0;this.irb=0.0;this.dob.pnb.ct();if(this.er==nj.aqb||this.er==nj.dsb){return;}var jy=lj.wnb(0,0);for(var pbb=this.yob;pbb;pbb=pbb.xob){if(pbb.bpb==0.0){continue;}var bfb=pbb.asb();this.xrb+=bfb.dfb;jy.x+=bfb.jy.x*bfb.dfb;jy.y+=bfb.jy.y*bfb.dfb;this.zrb+=bfb.ffb;}if(this.xrb>0.0){this.hrb=1.0/this.xrb;jy.x*=this.hrb;jy.y*=this.hrb;}else {this.xrb=1.0;this.hrb=1.0;}if(this.zrb>0.0&&(this.sob&nj.oqb)==0){this.zrb-=this.xrb*(jy.x*jy.x+jy.y*jy.y);this.zrb*=this.esb;fj.pv(this.zrb>0);
this.irb=1.0/this.zrb;}else {this.zrb=0.0;this.irb=0.0;}var csb=this.dob.c.gu();this.dob.pnb.js(jy);this.dob.qnb.js(ij.xv(this.cob,this.dob.pnb));this.dob.c.js(this.dob.qnb);this.eob.x+=this.eqb*(-(this.dob.c.y-csb.y));this.eob.y+=this.eqb*(+(this.dob.c.x-csb.x));};nj.prototype.fsb=function(gsb){var nmb=this.cob.vo;var omb=new lj(nmb.zo.x*gsb.x+nmb.ap.x*gsb.y,nmb.zo.y*gsb.x+nmb.ap.y*gsb.y);omb.x+=this.cob.position.x;omb.y+=this.cob.position.y;return omb;};nj.prototype.hsb=function(isb){return ij.lbb(this.cob.vo,
isb);};nj.prototype.jsb=function(ksb){return ij.qmb(this.cob,ksb);};nj.prototype.lsb=function(msb){return ij.uv(this.cob.vo,msb);};nj.prototype.nsb=function(ksb){return new lj(this.eob.x-this.eqb*(ksb.y-this.dob.c.y),this.eob.y+this.eqb*(ksb.x-this.dob.c.x));};nj.prototype.osb=function(gsb){var nmb=this.cob.vo;var ksb=new lj(nmb.zo.x*gsb.x+nmb.ap.x*gsb.y,nmb.zo.y*gsb.x+nmb.ap.y*gsb.y);ksb.x+=this.cob.position.x;ksb.y+=this.cob.position.y;return new lj(this.eob.x-this.eqb*(ksb.y-this.dob.c.y),this.eob.y+this.eqb*(ksb.x-this.dob.c.x));
};nj.prototype.psb=function(){return this.uqb;};nj.prototype.qsb=function(tqb){if(tqb===undefined)tqb=0;this.uqb=tqb;};nj.prototype.rsb=function(){return this.lqb;};nj.prototype.ssb=function(kqb){if(kqb===undefined)kqb=0;this.lqb=kqb;};nj.prototype.tsb=function(type){if(type===undefined)type=0;if(this.er==type){return;}this.er=type;this.cpb();if(this.er==nj.aqb){this.eob.ct();this.eqb=0.0;}this.brb(true);this.fob.ct();this.crb=0.0;for(var usb=this.ipb;usb;usb=usb.kpb){usb.jpb.vsb();}};nj.prototype.rw=function(){
return this.er;};nj.prototype.wsb=function(xsb){if(xsb){this.sob|=nj.qqb;}else {this.sob&=~nj.qqb;}};nj.prototype.ysb=function(){return(this.sob&nj.qqb)==nj.qqb;};nj.prototype.zsb=function(xsb){if(xsb){this.sob|=nj.jqb;}else {this.sob&=~nj.jqb;this.brb(true);}};nj.prototype.brb=function(xsb){if(xsb){this.sob|=nj.sqb;this.atb=0.0;}else {this.sob&=~nj.sqb;this.atb=0.0;this.eob.ct();this.eqb=0.0;this.fob.ct();this.crb=0.0;}};nj.prototype.arb=function(){return(this.sob&nj.sqb)==nj.sqb;};nj.prototype.btb=function(fixed){
if(fixed){this.sob|=nj.oqb;}else {this.sob&=~nj.oqb;}this.cpb();};nj.prototype.ctb=function(){return(this.sob&nj.oqb)==nj.oqb;};nj.prototype.dtb=function(xsb){if(xsb==this.etb()){return;}var uob;var pbb;if(xsb){this.sob|=nj.tob;uob=this.oob.vob.wob;for(pbb=this.yob;pbb;pbb=pbb.xob){pbb.cx(uob,this.cob);}}else {this.sob&=~nj.tob;uob=this.oob.vob.wob;for(pbb=this.yob;pbb;pbb=pbb.xob){pbb.kx(uob);}var usb=this.ipb;while(usb){var ftb=usb;usb=usb.kpb;this.oob.vob.ppb(ftb.jpb);}this.ipb=null;}};nj.prototype.etb=function(){
return(this.sob&nj.tob)==nj.tob;};nj.prototype.gtb=function(){return(this.sob&nj.jqb)==nj.jqb;};nj.prototype.htb=function(){return this.yob;};nj.prototype.itb=function(){return this.jtb;};nj.prototype.ktb=function(){return this.ltb;};nj.prototype.mtb=function(){return this.ipb;};nj.prototype.ntb=function(){return this.xob;};nj.prototype.wx=function(){return this.otb;};nj.prototype.ptb=function(data){this.otb=data;};nj.prototype.qtb=function(){return this.oob;};nj.prototype.nj=function(hqb,rtb){this.sob=0;
if(hqb.pqb){this.sob|=nj.qqb;}if(hqb.nqb){this.sob|=nj.oqb;}if(hqb.iqb){this.sob|=nj.jqb;}if(hqb.rqb){this.sob|=nj.sqb;}if(hqb.stb){this.sob|=nj.tob;}this.oob=rtb;this.cob.position.js(hqb.position);this.cob.vo.bo(hqb.khb);this.dob.pnb.ct();this.dob.ldb=1.0;this.dob.rnb=this.dob.bu=hqb.khb;var uo=this.cob.vo;var eo=this.dob.pnb;this.dob.c.x=(uo.zo.x*eo.x+uo.ap.x*eo.y);this.dob.c.y=(uo.zo.y*eo.x+uo.ap.y*eo.y);this.dob.c.x+=this.cob.position.x;this.dob.c.y+=this.cob.position.y;this.dob.qnb.js(this.dob.c);
this.jtb=null;this.ltb=null;this.ipb=null;this.ttb=0;this.utb=null;this.xob=null;this.eob.js(hqb.vqb);this.eqb=hqb.mqb;this.uqb=hqb.tqb;this.lqb=hqb.kqb;this.fob.bo(0.0,0.0);this.crb=0.0;this.atb=0.0;this.er=hqb.type;if(this.er==nj.zqb){this.xrb=1.0;this.hrb=1.0;}else {this.xrb=0.0;this.hrb=0.0;}this.zrb=0.0;this.irb=0.0;this.esb=hqb.vtb;this.otb=hqb.dx;this.yob=null;this.zob=0;};nj.prototype.srb=function(){var io=nj.wtb;io.vo.bo(this.dob.rnb);var uo=io.vo;var eo=this.dob.pnb;io.position.x=this.dob.qnb.x-(uo.zo.x*eo.x+uo.ap.x*eo.y);
io.position.y=this.dob.qnb.y-(uo.zo.y*eo.x+uo.ap.y*eo.y);var pbb;var uob=this.oob.vob.wob;for(pbb=this.yob;pbb;pbb=pbb.xob){pbb.rpb(uob,io,this.cob);}};nj.prototype.xtb=function(){this.cob.vo.bo(this.dob.bu);var uo=this.cob.vo;var eo=this.dob.pnb;this.cob.position.x=this.dob.c.x-(uo.zo.x*eo.x+uo.ap.x*eo.y);this.cob.position.y=this.dob.c.y-(uo.zo.y*eo.x+uo.ap.y*eo.y);};nj.prototype.ytb=function(other){if(this.er!=nj.zqb&&other.er!=nj.zqb){return false;}for(var ztb=this.jtb;ztb;ztb=ztb.kpb){if(ztb.other==other)if(ztb.aub.bub==false){
return false;}}return true;};nj.prototype.snb=function(rbb){if(rbb===undefined)rbb=0;this.dob.snb(rbb);this.dob.c.js(this.dob.qnb);this.dob.bu=this.dob.rnb;this.xtb();};ng.tl.push(function(){ng.nh.nj.wtb=new kj();ng.nh.nj.cub=0x0001;ng.nh.nj.sqb=0x0002;ng.nh.nj.jqb=0x0004;ng.nh.nj.qqb=0x0008;ng.nh.nj.oqb=0x0010;ng.nh.nj.tob=0x0020;ng.nh.nj.aqb=0;ng.nh.nj.dsb=1;ng.nh.nj.zqb=2;});oj.oj=function(){this.position=new lj();this.vqb=new lj();};oj.prototype.oj=function(){this.dx=null;this.position.bo(0.0,0.0);
this.khb=0.0;this.vqb.bo(0,0);this.mqb=0.0;this.tqb=0.0;this.kqb=0.0;this.iqb=true;this.rqb=true;this.nqb=false;this.pqb=false;this.type=nj.aqb;this.stb=true;this.vtb=1.0;};pj.pj=function(){};pj.prototype.ytb=function(lpb,npb){var dub=lpb.eub();var fub=npb.eub();if(dub.gub==fub.gub&&dub.gub!=0){return dub.gub>0;}var hub=(dub.iub&fub.jub)!=0&&(dub.jub&fub.iub)!=0;return hub;};pj.prototype.kub=function(dx,qob){if(!dx)return true;return this.ytb((dx instanceof wj?dx:null),qob);};ng.tl.push(function(){ng.nh.pj.lub=new pj();
});qj.qj=function(){this.mub=new jh(fj.ms);this.nub=new jh(fj.ms);};rj.rj=function(){};rj.prototype.oub=function(jpb){};rj.prototype.pub=function(jpb){};rj.prototype.qub=function(jpb,rub){};rj.prototype.tub=function(jpb,grb){};ng.tl.push(function(){ng.nh.rj.uub=new rj();});sj.sj=function(){};sj.prototype.sj=function(){this.oob=null;this.vub=0;this.wub=pj.lub;this.xub=rj.uub;this.yub=new gk(this.zub);this.wob=new ei();};sj.prototype.avb=function(bvb,cvb){var lpb=(bvb instanceof wj?bvb:null);var npb=(cvb instanceof wj?cvb:null);
var dvb=lpb.evb();var fvb=npb.evb();if(dvb==fvb)return;var qp=fvb.mtb();while(qp){if(qp.other==dvb){var gvb=qp.jpb.mpb();var hvb=qp.jpb.opb();if(gvb==lpb&&hvb==npb)return;if(gvb==npb&&hvb==lpb)return;}qp=qp.kpb;}if(fvb.ytb(dvb)==false){return;}if(this.wub.ytb(lpb,npb)==false){return;}var c=this.yub.rob(lpb,npb);lpb=c.mpb();npb=c.opb();dvb=lpb.apb;fvb=npb.apb;c.utb=null;c.xob=this.oob.ipb;if(this.oob.ipb!=null){this.oob.ipb.utb=c;}this.oob.ipb=c;c.ivb.jpb=c;c.ivb.other=fvb;c.ivb.nrb=null;c.ivb.kpb=dvb.ipb;
if(dvb.ipb!=null){dvb.ipb.nrb=c.ivb;}dvb.ipb=c.ivb;c.jvb.jpb=c;c.jvb.other=dvb;c.jvb.nrb=null;c.jvb.kpb=fvb.ipb;if(fvb.ipb!=null){fvb.ipb.nrb=c.jvb;}fvb.ipb=c.jvb;++this.oob.vub;return;};sj.prototype.spb=function(){this.wob.bz(ng.zg(this,this.avb));};sj.prototype.ppb=function(c){var lpb=c.mpb();var npb=c.opb();var dvb=lpb.evb();var fvb=npb.evb();if(c.kvb()){this.xub.pub(c);}if(c.utb){c.utb.xob=c.xob;}if(c.xob){c.xob.utb=c.utb;}if(c==this.oob.ipb){this.oob.ipb=c.xob;}if(c.ivb.nrb){c.ivb.nrb.kpb=c.ivb.kpb;
}if(c.ivb.kpb){c.ivb.kpb.nrb=c.ivb.nrb;}if(c.ivb==dvb.ipb){dvb.ipb=c.ivb.kpb;}if(c.jvb.nrb){c.jvb.nrb.kpb=c.jvb.kpb;}if(c.jvb.kpb){c.jvb.kpb.nrb=c.jvb.nrb;}if(c.jvb==fvb.ipb){fvb.ipb=c.jvb.kpb;}this.yub.ppb(c);--this.vub;};sj.prototype.lvb=function(){var c=this.oob.ipb;while(c){var lpb=c.mpb();var npb=c.opb();var dvb=lpb.evb();var fvb=npb.evb();if(dvb.arb()==false&&fvb.arb()==false){c=c.ntb();continue;}if(c.sob&ck.mvb){if(fvb.ytb(dvb)==false){var nvb=c;c=nvb.ntb();this.ppb(nvb);continue;}if(this.wub.ytb(lpb,
npb)==false){nvb=c;c=nvb.ntb();this.ppb(nvb);continue;}c.sob&=~ck.mvb;}var ru=lpb.ovb;var su=npb.ovb;var pvb=this.wob.xm(ru,su);if(pvb==false){nvb=c;c=nvb.ntb();this.ppb(nvb);continue;}c.qvb(this.xub);c=c.ntb();}};ng.tl.push(function(){ng.nh.sj.rvb=new yh();});tj.tj=function(){};tj.prototype.tj=function(){};tj.prototype.svb=function(tvb){if(tvb===undefined)tvb=0;};tj.prototype.uvb=function(){};tj.prototype.vvb=function(tvb){if(tvb===undefined)tvb=0;};tj.prototype.wvb=function(tvb){if(tvb===undefined)tvb=0;
};tj.prototype.xvb=function(yvb){};tj.prototype.zvb=function(){};tj.prototype.awb=function(bwb){if(bwb===undefined)bwb=0;};tj.prototype.cwb=function(){};tj.prototype.dwb=function(ewb){if(ewb===undefined)ewb=0;};tj.prototype.fwb=function(){};tj.prototype.gwb=function(ndb){if(ndb===undefined)ndb=0;};tj.prototype.hwb=function(){};tj.prototype.iwb=function(ndb){if(ndb===undefined)ndb=0;};tj.prototype.jwb=function(){};tj.prototype.kwb=function(lwb){if(lwb===undefined)lwb=0;};tj.prototype.mwb=function(){
};tj.prototype.nwb=function(rt,qt,owb){if(qt===undefined)qt=0;};tj.prototype.pwb=function(rt,qt,owb){if(qt===undefined)qt=0;};tj.prototype.qwb=function(jy,at,owb){if(at===undefined)at=0;};tj.prototype.rwb=function(jy,at,swb,owb){if(at===undefined)at=0;};tj.prototype.twb=function(lm,nm,owb){};tj.prototype.uwb=function(uz){};ng.tl.push(function(){ng.nh.tj.vwb=0x0001;ng.nh.tj.wwb=0x0002;ng.nh.tj.xwb=0x0004;ng.nh.tj.ywb=0x0008;ng.nh.tj.zwb=0x0010;ng.nh.tj.axb=0x0020;});uj.uj=function(){};uj.prototype.bxb=function(aub){
};uj.prototype.cxb=function(qob){};vj.vj=function(){this.jub=0x0001;this.iub=0xFFFF;this.gub=0;};vj.prototype.gu=function(){var qz=new vj();qz.jub=this.jub;qz.iub=this.iub;qz.gub=this.gub;return qz;};wj.wj=function(){this.dxb=new vj();};wj.prototype.rw=function(){return this.exb.rw();};wj.prototype.fxb=function(){return this.exb;};wj.prototype.gxb=function(hxb){if(this.ixb==hxb)return;this.ixb=hxb;if(this.apb==null)return;var qp=this.apb.mtb();while(qp){var jpb=qp.jpb;var lpb=jpb.mpb();var npb=jpb.opb();if(lpb==this||npb==this)jpb.gxb(lpb.jxb()||npb.jxb());
qp=qp.kpb;}};wj.prototype.jxb=function(){return this.ixb;};wj.prototype.kxb=function(lxb){this.dxb=lxb.gu();if(this.apb)return;var qp=this.apb.mtb();while(qp){var jpb=qp.jpb;var lpb=jpb.mpb();var npb=jpb.opb();if(lpb==this||npb==this)jpb.vsb();qp=qp.kpb;}};wj.prototype.eub=function(){return this.dxb.gu();};wj.prototype.evb=function(){return this.apb;};wj.prototype.ntb=function(){return this.xob;};wj.prototype.wx=function(){return this.otb;};wj.prototype.ptb=function(data){this.otb=data;};wj.prototype.ueb=function(qg){
return this.exb.ueb(this.apb.rdb(),qg);};wj.prototype.fm=function(gm,hm){return this.exb.fm(gm,hm,this.apb.rdb());};wj.prototype.asb=function(bfb){if(bfb===undefined)bfb=null;if(bfb==null){bfb=new aj();}this.exb.afb(bfb,this.bpb);return bfb;};wj.prototype.mxb=function(cfb){if(cfb===undefined)cfb=0;this.bpb=cfb;};wj.prototype.nxb=function(){return this.bpb;};wj.prototype.oxb=function(){return this.pxb;};wj.prototype.qxb=function(friction){if(friction===undefined)friction=0;this.pxb=friction;};wj.prototype.rxb=function(){
return this.sxb;};wj.prototype.txb=function(uxb){if(uxb===undefined)uxb=0;this.sxb=uxb;};wj.prototype.vxb=function(){return this.wxb;};wj.prototype.wj=function(){this.wxb=new th();this.otb=null;this.apb=null;this.xob=null;this.exb=null;this.bpb=0.0;this.pxb=0.0;this.sxb=0.0;};wj.prototype.rob=function(body,uz,nob){this.otb=nob.dx;this.pxb=nob.friction;this.sxb=nob.uxb;this.apb=body;this.xob=null;this.dxb=nob.lxb.gu();this.ixb=nob.xxb;this.exb=nob.qw.gu();this.bpb=nob.cfb;};wj.prototype.ppb=function(){
this.exb=null;};wj.prototype.cx=function(uob,uz){this.exb.zeb(this.wxb,uz);this.ovb=uob.cx(this.wxb,this);};wj.prototype.kx=function(uob){if(this.ovb==null){return;}uob.kx(this.ovb);this.ovb=null;};wj.prototype.rpb=function(uob,wjb,yjb){if(!this.ovb)return;var dn=new th();var en=new th();this.exb.zeb(dn,wjb);this.exb.zeb(en,yjb);this.wxb.cn(dn,en);var ox=ij.aw(yjb.position,wjb.position);uob.nx(this.ovb,this.wxb,ox);};xj.xj=function(){this.lxb=new vj();};xj.prototype.xj=function(){this.qw=null;this.dx=null;
this.friction=0.2;this.uxb=0.0;this.cfb=0.0;this.lxb.jub=0x0001;this.lxb.iub=0xFFFF;this.lxb.gub=0;this.xxb=false;};yj.yj=function(){};yj.prototype.yj=function(){this.yxb=new ih();this.zxb=new ih();this.ayb=new ih();};yj.prototype.qab=function(byb,cyb,dyb,eyb,fyb,gyb){if(byb===undefined)byb=0;if(cyb===undefined)cyb=0;if(dyb===undefined)dyb=0;var i=0;this.hyb=byb;this.iyb=cyb;this.jyb=dyb;this.kyb=0;this.vub=0;this.lyb=0;this.zub=eyb;this.myb=fyb;this.nyb=gyb;for(i=this.yxb.length;i<byb;i++)this.yxb[i]=null;
for(i=this.zxb.length;i<cyb;i++)this.zxb[i]=null;for(i=this.ayb.length;i<dyb;i++)this.ayb[i]=null;};yj.prototype.oyb=function(){this.kyb=0;this.vub=0;this.lyb=0;};yj.prototype.vlb=function(pyb,gravity,iqb){var i=0;var sjb=0;var jn;var aub;for(i=0;i<this.kyb;++i){jn=this.yxb[i];if(jn.rw()!=nj.zqb)continue;jn.eob.x+=pyb.qyb*(gravity.x+jn.hrb*jn.fob.x);jn.eob.y+=pyb.qyb*(gravity.y+jn.hrb*jn.fob.y);jn.eqb+=pyb.qyb*jn.irb*jn.crb;jn.eob.fjb(ij.qbb(1.0-pyb.qyb*jn.uqb,0.0,1.0));jn.eqb*=ij.qbb(1.0-pyb.qyb*jn.lqb,
0.0,1.0);}this.nyb.qab(pyb,this.zxb,this.vub,this.zub);var gyb=this.nyb;gyb.ryb(pyb);for(i=0;i<this.lyb;++i){aub=this.ayb[i];aub.ryb(pyb);}for(i=0;i<pyb.syb;++i){for(sjb=0;sjb<this.lyb;++sjb){aub=this.ayb[sjb];aub.tyb(pyb);}gyb.tyb();}for(i=0;i<this.lyb;++i){aub=this.ayb[i];aub.uyb();}gyb.uyb();for(i=0;i<this.kyb;++i){jn=this.yxb[i];if(jn.rw()==nj.aqb)continue;var vyb=pyb.qyb*jn.eob.x;var wyb=pyb.qyb*jn.eob.y;if((vyb*vyb+wyb*wyb)>fj.blb){jn.eob.mr();jn.eob.x*=fj.alb*pyb.xyb;jn.eob.y*=fj.alb*pyb.xyb;
}var yyb=pyb.qyb*jn.eqb;if(yyb*yyb>fj.dlb){if(jn.eqb<0.0){jn.eqb=(-fj.clb*pyb.xyb);}else {jn.eqb=fj.clb*pyb.xyb;}}jn.dob.qnb.js(jn.dob.c);jn.dob.rnb=jn.dob.bu;jn.dob.c.x+=pyb.qyb*jn.eob.x;jn.dob.c.y+=pyb.qyb*jn.eob.y;jn.dob.bu+=pyb.qyb*jn.eqb;jn.xtb();}for(i=0;i<pyb.zyb;++i){var azb=gyb.bzb(fj.elb);var czb=true;for(sjb=0;sjb<this.lyb;++sjb){aub=this.ayb[sjb];var dzb=aub.bzb(fj.elb);czb=czb&&dzb;}if(azb&&czb){break;}}this.ezb(gyb.fzb);if(iqb){var gzb=Number.MAX_VALUE;var hzb=fj.glb*fj.glb;var izb=fj.hlb*fj.hlb;
for(i=0;i<this.kyb;++i){jn=this.yxb[i];if(jn.rw()==nj.aqb){continue;}if((jn.sob&nj.jqb)==0){jn.atb=0.0;gzb=0.0;}if((jn.sob&nj.jqb)==0||jn.eqb*jn.eqb>izb||ij.ocb(jn.eob,jn.eob)>hzb){jn.atb=0.0;gzb=0.0;}else {jn.atb+=pyb.qyb;gzb=ij.anb(gzb,jn.atb);}}if(gzb>=fj.flb){for(i=0;i<this.kyb;++i){jn=this.yxb[i];jn.brb(false);}}}};yj.prototype.jzb=function(kzb){var i=0;var sjb=0;this.nyb.qab(kzb,this.zxb,this.vub,this.zub);var gyb=this.nyb;for(i=0;i<this.lyb;++i){this.ayb[i].ryb(kzb);}for(i=0;i<kzb.syb;++i){gyb.tyb();
for(sjb=0;sjb<this.lyb;++sjb){this.ayb[sjb].tyb(kzb);}}for(i=0;i<this.kyb;++i){var jn=this.yxb[i];if(jn.rw()==nj.aqb)continue;var vyb=kzb.qyb*jn.eob.x;var wyb=kzb.qyb*jn.eob.y;if((vyb*vyb+wyb*wyb)>fj.blb){jn.eob.mr();jn.eob.x*=fj.alb*kzb.xyb;jn.eob.y*=fj.alb*kzb.xyb;}var yyb=kzb.qyb*jn.eqb;if(yyb*yyb>fj.dlb){if(jn.eqb<0.0){jn.eqb=(-fj.clb*kzb.xyb);}else {jn.eqb=fj.clb*kzb.xyb;}}jn.dob.qnb.js(jn.dob.c);jn.dob.rnb=jn.dob.bu;jn.dob.c.x+=kzb.qyb*jn.eob.x;jn.dob.c.y+=kzb.qyb*jn.eob.y;jn.dob.bu+=kzb.qyb*jn.eqb;
jn.xtb();}var lzb=0.75;for(i=0;i<kzb.zyb;++i){var azb=gyb.bzb(lzb);var czb=true;for(sjb=0;sjb<this.lyb;++sjb){var dzb=this.ayb[sjb].bzb(fj.elb);czb=czb&&dzb;}if(azb&&czb){break;}}this.ezb(gyb.fzb);};yj.prototype.ezb=function(mzb){if(this.myb==null){return;}for(var i=0;i<this.vub;++i){var c=this.zxb[i];var nzb=mzb[i];for(var sjb=0;sjb<nzb.ls;++sjb){yj.ozb.mub[sjb]=nzb.points[sjb].pzb;yj.ozb.nub[sjb]=nzb.points[sjb].qzb;}this.myb.tub(c,yj.ozb);}};yj.prototype.rzb=function(body){body.szb=this.kyb;this.yxb[this.kyb++]=body;
};yj.prototype.tzb=function(jpb){this.zxb[this.vub++]=jpb;};yj.prototype.uzb=function(aub){this.ayb[this.lyb++]=aub;};ng.tl.push(function(){ng.nh.yj.ozb=new qj();});zj.zj=function(){};zj.prototype.bo=function(pyb){this.qyb=pyb.qyb;this.xyb=pyb.xyb;this.zyb=pyb.zyb;this.syb=pyb.syb;this.vzb=pyb.vzb;};ak.ak=function(){this.wzb=new ih();this.vob=new sj();this.nyb=new jk();this.xzb=new yj();};ak.prototype.ak=function(gravity,yzb){this.zzb=null;this.aac=null;this.bac=null;this.ipb=null;this.jtb=null;this.ltb=null;
this.kyb=0;this.vub=0;this.lyb=0;this.ttb=0;ak.cac=true;ak.dac=true;this.eac=yzb;this.fac=gravity;this.gac=0.0;this.vob.oob=this;var hqb=new oj();this.hac=this.mrb(hqb);};ak.prototype.iac=function(fyb){this.zzb=fyb;};ak.prototype.jac=function(lxb){this.vob.wub=lxb;};ak.prototype.kac=function(fyb){this.vob.xub=fyb;};ak.prototype.lac=function(mac){this.aac=mac;};ak.prototype.nac=function(uob){var oac=this.vob.wob;this.vob.wob=uob;for(var jn=this.bac;jn;jn=jn.xob){for(var pbb=jn.yob;pbb;pbb=pbb.xob){pbb.ovb=uob.cx(oac.vx(pbb.ovb),
pbb);}}};ak.prototype.kz=function(){this.vob.wob.kz();};ak.prototype.az=function(){return this.vob.wob.az();};ak.prototype.mrb=function(nob){if(this.pob()==true){return null;}var jn=new nj(nob,this);jn.utb=null;jn.xob=this.bac;if(this.bac){this.bac.utb=jn;}this.bac=jn;++this.kyb;return jn;};ak.prototype.pac=function(jn){if(this.pob()==true){return;}var ztb=jn.jtb;while(ztb){var qac=ztb;ztb=ztb.kpb;if(this.zzb){this.zzb.bxb(qac.aub);}this.rac(qac.aub);}var sac=jn.ltb;while(sac){var tac=sac;sac=sac.uac;tac.vac.wac(jn);
}var usb=jn.ipb;while(usb){var ftb=usb;usb=usb.kpb;this.vob.ppb(ftb.jpb);}jn.ipb=null;var pbb=jn.yob;while(pbb){var xac=pbb;pbb=pbb.xob;if(this.zzb){this.zzb.cxb(xac);}xac.kx(this.vob.wob);xac.ppb();}jn.yob=null;jn.zob=0;if(jn.utb){jn.utb.xob=jn.xob;}if(jn.xob){jn.xob.utb=jn.utb;}if(jn==this.bac){this.bac=jn.xob;}--this.kyb;};ak.prototype.yac=function(nob){var sjb=el.rob(nob,null);sjb.utb=null;sjb.xob=this.jtb;if(this.jtb){this.jtb.utb=sjb;}this.jtb=sjb;++this.lyb;sjb.zac.aub=sjb;sjb.zac.other=sjb.abc;
sjb.zac.nrb=null;sjb.zac.kpb=sjb.bbc.jtb;if(sjb.bbc.jtb)sjb.bbc.jtb.nrb=sjb.zac;sjb.bbc.jtb=sjb.zac;sjb.cbc.aub=sjb;sjb.cbc.other=sjb.bbc;sjb.cbc.nrb=null;sjb.cbc.kpb=sjb.abc.jtb;if(sjb.abc.jtb)sjb.abc.jtb.nrb=sjb.cbc;sjb.abc.jtb=sjb.cbc;var dvb=nob.dvb;var fvb=nob.fvb;if(nob.dbc==false){var qp=fvb.mtb();while(qp){if(qp.other==dvb){qp.jpb.vsb();}qp=qp.kpb;}}return sjb;};ak.prototype.rac=function(sjb){var dbc=sjb.bub;if(sjb.utb){sjb.utb.xob=sjb.xob;}if(sjb.xob){sjb.xob.utb=sjb.utb;}if(sjb==this.jtb){this.jtb=sjb.xob;
}var dvb=sjb.bbc;var fvb=sjb.abc;dvb.brb(true);fvb.brb(true);if(sjb.zac.nrb){sjb.zac.nrb.kpb=sjb.zac.kpb;}if(sjb.zac.kpb){sjb.zac.kpb.nrb=sjb.zac.nrb;}if(sjb.zac==dvb.jtb){dvb.jtb=sjb.zac.kpb;}sjb.zac.nrb=null;sjb.zac.kpb=null;if(sjb.cbc.nrb){sjb.cbc.nrb.kpb=sjb.cbc.kpb;}if(sjb.cbc.kpb){sjb.cbc.kpb.nrb=sjb.cbc.nrb;}if(sjb.cbc==fvb.jtb){fvb.jtb=sjb.cbc.kpb;}sjb.cbc.nrb=null;sjb.cbc.kpb=null;el.ppb(sjb,null);--this.lyb;if(dbc==false){var qp=fvb.mtb();while(qp){if(qp.other==dvb){qp.jpb.vsb();}qp=qp.kpb;
}}};ak.prototype.ebc=function(c){c.xob=this.ltb;c.utb=null;this.ltb=c;c.oob=this;this.ttb++;return c;};ak.prototype.fbc=function(c){if(c.utb)c.utb.xob=c.xob;if(c.xob)c.xob.utb=c.utb;if(this.ltb==c)this.ltb=c.xob;this.ttb--;};ak.prototype.gbc=function(vac){if(vac.oob!=this)throw new hbc("Controller can only be a member of one world");vac.xob=this.ltb;vac.utb=null;if(this.ltb)this.ltb.utb=vac;this.ltb=vac;++this.ttb;vac.oob=this;return vac;};ak.prototype.ibc=function(vac){vac.oyb();if(vac.xob)vac.xob.utb=vac.utb;
if(vac.utb)vac.utb.xob=vac.xob;if(vac==this.ltb)this.ltb=vac.xob;--this.ttb;};ak.prototype.jbc=function(xsb){ak.cac=xsb;};ak.prototype.kbc=function(xsb){ak.dac=xsb;};ak.prototype.lbc=function(){return this.kyb;};ak.prototype.mbc=function(){return this.lyb;};ak.prototype.nbc=function(){return this.vub;};ak.prototype.obc=function(gravity){this.fac=gravity;};ak.prototype.pbc=function(){return this.fac;};ak.prototype.qbc=function(){return this.hac;};ak.prototype.rbc=function(qyb,syb,zyb){if(qyb===undefined)qyb=0;
if(syb===undefined)syb=0;if(zyb===undefined)zyb=0;if(this.sob&ak.dpb){this.vob.spb();this.sob&=~ak.dpb;}this.sob|=ak.sbc;var pyb=ak.tbc;pyb.qyb=qyb;pyb.syb=syb;pyb.zyb=zyb;if(qyb>0.0){pyb.xyb=1.0/qyb;}else {pyb.xyb=0.0;}pyb.ubc=this.gac*qyb;pyb.vzb=ak.cac;this.vob.lvb();if(pyb.qyb>0.0){this.vlb(pyb);}if(ak.dac&&pyb.qyb>0.0){this.jzb(pyb);}if(pyb.qyb>0.0){this.gac=pyb.xyb;}this.sob&=~ak.sbc;};ak.prototype.vbc=function(){for(var body=this.bac;body;body=body.xob){body.fob.ct();body.crb=0.0;}};ak.prototype.wbc=function(){
if(this.aac==null){return;}this.aac.xbc.ybc.clear();var tvb=this.aac.uvb();var i=0;var jn;var pbb;var vm;var sjb;var zbc;var acc=new lj;var xdb=new lj;var ydb=new lj;var uz;var bcc=new th();var ccc=new th();var ijb=[new lj(),new lj(),new lj(),new lj()];var owb=new ej(0,0,0);if(tvb&tj.vwb){for(jn=this.bac;jn;jn=jn.xob){uz=jn.cob;for(pbb=jn.htb();pbb;pbb=pbb.xob){vm=pbb.fxb();if(jn.etb()==false){owb.bo(0.5,0.5,0.3);this.dcc(vm,uz,owb);}else if(jn.rw()==nj.aqb){owb.bo(0.5,0.9,0.5);this.dcc(vm,uz,owb);}else if(jn.rw()==nj.dsb){
owb.bo(0.5,0.5,0.9);this.dcc(vm,uz,owb);}else if(jn.arb()==false){owb.bo(0.6,0.6,0.6);this.dcc(vm,uz,owb);}else {owb.bo(0.9,0.7,0.7);this.dcc(vm,uz,owb);}}}}if(tvb&tj.wwb){for(sjb=this.jtb;sjb;sjb=sjb.xob){this.ecc(sjb);}}if(tvb&tj.axb){for(var c=this.ltb;c;c=c.xob){c.fcc(this.aac);}}if(tvb&tj.ywb){owb.bo(0.3,0.9,0.9);for(var jpb=this.vob.ipb;jpb;jpb=jpb.ntb()){var lpb=jpb.mpb();var npb=jpb.opb();var gcc=lpb.vxb().am();var hcc=npb.vxb().am();this.aac.twb(gcc,hcc,owb);}}if(tvb&tj.xwb){zbc=this.vob.wob;ijb=[new lj(),
new lj(),new lj(),new lj()];for(jn=this.bac;jn;jn=jn.ntb()){if(jn.etb()==false){continue;}for(pbb=jn.htb();pbb;pbb=pbb.ntb()){var dm=zbc.vx(pbb.ovb);ijb[0].bo(dm.ul.x,dm.ul.y);ijb[1].bo(dm.vl.x,dm.ul.y);ijb[2].bo(dm.vl.x,dm.vl.y);ijb[3].bo(dm.ul.x,dm.vl.y);this.aac.nwb(ijb,4,owb);}}}if(tvb&tj.zwb){for(jn=this.bac;jn;jn=jn.xob){uz=ak.icc;uz.vo=jn.cob.vo;uz.position=jn.xpb();this.aac.uwb(uz);}}};ak.prototype.jcc=function(yx,dm){var cz=this;var uob=cz.vob.wob;function kcc(nn){return yx(uob.wx(nn));};uob.xx(kcc,
dm);};ak.prototype.lcc=function(yx,qw,transform){var cz=this;if(transform===undefined)transform=null;if(transform==null){transform=new kj();transform.ilb();}var uob=cz.vob.wob;function kcc(nn){var qob=(uob.wx(nn) instanceof wj?uob.wx(nn):null);if(cj.xm(qw,transform,qob.fxb(),qob.evb().rdb()))return yx(qob);return true;};var dm=new th();qw.zeb(dm,transform);uob.xx(kcc,dm);};ak.prototype.mcc=function(yx,qg){var cz=this;var uob=cz.vob.wob;function kcc(nn){var qob=(uob.wx(nn) instanceof wj?uob.wx(nn):null);if(qob.ueb(qg))return yx(qob);
return true;};var dm=new th();dm.ul.bo(qg.x-fj.bkb,qg.y-fj.bkb);dm.vl.bo(qg.x+fj.bkb,qg.y+fj.bkb);uob.xx(kcc,dm);};ak.prototype.fm=function(yx,ncc,occ){var cz=this;var uob=cz.vob.wob;var gm=new li;function pcc(hm,nn){var dx=uob.wx(nn);var qob=(dx instanceof wj?dx:null);var qcc=qob.fm(gm,hm);if(qcc){var wm=gm.wm;var yqb=new lj((1.0-wm)*ncc.x+wm*occ.x,(1.0-wm)*ncc.y+wm*occ.y);return yx(qob,yqb,gm.qm,wm);}return hm.fy;};var hm=new ki(ncc,occ);uob.fm(pcc,hm);};ak.prototype.rcc=function(ncc,occ){var cz=this;var em;function scc(qob,
yqb,qm,wm){if(wm===undefined)wm=0;em=qob;return wm;};cz.fm(scc,ncc,occ);return em;};ak.prototype.tcc=function(ncc,occ){var cz=this;var em=new ih();function ucc(qob,yqb,qm,wm){if(wm===undefined)wm=0;em[em.length]=qob;return 1;};cz.fm(ucc,ncc,occ);return em;};ak.prototype.vcc=function(){return this.bac;};ak.prototype.itb=function(){return this.jtb;};ak.prototype.mtb=function(){return this.ipb;};ak.prototype.pob=function(){return(this.sob&ak.sbc)>0;};ak.prototype.vlb=function(pyb){var jn;for(var vac=this.ltb;vac;
vac=vac.xob){vac.rbc(pyb);}var wcc=this.xzb;wcc.qab(this.kyb,this.vub,this.lyb,null,this.vob.xub,this.nyb);for(jn=this.bac;jn;jn=jn.xob){jn.sob&=~nj.cub;}for(var c=this.ipb;c;c=c.xob){c.sob&=~ck.cub;}for(var sjb=this.jtb;sjb;sjb=sjb.xob){sjb.xcc=false;}var ycc=parseInt(this.kyb);var zx=this.wzb;for(var zcc=this.bac;zcc;zcc=zcc.xob){if(zcc.sob&nj.cub){continue;}if(zcc.arb()==false||zcc.etb()==false){continue;}if(zcc.rw()==nj.aqb){continue;}wcc.oyb();var adc=0;zx[adc++]=zcc;zcc.sob|=nj.cub;while(adc>0){jn=zx[--adc];
wcc.rzb(jn);if(jn.arb()==false){jn.brb(true);}if(jn.rw()==nj.aqb){continue;}var other;for(var usb=jn.ipb;usb;usb=usb.kpb){if(usb.jpb.sob&ck.cub){continue;}if(usb.jpb.jxb()==true||usb.jpb.bdc()==false||usb.jpb.kvb()==false){continue;}wcc.tzb(usb.jpb);usb.jpb.sob|=ck.cub;other=usb.other;if(other.sob&nj.cub){continue;}zx[adc++]=other;other.sob|=nj.cub;}for(var ztb=jn.jtb;ztb;ztb=ztb.kpb){if(ztb.aub.xcc==true){continue;}other=ztb.other;if(other.etb()==false){continue;}wcc.uzb(ztb.aub);ztb.aub.xcc=true;
if(other.sob&nj.cub){continue;}zx[adc++]=other;other.sob|=nj.cub;}}wcc.vlb(pyb,this.fac,this.eac);for(var i=0;i<wcc.kyb;++i){jn=wcc.yxb[i];if(jn.rw()==nj.aqb){jn.sob&=~nj.cub;}}}for(i=0;i<zx.length;++i){if(!zx[i])break;zx[i]=null;}for(jn=this.bac;jn;jn=jn.xob){if(jn.arb()==false||jn.etb()==false){continue;}if(jn.rw()==nj.aqb){continue;}jn.srb();}this.vob.spb();};ak.prototype.jzb=function(pyb){var jn;var gvb;var hvb;var cdc;var ddc;var edc;var sjb;var wcc=this.xzb;wcc.qab(this.kyb,fj.vkb,fj.wkb,null,this.vob.xub,
this.nyb);var fdc=ak.gdc;for(jn=this.bac;jn;jn=jn.xob){jn.sob&=~nj.cub;jn.dob.ldb=0.0;}var c;for(c=this.ipb;c;c=c.xob){c.sob&=~(ck.hdc|ck.cub);}for(sjb=this.jtb;sjb;sjb=sjb.xob){sjb.xcc=false;}for(;;){var idc=null;var jdc=1.0;for(c=this.ipb;c;c=c.xob){if(c.jxb()==true||c.bdc()==false||c.kdc()==false){continue;}var ldc=1.0;if(c.sob&ck.hdc){ldc=c.mdc;}else {gvb=c.ndc;hvb=c.odc;cdc=gvb.apb;ddc=hvb.apb;if((cdc.rw()!=nj.zqb||cdc.arb()==false)&&(ddc.rw()!=nj.zqb||ddc.arb()==false)){continue;}var ldb=cdc.dob.ldb;
if(cdc.dob.ldb<ddc.dob.ldb){ldb=ddc.dob.ldb;cdc.dob.snb(ldb);}else if(ddc.dob.ldb<cdc.dob.ldb){ldb=cdc.dob.ldb;ddc.dob.snb(ldb);}ldc=c.pdc(cdc.dob,ddc.dob);fj.pv(0.0<=ldc&&ldc<=1.0);if(ldc>0.0&&ldc<1.0){ldc=(1.0-ldc)*ldb+ldc;if(ldc>1)ldc=1;}c.mdc=ldc;c.sob|=ck.hdc;}if(Number.MIN_VALUE<ldc&&ldc<jdc){idc=c;jdc=ldc;}}if(idc==null||1.0-100.0*Number.MIN_VALUE<jdc){break;}gvb=idc.ndc;hvb=idc.odc;cdc=gvb.apb;ddc=hvb.apb;ak.qdc.bo(cdc.dob);ak.rdc.bo(ddc.dob);cdc.snb(jdc);ddc.snb(jdc);idc.qvb(this.vob.xub);
idc.sob&=~ck.hdc;if(idc.jxb()==true||idc.bdc()==false){cdc.dob.bo(ak.qdc);ddc.dob.bo(ak.rdc);cdc.xtb();ddc.xtb();continue;}if(idc.kvb()==false){continue;}var zcc=cdc;if(zcc.rw()!=nj.zqb){zcc=ddc;}wcc.oyb();var sdc=0;var tdc=0;fdc[sdc+tdc++]=zcc;zcc.sob|=nj.cub;while(tdc>0){jn=fdc[sdc++];--tdc;wcc.rzb(jn);if(jn.arb()==false){jn.brb(true);}if(jn.rw()!=nj.zqb){continue;}for(edc=jn.ipb;edc;edc=edc.kpb){if(wcc.vub==wcc.iyb){break;}if(edc.jpb.sob&ck.cub){continue;}if(edc.jpb.jxb()==true||edc.jpb.bdc()==false||edc.jpb.kvb()==false){
continue;}wcc.tzb(edc.jpb);edc.jpb.sob|=ck.cub;var other=edc.other;if(other.sob&nj.cub){continue;}if(other.rw()!=nj.aqb){other.snb(jdc);other.brb(true);}fdc[sdc+tdc]=other;++tdc;other.sob|=nj.cub;}for(var udc=jn.jtb;udc;udc=udc.kpb){if(wcc.lyb==wcc.jyb)continue;if(udc.aub.xcc==true)continue;other=udc.other;if(other.etb()==false){continue;}wcc.uzb(udc.aub);udc.aub.xcc=true;if(other.sob&nj.cub)continue;if(other.rw()!=nj.aqb){other.snb(jdc);other.brb(true);}fdc[sdc+tdc]=other;++tdc;other.sob|=nj.cub;
}}var kzb=ak.vdc;kzb.vzb=false;kzb.qyb=(1.0-jdc)*pyb.qyb;kzb.xyb=1.0/kzb.qyb;kzb.ubc=0.0;kzb.syb=pyb.syb;kzb.zyb=pyb.zyb;wcc.jzb(kzb);var i=0;for(i=0;i<wcc.kyb;++i){jn=wcc.yxb[i];jn.sob&=~nj.cub;if(jn.arb()==false){continue;}if(jn.rw()!=nj.zqb){continue;}jn.srb();for(edc=jn.ipb;edc;edc=edc.kpb){edc.jpb.sob&=~ck.hdc;}}for(i=0;i<wcc.vub;++i){c=wcc.zxb[i];c.sob&=~(ck.hdc|ck.cub);}for(i=0;i<wcc.lyb;++i){sjb=wcc.ayb[i];sjb.xcc=false;}this.vob.spb();}};ak.prototype.ecc=function(aub){var bcc=aub.wdc();var ccc=aub.xdc();
var io=bcc.cob;var lo=ccc.cob;var xdb=io.position;var ydb=lo.position;var lm=aub.ydc();var nm=aub.zdc();var owb=ak.aec;switch(aub.er){case el.bec:this.aac.twb(lm,nm,owb);break;case el.cec:{var dec=((aub instanceof nl?aub:null));var hob=dec.eec();var iob=dec.fec();this.aac.twb(hob,lm,owb);this.aac.twb(iob,nm,owb);this.aac.twb(hob,iob,owb);}break;case el.gec:this.aac.twb(lm,nm,owb);break;default :if(bcc!=this.hac)this.aac.twb(xdb,lm,owb);this.aac.twb(lm,nm,owb);if(ccc!=this.hac)this.aac.twb(ydb,nm,owb);}};ak.prototype.dcc=function(qw,
uz,owb){switch(qw.er){case cj.sw:{var gt=((qw instanceof xi?qw:null));var jy=ij.xv(uz,gt.us);var at=gt.uq;var swb=uz.vo.zo;this.aac.rwb(jy,at,swb,owb);}break;case cj.tw:{var i=0;var hec=((qw instanceof bj?qw:null));var qt=parseInt(hec.xw());var iec=hec.gjb();var rt=new ih(qt);for(i=0;i<qt;++i){rt[i]=ij.xv(uz,iec[i]);}this.aac.pwb(rt,qt,owb);}break;case cj.rgb:{var qp=(qw instanceof zi?qw:null);this.aac.twb(ij.xv(uz,qp.bgb()),ij.xv(uz,qp.cgb()),owb);}break;}};ng.tl.push(function(){ng.nh.ak.tbc=new zj();ng.nh.ak.icc=new kj();
ng.nh.ak.qdc=new jj();ng.nh.ak.rdc=new jj();ng.nh.ak.vdc=new zj();ng.nh.ak.gdc=new ih();ng.nh.ak.aec=new ej(0.5,0.8,0.8);ng.nh.ak.dpb=0x0001;ng.nh.ak.sbc=0x0002;});})();(function(){var xi=ng.kh.lh.xi,yi=ng.kh.lh.yi,zi=ng.kh.lh.zi,aj=ng.kh.lh.aj,bj=ng.kh.lh.bj,cj=ng.kh.lh.cj,bk=ng.nh.ph.bk,ck=ng.nh.ph.ck,dk=ng.nh.ph.dk,ek=ng.nh.ph.ek,fk=ng.nh.ph.fk,gk=ng.nh.ph.gk,hk=ng.nh.ph.hk,ik=ng.nh.ph.ik,jk=ng.nh.ph.jk,kk=ng.nh.ph.kk,lk=ng.nh.ph.lk,mk=ng.nh.ph.mk,nk=ng.nh.ph.nk,ok=ng.nh.ph.ok,pk=ng.nh.ph.pk,nj=ng.nh.nj,
oj=ng.nh.oj,pj=ng.nh.pj,qj=ng.nh.qj,rj=ng.nh.rj,sj=ng.nh.sj,tj=ng.nh.tj,uj=ng.nh.uj,vj=ng.nh.vj,wj=ng.nh.wj,xj=ng.nh.xj,yj=ng.nh.yj,zj=ng.nh.zj,ak=ng.nh.ak,ej=ng.mh.ej,dj=ng.mh.dj,fj=ng.mh.fj,gj=ng.mh.Math.gj,hj=ng.mh.Math.hj,ij=ng.mh.Math.ij,jj=ng.mh.Math.jj,kj=ng.mh.Math.kj,lj=ng.mh.Math.lj,mj=ng.mh.Math.mj,th=ng.kh.th,uh=ng.kh.uh,vh=ng.kh.vh,wh=ng.kh.wh,xh=ng.kh.xh,yh=ng.kh.yh,zh=ng.kh.zh,ai=ng.kh.ai,bi=ng.kh.bi,ci=ng.kh.ci,di=ng.kh.di,ei=ng.kh.ei,fi=ng.kh.fi,gi=ng.kh.gi,hi=ng.kh.hi,ii=ng.kh.ii,
ji=ng.kh.ji,ki=ng.kh.ki,li=ng.kh.li,mi=ng.kh.mi,ni=ng.kh.ni,oi=ng.kh.oi,qi=ng.kh.qi,ri=ng.kh.ri,si=ng.kh.si,ti=ng.kh.ti,ui=ng.kh.ui,vi=ng.kh.vi,wi=ng.kh.wi,sh=ng.kh.sh;ng.vg(bk,ng.nh.ph.ck);bk.prototype.__super=ng.nh.ph.ck.prototype;bk.bk=function(){ng.nh.ph.ck.ck.apply(this,arguments);};bk.rob=function(eyb){return new bk();};bk.ppb=function(jpb,eyb){};bk.prototype.oz=function(lpb,npb){this.__super.oz.call(this,lpb,npb);};bk.prototype.sbb=function(){var cdc=this.ndc.evb();var ddc=this.odc.evb();wh.rs(this.jec,
(this.ndc.fxb() instanceof xi?this.ndc.fxb():null),cdc.cob,(this.odc.fxb() instanceof xi?this.odc.fxb():null),ddc.cob);};ck.ck=function(){this.ivb=new fk();this.jvb=new fk();this.jec=new hi();this.kec=new hi();};ck.prototype.lec=function(){return this.jec;};ck.prototype.mec=function(nec){var dvb=this.ndc.evb();var fvb=this.odc.evb();var oec=this.ndc.fxb();var pec=this.odc.fxb();nec.qab(this.jec,dvb.rdb(),oec.uq,fvb.rdb(),pec.uq);};ck.prototype.kvb=function(){return(this.sob&ck.qec)==ck.qec;};ck.prototype.kdc=function(){
return(this.sob&ck.rec)==ck.rec;};ck.prototype.gxb=function(hxb){if(hxb){this.sob|=ck.sec;}else {this.sob&=~ck.sec;}};ck.prototype.jxb=function(){return(this.sob&ck.sec)==ck.sec;};ck.prototype.tec=function(xsb){if(xsb){this.sob|=ck.uec;}else {this.sob&=~ck.uec;}};ck.prototype.bdc=function(){return(this.sob&ck.uec)==ck.uec;};ck.prototype.ntb=function(){return this.xob;};ck.prototype.mpb=function(){return this.ndc;};ck.prototype.opb=function(){return this.odc;};ck.prototype.vsb=function(){this.sob|=ck.mvb;
};ck.prototype.ck=function(){};ck.prototype.oz=function(lpb,npb){if(lpb===undefined)lpb=null;if(npb===undefined)npb=null;this.sob=ck.uec;if(!lpb||!npb){this.ndc=null;this.odc=null;return;}if(lpb.jxb()||npb.jxb()){this.sob|=ck.sec;}var dvb=lpb.evb();var fvb=npb.evb();if(dvb.rw()!=nj.zqb||dvb.ysb()||fvb.rw()!=nj.zqb||fvb.ysb()){this.sob|=ck.rec;}this.ndc=lpb;this.odc=npb;this.jec.sq=0;this.utb=null;this.xob=null;this.ivb.jpb=null;this.ivb.nrb=null;this.ivb.kpb=null;this.ivb.other=null;this.jvb.jpb=null;
this.jvb.nrb=null;this.jvb.kpb=null;this.jvb.other=null;};ck.prototype.qvb=function(fyb){var vec=this.kec;this.kec=this.jec;this.jec=vec;this.sob|=ck.uec;var wec=false;var xec=(this.sob&ck.qec)==ck.qec;var dvb=this.ndc.apb;var fvb=this.odc.apb;var yec=this.ndc.wxb.xm(this.odc.wxb);if(this.sob&ck.sec){if(yec){var oec=this.ndc.fxb();var pec=this.odc.fxb();var pq=dvb.rdb();var rq=fvb.rdb();wec=cj.xm(oec,pq,pec,rq);}this.jec.sq=0;}else {if(dvb.rw()!=nj.zqb||dvb.ysb()||fvb.rw()!=nj.zqb||fvb.ysb()){this.sob|=ck.rec;
}else {this.sob&=~ck.rec;}if(yec){this.sbb();wec=this.jec.sq>0;for(var i=0;i<this.jec.sq;++i){var zec=this.jec.os[i];zec.rz=0.0;zec.sz=0.0;var afc=zec.qs;for(var sjb=0;sjb<this.kec.sq;++sjb){var bfc=this.kec.os[sjb];if(bfc.qs.dt==afc.dt){zec.rz=bfc.rz;zec.sz=bfc.sz;break;}}}}else {this.jec.sq=0;}if(wec!=xec){dvb.brb(true);fvb.brb(true);}}if(wec){this.sob|=ck.qec;}else {this.sob&=~ck.qec;}if(xec==false&&wec==true){fyb.oub(this);}if(xec==true&&wec==false){fyb.pub(this);}if((this.sob&ck.sec)==0){fyb.qub(this,
this.kec);}};ck.prototype.sbb=function(){};ck.prototype.pdc=function(jdb,kdb){ck.cfc.ru.bo(this.ndc.fxb());ck.cfc.su.bo(this.odc.fxb());ck.cfc.jdb=jdb;ck.cfc.kdb=kdb;ck.cfc.mdb=fj.bkb;return si.hdb(ck.cfc);};ng.tl.push(function(){ng.nh.ph.ck.sec=0x0001;ng.nh.ph.ck.rec=0x0002;ng.nh.ph.ck.cub=0x0004;ng.nh.ph.ck.hdc=0x0008;ng.nh.ph.ck.qec=0x0010;ng.nh.ph.ck.uec=0x0020;ng.nh.ph.ck.mvb=0x0040;ng.nh.ph.ck.cfc=new ti();});dk.dk=function(){this.dfc=new lj();this.gsb=new lj();this.qm=new lj();this.efc=new gj();
this.ffc=new gj();};dk.prototype.dk=function(){this.points=new ih(fj.ms);for(var i=0;i<fj.ms;i++){this.points[i]=new ek();}};ek.ek=function(){this.gsb=new lj();this.nw=new lj();this.pw=new lj();};fk.fk=function(){};gk.gk=function(){};gk.prototype.gk=function(eyb){this.zub=eyb;this.gfc();};gk.prototype.hfc=function(ifc,jfc,kfc,lfc){if(kfc===undefined)kfc=0;if(lfc===undefined)lfc=0;this.mfc[kfc][lfc].ifc=ifc;this.mfc[kfc][lfc].jfc=jfc;this.mfc[kfc][lfc].nfc=true;if(kfc!=lfc){this.mfc[lfc][kfc].ifc=ifc;this.mfc[lfc][kfc].jfc=jfc;
this.mfc[lfc][kfc].nfc=false;}};gk.prototype.gfc=function(){this.mfc=new ih(cj.ckb);for(var i=0;i<cj.ckb;i++){this.mfc[i]=new ih(cj.ckb);for(var sjb=0;sjb<cj.ckb;sjb++){this.mfc[i][sjb]=new hk();}}this.hfc(bk.rob,bk.ppb,cj.sw,cj.sw);this.hfc(mk.rob,mk.ppb,cj.tw,cj.sw);this.hfc(ok.rob,ok.ppb,cj.tw,cj.tw);this.hfc(kk.rob,kk.ppb,cj.rgb,cj.sw);this.hfc(nk.rob,nk.ppb,cj.tw,cj.rgb);};gk.prototype.rob=function(lpb,npb){var kfc=parseInt(lpb.rw());var lfc=parseInt(npb.rw());var ofc=this.mfc[kfc][lfc];var c;if(ofc.pfc){
c=ofc.pfc;ofc.pfc=c.xob;ofc.qfc--;c.oz(lpb,npb);return c;}var ifc=ofc.ifc;if(ifc!=null){if(ofc.nfc){c=ifc(this.zub);c.oz(lpb,npb);return c;}else {c=ifc(this.zub);c.oz(npb,lpb);return c;}}else {return null;}};gk.prototype.ppb=function(jpb){if(jpb.jec.sq>0){jpb.ndc.apb.brb(true);jpb.odc.apb.brb(true);}var kfc=parseInt(jpb.ndc.rw());var lfc=parseInt(jpb.odc.rw());var ofc=this.mfc[kfc][lfc];if(true){ofc.qfc++;jpb.xob=ofc.pfc;ofc.pfc=jpb;}var jfc=ofc.jfc;jfc(jpb,this.zub);};hk.hk=function(){};ik.ik=function(){this.position=new lj();
this.qm=new lj();this.id=new xh();};jk.jk=function(){this.rfc=new zj();this.fzb=new ih();};jk.prototype.jk=function(){};jk.prototype.qab=function(pyb,sfc,tfc,eyb){if(tfc===undefined)tfc=0;var jpb;this.rfc.bo(pyb);this.zub=eyb;var i=0;var eo;var uo;this.ufc=tfc;while(this.fzb.length<this.ufc){this.fzb[this.fzb.length]=new dk();}for(i=0;i<tfc;++i){jpb=sfc[i];var lpb=jpb.ndc;var npb=jpb.odc;var oec=lpb.exb;var pec=npb.exb;var ieb=oec.uq;var jeb=pec.uq;var dvb=lpb.apb;var fvb=npb.apb;var nq=jpb.lec();var friction=fj.lkb(lpb.oxb(),
npb.oxb());var uxb=fj.okb(lpb.rxb(),npb.rxb());var vfc=dvb.eob.x;var wfc=dvb.eob.y;var xfc=fvb.eob.x;var yfc=fvb.eob.y;var wv=dvb.eqb;var zv=fvb.eqb;fj.pv(nq.sq>0);jk.zfc.qab(nq,dvb.cob,ieb,fvb.cob,jeb);var dbb=jk.zfc.heb.x;var ebb=jk.zfc.heb.y;var nzb=this.fzb[i];nzb.dvb=dvb;nzb.fvb=fvb;nzb.nq=nq;nzb.qm.x=dbb;nzb.qm.y=ebb;nzb.ls=nq.sq;nzb.friction=friction;nzb.uxb=uxb;nzb.dfc.x=nq.is.x;nzb.dfc.y=nq.is.y;nzb.gsb.x=nq.ks.x;nzb.gsb.y=nq.ks.y;nzb.at=ieb+jeb;nzb.type=nq.er;for(var agc=0;agc<nzb.ls;++agc){var ns=nq.os[agc];
var bgc=nzb.points[agc];bgc.pzb=ns.rz;bgc.qzb=ns.sz;bgc.gsb.js(ns.ks);var cgc=bgc.nw.x=jk.zfc.os[agc].x-dvb.dob.c.x;var dgc=bgc.nw.y=jk.zfc.os[agc].y-dvb.dob.c.y;var egc=bgc.pw.x=jk.zfc.os[agc].x-fvb.dob.c.x;var fgc=bgc.pw.y=jk.zfc.os[agc].y-fvb.dob.c.y;var ggc=cgc*ebb-dgc*dbb;var hgc=egc*ebb-fgc*dbb;ggc*=ggc;hgc*=hgc;var igc=dvb.hrb+fvb.hrb+dvb.irb*ggc+fvb.irb*hgc;bgc.efc=1.0/igc;var jgc=dvb.xrb*dvb.hrb+fvb.xrb*fvb.hrb;jgc+=dvb.xrb*dvb.irb*ggc+fvb.xrb*fvb.irb*hgc;bgc.kgc=1.0/jgc;var lgc=ebb;var mgc=(-dbb);
var ngc=cgc*mgc-dgc*lgc;var ogc=egc*mgc-fgc*lgc;ngc*=ngc;ogc*=ogc;var pgc=dvb.hrb+fvb.hrb+dvb.irb*ngc+fvb.irb*ogc;bgc.qgc=1.0/pgc;bgc.rgc=0.0;var cq=xfc+((-zv*fgc))-vfc-((-wv*dgc));var ps=yfc+(zv*egc)-wfc-(wv*cgc);var sgc=nzb.qm.x*cq+nzb.qm.y*ps;if(sgc<(-fj.xkb)){bgc.rgc+=(-nzb.uxb*sgc);}}if(nzb.ls==2){var tgc=nzb.points[0];var ugc=nzb.points[1];var vgc=dvb.hrb;var wgc=dvb.irb;var xgc=fvb.hrb;var ygc=fvb.irb;var zgc=tgc.nw.x*ebb-tgc.nw.y*dbb;var ahc=tgc.pw.x*ebb-tgc.pw.y*dbb;var bhc=ugc.nw.x*ebb-ugc.nw.y*dbb;var chc=ugc.pw.x*ebb-ugc.pw.y*dbb;
var dhc=vgc+xgc+wgc*zgc*zgc+ygc*ahc*ahc;var ehc=vgc+xgc+wgc*bhc*bhc+ygc*chc*chc;var fhc=vgc+xgc+wgc*zgc*bhc+ygc*ahc*chc;var ghc=100.0;if(dhc*dhc<ghc*(dhc*ehc-fhc*fhc)){nzb.ffc.zo.bo(dhc,fhc);nzb.ffc.ap.bo(fhc,ehc);nzb.ffc.slb(nzb.efc);}else {nzb.ls=1;}}}};jk.prototype.ryb=function(pyb){var eo;var hhc;var uo;for(var i=0;i<this.ufc;++i){var c=this.fzb[i];var dvb=c.dvb;var fvb=c.fvb;var vgc=dvb.hrb;var wgc=dvb.irb;var xgc=fvb.hrb;var ygc=fvb.irb;var dbb=c.qm.x;var ebb=c.qm.y;var lgc=ebb;var mgc=(-dbb);var cq=0;var sjb=0;
var ihc=0;if(pyb.vzb){ihc=c.ls;for(sjb=0;sjb<ihc;++sjb){var bgc=c.points[sjb];bgc.pzb*=pyb.ubc;bgc.qzb*=pyb.ubc;var jhc=bgc.pzb*dbb+bgc.qzb*lgc;var khc=bgc.pzb*ebb+bgc.qzb*mgc;dvb.eqb-=wgc*(bgc.nw.x*khc-bgc.nw.y*jhc);dvb.eob.x-=vgc*jhc;dvb.eob.y-=vgc*khc;fvb.eqb+=ygc*(bgc.pw.x*khc-bgc.pw.y*jhc);fvb.eob.x+=xgc*jhc;fvb.eob.y+=xgc*khc;}}else {ihc=c.ls;for(sjb=0;sjb<ihc;++sjb){var ugc=c.points[sjb];ugc.pzb=0.0;ugc.qzb=0.0;}}}};jk.prototype.tyb=function(){var sjb=0;var bgc;var cgc=0;var dgc=0;var egc=0;var fgc=0;
var lhc=0;var mhc=0;var nhc=0;var ohc=0;var zz=0;var phc=0;var qhc=0;var jhc=0;var khc=0;var xl=0;var yl=0;var rhc=0;var shc=0;var thc=0;var uhc=0;var uo;var eo;for(var i=0;i<this.ufc;++i){var c=this.fzb[i];var dvb=c.dvb;var fvb=c.fvb;var wv=dvb.eqb;var zv=fvb.eqb;var vhc=dvb.eob;var whc=fvb.eob;var vgc=dvb.hrb;var wgc=dvb.irb;var xgc=fvb.hrb;var ygc=fvb.irb;var dbb=c.qm.x;var ebb=c.qm.y;var lgc=ebb;var mgc=(-dbb);var friction=c.friction;var cq=0;for(sjb=0;sjb<c.ls;sjb++){bgc=c.points[sjb];lhc=whc.x-zv*bgc.pw.y-vhc.x+wv*bgc.nw.y;
mhc=whc.y+zv*bgc.pw.x-vhc.y-wv*bgc.nw.x;ohc=lhc*lgc+mhc*mgc;zz=bgc.qgc*(-ohc);phc=friction*bgc.pzb;qhc=ij.qbb(bgc.qzb+zz,(-phc),phc);zz=qhc-bgc.qzb;jhc=zz*lgc;khc=zz*mgc;vhc.x-=vgc*jhc;vhc.y-=vgc*khc;wv-=wgc*(bgc.nw.x*khc-bgc.nw.y*jhc);whc.x+=xgc*jhc;whc.y+=xgc*khc;zv+=ygc*(bgc.pw.x*khc-bgc.pw.y*jhc);bgc.qzb=qhc;}var ihc=parseInt(c.ls);if(c.ls==1){bgc=c.points[0];lhc=whc.x+((-zv*bgc.pw.y))-vhc.x-((-wv*bgc.nw.y));mhc=whc.y+(zv*bgc.pw.x)-vhc.y-(wv*bgc.nw.x);nhc=lhc*dbb+mhc*ebb;zz=(-bgc.efc*(nhc-bgc.rgc));
qhc=bgc.pzb+zz;qhc=qhc>0?qhc:0.0;zz=qhc-bgc.pzb;jhc=zz*dbb;khc=zz*ebb;vhc.x-=vgc*jhc;vhc.y-=vgc*khc;wv-=wgc*(bgc.nw.x*khc-bgc.nw.y*jhc);whc.x+=xgc*jhc;whc.y+=xgc*khc;zv+=ygc*(bgc.pw.x*khc-bgc.pw.y*jhc);bgc.pzb=qhc;}else {var xhc=c.points[0];var yhc=c.points[1];var zhc=xhc.pzb;var aic=yhc.pzb;var bic=whc.x-zv*xhc.pw.y-vhc.x+wv*xhc.nw.y;var cic=whc.y+zv*xhc.pw.x-vhc.y-wv*xhc.nw.x;var dic=whc.x-zv*yhc.pw.y-vhc.x+wv*yhc.nw.y;var eic=whc.y+zv*yhc.pw.x-vhc.y-wv*yhc.nw.x;var fic=bic*dbb+cic*ebb;var gic=dic*dbb+eic*ebb;
var iab=fic-xhc.rgc;var jab=gic-yhc.rgc;uo=c.ffc;iab-=uo.zo.x*zhc+uo.ap.x*aic;jab-=uo.zo.y*zhc+uo.ap.y*aic;var hic=0.001;for(;;){uo=c.efc;var iic=(-(uo.zo.x*iab+uo.ap.x*jab));var jic=(-(uo.zo.y*iab+uo.ap.y*jab));if(iic>=0.0&&jic>=0.0){xl=iic-zhc;yl=jic-aic;rhc=xl*dbb;shc=xl*ebb;thc=yl*dbb;uhc=yl*ebb;vhc.x-=vgc*(rhc+thc);vhc.y-=vgc*(shc+uhc);wv-=wgc*(xhc.nw.x*shc-xhc.nw.y*rhc+yhc.nw.x*uhc-yhc.nw.y*thc);whc.x+=xgc*(rhc+thc);whc.y+=xgc*(shc+uhc);zv+=ygc*(xhc.pw.x*shc-xhc.pw.y*rhc+yhc.pw.x*uhc-yhc.pw.y*thc);
xhc.pzb=iic;yhc.pzb=jic;break;}iic=(-xhc.efc*iab);jic=0.0;fic=0.0;gic=c.ffc.zo.y*iic+jab;if(iic>=0.0&&gic>=0.0){xl=iic-zhc;yl=jic-aic;rhc=xl*dbb;shc=xl*ebb;thc=yl*dbb;uhc=yl*ebb;vhc.x-=vgc*(rhc+thc);vhc.y-=vgc*(shc+uhc);wv-=wgc*(xhc.nw.x*shc-xhc.nw.y*rhc+yhc.nw.x*uhc-yhc.nw.y*thc);whc.x+=xgc*(rhc+thc);whc.y+=xgc*(shc+uhc);zv+=ygc*(xhc.pw.x*shc-xhc.pw.y*rhc+yhc.pw.x*uhc-yhc.pw.y*thc);xhc.pzb=iic;yhc.pzb=jic;break;}iic=0.0;jic=(-yhc.efc*jab);fic=c.ffc.ap.x*jic+iab;gic=0.0;if(jic>=0.0&&fic>=0.0){xl=iic-zhc;
yl=jic-aic;rhc=xl*dbb;shc=xl*ebb;thc=yl*dbb;uhc=yl*ebb;vhc.x-=vgc*(rhc+thc);vhc.y-=vgc*(shc+uhc);wv-=wgc*(xhc.nw.x*shc-xhc.nw.y*rhc+yhc.nw.x*uhc-yhc.nw.y*thc);whc.x+=xgc*(rhc+thc);whc.y+=xgc*(shc+uhc);zv+=ygc*(xhc.pw.x*shc-xhc.pw.y*rhc+yhc.pw.x*uhc-yhc.pw.y*thc);xhc.pzb=iic;yhc.pzb=jic;break;}iic=0.0;jic=0.0;fic=iab;gic=jab;if(fic>=0.0&&gic>=0.0){xl=iic-zhc;yl=jic-aic;rhc=xl*dbb;shc=xl*ebb;thc=yl*dbb;uhc=yl*ebb;vhc.x-=vgc*(rhc+thc);vhc.y-=vgc*(shc+uhc);wv-=wgc*(xhc.nw.x*shc-xhc.nw.y*rhc+yhc.nw.x*uhc-yhc.nw.y*thc);
whc.x+=xgc*(rhc+thc);whc.y+=xgc*(shc+uhc);zv+=ygc*(xhc.pw.x*shc-xhc.pw.y*rhc+yhc.pw.x*uhc-yhc.pw.y*thc);xhc.pzb=iic;yhc.pzb=jic;break;}break;}}dvb.eqb=wv;fvb.eqb=zv;}};jk.prototype.uyb=function(){for(var i=0;i<this.ufc;++i){var c=this.fzb[i];var pz=c.nq;for(var sjb=0;sjb<c.ls;++sjb){var ncc=pz.os[sjb];var occ=c.points[sjb];ncc.rz=occ.pzb;ncc.sz=occ.qzb;}}};jk.prototype.bzb=function(kic){if(kic===undefined)kic=0;var lic=0.0;for(var i=0;i<this.ufc;i++){var c=this.fzb[i];var dvb=c.dvb;var fvb=c.fvb;var vgc=dvb.xrb*dvb.hrb;
var wgc=dvb.xrb*dvb.irb;var xgc=fvb.xrb*fvb.hrb;var ygc=fvb.xrb*fvb.irb;jk.mic.qab(c);var qm=jk.mic.heb;for(var sjb=0;sjb<c.ls;sjb++){var bgc=c.points[sjb];var yqb=jk.mic.os[sjb];var kp=jk.mic.nic[sjb];var cgc=yqb.x-dvb.dob.c.x;var dgc=yqb.y-dvb.dob.c.y;var egc=yqb.x-fvb.dob.c.x;var fgc=yqb.y-fvb.dob.c.y;lic=lic<kp?lic:kp;var wmb=ij.qbb(kic*(kp+fj.bkb),(-fj.ykb),0.0);var grb=(-bgc.kgc*wmb);var jhc=grb*qm.x;var khc=grb*qm.y;dvb.dob.c.x-=vgc*jhc;dvb.dob.c.y-=vgc*khc;dvb.dob.bu-=wgc*(cgc*khc-dgc*jhc);dvb.xtb();fvb.dob.c.x+=xgc*jhc;
fvb.dob.c.y+=xgc*khc;fvb.dob.bu+=ygc*(egc*khc-fgc*jhc);fvb.xtb();}}return lic>(-1.5*fj.bkb);};ng.tl.push(function(){ng.nh.ph.jk.zfc=new ui();ng.nh.ph.jk.mic=new pk();});ng.vg(kk,ng.nh.ph.ck);kk.prototype.__super=ng.nh.ph.ck.prototype;kk.kk=function(){ng.nh.ph.ck.ck.apply(this,arguments);};kk.rob=function(eyb){return new kk();};kk.ppb=function(jpb,eyb){};kk.prototype.oz=function(lpb,npb){this.__super.oz.call(this,lpb,npb);};kk.prototype.sbb=function(){var cdc=this.ndc.evb();var ddc=this.odc.evb();this.oic(this.jec,
(this.ndc.fxb() instanceof zi?this.ndc.fxb():null),cdc.cob,(this.odc.fxb() instanceof xi?this.odc.fxb():null),ddc.cob);};kk.prototype.oic=function(nq,qp,io,gt,lo){};ng.vg(lk,ng.nh.ph.ck);lk.prototype.__super=ng.nh.ph.ck.prototype;lk.lk=function(){ng.nh.ph.ck.ck.apply(this,arguments);};lk.prototype.lk=function(){this.__super.ck.call(this);};lk.prototype.sbb=function(){};ng.vg(mk,ng.nh.ph.ck);mk.prototype.__super=ng.nh.ph.ck.prototype;mk.mk=function(){ng.nh.ph.ck.ck.apply(this,arguments);};mk.rob=function(eyb){
return new mk();};mk.ppb=function(jpb,eyb){};mk.prototype.oz=function(lpb,npb){this.__super.oz.call(this,lpb,npb);fj.pv(lpb.rw()==cj.tw);fj.pv(npb.rw()==cj.sw);};mk.prototype.sbb=function(){var cdc=this.ndc.apb;var ddc=this.odc.apb;wh.et(this.jec,(this.ndc.fxb() instanceof bj?this.ndc.fxb():null),cdc.cob,(this.odc.fxb() instanceof xi?this.odc.fxb():null),ddc.cob);};ng.vg(nk,ng.nh.ph.ck);nk.prototype.__super=ng.nh.ph.ck.prototype;nk.nk=function(){ng.nh.ph.ck.ck.apply(this,arguments);};nk.rob=function(eyb){
return new nk();};nk.ppb=function(jpb,eyb){};nk.prototype.oz=function(lpb,npb){this.__super.oz.call(this,lpb,npb);fj.pv(lpb.rw()==cj.tw);fj.pv(npb.rw()==cj.rgb);};nk.prototype.sbb=function(){var cdc=this.ndc.evb();var ddc=this.odc.evb();this.pic(this.jec,(this.ndc.fxb() instanceof bj?this.ndc.fxb():null),cdc.cob,(this.odc.fxb() instanceof zi?this.odc.fxb():null),ddc.cob);};nk.prototype.pic=function(nq,ft,io,qp,lo){};ng.vg(ok,ng.nh.ph.ck);ok.prototype.__super=ng.nh.ph.ck.prototype;ok.ok=function(){ng.nh.ph.ck.ck.apply(this,
arguments);};ok.rob=function(eyb){return new ok();};ok.ppb=function(jpb,eyb){};ok.prototype.oz=function(lpb,npb){this.__super.oz.call(this,lpb,npb);};ok.prototype.sbb=function(){var cdc=this.ndc.evb();var ddc=this.odc.evb();wh.mq(this.jec,(this.ndc.fxb() instanceof bj?this.ndc.fxb():null),cdc.cob,(this.odc.fxb() instanceof bj?this.odc.fxb():null),ddc.cob);};pk.pk=function(){};pk.prototype.pk=function(){this.heb=new lj();this.nic=new jh(fj.ms);this.os=new ih(fj.ms);for(var i=0;i<fj.ms;i++){this.os[i]=new lj();
}};pk.prototype.qab=function(nzb){fj.pv(nzb.ls>0);var i=0;var meb=0;var neb=0;var uo;var eo;var keb=0;var leb=0;switch(nzb.type){case hi.bt:{uo=nzb.dvb.cob.vo;eo=nzb.gsb;var zab=nzb.dvb.cob.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);var abb=nzb.dvb.cob.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);uo=nzb.fvb.cob.vo;eo=nzb.points[0].gsb;var bbb=nzb.fvb.cob.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);var cbb=nzb.fvb.cob.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);var xl=bbb-zab;var yl=cbb-abb;var oeb=xl*xl+yl*yl;if(oeb>Number.MIN_VALUE*Number.MIN_VALUE){
var qv=Math.sqrt(oeb);this.heb.x=xl/qv;this.heb.y=yl/qv;}else {this.heb.x=1.0;this.heb.y=0.0;}this.os[0].x=0.5*(zab+bbb);this.os[0].y=0.5*(abb+cbb);this.nic[0]=xl*this.heb.x+yl*this.heb.y-nzb.at;}break;case hi.gr:{uo=nzb.dvb.cob.vo;eo=nzb.dfc;this.heb.x=uo.zo.x*eo.x+uo.ap.x*eo.y;this.heb.y=uo.zo.y*eo.x+uo.ap.y*eo.y;uo=nzb.dvb.cob.vo;eo=nzb.gsb;keb=nzb.dvb.cob.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);leb=nzb.dvb.cob.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);uo=nzb.fvb.cob.vo;for(i=0;i<nzb.ls;++i){eo=nzb.points[i].gsb;
meb=nzb.fvb.cob.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);neb=nzb.fvb.cob.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);this.nic[i]=(meb-keb)*this.heb.x+(neb-leb)*this.heb.y-nzb.at;this.os[i].x=meb;this.os[i].y=neb;}}break;case hi.fr:{uo=nzb.fvb.cob.vo;eo=nzb.dfc;this.heb.x=uo.zo.x*eo.x+uo.ap.x*eo.y;this.heb.y=uo.zo.y*eo.x+uo.ap.y*eo.y;uo=nzb.fvb.cob.vo;eo=nzb.gsb;keb=nzb.fvb.cob.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);leb=nzb.fvb.cob.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);uo=nzb.dvb.cob.vo;for(i=0;i<nzb.ls;
++i){eo=nzb.points[i].gsb;meb=nzb.dvb.cob.position.x+(uo.zo.x*eo.x+uo.ap.x*eo.y);neb=nzb.dvb.cob.position.y+(uo.zo.y*eo.x+uo.ap.y*eo.y);this.nic[i]=(meb-keb)*this.heb.x+(neb-leb)*this.heb.y-nzb.at;this.os[i].bo(meb,neb);}this.heb.x*=(-1);this.heb.y*=(-1);}break;}};ng.tl.push(function(){ng.nh.ph.pk.qic=new lj();ng.nh.ph.pk.ric=new lj();});})();(function(){var nj=ng.nh.nj,oj=ng.nh.oj,pj=ng.nh.pj,qj=ng.nh.qj,rj=ng.nh.rj,sj=ng.nh.sj,tj=ng.nh.tj,uj=ng.nh.uj,vj=ng.nh.vj,wj=ng.nh.wj,xj=ng.nh.xj,yj=ng.nh.yj,
zj=ng.nh.zj,ak=ng.nh.ak,gj=ng.mh.Math.gj,hj=ng.mh.Math.hj,ij=ng.mh.Math.ij,jj=ng.mh.Math.jj,kj=ng.mh.Math.kj,lj=ng.mh.Math.lj,mj=ng.mh.Math.mj,ej=ng.mh.ej,dj=ng.mh.dj,fj=ng.mh.fj,xi=ng.kh.lh.xi,yi=ng.kh.lh.yi,zi=ng.kh.lh.zi,aj=ng.kh.lh.aj,bj=ng.kh.lh.bj,cj=ng.kh.lh.cj,qk=ng.nh.qh.qk,rk=ng.nh.qh.rk,sk=ng.nh.qh.sk,tk=ng.nh.qh.tk,uk=ng.nh.qh.uk,vk=ng.nh.qh.vk,wk=ng.nh.qh.wk;ng.vg(qk,ng.nh.qh.tk);qk.prototype.__super=ng.nh.qh.tk.prototype;qk.qk=function(){ng.nh.qh.tk.tk.apply(this,arguments);this.qm=new lj(0,
(-1));this.offset=0;this.cfb=0;this.nu=new lj(0,0);this.sic=2;this.tic=1;this.uic=false;this.vic=true;this.gravity=null;};qk.prototype.rbc=function(pyb){if(!this.bac)return;if(this.vic){this.gravity=this.qtb().pbc().gu();}for(var i=this.bac;i;i=i.wic){var body=i.body;if(body.arb()==false){continue;}var xic=new lj();var yic=new lj();var kfb=0.0;var dfb=0.0;for(var qob=body.htb();qob;qob=qob.ntb()){var zic=new lj();var ajc=qob.fxb().gfb(this.qm,this.offset,body.rdb(),zic);kfb+=ajc;xic.x+=ajc*zic.x;xic.y+=ajc*zic.y;
var bjc=0;if(this.uic){bjc=1;}else {bjc=1;}dfb+=ajc*bjc;yic.x+=ajc*zic.x*bjc;yic.y+=ajc*zic.y*bjc;}xic.x/=kfb;xic.y/=kfb;yic.x/=dfb;yic.y/=dfb;if(kfb<Number.MIN_VALUE)continue;var cjc=this.gravity.vv();cjc.fjb(this.cfb*kfb);body.wqb(cjc,yic);var djc=body.nsb(xic);djc.ynb(this.nu);djc.fjb((-this.sic*kfb));body.wqb(djc,xic);body.drb((-body.yrb()/body.wrb()*kfb*body.fqb()*this.tic));}};qk.prototype.fcc=function(mac){var lq=1000;var lm=new lj();var nm=new lj();lm.x=this.qm.x*this.offset+this.qm.y*lq;lm.y=this.qm.y*this.offset-this.qm.x*lq;
nm.x=this.qm.x*this.offset-this.qm.y*lq;nm.y=this.qm.y*this.offset+this.qm.x*lq;var owb=new ej(0,0,1);mac.twb(lm,nm,owb);};ng.vg(rk,ng.nh.qh.tk);rk.prototype.__super=ng.nh.qh.tk.prototype;rk.rk=function(){ng.nh.qh.tk.tk.apply(this,arguments);this.nmb=new lj(0,0);};rk.prototype.rbc=function(pyb){var ejc=new lj(this.nmb.x*pyb.qyb,this.nmb.y*pyb.qyb);for(var i=this.bac;i;i=i.wic){var body=i.body;if(!body.arb())continue;body.zpb(new lj(body.bqb().x+ejc.x,body.bqb().y+ejc.y));}};ng.vg(sk,ng.nh.qh.tk);sk.prototype.__super=ng.nh.qh.tk.prototype;
sk.sk=function(){ng.nh.qh.tk.tk.apply(this,arguments);this.fjc=new lj(0,0);};sk.prototype.rbc=function(pyb){for(var i=this.bac;i;i=i.wic){var body=i.body;if(!body.arb())continue;body.wqb(this.fjc,body.xpb());}};tk.tk=function(){};tk.prototype.rbc=function(pyb){};tk.prototype.fcc=function(mac){};tk.prototype.rzb=function(body){var qp=new uk();qp.vac=this;qp.body=body;qp.wic=this.bac;qp.gjc=null;this.bac=qp;if(qp.wic)qp.wic.gjc=qp;this.kyb++;qp.uac=body.ltb;qp.hjc=null;body.ltb=qp;if(qp.uac)qp.uac.hjc=qp;
body.ttb++;};tk.prototype.wac=function(body){var qp=body.ltb;while(qp&&qp.vac!=this)qp=qp.uac;if(qp.gjc)qp.gjc.wic=qp.wic;if(qp.wic)qp.wic.gjc=qp.gjc;if(qp.uac)qp.uac.hjc=qp.hjc;if(qp.hjc)qp.hjc.uac=qp.uac;if(this.bac==qp)this.bac=qp.wic;if(body.ltb==qp)body.ltb=qp.uac;body.ttb--;this.kyb--;};tk.prototype.oyb=function(){while(this.bac)this.wac(this.bac.body);};tk.prototype.ntb=function(){return this.xob;};tk.prototype.qtb=function(){return this.oob;};tk.prototype.vcc=function(){return this.bac;};uk.uk=function(){
};ng.vg(vk,ng.nh.qh.tk);vk.prototype.__super=ng.nh.qh.tk.prototype;vk.vk=function(){ng.nh.qh.tk.tk.apply(this,arguments);this.ijc=1;this.jjc=true;};vk.prototype.rbc=function(pyb){var i=null;var krb=null;var lm=null;var kjc=0;var sjb=null;var lrb=null;var nm=null;var ljc=0;var mjc=0;var ifb=0;var pbb=null;if(this.jjc){for(i=this.bac;i;i=i.wic){krb=i.body;lm=krb.xpb();kjc=krb.wrb();for(sjb=this.bac;sjb!=i;sjb=sjb.wic){lrb=sjb.body;nm=lrb.xpb();ljc=nm.x-lm.x;mjc=nm.y-lm.y;ifb=ljc*ljc+mjc*mjc;if(ifb<Number.MIN_VALUE)continue;
pbb=new lj(ljc,mjc);pbb.fjb(this.ijc/ifb/Math.sqrt(ifb)*kjc*lrb.wrb());if(krb.arb())krb.wqb(pbb,lm);pbb.fjb((-1));if(lrb.arb())lrb.wqb(pbb,nm);}}}else {for(i=this.bac;i;i=i.wic){krb=i.body;lm=krb.xpb();kjc=krb.wrb();for(sjb=this.bac;sjb!=i;sjb=sjb.wic){lrb=sjb.body;nm=lrb.xpb();ljc=nm.x-lm.x;mjc=nm.y-lm.y;ifb=ljc*ljc+mjc*mjc;if(ifb<Number.MIN_VALUE)continue;pbb=new lj(ljc,mjc);pbb.fjb(this.ijc/ifb*kjc*lrb.wrb());if(krb.arb())krb.wqb(pbb,lm);pbb.fjb((-1));if(lrb.arb())lrb.wqb(pbb,nm);}}}};ng.vg(wk,ng.nh.qh.tk);
wk.prototype.__super=ng.nh.qh.tk.prototype;wk.wk=function(){ng.nh.qh.tk.tk.apply(this,arguments);this.pmb=new gj();this.njc=0;};wk.prototype.ojc=function(pjc,qjc){if(pjc===undefined)pjc=0;if(qjc===undefined)qjc=0;this.pmb.zo.x=(-pjc);this.pmb.zo.y=0;this.pmb.ap.x=0;this.pmb.ap.y=(-qjc);if(pjc>0||qjc>0){this.njc=1/Math.max(pjc,qjc);}else {this.njc=0;}};wk.prototype.rbc=function(pyb){var rjc=pyb.qyb;if(rjc<=Number.MIN_VALUE)return;if(rjc>this.njc&&this.njc>0)rjc=this.njc;for(var i=this.bac;i;i=i.wic){
var body=i.body;if(!body.arb()){continue;}var sjc=body.hsb(ij.lbb(this.pmb,body.lsb(body.bqb())));body.zpb(new lj(body.bqb().x+sjc.x*rjc,body.bqb().y+sjc.y*rjc));}};})();(function(){var ej=ng.mh.ej,dj=ng.mh.dj,fj=ng.mh.fj,gj=ng.mh.Math.gj,hj=ng.mh.Math.hj,ij=ng.mh.Math.ij,jj=ng.mh.Math.jj,kj=ng.mh.Math.kj,lj=ng.mh.Math.lj,mj=ng.mh.Math.mj,xk=ng.nh.rh.xk,yk=ng.nh.rh.yk,zk=ng.nh.rh.zk,al=ng.nh.rh.al,bl=ng.nh.rh.bl,cl=ng.nh.rh.cl,dl=ng.nh.rh.dl,el=ng.nh.rh.el,fl=ng.nh.rh.fl,gl=ng.nh.rh.gl,hl=ng.nh.rh.hl,
il=ng.nh.rh.il,jl=ng.nh.rh.jl,kl=ng.nh.rh.kl,ll=ng.nh.rh.ll,ml=ng.nh.rh.ml,nl=ng.nh.rh.nl,ol=ng.nh.rh.ol,pl=ng.nh.rh.pl,ql=ng.nh.rh.ql,rl=ng.nh.rh.rl,sl=ng.nh.rh.sl,nj=ng.nh.nj,oj=ng.nh.oj,pj=ng.nh.pj,qj=ng.nh.qj,rj=ng.nh.rj,sj=ng.nh.sj,tj=ng.nh.tj,uj=ng.nh.uj,vj=ng.nh.vj,wj=ng.nh.wj,xj=ng.nh.xj,yj=ng.nh.yj,zj=ng.nh.zj,ak=ng.nh.ak;ng.vg(xk,ng.nh.rh.el);xk.prototype.__super=ng.nh.rh.el.prototype;xk.xk=function(){ng.nh.rh.el.el.apply(this,arguments);this.tjc=new lj();this.ujc=new lj();this.vjc=new lj();
};xk.prototype.ydc=function(){return this.bbc.fsb(this.tjc);};xk.prototype.zdc=function(){return this.abc.fsb(this.ujc);};xk.prototype.wjc=function(xyb){if(xyb===undefined)xyb=0;return new lj(xyb*this.xjc*this.vjc.x,xyb*this.xjc*this.vjc.y);};xk.prototype.yjc=function(xyb){if(xyb===undefined)xyb=0;return 0.0;};xk.prototype.zfb=function(){return this.agb;};xk.prototype.zjc=function(length){if(length===undefined)length=0;this.agb=length;};xk.prototype.akc=function(){return this.bkc;};xk.prototype.ckc=function(dkc){
if(dkc===undefined)dkc=0;this.bkc=dkc;};xk.prototype.ekc=function(){return this.fkc;};xk.prototype.gkc=function(hkc){if(hkc===undefined)hkc=0;this.fkc=hkc;};xk.prototype.xk=function(nob){this.__super.el.call(this,nob);var uo;var cq=0;var ps=0;this.tjc.js(nob.ikc);this.ujc.js(nob.jkc);this.agb=nob.length;this.bkc=nob.kkc;this.fkc=nob.lkc;this.xjc=0.0;this.mkc=0.0;this.nkc=0.0;};xk.prototype.ryb=function(pyb){var uo;var cq=0;var cdc=this.bbc;var ddc=this.abc;uo=cdc.cob.vo;var okc=this.tjc.x-cdc.dob.pnb.x;var pkc=this.tjc.y-cdc.dob.pnb.y;
cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=ddc.cob.vo;var qkc=this.ujc.x-ddc.dob.pnb.x;var rkc=this.ujc.y-ddc.dob.pnb.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;this.vjc.x=ddc.dob.c.x+qkc-cdc.dob.c.x-okc;this.vjc.y=ddc.dob.c.y+rkc-cdc.dob.c.y-pkc;var length=Math.sqrt(this.vjc.x*this.vjc.x+this.vjc.y*this.vjc.y);if(length>fj.bkb){this.vjc.fjb(1.0/length);}else {this.vjc.ct();}var skc=(okc*this.vjc.y-pkc*this.vjc.x);var tkc=(qkc*this.vjc.y-rkc*this.vjc.x);
var ukc=cdc.hrb+cdc.irb*skc*skc+ddc.hrb+ddc.irb*tkc*tkc;this.xrb=ukc!=0.0?1.0/ukc:0.0;if(this.bkc>0.0){var wmb=length-this.agb;var dqb=2.0*Math.PI*this.bkc;var qv=2.0*this.xrb*this.fkc*dqb;var agc=this.xrb*dqb*dqb;this.mkc=pyb.qyb*(qv+pyb.qyb*agc);this.mkc=this.mkc!=0.0?1/this.mkc:0.0;this.nkc=wmb*pyb.qyb*agc*this.mkc;this.xrb=ukc+this.mkc;this.xrb=this.xrb!=0.0?1.0/this.xrb:0.0;}if(pyb.vzb){this.xjc*=pyb.ubc;var jhc=this.xjc*this.vjc.x;var khc=this.xjc*this.vjc.y;cdc.eob.x-=cdc.hrb*jhc;cdc.eob.y-=cdc.hrb*khc;
cdc.eqb-=cdc.irb*(okc*khc-pkc*jhc);ddc.eob.x+=ddc.hrb*jhc;ddc.eob.y+=ddc.hrb*khc;ddc.eqb+=ddc.irb*(qkc*khc-rkc*jhc);}else {this.xjc=0.0;}};xk.prototype.tyb=function(pyb){var uo;var cdc=this.bbc;var ddc=this.abc;uo=cdc.cob.vo;var okc=this.tjc.x-cdc.dob.pnb.x;var pkc=this.tjc.y-cdc.dob.pnb.y;var cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=ddc.cob.vo;var qkc=this.ujc.x-ddc.dob.pnb.x;var rkc=this.ujc.y-ddc.dob.pnb.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;var gp=cdc.eob.x+((-cdc.eqb*pkc));
var hp=cdc.eob.y+(cdc.eqb*okc);var ip=ddc.eob.x+((-ddc.eqb*rkc));var jp=ddc.eob.y+(ddc.eqb*qkc);var vkc=(this.vjc.x*(ip-gp)+this.vjc.y*(jp-hp));var grb=(-this.xrb*(vkc+this.nkc+this.mkc*this.xjc));this.xjc+=grb;var jhc=grb*this.vjc.x;var khc=grb*this.vjc.y;cdc.eob.x-=cdc.hrb*jhc;cdc.eob.y-=cdc.hrb*khc;cdc.eqb-=cdc.irb*(okc*khc-pkc*jhc);ddc.eob.x+=ddc.hrb*jhc;ddc.eob.y+=ddc.hrb*khc;ddc.eqb+=ddc.irb*(qkc*khc-rkc*jhc);};xk.prototype.bzb=function(kic){if(kic===undefined)kic=0;var uo;if(this.bkc>0.0){return true;
}var cdc=this.bbc;var ddc=this.abc;uo=cdc.cob.vo;var okc=this.tjc.x-cdc.dob.pnb.x;var pkc=this.tjc.y-cdc.dob.pnb.y;var cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=ddc.cob.vo;var qkc=this.ujc.x-ddc.dob.pnb.x;var rkc=this.ujc.y-ddc.dob.pnb.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;var xl=ddc.dob.c.x+qkc-cdc.dob.c.x-okc;var yl=ddc.dob.c.y+rkc-cdc.dob.c.y-pkc;var length=Math.sqrt(xl*xl+yl*yl);xl/=length;yl/=length;var wmb=length-this.agb;wmb=ij.qbb(wmb,(-fj.ykb),
fj.ykb);var grb=(-this.xrb*wmb);this.vjc.bo(xl,yl);var jhc=grb*this.vjc.x;var khc=grb*this.vjc.y;cdc.dob.c.x-=cdc.hrb*jhc;cdc.dob.c.y-=cdc.hrb*khc;cdc.dob.bu-=cdc.irb*(okc*khc-pkc*jhc);ddc.dob.c.x+=ddc.hrb*jhc;ddc.dob.c.y+=ddc.hrb*khc;ddc.dob.bu+=ddc.irb*(qkc*khc-rkc*jhc);cdc.xtb();ddc.xtb();return ij.ceb(wmb)<fj.bkb;};ng.vg(yk,ng.nh.rh.fl);yk.prototype.__super=ng.nh.rh.fl.prototype;yk.yk=function(){ng.nh.rh.fl.fl.apply(this,arguments);this.ikc=new lj();this.jkc=new lj();};yk.prototype.yk=function(){this.__super.fl.call(this);
this.type=el.bec;this.length=1.0;this.kkc=0.0;this.lkc=0.0;};yk.prototype.qab=function(cdc,ddc,wkc,xkc){this.dvb=cdc;this.fvb=ddc;this.ikc.js(this.dvb.jsb(wkc));this.jkc.js(this.fvb.jsb(xkc));var xl=xkc.x-wkc.x;var yl=xkc.y-wkc.y;this.length=Math.sqrt(xl*xl+yl*yl);this.kkc=0.0;this.lkc=0.0;};ng.vg(zk,ng.nh.rh.el);zk.prototype.__super=ng.nh.rh.el.prototype;zk.zk=function(){ng.nh.rh.el.el.apply(this,arguments);this.ykc=new lj();this.zkc=new lj();this.alc=new gj();this.blc=new lj();};zk.prototype.ydc=function(){
return this.bbc.fsb(this.ykc);};zk.prototype.zdc=function(){return this.abc.fsb(this.zkc);};zk.prototype.wjc=function(xyb){if(xyb===undefined)xyb=0;return new lj(xyb*this.blc.x,xyb*this.blc.y);};zk.prototype.yjc=function(xyb){if(xyb===undefined)xyb=0;return xyb*this.clc;};zk.prototype.dlc=function(xqb){if(xqb===undefined)xqb=0;this.elc=xqb;};zk.prototype.flc=function(){return this.elc;};zk.prototype.glc=function(erb){if(erb===undefined)erb=0;this.hlc=erb;};zk.prototype.ilc=function(){return this.hlc;};
zk.prototype.zk=function(nob){this.__super.el.call(this,nob);this.ykc.js(nob.ikc);this.zkc.js(nob.jkc);this.alc.ct();this.jlc=0.0;this.blc.ct();this.clc=0.0;this.elc=nob.klc;this.hlc=nob.llc;};zk.prototype.ryb=function(pyb){var uo;var cq=0;var cdc=this.bbc;var ddc=this.abc;uo=cdc.cob.vo;var cgc=this.ykc.x-cdc.dob.pnb.x;var dgc=this.ykc.y-cdc.dob.pnb.y;cq=(uo.zo.x*cgc+uo.ap.x*dgc);dgc=(uo.zo.y*cgc+uo.ap.y*dgc);cgc=cq;uo=ddc.cob.vo;var egc=this.zkc.x-ddc.dob.pnb.x;var fgc=this.zkc.y-ddc.dob.pnb.y;cq=(uo.zo.x*egc+uo.ap.x*fgc);
fgc=(uo.zo.y*egc+uo.ap.y*fgc);egc=cq;var mlc=cdc.hrb;var nlc=ddc.hrb;var olc=cdc.irb;var plc=ddc.irb;var ffc=new gj();ffc.zo.x=mlc+nlc;ffc.ap.x=0.0;ffc.zo.y=0.0;ffc.ap.y=mlc+nlc;ffc.zo.x+=olc*dgc*dgc;ffc.ap.x+=(-olc*cgc*dgc);ffc.zo.y+=(-olc*cgc*dgc);ffc.ap.y+=olc*cgc*cgc;ffc.zo.x+=plc*fgc*fgc;ffc.ap.x+=(-plc*egc*fgc);ffc.zo.y+=(-plc*egc*fgc);ffc.ap.y+=plc*egc*egc;ffc.slb(this.alc);this.jlc=olc+plc;if(this.jlc>0.0){this.jlc=1.0/this.jlc;}if(pyb.vzb){this.blc.x*=pyb.ubc;this.blc.y*=pyb.ubc;this.clc*=pyb.ubc;
var qlc=this.blc;cdc.eob.x-=mlc*qlc.x;cdc.eob.y-=mlc*qlc.y;cdc.eqb-=olc*(cgc*qlc.y-dgc*qlc.x+this.clc);ddc.eob.x+=nlc*qlc.x;ddc.eob.y+=nlc*qlc.y;ddc.eqb+=plc*(egc*qlc.y-fgc*qlc.x+this.clc);}else {this.blc.ct();this.clc=0.0;}};zk.prototype.tyb=function(pyb){var uo;var cq=0;var cdc=this.bbc;var ddc=this.abc;var vhc=cdc.eob;var wv=cdc.eqb;var whc=ddc.eob;var zv=ddc.eqb;var mlc=cdc.hrb;var nlc=ddc.hrb;var olc=cdc.irb;var plc=ddc.irb;uo=cdc.cob.vo;var cgc=this.ykc.x-cdc.dob.pnb.x;var dgc=this.ykc.y-cdc.dob.pnb.y;cq=(uo.zo.x*cgc+uo.ap.x*dgc);
dgc=(uo.zo.y*cgc+uo.ap.y*dgc);cgc=cq;uo=ddc.cob.vo;var egc=this.zkc.x-ddc.dob.pnb.x;var fgc=this.zkc.y-ddc.dob.pnb.y;cq=(uo.zo.x*egc+uo.ap.x*fgc);fgc=(uo.zo.y*egc+uo.ap.y*fgc);egc=cq;var rlc=0;{var vkc=zv-wv;var grb=(-this.jlc*vkc);var slc=this.clc;rlc=pyb.qyb*this.hlc;this.clc=ij.qbb(this.clc+grb,(-rlc),rlc);grb=this.clc-slc;wv-=olc*grb;zv+=plc*grb;}{var tlc=whc.x-zv*fgc-vhc.x+wv*dgc;var ulc=whc.y+zv*egc-vhc.y-wv*cgc;var vlc=ij.lbb(this.alc,new lj((-tlc),(-ulc)));var wlc=this.blc.gu();this.blc.xnb(vlc);rlc=pyb.qyb*this.elc;
if(this.blc.hv()>rlc*rlc){this.blc.mr();this.blc.fjb(rlc);}vlc=ij.aw(this.blc,wlc);vhc.x-=mlc*vlc.x;vhc.y-=mlc*vlc.y;wv-=olc*(cgc*vlc.y-dgc*vlc.x);whc.x+=nlc*vlc.x;whc.y+=nlc*vlc.y;zv+=plc*(egc*vlc.y-fgc*vlc.x);}cdc.eqb=wv;ddc.eqb=zv;};zk.prototype.bzb=function(kic){if(kic===undefined)kic=0;return true;};ng.vg(al,ng.nh.rh.fl);al.prototype.__super=ng.nh.rh.fl.prototype;al.al=function(){ng.nh.rh.fl.fl.apply(this,arguments);this.ikc=new lj();this.jkc=new lj();};al.prototype.al=function(){this.__super.fl.call(this);
this.type=el.xlc;this.klc=0.0;this.llc=0.0;};al.prototype.qab=function(cdc,ddc,anchor){this.dvb=cdc;this.fvb=ddc;this.ikc.js(this.dvb.jsb(anchor));this.jkc.js(this.fvb.jsb(anchor));};ng.vg(bl,ng.nh.rh.el);bl.prototype.__super=ng.nh.rh.el.prototype;bl.bl=function(){ng.nh.rh.el.el.apply(this,arguments);this.ylc=new lj();this.zlc=new lj();this.tjc=new lj();this.ujc=new lj();this.amc=new dl();};bl.prototype.ydc=function(){return this.bbc.fsb(this.tjc);};bl.prototype.zdc=function(){return this.abc.fsb(this.ujc);
};bl.prototype.wjc=function(xyb){if(xyb===undefined)xyb=0;return new lj(xyb*this.xjc*this.amc.bmc.x,xyb*this.xjc*this.amc.bmc.y);};bl.prototype.yjc=function(xyb){if(xyb===undefined)xyb=0;var uo=this.abc.cob.vo;var cab=this.tjc.x-this.abc.dob.pnb.x;var dab=this.tjc.y-this.abc.dob.pnb.y;var cq=uo.zo.x*cab+uo.ap.x*dab;dab=uo.zo.y*cab+uo.ap.y*dab;cab=cq;var jhc=this.xjc*this.amc.bmc.x;var khc=this.xjc*this.amc.bmc.y;return xyb*(this.xjc*this.amc.cmc-cab*khc+dab*jhc);};bl.prototype.dmc=function(){return this.emc;
};bl.prototype.fmc=function(hkc){if(hkc===undefined)hkc=0;this.emc=hkc;};bl.prototype.bl=function(nob){this.__super.el.call(this,nob);var kfc=parseInt(nob.gmc.er);var lfc=parseInt(nob.hmc.er);this.imc=null;this.jmc=null;this.kmc=null;this.lmc=null;var mmc=0;var nmc=0;this.omc=nob.gmc.wdc();this.bbc=nob.gmc.xdc();if(kfc==el.pmc){this.imc=(nob.gmc instanceof pl?nob.gmc:null);this.ylc.js(this.imc.tjc);this.tjc.js(this.imc.ujc);mmc=this.imc.qmc();}else {this.jmc=(nob.gmc instanceof ll?nob.gmc:null);this.ylc.js(this.jmc.tjc);
this.tjc.js(this.jmc.ujc);mmc=this.jmc.rmc();}this.smc=nob.hmc.wdc();this.abc=nob.hmc.xdc();if(lfc==el.pmc){this.kmc=(nob.hmc instanceof pl?nob.hmc:null);this.zlc.js(this.kmc.tjc);this.ujc.js(this.kmc.ujc);nmc=this.kmc.qmc();}else {this.lmc=(nob.hmc instanceof ll?nob.hmc:null);this.zlc.js(this.lmc.tjc);this.ujc.js(this.lmc.ujc);nmc=this.lmc.rmc();}this.emc=nob.hkc;this.tmc=mmc+this.emc*nmc;this.xjc=0.0;};bl.prototype.ryb=function(pyb){var umc=this.omc;var vmc=this.smc;var cdc=this.bbc;var ddc=this.abc;var wmc=0;
var xmc=0;var cab=0;var dab=0;var uo;var eo;var ymc=0;var cq=0;var ffc=0.0;this.amc.ct();if(this.imc){this.amc.zmc=(-1.0);ffc+=cdc.irb;}else {uo=umc.cob.vo;eo=this.jmc.anc;wmc=uo.zo.x*eo.x+uo.ap.x*eo.y;xmc=uo.zo.y*eo.x+uo.ap.y*eo.y;uo=cdc.cob.vo;cab=this.tjc.x-cdc.dob.pnb.x;dab=this.tjc.y-cdc.dob.pnb.y;cq=uo.zo.x*cab+uo.ap.x*dab;dab=uo.zo.y*cab+uo.ap.y*dab;cab=cq;ymc=cab*xmc-dab*wmc;this.amc.bnc.bo((-wmc),(-xmc));this.amc.zmc=(-ymc);ffc+=cdc.hrb+cdc.irb*ymc*ymc;}if(this.kmc){this.amc.cmc=(-this.emc);ffc+=this.emc*this.emc*ddc.irb;
}else {uo=vmc.cob.vo;eo=this.lmc.anc;wmc=uo.zo.x*eo.x+uo.ap.x*eo.y;xmc=uo.zo.y*eo.x+uo.ap.y*eo.y;uo=ddc.cob.vo;cab=this.ujc.x-ddc.dob.pnb.x;dab=this.ujc.y-ddc.dob.pnb.y;cq=uo.zo.x*cab+uo.ap.x*dab;dab=uo.zo.y*cab+uo.ap.y*dab;cab=cq;ymc=cab*xmc-dab*wmc;this.amc.bmc.bo((-this.emc*wmc),(-this.emc*xmc));this.amc.cmc=(-this.emc*ymc);ffc+=this.emc*this.emc*(ddc.hrb+ddc.irb*ymc*ymc);}this.xrb=ffc>0.0?1.0/ffc:0.0;if(pyb.vzb){cdc.eob.x+=cdc.hrb*this.xjc*this.amc.bnc.x;cdc.eob.y+=cdc.hrb*this.xjc*this.amc.bnc.y;
cdc.eqb+=cdc.irb*this.xjc*this.amc.zmc;ddc.eob.x+=ddc.hrb*this.xjc*this.amc.bmc.x;ddc.eob.y+=ddc.hrb*this.xjc*this.amc.bmc.y;ddc.eqb+=ddc.irb*this.xjc*this.amc.cmc;}else {this.xjc=0.0;}};bl.prototype.tyb=function(pyb){var cdc=this.bbc;var ddc=this.abc;var vkc=this.amc.cnc(cdc.eob,cdc.eqb,ddc.eob,ddc.eqb);var grb=(-this.xrb*vkc);this.xjc+=grb;cdc.eob.x+=cdc.hrb*grb*this.amc.bnc.x;cdc.eob.y+=cdc.hrb*grb*this.amc.bnc.y;cdc.eqb+=cdc.irb*grb*this.amc.zmc;ddc.eob.x+=ddc.hrb*grb*this.amc.bmc.x;ddc.eob.y+=ddc.hrb*grb*this.amc.bmc.y;
ddc.eqb+=ddc.irb*grb*this.amc.cmc;};bl.prototype.bzb=function(kic){if(kic===undefined)kic=0;var dnc=0.0;var cdc=this.bbc;var ddc=this.abc;var mmc=0;var nmc=0;if(this.imc){mmc=this.imc.qmc();}else {mmc=this.jmc.rmc();}if(this.kmc){nmc=this.kmc.qmc();}else {nmc=this.lmc.rmc();}var wmb=this.tmc-(mmc+this.emc*nmc);var grb=(-this.xrb*wmb);cdc.dob.c.x+=cdc.hrb*grb*this.amc.bnc.x;cdc.dob.c.y+=cdc.hrb*grb*this.amc.bnc.y;cdc.dob.bu+=cdc.irb*grb*this.amc.zmc;ddc.dob.c.x+=ddc.hrb*grb*this.amc.bmc.x;ddc.dob.c.y+=ddc.hrb*grb*this.amc.bmc.y;
ddc.dob.bu+=ddc.irb*grb*this.amc.cmc;cdc.xtb();ddc.xtb();return dnc<fj.bkb;};ng.vg(cl,ng.nh.rh.fl);cl.prototype.__super=ng.nh.rh.fl.prototype;cl.cl=function(){ng.nh.rh.fl.fl.apply(this,arguments);};cl.prototype.cl=function(){this.__super.fl.call(this);this.type=el.enc;this.gmc=null;this.hmc=null;this.hkc=1.0;};dl.dl=function(){this.bnc=new lj();this.bmc=new lj();};dl.prototype.ct=function(){this.bnc.ct();this.zmc=0.0;this.bmc.ct();this.cmc=0.0;};dl.prototype.bo=function(xdb,fnc,ydb,gnc){if(fnc===undefined)fnc=0;
if(gnc===undefined)gnc=0;this.bnc.js(xdb);this.zmc=fnc;this.bmc.js(ydb);this.cmc=gnc;};dl.prototype.cnc=function(xdb,fnc,ydb,gnc){if(fnc===undefined)fnc=0;if(gnc===undefined)gnc=0;return(this.bnc.x*xdb.x+this.bnc.y*xdb.y)+this.zmc*fnc+(this.bmc.x*ydb.x+this.bmc.y*ydb.y)+this.cmc*gnc;};el.el=function(){this.zac=new gl();this.cbc=new gl();this.hnc=new lj();this.inc=new lj();};el.prototype.rw=function(){return this.er;};el.prototype.ydc=function(){return null;};el.prototype.zdc=function(){return null;};el.prototype.wjc=function(xyb){
if(xyb===undefined)xyb=0;return null;};el.prototype.yjc=function(xyb){if(xyb===undefined)xyb=0;return 0.0;};el.prototype.wdc=function(){return this.bbc;};el.prototype.xdc=function(){return this.abc;};el.prototype.ntb=function(){return this.xob;};el.prototype.wx=function(){return this.otb;};el.prototype.ptb=function(data){this.otb=data;};el.prototype.etb=function(){return this.bbc.etb()&&this.abc.etb();};el.rob=function(nob,eyb){var aub=null;switch(nob.type){case el.bec:{aub=new xk((nob instanceof yk?nob:null));
}break;case el.gec:{aub=new jl((nob instanceof kl?nob:null));}break;case el.jnc:{aub=new ll((nob instanceof ml?nob:null));}break;case el.pmc:{aub=new pl((nob instanceof ql?nob:null));}break;case el.cec:{aub=new nl((nob instanceof ol?nob:null));}break;case el.enc:{aub=new bl((nob instanceof cl?nob:null));}break;case el.knc:{aub=new hl((nob instanceof il?nob:null));}break;case el.lnc:{aub=new rl((nob instanceof sl?nob:null));}break;case el.xlc:{aub=new zk((nob instanceof al?nob:null));}break;default :break;}return aub;};el.ppb=function(aub,
eyb){};el.prototype.el=function(nob){fj.pv(nob.dvb!=nob.fvb);this.er=nob.type;this.utb=null;this.xob=null;this.bbc=nob.dvb;this.abc=nob.fvb;this.bub=nob.dbc;this.xcc=false;this.otb=nob.dx;};el.prototype.ryb=function(pyb){};el.prototype.tyb=function(pyb){};el.prototype.uyb=function(){};el.prototype.bzb=function(kic){if(kic===undefined)kic=0;return false;};ng.tl.push(function(){ng.nh.rh.el.mnc=0;ng.nh.rh.el.pmc=1;ng.nh.rh.el.jnc=2;ng.nh.rh.el.bec=3;ng.nh.rh.el.cec=4;ng.nh.rh.el.gec=5;ng.nh.rh.el.enc=6;
ng.nh.rh.el.knc=7;ng.nh.rh.el.lnc=8;ng.nh.rh.el.xlc=9;ng.nh.rh.el.nnc=0;ng.nh.rh.el.onc=1;ng.nh.rh.el.pnc=2;ng.nh.rh.el.qnc=3;});fl.fl=function(){};fl.prototype.fl=function(){this.type=el.mnc;this.dx=null;this.dvb=null;this.fvb=null;this.dbc=false;};gl.gl=function(){};ng.vg(hl,ng.nh.rh.el);hl.prototype.__super=ng.nh.rh.el.prototype;hl.hl=function(){ng.nh.rh.el.el.apply(this,arguments);this.tjc=new lj();this.ujc=new lj();this.anc=new lj();this.rnc=new lj();this.pab=new lj();this.snc=new lj();this.tnc=new gj();
this.xjc=new lj();};hl.prototype.ydc=function(){return this.bbc.fsb(this.tjc);};hl.prototype.zdc=function(){return this.abc.fsb(this.ujc);};hl.prototype.wjc=function(xyb){if(xyb===undefined)xyb=0;return new lj(xyb*(this.xjc.x*this.snc.x+(this.unc+this.xjc.y)*this.pab.x),xyb*(this.xjc.x*this.snc.y+(this.unc+this.xjc.y)*this.pab.y));};hl.prototype.yjc=function(xyb){if(xyb===undefined)xyb=0;return xyb*this.xjc.y;};hl.prototype.rmc=function(){var cdc=this.bbc;var ddc=this.abc;var uo;var lm=cdc.fsb(this.tjc);var nm=ddc.fsb(this.ujc);
var xl=nm.x-lm.x;var yl=nm.y-lm.y;var swb=cdc.hsb(this.anc);var vnc=swb.x*xl+swb.y*yl;return vnc;};hl.prototype.wnc=function(){var cdc=this.bbc;var ddc=this.abc;var uo;uo=cdc.cob.vo;var okc=this.tjc.x-cdc.dob.pnb.x;var pkc=this.tjc.y-cdc.dob.pnb.y;var cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=ddc.cob.vo;var qkc=this.ujc.x-ddc.dob.pnb.x;var rkc=this.ujc.y-ddc.dob.pnb.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;var vs=cdc.dob.c.x+okc;var ws=cdc.dob.c.y+pkc;var xs=ddc.dob.c.x+qkc;
var ys=ddc.dob.c.y+rkc;var xl=xs-vs;var yl=ys-ws;var swb=cdc.hsb(this.anc);var vt=cdc.eob;var wt=ddc.eob;var hcb=cdc.eqb;var icb=ddc.eqb;var speed=(xl*((-hcb*swb.y))+yl*(hcb*swb.x))+(swb.x*(((wt.x+((-icb*rkc)))-vt.x)-((-hcb*pkc)))+swb.y*(((wt.y+(icb*qkc))-vt.y)-(hcb*okc)));return speed;};hl.prototype.xnc=function(){return this.ync;};hl.prototype.znc=function(xsb){this.bbc.brb(true);this.abc.brb(true);this.ync=xsb;};hl.prototype.aoc=function(){return this.boc;};hl.prototype.coc=function(){return this.doc;};hl.prototype.eoc=function(qhb,
rhb){if(qhb===undefined)qhb=0;if(rhb===undefined)rhb=0;this.bbc.brb(true);this.abc.brb(true);this.boc=qhb;this.doc=rhb;};hl.prototype.foc=function(){return this.goc;};hl.prototype.hoc=function(xsb){this.bbc.brb(true);this.abc.brb(true);this.goc=xsb;};hl.prototype.ioc=function(speed){if(speed===undefined)speed=0;this.bbc.brb(true);this.abc.brb(true);this.joc=speed;};hl.prototype.koc=function(){return this.joc;};hl.prototype.loc=function(xqb){if(xqb===undefined)xqb=0;this.bbc.brb(true);this.abc.brb(true);
this.moc=xqb;};hl.prototype.noc=function(){return this.moc;};hl.prototype.ooc=function(){return this.unc;};hl.prototype.hl=function(nob){this.__super.el.call(this,nob);var uo;var cq=0;var ps=0;this.tjc.js(nob.ikc);this.ujc.js(nob.jkc);this.anc.js(nob.poc);this.rnc.x=(-this.anc.y);this.rnc.y=this.anc.x;this.xjc.ct();this.qoc=0.0;this.unc=0.0;this.boc=nob.roc;this.doc=nob.soc;this.moc=nob.toc;this.joc=nob.uoc;this.ync=nob.voc;this.goc=nob.woc;this.xoc=el.nnc;this.pab.ct();this.snc.ct();};hl.prototype.ryb=function(pyb){
var cdc=this.bbc;var ddc=this.abc;var uo;var cq=0;this.hnc.js(cdc.ypb());this.inc.js(ddc.ypb());var io=cdc.rdb();var lo=ddc.rdb();uo=cdc.cob.vo;var okc=this.tjc.x-this.hnc.x;var pkc=this.tjc.y-this.hnc.y;cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=ddc.cob.vo;var qkc=this.ujc.x-this.inc.x;var rkc=this.ujc.y-this.inc.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;var xl=ddc.dob.c.x+qkc-cdc.dob.c.x-okc;var yl=ddc.dob.c.y+rkc-cdc.dob.c.y-pkc;this.yoc=cdc.hrb;this.zoc=ddc.hrb;
this.apc=cdc.irb;this.bpc=ddc.irb;{this.pab.js(ij.lbb(io.vo,this.anc));this.cpc=(xl+okc)*this.pab.y-(yl+pkc)*this.pab.x;this.dpc=qkc*this.pab.y-rkc*this.pab.x;this.qoc=this.yoc+this.zoc+this.apc*this.cpc*this.cpc+this.bpc*this.dpc*this.dpc;this.qoc=this.qoc>Number.MIN_VALUE?1.0/this.qoc:0.0;}{this.snc.js(ij.lbb(io.vo,this.rnc));this.epc=(xl+okc)*this.snc.y-(yl+pkc)*this.snc.x;this.fpc=qkc*this.snc.y-rkc*this.snc.x;var gpc=this.yoc;var hpc=this.zoc;var eq=this.apc;var fq=this.bpc;this.tnc.zo.x=gpc+hpc+eq*this.epc*this.epc+fq*this.fpc*this.fpc;
this.tnc.zo.y=eq*this.epc*this.cpc+fq*this.fpc*this.dpc;this.tnc.ap.x=this.tnc.zo.y;this.tnc.ap.y=gpc+hpc+eq*this.cpc*this.cpc+fq*this.dpc*this.dpc;}if(this.ync){var ipc=this.pab.x*xl+this.pab.y*yl;if(ij.ceb(this.doc-this.boc)<2.0*fj.bkb){this.xoc=el.qnc;}else if(ipc<=this.boc){if(this.xoc!=el.onc){this.xoc=el.onc;this.xjc.y=0.0;}}else if(ipc>=this.doc){if(this.xoc!=el.pnc){this.xoc=el.pnc;this.xjc.y=0.0;}}else {this.xoc=el.nnc;this.xjc.y=0.0;}}else {this.xoc=el.nnc;}if(this.goc==false){this.unc=0.0;
}if(pyb.vzb){this.xjc.x*=pyb.ubc;this.xjc.y*=pyb.ubc;this.unc*=pyb.ubc;var jhc=this.xjc.x*this.snc.x+(this.unc+this.xjc.y)*this.pab.x;var khc=this.xjc.x*this.snc.y+(this.unc+this.xjc.y)*this.pab.y;var jpc=this.xjc.x*this.epc+(this.unc+this.xjc.y)*this.cpc;var kpc=this.xjc.x*this.fpc+(this.unc+this.xjc.y)*this.dpc;cdc.eob.x-=this.yoc*jhc;cdc.eob.y-=this.yoc*khc;cdc.eqb-=this.apc*jpc;ddc.eob.x+=this.zoc*jhc;ddc.eob.y+=this.zoc*khc;ddc.eqb+=this.bpc*kpc;}else {this.xjc.ct();this.unc=0.0;}};hl.prototype.tyb=function(pyb){
var cdc=this.bbc;var ddc=this.abc;var vt=cdc.eob;var hcb=cdc.eqb;var wt=ddc.eob;var icb=ddc.eqb;var jhc=0;var khc=0;var jpc=0;var kpc=0;if(this.goc&&this.xoc!=el.qnc){var vkc=this.pab.x*(wt.x-vt.x)+this.pab.y*(wt.y-vt.y)+this.dpc*icb-this.cpc*hcb;var grb=this.qoc*(this.joc-vkc);var slc=this.unc;var rlc=pyb.qyb*this.moc;this.unc=ij.qbb(this.unc+grb,(-rlc),rlc);grb=this.unc-slc;jhc=grb*this.pab.x;khc=grb*this.pab.y;jpc=grb*this.cpc;kpc=grb*this.dpc;vt.x-=this.yoc*jhc;vt.y-=this.yoc*khc;hcb-=this.apc*jpc;wt.x+=this.zoc*jhc;
wt.y+=this.zoc*khc;icb+=this.bpc*kpc;}var lpc=this.snc.x*(wt.x-vt.x)+this.snc.y*(wt.y-vt.y)+this.fpc*icb-this.epc*hcb;if(this.ync&&this.xoc!=el.nnc){var mpc=this.pab.x*(wt.x-vt.x)+this.pab.y*(wt.y-vt.y)+this.dpc*icb-this.cpc*hcb;var zdb=this.xjc.gu();var npc=this.tnc.vlb(new lj(),(-lpc),(-mpc));this.xjc.xnb(npc);if(this.xoc==el.onc){this.xjc.y=ij.ew(this.xjc.y,0.0);}else if(this.xoc==el.pnc){this.xjc.y=ij.anb(this.xjc.y,0.0);}var jn=(-lpc)-(this.xjc.y-zdb.y)*this.tnc.ap.x;var opc=0;if(this.tnc.zo.x!=0.0){
opc=jn/this.tnc.zo.x+zdb.x;}else {opc=zdb.x;}this.xjc.x=opc;npc.x=this.xjc.x-zdb.x;npc.y=this.xjc.y-zdb.y;jhc=npc.x*this.snc.x+npc.y*this.pab.x;khc=npc.x*this.snc.y+npc.y*this.pab.y;jpc=npc.x*this.epc+npc.y*this.cpc;kpc=npc.x*this.fpc+npc.y*this.dpc;vt.x-=this.yoc*jhc;vt.y-=this.yoc*khc;hcb-=this.apc*jpc;wt.x+=this.zoc*jhc;wt.y+=this.zoc*khc;icb+=this.bpc*kpc;}else {var ppc=0;if(this.tnc.zo.x!=0.0){ppc=((-lpc))/this.tnc.zo.x;}else {ppc=0.0;}this.xjc.x+=ppc;jhc=ppc*this.snc.x;khc=ppc*this.snc.y;jpc=ppc*this.epc;
kpc=ppc*this.fpc;vt.x-=this.yoc*jhc;vt.y-=this.yoc*khc;hcb-=this.apc*jpc;wt.x+=this.zoc*jhc;wt.y+=this.zoc*khc;icb+=this.bpc*kpc;}cdc.eob.js(vt);cdc.eqb=hcb;ddc.eob.js(wt);ddc.eqb=icb;};hl.prototype.bzb=function(kic){if(kic===undefined)kic=0;var qpc=0;var rpc=0;var cdc=this.bbc;var ddc=this.abc;var mlb=cdc.dob.c;var fnc=cdc.dob.bu;var nlb=ddc.dob.c;var gnc=ddc.dob.bu;var uo;var cq=0;var gpc=0;var hpc=0;var eq=0;var fq=0;var dnc=0.0;var spc=0.0;var stb=false;var tpc=0.0;var upc=gj.jlb(fnc);var vpc=gj.jlb(gnc);uo=upc;
var okc=this.tjc.x-this.hnc.x;var pkc=this.tjc.y-this.hnc.y;cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=vpc;var qkc=this.ujc.x-this.inc.x;var rkc=this.ujc.y-this.inc.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;var xl=nlb.x+qkc-mlb.x-okc;var yl=nlb.y+rkc-mlb.y-pkc;if(this.ync){this.pab=ij.lbb(upc,this.anc);this.cpc=(xl+okc)*this.pab.y-(yl+pkc)*this.pab.x;this.dpc=qkc*this.pab.y-rkc*this.pab.x;var vnc=this.pab.x*xl+this.pab.y*yl;if(ij.ceb(this.doc-this.boc)<2.0*fj.bkb){
tpc=ij.qbb(vnc,(-fj.ykb),fj.ykb);dnc=ij.ceb(vnc);stb=true;}else if(vnc<=this.boc){tpc=ij.qbb(vnc-this.boc+fj.bkb,(-fj.ykb),0.0);dnc=this.boc-vnc;stb=true;}else if(vnc>=this.doc){tpc=ij.qbb(vnc-this.doc+fj.bkb,0.0,fj.ykb);dnc=vnc-this.doc;stb=true;}}this.snc=ij.lbb(upc,this.rnc);this.epc=(xl+okc)*this.snc.y-(yl+pkc)*this.snc.x;this.fpc=qkc*this.snc.y-rkc*this.snc.x;var grb=new lj();var wpc=this.snc.x*xl+this.snc.y*yl;dnc=ij.ew(dnc,ij.ceb(wpc));spc=0.0;if(stb){gpc=this.yoc;hpc=this.zoc;eq=this.apc;fq=this.bpc;
this.tnc.zo.x=gpc+hpc+eq*this.epc*this.epc+fq*this.fpc*this.fpc;this.tnc.zo.y=eq*this.epc*this.cpc+fq*this.fpc*this.dpc;this.tnc.ap.x=this.tnc.zo.y;this.tnc.ap.y=gpc+hpc+eq*this.cpc*this.cpc+fq*this.dpc*this.dpc;this.tnc.vlb(grb,(-wpc),(-tpc));}else {gpc=this.yoc;hpc=this.zoc;eq=this.apc;fq=this.bpc;var dhc=gpc+hpc+eq*this.epc*this.epc+fq*this.fpc*this.fpc;var xpc=0;if(dhc!=0.0){xpc=((-wpc))/dhc;}else {xpc=0.0;}grb.x=xpc;grb.y=0.0;}var jhc=grb.x*this.snc.x+grb.y*this.pab.x;var khc=grb.x*this.snc.y+grb.y*this.pab.y;
var jpc=grb.x*this.epc+grb.y*this.cpc;var kpc=grb.x*this.fpc+grb.y*this.dpc;mlb.x-=this.yoc*jhc;mlb.y-=this.yoc*khc;fnc-=this.apc*jpc;nlb.x+=this.zoc*jhc;nlb.y+=this.zoc*khc;gnc+=this.bpc*kpc;cdc.dob.bu=fnc;ddc.dob.bu=gnc;cdc.xtb();ddc.xtb();return dnc<=fj.bkb&&spc<=fj.ukb;};ng.vg(il,ng.nh.rh.fl);il.prototype.__super=ng.nh.rh.fl.prototype;il.il=function(){ng.nh.rh.fl.fl.apply(this,arguments);this.ikc=new lj();this.jkc=new lj();this.poc=new lj();};il.prototype.il=function(){this.__super.fl.call(this);this.type=el.knc;
this.poc.bo(1.0,0.0);this.voc=false;this.roc=0.0;this.soc=0.0;this.woc=false;this.toc=0.0;this.uoc=0.0;};il.prototype.qab=function(cdc,ddc,anchor,swb){this.dvb=cdc;this.fvb=ddc;this.ikc=this.dvb.jsb(anchor);this.jkc=this.fvb.jsb(anchor);this.poc=this.dvb.lsb(swb);};ng.vg(jl,ng.nh.rh.el);jl.prototype.__super=ng.nh.rh.el.prototype;jl.jl=function(){ng.nh.rh.el.el.apply(this,arguments);this.ffc=new gj();this.ypc=new gj();this.zpc=new gj();this.aqc=new lj();this.bqc=new lj();this.xjc=new lj();this.xrb=new gj();
this.cqc=new lj();};jl.prototype.ydc=function(){return this.bqc;};jl.prototype.zdc=function(){return this.abc.fsb(this.aqc);};jl.prototype.wjc=function(xyb){if(xyb===undefined)xyb=0;return new lj(xyb*this.xjc.x,xyb*this.xjc.y);};jl.prototype.yjc=function(xyb){if(xyb===undefined)xyb=0;return 0.0;};jl.prototype.dqc=function(){return this.bqc;};jl.prototype.eqc=function(target){if(this.abc.arb()==false){this.abc.brb(true);}this.bqc=target;};jl.prototype.flc=function(){return this.elc;};jl.prototype.dlc=function(klc){
if(klc===undefined)klc=0;this.elc=klc;};jl.prototype.akc=function(){return this.bkc;};jl.prototype.ckc=function(dkc){if(dkc===undefined)dkc=0;this.bkc=dkc;};jl.prototype.ekc=function(){return this.fkc;};jl.prototype.gkc=function(hkc){if(hkc===undefined)hkc=0;this.fkc=hkc;};jl.prototype.jl=function(nob){this.__super.el.call(this,nob);this.bqc.js(nob.target);var cq=this.bqc.x-this.abc.cob.position.x;var ps=this.bqc.y-this.abc.cob.position.y;var uo=this.abc.cob.vo;this.aqc.x=(cq*uo.zo.x+ps*uo.zo.y);this.aqc.y=(cq*uo.ap.x+ps*uo.ap.y);
this.elc=nob.klc;this.xjc.ct();this.bkc=nob.kkc;this.fkc=nob.lkc;this.fqc=0.0;this.mkc=0.0;};jl.prototype.ryb=function(pyb){var jn=this.abc;var dfb=jn.wrb();var dqb=2.0*Math.PI*this.bkc;var qv=2.0*dfb*this.fkc*dqb;var agc=dfb*dqb*dqb;this.mkc=pyb.qyb*(qv+pyb.qyb*agc);this.mkc=this.mkc!=0?1/this.mkc:0.0;this.fqc=pyb.qyb*agc*this.mkc;var uo;uo=jn.cob.vo;var cab=this.aqc.x-jn.dob.pnb.x;var dab=this.aqc.y-jn.dob.pnb.y;var cq=(uo.zo.x*cab+uo.ap.x*dab);dab=(uo.zo.y*cab+uo.ap.y*dab);cab=cq;var ukc=jn.hrb;var gqc=jn.irb;
this.ypc.zo.x=ukc;this.ypc.ap.x=0.0;this.ypc.zo.y=0.0;this.ypc.ap.y=ukc;this.zpc.zo.x=gqc*dab*dab;this.zpc.ap.x=(-gqc*cab*dab);this.zpc.zo.y=(-gqc*cab*dab);this.zpc.ap.y=gqc*cab*cab;this.ffc.plb(this.ypc);this.ffc.qlb(this.zpc);this.ffc.zo.x+=this.mkc;this.ffc.ap.y+=this.mkc;this.ffc.slb(this.xrb);this.cqc.x=jn.dob.c.x+cab-this.bqc.x;this.cqc.y=jn.dob.c.y+dab-this.bqc.y;jn.eqb*=0.98;this.xjc.x*=pyb.ubc;this.xjc.y*=pyb.ubc;jn.eob.x+=ukc*this.xjc.x;jn.eob.y+=ukc*this.xjc.y;jn.eqb+=gqc*(cab*this.xjc.y-dab*this.xjc.x);
};jl.prototype.tyb=function(pyb){var jn=this.abc;var uo;var cq=0;var ps=0;uo=jn.cob.vo;var cab=this.aqc.x-jn.dob.pnb.x;var dab=this.aqc.y-jn.dob.pnb.y;cq=(uo.zo.x*cab+uo.ap.x*dab);dab=(uo.zo.y*cab+uo.ap.y*dab);cab=cq;var tlc=jn.eob.x+((-jn.eqb*dab));var ulc=jn.eob.y+(jn.eqb*cab);uo=this.xrb;cq=tlc+this.fqc*this.cqc.x+this.mkc*this.xjc.x;ps=ulc+this.fqc*this.cqc.y+this.mkc*this.xjc.y;var hqc=(-(uo.zo.x*cq+uo.ap.x*ps));var iqc=(-(uo.zo.y*cq+uo.ap.y*ps));var jqc=this.xjc.x;var kqc=this.xjc.y;this.xjc.x+=hqc;this.xjc.y+=iqc;
var rlc=pyb.qyb*this.elc;if(this.xjc.hv()>rlc*rlc){this.xjc.fjb(rlc/this.xjc.jw());}hqc=this.xjc.x-jqc;iqc=this.xjc.y-kqc;jn.eob.x+=jn.hrb*hqc;jn.eob.y+=jn.hrb*iqc;jn.eqb+=jn.irb*(cab*iqc-dab*hqc);};jl.prototype.bzb=function(kic){if(kic===undefined)kic=0;return true;};ng.vg(kl,ng.nh.rh.fl);kl.prototype.__super=ng.nh.rh.fl.prototype;kl.kl=function(){ng.nh.rh.fl.fl.apply(this,arguments);this.target=new lj();};kl.prototype.kl=function(){this.__super.fl.call(this);this.type=el.gec;this.klc=0.0;this.kkc=5.0;
this.lkc=0.7;};ng.vg(ll,ng.nh.rh.el);ll.prototype.__super=ng.nh.rh.el.prototype;ll.ll=function(){ng.nh.rh.el.el.apply(this,arguments);this.tjc=new lj();this.ujc=new lj();this.anc=new lj();this.rnc=new lj();this.pab=new lj();this.snc=new lj();this.tnc=new hj();this.xjc=new mj();};ll.prototype.ydc=function(){return this.bbc.fsb(this.tjc);};ll.prototype.zdc=function(){return this.abc.fsb(this.ujc);};ll.prototype.wjc=function(xyb){if(xyb===undefined)xyb=0;return new lj(xyb*(this.xjc.x*this.snc.x+(this.unc+this.xjc.dmb)*this.pab.x),
xyb*(this.xjc.x*this.snc.y+(this.unc+this.xjc.dmb)*this.pab.y));};ll.prototype.yjc=function(xyb){if(xyb===undefined)xyb=0;return xyb*this.xjc.y;};ll.prototype.rmc=function(){var cdc=this.bbc;var ddc=this.abc;var uo;var lm=cdc.fsb(this.tjc);var nm=ddc.fsb(this.ujc);var xl=nm.x-lm.x;var yl=nm.y-lm.y;var swb=cdc.hsb(this.anc);var vnc=swb.x*xl+swb.y*yl;return vnc;};ll.prototype.wnc=function(){var cdc=this.bbc;var ddc=this.abc;var uo;uo=cdc.cob.vo;var okc=this.tjc.x-cdc.dob.pnb.x;var pkc=this.tjc.y-cdc.dob.pnb.y;var cq=(uo.zo.x*okc+uo.ap.x*pkc);
pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=ddc.cob.vo;var qkc=this.ujc.x-ddc.dob.pnb.x;var rkc=this.ujc.y-ddc.dob.pnb.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;var vs=cdc.dob.c.x+okc;var ws=cdc.dob.c.y+pkc;var xs=ddc.dob.c.x+qkc;var ys=ddc.dob.c.y+rkc;var xl=xs-vs;var yl=ys-ws;var swb=cdc.hsb(this.anc);var vt=cdc.eob;var wt=ddc.eob;var hcb=cdc.eqb;var icb=ddc.eqb;var speed=(xl*((-hcb*swb.y))+yl*(hcb*swb.x))+(swb.x*(((wt.x+((-icb*rkc)))-vt.x)-((-hcb*pkc)))+swb.y*(((wt.y+(icb*qkc))-vt.y)-(hcb*okc)));
return speed;};ll.prototype.xnc=function(){return this.ync;};ll.prototype.znc=function(xsb){this.bbc.brb(true);this.abc.brb(true);this.ync=xsb;};ll.prototype.aoc=function(){return this.boc;};ll.prototype.coc=function(){return this.doc;};ll.prototype.eoc=function(qhb,rhb){if(qhb===undefined)qhb=0;if(rhb===undefined)rhb=0;this.bbc.brb(true);this.abc.brb(true);this.boc=qhb;this.doc=rhb;};ll.prototype.foc=function(){return this.goc;};ll.prototype.hoc=function(xsb){this.bbc.brb(true);this.abc.brb(true);this.goc=xsb;
};ll.prototype.ioc=function(speed){if(speed===undefined)speed=0;this.bbc.brb(true);this.abc.brb(true);this.joc=speed;};ll.prototype.koc=function(){return this.joc;};ll.prototype.loc=function(xqb){if(xqb===undefined)xqb=0;this.bbc.brb(true);this.abc.brb(true);this.moc=xqb;};ll.prototype.ooc=function(){return this.unc;};ll.prototype.ll=function(nob){this.__super.el.call(this,nob);var uo;var cq=0;var ps=0;this.tjc.js(nob.ikc);this.ujc.js(nob.jkc);this.anc.js(nob.poc);this.rnc.x=(-this.anc.y);this.rnc.y=this.anc.x;
this.lqc=nob.mqc;this.xjc.ct();this.qoc=0.0;this.unc=0.0;this.boc=nob.roc;this.doc=nob.soc;this.moc=nob.toc;this.joc=nob.uoc;this.ync=nob.voc;this.goc=nob.woc;this.xoc=el.nnc;this.pab.ct();this.snc.ct();};ll.prototype.ryb=function(pyb){var cdc=this.bbc;var ddc=this.abc;var uo;var cq=0;this.hnc.js(cdc.ypb());this.inc.js(ddc.ypb());var io=cdc.rdb();var lo=ddc.rdb();uo=cdc.cob.vo;var okc=this.tjc.x-this.hnc.x;var pkc=this.tjc.y-this.hnc.y;cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=ddc.cob.vo;
var qkc=this.ujc.x-this.inc.x;var rkc=this.ujc.y-this.inc.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;var xl=ddc.dob.c.x+qkc-cdc.dob.c.x-okc;var yl=ddc.dob.c.y+rkc-cdc.dob.c.y-pkc;this.yoc=cdc.hrb;this.zoc=ddc.hrb;this.apc=cdc.irb;this.bpc=ddc.irb;{this.pab.js(ij.lbb(io.vo,this.anc));this.cpc=(xl+okc)*this.pab.y-(yl+pkc)*this.pab.x;this.dpc=qkc*this.pab.y-rkc*this.pab.x;this.qoc=this.yoc+this.zoc+this.apc*this.cpc*this.cpc+this.bpc*this.dpc*this.dpc;if(this.qoc>Number.MIN_VALUE)this.qoc=1.0/this.qoc;
}{this.snc.js(ij.lbb(io.vo,this.rnc));this.epc=(xl+okc)*this.snc.y-(yl+pkc)*this.snc.x;this.fpc=qkc*this.snc.y-rkc*this.snc.x;var gpc=this.yoc;var hpc=this.zoc;var eq=this.apc;var fq=this.bpc;this.tnc.zo.x=gpc+hpc+eq*this.epc*this.epc+fq*this.fpc*this.fpc;this.tnc.zo.y=eq*this.epc+fq*this.fpc;this.tnc.zo.dmb=eq*this.epc*this.cpc+fq*this.fpc*this.dpc;this.tnc.ap.x=this.tnc.zo.y;this.tnc.ap.y=eq+fq;this.tnc.ap.dmb=eq*this.cpc+fq*this.dpc;this.tnc.amb.x=this.tnc.zo.dmb;this.tnc.amb.y=this.tnc.ap.dmb;this.tnc.amb.dmb=gpc+hpc+eq*this.cpc*this.cpc+fq*this.dpc*this.dpc;
}if(this.ync){var ipc=this.pab.x*xl+this.pab.y*yl;if(ij.ceb(this.doc-this.boc)<2.0*fj.bkb){this.xoc=el.qnc;}else if(ipc<=this.boc){if(this.xoc!=el.onc){this.xoc=el.onc;this.xjc.dmb=0.0;}}else if(ipc>=this.doc){if(this.xoc!=el.pnc){this.xoc=el.pnc;this.xjc.dmb=0.0;}}else {this.xoc=el.nnc;this.xjc.dmb=0.0;}}else {this.xoc=el.nnc;}if(this.goc==false){this.unc=0.0;}if(pyb.vzb){this.xjc.x*=pyb.ubc;this.xjc.y*=pyb.ubc;this.unc*=pyb.ubc;var jhc=this.xjc.x*this.snc.x+(this.unc+this.xjc.dmb)*this.pab.x;var khc=this.xjc.x*this.snc.y+(this.unc+this.xjc.dmb)*this.pab.y;
var jpc=this.xjc.x*this.epc+this.xjc.y+(this.unc+this.xjc.dmb)*this.cpc;var kpc=this.xjc.x*this.fpc+this.xjc.y+(this.unc+this.xjc.dmb)*this.dpc;cdc.eob.x-=this.yoc*jhc;cdc.eob.y-=this.yoc*khc;cdc.eqb-=this.apc*jpc;ddc.eob.x+=this.zoc*jhc;ddc.eob.y+=this.zoc*khc;ddc.eqb+=this.bpc*kpc;}else {this.xjc.ct();this.unc=0.0;}};ll.prototype.tyb=function(pyb){var cdc=this.bbc;var ddc=this.abc;var vt=cdc.eob;var hcb=cdc.eqb;var wt=ddc.eob;var icb=ddc.eqb;var jhc=0;var khc=0;var jpc=0;var kpc=0;if(this.goc&&this.xoc!=el.qnc){
var vkc=this.pab.x*(wt.x-vt.x)+this.pab.y*(wt.y-vt.y)+this.dpc*icb-this.cpc*hcb;var grb=this.qoc*(this.joc-vkc);var slc=this.unc;var rlc=pyb.qyb*this.moc;this.unc=ij.qbb(this.unc+grb,(-rlc),rlc);grb=this.unc-slc;jhc=grb*this.pab.x;khc=grb*this.pab.y;jpc=grb*this.cpc;kpc=grb*this.dpc;vt.x-=this.yoc*jhc;vt.y-=this.yoc*khc;hcb-=this.apc*jpc;wt.x+=this.zoc*jhc;wt.y+=this.zoc*khc;icb+=this.bpc*kpc;}var nqc=this.snc.x*(wt.x-vt.x)+this.snc.y*(wt.y-vt.y)+this.fpc*icb-this.epc*hcb;var oqc=icb-hcb;if(this.ync&&this.xoc!=el.nnc){
var mpc=this.pab.x*(wt.x-vt.x)+this.pab.y*(wt.y-vt.y)+this.dpc*icb-this.cpc*hcb;var zdb=this.xjc.gu();var npc=this.tnc.fmb(new mj(),(-nqc),(-oqc),(-mpc));this.xjc.xnb(npc);if(this.xoc==el.onc){this.xjc.dmb=ij.ew(this.xjc.dmb,0.0);}else if(this.xoc==el.pnc){this.xjc.dmb=ij.anb(this.xjc.dmb,0.0);}var iab=(-nqc)-(this.xjc.dmb-zdb.dmb)*this.tnc.amb.x;var jab=(-oqc)-(this.xjc.dmb-zdb.dmb)*this.tnc.amb.y;var opc=this.tnc.emb(new lj(),iab,jab);opc.x+=zdb.x;opc.y+=zdb.y;this.xjc.x=opc.x;this.xjc.y=opc.y;npc.x=this.xjc.x-zdb.x;
npc.y=this.xjc.y-zdb.y;npc.dmb=this.xjc.dmb-zdb.dmb;jhc=npc.x*this.snc.x+npc.dmb*this.pab.x;khc=npc.x*this.snc.y+npc.dmb*this.pab.y;jpc=npc.x*this.epc+npc.y+npc.dmb*this.cpc;kpc=npc.x*this.fpc+npc.y+npc.dmb*this.dpc;vt.x-=this.yoc*jhc;vt.y-=this.yoc*khc;hcb-=this.apc*jpc;wt.x+=this.zoc*jhc;wt.y+=this.zoc*khc;icb+=this.bpc*kpc;}else {var ppc=this.tnc.emb(new lj(),(-nqc),(-oqc));this.xjc.x+=ppc.x;this.xjc.y+=ppc.y;jhc=ppc.x*this.snc.x;khc=ppc.x*this.snc.y;jpc=ppc.x*this.epc+ppc.y;kpc=ppc.x*this.fpc+ppc.y;
vt.x-=this.yoc*jhc;vt.y-=this.yoc*khc;hcb-=this.apc*jpc;wt.x+=this.zoc*jhc;wt.y+=this.zoc*khc;icb+=this.bpc*kpc;}cdc.eob.js(vt);cdc.eqb=hcb;ddc.eob.js(wt);ddc.eqb=icb;};ll.prototype.bzb=function(kic){if(kic===undefined)kic=0;var qpc=0;var rpc=0;var cdc=this.bbc;var ddc=this.abc;var mlb=cdc.dob.c;var fnc=cdc.dob.bu;var nlb=ddc.dob.c;var gnc=ddc.dob.bu;var uo;var cq=0;var gpc=0;var hpc=0;var eq=0;var fq=0;var dnc=0.0;var spc=0.0;var stb=false;var tpc=0.0;var upc=gj.jlb(fnc);var vpc=gj.jlb(gnc);uo=upc;var okc=this.tjc.x-this.hnc.x;
var pkc=this.tjc.y-this.hnc.y;cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=vpc;var qkc=this.ujc.x-this.inc.x;var rkc=this.ujc.y-this.inc.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;var xl=nlb.x+qkc-mlb.x-okc;var yl=nlb.y+rkc-mlb.y-pkc;if(this.ync){this.pab=ij.lbb(upc,this.anc);this.cpc=(xl+okc)*this.pab.y-(yl+pkc)*this.pab.x;this.dpc=qkc*this.pab.y-rkc*this.pab.x;var vnc=this.pab.x*xl+this.pab.y*yl;if(ij.ceb(this.doc-this.boc)<2.0*fj.bkb){tpc=ij.qbb(vnc,
(-fj.ykb),fj.ykb);dnc=ij.ceb(vnc);stb=true;}else if(vnc<=this.boc){tpc=ij.qbb(vnc-this.boc+fj.bkb,(-fj.ykb),0.0);dnc=this.boc-vnc;stb=true;}else if(vnc>=this.doc){tpc=ij.qbb(vnc-this.doc+fj.bkb,0.0,fj.ykb);dnc=vnc-this.doc;stb=true;}}this.snc=ij.lbb(upc,this.rnc);this.epc=(xl+okc)*this.snc.y-(yl+pkc)*this.snc.x;this.fpc=qkc*this.snc.y-rkc*this.snc.x;var grb=new mj();var pqc=this.snc.x*xl+this.snc.y*yl;var qqc=gnc-fnc-this.lqc;dnc=ij.ew(dnc,ij.ceb(pqc));spc=ij.ceb(qqc);if(stb){gpc=this.yoc;hpc=this.zoc;
eq=this.apc;fq=this.bpc;this.tnc.zo.x=gpc+hpc+eq*this.epc*this.epc+fq*this.fpc*this.fpc;this.tnc.zo.y=eq*this.epc+fq*this.fpc;this.tnc.zo.dmb=eq*this.epc*this.cpc+fq*this.fpc*this.dpc;this.tnc.ap.x=this.tnc.zo.y;this.tnc.ap.y=eq+fq;this.tnc.ap.dmb=eq*this.cpc+fq*this.dpc;this.tnc.amb.x=this.tnc.zo.dmb;this.tnc.amb.y=this.tnc.ap.dmb;this.tnc.amb.dmb=gpc+hpc+eq*this.cpc*this.cpc+fq*this.dpc*this.dpc;this.tnc.fmb(grb,(-pqc),(-qqc),(-tpc));}else {gpc=this.yoc;hpc=this.zoc;eq=this.apc;fq=this.bpc;var dhc=gpc+hpc+eq*this.epc*this.epc+fq*this.fpc*this.fpc;
var fhc=eq*this.epc+fq*this.fpc;var ehc=eq+fq;this.tnc.zo.bo(dhc,fhc,0.0);this.tnc.ap.bo(fhc,ehc,0.0);var xpc=this.tnc.emb(new lj(),(-pqc),(-qqc));grb.x=xpc.x;grb.y=xpc.y;grb.dmb=0.0;}var jhc=grb.x*this.snc.x+grb.dmb*this.pab.x;var khc=grb.x*this.snc.y+grb.dmb*this.pab.y;var jpc=grb.x*this.epc+grb.y+grb.dmb*this.cpc;var kpc=grb.x*this.fpc+grb.y+grb.dmb*this.dpc;mlb.x-=this.yoc*jhc;mlb.y-=this.yoc*khc;fnc-=this.apc*jpc;nlb.x+=this.zoc*jhc;nlb.y+=this.zoc*khc;gnc+=this.bpc*kpc;cdc.dob.bu=fnc;ddc.dob.bu=gnc;
cdc.xtb();ddc.xtb();return dnc<=fj.bkb&&spc<=fj.ukb;};ng.vg(ml,ng.nh.rh.fl);ml.prototype.__super=ng.nh.rh.fl.prototype;ml.ml=function(){ng.nh.rh.fl.fl.apply(this,arguments);this.ikc=new lj();this.jkc=new lj();this.poc=new lj();};ml.prototype.ml=function(){this.__super.fl.call(this);this.type=el.jnc;this.poc.bo(1.0,0.0);this.mqc=0.0;this.voc=false;this.roc=0.0;this.soc=0.0;this.woc=false;this.toc=0.0;this.uoc=0.0;};ml.prototype.qab=function(cdc,ddc,anchor,swb){this.dvb=cdc;this.fvb=ddc;this.ikc=this.dvb.jsb(anchor);
this.jkc=this.fvb.jsb(anchor);this.poc=this.dvb.lsb(swb);this.mqc=this.fvb.rlb()-this.dvb.rlb();};ng.vg(nl,ng.nh.rh.el);nl.prototype.__super=ng.nh.rh.el.prototype;nl.nl=function(){ng.nh.rh.el.el.apply(this,arguments);this.ylc=new lj();this.zlc=new lj();this.tjc=new lj();this.ujc=new lj();this.rqc=new lj();this.sqc=new lj();};nl.prototype.ydc=function(){return this.bbc.fsb(this.tjc);};nl.prototype.zdc=function(){return this.abc.fsb(this.ujc);};nl.prototype.wjc=function(xyb){if(xyb===undefined)xyb=0;return new lj(xyb*this.xjc*this.sqc.x,
xyb*this.xjc*this.sqc.y);};nl.prototype.yjc=function(xyb){if(xyb===undefined)xyb=0;return 0.0;};nl.prototype.eec=function(){var bu=this.tqc.cob.position.gu();bu.xnb(this.ylc);return bu;};nl.prototype.fec=function(){var bu=this.tqc.cob.position.gu();bu.xnb(this.zlc);return bu;};nl.prototype.uqc=function(){var qg=this.bbc.fsb(this.tjc);var veb=this.tqc.cob.position.x+this.ylc.x;var web=this.tqc.cob.position.y+this.ylc.y;var xl=qg.x-veb;var yl=qg.y-web;return Math.sqrt(xl*xl+yl*yl);};nl.prototype.vqc=function(){
var qg=this.abc.fsb(this.ujc);var veb=this.tqc.cob.position.x+this.zlc.x;var web=this.tqc.cob.position.y+this.zlc.y;var xl=qg.x-veb;var yl=qg.y-web;return Math.sqrt(xl*xl+yl*yl);};nl.prototype.dmc=function(){return this.emc;};nl.prototype.nl=function(nob){this.__super.el.call(this,nob);var uo;var cq=0;var ps=0;this.tqc=this.bbc.oob.hac;this.ylc.x=nob.wqc.x-this.tqc.cob.position.x;this.ylc.y=nob.wqc.y-this.tqc.cob.position.y;this.zlc.x=nob.xqc.x-this.tqc.cob.position.x;this.zlc.y=nob.xqc.y-this.tqc.cob.position.y;
this.tjc.js(nob.ikc);this.ujc.js(nob.jkc);this.emc=nob.hkc;this.tmc=nob.yqc+this.emc*nob.zqc;this.brc=ij.anb(nob.crc,this.tmc-this.emc*nl.drc);this.erc=ij.anb(nob.frc,(this.tmc-nl.drc)/this.emc);this.xjc=0.0;this.grc=0.0;this.hrc=0.0;};nl.prototype.ryb=function(pyb){var cdc=this.bbc;var ddc=this.abc;var uo;uo=cdc.cob.vo;var okc=this.tjc.x-cdc.dob.pnb.x;var pkc=this.tjc.y-cdc.dob.pnb.y;var cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=ddc.cob.vo;var qkc=this.ujc.x-ddc.dob.pnb.x;var rkc=this.ujc.y-ddc.dob.pnb.y;
cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;var vs=cdc.dob.c.x+okc;var ws=cdc.dob.c.y+pkc;var xs=ddc.dob.c.x+qkc;var ys=ddc.dob.c.y+rkc;var irc=this.tqc.cob.position.x+this.ylc.x;var jrc=this.tqc.cob.position.y+this.ylc.y;var krc=this.tqc.cob.position.x+this.zlc.x;var lrc=this.tqc.cob.position.y+this.zlc.y;this.rqc.bo(vs-irc,ws-jrc);this.sqc.bo(xs-krc,ys-lrc);var mrc=this.rqc.jw();var nrc=this.sqc.jw();if(mrc>fj.bkb){this.rqc.fjb(1.0/mrc);}else {this.rqc.ct();}if(nrc>fj.bkb){this.sqc.fjb(1.0/nrc);
}else {this.sqc.ct();}var wmb=this.tmc-mrc-this.emc*nrc;if(wmb>0.0){this.orc=el.nnc;this.xjc=0.0;}else {this.orc=el.pnc;}if(mrc<this.brc){this.prc=el.nnc;this.grc=0.0;}else {this.prc=el.pnc;}if(nrc<this.erc){this.qrc=el.nnc;this.hrc=0.0;}else {this.qrc=el.pnc;}var rrc=okc*this.rqc.y-pkc*this.rqc.x;var trc=qkc*this.sqc.y-rkc*this.sqc.x;this.urc=cdc.hrb+cdc.irb*rrc*rrc;this.vrc=ddc.hrb+ddc.irb*trc*trc;this.wrc=this.urc+this.emc*this.emc*this.vrc;this.urc=1.0/this.urc;this.vrc=1.0/this.vrc;this.wrc=1.0/this.wrc;
if(pyb.vzb){this.xjc*=pyb.ubc;this.grc*=pyb.ubc;this.hrc*=pyb.ubc;var rhc=((-this.xjc)-this.grc)*this.rqc.x;var shc=((-this.xjc)-this.grc)*this.rqc.y;var thc=((-this.emc*this.xjc)-this.hrc)*this.sqc.x;var uhc=((-this.emc*this.xjc)-this.hrc)*this.sqc.y;cdc.eob.x+=cdc.hrb*rhc;cdc.eob.y+=cdc.hrb*shc;cdc.eqb+=cdc.irb*(okc*shc-pkc*rhc);ddc.eob.x+=ddc.hrb*thc;ddc.eob.y+=ddc.hrb*uhc;ddc.eqb+=ddc.irb*(qkc*uhc-rkc*thc);}else {this.xjc=0.0;this.grc=0.0;this.hrc=0.0;}};nl.prototype.tyb=function(pyb){var cdc=this.bbc;
var ddc=this.abc;var uo;uo=cdc.cob.vo;var okc=this.tjc.x-cdc.dob.pnb.x;var pkc=this.tjc.y-cdc.dob.pnb.y;var cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=ddc.cob.vo;var qkc=this.ujc.x-ddc.dob.pnb.x;var rkc=this.ujc.y-ddc.dob.pnb.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;var gp=0;var hp=0;var ip=0;var jp=0;var rhc=0;var shc=0;var thc=0;var uhc=0;var vkc=0;var grb=0;var slc=0;if(this.orc==el.pnc){gp=cdc.eob.x+((-cdc.eqb*pkc));hp=cdc.eob.y+(cdc.eqb*okc);ip=ddc.eob.x+((-ddc.eqb*rkc));
jp=ddc.eob.y+(ddc.eqb*qkc);vkc=(-(this.rqc.x*gp+this.rqc.y*hp))-this.emc*(this.sqc.x*ip+this.sqc.y*jp);grb=this.wrc*((-vkc));slc=this.xjc;this.xjc=ij.ew(0.0,this.xjc+grb);grb=this.xjc-slc;rhc=(-grb*this.rqc.x);shc=(-grb*this.rqc.y);thc=(-this.emc*grb*this.sqc.x);uhc=(-this.emc*grb*this.sqc.y);cdc.eob.x+=cdc.hrb*rhc;cdc.eob.y+=cdc.hrb*shc;cdc.eqb+=cdc.irb*(okc*shc-pkc*rhc);ddc.eob.x+=ddc.hrb*thc;ddc.eob.y+=ddc.hrb*uhc;ddc.eqb+=ddc.irb*(qkc*uhc-rkc*thc);}if(this.prc==el.pnc){gp=cdc.eob.x+((-cdc.eqb*pkc));
hp=cdc.eob.y+(cdc.eqb*okc);vkc=(-(this.rqc.x*gp+this.rqc.y*hp));grb=(-this.urc*vkc);slc=this.grc;this.grc=ij.ew(0.0,this.grc+grb);grb=this.grc-slc;rhc=(-grb*this.rqc.x);shc=(-grb*this.rqc.y);cdc.eob.x+=cdc.hrb*rhc;cdc.eob.y+=cdc.hrb*shc;cdc.eqb+=cdc.irb*(okc*shc-pkc*rhc);}if(this.qrc==el.pnc){ip=ddc.eob.x+((-ddc.eqb*rkc));jp=ddc.eob.y+(ddc.eqb*qkc);vkc=(-(this.sqc.x*ip+this.sqc.y*jp));grb=(-this.vrc*vkc);slc=this.hrc;this.hrc=ij.ew(0.0,this.hrc+grb);grb=this.hrc-slc;thc=(-grb*this.sqc.x);uhc=(-grb*this.sqc.y);
ddc.eob.x+=ddc.hrb*thc;ddc.eob.y+=ddc.hrb*uhc;ddc.eqb+=ddc.irb*(qkc*uhc-rkc*thc);}};nl.prototype.bzb=function(kic){if(kic===undefined)kic=0;var cdc=this.bbc;var ddc=this.abc;var uo;var irc=this.tqc.cob.position.x+this.ylc.x;var jrc=this.tqc.cob.position.y+this.ylc.y;var krc=this.tqc.cob.position.x+this.zlc.x;var lrc=this.tqc.cob.position.y+this.zlc.y;var okc=0;var pkc=0;var qkc=0;var rkc=0;var vs=0;var ws=0;var xs=0;var ys=0;var mrc=0;var nrc=0;var wmb=0;var grb=0;var slc=0;var xrc=0;var cq=0;var dnc=0.0;if(this.orc==el.pnc){
uo=cdc.cob.vo;okc=this.tjc.x-cdc.dob.pnb.x;pkc=this.tjc.y-cdc.dob.pnb.y;cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=ddc.cob.vo;qkc=this.ujc.x-ddc.dob.pnb.x;rkc=this.ujc.y-ddc.dob.pnb.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;vs=cdc.dob.c.x+okc;ws=cdc.dob.c.y+pkc;xs=ddc.dob.c.x+qkc;ys=ddc.dob.c.y+rkc;this.rqc.bo(vs-irc,ws-jrc);this.sqc.bo(xs-krc,ys-lrc);mrc=this.rqc.jw();nrc=this.sqc.jw();if(mrc>fj.bkb){this.rqc.fjb(1.0/mrc);}else {this.rqc.ct();}
if(nrc>fj.bkb){this.sqc.fjb(1.0/nrc);}else {this.sqc.ct();}wmb=this.tmc-mrc-this.emc*nrc;dnc=ij.ew(dnc,(-wmb));wmb=ij.qbb(wmb+fj.bkb,(-fj.ykb),0.0);grb=(-this.wrc*wmb);vs=(-grb*this.rqc.x);ws=(-grb*this.rqc.y);xs=(-this.emc*grb*this.sqc.x);ys=(-this.emc*grb*this.sqc.y);cdc.dob.c.x+=cdc.hrb*vs;cdc.dob.c.y+=cdc.hrb*ws;cdc.dob.bu+=cdc.irb*(okc*ws-pkc*vs);ddc.dob.c.x+=ddc.hrb*xs;ddc.dob.c.y+=ddc.hrb*ys;ddc.dob.bu+=ddc.irb*(qkc*ys-rkc*xs);cdc.xtb();ddc.xtb();}if(this.prc==el.pnc){uo=cdc.cob.vo;okc=this.tjc.x-cdc.dob.pnb.x;
pkc=this.tjc.y-cdc.dob.pnb.y;cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;vs=cdc.dob.c.x+okc;ws=cdc.dob.c.y+pkc;this.rqc.bo(vs-irc,ws-jrc);mrc=this.rqc.jw();if(mrc>fj.bkb){this.rqc.x*=1.0/mrc;this.rqc.y*=1.0/mrc;}else {this.rqc.ct();}wmb=this.brc-mrc;dnc=ij.ew(dnc,(-wmb));wmb=ij.qbb(wmb+fj.bkb,(-fj.ykb),0.0);grb=(-this.urc*wmb);vs=(-grb*this.rqc.x);ws=(-grb*this.rqc.y);cdc.dob.c.x+=cdc.hrb*vs;cdc.dob.c.y+=cdc.hrb*ws;cdc.dob.bu+=cdc.irb*(okc*ws-pkc*vs);cdc.xtb();}if(this.qrc==el.pnc){
uo=ddc.cob.vo;qkc=this.ujc.x-ddc.dob.pnb.x;rkc=this.ujc.y-ddc.dob.pnb.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;xs=ddc.dob.c.x+qkc;ys=ddc.dob.c.y+rkc;this.sqc.bo(xs-krc,ys-lrc);nrc=this.sqc.jw();if(nrc>fj.bkb){this.sqc.x*=1.0/nrc;this.sqc.y*=1.0/nrc;}else {this.sqc.ct();}wmb=this.erc-nrc;dnc=ij.ew(dnc,(-wmb));wmb=ij.qbb(wmb+fj.bkb,(-fj.ykb),0.0);grb=(-this.vrc*wmb);xs=(-grb*this.sqc.x);ys=(-grb*this.sqc.y);ddc.dob.c.x+=ddc.hrb*xs;ddc.dob.c.y+=ddc.hrb*ys;ddc.dob.bu+=ddc.irb*(qkc*ys-rkc*xs);
ddc.xtb();}return dnc<fj.bkb;};ng.tl.push(function(){ng.nh.rh.nl.drc=2.0;});ng.vg(ol,ng.nh.rh.fl);ol.prototype.__super=ng.nh.rh.fl.prototype;ol.ol=function(){ng.nh.rh.fl.fl.apply(this,arguments);this.wqc=new lj();this.xqc=new lj();this.ikc=new lj();this.jkc=new lj();};ol.prototype.ol=function(){this.__super.fl.call(this);this.type=el.cec;this.wqc.bo((-1.0),1.0);this.xqc.bo(1.0,1.0);this.ikc.bo((-1.0),0.0);this.jkc.bo(1.0,0.0);this.yqc=0.0;this.crc=0.0;this.zqc=0.0;this.frc=0.0;this.hkc=1.0;this.dbc=true;
};ol.prototype.qab=function(cdc,ddc,yrc,zrc,wkc,xkc,lq){if(lq===undefined)lq=0;this.dvb=cdc;this.fvb=ddc;this.wqc.js(yrc);this.xqc.js(zrc);this.ikc=this.dvb.jsb(wkc);this.jkc=this.fvb.jsb(xkc);var ym=wkc.x-yrc.x;var zm=wkc.y-yrc.y;this.yqc=Math.sqrt(ym*ym+zm*zm);var an=xkc.x-zrc.x;var bn=xkc.y-zrc.y;this.zqc=Math.sqrt(an*an+bn*bn);this.hkc=lq;var wmb=this.yqc+this.hkc*this.zqc;this.crc=wmb-this.hkc*nl.drc;this.frc=(wmb-nl.drc)/this.hkc;};ng.vg(pl,ng.nh.rh.el);pl.prototype.__super=ng.nh.rh.el.prototype;
pl.pl=function(){ng.nh.rh.el.el.apply(this,arguments);this.ffc=new gj();this.ypc=new gj();this.zpc=new gj();this.asc=new gj();this.bsc=new mj();this.csc=new lj();this.dsc=new lj();this.tjc=new lj();this.ujc=new lj();this.xjc=new mj();this.xrb=new hj();};pl.prototype.ydc=function(){return this.bbc.fsb(this.tjc);};pl.prototype.zdc=function(){return this.abc.fsb(this.ujc);};pl.prototype.wjc=function(xyb){if(xyb===undefined)xyb=0;return new lj(xyb*this.xjc.x,xyb*this.xjc.y);};pl.prototype.yjc=function(xyb){if(xyb===undefined)xyb=0;
return xyb*this.xjc.dmb;};pl.prototype.qmc=function(){return this.abc.dob.bu-this.bbc.dob.bu-this.esc;};pl.prototype.wnc=function(){return this.abc.eqb-this.bbc.eqb;};pl.prototype.xnc=function(){return this.ync;};pl.prototype.znc=function(xsb){this.ync=xsb;};pl.prototype.aoc=function(){return this.fsc;};pl.prototype.coc=function(){return this.gsc;};pl.prototype.eoc=function(qhb,rhb){if(qhb===undefined)qhb=0;if(rhb===undefined)rhb=0;this.fsc=qhb;this.gsc=rhb;};pl.prototype.foc=function(){this.bbc.brb(true);
this.abc.brb(true);return this.goc;};pl.prototype.hoc=function(xsb){this.goc=xsb;};pl.prototype.ioc=function(speed){if(speed===undefined)speed=0;this.bbc.brb(true);this.abc.brb(true);this.joc=speed;};pl.prototype.koc=function(){return this.joc;};pl.prototype.hsc=function(erb){if(erb===undefined)erb=0;this.isc=erb;};pl.prototype.jsc=function(){return this.isc;};pl.prototype.pl=function(nob){this.__super.el.call(this,nob);this.tjc.js(nob.ikc);this.ujc.js(nob.jkc);this.esc=nob.mqc;this.xjc.ct();this.unc=0.0;
this.fsc=nob.ksc;this.gsc=nob.lsc;this.isc=nob.msc;this.joc=nob.uoc;this.ync=nob.voc;this.goc=nob.woc;this.xoc=el.nnc;};pl.prototype.ryb=function(pyb){var cdc=this.bbc;var ddc=this.abc;var uo;var cq=0;if(this.goc||this.ync){}uo=cdc.cob.vo;var okc=this.tjc.x-cdc.dob.pnb.x;var pkc=this.tjc.y-cdc.dob.pnb.y;cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=ddc.cob.vo;var qkc=this.ujc.x-ddc.dob.pnb.x;var rkc=this.ujc.y-ddc.dob.pnb.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);
qkc=cq;var gpc=cdc.hrb;var hpc=ddc.hrb;var eq=cdc.irb;var fq=ddc.irb;this.xrb.zo.x=gpc+hpc+pkc*pkc*eq+rkc*rkc*fq;this.xrb.ap.x=(-pkc*okc*eq)-rkc*qkc*fq;this.xrb.amb.x=(-pkc*eq)-rkc*fq;this.xrb.zo.y=this.xrb.ap.x;this.xrb.ap.y=gpc+hpc+okc*okc*eq+qkc*qkc*fq;this.xrb.amb.y=okc*eq+qkc*fq;this.xrb.zo.dmb=this.xrb.amb.x;this.xrb.ap.dmb=this.xrb.amb.y;this.xrb.amb.dmb=eq+fq;this.qoc=1.0/(eq+fq);if(this.goc==false){this.unc=0.0;}if(this.ync){var nsc=ddc.dob.bu-cdc.dob.bu-this.esc;if(ij.ceb(this.gsc-this.fsc)<2.0*fj.ukb){
this.xoc=el.qnc;}else if(nsc<=this.fsc){if(this.xoc!=el.onc){this.xjc.dmb=0.0;}this.xoc=el.onc;}else if(nsc>=this.gsc){if(this.xoc!=el.pnc){this.xjc.dmb=0.0;}this.xoc=el.pnc;}else {this.xoc=el.nnc;this.xjc.dmb=0.0;}}else {this.xoc=el.nnc;}if(pyb.vzb){this.xjc.x*=pyb.ubc;this.xjc.y*=pyb.ubc;this.unc*=pyb.ubc;var jhc=this.xjc.x;var khc=this.xjc.y;cdc.eob.x-=gpc*jhc;cdc.eob.y-=gpc*khc;cdc.eqb-=eq*((okc*khc-pkc*jhc)+this.unc+this.xjc.dmb);ddc.eob.x+=hpc*jhc;ddc.eob.y+=hpc*khc;ddc.eqb+=fq*((qkc*khc-rkc*jhc)+this.unc+this.xjc.dmb);
}else {this.xjc.ct();this.unc=0.0;}};pl.prototype.tyb=function(pyb){var cdc=this.bbc;var ddc=this.abc;var uo;var cq=0;var qhc=0;var okc=0;var pkc=0;var qkc=0;var rkc=0;var vt=cdc.eob;var hcb=cdc.eqb;var wt=ddc.eob;var icb=ddc.eqb;var gpc=cdc.hrb;var hpc=ddc.hrb;var eq=cdc.irb;var fq=ddc.irb;if(this.goc&&this.xoc!=el.qnc){var vkc=icb-hcb-this.joc;var grb=this.qoc*((-vkc));var slc=this.unc;var rlc=pyb.qyb*this.isc;this.unc=ij.qbb(this.unc+grb,(-rlc),rlc);grb=this.unc-slc;hcb-=eq*grb;icb+=fq*grb;}if(this.ync&&this.xoc!=el.nnc){
uo=cdc.cob.vo;okc=this.tjc.x-cdc.dob.pnb.x;pkc=this.tjc.y-cdc.dob.pnb.y;cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=ddc.cob.vo;qkc=this.ujc.x-ddc.dob.pnb.x;rkc=this.ujc.y-ddc.dob.pnb.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;var nqc=wt.x+((-icb*rkc))-vt.x-((-hcb*pkc));var oqc=wt.y+(icb*qkc)-vt.y-(hcb*okc);var mpc=icb-hcb;this.xrb.fmb(this.bsc,(-nqc),(-oqc),(-mpc));if(this.xoc==el.qnc){this.xjc.xnb(this.bsc);}else if(this.xoc==el.onc){qhc=this.xjc.dmb+this.bsc.dmb;
if(qhc<0.0){this.xrb.emb(this.dsc,(-nqc),(-oqc));this.bsc.x=this.dsc.x;this.bsc.y=this.dsc.y;this.bsc.dmb=(-this.xjc.dmb);this.xjc.x+=this.dsc.x;this.xjc.y+=this.dsc.y;this.xjc.dmb=0.0;}}else if(this.xoc==el.pnc){qhc=this.xjc.dmb+this.bsc.dmb;if(qhc>0.0){this.xrb.emb(this.dsc,(-nqc),(-oqc));this.bsc.x=this.dsc.x;this.bsc.y=this.dsc.y;this.bsc.dmb=(-this.xjc.dmb);this.xjc.x+=this.dsc.x;this.xjc.y+=this.dsc.y;this.xjc.dmb=0.0;}}vt.x-=gpc*this.bsc.x;vt.y-=gpc*this.bsc.y;hcb-=eq*(okc*this.bsc.y-pkc*this.bsc.x+this.bsc.dmb);
wt.x+=hpc*this.bsc.x;wt.y+=hpc*this.bsc.y;icb+=fq*(qkc*this.bsc.y-rkc*this.bsc.x+this.bsc.dmb);}else {uo=cdc.cob.vo;okc=this.tjc.x-cdc.dob.pnb.x;pkc=this.tjc.y-cdc.dob.pnb.y;cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);okc=cq;uo=ddc.cob.vo;qkc=this.ujc.x-ddc.dob.pnb.x;rkc=this.ujc.y-ddc.dob.pnb.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;var tlc=wt.x+((-icb*rkc))-vt.x-((-hcb*pkc));var ulc=wt.y+(icb*qkc)-vt.y-(hcb*okc);this.xrb.emb(this.csc,(-tlc),(-ulc));this.xjc.x+=this.csc.x;
this.xjc.y+=this.csc.y;vt.x-=gpc*this.csc.x;vt.y-=gpc*this.csc.y;hcb-=eq*(okc*this.csc.y-pkc*this.csc.x);wt.x+=hpc*this.csc.x;wt.y+=hpc*this.csc.y;icb+=fq*(qkc*this.csc.y-rkc*this.csc.x);}cdc.eob.js(vt);cdc.eqb=hcb;ddc.eob.js(wt);ddc.eqb=icb;};pl.prototype.bzb=function(kic){if(kic===undefined)kic=0;var rpc=0;var wmb=0;var uo;var cdc=this.bbc;var ddc=this.abc;var spc=0.0;var osc=0.0;var cq=0;var hqc=0;var iqc=0;if(this.ync&&this.xoc!=el.nnc){var khb=ddc.dob.bu-cdc.dob.bu-this.esc;var psc=0.0;if(this.xoc==el.qnc){
wmb=ij.qbb(khb-this.fsc,(-fj.zkb),fj.zkb);psc=(-this.qoc*wmb);spc=ij.ceb(wmb);}else if(this.xoc==el.onc){wmb=khb-this.fsc;spc=(-wmb);wmb=ij.qbb(wmb+fj.ukb,(-fj.zkb),0.0);psc=(-this.qoc*wmb);}else if(this.xoc==el.pnc){wmb=khb-this.gsc;spc=wmb;wmb=ij.qbb(wmb-fj.ukb,0.0,fj.zkb);psc=(-this.qoc*wmb);}cdc.dob.bu-=cdc.irb*psc;ddc.dob.bu+=ddc.irb*psc;cdc.xtb();ddc.xtb();}{uo=cdc.cob.vo;var okc=this.tjc.x-cdc.dob.pnb.x;var pkc=this.tjc.y-cdc.dob.pnb.y;cq=(uo.zo.x*okc+uo.ap.x*pkc);pkc=(uo.zo.y*okc+uo.ap.y*pkc);
okc=cq;uo=ddc.cob.vo;var qkc=this.ujc.x-ddc.dob.pnb.x;var rkc=this.ujc.y-ddc.dob.pnb.y;cq=(uo.zo.x*qkc+uo.ap.x*rkc);rkc=(uo.zo.y*qkc+uo.ap.y*rkc);qkc=cq;var qsc=ddc.dob.c.x+qkc-cdc.dob.c.x-okc;var rsc=ddc.dob.c.y+rkc-cdc.dob.c.y-pkc;var ssc=qsc*qsc+rsc*rsc;var tsc=Math.sqrt(ssc);osc=tsc;var usc=cdc.hrb;var vsc=ddc.hrb;var wsc=cdc.irb;var xsc=ddc.irb;var ysc=10.0*fj.bkb;if(ssc>ysc*ysc){var zsc=qsc/tsc;var atc=rsc/tsc;var agc=usc+vsc;var pz=1.0/agc;hqc=pz*((-qsc));iqc=pz*((-rsc));var btc=0.5;cdc.dob.c.x-=btc*usc*hqc;
cdc.dob.c.y-=btc*usc*iqc;ddc.dob.c.x+=btc*vsc*hqc;ddc.dob.c.y+=btc*vsc*iqc;qsc=ddc.dob.c.x+qkc-cdc.dob.c.x-okc;rsc=ddc.dob.c.y+rkc-cdc.dob.c.y-pkc;}this.ypc.zo.x=usc+vsc;this.ypc.ap.x=0.0;this.ypc.zo.y=0.0;this.ypc.ap.y=usc+vsc;this.zpc.zo.x=wsc*pkc*pkc;this.zpc.ap.x=(-wsc*okc*pkc);this.zpc.zo.y=(-wsc*okc*pkc);this.zpc.ap.y=wsc*okc*okc;this.asc.zo.x=xsc*rkc*rkc;this.asc.ap.x=(-xsc*qkc*rkc);this.asc.zo.y=(-xsc*qkc*rkc);this.asc.ap.y=xsc*qkc*qkc;this.ffc.plb(this.ypc);this.ffc.qlb(this.zpc);this.ffc.qlb(this.asc);
this.ffc.vlb(pl.ctc,(-qsc),(-rsc));hqc=pl.ctc.x;iqc=pl.ctc.y;cdc.dob.c.x-=cdc.hrb*hqc;cdc.dob.c.y-=cdc.hrb*iqc;cdc.dob.bu-=cdc.irb*(okc*iqc-pkc*hqc);ddc.dob.c.x+=ddc.hrb*hqc;ddc.dob.c.y+=ddc.hrb*iqc;ddc.dob.bu+=ddc.irb*(qkc*iqc-rkc*hqc);cdc.xtb();ddc.xtb();}return osc<=fj.bkb&&spc<=fj.ukb;};ng.tl.push(function(){ng.nh.rh.pl.ctc=new lj();});ng.vg(ql,ng.nh.rh.fl);ql.prototype.__super=ng.nh.rh.fl.prototype;ql.ql=function(){ng.nh.rh.fl.fl.apply(this,arguments);this.ikc=new lj();this.jkc=new lj();};ql.prototype.ql=function(){
this.__super.fl.call(this);this.type=el.pmc;this.ikc.bo(0.0,0.0);this.jkc.bo(0.0,0.0);this.mqc=0.0;this.ksc=0.0;this.lsc=0.0;this.msc=0.0;this.uoc=0.0;this.voc=false;this.woc=false;};ql.prototype.qab=function(cdc,ddc,anchor){this.dvb=cdc;this.fvb=ddc;this.ikc=this.dvb.jsb(anchor);this.jkc=this.fvb.jsb(anchor);this.mqc=this.fvb.rlb()-this.dvb.rlb();};ng.vg(rl,ng.nh.rh.el);rl.prototype.__super=ng.nh.rh.el.prototype;rl.rl=function(){ng.nh.rh.el.el.apply(this,arguments);this.ykc=new lj();this.zkc=new lj();
this.xjc=new mj();this.xrb=new hj();};rl.prototype.ydc=function(){return this.bbc.fsb(this.ykc);};rl.prototype.zdc=function(){return this.abc.fsb(this.zkc);};rl.prototype.wjc=function(xyb){if(xyb===undefined)xyb=0;return new lj(xyb*this.xjc.x,xyb*this.xjc.y);};rl.prototype.yjc=function(xyb){if(xyb===undefined)xyb=0;return xyb*this.xjc.dmb;};rl.prototype.rl=function(nob){this.__super.el.call(this,nob);this.ykc.js(nob.ikc);this.zkc.js(nob.jkc);this.esc=nob.mqc;this.xjc.ct();this.xrb=new hj();};rl.prototype.ryb=function(pyb){
var uo;var cq=0;var cdc=this.bbc;var ddc=this.abc;uo=cdc.cob.vo;var cgc=this.ykc.x-cdc.dob.pnb.x;var dgc=this.ykc.y-cdc.dob.pnb.y;cq=(uo.zo.x*cgc+uo.ap.x*dgc);dgc=(uo.zo.y*cgc+uo.ap.y*dgc);cgc=cq;uo=ddc.cob.vo;var egc=this.zkc.x-ddc.dob.pnb.x;var fgc=this.zkc.y-ddc.dob.pnb.y;cq=(uo.zo.x*egc+uo.ap.x*fgc);fgc=(uo.zo.y*egc+uo.ap.y*fgc);egc=cq;var mlc=cdc.hrb;var nlc=ddc.hrb;var olc=cdc.irb;var plc=ddc.irb;this.xrb.zo.x=mlc+nlc+dgc*dgc*olc+fgc*fgc*plc;this.xrb.ap.x=(-dgc*cgc*olc)-fgc*egc*plc;this.xrb.amb.x=(-dgc*olc)-fgc*plc;
this.xrb.zo.y=this.xrb.ap.x;this.xrb.ap.y=mlc+nlc+cgc*cgc*olc+egc*egc*plc;this.xrb.amb.y=cgc*olc+egc*plc;this.xrb.zo.dmb=this.xrb.amb.x;this.xrb.ap.dmb=this.xrb.amb.y;this.xrb.amb.dmb=olc+plc;if(pyb.vzb){this.xjc.x*=pyb.ubc;this.xjc.y*=pyb.ubc;this.xjc.dmb*=pyb.ubc;cdc.eob.x-=mlc*this.xjc.x;cdc.eob.y-=mlc*this.xjc.y;cdc.eqb-=olc*(cgc*this.xjc.y-dgc*this.xjc.x+this.xjc.dmb);ddc.eob.x+=nlc*this.xjc.x;ddc.eob.y+=nlc*this.xjc.y;ddc.eqb+=plc*(egc*this.xjc.y-fgc*this.xjc.x+this.xjc.dmb);}else {this.xjc.ct();
}};rl.prototype.tyb=function(pyb){var uo;var cq=0;var cdc=this.bbc;var ddc=this.abc;var vhc=cdc.eob;var wv=cdc.eqb;var whc=ddc.eob;var zv=ddc.eqb;var mlc=cdc.hrb;var nlc=ddc.hrb;var olc=cdc.irb;var plc=ddc.irb;uo=cdc.cob.vo;var cgc=this.ykc.x-cdc.dob.pnb.x;var dgc=this.ykc.y-cdc.dob.pnb.y;cq=(uo.zo.x*cgc+uo.ap.x*dgc);dgc=(uo.zo.y*cgc+uo.ap.y*dgc);cgc=cq;uo=ddc.cob.vo;var egc=this.zkc.x-ddc.dob.pnb.x;var fgc=this.zkc.y-ddc.dob.pnb.y;cq=(uo.zo.x*egc+uo.ap.x*fgc);fgc=(uo.zo.y*egc+uo.ap.y*fgc);egc=cq;var nqc=whc.x-zv*fgc-vhc.x+wv*dgc;
var oqc=whc.y+zv*egc-vhc.y-wv*cgc;var mpc=zv-wv;var grb=new mj();this.xrb.fmb(grb,(-nqc),(-oqc),(-mpc));this.xjc.xnb(grb);vhc.x-=mlc*grb.x;vhc.y-=mlc*grb.y;wv-=olc*(cgc*grb.y-dgc*grb.x+grb.dmb);whc.x+=nlc*grb.x;whc.y+=nlc*grb.y;zv+=plc*(egc*grb.y-fgc*grb.x+grb.dmb);cdc.eqb=wv;ddc.eqb=zv;};rl.prototype.bzb=function(kic){if(kic===undefined)kic=0;var uo;var cq=0;var cdc=this.bbc;var ddc=this.abc;uo=cdc.cob.vo;var cgc=this.ykc.x-cdc.dob.pnb.x;var dgc=this.ykc.y-cdc.dob.pnb.y;cq=(uo.zo.x*cgc+uo.ap.x*dgc);dgc=(uo.zo.y*cgc+uo.ap.y*dgc);
cgc=cq;uo=ddc.cob.vo;var egc=this.zkc.x-ddc.dob.pnb.x;var fgc=this.zkc.y-ddc.dob.pnb.y;cq=(uo.zo.x*egc+uo.ap.x*fgc);fgc=(uo.zo.y*egc+uo.ap.y*fgc);egc=cq;var mlc=cdc.hrb;var nlc=ddc.hrb;var olc=cdc.irb;var plc=ddc.irb;var pqc=ddc.dob.c.x+egc-cdc.dob.c.x-cgc;var qqc=ddc.dob.c.y+fgc-cdc.dob.c.y-dgc;var tpc=ddc.dob.bu-cdc.dob.bu-this.esc;var ysc=10.0*fj.bkb;var osc=Math.sqrt(pqc*pqc+qqc*qqc);var spc=ij.ceb(tpc);if(osc>ysc){olc*=1.0;plc*=1.0;}this.xrb.zo.x=mlc+nlc+dgc*dgc*olc+fgc*fgc*plc;this.xrb.ap.x=(-dgc*cgc*olc)-fgc*egc*plc;
this.xrb.amb.x=(-dgc*olc)-fgc*plc;this.xrb.zo.y=this.xrb.ap.x;this.xrb.ap.y=mlc+nlc+cgc*cgc*olc+egc*egc*plc;this.xrb.amb.y=cgc*olc+egc*plc;this.xrb.zo.dmb=this.xrb.amb.x;this.xrb.ap.dmb=this.xrb.amb.y;this.xrb.amb.dmb=olc+plc;var grb=new mj();this.xrb.fmb(grb,(-pqc),(-qqc),(-tpc));cdc.dob.c.x-=mlc*grb.x;cdc.dob.c.y-=mlc*grb.y;cdc.dob.bu-=olc*(cgc*grb.y-dgc*grb.x+grb.dmb);ddc.dob.c.x+=nlc*grb.x;ddc.dob.c.y+=nlc*grb.y;ddc.dob.bu+=plc*(egc*grb.y-fgc*grb.x+grb.dmb);cdc.xtb();ddc.xtb();return osc<=fj.bkb&&spc<=fj.ukb;
};ng.vg(sl,ng.nh.rh.fl);sl.prototype.__super=ng.nh.rh.fl.prototype;sl.sl=function(){ng.nh.rh.fl.fl.apply(this,arguments);this.ikc=new lj();this.jkc=new lj();};sl.prototype.sl=function(){this.__super.fl.call(this);this.type=el.lnc;this.mqc=0.0;};sl.prototype.qab=function(cdc,ddc,anchor){this.dvb=cdc;this.fvb=ddc;this.ikc.js(this.dvb.jsb(anchor));this.jkc.js(this.fvb.jsb(anchor));this.mqc=this.fvb.rlb()-this.dvb.rlb();};})();(function(){var tj=ng.nh.tj;tj.tj=function(){this.dtc=1.0;this.etc=1.0;this.ftc=1.0;
this.gtc=1.0;this.htc=1.0;var cz=this;this.xbc={ybc:{clear:function(){cz.itc.clearRect(0,0,cz.itc.jtc.width,cz.itc.jtc.height)}}};};tj.prototype.ktc=function(owb,ndb){return "rgba("+((owb&0xFF0000)>>16)+","+((owb&0xFF00)>>8)+","+(owb&0xFF)+","+ndb+")";};tj.prototype.tj=function(){this.ltc=0;};tj.prototype.svb=function(tvb){if(tvb===undefined)tvb=0;this.ltc=tvb;};tj.prototype.uvb=function(){return this.ltc;};tj.prototype.vvb=function(tvb){if(tvb===undefined)tvb=0;this.ltc|=tvb;};tj.prototype.wvb=function(tvb){
if(tvb===undefined)tvb=0;this.ltc&=~tvb;};tj.prototype.xvb=function(yvb){this.itc=yvb;};tj.prototype.zvb=function(){return this.itc;};tj.prototype.awb=function(bwb){if(bwb===undefined)bwb=0;this.dtc=bwb;};tj.prototype.cwb=function(){return this.dtc;};tj.prototype.dwb=function(ewb){if(ewb===undefined)ewb=0;this.etc=ewb;this.itc.mtc=ewb;};tj.prototype.fwb=function(){return this.etc;};tj.prototype.gwb=function(ndb){if(ndb===undefined)ndb=0;this.ftc=ndb;};tj.prototype.hwb=function(){return this.ftc;};tj.prototype.iwb=function(ndb){
if(ndb===undefined)ndb=0;this.gtc=ndb;};tj.prototype.jwb=function(){return this.gtc;};tj.prototype.kwb=function(lwb){if(lwb===undefined)lwb=0;this.htc=lwb;};tj.prototype.mwb=function(){return this.htc;};tj.prototype.nwb=function(rt,qt,owb){if(!qt)return;var vm=this.itc;var bwb=this.dtc;vm.beginPath();vm.strokeStyle=this.ktc(owb.owb,this.ftc);vm.moveTo(rt[0].x*bwb,rt[0].y*bwb);for(var i=1;i<qt;i++){vm.lineTo(rt[i].x*bwb,rt[i].y*bwb);}vm.lineTo(rt[0].x*bwb,rt[0].y*bwb);vm.closePath();vm.stroke();};tj.prototype.pwb=function(rt,
qt,owb){if(!qt)return;var vm=this.itc;var bwb=this.dtc;vm.beginPath();vm.strokeStyle=this.ktc(owb.owb,this.ftc);vm.fillStyle=this.ktc(owb.owb,this.gtc);vm.moveTo(rt[0].x*bwb,rt[0].y*bwb);for(var i=1;i<qt;i++){vm.lineTo(rt[i].x*bwb,rt[i].y*bwb);}vm.lineTo(rt[0].x*bwb,rt[0].y*bwb);vm.closePath();vm.fill();vm.stroke();};tj.prototype.qwb=function(jy,at,owb){if(!at)return;var vm=this.itc;var bwb=this.dtc;vm.beginPath();vm.strokeStyle=this.ktc(owb.owb,this.ftc);vm.arc(jy.x*bwb,jy.y*bwb,at*bwb,0,Math.PI*2,true);
vm.closePath();vm.stroke();};tj.prototype.rwb=function(jy,at,swb,owb){if(!at)return;var vm=this.itc,bwb=this.dtc,ntc=jy.x*bwb,otc=jy.y*bwb;vm.moveTo(0,0);vm.beginPath();vm.strokeStyle=this.ktc(owb.owb,this.ftc);vm.fillStyle=this.ktc(owb.owb,this.gtc);vm.arc(ntc,otc,at*bwb,0,Math.PI*2,true);vm.moveTo(ntc,otc);vm.lineTo((jy.x+swb.x*at)*bwb,(jy.y+swb.y*at)*bwb);vm.closePath();vm.fill();vm.stroke();};tj.prototype.twb=function(lm,nm,owb){var vm=this.itc,bwb=this.dtc;vm.strokeStyle=this.ktc(owb.owb,this.ftc);
vm.beginPath();vm.moveTo(lm.x*bwb,lm.y*bwb);vm.lineTo(nm.x*bwb,nm.y*bwb);vm.closePath();vm.stroke();};tj.prototype.uwb=function(uz){var vm=this.itc,bwb=this.dtc;vm.beginPath();vm.strokeStyle=this.ktc(0xff0000,this.ftc);vm.moveTo(uz.position.x*bwb,uz.position.y*bwb);vm.lineTo((uz.position.x+this.htc*uz.vo.zo.x)*bwb,(uz.position.y+this.htc*uz.vo.zo.y)*bwb);vm.strokeStyle=this.ktc(0xff00,this.ftc);vm.moveTo(uz.position.x*bwb,uz.position.y*bwb);vm.lineTo((uz.position.x+this.htc*uz.vo.ap.x)*bwb,(uz.position.y+this.htc*uz.vo.ap.y)*bwb);
vm.closePath();vm.stroke();};})();for(var i=0;i<ng.tl.length;++i)ng.tl[i]();delete ng.tl;var ptc=[];var qtc="None";var rtc=0;var stc=0;function ttc(utc,vtc,wtc){this.id=utc;this.x=vtc;this.y=wtc;}function log(xtc){setTimeout(function(){throw new hbc(xtc);},0);}function ytc(ztc){for(var i in ptc){if(ptc[i]==ztc){return i;}}log("Failed to find pre-exisiting mouse device index");return -1;}function auc(ztc){var buc=-1;for(var i in ptc){if((ptc[i]==ztc)||(ptc[i]==-1)){buc=i;break;}}if(buc==-1){buc=ptc.length;}ptc[buc]=ztc;
return buc;}function cuc(event){for(var duc=0;duc<event.changedTouches.length;duc++){var euc=event.changedTouches[duc];var type="";var buc=-1;qtc=event.type;switch(event.type){case "touchstart":buc=auc(euc.fuc);break;case "touchend":buc=ytc(euc.fuc);ptc[buc]=-1;break;case "touchmove":buc=ytc(euc.fuc);break;default :return;}if(buc==0){if(guc!=null){huc=euc.screenX;iuc=euc.screenY;}switch(event.type){case "touchstart":juc=1;break;case "touchmove":juc=1;break;case "touchend":juc=0;break;}}kuc[buc].x=euc.screenX;
kuc[buc].y=euc.screenY;rtc=euc.screenX;stc=euc.screenY;switch(event.type){case "touchstart":kuc[buc].luc=muc|nuc|ouc;break;case "touchend":kuc[buc].luc=0;break;case "touchmove":default :break;}event.preventDefault();}}function puc(){jtc.ontouchstart=cuc;jtc.ontouchmove=cuc;jtc.ontouchend=cuc;jtc.ontouchcancel=cuc;}var quc,ruc,suc,tuc,uuc,vuc,wuc;function ds_set_precision(xuc){yuc=xuc;}function zuc(){this.width=0;this.height=0;this.body=[];}function avc(bvc,cvc){this.dvc=[];this.evc=bvc;this.fvc=cvc;var rbb=bvc*cvc;
for(var i=0;i<rbb;i++){this.dvc[i]=null;}}avc.prototype.gu=function(gvc){this.evc=gvc.evc;this.fvc=gvc.fvc;this.dvc=gvc.dvc.slice();};function ds_grid_create(bvc,cvc){if(bvc<0||cvc<0){hbc("Error: Invalid ds_grid size: ("+bvc+","+cvc+")");}var hvc=new avc(bvc,cvc);var id=ivc.xnb(hvc);return id;}function ds_grid_destroy(utc){ivc.jvc(utc);}function ds_grid_copy(utc,kvc){var lvc=ivc.mvc(utc);if(!lvc){hbc("Error: invalid dest ds_grid(copy)");return;}var nvc=ivc.mvc(kvc);if(!nvc){hbc("Error: invalid source ds_grid(copy)");
return;}lvc.gu(nvc);}function ds_grid_resize(utc,bvc,cvc){if(bvc<1||cvc<1){hbc("Error: Can't resize grid to 0 ("+string(bvc)+","+string(cvc)+")");return;}var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid dest ds_grid(copy)");return;}var ovc=new avc(bvc,cvc);var i=ivc.xnb(ovc);ds_grid_set_grid_region(i,utc,0,0,hvc.evc-1,hvc.fvc-1,0,0);ivc.jvc(i);ivc.bo(utc,ovc);}function ds_grid_width(utc){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_width)");return;}return hvc.evc;}function ds_grid_height(utc){
var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_height)");return;}return hvc.fvc;}function ds_grid_clear(utc,pvc){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_height)");return;}for(var i=0;i<hvc.dvc.length;i++){hvc.dvc[i]=pvc;}}function ds_grid_set(utc,vtc,wtc,pvc){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_set)");return;}if(vtc<0||vtc>=hvc.evc||wtc<0||wtc>=hvc.fvc){hbc("Error: grid out of bounds(set) - GridID: "+utc+"  size["+hvc.evc+","+hvc.fvc+"]  at  ("+vtc+","+wtc+")");
return;}hvc.dvc[vtc+(wtc*hvc.evc)]=pvc;}function ds_grid_add(utc,vtc,wtc,pvc){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_add)");return;}if(vtc<0||vtc>=hvc.evc||wtc<0||wtc>=hvc.fvc){hbc("Error: grid out of bounds(ds_grid_add): "+utc+" ("+vtc+","+wtc+")");return;}hvc.dvc[vtc+(wtc*hvc.evc)]=pvc;}function ds_grid_multiply(utc,vtc,wtc,pvc){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_multiply)");return;}if(vtc<0||vtc>=hvc.evc||wtc<0||wtc>=hvc.fvc){hbc("Error: grid out of bounds(ds_grid_multiply): "+utc+" ("+vtc+","+wtc+")");
return;}hvc.dvc[vtc+(wtc*hvc.evc)]*=pvc;}function ds_grid_set_region(utc,qvc,rvc,svc,tvc,pvc){if(qvc>svc){var rbb=qvc;qvc=svc;svc=rbb;}if(rvc>tvc){var rbb=rvc;rvc=tvc;tvc=rbb;}var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_set_region)");return;}if((qvc<0||qvc>=hvc.evc||rvc<0||rvc>=hvc.fvc)||(svc<0||svc>=hvc.evc||tvc<0||tvc>=hvc.fvc)){hbc("Error: region out of bounds(ds_grid_set_region): "+utc);}for(var y=rvc;y<=tvc;y++){var index=(y*hvc.evc)+qvc;for(var x=qvc;x<=svc;x++){hvc.dvc[index]=pvc;
index++;}}}function ds_grid_add_region(utc,qvc,rvc,svc,tvc,pvc){if(qvc>svc){var rbb=qvc;qvc=svc;svc=rbb;}if(rvc>tvc){var rbb=rvc;rvc=tvc;tvc=rbb;}var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_add_region)");return;}if((qvc<0||qvc>=hvc.evc||rvc<0||rvc>=hvc.fvc)||(svc<0||svc>=hvc.evc||tvc<0||tvc>=hvc.fvc)){hbc("Error: region out of bounds(ds_grid_add_region): "+utc);}for(var y=rvc;y<=tvc;y++){var index=(y*hvc.evc)+qvc;for(var x=qvc;x<=svc;x++){hvc.dvc[index]+=pvc;index++;}}}function ds_grid_multiply_region(utc,
qvc,rvc,svc,tvc,pvc){if(qvc>svc){var rbb=qvc;qvc=svc;svc=rbb;}if(rvc>tvc){var rbb=rvc;rvc=tvc;tvc=rbb;}var hvc=ivc.mvc(utc);if(hvc==null||hvc==undefined){hbc("Error: invalid ds_grid ID (ds_grid_multiply_region)");return;}if((qvc<0||qvc>=hvc.evc||rvc<0||rvc>=hvc.fvc)||(svc<0||svc>=hvc.evc||tvc<0||tvc>=hvc.fvc)){hbc("Error: region out of bounds(ds_grid_multiply_region): "+utc);}for(var y=rvc;y<=tvc;y++){var index=(y*hvc.evc)+qvc;for(var x=qvc;x<=svc;x++){hvc.dvc[index]*=pvc;index++;}}}function ds_grid_set_disk(utc,
vtc,wtc,gkb,pvc){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_set_disk)");return;}var xdb=0;var uvc=0;var ydb=0;var vvc=0;var i=0;var sjb=0;xdb=~~(wvc(0.0,Math.floor(vtc-gkb)));ydb=~~(xvc(this.evc-1,Math.ceil(vtc+gkb)));uvc=~~(wvc(0,Math.floor(wtc-gkb)));vvc=~~(xvc(this.fvc-1,Math.ceil(wtc+gkb)));gkb=gkb*gkb;var w=hvc.evc;for(i=xdb;i<=ydb;i++){var yvc=(i-vtc)*(i-vtc);for(sjb=uvc;sjb<=vvc;sjb++){var zvc=sjb-wtc;if(yvc+(zvc*zvc)<=gkb){if(i>=0&&i<hvc.evc&&sjb>=0&&sjb<hvc.fvc){hvc.dvc[i+(sjb*w)]=pvc;
}}}}}function ds_grid_add_disk(utc,vtc,wtc,gkb,pvc){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_set_disk)");return;}var xdb=0;var uvc=0;var ydb=0;var vvc=0;var i=0;var sjb=0;xdb=~~(wvc(0.0,Math.floor(vtc-gkb)));ydb=~~(xvc(this.evc-1,Math.ceil(vtc+gkb)));uvc=~~(wvc(0,Math.floor(wtc-gkb)));vvc=~~(xvc(this.fvc-1,Math.ceil(wtc+gkb)));gkb=gkb*gkb;var w=hvc.evc;for(i=xdb;i<=ydb;i++){var yvc=(i-vtc)*(i-vtc);for(sjb=uvc;sjb<=vvc;sjb++){var zvc=sjb-wtc;if(yvc+(zvc*zvc)<=gkb){if(i>=0&&i<hvc.evc&&sjb>=0&&sjb<hvc.fvc){
hvc.dvc[i+(sjb*w)]+=pvc;}}}}}function ds_grid_multiply_disk(utc,vtc,wtc,gkb,pvc){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_set_disk)");return;}var xdb=0;var uvc=0;var ydb=0;var vvc=0;var i=0;var sjb=0;xdb=~~(wvc(0.0,Math.floor(vtc-gkb)));ydb=~~(xvc(this.evc-1,Math.ceil(vtc+gkb)));uvc=~~(wvc(0,Math.floor(wtc-gkb)));vvc=~~(xvc(this.fvc-1,Math.ceil(wtc+gkb)));gkb=gkb*gkb;var w=hvc.evc;for(i=xdb;i<=ydb;i++){var yvc=(i-vtc)*(i-vtc);for(sjb=uvc;sjb<=vvc;sjb++){var zvc=sjb-wtc;if(yvc+(zvc*zvc)<=gkb){
if(i>=0&&i<hvc.evc&&sjb>=0&&sjb<hvc.fvc){hvc.dvc[i+(sjb*w)]*=pvc;}}}}}function awc(utc,kvc,qvc,rvc,svc,tvc,bwc,cwc,dwc){if(qvc>svc){var rbb=qvc;qvc=svc;svc=rbb;}if(rvc>tvc){var rbb=rvc;rvc=tvc;tvc=rbb;}var nvc=ivc.mvc(kvc);if(!nvc){hbc("Error: invalid ds_grid ID (ds_grid_set_grid_region)");return;}var lvc=ivc.mvc(utc);if(!lvc){hbc("Error: invalid ds_grid ID (ds_grid_set_grid_region)");return;}for(var y=rvc;y<=tvc;y++){var ewc=bwc;var index=(y*nvc.evc)+qvc;for(var x=qvc;x<=svc;x++){if((x>=0&&x<nvc.evc&&y>=0&&y<nvc.fvc)&&(ewc>=0&&ewc<lvc.evc&&cwc>=0&&cwc<lvc.fvc)){
dwc(lvc,(ewc+(cwc*lvc.evc)),nvc,index);}index++;ewc++;}cwc++;}}function ds_grid_set_grid_region(utc,kvc,qvc,rvc,svc,tvc,bwc,cwc){awc(utc,kvc,qvc,rvc,svc,tvc,bwc,cwc,function fwc(gwc,hwc,iwc,jwc){gwc.dvc[hwc]=iwc.dvc[jwc];});}function ds_grid_add_grid_region(utc,kvc,qvc,rvc,svc,tvc,bwc,cwc){awc(utc,kvc,qvc,rvc,svc,tvc,bwc,cwc,function fwc(gwc,hwc,iwc,jwc){gwc.dvc[hwc]+=iwc.dvc[jwc];});}function ds_grid_multiply_grid_region(utc,kvc,qvc,rvc,svc,tvc,bwc,cwc,pvc){awc(utc,kvc,qvc,rvc,svc,tvc,bwc,cwc,function fwc(gwc,
hwc,iwc,jwc){gwc.dvc[hwc]*=iwc.dvc[jwc];});}function ds_grid_get(utc,vtc,wtc){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_get)");return 0;}if(vtc<0||vtc>=hvc.evc||wtc<0||wtc>=hvc.fvc){hbc("Error: grid out of bounds(get) - GridID: "+utc+"  size["+hvc.evc+","+hvc.fvc+"]  at  ("+vtc+","+wtc+")");return 0;}return hvc.dvc[vtc+(wtc*hvc.evc)];}function kwc(utc,qvc,rvc,svc,tvc){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_get_sum)");return 0;}if(qvc>svc){var rbb=qvc;
qvc=svc;svc=rbb;}if(qvc<0)qvc=0;if(qvc>=hvc.evc)qvc=hvc.evc-1;if(svc<0)svc=0;if(svc>=hvc.evc)svc=hvc.evc-1;if(rvc>tvc){var rbb=rvc;rvc=tvc;tvc=rbb;}if(rvc<0)rvc=0;if(rvc>=hvc.fvc)rvc=hvc.fvc-1;if(tvc<0)tvc=0;if(tvc>=hvc.fvc)tvc=hvc.fvc-1;ruc=quc=suc=tuc=0;var first=true;var ay=0;for(var y=rvc;y<=tvc;y++){var index=(y*hvc.evc)+qvc;for(var x=qvc;x<=svc;x++){var hh=hvc.dvc[index];if(first){quc=ruc=hh;first=false;}else {if(quc>hh)quc=hh;if(ruc<hh)ruc=hh;}suc+=hh;ay++;index++;}}tuc=suc/ay;}function ds_grid_get_sum(utc,
qvc,rvc,svc,tvc){kwc(utc,qvc,rvc,svc,tvc);return suc;}function ds_grid_get_max(utc,qvc,rvc,svc,tvc){kwc(utc,qvc,rvc,svc,tvc);return ruc;}function ds_grid_get_min(utc,qvc,rvc,svc,tvc){kwc(utc,qvc,rvc,svc,tvc);return quc;}function ds_grid_get_mean(utc,qvc,rvc,svc,tvc){kwc(utc,qvc,rvc,svc,tvc);return tuc;}function lwc(utc,vtc,wtc,gkb){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_set_disk)");return;}var xdb=0;var uvc=0;var ydb=0;var vvc=0;var i=0;var sjb=0;xdb=~~(wvc(0.0,Math.floor(vtc-gkb)));
ydb=~~(xvc(this.evc-1,Math.ceil(vtc+gkb)));uvc=~~(wvc(0,Math.floor(wtc-gkb)));vvc=~~(xvc(this.fvc-1,Math.ceil(wtc+gkb)));var first=true;var ay=0;ruc=quc=suc=0;gkb=gkb*gkb;var w=hvc.evc;for(i=xdb;i<=ydb;i++){var yvc=(i-vtc)*(i-vtc);for(sjb=uvc;sjb<=vvc;sjb++){var zvc=sjb-wtc;if(yvc+(zvc*zvc)<=gkb){if(i>=0&&i<hvc.evc&&sjb>=0&&sjb<hvc.fvc){var hh=hvc.dvc[i+(sjb*w)];if(first){quc=ruc=hh;first=false;}else {if(quc>hh)quc=hh;if(ruc<hh)ruc=hh;}suc+=hh;ay++;}}}}tuc=suc/ay;}function ds_grid_get_disk_sum(utc,vtc,wtc,
gkb){lwc(utc,vtc,wtc,gkb);return suc;}function ds_grid_get_disk_max(utc,vtc,wtc,gkb){lwc(utc,vtc,wtc,gkb);return ruc;}function ds_grid_get_disk_min(utc,vtc,wtc,gkb){lwc(utc,vtc,wtc,gkb);return quc;}function ds_grid_get_disk_mean(utc,vtc,wtc,gkb){lwc(utc,vtc,wtc,gkb);return tuc;}function mwc(utc,qvc,rvc,svc,tvc,pvc){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_get_sum)");return 0;}if(qvc>svc){var rbb=qvc;qvc=svc;svc=rbb;}if(qvc<0)qvc=0;if(qvc>=hvc.evc)qvc=hvc.evc-1;if(svc<0)svc=0;if(svc>=hvc.evc)svc=hvc.evc-1;
if(rvc>tvc){var rbb=rvc;rvc=tvc;tvc=rbb;}if(rvc<0)rvc=0;if(rvc>=hvc.fvc)rvc=hvc.fvc-1;if(tvc<0)tvc=0;if(tvc>=hvc.fvc)tvc=hvc.fvc-1;uuc=false;vuc=-1;wuc=-1;for(var y=rvc;y<=tvc;y++){var index=(y*hvc.evc)+qvc;for(var x=qvc;x<=svc;x++){var hh=hvc.dvc[index];if((typeof(pvc)=="number"&&typeof(hh)=="number")){if(yuc>abs(pvc-hh)){uuc=true;vuc=x;wuc=y;}}else {if(pvc==hh){uuc=true;vuc=x;wuc=y;}}index++;}}return false;}function ds_grid_value_exists(utc,qvc,rvc,svc,tvc,pvc){mwc(utc,qvc,rvc,svc,tvc,pvc);return uuc;}
function ds_grid_value_x(utc,qvc,rvc,svc,tvc,pvc){mwc(utc,qvc,rvc,svc,tvc,pvc);return vuc;}function ds_grid_value_y(utc,qvc,rvc,svc,tvc,pvc){mwc(utc,qvc,rvc,svc,tvc,pvc);return wuc;}function nwc(utc,vtc,wtc,gkb,pvc){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_set_disk)");return;}var xdb=0;var uvc=0;var ydb=0;var vvc=0;var i=0;var sjb=0;xdb=~~(wvc(0.0,Math.floor(vtc-gkb)));ydb=~~(xvc(this.evc-1,Math.ceil(vtc+gkb)));uvc=~~(wvc(0,Math.floor(wtc-gkb)));vvc=~~(xvc(this.fvc-1,Math.ceil(wtc+gkb)));
vuc=wuc=-1;uuc=false;gkb=gkb*gkb;var w=hvc.evc;for(i=xdb;i<=ydb;i++){var yvc=(i-vtc)*(i-vtc);for(sjb=uvc;sjb<=vvc;sjb++){var zvc=sjb-wtc;if(yvc+(zvc*zvc)<=gkb){if(i>=0&&i<hvc.evc&&sjb>=0&&sjb<hvc.fvc){var hh=hvc.dvc[i+(sjb*w)];if((typeof(pvc)=="number"&&typeof(hh)=="number")){if(yuc>abs(pvc-hh)){vuc=i;wuc=sjb;uuc=true;return;}}else {if(hh==pvc){vuc=i;wuc=sjb;uuc=true;return;}}}}}}}function ds_grid_value_disk_exists(utc,vtc,wtc,gkb,pvc){nwc(utc,vtc,wtc,gkb,pvc);return uuc;}function ds_grid_value_disk_x(utc,
vtc,wtc,gkb,pvc){nwc(utc,vtc,wtc,gkb,pvc);return vuc;}function ds_grid_value_disk_y(utc,vtc,wtc,gkb,pvc){nwc(utc,vtc,wtc,gkb,pvc);return wuc;}function ds_grid_shuffle(utc){var hvc=ivc.mvc(utc);if(hvc==null||hvc==undefined){hbc("Error: invalid ds_grid ID (ds_grid_shuffle)");return;}hvc.dvc.sort(function(){return 0.5-Math.random()});}function ds_grid_write(utc){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_write)");return;}var owc=new zuc();owc.width=hvc.evc;owc.height=hvc.fvc;owc.body=hvc.dvc;
vm=JSON.stringify(owc);return vm;}function ds_grid_read(utc,pwc){var hvc=ivc.mvc(utc);if(!hvc){hbc("Error: invalid ds_grid ID (ds_grid_read)");return;}var qwc=JSON.parse(pwc);hvc.evc=qwc.width;hvc.fvc=qwc.height;hvc.dvc=qwc.body;}function ds_list_create(){var hfb=new rwc();hfb.swc=true;return twc.xnb(hfb);}function ds_list_destroy(utc){twc.jvc(utc);}function ds_list_clear(utc){var uwc=twc.mvc(utc);if(uwc){uwc.oyb();return;}hbc("Error: invalid ds_list ID (ds_list_clear)");}function ds_list_copy(utc,kvc){var vwc=twc.mvc(utc);
if(!vwc){hbc("Error: invalid DEST ds_list ID (ds_list_copy)");return;}var wwc=twc.mvc(kvc);if(!wwc){hbc("Error: invalid SOURCE ds_list ID (ds_list_copy)");return;}vwc.gu(wwc);twc.bo(utc,vwc);}function ds_list_size(utc){var uwc=twc.mvc(utc);if(uwc)return uwc.length;hbc("Error: invalid ds_list ID (ds_list_size)");return 0;}function ds_list_empty(utc){var uwc=twc.mvc(utc);if(uwc){if(uwc.length!==0)return false;else return true;}hbc("Error: invalid ds_list ID (ds_list_empty)");return true;}function ds_list_add(utc,
pvc){var uwc=twc.mvc(utc);if(uwc){return uwc.xnb(pvc);}hbc("Error: invalid ds_list ID (ds_list_add)");return -1;}function ds_list_insert(utc,xwc,pvc){var uwc=twc.mvc(utc);if(uwc){return uwc.ywc(xwc,pvc);}hbc("Error: invalid ds_list ID (ds_list_insert)");return -1;}function ds_list_replace(utc,xwc,pvc){var uwc=twc.mvc(utc);if(uwc){return uwc.bo(xwc,pvc);}hbc("Error: invalid ds_list ID (ds_list_replace)");return -1;}function ds_list_delete(utc,xwc){var uwc=twc.mvc(utc);if(uwc){return uwc.jvc(xwc);}}function ds_list_find_index(utc,
pvc){var uwc=twc.mvc(utc);if(uwc){var hh=uwc.zwc(pvc);if(hh!=undefined)return hh;return -1;}hbc("Error: invalid ds_list ID (ds_list_find_index)");return -1;}function ds_list_find_value(utc,xwc){var uwc=twc.mvc(utc);if(uwc){var hh=uwc.mvc(xwc);if(hh!=undefined)return hh;hbc("Error: invalid ds_list position (ds_list_find_value)");return 0;}hbc("Error: invalid ds_list ID (ds_list_find_value)");return -1;}function ds_list_sort(utc,axc){var uwc=twc.mvc(utc);if(uwc){uwc.bxc(axc);return 0;}hbc("Error: invalid ds_list ID (ds_list_sort)");
return 0;}function ds_list_shuffle(utc,axc){var uwc=twc.mvc(utc);if(uwc){uwc.cxc();return 0;}hbc("Error: invalid ds_list ID (ds_list_shuffle)");return 0;}function ds_list_write(utc){var uwc=twc.mvc(utc);if(!uwc){hbc("Error: invalid ds_list ID (ds_list_write)");return "";}return JSON.stringify(uwc.pfc);}function ds_list_read(utc,pwc){var uwc=twc.mvc(utc);if(!uwc){hbc("Error: invalid ds_list ID (ds_list_read)");return;}var dxc=JSON.parse(pwc);uwc.pfc=dxc;uwc.length=dxc.length;uwc.ay=dxc.length;}function ds_map_create(){
var exc={};var id=fxc.xnb(exc);return id;}function ds_map_destroy(utc){fxc.jvc(utc);}function ds_map_clear(utc){var exc=fxc.mvc(utc);if(exc){var gxc={};fxc.bo(utc,gxc);}}function ds_map_copy(hxc,kvc){var vwc=fxc.mvc(hxc);var wwc=fxc.mvc(kvc);if(vwc&&wwc){vwc=wwc.slice();fxc.bo(hxc,vwc);}}function ds_map_size(utc){var exc=fxc.mvc(utc);if(exc){var ay=0;for(var i in exc){if(exc[i]!=undefined)ay++;}return ay;}return 0;}function ds_map_empty(utc){return(ds_map_size(utc)==0);}function ds_map_add(utc,fu,pvc){var exc=fxc.mvc(utc);
if(exc){if(exc[fu]!=undefined){hbc("Error: KEY("+fu+") already present in ds_map["+utc+"], you can not add a key twice.");}exc[fu]=pvc;}}function ds_map_replace(utc,fu,pvc){var exc=fxc.mvc(utc);if(exc){if(exc[fu]==undefined){hbc("Error: Key("+fu+") NOT present in ds_map["+utc+"], you must add a key before replacing it.");}exc[fu]=pvc;}}function ds_map_delete(utc,fu){var exc=fxc.mvc(utc);if(exc){if(exc[fu]!=undefined)exc[fu]=undefined;}}function ds_map_exists(utc,fu){var exc=fxc.mvc(utc);if(exc){if(exc[fu]!=undefined)return true;
}return false;}function ds_map_find_value(utc,fu){var exc=fxc.mvc(utc);if(exc){if(exc[fu]!=undefined)return exc[fu];}hbc("Error: Key ("+fu+") not found in ds_map["+utc+"]");return 0;}function ds_map_find_previous(utc,fu){var exc=fxc.mvc(utc);if(typeof(fu)=="string"){if(exc){var ixc=0;for(var dt in exc){if(fu==dt)return ixc;ixc=dt;}}return 0;}else {var jxc=-1000000000000;var hpb=-1;if(exc){for(var dt in exc){if(exc[dt]!=undefined){var agc=(dt-fu);if(agc<0){if(jxc<agc){jxc=agc;hpb=dt;}}}}}return hpb;}}function ds_map_find_next(utc,
fu){var exc=fxc.mvc(utc);if(typeof(fu)=="string"){if(exc){var hpb=false;for(var dt in exc){if(hpb)return dt;if(fu==dt)hpb=true;}}return 0;}else {var jxc=1000000000000;var hpb=-1;if(exc){for(var dt in exc){var kxc=exc[dt];if(kxc!=undefined){var agc=(dt-fu);if(agc>0){if(jxc>agc){jxc=agc;hpb=dt;}}}}}return hpb;}}function ds_map_find_first(utc){var hpb=-1;var exc=fxc.mvc(utc);if(exc){var lxc=100000000000000;for(var dt in exc){if(exc[dt]!=undefined){if((lxc-dt)>0){lxc=dt;hpb=dt;}}}}if((hpb==-1)&&exc){for(var dt in exc){return dt;
}}return hpb;}function ds_map_find_last(utc){var ixc=0;var exc=fxc.mvc(utc);if(exc){for(var dt in exc){ixc=dt;}}return ixc;}function ds_map_write(utc){var mxc=fxc.mvc(utc);if(mxc==null){hbc("Error: invalid ds_map ID (ds_list_write)");return "";}return JSON.stringify(mxc);}function ds_map_read(utc,pwc){var exc=fxc.mvc(utc);if(exc==null){hbc("Error: invalid ds_map ID (ds_list_read)");return;}exc=JSON.parse(pwc);fxc.bo(utc,exc);}function nxc(oxc,pxc){this.sub=oxc;this.data=pxc;}function qxc(oxc,pxc){this.depth=oxc;
this.rxc=pxc;}function ds_priority_create(){return sxc.xnb(new txc());}function ds_priority_destroy(utc){sxc.jvc(utc);}function ds_priority_clear(utc){var uxc=sxc.mvc(utc);if(uxc==null||uxc==undefined){hbc("Error: invalid dest priority queue ds_priority_clear()");return;}uxc.oyb();}function ds_priority_copy(utc,kvc){var vxc=sxc.mvc(utc);if(vxc==null||vxc==undefined){hbc("Error: invalid dest priority queue ds_priority_copy()");return;}var wxc=sxc.mvc(kvc);if(wxc==null||wxc==undefined){hbc("Error: invalid source priority queue ds_priority_copy()");
return;}vxc.gu(wxc);sxc.bo(utc,vxc);}function ds_priority_size(utc){var uxc=sxc.mvc(utc);if(uxc==null||uxc==undefined){hbc("Error: invalid priority queue ds_priority_size()");return 0;}return uxc.length;}function ds_priority_empty(utc){if(ds_priority_size(utc)==0)return true;else return false;}function ds_priority_add(utc,pvc,xxc){var uxc=sxc.mvc(utc);if(uxc==null||uxc==undefined){hbc("Error: invalid priority queue ds_priority_add()");return;}var ex=new qxc(xxc,pvc);uxc.xnb(ex);}function ds_priority_change_priority(utc,
pvc,xxc){var uxc=sxc.mvc(utc);if(uxc==null||uxc==undefined){hbc("Error: invalid priority queue ds_priority_change_priority()");return;}while(i<uxc.length){var yxc=uxc.mvc(i);if(yxc!=null){var hh=yxc.rxc;if(typeof(pvc)=="number"&&typeof(hh)=="number"){if(yuc>abs(hh-pvc)){uxc.zxc(yxc);yxc.depth=xxc;uxc.xnb(yxc);return;}}else {if(hh==pvc){uxc.zxc(yxc);yxc.depth=xxc;uxc.xnb(yxc);return;}}}i++;}}function ds_priority_find_priority(utc,pvc){var uxc=sxc.mvc(utc);if(uxc==null||uxc==undefined){hbc("Error: invalid priority queue ds_priority_find_priority()");
return;}while(i<uxc.length){var yxc=uxc.mvc(i);if(yxc!=null){if(yxc.rxc==pvc)return yxc.depth;}i++;}return 0;}function ds_priority_delete_value(utc,pvc){var uxc=sxc.mvc(utc);if(uxc==null||uxc==undefined){hbc("Error: invalid priority queue ds_priority_delete_value()");return;}while(i<uxc.length){var yxc=uxc.mvc(i);if(yxc!=null){var hh=yxc.rxc;if(typeof(pvc)=="number"&&typeof(hh)=="number"){if(yuc>abs(hh-pvc))return yxc.depth;}else {if(hh==pvc)return yxc.depth;}}i++;}return 0;}function ds_priority_delete_min(utc){
var uxc=sxc.mvc(utc);if(uxc==null||uxc==undefined){hbc("Error: invalid priority queue ds_priority_delete_min()");return;}if(uxc.length<=0)return 0;var yxc=uxc.mvc(0);uxc.zxc(yxc);return yxc.rxc;}function ds_priority_find_min(utc){var uxc=sxc.mvc(utc);if(uxc==null||uxc==undefined){hbc("Error: invalid priority queue ds_priority_find_min()");return;}if(uxc.length<=0)return 0;var yxc=uxc.mvc(0);return yxc.rxc;}function ds_priority_delete_max(utc){var uxc=sxc.mvc(utc);if(uxc==null||uxc==undefined){hbc("Error: invalid priority queue ds_priority_delete_max()");
return;}if(uxc.length<=0)return 0;var yxc=uxc.mvc(uxc.length-1);uxc.zxc(yxc);return yxc.rxc;}function ds_priority_find_max(utc){var uxc=sxc.mvc(utc);if(uxc==null||uxc==undefined){hbc("Error: invalid priority queue ds_priority_find_max()");return;}if(uxc.length<=0)return 0;var yxc=uxc.mvc(uxc.length-1);return yxc.rxc;}function ds_priority_write(utc){var uwc=sxc.mvc(utc);if(uwc==null){hbc("Error: invalid ds_priority ID (ds_priority_write)");return "";}var ayc=[];for(var index in uwc.pfc){var byc=uwc.pfc[index];if(byc){
var qg=new nxc(byc.depth,byc.rxc);ayc.push(qg);}}return JSON.stringify(ayc);}function ds_priority_read(utc,pwc){var fdc=sxc.mvc(utc);if(fdc==null){hbc("Error: invalid ds_priority ID (ds_priority_read)");return;}var uwc=JSON.parse(pwc);fdc.oyb();for(var index in uwc){var dxc=uwc[index];ds_priority_add(utc,dxc.data,dxc.sub);}}function ds_queue_create(){var cyc=[];return dyc.xnb(cyc);}function ds_queue_destroy(utc){dyc.jvc(utc);}function ds_queue_clear(utc){var cyc=dyc.mvc(utc);if(!cyc){hbc("Error: invalid ds_queue ID (ds_queue_clear)");
return;}cyc=[];dyc.bo(utc,cyc);}function ds_queue_copy(hxc,kvc){var vwc=dyc.mvc(hxc);if(vwc==null){hbc("Error: invalid DEST ds_queue ID (ds_queue_copy)");return;}var wwc=dyc.mvc(kvc);if(wwc==null){hbc("Error: invalid SOURCE ds_queue ID (ds_queue_copy)");return;}vwc=wwc.slice();dyc.bo(hxc,vwc);}function ds_queue_size(utc){var cyc=dyc.mvc(utc);if(cyc==null){hbc("Error: invalid ds_queue ID (ds_queue_size)");return 0;}return cyc.length;}function ds_queue_empty(utc){return(ds_queue_size(utc)==0);}function ds_queue_enqueue(utc,
pvc){var cyc=dyc.mvc(utc);if(cyc==null){hbc("Error: invalid ds_queue ID (ds_queue_enqueue)");return 0;}cyc[cyc.length]=pvc;}function ds_queue_dequeue(utc){var cyc=dyc.mvc(utc);if(cyc==null){hbc("Error: invalid ds_queue ID (ds_queue_dequeue)");return 0;}if(cyc.length==0)return 0;hh=cyc.splice(0,1);return hh[0];}function ds_queue_head(utc){var cyc=dyc.mvc(utc);if(cyc==null){hbc("Error: invalid ds_queue ID (ds_queue_head)");return 0;}if(cyc.length==0)return 0;return cyc[0];}function ds_queue_tail(utc){var cyc=dyc.mvc(utc);
if(cyc==null){hbc("Error: invalid ds_queue ID (ds_queue_tail)");return 0;}if(cyc.length==0)return 0;return cyc[cyc.length-1];}function ds_queue_write(utc){var fdc=dyc.mvc(utc);if(fdc==null){hbc("Error: invalid ds_queue ID (ds_queue_write)");return "";}return JSON.stringify(fdc);}function ds_queue_read(utc,pwc){var fdc=dyc.mvc(utc);if(fdc==null){hbc("Error: invalid ds_queue ID (ds_list_read)");return;}fdc=JSON.parse(pwc);dyc.bo(utc,fdc);}function ds_stack_create(){var cyc=[];return eyc.xnb(cyc);}function ds_stack_destroy(utc){
eyc.jvc(utc);}function ds_stack_clear(utc){var cyc=eyc.mvc(utc);if(cyc==null){hbc("Error: invalid ds_stack ID (ds_stack_clear)");return;}cyc=[];eyc.bo(utc,cyc);}function ds_stack_copy(utc,kvc){var vwc=eyc.mvc(utc);if(vwc==null){hbc("Error: invalid DEST ds_stack ID (ds_stack_clear)");return;}var wwc=eyc.mvc(kvc);if(wwc==null){hbc("Error: invalid SOURCE ds_stack ID (ds_stack_clear)");return;}vwc=wwc.slice();eyc.bo(utc,vwc);}function ds_stack_size(utc){var cyc=eyc.mvc(utc);if(cyc==null){hbc("Error: invalid ds_stack ID (ds_stack_size)");
return 0;}return cyc.length;}function ds_stack_empty(utc){var cyc=eyc.mvc(utc);if(cyc==null){hbc("Error: invalid ds_stack ID (ds_stack_empty)");return true;}if(cyc.length==0)return true;else return false;}function ds_stack_push(utc,pvc){var cyc=eyc.mvc(utc);if(cyc==null){hbc("Error: invalid ds_stack ID (ds_stack_push)");return;}cyc.push(pvc);}function ds_stack_pop(utc){var cyc=eyc.mvc(utc);if(cyc==null){hbc("Error: invalid ds_stack ID (ds_stack_pop)");return 0;}if(cyc.length==0){hbc("Error: invalid stack is empty (ds_stack_pop)");
return 0;}return cyc.pop();}function ds_stack_top(utc){var cyc=eyc.mvc(utc);if(cyc==null){hbc("Error: invalid ds_stack ID (ds_stack_pop)");return 0;}if(cyc.length==0){hbc("Error: invalid stack is empty (ds_stack_pop)");return 0;}return cyc[cyc.length-1];}function ds_stack_write(utc){var cyc=eyc.mvc(utc);if(cyc==null){hbc("Error: invalid ds_stack ID (ds_stack_write)");return;}return JSON.stringify(cyc);}function ds_stack_read(utc,pwc){var cyc=eyc.mvc(utc);if(cyc==null){hbc("Error: invalid ds_stack ID (ds_stack_read)");
return;}cyc=JSON.parse(pwc);eyc.bo(utc,cyc);}var fyc=false;var gyc='Trying to stop non-existing sound.',hyc='Trying to draw a non-existing sprite.',iyc='Trying to draw a non-existing background.',jyc='Cannot compare arguments.',kyc='Trying to replace non-existing resource.',lyc='File does not exist.',myc='The particle emitter must first be created.';var nyc=-1,oyc=[],pyc=[];function action_execute_script(){qyc("action_execute_script()");}function action_show_info(){qyc("action_show_info()");}function action_show_video(){
qyc("action_show_video()");}function ryc(){}function action_path_old(){ryc();}function action_draw_font(){ryc();}function action_draw_font_old(){ryc();}function action_fill_color(){ryc();}function action_line_color(){ryc();}function action_highscore(){ryc();}function action_if_question(){ryc();}function action_set_relative(syc){fyc=(syc<0.5)?false:true;}function action_set_cursor(tyc,uyc){window_set_cursor(tyc);if(!uyc){vyc(false);}else {vyc(true);}}function action_set_sprite(wyc,tyc,xyc){var yyc=zyc(tyc);if(sprite_exists(yyc)){
wyc.sprite_index=yyc;}if(xyc>0){wyc.image_xscale=xyc;wyc.image_yscale=xyc;}}function action_set_motion(wyc,azc,pvc){if(true==fyc){wyc.bzc(azc,pvc);}else {wyc.setdirection(azc);wyc.setspeed(pvc);}}function action_set_hspeed(wyc,czc){if(fyc){wyc.sethspeed(wyc.hspeed+czc);}else {wyc.sethspeed(czc);}}function action_set_vspeed(wyc,czc){if(fyc){wyc.setvspeed(wyc.vspeed+czc);}else {wyc.setvspeed(czc);}}function action_set_gravity(wyc,dzc,ezc){if(true==fyc){wyc.gravity_direction+=dzc;wyc.gravity+=ezc;}else {wyc.fzc=dzc;
wyc.gravity=ezc;}}function action_set_friction(wyc,gzc){if(true==fyc){wyc.friction+=gzc;}else {wyc.friction=gzc;}}function action_move(wyc,direction,size){var jn=false;var qv=0;if(direction.length!=9){hzc("Incorrect argument for action_move()");return;}for(qv=0;qv<9;qv++){jn=((true==jn)||(direction[qv]=='1'))?true:false;}if(true!=jn){return;}if(true==fyc){wyc.setspeed(wyc.speed+size);}else {wyc.setspeed(size);}do {qv=floor(izc(9));}while(!(direction[qv]=='1'));switch(qv){case 0:wyc.setdirection(225);break;
case 1:wyc.setdirection(270);break;case 2:wyc.setdirection(315);break;case 3:wyc.setdirection(180);break;case 4:{wyc.setdirection(0);wyc.setspeed(0);break;}case 5:wyc.setdirection(0);break;case 6:wyc.setdirection(135);break;case 7:wyc.setdirection(90);break;case 8:wyc.setdirection(45);break;}}function action_move_point(wyc,vtc,wtc,czc){if(true==fyc){move_towards_point(wyc,vtc+wyc.x,wtc+wyc.y,czc);}else {move_towards_point(wyc,vtc,wtc,czc);}}function action_move_to(wyc,vtc,wtc){if(true==fyc){wyc.vpb(vtc+wyc.x,
wtc+wyc.y);}else {wyc.vpb(vtc,wtc);}}function action_move_start(wyc){wyc.vpb(wyc.xstart,wyc.ystart);}function action_move_random(wyc,jzc,kzc){move_random(wyc,jzc,kzc);}function action_snap(wyc,lzc,mzc){move_snap(wyc,lzc,mzc);}function action_wrap(wyc,nzc){var ozc=zyc(nzc);wyc.ozc(wyc,(ozc==0)||(ozc==2)?true:false,(ozc==1)||(ozc==2)?true:false);}function action_reverse_xdir(wyc){wyc.sethspeed(-wyc.hspeed);}function action_reverse_ydir(wyc){wyc.setvspeed(-wyc.vspeed);}function action_move_contact(wyc,azc,pzc,
qzc){move_contact_solid(wyc,azc,pzc)}function action_bounce(wyc,rzc,qzc){szc(wyc,(rzc>=0.5)?true:false,(qzc==1)?true:false);}function action_kill_object(wyc){instance_destroy(wyc);}function action_create_object(wyc,tzc,vtc,wtc){var uzc=zyc(tzc);if(true!=object_exists(uzc)){hzc("Creating existence for non-existent object: "+uzc.toString());return;}var vzc=null;if(true==fyc){vzc=wzc.xzc(vtc+wyc.x,wtc+wyc.y,uzc);}else {vzc=wzc.xzc(vtc,wtc,uzc);}vzc.yzc(zzc,0,vzc,vzc);vzc.aad=true;}function action_create_object_motion(wyc,
tzc,vtc,wtc,czc,azc){var uzc=zyc(tzc);if(true!=object_exists(uzc)){hzc("Creating instance for non-existent object: "+uzc);return;}var vzc=null;if(true==fyc){vzc=wzc.xzc(vtc+wyc.x,wtc+wyc.y,uzc);}else {vzc=wzc.xzc(vtc,wtc,uzc);}vzc.setspeed(czc);vzc.setdirection(azc);vzc.yzc(zzc,0,vzc,vzc);vzc.aad=true;}function action_create_object_random(wyc,bad,cad,dad,ead,vtc,wtc){if(!object_exists(bad|0)&&!object_exists(cad|0)&&!object_exists(dad|0)&&!object_exists(ead|0)){return;}while(true){var fad=~~izc(4);var id=arguments[fad+1]|0;
if(!object_exists(id)){continue;}var vzc;if(true==fyc){vzc=wzc.xzc(vtc+wyc.x,wtc+wyc.y,id);}else {vzc=wzc.xzc(vtc,wtc,id);}vzc.yzc(zzc,0,vzc,vzc);vzc.aad=true;return;}}function action_sprite_set(wyc,tyc,gad,had){var yyc=zyc(tyc);if(sprite_exists(yyc)){wyc.sprite_index=yyc;}if(gad>=0){wyc.image_index=gad;}wyc.image_speed=had;}function action_sprite_color(iad){draw_set_color(iad);}function action_sound(jad,kad){var lad=zyc(jad);if(kad>=0.5){mad.nad(lad);}mad.oad(lad);}function action_set_alarm(wyc,pad,qad){
var alarm=zyc(qad);var rad=zyc(pad);if(!fyc||(wyc.sad(alarm)<0)){wyc.tad(alarm,rad);}else {wyc.tad(alarm,wyc.sad(alarm)+rad);}}function action_end_game(){game_end();}function action_restart_game(){game_restart();}function action_if_dice(uad){var vad;if(uad<=1){vad=1;}else {vad=(izc(zyc(1000*uad))<=1000)?1:0;}return vad;}function action_if_variable(){var lq=0;if(typeof(arguments[0])!=typeof(arguments[1])){hzc(jyc);return;}if(typeof(arguments[0])=="string"){lq=(arguments[0]==arguments[1]);}else {lq=arguments[0]-arguments[1];
}var em;if(zyc(arguments[2])==1){em=(lq<0)?1:0;}else if(zyc(arguments[2])==2){em=(lq>0)?1:0;}else {em=(lq==0)?1:0;}return em;}function action_draw_variable(wyc,wad,vtc,wtc){var xad="";if(typeof(arguments[0])=="number"){if(wad==zyc(wad)){xad=(zyc(wad)|0).toString();}else {xad=wad.toFixed(2).toString();}}else {xad=wad.toString();}if(fyc){draw_text(vtc+wyc.x,wtc+wyc.y,xad);}else {draw_text(vtc,wtc,xad);}}function action_set_score(yad){if(fyc){g_pBuiltIn.score+=zyc(yad);}else {g_pBuiltIn.score=zyc(yad);}}function action_if_score(){
var em;if(zyc(arguments[1])==1){em=(g_pBuiltIn.score<arguments[0])?1:0;}else if(zyc(arguments[1])==2){em=(g_pBuiltIn.score>arguments[0])?1:0;}else {em=(g_pBuiltIn.score==arguments[0])?1:0;}return em;}function action_draw_score(wyc,vtc,wtc,zad){var abd="";if(zad){abd=zad;}var score=abd+g_pBuiltIn.score.toString();if(fyc){draw_text(vtc+wyc.x,wtc+wyc.y,score);}else {draw_text(vtc,wtc,score);}}function action_set_life(bbd){var cbd=g_pBuiltIn.lives;if(true==fyc){g_pBuiltIn.lives+=zyc(bbd);}else {g_pBuiltIn.lives=zyc(bbd);
}if((cbd>0)&&(g_pBuiltIn.lives<=0)){dbd.yzc(ebd,0);}}function action_if_life(){var em;if(zyc(arguments[1])==1){em=(g_pBuiltIn.lives<arguments[0])?1:0;}else if(zyc(arguments[1])==2){em=(g_pBuiltIn.lives>arguments[0])?1:0;}else {em=(g_pBuiltIn.lives==arguments[0])?1:0;}return em;}function action_draw_life(wyc,vtc,wtc,fbd){var gbd=fbd;if(!gbd){gbd="";}var lives=gbd+g_pBuiltIn.lives.toString();if(fyc){draw_text(vtc+wyc.x,wtc+wyc.y,lives);}else {draw_text(vtc,wtc,lives);}}function action_draw_life_images(wyc,vtc,
wtc,tyc){if(sprite_exists(zyc(tyc))){var hbd=ibd.mvc(zyc(tyc));var w=hbd.width;for(var i=0;i<g_pBuiltIn.lives;i++){if(fyc){hbd.fcc(0,vtc+wyc.x+(i*w),wtc+wyc.y,1,1,0,jbd,1);}else {hbd.fcc(0,vtc+(i*w),wtc,1,1,0,jbd,1);}}}}function action_set_health(wyc,kbd){var lbd=0.0;lbd=g_pBuiltIn.health;if(true==fyc){g_pBuiltIn.health+=kbd;}else {g_pBuiltIn.health=kbd;}if((lbd>0)&&(g_pBuiltIn.health<=0)){event_perform(wyc,wyc,mbd,nbd);}}function action_if_health(wyc,obd,pbd){var em;pbd=~~pbd;if(pbd==1){em=(g_pBuiltIn.health<obd)?1:0;
}else if(pbd==2){em=(g_pBuiltIn.health>obd)?1:0;}else {em=(g_pBuiltIn.health==obd)?1:0;}return em;}function action_set_caption(qbd,rbd,sbd,tbd,ubd,vbd){g_pBuiltIn.show_score=zyc(qbd)==1?true:false;g_pBuiltIn.caption_score=rbd;g_pBuiltIn.show_lives=zyc(sbd)==1?true:false;g_pBuiltIn.caption_lives=tbd;g_pBuiltIn.show_health=zyc(ubd)==1?true:false;g_pBuiltIn.caption_health=vbd;}function action_draw_sprite(wyc,tyc,vtc,wtc,gad){if(!sprite_exists(zyc(tyc))){hzc(hyc);return;}var wbd;if(gad<0){wbd=wyc.image_index;
}else {wbd=Math.floor(gad);}var hbd=ibd.mvc(zyc(tyc));if(fyc){hbd.fcc(wbd,vtc+wyc.x,wtc+wyc.y,1,1,0,jbd,1);}else {hbd.fcc(wbd,vtc,wtc,1,1,0,jbd,1);}}function action_draw_background(wyc,xbd,vtc,wtc,ybd){if(true!=zbd(zyc(acd[0].bcd))){hzc(iyc);return;}var ccd=dcd.mvc(zyc(xbd));var ecd=(ybd>=0.5)?true:false;if(fyc){}else {}}function action_draw_text(wyc,fcd,vtc,wtc){if(fyc){draw_text(vtc+wyc.x,wtc+wyc.y,fcd);}else {draw_text(vtc,wtc,fcd);}}function action_draw_text_transformed(wyc,gcd,vtc,wtc,hcd,icd,jcd){if(fyc){
draw_text_transformed(vtc+wyc.x,wtc+wyc.y,gcd,hcd,icd,jcd);}else {draw_text_transformed(vtc,wtc,gcd,hcd,icd,jcd);}}function action_draw_rectangle(wyc,vtc,wtc,svc,tvc,kcd){if(fyc){draw_rectangle(vtc+wyc.x,wtc+wyc.y,svc+wyc.x,tvc+wyc.y,(kcd>=0.5)?true:false);}else {draw_rectangle(vtc,wtc,svc,tvc,(kcd>=0.5)?true:false);}}function action_draw_line(wyc,vtc,wtc,svc,tvc){if(fyc){draw_line(vtc+wyc.x,wtc+wyc.y,svc+wyc.x,tvc+wyc.y);}else {draw_line(vtc,wtc,svc,tvc);}}function action_color(iad){draw_set_color(iad);
}function action_font(lcd,mcd){draw_set_font(lcd);draw_set_halign(mcd);}function action_draw_health(wyc,vtc,wtc,svc,tvc,iad,ncd){var zo=ap=amb=ocd=0;switch(zyc(iad)){case 0:zo=pcd;break;case 1:zo=pcd;break;case 2:zo=qcd;break;case 3:zo=rcd;break;case 4:zo=jbd;break;case 5:zo=scd;break;case 6:zo=tcd;break;case 7:zo=ucd;break;case 8:zo=vcd;break;case 9:zo=wcd;break;case 10:zo=xcd;break;case 11:zo=ycd;break;case 12:zo=zcd;break;case 13:zo=add;break;case 14:zo=bdd;break;case 15:zo=cdd;break;case 16:zo=ddd;break;}switch(zyc(ncd)){
case 0:{ap=ycd;amb=add;ocd=zcd;}break;case 1:{ap=pcd;amb=qcd;ocd=jbd;}break;case 2:ap=pcd;break;case 3:ap=qcd;break;case 4:ap=rcd;break;case 5:ap=jbd;break;case 6:ap=scd;break;case 7:ap=tcd;break;case 8:ap=ucd;break;case 9:ap=vcd;break;case 10:ap=wcd;break;case 11:ap=xcd;break;case 12:ap=ycd;break;case 13:ap=zcd;break;case 14:ap=add;break;case 15:ap=bdd;break;case 16:ap=cdd;break;case 17:ap=ddd;break;}if(zyc(ncd)>1){amb=ap;ocd=ap;}if(fyc){edd(vtc+wyc.x,wtc+wyc.y,svc+wyc.x,tvc+wyc.y,g_pBuiltIn.health,zo,ap,amb,ocd,
0,(iad>=0.5)?true:false,true);}else {edd(vtc,wtc,svc,tvc,g_pBuiltIn.health,zo,ap,amb,ocd,0,(iad>=0.5)?true:false,true);}}function action_another_room(fdd,gdd){room_goto(zyc(fdd));}function action_current_room(gdd){room_restart();}function action_previous_room(){room_goto_previous();}function action_next_room(){room_goto_next();}function action_if_previous_room(){return((g_pBuiltIn.get_current_room()!=g_pBuiltIn.room_first)?1:0);}function action_if_next_room(){return((g_pBuiltIn.get_current_room()!=g_pBuiltIn.room_last)?1:0);
}function action_partsyst_create(oxc){if(nyc<0){nyc=hdd();}idd(nyc);jdd(nyc,zyc(oxc));oyc=new Array(16);pyc=new Array(16);for(var i=0;i<16;i++){oyc[i]=-1;pyc[i]=-1;}}function action_partsyst_destroy(){if(nyc>=0){kdd(nyc);}nyc=-1;}function action_partsyst_clear(){if(nyc>=0){ldd(nyc);}}function action_parttype_create_old(mdd,ndd,odd,pdd,qdd,rdd){var type=zyc(mdd);var qw=zyc(ndd);var sdd=zyc(qdd);var tdd=zyc(rdd);if(nyc<0){nyc=hdd();}if(oyc[type]<0){oyc[type]=udd();}var vdd=oyc[type];wdd(vdd,qw);xdd(vdd,odd,pdd,
0,0);ydd(vdd,sdd,tdd);}function action_parttype_create(mdd,ndd,tyc,odd,pdd,zdd){var type=zyc(mdd);var qw=zyc(ndd);var hbd=zyc(tyc);if(nyc<0){nyc=hdd();}if(oyc[type]<0){oyc[type]=udd();}var vdd=oyc[type];wdd(vdd,qw);aed(vdd,hbd,true,false,false);xdd(vdd,odd,pdd,zdd,0);}function action_parttype_color(mdd,bed,qdd,rdd,ced,ded){var type=zyc(mdd);var eed=zyc(bed);var sdd=zyc(qdd);var tdd=zyc(rdd);if(nyc<0){nyc=hdd();}if(oyc[type]<0){oyc[type]=udd();}var vdd=oyc[type];if(eed==0){fed(vdd,sdd,tdd);}else {ydd(vdd,sdd,
tdd);}ged(vdd,ced,ded);}function action_parttype_life(mdd,hed,ied){var type=zyc(mdd);var jed=zyc(hed);var ked=zyc(ied);if(nyc<0){nyc=hdd();}if(oyc[type]<0){oyc[type]=udd();}var vdd=oyc[type];led(vdd,jed,ked);}function action_parttype_speed(mdd,med,ned,oed,ped,qed){var type=zyc(mdd);if(nyc<0){nyc=hdd();}if(oyc[type]<0){oyc[type]=udd();}var vdd=oyc[type];red(vdd,med,ned,-qed,0);sed(vdd,oed,ped,0,0);}function action_parttype_gravity(mdd,ted,ued){var type=zyc(mdd);if(nyc<0){nyc=hdd();}if(oyc[type]<0){oyc[type]=udd();
}var vdd=oyc[type];ved(vdd,ted,ued);}function action_parttype_secondary(mdd,wed,xed,yed,zed){var type=zyc(mdd);var afd=zyc(xed);var bfd=zyc(wed);var cfd=zyc(zed);var dfd=zyc(yed);if(nyc<0){nyc=hdd();}if(oyc[type]<0){oyc[type]=udd();}var vdd=oyc[type];efd(vdd,afd,oyc[bfd]);ffd(vdd,cfd,oyc[dfd]);}function action_partemit_create(gfd,ndd,hfd,ifd,jfd,kfd){var lfd=zyc(gfd);var qw=zyc(ndd);if(nyc<0){nyc=hdd();}if(pyc[lfd]<0){pyc[lfd]=mfd(nyc);}var nfd=pyc[lfd];ofd(nyc,nfd,hfd,ifd,jfd,kfd,qw,pfd);}function action_partemit_destroy(gfd){
var lfd=zyc(gfd);if(nyc<0){nyc=hdd();}if(pyc[lfd]<0){return;}var nfd=pyc[lfd];qfd(nyc,nfd);}function action_partemit_burst(gfd,mdd,rfd){var lfd=zyc(gfd);var type=zyc(mdd);var sfd=zyc(rfd);if(nyc<0){nyc=hdd();}if(pyc[lfd]<0){hzc(myc);return;}var nfd=pyc[lfd];tfd(nyc,nfd,oyc[type],sfd);}function action_partemit_stream(gfd,mdd,rfd){var lfd=zyc(gfd);var type=zyc(mdd);var sfd=zyc(rfd);if(nyc<0){nyc=hdd();}if(pyc[lfd]<0){hzc(myc);return;}var nfd=pyc[lfd];ufd(nyc,nfd,oyc[type],sfd);}function action_draw_gradient_hor(wyc,
vtc,wtc,svc,tvc,vfd,ncd){if(fyc){wfd(vtc+wyc.x,wtc+wyc.y,svc+wyc.x,tvc+wyc.y,vfd,ncd,false,false);}else {wfd(vtc,wtc,svc,tvc,vfd,ncd,false,false);}}function action_draw_gradient_vert(wyc,vtc,wtc,svc,tvc,vfd,ncd){if(fyc){wfd(vtc+wyc.x,wtc+wyc.y,svc+wyc.x,tvc+wyc.y,vfd,ncd,true,false);}else {wfd(vtc,wtc,svc,tvc,vfd,ncd,true,false);}}function action_draw_arrow(wyc,vtc,wtc,svc,tvc,xfd){if(fyc){draw_arrow(vtc+wyc.x,wtc+wyc.y,svc+wyc.x,tvc+wyc.y,xfd);}else {draw_arrow(vtc,wtc,svc,tvc,xfd);}}function action_if_empty(wyc,
yfd,zfd,agd){var bgd=yfd;var cgd=zfd;if(fyc){bgd+=wyc.x;cgd+=wyc.y;}if(zyc(agd)==0){return place_free(wyc,bgd,cgd)?1:0;}return place_empty(wyc,bgd,cgd)?1:0;}function action_if_collision(wyc,yfd,zfd,agd){var bgd=yfd;var cgd=zfd;if(fyc){bgd+=wyc.x;cgd+=wyc.y;}if(zyc(agd)==0){return !place_free(wyc,bgd,cgd)?1:0;}return !place_empty(wyc,bgd,cgd)?1:0;}function action_if(yfd){return yfd;}function action_if_number(yfd,zfd,agd){var fad=instance_number(zyc(yfd));var em;if(zyc(agd)==1){em=(fad<zfd)?1:0;}else if(zyc(agd)==2){
em=(fad>zfd)?1:0;}else {em=(fad==zfd)?1:0;}return em;}function action_if_object(wyc,pxc,vtc,wtc){if(fyc){return place_meeting(wyc,vtc+wyc.x,wtc+wyc.y,zyc(pxc))?1:0;}return place_meeting(wyc,vtc,wtc,zyc(pxc))?1:0;}function action_if_mouse(yfd){var em;switch(zyc(yfd)){case 1:em=(guc.dgd(1)||guc.egd(1))?1:0;break;case 2:em=(guc.dgd(2)||guc.egd(2))?1:0;break;case 3:em=(guc.dgd(3)||guc.egd(3))?1:0;break;default :em=(guc.fgd()==0)?1:0;}return em;}function action_if_aligned(wyc,vtc,wtc){if(vtc>0){if(Math.abs(wyc.x-vtc*zyc(wyc.x/vtc))>=0.001){
return 0;}}if(wtc>0){if(Math.abs(wyc.y-wtc*zyc(wyc.y/wtc))>=0.001){return 0;}}return 1;}function action_path(wyc,ggd,czc,hgd,igd){wyc.jgd(zyc(ggd),czc,1,0,(igd>=0.5)?true:false,zyc(hgd));}function action_path_end(){wyc.jgd(-1,0,1,0,false,0);}function action_path_position(wyc,xwc){if(fyc){wyc.path_position+=xwc;}else {wyc.path_position=xwc;}}function action_path_speed(wyc,czc){if(fyc){wyc.path_speed=wyc.path_speed+czc;}else {wyc.path_speed=czc;}}function action_linear_step(wyc,vtc,wtc,kgd,lgd){if(fyc){mp_linear_step(wyc,
vtc+wyc.x,wtc+wyc.y,kgd,mgd,(lgd>=0.5)?true:false);}else {mp_linear_step(wyc,vtc,wtc,kgd,mgd,(lgd>=0.5)?true:false);}}function action_potential_step(wyc,vtc,wtc,kgd,lgd){if(fyc){mp_potential_step(wyc,vtc+wyc.x,wtc+wyc.y,kgd,mgd,(lgd>=0.5)?true:false);}else {mp_potential_step(wyc,vtc,wtc,kgd,mgd,(lgd>=0.5)?true:false);}}function action_inherited(wyc,ngd){if(!wyc)return;event_inherited(wyc,ngd);}function action_change_object(wyc,ogd,pgd){instance_change(wyc,ogd|0,(pgd>=0.5)?true:false);}function action_kill_position(wyc,
vtc,wtc){if(fyc){position_destroy(vtc+wyc.x,wtc+wyc.y);}else {position_destroy(vtc,wtc);}}function action_end_sound(jad){var lad=mad.mvc(zyc(jad));if((lad!=null)&&(lad!=undefined)){mad.qgd(jad);}else {hzc(gyc);}}function action_if_sound(jad){var lad=mad.mvc(zyc(jad));if((lad!=null)&&(lad!=undefined)){return(mad.rgd(jad)?1:0);}return 0;}function action_effect(wyc,sgd,vtc,wtc,xfd,iad,tgd){if(fyc){ugd((tgd<0.5)?true:false,zyc(sgd),vtc+wyc.x,wtc+wyc.y,zyc(xfd),zyc(iad));}else {ugd((tgd<0.5)?true:false,zyc(sgd),
vtc,wtc,zyc(xfd),zyc(iad));}}function action_message(vgd){alert(vgd);}function action_sprite_transform(wyc,jzc,kzc,wgd,azc){wyc.image_xscale=jzc;wyc.image_yscale=kzc;wyc.image_angle=wgd;if((azc==1)||(azc==3)){wyc.image_xscale=-wyc.image_xscale;}if((azc==2)||(azc==3)){wyc.image_yscale=-wyc.image_yscale;}}function action_sleep(xgd,ygd){if(ygd>=0.5){wzc.fcc();}zgd(xgd);}function action_snapshot(ahd){surface_save(0,ahd);}function action_replace_sprite(tyc,ahd,bhd){if(!sprite_exists(zyc(tyc))){hzc(kyc);return;
}if(!file_exists(ahd)){hzc(lyc);return;}var hbd=ibd.mvc(zyc(tyc));sprite_replace(zyc(tyc),ahd,zyc(bhd),hbd.chd,hbd.transparent,hbd.smooth,hbd.preload,hbd.xOrigin,hbd.yOrigin);}function action_replace_sound(jad,ahd){if(!sound_exists(zyc(jad))){hzc(kyc);return;}if(true!=file_exists(ahd)){hzc(lyc);return;}var lad=mad.mvc(zyc(jad));sound_replace(zyc(jad),ahd,lad.kind,lad.preload);}function action_replace_background(xbd,ahd){if(!background_exists(zyc(xbd))){hzc(kyc);return;}if(!dhd(ahd)){hzc(lyc);return;
}var ehd=dcd.mvc(zyc(xbd));background_replace(zyc(xbd),ahd,ehd.transparent,ehd.smooth,ehd.preload);}function action_set_timeline(wyc,jwc,xwc){action_timeline_set(wyc,jwc,xwc);}function action_timeline_set(wyc,jwc,xwc){wyc.timeline_index=jwc;wyc.timeline_position=xwc;}function action_set_timeline_position(wyc,xwc){if(fyc){wyc.timeline_position+=xwc;}else {wyc.timeline_position=xwc;}}function action_set_timeline_speed(wyc,czc){if(fyc){wyc.timeline_speed+=czc;}else {wyc.timeline_speed=czc;}}function action_timeline_start(wyc){
wyc.fhd=false;wyc.timeline_position=0;}function action_timeline_stop(wyc){wyc.fhd=true;wyc.timeline_position=0;}function action_timeline_pause(wyc){wyc.fhd=true;}function action_draw_ellipse(wyc,vtc,wtc,svc,tvc,kcd){if(fyc){draw_ellipse(vtc+wyc.x,wtc+wyc.y,svc+wyc.x,tvc+wyc.y,(kcd>=0.5)?true:false);}else {draw_ellipse(vtc,wtc,svc,tvc,(kcd>=0.5)?true:false);}}function action_draw_ellipse_gradient(wyc,vtc,wtc,svc,tvc,vfd,ncd){if(fyc){ghd(vtc+wyc.x,wtc+wyc.y,svc+wyc.x,tvc+wyc.y,vfd,ncd,false);}else {ghd(vtc,
wtc,svc,tvc,vfd,ncd,false);}}function action_splash_web(hhd){YoYo_OpenURL(hhd);}function action_webpage(hhd){YoYo_OpenURL(hhd);}function action_highscore_show(ihd,jhd,vfd,ncd,khd,lhd,mhd){highscore_set_background(zyc(ihd));highscore_set_border((zyc(jhd)==1)?true:false);highscore_set_colors(zyc(vfd),zyc(ncd));highscore_set_font(khd,lhd,mhd);highscore_show(g_pBuiltIn.score);guc.oyb();}function action_highscore_clear(){highscore_clear();}function action_fullscreen(nhd){var ohd;if(nhd==0){if(window_get_fullscreen()){
ohd=false;}else {ohd=false;}}else if(nhd==1){ohd=false;}else if(nhd==2){ohd=true;}else return;window_set_fullscreen(ohd);}function background_exists(phd){if(dcd.qhd(phd)===null)return false;return true;}function background_get_name(phd){var rhd=dcd.qhd(phd);if(!rhd)return "";return rhd.pName;}function background_name(phd){return background_get_name(phd);}function background_get_width(phd){var rhd=dcd.qhd(phd);if(!rhd)return 0;return rhd.shd.w;}function background_get_height(phd){var rhd=dcd.qhd(phd);if(!rhd)return 0;
return rhd.shd.h;}function background_create_from_screen(vtc,wtc,bvc,cvc,thd,uhd){var vhd=surface_create(bvc,cvc);var vwc=whd.mvc(vhd);var xhd=vwc.getContext('2d');xhd.drawImage(jtc,-vtc,-wtc);var yhd=new zhd();var aid=new bid();yhd.shd=aid;aid.x=0;aid.y=0;aid.w=bvc;aid.h=cvc;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.tp=vhd;aid.cid=vwc;return dcd.did(yhd);}function background_create_from_surface(utc,vtc,wtc,bvc,cvc,thd,uhd){var wwc=whd.mvc(utc);var vhd=surface_create(bvc,
cvc);var vwc=whd.mvc(vhd);var xhd=vwc.getContext('2d');xhd.drawImage(wwc,-vtc,-wtc);var yhd=new zhd();var aid=new bid();yhd.shd=aid;aid.x=0;aid.y=0;aid.w=bvc;aid.h=cvc;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.tp=vhd;aid.cid=vwc;return dcd.did(yhd);}function background_create_color(bvc,cvc,eid){var fid=surface_create(bvc,cvc);var gid=whd.mvc(fid);var xhd=gid.getContext('2d');xhd.globalAlpha=1.0;xhd.fillStyle=hid(iid(eid),1);xhd.fillRect(0,0,bvc,cvc);
var yhd=new zhd();var aid=new bid();yhd.shd=aid;aid.x=0;aid.y=0;aid.w=bvc;aid.h=cvc;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.tp=fid;aid.cid=gid;return dcd.did(yhd);}function background_create_gradient(bvc,cvc,vfd,ncd,sgd){var fid=surface_create(bvc,cvc);var gid=whd.mvc(fid);var xhd=gid.getContext('2d');xhd.globalAlpha=1.0;var jid;if(sgd==0){jid=xhd.createLinearGradient(0,0,bvc,0);}else {jid=xhd.createLinearGradient(0,0,0,cvc);}jid.addColorStop("0",hid(iid(vfd),
1));jid.addColorStop("1.0",hid(iid(ncd),1));xhd.fillStyle=jid;xhd.fillRect(0,0,bvc,cvc);var yhd=new zhd();var aid=new bid();yhd.shd=aid;aid.x=0;aid.y=0;aid.w=bvc;aid.h=cvc;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.tp=fid;aid.cid=gid;return dcd.did(yhd);}function background_delete(kid){return dcd.lid(kid);}function background_duplicate(mid){var rhd=dcd.qhd(mid);if(rhd!=null&&rhd!=undefined){var nid=oid(rhd.shd);var yhd=new zhd();yhd.pName=rhd.pName;yhd.transparent=rhd.transparent;
yhd.smooth=rhd.smooth;yhd.preload=rhd.preload;yhd.qz=true;var aid=yhd.shd=new bid();aid.qz(rhd.shd);aid.tp=pid(nid);aid.cid=qid[aid.tp];aid.x=0;aid.y=0;return dcd.did(yhd);}return -1;}function background_assign(hxc,gvc){var vwc=dcd.qhd(hxc);var wwc=dcd.qhd(gvc);if(vwc!=null&&vwc!=undefined&&wwc!=null&&wwc!=undefined){var nid=oid(wwc.shd);var yhd=new zhd();yhd.pName=wwc.pName;yhd.transparent=wwc.transparent;yhd.smooth=wwc.smooth;yhd.preload=wwc.preload;yhd.shd=new bid();yhd.shd.qz(wwc.shd);yhd.shd.tp=pid(nid);
yhd.shd.x=0;yhd.shd.y=0;return dcd.rid(hxc,yhd);}}function draw_background(mid,vtc,wtc){var nid=dcd.qhd(mid);if(!nid)return;sid(nid.shd,vtc,wtc,tid);}function draw_background_stretched(mid,vtc,wtc,bvc,cvc){var nid=dcd.qhd(mid);if(!nid)return;uid(nid.shd,vtc,wtc,bvc,cvc,0xffffff,1.0);}function draw_background_tiled(mid,vtc,wtc){var nid=dcd.qhd(mid);if(!nid)return;vid(nid.shd,vtc,wtc,true,true,0xffffff,1);}function draw_background_part(mid,wid,xid,yid,zid,vtc,wtc){var nid=dcd.qhd(mid);if(!nid)return;ajd(nid.shd,
wid,xid,yid,zid,vtc,wtc,1,1,c_white,1);}function draw_background_ext(mid,vtc,wtc,hcd,icd,jcd,ktc,bjd){var nid=dcd.qhd(mid);if(!nid)return;cjd(nid.shd,0,0,vtc,wtc,hcd,icd,jcd,iid(ktc),bjd);}function draw_background_stretched_ext(mid,vtc,wtc,bvc,cvc,ktc,bjd){var nid=dcd.qhd(mid);if(!nid)return;ktc=iid(ktc);uid(nid.shd,vtc,wtc,bvc,cvc,ktc,bjd);}function draw_background_tiled_ext(mid,vtc,wtc,hcd,icd,ktc,bjd){ktc=iid(ktc);djd("draw_background_tiled_ext()");}function draw_background_part_ext(mid,wid,xid,yid,
zid,vtc,wtc,hcd,icd,ktc,bjd){var nid=dcd.qhd(mid);if(!nid)return;ktc=iid(ktc);ajd(nid.shd,wid,xid,yid,zid,vtc,wtc,hcd,icd,ktc,bjd);}function draw_background_general(mid,wid,xid,yid,zid,vtc,wtc,hcd,icd,jcd,ejd,fjd,gjd,hjd,bjd){var rhd=dcd.qhd(mid);if(!rhd)return;ejd=iid(ejd);fjd=iid(fjd);gjd=iid(gjd);hjd=iid(hjd);ijd(rhd.shd,wid,xid,yid,zid,vtc,wtc,hcd,icd,jcd,ejd,fjd,gjd,hjd,bjd);}function background_set_alpha_from_background(kid,mid){var vwc=dcd.qhd(kid);var wwc=dcd.qhd(mid);if(!vwc||!wwc)return;if(!vwc.qz){
var nid=oid(vwc.shd);var yhd=new zhd();vwc.shd.tp=pid(nid);vwc.shd.cid=qid[rhd.shd.tp];vwc.shd.x=0;vwc.shd.y=0;vwc.qz=true;}jjd(vwc.shd,wwc.shd);}function background_add(kjd,thd,uhd){var yhd=new zhd();yhd.pName="";yhd.transparent=thd;yhd.smooth=uhd;yhd.preload=true;var ljd=dcd.did(yhd);var mjd;if((kjd.substring(0,7)=="http://")||(kjd.substring(0,8)=="https://")){mjd=kjd;}else {mjd=njd+kjd}var ojd=pjd(mjd);qid[ojd].onload=qjd;qid[ojd].onerror=rjd;sjd.xnb(ljd,kjd,tjd,qid[ojd]);var aid=new bid();yhd.shd=aid;aid.x=0;
aid.y=0;aid.w=0;aid.h=0;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.tp=ojd;aid.cid=qid[aid.tp];return ljd;}function background_replace(kid,kjd,thd,uhd){var yhd=dcd.qhd(kid);yhd.transparent=thd;yhd.smooth=uhd;var mjd;if((kjd.substring(0,7)=="http://")||(kjd.substring(0,8)=="https://")){mjd=kjd;}else {mjd=njd+kjd}var ojd=pjd(mjd);qid[ojd].onload=qjd;qid[ojd].onerror=rjd;sjd.xnb(kid,kjd,tjd,qid[ojd]);var aid=yhd.shd;aid.x=0;aid.y=0;aid.w=0;aid.h=0;aid.XOffset=0;
aid.YOffset=0;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.ujd=null;aid.vjd=0;aid.tp=ojd;aid.cid=qid[aid.tp];return kid;}function collision_point(wjd,vtc,wtc,pxc,xuc,xjd){return yjd(wjd,Math.floor(pxc),xjd,zjd,vtc,wtc,xuc,function(akd){var bkd=akd.ckd(vtc,wtc,xuc);if(!bkd)return false;return akd.id;});}function collision_rectangle(wjd,qvc,rvc,svc,tvc,pxc,xuc,xjd){return yjd(wjd,Math.floor(pxc),xjd,zjd,qvc,rvc,svc,tvc,xuc,function(akd){var bkd=akd.dkd(qvc,rvc,svc,tvc,xuc);if(!bkd)return false;
return akd.id;});}function collision_circle(wjd,ekd,fkd,gkd,pxc,xuc,xjd){return collision_ellipse(wjd,ekd-gkd,fkd-gkd,ekd+gkd,fkd+gkd,pxc,xuc,xjd);}function collision_ellipse(wjd,qvc,rvc,svc,tvc,pxc,xuc,xjd){return yjd(wjd,Math.floor(pxc),xjd,zjd,qvc,rvc,svc,tvc,xuc,function(akd){var bkd=akd.hkd(qvc,rvc,svc,tvc,xuc);if(!bkd)return false;return akd.id;});}function collision_line(wjd,qvc,rvc,svc,tvc,pxc,xuc,xjd){var ikd=(xuc>=0.5)?true:false;var jkd=(xjd>=0.5)?true:false;return yjd(wjd,Math.floor(pxc),jkd,zjd,
qvc,rvc,svc,tvc,ikd,function(akd){var bkd=akd.kkd(qvc,rvc,svc,tvc,ikd);if(!bkd)return false;return akd.id;});}var lkd=1970;var mkd=1;var nkd=1;var okd=365.25;var pkd=30.4375;var qkd=[31,28,31,30,31,30,31,31,30,31,30,31];var rkd=[];function skd(tkd){if(tkd<ukd){return tkd*vkd;}else {return(tkd-ukd)*vkd;}}function wkd(xkd){return xkd%400==0||(xkd%100!=0&&xkd%4==0);}function ykd(xkd){var zkd=qkd.slice();;if(wkd(xkd)){zkd[1]=29;}return zkd;}function ald(xkd,bld,cld,dld,eld,fld,gld){if(typeof(xkd)=="string")return 0;if(typeof(bld)=="string")return 0;
if(typeof(cld)=="string")return 0;if(typeof(dld)=="string")return 0;if(typeof(eld)=="string")return 0;if(typeof(fld)=="string")return 0;if((~~xkd)!=xkd)return 0;if((~~bld)!=bld)return 0;if((~~cld)!=cld)return 0;if((~~dld)!=dld)return 0;if((~~eld)!=eld)return 0;if((~~fld)!=fld)return 0;if((~~gld)!=gld)return 0;if((xkd>=0)&&(bld>=1)&&(bld<=12)&&(cld>=1)&&(cld<=31)&&(dld>=0)&&(dld<=23)&&(eld>=0)&&(eld<=59)&&(fld>=0)&&(fld<=59)&&(gld>=0)&&(gld<=999)){if(cld>28){switch(bld){case 2:if(!wkd(xkd)||(cld>29)){hld=false;
}break;case 4:case 6:case 9:case 11:if(cld>30){return 0;}break;}}}else {return 0;}return 1;}var vkd=86400000.0;var ukd=25569;function date_current_datetime(){return(new Date().getTime()/vkd)+ukd;}function date_current_date(){var qv=new Date();return(~~(qv.getTime()/vkd))+ukd;}function date_current_time(){var qv=new Date();qv.setFullYear(lkd,mkd,nkd);var pbb=(qv.getTime()/vkd)+ukd;return(pbb-(~~pbb));}function date_create_date(ild,jld,kld){var qv=new Date();qv.setFullYear(ild,jld-1,kld-1);return(qv.getTime()/vkd)+ukd;
}function date_create_datetime(ild,jld,kld,lld,mld,nld){var qv=new Date();qv.setFullYear(ild,jld-1,kld-1);qv.setHours(lld,mld,nld,0);return(qv.getTime()/vkd)+ukd;}function date_create_time(lld,mld,nld){var qv=new Date();qv.setFullYear(lkd,mkd,nkd);qv.setHours(lld,mld,nld,0);return(qv.getTime()/vkd)+ukd;}function date_get_year(pad){var qv=new Date();qv.setTime(skd(pad));return qv.getUTCFullYear();}function date_get_month(pad){var qv=new Date();qv.setTime(skd(pad));return(qv.getMonth())+1;}function date_get_day(pad){
var qv=new Date();qv.setTime(skd(pad));return qv.getDate();}function date_get_weekday(pad){var qv=new Date();qv.setTime(skd(pad));return qv.getDay()+1;}function date_get_hour(pad){var qv=new Date();qv.setTime(skd(pad));return qv.getUTCHours();}function date_get_minute(pad){var qv=new Date();qv.setTime(skd(pad));return qv.getMinutes();}function date_get_second(pad){var qv=new Date();qv.setTime(skd(pad));return qv.getSeconds();}function date_get_week(pad){var qv=new Date();qv.setTime(skd(pad));var w=0;var old=ykd(qv.getUTCFullYear());
for(var i=0;i<qv.getMonth();i++){w+=old[i];}w+=qv.getDate();return floor(w/7)+1;}function date_valid_datetime(ild,jld,kld,lld,mld,nld){return ald(ild,jld,kld,lld,mld,nld,0);}function date_valid_date(ild,jld,kld){return ald(ild-1900,jld-1,kld-1,0,0,0,0);}function date_valid_time(lld,mld,nld){return ald(lkd,mkd,nkd,lld,mld,nld,0);}function date_inc_year(pld,qld){var qv=new Date();qv.setTime(skd(pld));qv.setFullYear(qv.getUTCFullYear()+zyc(qld),qv.getMonth(),qv.getDate());return(qv.getTime()/vkd)+ukd;}function date_inc_month(pld,
qld){var qv=new Date();qv.setTime(skd(pld));qv.setFullYear(qv.getUTCFullYear(),qv.getMonth()+zyc(qld),qv.getDate());return(qv.getTime()/vkd)+ukd;}function date_inc_week(pld,qld){var qv=new Date();qv.setTime(skd(pld));qv.setFullYear(qv.getUTCFullYear(),qv.getMonth(),qv.getDate()+(zyc(qld)*7));return(qv.getTime()/vkd)+ukd;}function date_inc_day(pld,qld){var qv=new Date();qv.setTime(skd(pld));qv.setFullYear(qv.getUTCFullYear(),qv.getMonth(),qv.getDate()+zyc(qld));return(qv.getTime()/vkd)+ukd;}function date_inc_hour(pld,
qld){var qv=new Date();qv.setTime(skd(pld));qv.setHours(qv.getHours()+zyc(qld),qv.getMinutes(),qv.getSeconds(),qv.getMilliseconds());return(qv.getTime()/vkd)+ukd;}function date_inc_minute(pld,qld){var qv=new Date();qv.setTime(skd(pld));qv.setHours(qv.getHours(),qv.getMinutes()+zyc(qld),qv.getSeconds(),qv.getMilliseconds());return(qv.getTime()/vkd)+ukd;}function date_inc_second(pad,qld){var qv=new Date();qv.setTime(skd(pad));qv.setHours(qv.getHours(),qv.getMinutes(),qv.getSeconds()+zyc(qld),qv.getMilliseconds());
return(qv.getTime()/vkd)+ukd;}function date_get_day_of_year(pad){var qv=new Date();qv.setTime(skd(pad));var rld=0;var old=ykd(qv.getUTCFullYear());for(var i=0;i<qv.getMonth();i++){rld+=old[i];}rld+=qv.getDate();return rld;}function date_get_hour_of_year(pad){var qv=new Date();qv.setTime(skd(pad));var sld=0;var old=ykd(qv.getUTCFullYear());for(var i=0;i<qv.getMonth();i++){sld+=old[i]*24;}sld+=(qv.getDate()-1)*24;sld+=qv.getHours();return sld;}function date_get_minute_of_year(pad){var qv=new Date();qv.setTime(skd(pad));
var tld=0;var old=ykd(qv.getUTCFullYear());for(var i=0;i<qv.getMonth();i++){tld+=old[i]*24*60;}tld+=(qv.getDate()-1)*24*60;tld+=qv.getHours()*60;tld+=qv.getMinutes();return tld;}function date_get_second_of_year(pad){var qv=new Date();qv.setTime(skd(pad));var uld=0;var old=ykd(qv.getUTCFullYear());for(var i=0;i<qv.getMonth();i++){uld+=old[i]*24*60*60;}uld+=(qv.getDate()-1)*24*60*60;uld+=qv.getHours()*60*60;uld+=qv.getMinutes()*60;uld+=qv.getSeconds();return uld;}function date_year_span(vld,wld){var yfb=xld(vld);
var oeb=xld(wld);var yld=((wld+oeb)-(vld+yfb));return Math.abs((yld/1000)/60/60/24/okd);}function date_month_span(vld,wld){var yfb=xld(vld);var oeb=xld(wld);var yld=((wld+oeb)-(vld+yfb));return Math.abs((yld/1000)/60/60/24/pkd);}function date_week_span(vld,wld){var yfb=xld(vld);var oeb=xld(wld);var yld=((wld+oeb)-(vld+yfb));return Math.abs((yld/1000)/60/60/24/7);}function date_day_span(vld,wld){var yfb=xld(vld);var oeb=xld(wld);var yld=((wld+oeb)-(vld+yfb));return Math.abs((yld/1000)/60/60/24);}function date_hour_span(vld,
wld){var yfb=xld(vld);var oeb=xld(wld);var yld=((wld+oeb)-(vld+yfb));return Math.abs((yld/1000)/60/60);}function date_minute_span(vld,wld){var yfb=xld(vld);var oeb=xld(wld);var yld=((wld+oeb)-(vld+yfb));return Math.abs((yld/1000)/60);}function date_second_span(vld,wld){var yfb=xld(vld);var oeb=xld(wld);var yld=((wld+oeb)-(vld+yfb));return Math.abs(yld/1000);}function xld(pld){var qv=new Date();qv.setTime(pld);return(qv.getHours()-qv.getUTCHours())*60*60*1000;}function date_compare_datetime(vld,wld){if(vld<wld){return -1;
}else if(wld>vld){return 1;}return 0;}function date_compare_date(vld,wld){if(vld<wld){return -1;}else if(wld>vld){return 1;}return 0;}function date_compare_time(vld,wld){var zld=vld-wld;if(zld<0){return -1;}else if(zld>0){return 1;}return 0;}function date_date_of(pld){var qv=new Date();qv.setTime(pld);qv.setHours(0,0,0,0);return qv.getTime();}function date_time_of(pld){var qv=new Date();qv.setTime(pld);qv.setFullYear(lkd,mkd,lkd);return qv.getTime();}function date_datetime_string(pld){var qv=new Date();qv.setTime(pld);return qv.toLocaleString();
}function date_date_string(pld){var qv=new Date();qv.setTime(pld);return qv.toDateString();}function date_time_string(pld){var qv=new Date();qv.setTime(pld);return qv.toTimeString();}function date_days_in_month(pld){var qv=new Date();qv.setTime(pld);var old=ykd(qv.getUTCFullYear());return old[qv.getMonth()];}function date_days_in_year(pld){var qv=new Date();qv.setTime(pld);var rld=0;var old=ykd(qv.getUTCFullYear());for(var i=0;i<old.length;i++){rld+=old[i];}return rld;}function date_leap_year(pld){var qv=new Date();qv.setTime(pld);
return wkd(qv.getUTCFullYear());}function date_is_today(pld){var qv=new Date();qv.setTime(pld);var amd=new Date();if((qv.getUTCFullYear()==amd.getUTCFullYear())&&(qv.getMonth()==amd.getMonth())&&(qv.getDate()==amd.getDate())){return true;}return false;}var bmd=[];var cmd=[];var dmd=[];var emd=Date.now();var fmd=function(gmd){if(hmd){var imd=String.fromCharCode(0x0a);gmd=gmd.replace('<b>','').replace('</b>','');var jmd=document.getElementById('debug_console');var zld=Date.now()-emd;if(!jmd){alert(gmd);}else {jmd.value+=gmd+imd;
var kmd=jmd.textLength;}emd=Date.now();}};function hzc(){var index;for(index=0;index<arguments.length;++index){fmd(arguments[index]);}}function hbc(){var index;for(index=0;index<arguments.length;++index){fmd(arguments[index]);}}function lmd(gcd){if(!dmd[gcd]){dmd[gcd]=true;hzc(gcd);}}function qyc(gcd){if(!bmd[gcd]){bmd[gcd]=true;var mmd="Error: function "+gcd+" is not supported.";hzc(mmd);}}function nmd(gcd){if(!bmd[gcd]){bmd[gcd]=true;var mmd="Error: "+gcd+" is not supported.";hzc(mmd);}}function djd(gcd){
if(!bmd[gcd]){bmd[gcd]=true;var mmd="Error: function "+gcd+" is not yet implemented";hzc(mmd);}}function omd(gcd){if(!cmd[gcd]){cmd[gcd]=true;var mmd="Warning: function "+gcd;hzc(mmd);}}function pmd(qmd){var rmd=smd.tmd(qmd,-1);var imd=String.fromCharCode(0x0a);var vm="";for(var i=0;i<rmd.length;i++){if(i!=0)vm=vm+imd;vm+=rmd[i];}return vm;}function umd(vmd){alert(vmd);}function wmd(vmd,xmd){alert(pmd(vmd));}function show_debug_message(qmd){hzc(pmd(qmd));}function show_message(qmd){alert(pmd(qmd));}function show_error(fcd,
ymd){alert(pmd(fcd));}function show_message_ext(qmd,zmd,and,bnd){qyc("show_message_ext()");return 2;}function show_question(fcd){if(!fcd)fcd="";return confirm(pmd(fcd));}function get_integer(fcd,cnd){return parseFloat(prompt(fcd,string(cnd)));}function get_string(fcd,cnd){return prompt(pmd(fcd),string(cnd));}function message_background(mid){}function message_alpha(bjd){}function dnd(){this.end="";this.fnd=0;this.gnd=false;this.hnd=false;this.ind=""}dnd.prototype.jnd=function(){var xad;var i=this.fnd;var vm=this.end;
while(i<vm.length){var c=vm.charCodeAt(i);if(c==0x0d||c==0x0a){i++;}else {break;}}this.fnd=i;};dnd.prototype.knd=function(){var xad;var i=this.fnd;var vm=this.end;while(i<vm.length){var c=vm.charCodeAt(i);if(c==0x0d||c==0x0a){i++;c=vm.charCodeAt(i);if(c==0x0d||c==0x0a){i++;}break;}else {i++;}}this.fnd=i;};dnd.prototype.lnd=function(){var xad;var i=this.fnd;var vm=this.end;while(i<vm.length){var c=vm.charCodeAt(i);if(c==0x0d||c==0x0a||c==0x09||c==0x20){i++;}else {break;}}this.fnd=i;};function file_text_open_read(ahd){
var mnd=nnd(ahd,true);if(mnd==null)mnd=nnd(ahd,false);if(mnd==null)return -1;ond=new dnd();ond.end=mnd;ond.fnd=0;ond.ind=ahd;return pnd.xnb(ond);}function file_text_close(qnd){var ond=pnd.mvc(qnd);if(!ond){hbc("Error: Illegal file handle");return;}if(ond.hnd){rnd(ond.ind,ond.end);}pnd.jvc(qnd);}function file_text_open_write(ahd){ond=new dnd();ond.ind=ahd;ond.end="";ond.fnd=0;ond.snd=true;return pnd.xnb(ond);}function file_text_open_append(ahd){var pbb=file_text_open_read(ahd);if(pbb<0){return file_text_open_write(ahd);
}var ond=pnd.mvc(pbb);ond.snd=true;ond.fnd=ond.end.length;return pbb;}function file_text_write_string(qnd,fcd){var ond=pnd.mvc(qnd);if(!ond){hbc("Error: Illegal file handle");return;}if(!ond.snd){hbc("Error: File "+ond.ind+" has not been opened with WRITE permisions");return;}ond.end+=rmd=pmd(fcd);ond.hnd=true;ond.fnd=ond.end.length;}function file_text_write_real(qnd,vtc){var ond=pnd.mvc(qnd);if(!ond){hbc("Error: Illegal file handle");return;}if(!ond.snd){hbc("Error: File "+ond.ind+" has not been opened with WRITE permisions");
return;}ond.end+=vtc;ond.hnd=true;ond.fnd=ond.end.length;}function file_text_writeln(qnd){var ond=pnd.mvc(qnd);if(!ond){hbc("Error: Illegal file handle");return;}if(!ond.snd){hbc("Error: File "+ond.ind+" has not been opened with WRITE permisions");return;}ond.end+=String.fromCharCode(0x0d);ond.end+=String.fromCharCode(0x0a);ond.fnd=ond.end.length;}function file_text_read_string(qnd){var ond=pnd.mvc(qnd);if(!ond){hbc("Error: Illegal file handle");return;}ond.jnd();var xad="";var i=ond.fnd;var vm=ond.end;
while(i<vm.length){var c=vm.charCodeAt(i);if(c==0x0d||c==0x0a){break;}else {xad+=vm[i++];}}ond.fnd=i;return xad;}function file_text_read_real(qnd){var ond=pnd.mvc(qnd);if(!ond){hbc("Error: Illegal file handle");return;}ond.lnd();var xad="";var i=ond.fnd;var vm=ond.end;while(i<vm.length){var c=vm[i];if((c>='0'&&c<='9')||(c=='.')){xad+=vm[i++];}else {break;}}ond.fnd=i;return parseFloat(xad);}function file_text_readln(qnd){var ond=pnd.mvc(qnd);if(!ond){hbc("Error: Illegal file handle");return;}ond.knd();}function file_text_eof(qnd){
var ond=pnd.mvc(qnd);if(!ond){hbc("Error: Illegal file handle");return;}if(ond.fnd>=ond.end.length)return true;return false;}function tnd(qnd){var ond=pnd.mvc(qnd);if(!ond){hbc("Error: Illegal file handle");return;}var c=ond.end.charCodeAt(ond.fnd);if(c==0x0a||c==0x0d)return true;return false;}function file_exists(ahd){var und=vnd(ahd,true);if(und==true)return true;return vnd(ahd,false);}function file_delete(ahd){if('localStorage' in window&&window['localStorage']!==null){try{localStorage["GameMaker."+ahd]=null;
}catch(wnd){return false;}}}function file_rename(xnd,ynd){qyc("file_rename()");}function file_copy(ahd,ynd){qyc("file_copy()");}function directory_exists(znd){qyc("directory_exists()");return true;}function directory_create(znd){qyc("directory_create()");return true;}function file_find_first(aod,bod){qyc("file_find_first()");return -1;}function file_find_next(){qyc("file_find_next()");}function file_find_close(){qyc("file_find_close()");}function file_attributes(ahd,bod){qyc("file_attributes()");return true;
}function filename_name(ahd){djd("filename_name()");}function filename_path(ahd){djd("filename_path()");}function filename_dir(ahd){djd("filename_dir()");}function filename_drive(ahd){djd("filename_drive()");}function filename_change_ext(ahd,cod){djd("filename_change_ext()");}function file_bin_open(ahd,dod){qyc("file_bin_open()");}function file_bin_rewrite(qnd){qyc("file_bin_rewrite()");}function file_bin_close(qnd){qyc("file_bin_close()");}function file_bin_size(qnd){qyc("file_bin_size()");}function file_bin_position(qnd){
qyc("file_bin_position()");}function file_bin_seek(qnd,xwc){qyc("file_bin_seek()");}function file_bin_write_byte(qnd,eod){qyc("file_bin_write_byte()");}function file_bin_read_byte(qnd){qyc("file_bin_read_byte()");}function export_include_file(ahd){qyc("export_include_file()");}function export_include_file_location(ahd,fod){qyc("export_include_file_location()");}function discard_include_file(ahd){qyc("discard_include_file()");}function environment_get_variable(god){qyc("environment_get_variable()");}function hod(iod){
qyc("disk_size()");}function jod(iod){qyc("disk_free()");}function filename_ext(kjd){var fp=kjd.lastIndexOf(".");var kod=kjd.lastIndexOf("\\");if(kod>fp)return "";return kjd.substr(fp,kjd.length);}function draw_set_halign(lod){smd.mod=lod;}function draw_set_valign(lod){smd.nod=lod;}function draw_set_font(lcd){smd.ood=lcd;}function draw_text(vtc,wtc,gcd){smd.pod(gcd.toString(),vtc,wtc,-1,-1,0,1,1);}function draw_text_color(vtc,wtc,gcd,ejd,fjd,gjd,hjd,bjd){omd("draw_text_color() only uses the 1st colour");var qod=tid;
var rod=sod;tid=bjd;draw_set_color(ejd);smd.pod(gcd.toString(),vtc,wtc,-1,-1,0,1,1);draw_set_color(rod);tid=qod;}function draw_text_ext_color(vtc,wtc,gcd,tod,bvc,ejd,fjd,gjd,hjd,bjd){omd("draw_text_ext_color() only uses the 1st colour");var qod=tid;var rod=sod;tid=bjd;draw_set_color(ejd);smd.pod(gcd.toString(),vtc,wtc,tod,bvc,0,1,1);draw_set_color(rod);tid=qod;}function draw_text_ext(vtc,wtc,gcd,tod,bvc){smd.pod(gcd.toString(),vtc,wtc,tod,bvc,0,1,1);}function draw_text_transformed(vtc,wtc,gcd,hcd,icd,
wgd){smd.pod(gcd.toString(),vtc,wtc,-1,-1,wgd,hcd,icd);}function draw_text_ext_transformed(vtc,wtc,gcd,tod,bvc,hcd,icd,wgd){smd.pod(gcd.toString(),vtc,wtc,tod,bvc,wgd,hcd,icd);}function draw_text_ext_transformed_color(vtc,wtc,gcd,tod,bvc,hcd,icd,wgd,ejd,fjd,gjd,hjd,bjd){omd("draw_text_ext_transformed_color() only uses the 1st colour");var qod=tid;var rod=sod;tid=bjd;sod=iid(ejd);uod=vod(sod);smd.pod(gcd.toString(),vtc,wtc,tod,bvc,wgd,hcd,icd);tid=qod;sod=rod;}function draw_text_transformed_color(vtc,
wtc,gcd,hcd,icd,wgd,ejd,fjd,gjd,hjd,bjd){omd("draw_text_transformed_color() only uses the 1st colour");var qod=tid;var rod=sod;tid=bjd;sod=iid(ejd);uod=vod(sod);smd.pod(gcd.toString(),vtc,wtc,-1,-1,wgd,hcd,icd);tid=qod;sod=rod;}function string_height(gcd){smd.wod();var xod=1;for(var i=0;i<gcd.length;i++){if(gcd[i]=='#')xod++;}return smd.yod.zod("M")*xod;}function string_width(gcd){smd.wod();return smd.yod.apd(gcd);}function string_width_ext(bpd,tod,bvc){smd.wod();smd.cpd(bpd,0,0,tod,bvc,0);return dpd;}function string_height_ext(bpd,
tod,bvc){smd.wod();smd.cpd(bpd,0,0,tod,bvc,0);return epd;}function font_exists(utc){if(smd.mvc(utc))return true;else return false;}function font_get_bold(utc){var fpd=smd.mvc(utc);if(!fpd)return false;return fpd.bold;}function font_get_fontname(utc){var fpd=smd.mvc(utc);if(!fpd)return "";return fpd.gpd;}var font_name=font_get_fontname;function font_get_italic(utc){var fpd=smd.mvc(utc);if(!fpd)return false;return fpd.italic;}function font_get_first(utc){var fpd=smd.mvc(utc);if(!fpd)return 0;return fpd.first;}function font_get_last(utc){
var fpd=smd.mvc(utc);if(!fpd)return 255;return fpd.last;}function font_get_size(utc){var fpd=smd.mvc(utc);if(!fpd)return 0;return fpd.size;}function hpd(god,xfd,ipd,jpd,kpd,lpd,mpd){var fpd=new npd();fpd.opd=true;fpd.pName="fnt_"+god;fpd.gpd=god;fpd.size=xfd;fpd.bold=ipd;fpd.italic=jpd;fpd.first=kpd;fpd.last=lpd;fpd.ppd=xfd+"pt "+god+" ";if(ipd)fpd.ppd=fpd.ppd+"bold ";if(jpd)fpd.ppd=fpd.ppd+"Italic ";if(mpd){return smd.qpd(fpd);}else {return fpd;}}function font_add(god,xfd,ipd,jpd,kpd,lpd){return hpd(god,xfd,ipd,
jpd,kpd,lpd,true);}function font_add_sprite(tyc,kpd,rpd,tod){var fpd=new npd();fpd.opd=true;fpd.pName="sprite_font: "+tyc.pName;fpd.gpd="spritefont";fpd.size=tyc.width;fpd.bold=false;fpd.italic=false;fpd.first=kpd;fpd.spd=true;fpd.prop=rpd;fpd.tpd=ibd.mvc(tyc);fpd.last=kpd+fpd.tpd.upd;fpd.vpd=tod;return smd.qpd(fpd);}function font_replace_sprite(utc,tyc,kpd,rpd,tod){var fpd=smd.mvc(utc);fpd.opd=true;fpd.pName="sprite_font: "+tyc.pName;fpd.gpd="spritefont";fpd.size=tyc.width;fpd.bold=false;fpd.italic=false;
fpd.first=kpd;fpd.spd=true;fpd.prop=rpd;fpd.tpd=ibd.mvc(tyc);fpd.last=kpd+fpd.tpd.upd;fpd.vpd=tod;fpd.antialias=0;fpd.charset=0;fpd.wpd=1;fpd.xpd=1;fpd.glyphs=null;fpd.shd=null;return utc;}var sleep=zgd;function instance_number(pxc){return ypd.mvc(pxc).zpd.length;}function highscore_show(aqd){if(aqd!=-1)highscore_add(null,aqd);var xad="";for(var i=0;i<bqd;i++){var cqd=30;var dqd;dqd=eqd[i].toString();xad=xad+dqd;cqd-=dqd.length;while(cqd>0){xad=xad+" ";cqd--;}xad=xad+fqd[i]+chr(13)+chr(10);}alert(xad);}function highscore_set_background(mid){
gqd=mid;}function highscore_show_ext(aqd,mid,jhd,vfd,ncd,god,xfd){highscore_set_border(jhd);hqd=god;iqd=xfd;highscore_set_colors(mid,vfd,ncd);highscore_show(aqd);}function draw_highscore(qvc,rvc,svc,tvc){var mod=smd.mod;var mjc=(tvc-rvc)/bqd;for(var i=0;i<bqd;i++){smd.mod=0;draw_text(svc,rvc,fqd[i]);smd.mod=2;draw_text(qvc,rvc,eqd[i].toString());rvc+=mjc;}smd.mod=mod;}function highscore_set_border(uyc){jqd=uyc;}function highscore_set_font(god,xfd,kqd){hqd=god;iqd=xfd;lqd=kqd;}function highscore_set_colors(mid,
mqd,ngd){nqd=mid;oqd=mqd;pqd=ngd;}function highscore_set_strings(qqd,rqd,sqd){tqd=qqd;uqd=rqd;vqd=sqd;}function highscore_clear(){eqd[0]=eqd[1]=eqd[2]=eqd[3]=eqd[4]=eqd[5]=eqd[6]=eqd[7]=eqd[8]=eqd[9]=0;fqd[0]=fqd[1]=fqd[2]=fqd[3]=fqd[4]=fqd[5]=fqd[6]=fqd[7]=fqd[8]=fqd[9]=uqd;}function highscore_add(fcd,aqd){for(var i=0;i<bqd;i++){if(aqd>eqd[i]){eqd.splice(i,0,aqd);if(!fcd){fcd=get_string("Well done! You have a highscore! Please enter your name",uqd);}fqd.splice(i,0,fcd);eqd.splice(10,1);fqd.splice(10,
1);return;}}}function highscore_add_current(){highscore_add(uqd,wqd);}function highscore_value(xqd){if(xqd<1||xqd>bqd)return -1;return eqd[xqd-1];}function highscore_name(xqd){if(xqd<1||xqd>bqd)return "";return fqd[xqd-1];}function yqd(vfd,ncd,obd){var zqd,ifb,umc,vmc,bcc,ccc;zqd=(vfd>>16)&0xff;umc=(vfd>>8)&0xff;bcc=(vfd&0xff);ifb=(ncd>>16)&0xff;vmc=(ncd>>8)&0xff;ccc=(ncd&0xff);var cgd=1.0-obd;var lq=zyc(zqd*cgd+ifb*obd);var ard=zyc(umc*cgd+vmc*obd);var jn=zyc(bcc*cgd+ccc*obd);var brd=((lq&0xff)<<16)|((ard&0xff)<<8)|(jn&0xff);
return brd;}function crd(vfd,ncd,obd){return yqd(vfd,ncd,obd);}function event_perform(wjd,drd,erd,frd){var grd=hrd;hrd=true;var event=ird(erd,frd);var jrd=krd(erd,frd);wjd.yzc(event,jrd,wjd,drd);hrd=grd;}function lrd(wjd,ngd,mrd,nrd){var prd=qrd.mvc(mrd);if((prd!=null)&&(prd!=undefined)){var rrd=prd.Events[nrd];if((rrd!=null)&&(rrd!=undefined)){rrd.Event(wjd,wjd);}}}function event_perform_object(wjd,drd,pxc,erd,frd){var event=ird(erd,frd);var jrd=krd(erd,frd);var srd=ypd.mvc(pxc);srd.yzc(event,jrd,wjd,drd);}var trd=true;
function event_user(wjd,drd,frd){if(frd<0||frd>15){hbc("Error: illegal user event ID: "+frd);}frd+=urd;event_perform(wjd,drd,mbd,frd);}function event_inherited(wjd,drd){if(wjd.srd.vrd!=null){var uzc=wjd.object_index;var srd=wjd.srd;wjd.object_index=wrd.xrd;wjd.srd=wrd.vrd;wjd.yzc(yrd,zrd,wjd,drd);wjd.object_index=uzc;wjd.srd=srd;}}function parameter_count(){return asd;}function parameter_string(jwc){if(jwc<0||jwc>asd)return "";var vm=bsd[jwc];if(csd[jwc]!=null)vm=vm+"="+csd[jwc];return vm;}function set_application_title(dsd){
document.title=dsd;}function clipboard_get_text(){return "";}var clipboard_set_text=hzc;function display_get_width(){return esd;}function display_get_height(){return fsd;}function display_get_orientation(){return 0;}function draw_clear(iad){gsd(iad);}var draw_clear_alpha=hsd;function hsd(iad,bjd){ybc.isd();var jsd=[];jsd[0]=1;jsd[1]=0;jsd[2]=0;jsd[3]=1;jsd[4]=0;jsd[5]=0;ybc.ksd(jsd[0],jsd[1],jsd[2],jsd[3],jsd[4],jsd[5]);if(!ybc.clearRect||iad!=0||bjd!=0){ybc.globalAlpha=bjd;ybc.fillStyle=hid(iid(iad),bjd);ybc.globalCompositeOperation='copy';
ybc.fillRect(lsd,msd,nsd,osd);}else {ybc.clearRect(lsd,msd,nsd,osd);}ybc.psd();}function make_color_rgb(qsd,rsd,ssd){return(~~qsd)|(rsd<<8)|(ssd<<16);}function make_color(gkb,hkb,ikb){return make_color_rgb(gkb,hkb,ikb);}function color_get_blue(iad){return(iad>>16)&0xff;}function color_get_green(iad){return(iad>>8)&0xff;}function color_get_red(iad){return(iad&0xff);}function tsd(iad){var xeb=0.0;var jkb=0.0;var kkb=0.0;var usd=0.0;var vsd=0.0;var wsd=0.0;var qv=0.0;var pz=0.0;xeb=((iad>>16)&0xff)/255.0;jkb=((iad>>8)&0xff)/255.0;
kkb=(iad&0xff)/255.0;pz=xvc(xvc(xeb,jkb),kkb);wsd=wvc(wvc(xeb,jkb),kkb);qv=wsd-pz;if(wsd==0)vsd=0.0;else vsd=1.0*qv/wsd;if(vsd==0)usd=0.0;else if(xeb==wsd)usd=60.0*(jkb-kkb)/qv;else if(jkb==wsd)usd=120.0+60.0*(kkb-xeb)/qv;else usd=240.0+60.0*(xeb-jkb)/qv;if(usd<0)usd=usd+360.0;var vad;vad=((Math.floor(wsd*255.0)<<16)&0xff)|(Math.floor(vsd*255.0)<<8)|(Math.floor(usd*255.0/360.0)&0xff);return vad;}function color_get_hue(iad){return tsd(iad)&0xff;}function color_get_saturation(iad){return(tsd(iad)>>8)&0xff;
}function color_get_saturation(iad){return(tsd(iad)>>16)&0xff;}function merge_color(vfd,ncd,qld){var zqd=(vfd>>16)&0xff;var umc=(vfd>>8)&0xff;var bcc=vfd&0xff;var ifb=(ncd>>16)&0xff;var vmc=(ncd>>8)&0xff;var ccc=ncd&0xff;var xsd=1.0-qld;var lq=~~(zqd*xsd+ifb*qld);var ard=~~(umc*xsd+vmc*qld);var jn=~~(bcc*xsd+ccc*qld);return((lq<<16)&0xff0000)|((ard<<8)&0xff00)|(jn&0xff);}function make_color_hsv(ysd,zsd,obd){var xeb=0.0;var jkb=0.0;var kkb=0.0;var usd=0.0;var vsd=0.0;var wsd=0.0;var pbb=0.0;var qg=0.0;var atd=0.0;var rbb=0.0;
var i=0;var vad;usd=ysd*360.0/255.0;if(usd==360.0)usd=0.0;vsd=zsd/255.0;wsd=obd/255.0;if(vsd==0){xeb=wsd;jkb=wsd;kkb=wsd;}else {usd=usd/60.0;i=Math.floor(usd);pbb=usd-i;qg=wsd*(1.0-vsd);atd=wsd*(1.0-(vsd*pbb));rbb=wsd*(1.0-(vsd*(1.0-pbb)));switch(i){case 0:{xeb=wsd;jkb=rbb;kkb=qg;}break;case 1:{xeb=atd;jkb=wsd;kkb=qg;}break;case 2:{xeb=qg;jkb=wsd;kkb=rbb;}break;case 3:{xeb=qg;jkb=atd;kkb=wsd;}break;case 4:{xeb=rbb;jkb=qg;kkb=wsd;}break;default :{xeb=wsd;jkb=qg;kkb=atd;}}}vad=Math.floor(xeb*255.0)|(Math.floor(jkb*255.0)<<8)|(Math.floor(kkb*255.0)<<16);
return vad;}function draw_set_alpha(bjd){if(bjd<0){bjd=0;}if(bjd>1){bjd=1;}tid=bjd;uod=hid(sod,tid);}function draw_get_alpha(){return tid;}function draw_get_color(){return sod;}function draw_set_color(eid){btd=eid;sod=iid(eid);ctd=vod(sod);uod=hid(sod,tid);}function draw_roundrect(qvc,rvc,svc,tvc,kcd){draw_roundrect_color(qvc,rvc,svc,tvc,btd,btd,kcd);}var draw_roundrect_color=dtd;function dtd(qvc,rvc,svc,tvc,vfd,ncd,kcd){var width=svc-qvc;var height=tvc-rvc;at=10;var brd=ybc.globalAlpha=tid;ybc.beginPath();ybc.moveTo(qvc+at,
rvc);ybc.lineTo(qvc+width-at,rvc);ybc.quadraticCurveTo(qvc+width,rvc,qvc+width,rvc+at);ybc.lineTo(qvc+width,rvc+height-at);ybc.quadraticCurveTo(qvc+width,rvc+height,qvc+width-at,rvc+height);ybc.lineTo(qvc+at,rvc+height);ybc.quadraticCurveTo(qvc,rvc+height,qvc,rvc+height-at);ybc.lineTo(qvc,rvc+at);ybc.quadraticCurveTo(qvc,rvc,qvc+at,rvc);ybc.closePath();if(kcd){ybc.strokeStyle=hid(iid(vfd),1.0);ybc.stroke();}else {ybc.fillStyle=hid(iid(vfd),1.0);ybc.fill();}}var draw_rectangle=etd;function etd(qvc,rvc,
svc,tvc,kcd){qvc=~~qvc;rvc=~~rvc;svc=~~svc;tvc=~~tvc;ybc.globalAlpha=tid;if(kcd){ybc.lineWidth=1;ybc.strokeStyle=uod;ybc.ftd(qvc+0.5,rvc+0.5,svc-qvc,tvc-rvc);}else {ybc.fillStyle=uod;ybc.gtd(qvc,rvc,svc-qvc+1,tvc-rvc+1);}}var draw_rectangle_color=htd;function htd(qvc,rvc,svc,tvc,vfd,ncd,itd,jtd,kcd){var brd=hid(iid(vfd),1.0);ybc.globalAlpha=tid;if(kcd){ybc.lineWidth=1;ybc.strokeStyle=brd;ybc.ftd(qvc+0.5,rvc+0.5,(svc-qvc),(tvc-rvc));}else {ybc.fillStyle=brd;ybc.gtd(qvc+0.5,rvc+0.5,(svc-qvc),(tvc-rvc));
}}var wfd=ktd;function ktd(qvc,rvc,svc,tvc,vfd,ncd,ltd,kcd){ybc.globalAlpha=tid;ybc.lineWidth=1;var zo=vod(iid(vfd));var ap=vod(iid(ncd));var mtd;if(ltd){mtd=ybc.createLinearGradient(qvc,rvc,qvc,tvc);}else {mtd=ybc.createLinearGradient(qvc,rvc,svc,rvc);}mtd.addColorStop(0,zo);mtd.addColorStop(1,ap);if(kcd){ybc.strokeStyle=mtd;ybc.ftd(qvc+0.5,rvc+0.5,svc-qvc,tvc-rvc);}else {ybc.fillStyle=mtd;ybc.gtd(qvc+0.5,rvc+0.5,svc-qvc,tvc-rvc);}}var draw_point=ntd;function ntd(vtc,wtc){ybc.globalAlpha=tid;ybc.fillStyle=uod;
ybc.gtd(vtc,wtc,1,1);}function draw_line_width(qvc,rvc,svc,tvc,bvc){draw_line_width_color(qvc,rvc,svc,tvc,bvc,btd,btd);}function draw_line(qvc,rvc,svc,tvc){draw_line_width(qvc,rvc,svc,tvc,1);}var draw_getpixel=otd;function otd(vtc,wtc){var brd=ptd(jtc,vtc,wtc);return brd&0xffffff;}var draw_triangle=qtd;function qtd(qvc,rvc,svc,tvc,rtd,std,kcd){qvc+=0.5;rvc+=0.5;svc+=0.5;tvc+=0.5;rtd+=0.5;std+=0.5;ybc.globalAlpha=tid;ybc.lineWidth=1;if(kcd){ybc.strokeStyle=uod;ybc.ttd();ybc.utd(qvc,rvc);ybc.vtd(svc,tvc);
ybc.vtd(rtd,std);ybc.vtd(qvc,rvc);ybc.wtd();ybc.xtd();}else {ybc.strokeStyle=uod;ybc.lineJoin="bevel";ybc.fillStyle=uod;ybc.ttd();ybc.utd(qvc,rvc);ybc.vtd(svc,tvc);ybc.vtd(rtd,std);ybc.vtd(qvc,rvc);ybc.ytd();ybc.wtd();ybc.xtd();ybc.lineJoin="miter";}}var draw_triangle_color=ztd;function ztd(qvc,rvc,svc,tvc,rtd,std,vfd,ncd,itd,kcd){var zo=vod(iid(vfd)|0xff000000);qvc+=0.5;rvc+=0.5;svc+=0.5;tvc+=0.5;rtd+=0.5;std+=0.5;ybc.globalAlpha=tid;ybc.lineWidth=1;if(kcd){ybc.strokeStyle=zo;ybc.ttd();ybc.utd(qvc,
rvc);ybc.vtd(svc,tvc);ybc.vtd(rtd,std);ybc.vtd(qvc,rvc);ybc.wtd();ybc.xtd();}else {ybc.strokeStyle=zo;ybc.lineJoin="bevel";ybc.fillStyle=zo;ybc.ttd();ybc.utd(qvc,rvc);ybc.vtd(svc,tvc);ybc.vtd(rtd,std);ybc.vtd(qvc,rvc);ybc.ytd();ybc.wtd();ybc.xtd();ybc.lineJoin="miter";}}var edd=aud;function aud(qvc,rvc,svc,tvc,qld,bud,cud,dud,eud,fud,gud,hud){var iud;var jud;var kud;var lud;var brd;if(gud){draw_rectangle_color(qvc,rvc,svc,tvc,bud,bud,bud,bud,false);if(hud){draw_rectangle_color(qvc,rvc,svc,tvc,pcd,pcd,pcd,
pcd,true);}}if(qld<0){qld=0;}if(qld>100){qld=100;}var mud=qld/100;switch(fud){case 0:iud=qvc;kud=rvc;jud=qvc+mud*(svc-qvc);lud=tvc;break;case 1:iud=svc-mud*(svc-qvc);kud=rvc;jud=svc;lud=tvc;break;case 2:iud=qvc;kud=rvc;jud=svc;lud=rvc+mud*(tvc-rvc);break;case 3:iud=qvc;kud=tvc-mud*(tvc-rvc);jud=svc;lud=tvc;break;default :iud=qvc;kud=rvc;jud=qvc+mud*(svc-qvc);lud=tvc;break;}if(qld>50){brd=yqd(dud,eud,(qld-50.0)/50.0);}else {brd=yqd(cud,dud,qld/50.0);}draw_rectangle_color(iud,kud,jud,lud,brd,brd,brd,brd,
false);if(hud){draw_rectangle_color(iud,kud,jud,lud,pcd,pcd,pcd,pcd,true);}}function draw_healthbar(qvc,rvc,svc,tvc,qld,bud,cud,eud,fud,gud,hud){var brd=merge_color(cud,eud,0.5);edd(qvc,rvc,svc,tvc,qld,bud,cud,brd,eud,fud,gud,hud);}function draw_set_circle_precision(nud){}var draw_arrow=oud;function oud(xdb,uvc,ydb,vvc,size){var pud=Math.sqrt(((ydb-xdb)*(ydb-xdb))+((vvc-uvc)*(vvc-uvc)));if(pud!=0){if(size>pud){size=pud;}var qud=size*(ydb-xdb)/pud;var rud=size*(vvc-uvc)/pud;draw_line(xdb,uvc,ydb,vvc);draw_triangle(ydb-qud-rud/3.0,
vvc-rud+qud/3.0,ydb,vvc,ydb-qud+rud/3.0,vvc-rud-qud/3.0,false);}}function draw_ellipse(qvc,rvc,svc,tvc,kcd){draw_ellipse_color(qvc,rvc,svc,tvc,sod,sod,kcd);}var draw_ellipse_color=sud;function sud(x,y,xdb,uvc,vfd,ncd,tud){var w=xdb-x;var h=uvc-y;var uud=0.5522848;vud=(w/2)*uud,wud=(h/2)*uud,xud=x+w,yud=y+h,zud=x+w/2,avd=y+h/2;ybc.beginPath();ybc.moveTo(x,avd);ybc.bezierCurveTo(x,avd-wud,zud-vud,y,zud,y);ybc.bezierCurveTo(zud+vud,y,xud,avd-wud,xud,avd);ybc.bezierCurveTo(xud,avd+wud,zud+vud,yud,zud,yud);
ybc.bezierCurveTo(zud-vud,yud,x,avd+wud,x,avd);ybc.closePath();var zo=hid(iid(vfd),1.0);var ap=hid(iid(ncd),1.0);var mtd=ybc.createRadialGradient(zud,avd,0,zud,avd,min(w/2,h/2));mtd.addColorStop(0,zo);mtd.addColorStop(1,ap);ybc.globalAlpha=tid;if(tud){ybc.lineWidth=1;ybc.strokeStyle=mtd;ybc.stroke();}else {ybc.fillStyle=mtd;ybc.fill();}}var draw_circle_color=bvd;function bvd(vtc,wtc,gkb,vfd,ncd,kcd){ybc.globalAlpha=tid;var zo=hid(iid(vfd),1.0);var ap=hid(iid(ncd),1.0);var mtd=ybc.createRadialGradient(vtc,
wtc,0,vtc,wtc,gkb);mtd.addColorStop(0,zo);mtd.addColorStop(1,ap);ybc.beginPath();if(kcd){ybc.lineWidth=1;ybc.strokeStyle=mtd;ybc.cvd(vtc,wtc,gkb,0,Math.PI*2,true);ybc.wtd();}else {ybc.fillStyle=mtd;ybc.cvd(vtc,wtc,gkb,0,Math.PI*2,false);ybc.ytd();}ybc.xtd();}function draw_circle(vtc,wtc,gkb,kcd){draw_circle_color(vtc,wtc,gkb,btd,btd,kcd);}var draw_point_color=dvd;function dvd(vtc,wtc,iad){var zo=hid(iid(iad),1.0);ybc.globalAlpha=tid;ybc.fillStyle=zo;ybc.gtd(vtc,wtc,1,1);}var draw_line_width_color=evd;
function evd(qvc,rvc,svc,tvc,bvc,vfd,ncd){ybc.globalAlpha=tid;var zo=hid(iid(vfd),1.0);var ap=hid(iid(ncd),1.0);var mtd=ybc.createLinearGradient(qvc,rvc,svc,tvc);mtd.addColorStop(0,zo);mtd.addColorStop(1,ap);ybc.strokeStyle=mtd;ybc.ttd();ybc.utd(qvc+0.5,rvc+0.5);ybc.vtd(svc+0.5,tvc+0.5);ybc.lineWidth=bvc;ybc.wtd();ybc.xtd();}function draw_line_color(qvc,rvc,svc,tvc,vfd,ncd){draw_line_width_color(qvc,rvc,svc,tvc,1,vfd,ncd);}function draw_button(qvc,rvc,svc,tvc,fvd){qvc+=1.5;rvc+=1.5;svc-=0.5;tvc-=0.5;if(fvd){
draw_line_width_color(qvc,rvc,svc,rvc,2,0xffffff,0xffffff);draw_line_width_color(qvc,rvc,qvc,tvc,2,0xffffff,0xffffff);draw_line_width_color(svc,rvc,svc,tvc,2,0x404040,0x404040);draw_line_width_color(svc,tvc,qvc,tvc,2,0x404040,0x404040);}else {draw_line_width_color(qvc,rvc,svc,rvc,2,0x404040,0x404040);draw_line_width_color(qvc,rvc,qvc,tvc,2,0x404040,0x404040);draw_line_width_color(svc,rvc,svc,tvc,2,0xffffff,0xffffff);draw_line_width_color(svc,tvc,qvc,tvc,2,0xffffff,0xffffff);}draw_rectangle_color(qvc,
rvc,svc,tvc,btd,btd,btd,btd,false);}function ghd(x,y,xdb,uvc,zo,ap,tud){draw_ellipse_color(x,y,xdb,uvc,zo,ap,tud);}function draw_set_blend_mode(gvd){qyc("draw_set_blend_mode()");}function draw_set_blend_mode_ext(src,hvd){qyc("draw_set_blend_mode_ext()");}var ivd=null;function ini_open(jvd){var kvd=null;if(lvd){kvd=mvd(jvd,true);}if(kvd==null){kvd=mvd(jvd,false);}if(kvd==null){kvd=new nvd(jvd);}ivd=kvd;}function ini_close(){if(ivd.ovd)ivd.pvd();ivd=null;}function ini_read_string(qvd,fu,rvd){if(ivd==null)return rvd;
return ivd.svd(qvd,fu,rvd);}function ini_read_real(qvd,fu,rvd){if(ivd==null)return rvd;return ivd.tvd(qvd,fu,rvd);}function ini_write_string(qvd,fu,obd){if(ivd==null)return false;ivd.uvd(qvd,fu,obd);return true;}function ini_write_real(qvd,fu,obd){if(ivd==null)return false;ivd.uvd(qvd,fu,""+real(obd));return true;}function ini_key_exists(qvd,fu){if(ivd==null)return false;var vvd=ivd.wvd(qvd,fu);if(vvd!=null&&vvd!=undefined)return true;return false;}function ini_section_exists(qvd){if(ivd==null)return false;var xvd=ivd.yvd[qvd];
if(xvd!=null&&xvd!=undefined)return true;return false;}function ini_key_delete(qvd,fu){if(ivd==null)return false;return ivd.zvd(qvd,fu);}function ini_section_delete(qvd){if(ivd==null)return false;return ivd.awd(qvd);}function instance_find(pxc,bwd){var cwd=GetWithArray(pxc);if(cwd==null)return zjd;if(bwd>=cwd.length)return zjd;return cwd[bwd].id;}function instance_exists(pxc){var dwd=GetWithArray(pxc);if(dwd!=null&&dwd.length>0){for(var vzc in dwd){ewd=dwd[vzc];if(!ewd.fwd)return true;}}return false;}function instance_number(pxc){
var cwd=GetWithArray(pxc);if(cwd==null)return 0;var ay=0;for(var i=0;i<cwd.length;i++){if(!cwd[i].fwd)ay++;}return ay;}function instance_position(vtc,wtc,pxc){return yjd(null,Math.floor(pxc),false,zjd,vtc,wtc,function(akd){if(akd.ckd(vtc,wtc,true))return akd.id;else return 0;});}function instance_nearest(wyc,vtc,wtc,pxc){var ot=10000000000;var i=zjd;var gwd=yjd(null,Math.floor(pxc),false,zjd,vtc,wtc,function(akd){var qud=vtc-akd.x;var rud=wtc-akd.y;var qv=Math.sqrt(qud*qud+rud*rud);if(qv<ot){i=akd.id;ot=qv;}});return i;
}function instance_furthest(wyc,vtc,wtc,pxc){var ot=-10000000000;var i=zjd;var gwd=yjd(null,Math.floor(pxc),false,zjd,vtc,wtc,function(akd){var qud=vtc-akd.x;var rud=wtc-akd.y;var qv=Math.sqrt(qud*qud+rud*rud);if(qv>ot){i=akd.id;ot=qv;}});return i;}function instance_place(wjd,vtc,wtc,pxc){var qud=wjd.x;var rud=wjd.y;wjd.vpb(vtc,wtc);var id=yjd(null,Math.floor(pxc),false,zjd,vtc,wtc,function(akd){if(akd.hwd(wjd,true)){return akd.id;}else {return 0;}});wjd.vpb(qud,rud);return id;}function instance_create(vtc,wtc,pxc){
var iwd=ypd.mvc(pxc);if(!iwd){hbc("Error: Trying to create an instance using non-existent object type ("+pxc+")");return zjd;}var ewd=wzc.xzc(vtc,wtc,pxc);ewd.yzc(zzc,0,ewd,ewd);return ewd.id;}function instance_destroy(wjd){wjd.yzc(jwd,0,wjd,wjd);wjd.fwd=true;}function position_destroy(wyc,vtc,wtc){var i;var bottom,top;var kwd=[];var lwd=wzc.mwd;for(i in lwd.pfc){var ewd=lwd.pfc[i];if(ewd.nwd)ewd.owd();var pwd=ewd.pwd;if(!((vtc>pwd.qwd)||(vtc<pwd.left)||(wtc>pwd.bottom)||(wtc<pwd.top))){kwd[kwd.length]=ewd;}}
var lwd=wzc.mwd;for(i=0;i<kwd.length;i++){instance_destroy(kwd[i]);}}function position_change(vtc,wtc,rwd,swd){var i;var bottom,top;var kwd=[];var lwd=wzc.mwd;for(i in lwd.pfc){var ewd=lwd.pfc[i];if(ewd.nwd)ewd.owd();var pwd=ewd.pwd;if(!((vtc>pwd.qwd)||(vtc<pwd.left)||(wtc>pwd.bottom)||(wtc<pwd.top))){kwd[kwd.length]=ewd;}}var lwd=wzc.mwd;for(i=0;i<kwd.length;i++){instance_change(kwd[i],rwd,swd)}}function motion_set(wyc,azc,czc){wyc.setdirection(azc);wyc.setspeed(czc);}function motion_add(wyc,azc,czc){wyc.bzc(azc,
czc);}function instance_copy(wyc,twd){var uwd=new vwd(0,0,wwd++,wyc.object_index,true);uwd.xwd(wyc,true);var ewd=wzc.ywd(uwd);if(twd){uwd.yzc(zzc,0,uwd,uwd);}return uwd.id;}function zwd(wyc,rwd,swd){if(swd)wyc.yzc(jwd,0,wyc,wyc);wyc.axd(rwd,true,false);wyc.sprite_index=wyc.srd.bxd;var cxd=ibd.mvc(wyc.sprite_index);if(cxd){wyc.pwd.left=cxd.pwd.left;wyc.pwd.qwd=cxd.pwd.qwd;wyc.pwd.top=cxd.pwd.top;wyc.pwd.bottom=cxd.pwd.bottom;}if(swd)wyc.yzc(zzc,0,wyc,wyc);}function dxd(wyc,rwd,swd){if(!ypd.exd(rwd)){hzc("Error: Trying to change an instance to an nonexistent object type.");
return;}zwd(wyc,rwd,swd);}var instance_change=dxd;function instance_deactivate_all(wyc,xjd){var uwc=[];uwc=wzc.mwd.pfc;wzc.mwd.oyb();var fxd=wzc.gxd;for(var i=0;i<uwc.length;i++){if(uwc[i]==wyc){if(xjd==false){wzc.hxd(uwc[i]);}else {wzc.mwd.ixd(uwc[i]);}}else {wzc.hxd(uwc[i]);}}}function instance_activate_all(wyc){var uwc=[];uwc=wzc.gxd.pfc;wzc.gxd.oyb();var lwd=wzc.mwd;for(var i=0;i<uwc.length;i++){wzc.jxd(uwc[i]);}}function instance_activate_object(wyc,rwd){var i;var kwd=[];var fxd=wzc.gxd;for(i in fxd.pfc){var ewd=fxd.pfc[i];
if(ewd.object_index==rwd||ewd.id==rwd){kwd[kwd.length]=ewd;}}var lwd=wzc.mwd;for(i=0;i<kwd.length;i++){wzc.jxd(kwd[i]);}}function instance_deactivate_object(wyc,rwd){var i;var kwd=[];var lwd=wzc.mwd;for(i in lwd.pfc){var ewd=lwd.pfc[i];if(ewd.object_index==rwd||ewd.id==rwd){kwd[kwd.length]=ewd;}}var fxd=wzc.gxd;for(i=0;i<kwd.length;i++){wzc.hxd(kwd[i]);}}function instance_deactivate_region(wyc,wid,xid,yid,zid,kxd,xjd){var i;var bottom,top;var kwd=[];var lwd=wzc.mwd;qwd=wid+yid-1;bottom=xid+zid-1;for(i in lwd.pfc){
var lxd=false;var ewd=lwd.pfc[i];if(ewd.nwd)ewd.owd();var pwd=ewd.pwd;if((ewd.sprite_index!=0)||(ewd.mask_index!=0)){if((wid>pwd.qwd)||(qwd<pwd.left)||(xid>pwd.bottom)||(bottom<pwd.top)){lxd=true;}}else {if((ewd.x>qwd)||(ewd.x<wid)||(ewd.y>bottom)||(ewd.y<xid)){lxd=true;}}if(lxd!=kxd)kwd[kwd.length]=ewd;}var fxd=wzc.gxd;for(i=0;i<kwd.length;i++){if(wyc==kwd[i]){if(!xjd){wzc.hxd(kwd[i]);}}else {wzc.hxd(kwd[i]);}}}function instance_activate_region(wyc,wid,xid,yid,zid,kxd){var i;var bottom,top;var kwd=[];var fxd=wzc.gxd;
qwd=wid+yid-1;bottom=xid+zid-1;for(i in fxd.pfc){var lxd=false;var ewd=fxd.pfc[i];if(ewd.nwd)ewd.owd();if(ewd.srd.mxd=="o_b"){ewd.x=ewd.x;}var pwd=ewd.pwd;if((ewd.sprite_index!=0)||(ewd.mask_index!=0)){if(pwd.qwd<wid||pwd.left>qwd||pwd.bottom<xid||pwd.top>bottom){lxd=true;}}else {if((ewd.x>qwd)||(ewd.x<wid)||(ewd.y>bottom)||(ewd.y<xid)){lxd=true;}}if(lxd!=kxd)kwd[kwd.length]=ewd;}var lwd=wzc.mwd;for(i=0;i<kwd.length;i++){if(wyc==kwd[i]){if(!xjd){wzc.jxd(kwd[i]);}}else {wzc.jxd(kwd[i]);}}}function keyboard_key_press(fu){
nxd(fu);}function keyboard_key_release(fu){oxd(fu);}function pxd(qxd){with(guc){switch(qxd){case 0:if(rxd==0)return 0;else return 1;case 1:if((rxd&1)==0)return 0;else return 1;case 2:if((rxd&2)==0)return 0;else return 1;case 3:if((rxd&4)==0)return 0;else return 1;case -1:if(rxd==0)return 1;else return 0;}}return 0;}function mouse_check_button(qxd){with(guc){switch(qxd){case 0:if(sxd[0]||sxd[1]||sxd[2])return 1;else return 0;case 1:if(sxd[0])return 1;else return 0;case 2:if(sxd[1])return 1;else return 0;case 3:if(sxd[2])return 1;else return 0;
case -1:if(sxd[0]||sxd[1]||sxd[2])return 0;else return 1;}}return 0;}function mouse_check_button_pressed(qxd){with(guc){switch(qxd){case 0:if(txd[0]||txd[1]||txd[2])return 1;else return 0;case 1:if(txd[0])return 1;else return 0;case 2:if(txd[1])return 1;else return 0;case 3:if(txd[2])return 1;else return 0;case -1:if(txd[0]||txd[1]||txd[2])return 0;else return 1;}}return 0;}function mouse_check_button_released(qxd){with(guc){switch(qxd){case 0:if(uxd[0]||uxd[1]||uxd[2])return 1;else return 0;case 1:if(uxd[0])return 1;else return 0;
case 2:if(uxd[1])return 1;else return 0;case 3:if(uxd[2])return 1;else return 0;case -1:if(uxd[0]||uxd[1]||uxd[2])return 0;else return 1;}return 0;}}function vxd(){return 0;}function wxd(){return 0;}function mouse_clear(xxd){if(xxd>=1&&xxd<=3){guc.txd[xxd]=0;}}function io_clear(){guc.oyb();}function keyboard_check(fu){return guc.yxd[fu];}function keyboard_check_pressed(fu){return guc.zxd[fu];}function keyboard_clear(fu){guc.zxd[fu]=false;}function keyboard_check_released(fu){return guc.ayd[fu];}function keyboard_check_direct(fu){
return guc.yxd[fu];}function display_mouse_get_x(){return g_pBuiltIn.mouse_x;}function display_mouse_get_y(){return g_pBuiltIn.mouse_y;}function keyboard_set_map(byd,cyd){if((byd<0)||(byd>dyd))return 0;if((cyd<0)||(cyd>dyd))return 0;guc.eyd[byd]=cyd;}function keyboard_get_map(fu){if((fu<0)||(fu>dyd))return 0;return guc.eyd[fu];}function keyboard_unset_map(){for(var hfb=0;hfb<dyd;hfb++){this.eyd[hfb]=hfb;}}function fyd(gyd){if(gyd.readyState!=4)return;var ond=hyd(gyd);ond.iyd=gyd.status;ond.jyd=true;ond.iyd=gyd.status;
if(gyd.status!=200){ond.kyd=lyd;ond.myd="";return;}ond.kyd=nyd;ond.myd=gyd.responseText;}function oyd(erd,gyd){var ond=hyd(gyd);ond.iyd=gyd.status;ond.jyd=true;ond.kyd=nyd;ond.myd=gyd.responseText;ond.iyd=200;}function pyd(erd,gyd){var ond=hyd(gyd);ond.iyd=gyd.status;ond.jyd=true;ond.kyd=lyd;ond.myd="";ond.iyd=404;}function http_get(hhd){return qyd("GET",hhd,"");}function http_post_string(hhd,bpd){if(!bpd)bpd="";return qyd('POST',hhd,bpd);}function qyd(mdd,hhd,ryd){try{var syd=null;var tyd=false;if(window.XDomainRequest){
syd=new XDomainRequest();tyd=true;}else {if(window.XMLHttpRequest){syd=new XMLHttpRequest();}else if(window.ActiveXObject){if(new ActiveXObject("Microsoft.XMLHTTP")){syd=new ActiveXObject("Microsoft.XMLHTTP");}else {syd=new ActiveXObject("Msxml2.XMLHTTP");}}}if(tyd){syd.open(mdd,hhd);sjd.xnb(uyd,hhd,vyd,syd);syd.ontimeout=syd.onerror=function(erd){pyd(erd,syd);};syd.onload=function(erd){oyd(erd,syd);};syd.send(ryd);}else {syd.open(mdd,hhd,true);sjd.xnb(uyd,hhd,vyd,syd);if(mdd=="POST")syd.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded");syd.onreadystatechange=function(){fyd(syd);};syd.send(ryd);}}catch(obb){return -1;}return uyd++;}var wyd=0x7fff;var xyd=0;var floor=Math.floor;function yyd(zyd){var i=zyd&0xffffffff;var pbb=zyd-i;if((i&1)==1){if(pbb>=0.5){return i+1;}else {return i;}}else {if(pbb<=0.5){return i;}else {return i+1;}}}function azd(zyd){return ~~zyd;}var round=yyd;var zyc=yyd;var abs=Math.abs;function cos(zyd){var vtc=Math.cos(zyd);var rbb=~~(vtc*0x1000000);vtc=rbb/0x1000000;return vtc;}function sin(zyd){
var vtc=Math.sin(zyd);var rbb=~~(vtc*0x1000000);vtc=rbb/0x1000000;return vtc;}function tan(zyd){var vtc=Math.tan(zyd);var rbb=~~(vtc*0x1000000);vtc=rbb/0x1000000;return vtc;}function lengthdir_x(bzd,azc){var hh=(bzd*Math.cos(azc*czd/180.0));var dzd=Math.floor(hh);var frac=hh-dzd;if(Math.abs(frac)<0.0001)return dzd;return hh;}function lengthdir_y(bzd,azc){var hh=-(bzd*Math.sin(azc*czd/180.0));var dzd=Math.floor(hh);var frac=hh-dzd;if(Math.abs(frac)<0.0001)return dzd;return hh;}function point_direction(qvc,rvc,svc,tvc){
var x=svc-qvc;var y=tvc-rvc;if(x===0){if(y>0)return 270.0;else if(y<0)return 90.0;else return 0.0;}else {var pud=180.0*Math.atan2(y,x)/czd;pud=(~~floor(pud*1000000))/1000000.0;if(pud<=0.0){return -pud;}else {return(360.0-pud);}}return vad;}function ezd(qvc,rvc,svc,tvc){return point_direction(qvc,rvc,svc,tvc);}function point_distance(qvc,rvc,svc,tvc){return Math.sqrt(fzd(svc-qvc)+fzd(tvc-rvc));}function gzd(qvc,rvc,hzd,svc,tvc,izd){return Math.sqrt(fzd(svc-qvc)+fzd(tvc-rvc)+fzd(izd-hzd));}function xvc(zyd,ikb){if(zyd<ikb)return zyd;
else return ikb;}function wvc(zyd,ikb){if(zyd>ikb)return zyd;else return ikb;}var max=Math.max;function max3(zyd,ikb,jzd){return max(zyd,ikb,vtc);}var min=Math.min;function min3(zyd,ikb,jzd){return min(zyd,ikb,vtc);}function kzd(){return Math.random();}function random(lzd){var sign=1;if(lzd!=0){if(lzd<0){sign=-1;}return kzd()*lzd*sign;}return 0;}function irandom(lzd){var lq=kzd()*(lzd+1);return ~~lq;}function random_range(mzd,bgd){if(mzd==bgd){return mzd;}var qhb,nzd;if(mzd>bgd){qhb=bgd;nzd=mzd;}else {qhb=mzd;nzd=bgd;}var ozd=kzd();
em=qhb+(ozd*(nzd-qhb));return em;}function random_set_seed(pvc){djd("random_set_seed");}function randomize(){var qv=new Date();xyd=(xyd!=0)?(qv.getMilliseconds()/xyd):qv.getMilliseconds();}function irandom_range(mzd,bgd){var qhb,nzd;if(mzd>bgd){qhb=bgd;nzd=mzd;}else {qhb=mzd;nzd=bgd;}var xdb=qhb|0;var ydb=nzd|0;var em=xdb+random(ydb-xdb+1);return(em|0);}function random_get_seed(){return xyd;}function choose(){var pzd=choose.arguments;var qzd=choose.arguments.length;var index=Math.floor(random(qzd));return pzd[index];
}function sign(vtc){if(vtc==0)return 0;if(vtc<0)return -1;return 1;}var ceil=Math.ceil;function frac(vtc){return vtc-~~vtc;}var sqrt=Math.sqrt;function sqr(vtc){return vtc*vtc;}var power=Math.pow;var exp=Math.exp;var ln=Math.log;function log2(vtc){return Math.log(vtc)/Math.LN2;}function log10(vtc){return Math.log(vtc)/Math.LN10;}function logn(bwd,vtc){return Math.log(vtc)/Math.log(bwd);}var arcsin=Math.asin;var arccos=Math.acos;function arctan(vtc){return Math.atan(vtc);}var arctan2=Math.atan2;function degtorad(vtc){return vtc*0.0174532925;
}function radtodeg(vtc){return vtc*57.2957795;}function mean(){var pzd=mean.arguments;var qzd=mean.arguments.length;var pz=pzd[0];for(var i=1;i<qzd;i++){pz+=pzd[i];}return(pz/qzd);}function median(){var arguments=median.arguments;if(arguments.length==0){return 0;}var i,sjb,em;for(i=0;i<arguments.length;i++){var rzd=0;var szd=0;for(sjb=0;sjb<arguments.length;sjb++){if(arguments[sjb]<arguments[i]){rzd=rzd+1;}if(arguments[sjb]<=arguments[i]){szd=szd+1;}}if((rzd<(arguments.length/2))&&(szd>=(arguments.length/2))){
return arguments[i];}}hzc("Error: was not able to successfully find the median value");return 0;}function tzd(qvc,rvc,svc,tvc){return(qvc*svc+rvc*tvc);}function uzd(qvc,rvc,hzd,svc,tvc,izd){return(qvc*svc+rvc*tvc+hzd*izd);}function vzd(qvc,rvc,svc,tvc){var wzd=xzd(qvc*qvc+rvc*rvc);var yzd=xzd(svc*svc+tvc*tvc);return(qvc*svc+rvc*tvc)/(wzd*yzd);}function zzd(qvc,rvc,aae,svc,tvc,izd){var wzd=xzd(qvc*qvc+rvc*rvc+hzd*hzd);var yzd=xzd(svc*svc+tvc*tvc+izd*izd);return(qvc*svc+rvc*tvc+hzd*izd)/(wzd*yzd);}function is_real(vtc){
if(typeof(vtc)=="boolean")return 1;else if(typeof(vtc)=="number")return 1;else return 0;}function is_string(vtc){if(typeof(vtc)=="string")return 1;else return 0;}function clamp(obd,bae,cae){if(obd<bae)obd=bae;else if(obd>cae)obd=cae;return obd;}function lerp(dae,eae,qld){return dae+((eae-dae)*qld);}function fae(gae,hae){var vad=0.0;while(iae<=0.0){iae=iae+360;}while(iae>=360.0){iae=iae-360;}while(jae<0.0){jae=jae+360;}while(jae>=360.){jae=jae-360;}vad=jae-iae;if(vad<0){vad=-vad;}if(vad>180){vad=360-vad;}return vad;
}function kae(wjd,vtc,wtc,lae,lgd){if(lae==mgd){if(lgd){return place_empty(wjd,vtc,wtc);}else {return place_free(wjd,vtc,wtc);}}else {return(instance_place(wjd,vtc,wtc,lae)==zjd);}}function mae(wjd,vtc,wtc,kgd,lae,lgd){var vad=false;var ot=0.0;var nae=0.0;var oae=0.0;if((wjd.x==vtc)&&(wjd.y==wtc))return true;ot=sqrt(fzd(wjd.x-vtc)+fzd(wjd.y-wtc));if(ot<=kgd){nae=vtc;oae=wtc;vad=true;}else {nae=wjd.x+kgd*(vtc-wjd.x)/ot;oae=wjd.y+kgd*(wtc-wjd.y)/ot;vad=false;}if(!kae(wjd,nae,oae,lae,lgd)){return vad;}wjd.setdirection(point_direction(wjd.x,
wjd.y,nae,oae));wjd.vpb(nae,oae);return vad;}function mp_linear_step(wjd,vtc,wtc,kgd,lgd){return mae(wjd,vtc,wtc,kgd,mgd,lgd);}function mp_linear_step_object(wjd,vtc,wtc,kgd,pxc){return mae(wjd,vtc,wtc,kgd,pxc,true);}function mp_potential_step(wjd,vtc,wtc,kgd,lgd){return mae(wjd,vtc,wtc,kgd,mgd,lgd);}function mp_potential_step_object(wjd,vtc,wtc,kgd,pxc){return mae(wjd,vtc,wtc,kgd,pxc,true);}function mp_potential_settings(wjd,pae,qae,rae,sae){djd("mp_potential_settings()");}function mp_linear_path(wjd,ggd,
tae,uae,kgd,lgd){djd("mp_linear_path()");}function mp_linear_path_object(wjd,ggd,tae,uae,kgd,pxc){djd("mp_linear_path_object()");}function mp_potential_path(wjd,ggd,tae,uae,kgd,vae,lgd){djd("mp_potential_path()");}function mp_potential_path_object(wjd,ggd,tae,uae,kgd,vae,pxc){djd("mp_potential_path_object()");}function wae(wid,xid,xae,yae,zae,abe){this.bbe=wid;this.cbe=xid;this.dbe=xae;this.ebe=yae;this.fbe=zae;this.gbe=abe;this.hbe=[];this.oyb();};wae.prototype.oyb=function(){var ibe=this.dbe*this.ebe;
for(var i=0;i<ibe;i++){this.hbe[i]=0;}};wae.prototype.jbe=function(vtc,wtc,pvc){if(vtc<0||vtc>=this.dbe)return;if(wtc<0||wtc>=this.ebe)return;this.hbe[vtc+(wtc*this.ebe)]=pvc;};wae.prototype.kbe=function(vtc,wtc){if(vtc<0||vtc>=this.dbe)return;if(wtc<0||wtc>=this.ebe)return;return this.hbe[vtc+(wtc*this.ebe)];};wae.prototype.lbe=function(qvc,rvc,svc,tvc,pvc){var iud=~~((xvc(qvc,svc)-this.bbe)/this.fbe);if(iud<0)iud=0;var jud=~~((wvc(qvc,svc)-this.bbe)/this.fbe);if(jud>=this.dbe)jud=this.dbe-1;kud=~~((xvc(rvc,
tvc)-this.cbe)/this.gbe);if(kud<0)kud=0;lud=~~((wvc(rvc,tvc)-this.cbe)/this.gbe);if(lud>=this.ebe)lud=this.ebe-1;for(var i=iud;i<=jud;i++){var index=i*this.ebe;for(var sjb=kud;sjb<=lud;sjb++){this.hbe[index+sjb]=pvc;}}};function mp_grid_create(wid,xid,mbe,nbe,zae,abe){var hfb=new wae(wid,xid,mbe,nbe,zae,abe);return obe.xnb(hfb);}function mp_grid_destroy(utc){obe.jvc(utc);}function mp_grid_clear_all(utc){var pbe=obe.mvc(utc);if(pbe){pbe.oyb();return;}hbc("Error: invalid mp_grid ID (mp_grid_clear_all)");}function mp_grid_clear_cell(utc,
cvc,lzd){var pbe=obe.mvc(utc);if(pbe){pbe.jbe(cvc,lzd,0);return;}hbc("Error: invalid mp_grid ID (mp_grid_clear_cell)");}function mp_grid_clear_rectangle(utc,qvc,rvc,svc,tvc){var pbe=obe.mvc(utc);if(pbe){pbe.lbe(qvc,rvc,svc,tvc,0);return;}hbc("Error: invalid mp_grid ID (mp_grid_clear_rectangle)");}function mp_grid_add_cell(utc,vtc,wtc){var pbe=obe.mvc(utc);if(pbe){pbe.jbe(vtc,wtc,-1);return;}hbc("Error: invalid mp_grid ID (mp_grid_add_cell)");}function mp_grid_add_rectangle(utc,qvc,rvc,svc,tvc){var pbe=obe.mvc(utc);
if(pbe){pbe.lbe(qvc,rvc,svc,tvc,-1);return;}hbc("Error: invalid mp_grid ID (mp_grid_add_rectangle)");}function mp_grid_add_instances(wyc,utc,pxc,xuc){var pbe=obe.mvc(utc);if(pbe){var qbe=GetWithArray(pxc);for(var rbe=0;rbe<qbe.length;rbe++){var ewd=qbe[rbe];if(ewd.nwd)ewd.owd();var iud=~~((ewd.pwd.left-pbe.bbe)/pbe.fbe);if(iud<0)iud=0;jud=~~((ewd.pwd.qwd-pbe.bbe)/pbe.fbe);if(jud>=pbe.dbe)jud=pbe.dbe-1;kud=~~((ewd.pwd.top-pbe.cbe)/pbe.gbe);if(kud<0)kud=0;lud=~~((ewd.pwd.bottom-pbe.cbe)/pbe.gbe);if(lud>=pbe.ebe)lud=pbe.ebe-1;
for(var i=iud;i<=jud;i++){for(var sjb=kud;sjb<=lud;sjb++){if(!xuc){pbe.hbe[i*pbe.ebe+sjb]=-1;continue;}if(pbe.hbe[i*pbe.ebe+sjb]<0)continue;if(ewd.dkd(pbe.bbe+i*pbe.fbe,pbe.cbe+sjb*pbe.gbe,pbe.bbe+(i+1)*pbe.fbe-1,pbe.cbe+(sjb+1)*pbe.gbe-1,true)){pbe.hbe[i*sbe+sjb]=-1;}}}}return;}hbc("Error: invalid mp_grid ID (mp_grid_add_instances)");}var mp_grid_draw=tbe;function tbe(utc){var pbe=obe.mvc(utc);if(pbe){ybc.globalAlpha=tid;var ube=hid(0xff0000,1.0);var vbe=hid(0x00ff00,1.0);for(var y=0;y<pbe.ebe;y++){for(var x=0;
x<pbe.dbe;x++){var brd=vbe;if(pbe.hbe[y+pbe.dbe*x]<0)brd=ube;ybc.fillStyle=brd;ybc.gtd((pbe.bbe+x*pbe.fbe),(pbe.cbe+y*pbe.gbe),pbe.fbe,pbe.gbe);}}return;}hbc("Error: invalid mp_grid ID (mp_grid_draw)");}function mp_grid_path(wjd,utc,ggd,wbe,xbe,ybe,zbe,ace){var bce,cce,dce,ece,i,sjb,bcd,qv,qud,rud,zdb,aeb,fce,gce,hce,ice,jce,kce,lce;var vad=false;var pbe=obe.mvc(utc);var mce=nce.Paths[ggd];if(!mce||!pbe){if(!mce)hbc("Error: invalid path ID (mp_grid_path)");if(!pbe)hbc("Error: invalid mp_grid ID (mp_grid_path)");
return;}if((wbe<pbe.bbe)||(wbe>=(pbe.bbe+pbe.dbe*pbe.fbe))){hbc("Error: invalid xstart position, not on grid. (mp_grid_path)");return;}if((xbe<pbe.cbe)||(xbe>=pbe.cbe+pbe.ebe*pbe.gbe)){hbc("Error: invalid ystart position, not on grid. (mp_grid_path)");return;}bce=~~((wbe-pbe.bbe)/pbe.fbe);cce=~~((xbe-pbe.cbe)/pbe.gbe);if(pbe.hbe[bce*pbe.ebe+cce]<0){hbc("Error: Can't START path in a blocked grid position. (mp_grid_path)");return;}if((ybe<pbe.bbe)||(ybe>=pbe.bbe+pbe.dbe*pbe.fbe)){hbc("Error: invalid xgoal position, not on grid. (mp_grid_path)");
return;}if((zbe<pbe.cbe)||(zbe>=pbe.cbe+pbe.ebe*pbe.gbe)){hbc("Error: invalid ygoal position, not on grid. (mp_grid_path)");return;}dce=~~((ybe-pbe.bbe)/pbe.fbe);ece=~~((zbe-pbe.cbe)/pbe.gbe);if(pbe.hbe[dce*pbe.ebe+ece]<0){hbc("Error: Can't END path in a blocked grid position. (mp_grid_path)");return;}pbe.hbe[bce*pbe.ebe+cce]=1;lce=new oce();lce.pce((bce*pbe.ebe+cce));while(lce.qce(1)){bcd=lce.rce();qud=~~(bcd/pbe.ebe);rud=~~(bcd%pbe.ebe);if((qud==dce)&&(rud==ece)){vad=true;break;}qv=pbe.hbe[bcd]+1;
zdb=(qud>0)&&(rud<pbe.ebe-1)&&(pbe.hbe[(qud-1)*pbe.ebe+(rud+1)]==0);aeb=(rud<pbe.ebe-1)&&(pbe.hbe[(qud)*pbe.ebe+(rud+1)]==0);fce=(qud<pbe.dbe-1)&&(rud<pbe.ebe-1)&&(pbe.hbe[(qud+1)*pbe.ebe+(rud+1)]==0);gce=(qud>0)&&(pbe.hbe[(qud-1)*pbe.ebe+(rud)]==0);hce=(qud<pbe.dbe-1)&&(pbe.hbe[(qud+1)*pbe.ebe+(rud)]==0);ice=(qud>0)&&(rud>0)&&(pbe.hbe[(qud-1)*pbe.ebe+(rud-1)]==0);jce=(rud>0)&&(pbe.hbe[(qud)*pbe.ebe+(rud-1)]==0);kce=(qud<pbe.dbe-1)&&(rud>0)&&(pbe.hbe[(qud+1)*pbe.ebe+(rud-1)]==0);if(gce){pbe.hbe[(qud-1)*pbe.ebe+rud]=qv;
lce.pce(~~((qud-1)*pbe.ebe+rud));}if(hce){pbe.hbe[(qud+1)*pbe.ebe+rud]=qv;lce.pce(~~((qud+1)*pbe.ebe+rud));}if(jce){pbe.hbe[qud*pbe.ebe+rud-1]=qv;lce.pce(~~(qud*pbe.ebe+rud-1));}if(aeb){pbe.hbe[qud*pbe.ebe+rud+1]=qv;lce.pce(~~(qud*pbe.ebe+rud+1));}if(ace&&zdb&&aeb&&gce){pbe.hbe[(qud-1)*pbe.ebe+rud+1]=qv;lce.pce(~~((qud-1)*pbe.ebe+rud+1));}if(ace&&ice&&jce&&gce){pbe.hbe[(qud-1)*pbe.ebe+rud-1]=qv;lce.pce(~~((qud-1)*pbe.ebe+rud-1));}if(ace&&fce&&aeb&&hce){pbe.hbe[(qud+1)*pbe.ebe+rud+1]=qv;lce.pce(~~((qud+1)*pbe.ebe+rud+1));
}if(ace&&kce&&jce&&hce){pbe.hbe[(qud+1)*pbe.ebe+rud-1]=qv;lce.pce(~~((qud+1)*pbe.ebe+rud-1));}}lce=undefined;if(vad){mce.oyb;mce.sce=tce;mce.uce=false;mce.vce(ybe,zbe,100);qud=dce;rud=ece;while((qud!=bce)||(rud!=cce)){bcd=pbe.hbe[qud*pbe.ebe+rud];zdb=(qud>0)&&(rud<pbe.ebe-1)&&(pbe.hbe[(qud-1)*pbe.ebe+(rud+1)]==bcd-1);aeb=(rud<pbe.ebe-1)&&(pbe.hbe[(qud)*pbe.ebe+(rud+1)]==bcd-1);fce=(qud<pbe.dbe-1)&&(rud<pbe.ebe-1)&&(pbe.hbe[(qud+1)*pbe.ebe+(rud+1)]==bcd-1);gce=(qud>0)&&(pbe.hbe[(qud-1)*pbe.ebe+(rud)]==bcd-1);
hce=(qud<pbe.dbe-1)&&(pbe.hbe[(qud+1)*pbe.ebe+(rud)]==bcd-1);ice=(qud>0)&&(rud>0)&&(pbe.hbe[(qud-1)*pbe.ebe+(rud-1)]==bcd-1);jce=(rud>0)&&(pbe.hbe[(qud)*pbe.ebe+(rud-1)]==bcd-1);kce=(qud<pbe.dbe-1)&&(rud>0)&&(pbe.hbe[(qud+1)*pbe.ebe+(rud-1)]==bcd-1);if(gce)qud=qud-1;else if(hce)qud=qud+1;else if(jce)rud=rud-1;else if(aeb)rud=rud+1;else if(ace&&zdb){qud=qud-1;rud=rud+1;}else if(ace&&fce){qud=qud+1;rud=rud+1;}else if(ace&&ice){qud=qud-1;rud=rud-1;}else if(ace&&kce){qud=qud+1;rud=rud-1;};if((qud!=bce)||(rud!=cce)){
mce.vce(~~(pbe.bbe+qud*pbe.fbe+pbe.fbe/2),~~(pbe.cbe+rud*pbe.gbe+pbe.gbe/2),100);}};mce.vce(wbe,xbe,100);mce.wce();};for(i=0;i<pbe.dbe;i++){for(sjb=0;sjb<pbe.ebe;sjb++){if(pbe.hbe[i*pbe.ebe+sjb]>0)pbe.hbe[i*pbe.ebe+sjb]=0;}}}function place_free(wjd,vtc,wtc){var qud,rud,vad,xce;vad=true;qud=wjd.x;rud=wjd.y;wjd.vpb(vtc,wtc);var pfc=wzc.yce();for(var vzc in pfc){xce=pfc[vzc];if(xce.solid){if(wjd.hwd(xce,true)){vad=false;break;}}}wjd.vpb(qud,rud);return vad;}function place_empty(wjd,vtc,wtc){var qud,rud,vad,
xce;vad=true;qud=wjd.x;rud=wjd.y;wjd.vpb(vtc,wtc);var pfc=wzc.yce();for(var vzc in pfc){xce=pfc[vzc];if(wjd.hwd(xce,true)){vad=false;break;}}wjd.vpb(qud,rud);return vad;}function place_meeting(wjd,vtc,wtc,pxc){var qud,rud,vad,xce;vad=false;qud=wjd.x;rud=wjd.y;wjd.vpb(vtc,wtc);var pfc=GetWithArray(pxc);for(var vzc in pfc){xce=pfc[vzc];if(wjd.hwd(xce,true)){vad=true;break;}}wjd.vpb(qud,rud);return vad;}function place_snapped(wyc,lzc,mzc){if(lzc>0){if(Math.abs(wyc.x-lzc*zyc(wyc.x/lzc))>=0.001){return false;}}if(mzc>0){
if(Math.abs(wyc.y-mzc*zyc(wyc.y/mzc))>=0.001){return false;}}return true;}function move_random(wyc,lzc,mzc){var i=0;var x=0.0;var y=0.0;var zce;var ade;var bde;var cde;var dde=0;var ede=0;zce=0;ade=wzc.fde();bde=0;cde=wzc.gde();if(true==sprite_exists(wyc.sprite_index)||true==sprite_exists(wyc.mask_index)){var hde=wyc.ide();zce=zyc(wyc.x-hde.left);ade=zyc(ade+wyc.x-hde.qwd);bde=zyc(wyc.y-hde.top);cde=zyc(cde+wyc.y-hde.bottom);}dde=zyc(lzc);ede=zyc(mzc);for(i=1;i<100;i++){x=zce+izc(ade-zce);if(dde>0){x=dde*floor(x/dde);
}y=bde+izc(cde-bde);if(ede>0){y=ede*floor(y/ede);}if(true==place_free(wyc,x,y)){wyc.vpb(x,y);return;}}}function move_snap(wjd,lzc,mzc){wjd.x=zyc(wjd.x/lzc)*lzc;wjd.y=zyc(wjd.y/mzc)*mzc;wjd.nwd=true;}function move_wrap(wyc,jde,ltd,kde){if(jde>=0.5){if(wyc.x<-kde){wyc.vpb(wyc.x+wzc.fde()+2*kde,wyc.y);}if(wyc.x>wzc.fde()+kde){wyc.vpb(wyc.x-wzc.fde()-2*kde,wyc.y);}}if(ltd>=0.5){if(wyc.y<-kde){wyc.vpb(wyc.x,wyc.y+wzc.gde()+2*kde);}if(wyc.y>wzc.gde()+kde){wyc.vpb(wyc.x,wyc.y-wzc.gde()-2*kde);}}}function move_towards_point(wjd,
vtc,wtc,czc){wjd.sethspeed(vtc-wjd.x);wjd.setvspeed(wtc-wjd.y);wjd.setspeed(czc);}function lde(wjd,vtc,wtc,qzc){if(qzc){return place_empty(wjd,vtc,wtc);}else {return place_free(wjd,vtc,wtc);}}function szc(wjd,mde,qzc){var i,fad;var qud,rud,nde,ode,pde,qde,rde;var sde,tde,ude,vde;vde=false;if(lde(wjd,wjd.x,wjd.y,qzc)==false){wjd.vpb(wjd.xprevious,wjd.yprevious);vde=true;}qud=wjd.xrud=wjd.y;if(mde){fad=18;rde=10.0*Math.round(wjd.direction/10.0);pde=rde;qde=rde;for(i=1;i<2*fad;i++){pde=pde-180/fad;nde=qud+wjd.speed*Math.cos(pde*czd/180);
ode=rud-wjd.speed*Math.sin(pde*czd/180);if(lde(wjd,nde,ode,qzc)){break;}else {vde=true;}}for(i=1;i<2*fad;i++){qde=qde+180/fad;nde=qud+wjd.speed*Math.cos(qde*czd/180);ode=rud-wjd.speed*Math.sin(qde*czd/180);if(lde(wjd,nde,ode,qzc)){break;}else {vde=true;}}if(vde==true){wjd.setdirection(180+(pde+qde)-rde);}}else {sde=lde(wjd,wjd.x+wjd.hspeed,wjd.y,qzc);tde=lde(wjd,wjd.x,wjd.y+wjd.vspeed,qzc);ude=lde(wjd,wjd.x+wjd.hspeed,wjd.y+wjd.vspeed,qzc);if((sde==false)&&(tde==false)){wjd.hspeed=wjd.hspeed;wjd.vspeed=-wjd.vspeed;
}else if((sde==true)&&(tde==true)&&(ude==false)){wjd.hspeed=-wjd.hspeed;wjd.vspeed=-wjd.vspeed;}else if(sde==false)wjd.hspeed=-wjd.hspeed;else if(tde==false)wjd.vspeed=-wjd.vspeed;}}function move_bounce_solid(wjd,rzc){szc(wjd,rzc,false);}function move_bounce_all(wjd,rzc){szc(wjd,rzc,true);}function wde(wyc,vtc,wtc,qzc){if(qzc)return place_empty(wyc,vtc,wtc);else return place_free(wyc,vtc,wtc);}function move_contact(wyc,azc,pzc,qzc){var xde;if(pzc<=0)xde=1000;else xde=zyc(pzc);ljc=Math.cos(azc*Math.PI/180);mjc=-Math.sin(azc*Math.PI/180);
if(wde(wyc,wyc.x,wyc.y,qzc)==false)return;for(var i=1;i<=xde;i++){if(wde(wyc,wyc.x+ljc,wyc.y+mjc,qzc))wyc.vpb(wyc.x+ljc,wyc.y+mjc);else return;}}function move_contact_solid(wjd,azc,pzc){move_contact(wjd,azc,pzc,false);}function move_contact_all(wyc,azc,pzc){move_contact(wyc,azc,pzc,true);}function yde(wyc,azc,pzc,qzc){var xde;if(pzc<=0)xde=1000;else xde=zyc(pzc);var ljc=Math.cos(azc*Math.PI/180);var mjc=-sin(azc*Math.PI/180);if(wde(wyc,wyc.x,wyc.y,qzc))return;for(var i=1;i<=xde;i++){wyc.vpb(wyc.x+ljc,wyc.y+mjc);
if(wde(wyc,wyc.x,wyc.y,qzc))return;}}function move_outside_solid(wyc,azc,pzc){yde(wyc,azc,pzc,false);}function move_outside_all(wyc,azc,pzc){yde(wyc,azc,pzc,true);}function distance_to_point(wyc,vtc,wtc){if(wyc.nwd)wyc.owd();var lq=wyc.pwd;var zde=0.0;var aee=0.0;if(vtc>lq.qwd){zde=vtc-lq.qwd;}if(vtc<lq.left){zde=vtc-lq.left;}if(wtc>lq.bottom){aee=wtc-lq.bottom;}if(wtc<lq.top){aee=wtc-lq.top;}return Math.sqrt((zde*zde)+(aee*aee));}function distance_to_object(wyc,pxc){var ot=10000000000;var i=0;var ot=bee(wyc,
Math.floor(pxc),false,ot,function(akd){var zde,aee;if(wyc.nwd)wyc.owd();if(akd.nwd)akd.owd();var lq=wyc.pwd;var vm=akd.pwd;if(((lq.left>=vm.left&&lq.left<vm.qwd)||(lq.qwd>=vm.left&&lq.qwd<vm.qwd))&&((lq.top>=vm.top&&lq.top<vm.bottom)||(lq.bottom>=vm.top&&lq.bottom<vm.bottom)))return 0;if(lq.left>vm.qwd)zde=lq.left-vm.qwd;else zde=lq.qwd-vm.left;if(lq.top>vm.bottom)aee=lq.top-vm.bottom;else aee=lq.bottom-vm.top;return Math.sqrt(zde*zde+aee*aee);});return ot;}function position_empty(wyc,vtc,wtc){var ot=10000000000;
var i=0;var hpb=yjd(wyc,mgd,false,false,function(akd){return akd.ckd(vtc,wtc,true);});return !hpb;}function position_meeting(wjd,vtc,wtc,pxc){var vad,xce;vad=false;if(pxc==cee)pxc=wyc.id;var pfc=GetWithArray(pxc);for(var vzc in pfc){xce=pfc[vzc];if(xce.ckd(vtc,wtc,true)){vad=true;break;}}return vad;}function object_exists(kid){if(ypd.mvc(kid)===null)return false;return true;}function object_get_name(kid){var dwd=ypd.mvc(kid);if(!dwd)return "";return dwd.mxd;}function object_get_sprite(kid){var dwd=ypd.mvc(kid);if(dwd===null)return -1;
return dwd.bxd;}function object_get_solid(kid){var dwd=ypd.mvc(kid);if(dwd===null)return false;return dwd.dee;}function object_get_visible(kid){var dwd=ypd.mvc(kid);if(dwd===null)return false;return dwd.eee;}function object_get_depth(kid){var dwd=ypd.mvc(kid);if(dwd===null)return 0;return dwd.fee;}function object_get_persistent(kid){var dwd=ypd.mvc(kid);if(dwd===null)return false;return dwd.gee;}function object_get_mask(kid){var dwd=ypd.mvc(kid);if(dwd===null)return -1;return dwd.hee;}function object_get_parent(kid){
var dwd=ypd.mvc(kid);if(dwd===null)return -1;return dwd.xrd;}function object_set_sprite(kid,tyc){var dwd=ypd.mvc(kid);if(dwd===null)return;dwd.bxd=tyc;}function object_set_solid(kid,iee){var dwd=ypd.mvc(kid);if(dwd===null)return;dwd.dee=iee;}function object_set_visible(kid,jee){var dwd=ypd.mvc(kid);if(dwd===null)return;dwd.eee=jee;}function object_set_depth(kid,oxc){var dwd=ypd.mvc(kid);if(dwd===null)return;dwd.fee=oxc;}function object_set_persistent(kid,kee){var dwd=ypd.mvc(kid);if(dwd===null)return;dwd.gee=kee;
}function object_set_mask(kid,tyc){var dwd=ypd.mvc(kid);if(dwd===null)return;dwd.hee=tyc;}function object_set_parent(kid,lee){var dwd=ypd.mvc(kid);if(dwd===null)return;dwd.xrd=lee;dwd.vrd=ypd.mvc(lee);}function object_is_ancestor(mee,nee){var dwd=ypd.mvc(mee);if(dwd===null)return 0;dwd=dwd.vrd;while(dwd!==null){if(dwd.oee===nee)return 1;dwd=dwd.vrd;}return 0;}var part_system_create=hdd;var part_system_destroy=kdd;var part_system_exists=pee;var part_system_clear=idd;var part_system_draw_order=qee;var part_system_depth=jdd;
var part_system_position=ree;var part_system_automatic_update=see;var part_system_automatic_draw=tee;var part_system_update=uee;var part_system_drawit=vee;var part_particles_create=wee;var part_particles_create_color=xee;var part_particles_clear=ldd;var part_particles_count=yee;var part_type_create=udd;var part_type_destroy=zee;var part_type_exists=afe;var part_type_clear=bfe;var part_type_shape=wdd;var part_type_sprite=aed;var part_type_size=xdd;var part_type_scale=cfe;function part_type_blend(kid,dfe){qyc("part_type_blend()");
}var part_type_color1=efe;var part_type_color2=ydd;var part_type_color3=ffe;var part_type_color_mix=fed;var part_type_color_rgb=gfe;var part_type_color_hsv=hfe;var part_type_alpha1=ife;var part_type_alpha2=ged;var part_type_alpha3=jfe;var part_type_life=led;var part_type_step=efd;var part_type_death=ffd;var part_type_orientation=kfe;var part_type_speed=red;var part_type_direction=sed;var part_type_gravity=ved;var part_emitter_create=mfd;var part_emitter_destroy=qfd;var part_emitter_destroy_all=lfe;var part_emitter_exists=mfe;
var part_emitter_clear=nfe;var part_emitter_region=ofd;var part_emitter_burst=tfd;var part_emitter_stream=ufd;function effect_create_below(sgd,vtc,wtc,xfd,ktc){ugd(true,sgd,vtc,wtc,xfd,ktc);}function effect_create_above(sgd,vtc,wtc,xfd,ktc){ugd(false,sgd,vtc,wtc,xfd,ktc);}function effect_clear(){if(pee(ofe)){kdd(ofe);ofe=-1;}if(pee(pfe)){kdd(pfe);pfe=-1;}}function path_exists(kid){if(nce.Paths[kid])return true;return false;}function path_get_name(kid){if(!nce.Paths[kid])return "";return nce.Paths[kid].name;}
function path_get_length(qfe){if(!nce.Paths[kid])return 0;return nce.Paths[kid].length;}function path_get_kind(kid){if(!nce.Paths[kid])return 0;return nce.Paths[kid].kind;}function path_get_closed(kid){if(!nce.Paths[kid])return true;return nce.Paths[kid].closed;}function path_get_precision(kid){if(!nce.Paths[kid])return 8;return nce.Paths[kid].precision;}function path_get_number(kid){var mce=nce.Paths[kid];if(!mce)return 0;if(!mce.points)return 0;return mce.points.length;}function path_get_point_x(kid,bwd){if(bwd<0)return 0;
var mce=nce.Paths[kid];if(!mce)return 0;if(!mce.points)return 0;if(mce.points.rfe>=bwd)return 0;return mce.points[bwd].x;}function path_get_point_y(kid,bwd){if(bwd<0)return 0;var mce=nce.Paths[kid];if(!mce)return 0;if(!mce.points)return 0;if(mce.points.rfe>=bwd)return 0;return mce.points[bwd].y;}function path_get_point_speed(kid,bwd){if(bwd<0)return 0;var mce=nce.Paths[kid];if(!mce)return 0;if(!mce.points)return 0;if(mce.points.rfe>=bwd)return 0;return mce.points[bwd].speed;}function path_get_x(kid,xwc){var mce=nce.Paths[kid];
if(!mce)return -1;return mce.sfe(xwc);}function path_get_y(kid,xwc){var mce=nce.Paths[kid];if(!mce)return -1;return mce.tfe(xwc);}function path_get_speed(kid,xwc){var mce=nce.Paths[kid];if(!mce)return -1;return mce.ufe(xwc);}function path_set_kind(kid,sgd){var mce=nce.Paths[kid];if(!mce)return -1;mce.vfe(sgd);}function path_set_closed(kid,wfe){var mce=nce.Paths[kid];if(!mce)return -1;mce.xfe(wfe);}function path_set_precision(kid,xuc){var mce=nce.Paths[kid];if(!mce)return -1;mce.yfe(xuc);}function path_add(){var mce=new zfe();
nce.xnb(mce);return mce.id;}function path_duplicate(kid){var mce=nce.Paths[kid];if(!mce)return -1;age=new zfe();nce.xnb(age);age.xwd(mce);return age.id;}function path_assign(kid,ggd){var bge=nce.Paths[kid];if(!bge)return;var cge=nce.Paths[ggd];if(!cge)return;bge.xwd(cge);}function path_start(wyc,ggd,czc,dge,ege){wyc.jgd(ggd,czc,1,0,ege,dge);}function path_end(wyc){wyc.jgd(-1,0,1,0,false,0);}var draw_path=fge;function fge(utc,gge,hge,ege){var mce=nce.Paths[utc];if(!mce)return;ybc.globalAlpha=tid;ybc.strokeStyle=uod;
var qud,rud,ige;var jge=0;var kge=mce.upb(0);if(!ege){gge=gge-kge.x;hge=hge-kge.y;}else {gge=0;hge=0;}jge=zyc(mce.length/4.0);if(jge==0)return;var first=true;ybc.ttd();for(var i=0;i<=jge;i++){kge=mce.upb(i/jge);if(first){ybc.utd(gge+kge.x,hge+kge.y);first=false;}else {ybc.vtd(gge+kge.x,hge+kge.y);}}ybc.wtd();ybc.xtd();}function path_shift(utc,gge,hge){var mce=nce.Paths[utc];if(!mce)return;mce.lge(gge,hge);}function path_scale(utc,hcd,icd){var mce=nce.Paths[utc];if(!mce)return;mce.mge(hcd,icd);}function path_rotate(utc,
wgd){var mce=nce.Paths[utc];if(!mce)return;mce.nge(wgd);}function path_reverse(utc){var mce=nce.Paths[utc];if(!mce)return;mce.wce();}function path_flip(utc){var mce=nce.Paths[utc];if(!mce)return;mce.oge();}function path_mirror(utc){var mce=nce.Paths[utc];if(!mce)return;mce.pge();}function path_change_point(utc,kid,qge,rge,czc){var mce=nce.Paths[utc];if(!mce)return;mce.sge(kid,qge,rge,czc);}function path_delete(kid){var mce=nce.Paths[kid];if(!mce)return;nce.zxc(mce);}function path_append(kid,ggd){var vwc=nce.Paths[kid];
if(!vwc)return;var wwc=nce.Paths[ggd];if(!wwc)return;vwc.tge(wwc);}function path_add_point(kid,vtc,wtc,czc){var mce=nce.Paths[kid];if(!mce)return 0;mce.vce(vtc,wtc,czc);}function path_insert_point(kid,bwd,vtc,wtc,czc){var mce=nce.Paths[kid];if(!mce)return 0;mce.uge(bwd,vtc,wtc,czc);}function path_delete_point(kid,bwd){var mce=nce.Paths[kid];if(!mce)return 0;mce.vge(bwd);}function path_clear_points(kid){var mce=nce.Paths[kid];if(!mce)return 0;mce.oyb();}var wge=new xge();var yge=new xge();var zge=new xge();function physics_world_create(ahe,
bhe,che,dhe,ehe){var physicsWorld=new fhe(ahe,bhe,che,dhe,ehe,wzc.ghe());wzc.hhe=physicsWorld;}function physics_world_draw_debug(ihe){wzc.hhe.jhe(ihe);}function physics_world_gravity(khe,lhe){wzc.hhe.obc(khe,lhe);}function physics_world_update_speed(czc){wzc.hhe.mhe(czc);}function physics_world_update_iterations(nhe){wzc.hhe.ohe(nhe);}function physics_fixture_create(){var phe=wge.xnb(new qhe(phe));return phe;}function physics_fixture_set_density(rhe,she){var qob=wge.mvc(rhe);qob.mxb(she);}function physics_fixture_set_restitution(rhe,
the){var qob=wge.mvc(rhe);qob.txb(the);}function physics_fixture_set_friction(rhe,gzc){var qob=wge.mvc(rhe);qob.qxb(the);}function physics_fixture_set_collision_group(rhe,uhe){var qob=wge.mvc(rhe);qob.vhe(uhe);}function physics_fixture_set_sensor(rhe,whe){var qob=wge.mvc(rhe);qob.gxb((whe>0.5)?true:false);}function physics_fixture_set_linear_damping(rhe,xhe){var qob=wge.mvc(rhe);qob.qsb(xhe);}function physics_fixture_set_angular_damping(rhe,xhe){var qob=wge.mvc(rhe);qob.ssb(xhe);}function physics_fixture_set_circle_shape(rhe,
yhe){var qob=wge.mvc(rhe);qob.zhe(yhe*wzc.hhe.aie);}function physics_fixture_set_box_shape(rhe,bie,cie){var qob=wge.mvc(rhe);var scale=wzc.hhe.aie;qob.die(bie*scale,cie*scale);}function physics_fixture_set_polygon_shape(rhe){var qob=wge.mvc(rhe);qob.eie();}function physics_fixture_add_point(rhe,fie,gie){var qob=wge.mvc(rhe);var scale=wzc.hhe.aie;qob.hie(fie*scale,gie*scale);}function physics_fixture_bind(rhe,utc){var ewd=dbd.mvc(utc);var qob=wge.mvc(rhe);wzc.hhe.mrb(qob,ewd);}function physics_fixture_delete(rhe){
wge.jvc(rhe);}function physics_joint_distance_create(iie,jie,kie,lie,mie,nie,oie){var pie=dbd.mvc(iie);var qie=dbd.mvc(jie);var scale=wzc.hhe.aie;var aub=wzc.hhe.rie(pie.sie,qie.sie,kie*scale,lie*scale,mie*scale,nie*scale,(oie>0.5)?true:false);var tie=zge.xnb(aub);return tie;}function physics_joint_revolute_create(iie,jie,uie,vie,wie,xie,yie,zie,aje,bje,oie){var pie=dbd.mvc(iie);var qie=dbd.mvc(jie);var scale=wzc.hhe.aie;var aub=wzc.hhe.cje(pie.sie,qie.sie,uie*scale,vie*scale,(wie*Math.PI)/180.0,(xie*Math.PI)/180.0,
(yie>0.5)?true:false,zie,aje,(bje>0.5)?true:false,(oie>0.5)?true:false);var tie=zge.xnb(aub);return tie;}function physics_joint_prismatic_create(iie,jie,uie,vie,dje,eje,fje,gje,yie,hje,aje,bje,oie){var pie=dbd.mvc(iie);var qie=dbd.mvc(jie);var scale=wzc.hhe.aie;var aub=wzc.hhe.ije(pie.sie,qie.sie,uie*scale,vie*scale,dje*scale,eje*scale,fje*scale,gje*scale,(yie>0.5)?true:false,hje,aje,(bje>0.5)?true:false,(oie>0.5)?true:false);var tie=zge.xnb(aub);return tie;}function physics_joint_pulley_create(iie,jie,kie,
lie,mie,nie,jje,kje,lje,mje,nje,oje,pje,oie){var pie=dbd.mvc(iie);var qie=dbd.mvc(jie);var scale=wzc.hhe.aie;var aub=wzc.hhe.qje(pie.sie,qie.sie,kie*scale,lie*scale,mie*scale,nie*scale,jje*scale,kje*scale,lje*scale,mje*scale,nje,oje*scale,pje*scale,(oie>0.5)?true:false);var tie=zge.xnb(aub);return tie;}function physics_joint_gear_create(iie,jie,rje,sje,nje){var pie=dbd.mvc(iie);var qie=dbd.mvc(jie);var tje=zge.mvc(rje);var uje=zge.mvc(sje);var aub=wzc.hhe.vje(pie.sie,qie.sie,tje,uje,nje);var tie=zge.xnb(aub);
return tie;}function physics_joint_enable_motor(wje,xje){var yje=zge.mvc(wje);yje.hoc(xje);}function physics_joint_get_value(wje,zje){var yje=zge.mvc(wje);return yje.ake(zje);}function physics_joint_set_value(wje,zje,obd){var yje=zge.mvc(wje);return yje.bke(zje,obd);}function physics_joint_delete(cke){wzc.hhe.rac(zge.mvc(cke));zge.jvc(cke);}function physics_apply_force(wjd,bwc,cwc,dke,eke){var scale=wzc.hhe.aie;var fke=bwc*scale;var gke=cwc*scale;wjd.sie.wqb(fke,gke,dke,eke);}function physics_apply_impulse(wjd,
bwc,cwc,hke,ike){var scale=wzc.hhe.aie;var fke=bwc*scale;var gke=cwc*scale;wjd.sie.frb(fke,gke,hke,ike);}function physics_apply_local_force(wjd,jke,kke,lke,mke){var scale=wzc.hhe.aie;var nke=jke*scale;var oke=kke*scale;wjd.sie.pke(nke,oke,lke,mke);}function physics_apply_local_impulse(wjd,jke,kke,qke,rke){var scale=wzc.hhe.aie;var nke=jke*scale;var oke=kke*scale;wjd.sie.ske(nke,oke,qke,rke);}function physics_apply_torque(wjd,tke){wjd.sie.drb(tke);}function physics_mass_properties(wjd,uke,vke,wke,xke){var scale=wzc.hhe.aie;
wjd.sie.yke(uke,vke*scale,wke*scale,xke);}function physics_create_world(ahe,bhe,che,dhe,ehe){physics_world_create(ahe,bhe,che,dhe,ehe);}function physics_create_fixture(){return physics_fixture_create();}function physics_create_distance_joint(iie,jie,kie,lie,mie,nie,oie){return physics_joint_distance_create(iie,jie,kie,lie,mie,nie,oie);}function physics_create_revolute_joint(iie,jie,uie,vie,wie,xie,yie,zie,aje,bje,oie){return physics_joint_revolute_create(iie,jie,uie,vie,wie,xie,yie,zie,aje,bje,oie);}function physics_create_prismatic_joint(iie,
jie,uie,vie,dje,eje,fje,gje,yie,hje,aje,bje,oie){return physics_joint_prismatic_create(iie,jie,uie,vie,dje,eje,fje,gje,yie,hje,aje,bje,oie);}function physics_create_pulley_joint(iie,jie,kie,lie,mie,nie,jje,kje,lje,mje,nje,oje,pje,oie){return physics_joint_pulley_create(iie,jie,kie,lie,mie,nie,jje,kje,lje,mje,nje,oje,pje,oie);}function physics_create_gear_joint(iie,jie,rje,sje,nje){return physics_joint_gear_create(iie,jie,rje,sje,nje);}function physics_delete_fixture(rhe){physics_fixture_delete(rhe);}function physics_delete_joint(cke){
physics_joint_delete(cke);}function physics_bind_fixture(wjd,rhe){physics_fixture_bind(rhe,wjd.id);}function physics_render_debug(ihe){physics_world_draw_debug(ihe);}function physics_render_debug_instance(wjd){if((wjd.sie!=null)&&(wjd.sie!=undefined)){wjd.sie.jhe(1.0/wzc.hhe.aie);}}function physics_gravity(khe,lhe){physics_world_gravity(khe,lhe);}function physics_update_speed(czc){physics_world_update_speed(czc);}function physics_update_iterations(nhe){physics_world_update_iterations(nhe);}function room_exists(kid){
if(zke.mvc(kid)===null)return false;return true;}function room_get_name(kid){var ale=zke.mvc(kid);if(ale===null)return "";return ale.ble;}function room_name(kid){return room_get_name(kid);}function room_set_width(kid,bvc){var ale=zke.mvc(kid);if(ale===null)return;ale.cle=bvc;ale.dle.width=bvc;}function room_set_height(kid,cvc){var ale=zke.mvc(kid);if(ale===null)return;ale.ele=cvc;ale.dle.height=cvc;}function room_set_caption(kid,fcd){var ale=zke.mvc(kid);if(ale===null)return;ale.fle=fcd;}function room_set_persistent(kid,
pvc){var ale=zke.mvc(kid);if(ale===null)return;var persistent=(pvc>=0.5)?true:false;ale.gle=persistent;ale.dle.persistent=persistent;}function room_set_code(kid,fcd){var ale=zke.mvc(kid);if(ale){ale.hle=fcd;}}function room_set_background_color(kid,eid,uyc){var ale=zke.mvc(kid);if(ale===null)return;var ile=ale.dle;ile.colour=eid;ile.showColour=uyc;}function room_set_background(kid,jle,jee,kle,mid,vtc,wtc,lle,mle,nle,ole,bjd){var ale=zke.mvc(kid);if(jee>0.5)jee=true;else jee=false;array_set_1D(global,"__background_x__",
jle,vtc);array_set_1D(global,"__background_y__",jle,wtc);array_set_1D(global,"__background_index__",jle,mid);array_set_1D(global,"__background_htiled__",jle,lle);array_set_1D(global,"__background_vtiled__",jle,mle);array_set_1D(global,"__background_alpha__",jle,bjd);array_set_1D(global,"__background_hspeed__",jle,nle);array_set_1D(global,"__background_vspeed__",jle,ole);array_set_1D(global,"__background_foreground__",jle,kle);array_set_1D(global,"__background_visible__",jle,jee);var ile=ale.dle;if(ile.backgrounds[jle]!=null){
ile.backgrounds[jle].visible=jee;ile.backgrounds[jle].foreground=kle;ile.backgrounds[jle].index=mid;ile.backgrounds[jle].x=vtc;ile.backgrounds[jle].y=wtc;ile.backgrounds[jle].htiled=lle;ile.backgrounds[jle].vtiled=mle;ile.backgrounds[jle].hspeed=nle;ile.backgrounds[jle].vspeed=ole;ile.backgrounds[jle].ndb=bjd;}}function room_set_view(kid,ple,jee,qle,rle,sle,tle,ule,vle,wle,xle,yle,zle,nle,ole,pxc){var ale=zke.mvc(kid);if(ale==null)return;var ame=ale.bme[ple];if(jee>0.5)ame.visible=true;else ame.visible=false;
ame.cme=qle;ame.dme=rle;ame.eme=sle;ame.fme=tle;ame.gme=ule;ame.hme=vle;ame.ime=wle;ame.jme=xle;ame.hborder=yle;ame.vborder=zle;ame.hspeed=nle;ame.vspeed=ole;ame.uzc=pxc;var ile=ale.dle;if(ile.views[ple]!=null){if(jee>0.5)ile.views[ple].visible=true;else ile.views[ple].visible=false;ile.views[ple].xview=qle;ile.views[ple].yview=rle;ile.views[ple].wview=sle;ile.views[ple].hview=tle;ile.views[ple].xport=ule;ile.views[ple].yport=vle;ile.views[ple].wport=wle;ile.views[ple].hport=xle;ile.views[ple].hborder=yle;
ile.views[ple].vborder=zle;ile.views[ple].hspeed=nle;ile.views[ple].vspeed=ole;ile.views[ple].pg=pxc;}}function room_set_view_enabled(kid,pvc){var ale=zke.mvc(kid);ale.enableViews=pvc;ale.dle.enableViews=pvc;}function room_add(){var ale=new kme();ale.lme();zke.xnb(ale);return ale.id;}function room_duplicate(kid){var ale=zke.mvc(kid);if(!ale){hzc("Trying to duplicate non-existent room.");return 0;}return zke.mme(kid);}function room_assign(kid,fdd){if(zke.mvc(kid)&&zke.mvc(fdd)){zke.nme(kid,fdd);return true;}
return false;}function room_instance_add(kid,vtc,wtc,pxc){var ale=zke.mvc(kid);if(ale){var instance_id=wwd++;var ome=ale.dle.pInstances.length;ale.dle.pInstances[ome]={x:vtc,y:wtc,index:pxc,id:instance_id};return instance_id;}return 0;}function room_instance_clear(kid){var ale=zke.mvc(kid);if(ale){ale.pme();}}function room_tile_add(kid,mid,wid,xid,yid,zid,vtc,wtc,oxc){var ale=zke.mvc(kid);if(ale){var qme=ale.dle.tiles.length;ale.dle.tiles[qme]={x:vtc,y:wtc,index:mid,xo:wid,yo:xid,w:yid,h:zid,depth:oxc,id:wwd++}
;}}function room_tile_add_ext(kid,mid,wid,xid,yid,zid,vtc,wtc,oxc,hcd,icd,bjd){var ale=zke.mvc(kid);if(ale){var qme=ale.dle.tiles.length;ale.dle.tiles[qme]={x:vtc,y:wtc,index:mid,xo:wid,yo:xid,w:yid,h:zid,depth:oxc,rme:hcd,sme:icd,ndb:bjd,id:wwd++};}}function room_tile_clear(kid){var ale=zke.mvc(kid);if(ale){ale.tme();}}function room_goto_next(){if((wzc.ume+1)>=zke.vme.length)return;wme=zke.xme(wzc.ume+1).id;}function room_restart(){wme=wzc.id;}function room_goto(fdd){wme=fdd;}function room_goto_previous(){
if((wzc.ume-1)<0)return;wme=zke.xme(wzc.ume-1).id;}function room_previous(aqd){var nrb=-1;for(var i=0;i<zke.yme.length;i++){if(zke.yme[i]==aqd)return nrb;nrb=zke.yme[i];}return -1;}function room_next(aqd){for(var i=0;i<(zke.yme.length-1);i++){if(zke.yme[i]==aqd){return zke.yme[i+1];}}return -1;}function game_end(){room_goto(zme);}function game_restart(){g_pBuiltIn.score=0;g_pBuiltIn.lives=0;g_pBuiltIn.health=100;room_goto(ane);}function sound_play(jwc){mad.oad(jwc);}function sound_loop(jwc){mad.nad(jwc);}function sound_stop(jwc){
mad.qgd(jwc);}function sound_stop_all(){mad.bne();}function sound_isplaying(jwc){return mad.rgd(jwc);}function sound_volume(jwc,obd){mad.cne(jwc,obd);}function sound_global_volume(obd){mad.dne(obd);}function sound_fade(jwc,obd,pad){mad.ene(zyc(jwc),obd,zyc(pad));}function sound_exists(utc){if(mad.mvc(utc)===null)return false;return true;}function sound_get_kind(fne){var gne=mad.mvc(fne);if(gne===null)return -1;return gne.kind;}function sound_get_name(utc){var gne=mad.mvc(utc);if(gne===null)return "";return gne.pName;
}function sound_name(utc){return sound_get_name(utc);}function sound_add(ahd,sgd,hne){var ine=filename_ext(ahd);var mjd;if((kjd.substring(0,7)=="http://")||(kjd.substring(0,8)=="https://")){mjd=kjd;}else {mjd=njd+kjd}jne(mjd,ahd,ine,qjd,rjd);var kne=mad.rob();var lne=mad.mvc(kne);lne.pName=ahd;lne.extension=ine;lne.origName=ahd;sjd.xnb(kne,ahd,mne,nne[ahd]);return kne;}function sound_replace(jwc,ahd,sgd,hne){sound_stop(jwc);var ine=filename_ext(ahd);var mjd;if((kjd.substring(0,7)=="http://")||(kjd.substring(0,
8)=="https://")){mjd=kjd;}else {mjd=njd+kjd}jne(mjd,ahd,ine,qjd,rjd);var lne=mad.mvc(jwc);nne[lne.pName]=undefined;lne.one=[];lne.pName=ahd;lne.extension=ine;lne.origName=ahd;sjd.xnb(jwc,ahd,mne,nne[ahd]);return jwc;}function sound_delete(jwc){mad.zxc(jwc);}function sound_background_tempo(pne){qyc("sound_background_tempo()");}var qne=0,rne=1,sne=2,tne=3;function sprite_exists(jwc){if(ibd.mvc(jwc)==null)return false;return true;}function sprite_get_width(jwc){var une=ibd.mvc(jwc);if(une==null)return 0;return une.width;
}function sprite_get_height(jwc){var une=ibd.mvc(jwc);if(une==null)return 0;return une.height;}function sprite_get_name(jwc){var une=ibd.mvc(jwc);if(une==null)return "";return une.pName;}function sprite_name(jwc){return sprite_get_name(jwc);}function sprite_get_number(jwc){var une=ibd.mvc(jwc);if(une==null)return 0;return une.upd;}function sprite_get_transparent(jwc){var une=ibd.mvc(jwc);if(une==null)return 0;return une.transparent;}function sprite_get_xoffset(jwc){var une=ibd.mvc(jwc);if(une==null)return 0;return une.xOrigin;
}function sprite_get_yoffset(jwc){var une=ibd.mvc(jwc);if(une==null)return 0;return une.yOrigin;}function sprite_get_bbox_left(jwc){var une=ibd.mvc(jwc);if(une==null)return 0;return une.pwd.left;}function sprite_get_bbox_right(jwc){var une=ibd.mvc(jwc);if(une==null)return 0;return une.pwd.qwd;}function sprite_get_bbox_top(jwc){var une=ibd.mvc(jwc);if(une==null)return 0;return une.pwd.top;}function sprite_get_bbox_bottom(jwc){var une=ibd.mvc(jwc);if(une==null)return 0;return une.pwd.bottom;}function vne(jwc){var une=ibd.mvc(jwc);
if(une==null)return false;return une.pwd.chd;}function sprite_set_offset(jwc,wne,xne){var une=ibd.mvc(jwc);if(une==null)return;une.xOrigin=wne;une.yOrigin=xne;}function sprite_set_bbox(jwc,wid,xid,yne,zne){var une=ibd.mvc(jwc);if(une===null)return;une.pwd.left=wid;une.pwd.top=xid;une.pwd.qwd=yne;une.pwd.bottom=zne;}function sprite_set_precise(jwc,aoe){var une=ibd.mvc(jwc);if(une===null)return false;une.pwd.chd=aoe;}function sprite_set_alpha_from_sprite(hxc,gvc){var vwc=ibd.mvc(hxc);if(vwc===null)return false;
if(!vwc.qz){hbc("Error: Can't set the alpha channel of normal sprite. It must 'duplicated' first");return false;}var boe=vwc.coe[0];var wwc=ibd.mvc(gvc);if(wwc===null)return false;var doe=wwc.coe[0];jjd(boe,doe);return true;}function sprite_create_from_screen(vtc,wtc,bvc,cvc,thd,uhd,eoe,foe){var goe=document.createElement(hoe);var ioe=goe.getContext('2d');joe(ioe);goe.width=jtc.width;goe.height=jtc.height;ioe.koe(jtc,0,0);goe.complete=true;var loe=new moe();var kne=ibd.noe(loe);loe.pName="screen.copy";loe.width=goe.width;
loe.height=goe.height;loe.pwd=new ooe();loe.pwd.qwd=loe.width;loe.pwd.bottom=loe.height;loe.transparent=true;loe.smooth=true;loe.preload=true;loe.poe=0;loe.chd=false;loe.xOrigin=eoe;loe.yOrigin=foe;loe.qz=true;loe.upd=1;loe.qoe=0;loe.roe=false;loe.soe=false;loe.toe=[];loe.coe=[];loe.Masks=[];var aid=new bid();loe.coe[0]=aid;aid.x=0;aid.y=0;aid.w=loe.width;aid.h=loe.height;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.tp=pid(goe);aid.cid=qid[aid.tp];
return kne;}var sprite_add_from_screen=uoe;function uoe(kid,vtc,wtc,bvc,cvc,thd,uhd){var goe=document.createElement(hoe);var ioe=goe.getContext('2d');joe(ioe);loe=ibd.mvc(kid);loe.upd++;goe.width=loe.width;goe.height=loe.height;ioe.koe(jtc,vtc,wtc,bvc,cvc,0,0,goe.width,goe.height);goe.complete=true;loe.upd++;var aid=new bid();loe.coe[loe.coe.length]=aid;aid.x=0;aid.y=0;aid.w=loe.width;aid.h=loe.height;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.tp=pid(goe);
aid.cid=qid[aid.tp];return kid;}var sprite_create_from_surface=voe;function voe(utc,vtc,wtc,bvc,cvc,thd,uhd,eoe,foe){var goe=document.createElement(hoe);var ioe=goe.getContext('2d');joe(ioe);goe.width=whd.mvc(utc).width;goe.height=whd.mvc(utc).height;ioe.koe(whd.mvc(utc),0,0);goe.complete=true;var loe=new moe();var kne=ibd.noe(loe);loe.pName="surface.copy";loe.width=goe.width;loe.height=goe.height;loe.pwd=new ooe();loe.pwd.qwd=loe.width;loe.pwd.bottom=loe.height;loe.transparent=true;loe.smooth=true;loe.preload=true;
loe.poe=0;loe.chd=false;loe.xOrigin=eoe;loe.yOrigin=foe;loe.qz=true;loe.upd=1;loe.qoe=0;loe.roe=false;loe.soe=false;loe.toe=[];loe.coe=[];loe.Masks=[];var aid=new bid();loe.coe[0]=aid;aid.x=0;aid.y=0;aid.w=loe.width;aid.h=loe.height;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.tp=pid(goe);aid.cid=qid[aid.tp];return kne;}var sprite_add_from_surface=woe;function woe(kid,utc,vtc,wtc,bvc,cvc,thd,uhd){var goe=document.createElement(hoe);var ioe=goe.getContext('2d');
joe(ioe);loe=ibd.mvc(kid);loe.upd++;goe.width=loe.width;goe.height=loe.height;ioe.koe(whd.mvc(utc),0,0,bvc,cvc,0,0,goe.width,goe.height);goe.complete=true;var aid=new bid();loe.coe[loe.coe.length]=aid;aid.x=0;aid.y=0;aid.w=loe.width;aid.h=loe.height;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.tp=pid(goe);aid.cid=qid[aid.tp];return kid;}function sprite_delete(kid){ibd.zxc(kid);}function sprite_save(kid,gad,ahd){qyc("sprite_save()");}var sprite_duplicate=xoe;
function xoe(kid){var une=ibd.mvc(kid);if(une==null)return 0;var loe=new moe();var kne=ibd.noe(loe);loe.pName=une.pName+".copy";loe.width=une.width;loe.height=une.height;loe.pwd.gu(une.pwd);loe.transparent=une.transparent;loe.smooth=une.smooth;loe.preload=une.preload;loe.poe=une.poe;loe.chd=une.chd;loe.xOrigin=une.xOrigin;loe.yOrigin=une.yOrigin;loe.qz=true;loe.upd=une.upd;loe.qoe=une.qoe;loe.roe=une.roe;loe.soe=une.soe;loe.toe=[];loe.coe=[];loe.Masks=[];for(var i=0;i<une.upd;i++){var aid=new bid();loe.coe[i]=aid;
aid.qz(une.coe[i]);var nid=oid(une.coe[i]);aid.tp=pid(nid);aid.x=0;aid.y=0;aid.cid=qid[aid.tp];}return kne;}function sprite_add(kjd,yoe,thd,uhd,eoe,foe){if(yoe<=0)return -1;var loe=new moe();var kne=ibd.noe(loe);var mjd;if((kjd.substring(0,7)=="http://")||(kjd.substring(0,8)=="https://")){mjd=kjd;}else {mjd=njd+kjd;}var ojd=pjd(mjd);qid[ojd].onload=qjd;qid[ojd].onerror=rjd;sjd.xnb(kne,kjd,zoe,qid[ojd]);loe.pName=kjd;loe.width=-1;loe.height=-1;loe.pwd=new ooe();loe.pwd.qwd=0;loe.pwd.bottom=0;loe.transparent=thd;
loe.smooth=uhd;loe.preload=true;loe.poe=0;loe.chd=false;loe.xOrigin=eoe;loe.yOrigin=foe;loe.qz=false;loe.upd=yoe;loe.qoe=0;loe.roe=false;loe.soe=false;loe.toe=[];loe.coe=[];loe.Masks=[];for(var i=0;i<yoe;i++){var aid=new bid();loe.coe[i]=aid;aid.x=0;aid.y=0;aid.w=0;aid.h=0;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=0;aid.CropHeight=0;aid.ow=aid.w;aid.oh=aid.h;aid.tp=ojd;aid.cid=qid[aid.tp];}return kne;}function sprite_replace(kid,kjd,yoe,thd,uhd,eoe,foe){var loe=ibd.mvc(kid);var mjd;if((kjd.substring(0,
7)=="http://")||(kjd.substring(0,8)=="https://")){mjd=kjd;}else {mjd=njd+kjd;}var ojd=pjd(mjd);qid[ojd].onload=qjd;qid[ojd].onerror=rjd;sjd.xnb(kid,kjd,zoe,qid[ojd]);loe.width=0;loe.height=0;loe.pwd=new ooe();loe.pwd.qwd=0;loe.pwd.bottom=0;loe.transparent=thd;loe.smooth=uhd;loe.preload=true;loe.poe=0;loe.chd=false;loe.xOrigin=eoe;loe.yOrigin=foe;loe.qz=false;loe.upd=yoe;loe.qoe=0;loe.roe=false;loe.soe=false;loe.toe=[];loe.coe=[];loe.Masks=[];for(var i=0;i<yoe;i++){var aid=new bid();loe.coe[i]=aid;aid.x=0;
aid.y=0;aid.w=0;aid.h=0;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=0;aid.CropHeight=0;aid.ow=aid.w;aid.oh=aid.h;aid.tp=ojd;aid.cid=qid[aid.tp];}return kid;}function sprite_merge(hxc,gvc){var vwc=ibd.mvc(hxc);var wwc=ibd.mvc(gvc);var w=vwc.width;var h=vwc.height;var ape=ybc;for(var i=0;i<wwc.upd;i++){var goe=document.createElement(hoe);var ioe=goe.getContext('2d');joe(ioe);goe.width=w;goe.height=h;ybc=ioe;uid(wwc.coe[i],0,0,w,h,0xffffff,1.0);goe.complete=true;var aid=new bid();vwc.coe[vwc.coe.length]=aid;aid.x=0;
aid.y=0;aid.w=w;aid.h=h;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=0;aid.CropHeight=0;aid.ow=aid.w;aid.oh=aid.h;aid.tp=pid(goe);aid.cid=qid[aid.tp];vwc.upd++;}ybc=ape;return hxc;}function sprite_assign(mee,nee){var vwc=ibd.mvc(mee);var wwc=ibd.mvc(nee);vwc.width=wwc.width;vwc.height=wwc.height;vwc.pwd=new ooe();vwc.pwd.gu(wwc);vwc.transparent=wwc.transparent;vwc.smooth=wwc.smooth;vwc.preload=wwc.preload;vwc.poe=wwc.poe;vwc.chd=wwc.chd;vwc.xOrigin=wwc.xOrigin;vwc.yOrigin=wwc.yOrigin;vwc.qz=true;vwc.upd=wwc.upd;
vwc.qoe=wwc.qoe;vwc.roe=wwc.roe;vwc.soe=wwc.soe;vwc.toe=wwc.toe.slice(0);vwc.coe=[];vwc.Masks=wwc.Masks.slice();var w=vwc.width;var h=vwc.height;var ape=ybc;for(var i=0;i<wwc.upd;i++){var goe=document.createElement(hoe);var ioe=goe.getContext('2d');joe(ioe);goe.width=w;goe.height=h;ybc=ioe;uid(wwc.coe[i],0,0,w,h,0xffffff,1.0);goe.complete=true;var aid=new bid();vwc.coe[vwc.coe.length]=aid;aid.x=0;aid.y=0;aid.w=w;aid.h=h;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=0;aid.CropHeight=0;aid.ow=aid.w;aid.oh=aid.h;
aid.tp=pid(goe);aid.cid=qid[aid.tp];}ybc=ape;return mee;}function sprite_collision_mask(kid,bpe,cpe,dpe,epe,fpe,gpe,sgd,hpe){var une=ibd.mvc(kid);if(une===null)return false;if(true!=une.chd)return;une.toe=[];une.soe=bpe;une.pwd=new ooe();if(une.upd==0){return;}if(cpe==0){une.pwd.left=0;une.pwd.qwd=une.width;une.pwd.top=0;une.pwd.bottom=une.height;}else if(cpe==1){une.pwd.left=0;une.pwd.qwd=une.width;une.pwd.top=0;une.pwd.bottom=une.height;}else {une.pwd.left=dpe;une.pwd.qwd=epe;une.pwd.top=fpe;une.pwd.bottom=gpe;
}if(sgd==1){}var coe=une.coe;une.toe=[];if(une.soe){for(var i=0;i<une.upd;i++){une.toe[i]=ipe(null,une.coe[i],cpe,une.pwd,sgd,hpe);}}else {une.toe[0]=ipe(une.toe[0],une.coe[0],cpe,une.pwd,sgd,hpe);for(var i=1;i<une.upd;i++){une.toe[0]=ipe(une.toe[0],une.coe[i],cpe,une.pwd,sgd,hpe);}}}function ipe(jpe,kpe,cpe,lpe,sgd,hpe){var w=kpe.ow;var h=kpe.oh;var mpe=[];var npe=h*w;for(sjb=0;sjb<npe;sjb++)mpe[sjb]=false;if(sgd==qne){var ope=ppe(kpe);var index=0;for(var i=0;i<ope.length;i+=4){if(ope[i+3]>=hpe)mpe[index]=true;
else mpe[index]=false;index++;}}else {switch(sgd){case rne:{for(var y=lpe.top;y<=lpe.bottom;y++){for(var x=lpe.left;x<=lpe.qwd;x++){mpe[x+(y*w)]=true;}}break;}case sne:{var qpe=(lpe.left+lpe.qwd)/2;var ljc=qpe-lpe.left+0.5;var rpe=(lpe.top+lpe.bottom)/2;var mjc=rpe-lpe.top+0.5;for(var y=lpe.top;y<=lpe.bottom;y++){for(var x=lpe.left;x<=lpe.qwd;x++){if((ljc>0)&&(mjc>0)){mpe[x+(y*w)]=sqr((x-qpe)/ljc)+sqr((y-rpe)/mjc)<1;}}}break;}case tne:{var qpe=(lpe.left+lpe.qwd)/2;var ljc=qpe-lpe.left+0.5;var rpe=(lpe.top+lpe.bottom)/2;
var mjc=rpe-lpe.top+0.5;for(var y=lpe.top;y<=lpe.bottom;y++){for(var x=lpe.left;x<=lpe.qwd;x++){if((ljc>0)&&(mjc>0)){mpe[x+(y*w)]=Math.abs((x-qpe)/ljc)+Math.abs((y-rpe)/mjc)<1;}}}break;}}}if(jpe!=null){for(var i=0;i<mpe.length;i++){if(jpe[i])mpe[i]=true;}}return mpe;}function sprite_set_cache_size(kid,cae){var une=ibd.mvc(kid);if(!une){hbc("Trying to adjust the cache on a non-existant sprite ("+string(kid)+")");return false;}var coe=une.coe;for(var i=0;i<une.upd;i++){if(coe[i].spe>cae){coe[i].pu=[];coe[i].ay=0;
}coe[i].spe=cae;}}function sprite_set_cache_size_ext(kid,jwc,cae){var une=ibd.mvc(kid);if(!une){hbc("Trying to adjust the cache on a non-existant sprite ("+string(kid)+")");return false;}if(jwc<0||jwc>une.upd){hbc("Trying to adjust the cache on a non-existant sprite sub image ("+string(kid)+", "+string(jwc)+")");return;}var aid=une.coe[jwc];if(aid.spe>cae){aid.pu=[];aid.ay=0;}aid.spe=cae;}function chr(pvc){return String.fromCharCode(pvc);}function ord(fcd){if(!fcd||fcd=="")return 0;return fcd.charCodeAt(0);
}function real(fcd){if(fcd==undefined){return 0;}else if(typeof(fcd)=="boolean"){if(fcd)return 1;else return 0;}else if(typeof(fcd)=="number"){return fcd;}return parseFloat(fcd);}function string(pxc){if(pxc==undefined){return "undefined";}if(typeof(pxc)=="number"){if((~~pxc)!=pxc){return pxc.toFixed(2).toString();}else {return pxc.toString();}}else if(typeof(pxc)=="boolean"){if(pxc)return "1";else return "0";}else {return pxc.toString();}}function string_format(pvc,tpe,upe){if((pvc==undefined)||(typeof(pvc)!="number")){
return "undefined";}var vpe=pvc.toFixed(upe).toString().split(".");var xad;for(var i=0;i<vpe.length;i++){switch(i){case 0:while(vpe[i].length<tpe){vpe[i]=" "+vpe[i];}xad=vpe[i];break;case 1:while(vpe[i].length<upe){vpe[i]=vpe[i]+"0";}xad=xad+"."+vpe[i];break;}}return xad;}function string_length(fcd){if(!fcd){return 0;}return fcd.length;}function string_pos(wpe,fcd){return fcd.indexOf(wpe)+1;}function string_copy(fcd,jwc,xpe){return fcd.substring(jwc-1,jwc+xpe-1);}function string_char_at(fcd,jwc){return fcd.charAt(jwc-1);
}function string_delete(fcd,jwc,xpe){return(fcd.substring(0,jwc-1)+fcd.substring(jwc-1+xpe,fcd.length));}function string_insert(wpe,fcd,jwc){return(fcd.substring(0,jwc-1)+wpe+fcd.substring(jwc-1,fcd.length));}function string_replace(fcd,wpe,ype){return fcd.replace(wpe,ype);}function string_replace_all(fcd,wpe,ype){if(!fcd)return "";var vm="";var hfb=wpe.length;var i=0;while(i<fcd.length){if(fcd.substring(i,i+hfb)==wpe){vm+=ype;i+=hfb;}else {vm+=fcd[i];i++;}}return vm;}function string_count(wpe,fcd){wpe=wpe.replace(chr(13),
"#");var ay=0;if(wpe.length>0){var index=0;while(index!=-1){index=fcd.indexOf(wpe,index);if(index>-1){ay+=1;index+=wpe.length;}}}return ay;}function string_lower(fcd){return fcd.toLowerCase();}function string_upper(fcd){return fcd.toUpperCase();}function string_repeat(fcd,xpe){var vm="";for(var i=0;i<xpe;i++){vm=vm+fcd;}return vm;}function string_letters(fcd){var vm="";for(var i=0;i<fcd.length;i++){var c=fcd[i];if((c>='A'&&c<='Z')||(c>='a'&&c<='z')){vm=vm+c;}}return vm;}function string_digits(fcd){var vm="";for(var i=0;
i<fcd.length;i++){var c=fcd[i];if(c>='0'&&c<='9'){vm=vm+c;}}return vm;}function string_lettersdigits(fcd){var vm="";for(var i=0;i<fcd.length;i++){var c=fcd[i];if((c>='A'&&c<='Z')||(c>='a'&&c<='z')||(c>='0'&&c<='9')){vm=vm+c;}}return vm;}surface_create=zpe;function zpe(bvc,cvc){var gid=document.createElement(hoe);gid.evc=gid.width=bvc;gid.fvc=gid.height=cvc;gid.complete=true;gid.aqe=false;gid.name="";gid.ybc=gid.getContext('2d');joe(gid.ybc);var aid=new bid();gid.bqe=aid;aid.x=0;aid.y=0;aid.w=bvc;aid.h=cvc;
aid.XOffset=0;aid.YOffset=0;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.tp=whd.xnb(gid);aid.cid=gid;aid.pu=[];aid.ay=0;aid.spe=4;aid.cqe=0;aid.ujd=null;aid.goe=gid;return aid.tp;}function surface_create_ext(god,bvc,cvc){var gid=document.getElementById(god);if(!gid){omd("Can not find pre-created canvas element: "+god);return surface_create(bvc,cvc);}gid.name=god;gid.evc=gid.width=bvc;gid.fvc=gid.height=cvc;gid.complete=true;gid.aqe=true;gid.ybc=gid.getContext('2d');joe(gid.ybc);
gid.onmousemove=dqe;gid.onmousedown=eqe;gid.onmouseup=fqe;var aid=new bid();gid.bqe=aid;aid.x=0;aid.y=0;aid.w=bvc;aid.h=cvc;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.tp=whd.xnb(gid);aid.cid=gid;aid.pu=[];aid.ay=0;aid.spe=4;aid.cqe=0;aid.ujd=null;aid.goe=gid;return aid.tp;}var surface_free=gqe;function gqe(utc){whd.jvc(utc);}function surface_exists(utc){if(whd.mvc(utc)!=null)return true;else return false;}function surface_get_width(utc){var gid=whd.mvc(utc);
if(gid!=null){return gid.evc;}return 0;}function surface_get_height(utc){var gid=whd.mvc(utc);if(gid!=null){return gid.fvc;}return 0;}function surface_get_texture(utc){djd("surface_get_texture()");return -1;}function hqe(utc){var gid=whd.mvc(utc);if(gid!=null){ybc=gid.ybc;iqe=false;}}var surface_set_target=jqe;function jqe(utc){var gid=whd.mvc(utc);if(gid!=null){kqe.left=lqe.left;kqe.top=lqe.top;kqe.qwd=lqe.qwd;kqe.bottom=lqe.bottom;lqe.left=0;lqe.top=0;lqe.qwd=gid.evc;lqe.bottom=gid.fvc;mqe.gu(nqe);nqe.cme=0;
nqe.dme=0;nqe.eme=gid.evc;nqe.fme=gid.fvc;nqe.gme=0;nqe.hme=0;nqe.ime=gid.evc;nqe.jme=gid.fvc;nqe.oqe=0;nqe.pqe=0;nqe.qqe=gid.evc;nqe.rqe=gid.fvc;nqe.sqe=nqe.oqe+nqe.qqe;nqe.tqe=nqe.pqe+nqe.rqe;ybc=gid.ybc;iqe=true;}}var surface_reset_target=uqe;function uqe(){ybc=vqe;if(iqe){lqe=kqe;nqe.gu(mqe);}}function ptd(wqe,vtc,wtc){var data=null;var xhd=wqe.getContext('2d');try{data=xhd.xqe(0,0,wqe.width,wqe.height);}catch(wnd){return 0xff000000;}yqe=data.data;var index=((wqe.width*wtc)+vtc)*4;var fnc=yqe[index]&0xff;
var gnc=yqe[index+1]&0xff;var zqe=yqe[index+2]&0xff;var are=yqe[index+3]&0xff;return(fnc|(gnc<<8)|(zqe<<16)|(are<<24));}var surface_getpixel=bre;function bre(utc,vtc,wtc){var gid=whd.mvc(utc);if(gid!=null){return ptd(gid,vtc,wtc)&0xffffff;}return 0x00000000;}function cre(wqe,ahd){var img=jtc.toDataURL();}function surface_save(utc,ahd){djd("surface_save()");}function surface_save_part(utc,ahd,vtc,wtc,bvc,cvc){djd("surface_save_part()");}var draw_surface=dre;function dre(utc,vtc,wtc){var gid=whd.mvc(utc);if(!gid)return;
vtc=~~vtc;wtc=~~wtc;ybc.koe(gid,vtc,wtc);}function draw_surface_stretched(utc,vtc,wtc,bvc,cvc){var gid=whd.mvc(utc);if(!gid)return;uid(gid.bqe,vtc,wtc,bvc,cvc,0xffffff,1.0);}function draw_surface_tiled(utc,vtc,wtc){var gid=whd.mvc(utc);if(gid!=null){vid(gid.bqe,vtc,wtc,true,true,0xffffff,1);}}function draw_surface_part(utc,wid,xid,yid,zid,vtc,wtc){var gid=whd.mvc(utc);if(!gid)return;ajd(gid.bqe,wid,xid,yid,zid,vtc,wtc,1,1,0xffffff,1.0);}function draw_surface_ext(utc,vtc,wtc,hcd,icd,jcd,ktc,bjd){var gid=whd.mvc(utc);
if(!gid)return;var c=iid(ktc);ere(gid.bqe,0,0,vtc,wtc,hcd,icd,(jcd*0.0174532925),c,c,c,c,bjd);}function draw_surface_stretched_ext(utc,vtc,wtc,bvc,cvc,ktc,bjd){var gid=whd.mvc(utc);if(!gid)return;var c=iid(ktc);uid(gid.bqe,vtc,wtc,bvc,cvc,c,c,c,c,bjd);}var draw_surface_tiled_ext=fre;function fre(utc,vtc,wtc,hcd,icd,ktc,bjd){qyc("draw_surface_tiled_ext()");}function draw_surface_part_ext(utc,wid,xid,yid,zid,vtc,wtc,hcd,icd,ktc,bjd){var gid=whd.mvc(utc);if(gid!=null){var aid=new bid();aid.x=wid;aid.y=xid;aid.w=yid;
aid.h=zid;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.tp=utc;aid.pu=[];aid.ay=0;aid.spe=4;aid.cqe=0;aid.ujd=null;if(!gre){aid.goe=gid;aid.cid=gid;}else {aid.goe=gid.cid;aid.cid=gid.cid;}var c=iid(ktc);ere(aid,0,0,vtc,wtc,hcd,icd,0.0,c,c,c,c,bjd);}}function draw_surface_general(utc,wid,xid,yid,zid,vtc,wtc,hcd,icd,jcd,ejd,fjd,gjd,hjd,bjd){var gid=whd.mvc(utc);if(gid!=null){var aid=new bid();aid.x=wid;aid.y=xid;aid.w=yid;aid.h=zid;aid.XOffset=0;aid.YOffset=0;
aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.tp=utc;aid.pu=[];aid.ay=0;aid.spe=4;aid.cqe=0;aid.ujd=null;ejd=iid(ejd);fjd=iid(fjd);gjd=iid(gjd);hjd=iid(hjd);if(!gre){aid.goe=gid;aid.cid=gid;ere(aid,0,0,vtc,wtc,hcd,icd,(jcd*0.0174532925),ejd,fjd,gjd,hjd,bjd);}else {aid.goe=gid.cid;aid.cid=gid.cid;ere(aid,0,0,vtc,wtc,hcd,icd,(jcd*0.0174532925),ejd,fjd,gjd,hjd,bjd);}}}function surface_copy(hre,vtc,wtc,kvc){var vwc=whd.mvc(hre);var wwc=whd.mvc(kvc);if(vwc!=null&&wwc!=null){var xhd=vwc.getContext('2d');
xhd.save();xhd.globalCompositeOperation='copy';xhd.drawImage(wwc,vtc,wtc);xhd.restore();}}function surface_copy_part(hre,vtc,wtc,kvc,ire,jre,kre,lre){var vwc=whd.mvc(hre);var wwc=whd.mvc(kvc);if(vwc!=null&&wwc!=null){var jsd=[];var xhd=vwc.getContext('2d');xhd.save();jsd[0]=1;jsd[1]=0;jsd[2]=0;jsd[3]=1;jsd[4]=0;jsd[5]=0;xhd.setTransform(jsd[0],jsd[1],jsd[2],jsd[3],jsd[4],jsd[5]);xhd.beginPath();xhd.rect(vtc,wtc,kre,lre);xhd.clip();xhd.globalCompositeOperation='copy';xhd.drawImage(wwc,ire,jre,kre,lre,
vtc,wtc,kre,lre);xhd.restore();}}function draw_self(wyc){var index;index=wyc.sprite_index;ibd.mvc(index).fcc(Math.floor(wyc.image_index),wyc.x,wyc.y,wyc.image_xscale,wyc.image_yscale,wyc.image_angle,wyc.image_blend,wyc.image_alpha);}function draw_sprite_ext(wjd,mre,nre,vtc,wtc,hcd,icd,jcd,iad,bjd){if(nre<0)nre=~~wjd.image_index;var une=ibd.mvc(mre);if(une!=null){bjd=min(1.0,bjd);une.fcc(nre,vtc,wtc,hcd,icd,jcd,iid(iad),bjd);}}function draw_sprite(wjd,mre,nre,vtc,wtc){if(nre<0)nre=~~wjd.image_index;var une=ibd.mvc(mre);
if(une!=null){une.ore(nre,vtc,wtc,1);}}function draw_sprite_pos(wjd,mre,nre,qvc,rvc,svc,tvc,rtd,std,pre,qre,bjd){if(nre<0)nre=~~wjd.image_index;var une=ibd.mvc(mre);if(une!=null){bjd=min(1.0,bjd);une.rre(nre,qvc,rvc,svc,tvc,rtd,std,pre,qre,bjd);}}function draw_sprite_stretched(wjd,mre,nre,vtc,wtc,bvc,cvc){if(nre<0)nre=~~wjd.image_index;var une=ibd.mvc(mre);if(une!=null){if(une.upd<=0)return;nre=(~~nre)%une.upd;if(nre<0)nre=nre+une.upd;uid(une.coe[nre],vtc,wtc,bvc,cvc,0xffffff,1.0);}}function draw_sprite_stretched_ext(wjd,
mre,nre,vtc,wtc,bvc,cvc,eid,bjd){if(nre<0)nre=~~wjd.image_index;var une=ibd.mvc(mre);if(une!=null){if(une.upd<=0)return;nre=(~~nre)%une.upd;if(nre<0)nre=nre+une.upd;uid(une.coe[nre],vtc,wtc,bvc,cvc,iid(eid),bjd);}}function texture_set_interpolation(sre){}function draw_sprite_part(wjd,mre,nre,wid,xid,yid,zid,vtc,wtc){if(nre<0)nre=~~wjd.nre;var une=ibd.mvc(mre);if(une!=null){if(une.upd<=0)return;nre=(~~nre)%une.upd;if(nre<0)nre=nre+une.upd;ajd(une.coe[nre],wid,xid,yid,zid,vtc,wtc,1,1,0xffffff,1);}}function draw_sprite_part_ext(wjd,
mre,nre,wid,xid,yid,zid,vtc,wtc,hcd,icd,ktc,bjd){if(nre<0)nre=~~wjd.nre;var une=ibd.mvc(mre);if(une!=null){if(une.upd<=0)return;nre=(~~nre)%une.upd;if(nre<0)nre=nre+une.upd;ktc=iid(ktc);ajd(une.coe[nre],wid,xid,yid,zid,vtc,wtc,hcd,icd,ktc,bjd);}}function draw_sprite_tiled(wjd,mre,nre,vtc,wtc){if(nre<0)nre=~~wjd.nre;var une=ibd.mvc(mre);if(une!=null){if(une.upd<=0)return;nre=(~~nre)%une.upd;if(nre<0)nre=nre+une.upd;vid(une.coe[nre],vtc,wtc,true,true);}}function draw_sprite_tiled_ext(wjd,mre,gad,vtc,wtc,
hcd,icd,ktc,bjd){ktc=iid(ktc);djd("draw_sprite_tiled_ext()");}function draw_sprite_general(wjd,mre,nre,wid,xid,yid,zid,vtc,wtc,hcd,icd,jcd,ejd,fjd,gjd,hjd,bjd){if(nre<0)nre=~~wjd.nre;var une=ibd.mvc(mre);if(une!=null){if(une.upd<=0)return;nre=(~~nre)%une.upd;if(nre<0)nre=nre+une.upd;ejd=iid(ejd);fjd=iid(fjd);gjd=iid(gjd);hjd=iid(hjd);ijd(une.coe[nre],wid,xid,yid,zid,vtc,wtc,hcd,icd,jcd*Math.PI/180.0,ejd,fjd,gjd,hjd,bjd);}}function tile_add(ihd,wid,xid,yid,zid,vtc,wtc,oxc){var tre=new ure();tre.x=vtc;
tre.y=wtc;tre.depth=oxc;tre.xo=wid;tre.yo=xid;tre.w=yid;tre.h=zid;tre.index=ihd;wzc.vre(tre);return tre.id;}function tile_delete(utc){wzc.wre(utc);}function tile_exists(utc){if(wzc.xre[utc]==null)return false;return true;}function tile_get_x(utc){var tre=wzc.xre[utc];if(!tre)return 0;return tre.x;}function tile_get_y(utc){var tre=wzc.xre[utc];if(!tre)return 0;return tre.y;}function tile_get_left(utc){var tre=wzc.xre[utc];if(!tre)return 0;return tre.xo;}function tile_get_top(utc){var tre=wzc.xre[utc];if(!tre)return 0;
return tre.yo;}function tile_get_width(utc){var tre=wzc.xre[utc];if(!tre)return 0;return tre.w;}function tile_get_height(utc){var tre=wzc.xre[utc];if(!tre)return 0;return tre.h;}function tile_get_depth(utc){var tre=wzc.xre[utc];if(!tre)return 0;return tre.depth;}function tile_get_visible(utc){var tre=wzc.xre[utc];if(!tre)return 0;return tre.visible;}function tile_get_xscale(utc){var tre=wzc.xre[utc];if(!tre)return 0;return tre.rme;}function tile_get_yscale(utc){var tre=wzc.xre[utc];if(!tre)return 0;return tre.sme;}function tile_get_background(utc){
var tre=wzc.xre[utc];if(!tre)return 0;return tre.index;}function tile_get_blend(utc){var tre=wzc.xre[utc];if(!tre)return 0;return tre.yre;}function tile_get_alpha(utc){var tre=wzc.xre[utc];if(!tre)return 0;return tre.ndb;}function tile_set_position(utc,vtc,wtc){var tre=wzc.xre[utc];if(!tre)return 0;tre.x=vtc;tre.y=wtc;}function tile_set_region(utc,wid,xid,yid,zid){var tre=wzc.xre[utc];if(!tre)return 0;tre.xo=wid;tre.yo=xid;tre.w=yid;tre.height=zid;}function tile_set_background(utc,ihd){var tre=wzc.xre[utc];if(!tre)return 0;
tre.index=ihd;}function tile_set_visible(utc,zre){var tre=wzc.xre[utc];if(!tre)return 0;tre.visible=zre;}function tile_set_depth(utc,oxc){var tre=this.xre[utc];if(tre){wzc.ase.zxc(tre);tre.depth=oxc;wzc.ase.xnb(tre);}}function tile_set_scale(utc,hcd,icd){var tre=this.xre[utc];if(!tre)return 0;tre.rme=hcd;tre.sme=icd;}function tile_set_blend(utc,eid){var tre=wzc.xre[utc];if(!tre)return 0;tre.yre=iid(eid);}function tile_set_alpha(utc,bjd){var tre=wzc.xre[utc];if(!tre)return 0;tre.ndb=bjd;}function tile_layer_hide(oxc){
wzc.ase.bse(oxc,false);}function tile_layer_show(oxc){wzc.ase.bse(oxc,true);}function tile_layer_delete(oxc){wzc.cse(oxc);}function tile_layer_shift(oxc,vtc,wtc){var dse=wzc.ase.mvc(oxc);if(!dse)return;var pfc=dse.yce();for(var ese in pfc){var tre=pfc[ese];if(tre){tre.x+=vtc;tre.y+=wtc;}}}function tile_layer_find(oxc,vtc,wtc){for(var index in wzc.xre){var tre=wzc.xre[index];if((oxc==tre.depth)&&(vtc>=tre.x)&&(vtc<(tre.x+(tre.w*tre.rme)))&&(wtc>=tre.y)&&(wtc<(tre.y+(tre.h*tre.sme)))){fse=tre.id;return tre.id;}}
return -1;}function tile_layer_delete_at(oxc,vtc,wtc){var tiles=[];for(var index in wzc.xre){var tre=wzc.xre[index];if((oxc==tre.depth)&&(vtc>=tre.x)&&(vtc<(tre.x+(tre.w*tre.rme)))&&(wtc>=tre.y)&&(wtc<(tre.y+(tre.h*tre.sme)))){tiles[tiles.length]=index;}}for(var i=0;i<tiles.length;i++){wzc.wre(tiles[i]);}}function tile_layer_depth(oxc,gse){var tiles=[];for(var index in wzc.xre){var tre=wzc.xre[index];if(oxc==tre.depth){tiles[tiles.length]=tre;}}for(var i=0;i<tiles.length;i++){var tre=tiles[i];wzc.ase.zxc(tre);tre.depth=gse;
wzc.ase.xnb(tre);}}function timeline_exists(kid){if(qrd.mvc(kid)!=undefined){return true;}return false;}function timeline_get_name(kid){var hse=qrd.mvc(kid);if(hse!=undefined){return hse.pName;}return "";}function timeline_name(kid){return timeline_get_name(kid);}function timeline_add(){qyc("timeline_add()");return -1;}function timeline_delete(kid){qyc("timeline_delete()");}function ise(kid){qyc("timeline_clear()");}function timeline_moment_add(kid,jse,kse){qyc("timeline_moment_add()");}function timeline_moment_clear(kid,
jse){qyc("timeline_moment_clear()");}function window_set_visible(zre){qyc("window_set_visible()");}function window_get_visible(){return true;}function window_set_fullscreen(lse){if(mse==lse)return;nse=true;if(lse)ose();}function window_get_fullscreen(){return mse;}function window_set_showborder(uyc){qyc("window_set_showborder()");}function window_get_showborder(){qyc("window_get_showborder()");return false;}function window_set_showicons(uyc){qyc("window_set_showicons()");}function window_get_showicons(){qyc("window_get_showicons()");
return false;}function window_set_stayontop(pse){qyc("window_set_stayontop()");}function window_get_stayontop(){qyc("window_get_stayontop()");return false;}function window_set_sizeable(qse){qyc("window_set_sizeable()");}function window_get_sizeable(){qyc("window_get_sizeable()");return false;}function window_set_caption(qqd){document.title=qqd;}function window_get_caption(){return document.title;}function vyc(rse){if(rse){jtc.style.cursor="";}else {jtc.style.cursor="none";}}function window_set_cursor(sse){var tse="";
switch(sse){case cr_default:tse="default";break;case cr_none:tse="__disable__";break;case cr_arrow:tse="auto";break;case cr_cross:tse="crosshair";break;case cr_beam:tse="";break;case cr_size_nesw:tse="ne-resize";break;case cr_size_ns:tse="n-resize";break;case cr_size_nwse:tse="nw-resize";break;case cr_size_we:tse="w-resize";break;case cr_uparrow:tse="";break;case cr_hourglass:tse="wait";break;case cr_drag:tse="move";break;case cr_nodrop:tse="";break;case cr_hsplit:tse="";break;case cr_vsplit:tse="";break;case cr_multidrag:tse="";
break;case cr_sqlwait:tse="";break;case cr_no:tse="";break;case cr_appstart:tse="";break;case cr_help:tse="help";break;case cr_handpoint:tse="pointer";break;case cr_size_all:tse="e-resize";break;};if(tse=="__disable__"){vyc(false);return;}else if(sse<0&&tse==""){hbc("Cursor type is not supported.");vyc(true);return;}use=sse;if(use>=0){vyc(false);}else {vyc(true);document.body.style.cursor=tse;}}function window_get_cursor(){return use;}function window_set_color(eid){vse=iid(eid);}function window_get_color(){
return iid(vse);}function window_set_region_scale(xyc,wse){qyc("window_set_region_scale()");}function window_get_region_scale(){qyc("window_get_region_scale()");}function window_set_position(vtc,wtc){var xse=document.getElementById(hoe);xse.style.position="absolute";xse.style.left=vtc+"px";xse.style.top=wtc+"px";}function window_set_size(bvc,cvc){jtc.width=bvc;jtc.height=cvc;yse=bvc;zse=cvc;esd=jtc.width;fsd=jtc.height;ate(jtc,bte);cte=bte.top;dte=bte.left;ete=bte.qwd;fte=bte.bottom;gte=esd;hte=fsd;ite=bvc;
jte=kte=1;lte=1;}function window_set_rectangle(vtc,wtc,bvc,cvc){window_set_size(bvc,cvc);window_set_position(vtc,wtc);}function window_center(){var mte=nte();var sde=ote();var w=window_get_width();var h=window_get_height();var x=(mte-w)/2;var y=(sde-h)/2;window_set_position(x,y);}function window_default(){qyc("window_default()");}function window_get_x(){return dte;}function window_get_y(){return cte;}function window_get_width(){return ete-dte;}function window_get_height(){return fte-cte;}function window_mouse_get_x(){
return huc;}function window_mouse_get_y(){return iuc;}function window_mouse_set(x,y){qyc("window_mouse_set()");}function window_view_mouse_get_x(utc){if(!wzc.pte){return g_pBuiltIn.mouse_x;}var ame=wzc.bme[utc];return g_pBuiltIn.mouse_x-ame.gme;}function window_view_mouse_get_y(utc){if(!wzc.pte){return g_pBuiltIn.mouse_y;}var ame=wzc.bme[utc];return g_pBuiltIn.mouse_y-ame.hme;}var qte;var os_win32;var rte;var ste;var os_psp;var os_ios;var os_android;var of_challenge_win;var of_challenge_lose;var of_challenge_tie;var leaderboard_type_number;
var leaderboard_type_time_mins_secs;var tte=0;var ute=aa_1241_kz();function aa_1241_kz(){return 0x87155211;}function vte(){var wte=null;if(window.XMLHttpRequest){wte=new XMLHttpRequest();}if(typeof(XMLHttpRequest)=="undefined"){wte=function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}catch(obb){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}catch(obb){}try{return new ActiveXObject("Msxml2.XMLHTTP");}catch(obb){}throw new hbc("This browser does not support XMLHttpRequest.");};}this.xte=wte;this.yte=false;
}var zte=new vte();function YoYo_EnableAlphaBlend(rse){}function YoYo_AchievementsAvailable(){return false;}function YoYo_LoginAchievements(){}function YoYo_LogoutAchievements(){}function YoYo_GetConfig(){return "YOYO_PAID";}function YoYo_GetPlatform(){return aue;}function YoYo_GetDevice(){return bue;}function cue(){return due;}function eue(){return fue;}function YoYo_OpenURL_full(hhd,gue,hue){if(gue!="_self"&&gue!="_blank"&&gue!="_parent"&&gue!="_top"){hbc("Error: invalid TARGET specified. Only '_self', '_blank', 'parent' or '_top' supported. (YoYo_OpenURL)");
return;}var iue=window.open(hhd,gue,hue);}function YoYo_OpenURL_ext(hhd,gue){YoYo_OpenURL_full(hhd,gue,"scrollbars=yes,menubar=yes,resizable=yes,toolbar=yes,location=yes,status=yes");}function YoYo_OpenURL(hhd){YoYo_OpenURL_ext(hhd,"_self");}function YoYo_PostScore(jue,yad){}function YoYo_PostAchievement(jue,kue){}function YoYo_EnableAds(x,y,w,h,lue){}function YoYo_DisableAds(){}function YoYo_LeaveRating(gcd,mue,nue,oue){}function YoYo_GetTimer(){var rbb=new Date().getTime()*1000;return rbb-qte;}function YoYo_AddVirtualKey(vtc,
wtc,bvc,cvc,pue){var que=rue();que.x=vtc;que.y=wtc;que.w=bvc;que.h=cvc;que.dt=pue;que.ydb=vtc+bvc;que.vvc=wtc+cvc;que.button=que.omb=que.hh=0;que.tvb=sue;return(que.index+1);}function YoYo_DeleteVirtualKey(utc){var index=utc-1;if((index<0)||(index>=tue.length)){hzc("Invalid index when deleting virtual key");}uue(utc-1);}function vue(){wue=[];for(var hfb=0;hfb<tue.length;++hfb){var vvd=tue[hfb];if((vvd.tvb&xue)!=0)wue[wue.length]=vvd;}}function YoYo_ShowVirtualKey(utc){utc--;if(!tue[utc])return;tue[utc].tvb|=xue;
vue();}function YoYo_HideVirtualKey(utc){utc--;if(!tue[utc])return;tue[utc].tvb&=~xue;vue();}function YoYo_GetTiltX(){return 0;}function YoYo_GetTiltY(){return 0;}function YoYo_GetTiltZ(){return 0;}function YoYo_SelectPicture(){djd("YoYo_SelectPicture()");}function YoYo_GetPictureSprite(){djd("YoYo_GetPictureSprite()");}function YoYo_OF_StartDashboard(){djd("YoYo_OF_StartDashboard()");}function YoYo_OF_AddAchievement(zyd,ikb){djd("YoYo_OF_AddAchievement()");}function YoYo_OF_AddLeaderboard(zyd,ikb,jzd){djd("YoYo_OF_AddLeaderboard()");
}function YoYo_OF_SendChallenge(zyd,ikb,jzd){djd("YoYo_OF_SendChallenge()");}function YoYo_OF_SendInvite(zyd){djd("YoYo_OF_SendInvite()");}function YoYo_OF_SendSocial(zyd,ikb,jzd){djd("YoYo_OF_SendSocial()");}function YoYo_OF_SetURL(zyd){djd("YoYo_OF_SetURL()");}function YoYo_OF_AcceptChallenge(){djd("YoYo_OF_AcceptChallenge()");return "";}function YoYo_OF_IsOnline(){djd("YoYo_OF_IsOnline()");return false;}function YoYo_OF_SendChallengeResult(zyd,ikb){djd("YoYo_OF_SendChallengeResult()");}function YoYo_IsKeypadOpen(){
return false;}function yue(hhd){var c=document.getElementById(hoe);var pg=c.parentNode;var zue=document.createElement("div");zue.setAttribute("id","fb-root");pg.insertBefore(zue,c);var ave=document.createElement("script");ave.setAttribute("src","http://connect.facebook.net/en_US/all.js#xfbml=1");pg.insertBefore(ave,zue.nextSibling);var bve=document.createElement("fb:like");bve.setAttribute("href",hhd);bve.setAttribute("send","true");bve.setAttribute("width","450");bve.setAttribute("show_faces","true");
bve.setAttribute("font","verdana");pg.insertBefore(bve,ave.nextSibling);}function cve(){qte=new Date().getTime()*1000;var rbb=0;for(var i=0;i<12;i++){rkd[i]=rbb;rbb+=qkd[i];}os_win32=0;rte=1;ste=2;os_psp=3;os_ios=4;os_android=5;of_challenge_win=0;of_challenge_lose=1;of_challenge_tie=2;leaderboard_type_number=0;leaderboard_type_time_mins_secs=1;}function dve(){var rbb=setTimeout(function(){for(var yyc in ibd.Sprites){ibd.zxc(yyc);break;}dve();},1000);}function eve(){if(!document.getElementById('b4f6074452b74d86ce6d00904fcd389c')){
var fve=document.getElementById('NM-156');if(fve){tte=fve.gve;fve.parentNode.removeChild(fve);}else {dve();}}}function hve(hhd){if(!document.getElementById('42f28d8caa0d96b967645dce4278ed50')){var ive=hhd+"?"+tte+"=2239";if(!zte.yte){zte.yte=true;var rbb=setTimeout(function(){zte.xte.open("GET",ive,true);zte.xte.onreadystatechange=function(){if(zte.xte.readyState==4){switch(zte.xte.status){case 200:{if(zte.xte.responseText!=tte){dve();}zte.yte=false;}break;default :alert("ERROR: The game has lost connection to the server. "+zte.xte.jve);
window.location.kve=window.location.kve;break;}}};zte.xte.send(null);},5000);}}}function YoYo_GetDomain(){return document.domain;}function lve(){if(window.XMLHttpRequest){return new XMLHttpRequest();}if(typeof(XMLHttpRequest)=="undefined"){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}catch(obb){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}catch(obb){}try{return new ActiveXObject("Msxml2.XMLHTTP");}catch(obb){}throw new hbc("This browser does not support XMLHttpRequest.");}return null;}function mve(){
if(typeof(g_fbOAuthToken)=="undefined"||typeof(g_fbAppId)=="undefined"||typeof(g_fbAppUrl)=="undefined"){hzc("The application is not authorised with Facebook");return false;}return true;}function nve(ove,pve){for(var qve in ove){var rve=ove[qve];if(rve instanceof Array){var sve=ds_list_create();ds_list_add(pve,sve);nve(rve,sve);}else if(typeof(rve)=="object"){var tve=ds_map_create();ds_list_add(pve,tve);uve(rve,tve);}else if(typeof(rve)=="string"){ds_list_add(pve,rve);}}}function uve(vve,wve){for(var xve in vve){
if(vve.hasOwnProperty(xve)){var rve=vve[xve];if(rve instanceof Array){var yve=ds_list_create();ds_map_add(wve,xve,yve);nve(rve,yve);}else if(typeof(rve)=="object"){var zve=ds_map_create();ds_map_add(wve,xve,zve);uve(rve,zve);}else if(typeof(rve)=="string"){ds_map_add(wve,xve,rve);}}}}function YoYo_FacebookLogin(awe){if(!mve()){return;}hzc("Facebook oauth_token: "+g_fbOAuthToken);}function YoYo_FacebookGraphRequest(bwe,cwe,dwe,wve){if(!mve()){return;}if((cwe=="GET")||(cwe=="POST")||(cwe=="DELETE")){var ive=g_fbAppHomeUrl+"interop/graph_request?path="+bwe+"&verb="+cwe+"&auth_token="+g_fbOAuthToken;
var ewe=lve();ewe.onreadystatechange=function(){if((ewe.readyState==4)&&(ewe.status==200)){hzc(ewe.responseText);if(wve>=0){var fwe=eval('('+ewe.responseText+')');uve(fwe,wve);}}};if(dwe!=-1){var xve=ds_map_find_first(dwe);while(ds_map_exists(dwe,xve)){var gwe=ds_map_find_value(dwe,xve);ive=ive+"&"+xve+"="+gwe;xve=ds_map_find_next(dwe,xve);}}ewe.open(cwe,ive,true);ewe.send();return 1;}else {hzc("Invalid http verb provided to YoYo_FacebookGraphRequest(): "+cwe);}return 0;}function YoYo_FacebookDialog(bwe,
dwe,wve){if(!mve()){return 0;}var hwe={};if(dwe!=-1){var xve=ds_map_find_first(dwe);while(ds_map_exists(dwe,xve)){var gwe=ds_map_find_value(dwe,xve);hwe[xve]=gwe;xve=ds_map_find_next(dwe,xve);}}facebookUI(bwe,hwe,function(iwe){if(iwe){if(wve>=0){var fwe=eval('('+iwe+')');uve(fwe,wve);}}});return 1;}function YoYo_FacebookLogout(){return 0;}function YoYo_MouseCheckButton(jwe,xxd){if(jwe==0){return mouse_check_button(xxd);}return 0;}function YoYo_MouseCheckButtonPressed(jwe,xxd){if(jwe==0){return mouse_check_button_pressed(xxd);
}return 0;}function YoYo_MouseCheckButtonReleased(jwe,xxd){if(jwe==0){return mouse_check_button_released(xxd);}return 0;}function YoYo_MouseX(jwe){if(jwe==0){return g_pBuiltIn.mouse_x;}return 0;}function YoYo_MouseY(jwe){if(jwe==0){return g_pBuiltIn.mouse_y;}return 0;}function qhe(rhe){this.uqb=0;this.lqb=0;this.kwe=rhe;this.lwe=new ng.nh.xj();this.po=[];};qhe.prototype.zhe=function(gkd){this.lwe.qw=new ng.kh.lh.xi();this.lwe.qw.uq=gkd;};qhe.prototype.die=function(bie,cie){this.lwe.qw=new ng.kh.lh.bj();this.lwe.qw.fhb(bie,
cie);};qhe.prototype.eie=function(){this.lwe.qw=new ng.kh.lh.bj();};qhe.prototype.hie=function(vtc,wtc){var qt=this.po.length;this.po[qt]=new ng.mh.Math.lj(vtc,wtc);};qhe.prototype.mwe=function(){if(this.po.length>2){this.lwe.qw.ahb(this.po,this.po.length);}};qhe.prototype.vhe=function(uhe){this.lwe.lxb.gub=uhe;};qhe.prototype.qxb=function(gzc){this.lwe.friction=gzc;};qhe.prototype.txb=function(the){this.lwe.uxb=the;};qhe.prototype.mxb=function(she){this.lwe.cfb=she;};qhe.prototype.gxb=function(nwe){
this.lwe.xxb=nwe;};qhe.prototype.qsb=function(xhe){this.uqb=xhe;};qhe.prototype.ssb=function(xhe){this.lqb=xhe;};var owe=0,pwe=1,qwe=2,rwe=3,swe=4,twe=5,uwe=6,vwe=7,wwe=8,xwe=9,ywe=10,zwe=11,axe=12,bxe=13,cxe=14,dxe=15,exe=16;function fxe(gxe){this.hxe=gxe;};fxe.prototype.hoc=function(xje){if((this.hxe instanceof ng.nh.rh.pl)||(this.hxe instanceof ng.nh.rh.ll)){this.hxe.wdc().brb(true);this.hxe.xdc().brb(true);this.hxe.hoc(xje);}};fxe.prototype.ake=function(zje){switch(zje){case owe:return this.hxe.ydc().x;
case pwe:return this.hxe.ydc().y;case qwe:return this.hxe.zdc().x;case rwe:return this.hxe.zdc().y;case swe:return this.hxe.wjc(1.0/wzc.hhe.ixe).x;case twe:return this.hxe.wjc(1.0/wzc.hhe.ixe).y;case uwe:return this.hxe.yjc(1.0/wzc.hhe.ixe);case vwe:{if((this.hxe instanceof ng.nh.rh.pl)||(this.hxe instanceof ng.nh.rh.ll)){return this.hxe.koc();}}break;case wwe:{if(this.hxe instanceof ng.nh.rh.pl){return this.hxe.qmc();}}break;case xwe:{if(this.hxe instanceof ng.nh.rh.pl){return this.hxe.jsc();}}break;case ywe:break;case zwe:{
if(this.hxe instanceof ng.nh.rh.ll){return this.hxe.rmc();}}break;case axe:{if(this.hxe instanceof ng.nh.rh.ll){return this.hxe.wnc();}}break;case bxe:{if(this.hxe instanceof ng.nh.rh.ll){return this.hxe.ooc();}}break;case cxe:break;case dxe:{if(this.hxe instanceof ng.nh.rh.nl){return this.hxe.uqc();}}break;case exe:{if(this.hxe instanceof ng.nh.rh.nl){return this.hxe.uqc();}}break;}return 0;};fxe.prototype.bke=function(zje,obd){switch(zje){case vwe:{if((this.hxe instanceof ng.nh.rh.pl)||(this.hxe instanceof ng.nh.rh.ll)){
this.hxe.wdc().brb(true);this.hxe.xdc().brb(true);this.hxe.ioc(obd);}}break;case ywe:{if(this.hxe instanceof ng.nh.rh.pl){this.hxe.wdc().brb(true);this.hxe.xdc().brb(true);this.hxe.hsc(obd);}}break;case cxe:{if(this.hxe instanceof ng.nh.rh.ll){this.hxe.loc(obd);}}break;}};function jxe(kxe,lxe){this.mxe=kxe;this.nxe=lxe;};jxe.prototype.frb=function(oxe,pxe,qxe,rxe){this.mxe.frb(new ng.mh.Math.lj(qxe,rxe),new ng.mh.Math.lj(oxe,pxe));};jxe.prototype.wqb=function(oxe,pxe,qxe,rxe){this.mxe.wqb(new ng.mh.Math.lj(qxe,
rxe),new ng.mh.Math.lj(oxe,pxe));};jxe.prototype.pke=function(sxe,txe,uxe,vxe){var wxe=this.mxe.hsb(new ng.mh.Math.lj(uxe,vxe));var xxe=this.mxe.fsb(new ng.mh.Math.lj(sxe,txe));this.mxe.wqb(wxe,xxe);};jxe.prototype.ske=function(sxe,txe,uxe,vxe){var wxe=this.mxe.hsb(new ng.mh.Math.lj(uxe,vxe));var xxe=this.mxe.fsb(new ng.mh.Math.lj(sxe,txe));this.mxe.frb(wxe,xxe);};jxe.prototype.drb=function(tke){this.mxe.drb(tke);};jxe.prototype.yke=function(uke,yxe,zxe,xke){var bfb=new ng.kh.lh.aj();bfb.dfb=uke;bfb.ffb=xke;
bfb.jy=new ng.mh.Math.lj(yxe,zxe);};jxe.prototype.aye=function(bye){this.mxe.wpb((bye*Math.PI)/180.0);};jxe.prototype.cye=function(xwc){var dye=this.mxe.upb().y;this.mxe.vpb(new ng.mh.Math.lj(xwc,dye));};jxe.prototype.eye=function(xwc){var fye=this.mxe.upb().x;this.mxe.vpb(new ng.mh.Math.lj(fye,xwc));};jxe.prototype.cqb=function(gye){this.mxe.cqb((gye*Math.PI)/180.0);};jxe.prototype.hye=function(iye){var jye=this.mxe.bqb();this.mxe.zpb(iye,jye.y);};jxe.prototype.kye=function(iye){var jye=this.mxe.bqb();
this.mxe.zpb(jye.x,iye);};jxe.prototype.wsb=function(lye){this.mxe.wsb(lye);};jxe.prototype.jhe=function(mye){if(this.mxe){this.nye(mye);this.oye(mye);}};jxe.prototype.nye=function(xyc){var qob=this.mxe.htb();while((qob!=null)&&(qob!=undefined)){var qw=qob.fxb();var pye=this.mxe.upb();if(qw instanceof ng.kh.lh.xi){draw_ellipse((pye.x-qw.uq)*xyc,(pye.y-qw.uq)*xyc,(pye.x+qw.uq)*xyc,(pye.y+qw.uq)*xyc,true);}else if(qw instanceof ng.kh.lh.bj){var qye=Math.sin(this.mxe.rlb());var rye=Math.cos(this.mxe.rlb());for(var fad=0;
fad<qw.no;++fad){var sye=qw.po[fad];var tye=qw.po[(fad+1)%qw.no];draw_line((pye.x+((sye.x*rye)-(sye.y*qye)))*xyc,(pye.y+((sye.x*qye)+(sye.y*rye)))*xyc,(pye.x+((tye.x*rye)-(tye.y*qye)))*xyc,(pye.y+((tye.x*qye)+(tye.y*rye)))*xyc);}}qob=qob.xob;}};jxe.prototype.oye=function(xyc){var ztb=this.mxe.jtb;while((ztb!=null)&&(ztb!=undefined)){var aub=ztb.aub;if(aub instanceof ng.nh.rh.pl){this.uye(aub,xyc);}else if(aub instanceof ng.nh.rh.ll){this.vye(aub,xyc);}else if(aub instanceof ng.nh.rh.xk){this.wye(aub,xyc);}else if(aub instanceof ng.nh.rh.nl){
this.xye(aub,xyc);}else if(aub instanceof ng.nh.rh.bl){if(aub.imc!=null){this.uye(aub.imc,xyc);}if(aub.kmc!=null){this.uye(aub.kmc,xyc);}if(aub.jmc!=null){this.vye(aub.jmc,xyc);}if(aub.lmc!=null){this.vye(aub.lmc,xyc);}}ztb=ztb.xob;}};jxe.prototype.wye=function(wje,xyc){var yye=wje.ydc();var zye=wje.zdc();draw_line(yye.x*xyc,yye.y*xyc,zye.x*xyc,zye.y*xyc);};jxe.prototype.uye=function(wje,xyc){var anchor=wje.ydc();draw_line((anchor.x*xyc)-2,(anchor.y*xyc)-2,(anchor.x*xyc)+2,(anchor.y*xyc)+2);draw_line((anchor.x*xyc)-2,
(anchor.y*xyc)+2,(anchor.x*xyc)+2,(anchor.y*xyc)-2);};jxe.prototype.vye=function(wje,xyc){var yye=wje.ydc();var zye=this.mxe.upb();draw_line(yye.x*xyc,yye.y*xyc,zye.x*xyc,zye.y*xyc);};jxe.prototype.xye=function(wje,xyc){var anchor,aze;if(wje.bze()==this.mxe){anchor=wje.ydc();aze=wje.eec();}else {anchor=wje.zdc();aze=wje.fec();}draw_line(anchor.x*xyc,anchor.y*xyc,aze.x*xyc,aze.y*xyc);draw_line(wje.eec().x*xyc,wje.eec().y*xyc,wje.fec().x*xyc,wje.fec().y*xyc);};var cze=10,dze=16;var eze=0;function fze(gze){
this.sq=gze.lec().sq;this.hze=gze.mpb().evb().wx();this.ize=gze.opb().evb().wx();this.jze=new ng.kh.ui();gze.mec(this.jze);};function kze(lze,mze,nze){this.oze=lze;this.jub=mze;this.iub=nze;};function fhe(ahe,bhe,che,dhe,ehe,pze){this.aie=ehe;this.qze=pze;this.rze=cze;this.ipb=[];this.sze=[];for(var i=0;i<dze;i++){this.sze[i]=new kze(-1,0,0);}var gravity=new ng.mh.Math.lj(0,10);var yzb=true;this.oob=new ng.nh.ak(gravity,yzb);this.lac();this.kac();};fhe.prototype.lac=function(){var mac=new ng.nh.tj();mac.xvb(document.getElementById("canvas").getContext("2d"));
mac.awb(1.0/this.aie);mac.iwb(0.1);mac.dwb(1.0);mac.svb(ng.nh.tj.vwb|ng.nh.tj.wwb);this.oob.lac(mac);};fhe.prototype.kac=function(){var tze=new ng.nh.rj();tze.uze=this;tze.oub=function(jpb){this.uze.vze(jpb);};tze.qub=function(jpb,rub){};tze.tub=function(jpb,wze){};tze.pub=function(jpb){};this.oob.kac(tze);};fhe.prototype.vze=function(gze){this.ipb[this.ipb.length]=new fze(gze);};fhe.prototype.mhe=function(czc){this.qze=czc;};fhe.prototype.ohe=function(nhe){this.rze=nhe;};fhe.prototype.xze=function(xyc){
this.aie=xyc;};fhe.prototype.obc=function(khe,lhe){this.oob.fac.x=khe;this.oob.fac.y=-lhe;};fhe.prototype.qvb=function(yze){if(yze<=0){return;}var zze=1.0/this.qze;var aaf=this.qze/yze;var baf=aaf;while(baf>0.0){var caf=(baf>1.0)?zze:(zze*baf);this.oob.rbc(caf,this.rze,this.rze);this.oob.kz();baf-=1.0;}eze+=(zze*aaf);this.oob.vbc();this.daf();this.eaf();};fhe.prototype.daf=function(){var faf=1.0/this.aie;var gaf=this.oob.vcc();while((gaf!=null)&&(gaf!=undefined)){var ewd=gaf.wx();if((ewd!=null)&&(ewd!=undefined)){
ewd.x=gaf.upb().x*faf;ewd.y=gaf.upb().y*faf;ewd.image_angle=(-gaf.rlb()*180.0)/czd;ewd.phy_rotation=(gaf.rlb()*180.0)/Math.PI;ewd.phy_position_x=ewd.x;ewd.phy_position_y=ewd.y;ewd.phy_angular_velocity=(gaf.fqb()*180.0)/Math.PI;ewd.phy_linear_velocity_x=gaf.bqb().x*faf;ewd.phy_linear_velocity_y=gaf.bqb().y*faf;ewd.phy_speed_x=ewd.phy_linear_velocity_x/wzc.ghe();ewd.phy_speed_y=ewd.phy_linear_velocity_y/wzc.ghe();ewd.phy_bullet=gaf.ysb();ewd.phy_mass=gaf.wrb();ewd.phy_inertia=gaf.yrb();ewd.phy_com_x=gaf.xpb().x;
ewd.phy_com_y=gaf.xpb().y;ewd.phy_dynamic=(gaf.er==ng.nh.nj.aqb)?false:true;ewd.phy_frozen=false;ewd.phy_sleeping=!gaf.arb();}gaf=gaf.ntb();}};fhe.prototype.eaf=function(){var faf=1.0/this.aie;for(var i=0;i<this.ipb.length;i++){var haf=this.ipb[i].hze;var iaf=this.ipb[i].ize;var jaf=this.ipb[i].jze;var ls=this.ipb[i].sq;var kaf=jaf.heb.gu();kaf.mr();haf.phy_collision_points=this.ipb[i].sq;haf.laf["__phy_collision_x__"]=new maf("__phy_collision_x__",ls);haf.laf["__phy_collision_y__"]=new maf("__phy_collision_y__",
ls);haf.laf["__phy_col_normal_x__"]=new maf("__phy_col_normal_x__",ls);haf.laf["__phy_col_normal_y__"]=new maf("__phy_col_normal_y__",ls);iaf.phy_collision_points=this.ipb[i].sq;iaf.laf["__phy_collision_x__"]=new maf("__phy_collision_x__",ls);iaf.laf["__phy_collision_y__"]=new maf("__phy_collision_y__",ls);iaf.laf["__phy_col_normal_x__"]=new maf("__phy_col_normal_x__",ls);iaf.laf["__phy_col_normal_y__"]=new maf("__phy_col_normal_y__",ls);for(var sjb=0;sjb<this.ipb[i].sq;sjb++){array_set_1D(haf,"__phy_collision_x__",
sjb,jaf.os[sjb].x*faf);array_set_1D(haf,"__phy_collision_y__",sjb,jaf.os[sjb].y*faf);array_set_1D(haf,"__phy_col_normal_x__",sjb,kaf.x);array_set_1D(haf,"__phy_col_normal_y__",sjb,kaf.y);array_set_1D(iaf,"__phy_collision_x__",sjb,jaf.os[sjb].x*faf);array_set_1D(iaf,"__phy_collision_y__",sjb,jaf.os[sjb].y*faf);array_set_1D(iaf,"__phy_col_normal_x__",sjb,kaf.x);array_set_1D(iaf,"__phy_col_normal_y__",sjb,kaf.y);}haf.yzc(naf,iaf.object_index,haf,iaf);iaf.yzc(naf,haf.object_index,iaf,haf);}this.ipb=[];
};fhe.prototype.mrb=function(oaf,paf){oaf.mwe();var qaf=0;var qaf=this.raf(paf.object_index);if(qaf!=-1){oaf.lwe.lxb.jub=this.sze[qaf].jub;oaf.lwe.lxb.iub=this.sze[qaf].iub;}else {oaf.lwe.lxb.jub=0;oaf.lwe.lxb.iub=0;}var saf=new ng.nh.oj();saf.type=(oaf.lwe.cfb==0)?ng.nh.nj.aqb:ng.nh.nj.zqb;saf.position.x=paf.x*this.aie;saf.position.y=paf.y*this.aie;saf.tqb=oaf.uqb;saf.kqb=oaf.lqb;saf.dx=paf;var gaf=this.oob.mrb(saf);gaf.mob(oaf.lwe);var taf=new jxe(gaf,qaf);paf.sie=taf;this.uaf();return taf;};fhe.prototype.pac=function(vaf){
this.oob.pac(vaf.mxe);};fhe.prototype.rac=function(waf){this.oob.rac(waf.hxe);};fhe.prototype.jhe=function(ihe){this.oob.wbc();};fhe.prototype.rie=function(xaf,yaf,zaf,abf,bbf,cbf,dbf){var ebf=new ng.mh.Math.lj(zaf,abf);var fbf=new ng.mh.Math.lj(bbf,cbf);var gbf=new ng.nh.rh.yk();gbf.qab(xaf.mxe,yaf.mxe,ebf,fbf);gbf.dbc=dbf;var hbf=this.oob.yac(gbf);var ibf=new fxe(hbf);return ibf;};fhe.prototype.cje=function(xaf,yaf,jbf,kbf,lbf,mbf,nbf,obf,pbf,qbf,dbf){var anchor=new ng.mh.Math.lj(jbf,kbf);var gbf=new ng.nh.rh.ql();
gbf.qab(xaf.mxe,yaf.mxe,anchor);gbf.ksc=lbf;gbf.lsc=mbf;gbf.voc=nbf;gbf.msc=obf;gbf.uoc=pbf;gbf.woc=qbf;gbf.dbc=dbf;var rbf=this.oob.yac(gbf);var ibf=new fxe(rbf);return ibf;};fhe.prototype.ije=function(xaf,yaf,jbf,kbf,sbf,tbf,ubf,vbf,nbf,wbf,pbf,qbf,dbf){var anchor=new ng.mh.Math.lj(jbf,kbf);var swb=new ng.mh.Math.lj(sbf,tbf);swb.mr();var gbf=new ng.nh.rh.ml();gbf.qab(xaf.mxe,yaf.mxe,anchor,swb);gbf.roc=ubf;gbf.soc=vbf;gbf.voc=nbf;gbf.toc=wbf;gbf.uoc=pbf;gbf.woc=qbf;gbf.dbc=dbf;var xbf=this.oob.yac(gbf);var ibf=new fxe(xbf);
return ibf;};fhe.prototype.qje=function(xaf,yaf,ybf,zbf,acf,bcf,ccf,dcf,ecf,fcf,nje,gcf,hcf,dbf){var gbf=new ng.nh.rh.ol();gbf.qab(xaf.mxe,yaf.mxe,new ng.mh.Math.lj(ybf,zbf),new ng.mh.Math.lj(acf,bcf),xaf.mxe.fsb(new ng.mh.Math.lj(ccf,dcf)),yaf.mxe.fsb(new ng.mh.Math.lj(ecf,fcf)),nje);gbf.icf=gcf;gbf.jcf=hcf;gbf.dbc=dbf;var kcf=this.oob.yac(gbf);var ibf=new fxe(kcf);return ibf;};fhe.prototype.vje=function(xaf,yaf,lcf,mcf,nje){var rbf=(lcf.hxe.er==ng.nh.rh.el.pmc)?lcf.hxe:mcf.hxe;var xbf=(lcf.hxe.er==ng.nh.rh.el.jnc)?lcf.hxe:mcf.hxe;
if((rbf==xbf)||(rbf.er!=ng.nh.rh.el.pmc)||(xbf.er!=ng.nh.rh.el.jnc)){return -1;}var ncf=((rbf.wdc()==xaf.mxe)||(rbf.xdc()==xaf.mxe))?xaf.mxe:yaf.mxe;var ocf=((xbf.wdc()==xaf.mxe)||(xbf.xdc()==xaf.mxe))?xaf.mxe:yaf.mxe;if(ocf==ncf){return -1;}var gbf=new ng.nh.rh.cl();gbf.dvb=ncf;gbf.fvb=ocf;gbf.gmc=rbf;gbf.hmc=xbf;gbf.hkc=nje;var kcf=this.oob.yac(gbf);var ibf=new fxe(kcf);return ibf;};fhe.prototype.pcf=function(lze){for(var fad=0;fad<dze;fad++){if(this.sze[fad].oze==lze){return fad;}}return -1;};fhe.prototype.qcf=function(lze){
var rcf=this.pcf(lze);if(rcf!=-1){return rcf;}for(var fad=0;fad<dze;fad++){if(this.sze[fad].oze==-1){this.sze[fad].oze=lze;this.sze[fad].jub=(1<<fad);this.sze[fad].iub=0;return fad;}}return -1;};fhe.prototype.scf=function(lze,tcf){var ucf=lze;var vcf=ypd.mvc(lze);while((vcf.xrd>=0)&&ypd.mvc(vcf.xrd)){vcf=ypd.mvc(vcf.xrd);var wcf=vcf.oee;var xcf=0;for(var ycf in zcf){for(var afc in zcf[ycf]){var adf=-1;if(ycf==lze){adf=afc;}else if(afc==lze){adf=ycf;}if(adf!=-1){xcf++;}}}if(xcf!=tcf.length){break;}ucf=wcf;}return ucf;
};fhe.prototype.bdf=function(lze){var cdf=[];for(var ycf in zcf){for(var afc in zcf[ycf]){var adf=-1;if(ycf==lze){adf=afc;}else if(afc==lze){adf=ycf;}if(adf!=-1){cdf[cdf.length]=adf;}}}return cdf;};fhe.prototype.ddf=function(lze){var cdf=this.bdf(lze);var ucf=lze;var vcf=ypd.mvc(lze);while((vcf.xrd>=0)&&ypd.mvc(vcf.xrd)){vcf=ypd.mvc(vcf.xrd);cdf=cdf.concat(this.bdf(vcf.oee));}return cdf;};fhe.prototype.raf=function(lze){var qaf=this.pcf(lze);if(qaf!=-1){return qaf;}var cdf=this.bdf(lze);var oze=lze;if(cdf.length==0){
var ucf=lze;var vcf=ypd.mvc(lze);while((vcf.xrd>=0)&&ypd.mvc(vcf.xrd)){vcf=ypd.mvc(vcf.xrd);oze=vcf.oee;cdf=this.bdf(oze);if(cdf.length!=0){qaf=this.pcf(oze);break;}}if(cdf.length==0){return -1;}}if(qaf==-1){qaf=this.qcf(oze);if(qaf==-1){return -1;}}cdf=this.ddf(lze);for(var edf=0;edf<cdf.length;++edf){for(var fdf=0;fdf<dze;++fdf){if(this.sze[fdf].oze==cdf[edf]){this.sze[qaf].iub|=this.sze[fdf].jub;this.sze[fdf].iub|=this.sze[qaf].jub;}}}return qaf;};fhe.prototype.uaf=function(){var gaf=this.oob.vcc();while((gaf!=null)&&(gaf!=undefined)){
var ewd=gaf.wx();if((ewd!=null)&&(ewd!=undefined)){var gdf=ewd.sie.nxe;if(gdf!=-1){var hdf=new ng.nh.vj();hdf.jub=this.sze[gdf].jub;hdf.iub=this.sze[gdf].iub;var qob=gaf.htb();while((qob!=null)&&(qob!=undefined)){hdf.gub=qob.eub().gub;qob.kxb(hdf);qob=qob.xob;}}}gaf=gaf.ntb();}};var idf=false,ofe=-1,pfe=-1,jdf=0,kdf=1,ldf=2,mdf=3,ndf=4,odf=5,pdf=6,qdf=7,rdf=8,sdf=9,tdf=10,udf=11,vdf=[0,0,0],wdf=[0,0,0],xdf=[0,0,0,0,0,0],ydf=[0,0,0],zdf=[0,0,0],aef=[0,0,0],bef=[0,0,0],cef=[0,0,0],def=[0,0,0],eef=[0,0,0],
fef=0,gef=0;function hef(){if((wzc.ghe()<=30)||(ief<=30)){return 1.0;}if((wzc.ghe()/ief)<1.2){return 30.0/wzc.ghe();}else {return 30.0/ief;}}function jef(){if(!pee(ofe)){ofe=hdd();jdd(ofe,100000);}if(!pee(pfe)){pfe=hdd();jdd(pfe,-100000);}if(!idf){kef();}}function kef(){idf=true;for(var i=0;i<=5;i++){xdf[i]=udd();}for(var i=0;i<=2;i++){ydf[i]=udd();vdf[i]=udd();zdf[i]=udd();wdf[i]=udd();aef[i]=udd();bef[i]=udd();cef[i]=udd();def[i]=udd();eef[i]=udd();}fef=udd();gef=udd();}function lef(mef,vtc,wtc,xfd,iad){
var pbb=hef();if(xfd==0){wdd(xdf[0],nef);xdd(xdf[0],0.1,0.1,0.05*pbb,0);kfe(xdf[0],0,360,0,0,false);sed(xdf[0],0,360,0,0);red(xdf[0],2*pbb,2*pbb,-0.1*pbb,0);ged(xdf[0],0.6,0);led(xdf[0],zyc(10.0/pbb),zyc(15.0/pbb));xee(mef,vtc,wtc,xdf[0],iad,20);wdd(xdf[1],nef);xdd(xdf[1],0.1,0.1,0.1*pbb,0);kfe(xdf[1],0,360,0,0,false);ged(xdf[1],0.8,0);led(xdf[1],zyc(15/pbb),zyc(15/pbb));xee(mef,vtc,wtc,xdf[1],c_black,1);}else if(xfd==2){wdd(xdf[4],nef);xdd(xdf[4],0.4,0.4,0.2*pbb,0);kfe(xdf[4],0,360,0,0,false);sed(xdf[4],
0,360,0,0);red(xdf[4],7*pbb,7*pbb,-0.2*pbb,0);ged(xdf[4],0.6,0);led(xdf[4],zyc(15/pbb),zyc(20/pbb));xee(mef,vtc,wtc,xdf[4],iad,20);wdd(xdf[5],nef);xdd(xdf[5],0.4,0.4,0.4*pbb,0);kfe(xdf[5],0,360,0,0,false);ged(xdf[5],0.8,0);led(xdf[5],zyc(20/pbb),zyc(20/pbb));xee(mef,vtc,wtc,xdf[5],c_black,1);}else {wdd(xdf[2],nef);xdd(xdf[2],0.3,0.3,0.1*pbb,0);kfe(xdf[2],0,360,0,0,false);sed(xdf[2],0,360,0,0);red(xdf[2],4*pbb,4*pbb,-0.18*pbb,0);ged(xdf[2],0.6,0);led(xdf[2],zyc(12/pbb),zyc(17/pbb));xee(mef,vtc,wtc,
xdf[2],iad,20);wdd(xdf[3],nef);xdd(xdf[3],0.3,0.3,0.2*pbb,0);kfe(xdf[3],0,360,0,0,false);ged(xdf[3],0.8,0);led(xdf[3],zyc(17/pbb),zyc(17/pbb));xee(mef,vtc,wtc,xdf[3],c_black,1);}}function oef(mef,vtc,wtc,xfd,iad){var pbb=hef();if(xfd==0){wdd(ydf[0],pef);ged(ydf[0],1,0);xdd(ydf[0],0.0,0.0,0.15*pbb,0.0);led(ydf[0],zyc(10.0/pbb),zyc(12.0/pbb));xee(mef,vtc,wtc,ydf[0],iad,1);}else if(xfd==2){wdd(ydf[2],pef);ged(ydf[2],1,0);xdd(ydf[2],0,0,0.4*pbb,0);led(ydf[2],zyc(18.0/pbb),zyc(20.0/pbb));xee(mef,vtc,wtc,
ydf[2],iad,1);}else {wdd(ydf[1],pef);ged(ydf[1],1,0);xdd(ydf[1],0,0,0.25*pbb,0);led(ydf[1],zyc(13.0/pbb),zyc(15.0/pbb));xee(mef,vtc,wtc,ydf[1],iad,1);}}function qef(mef,vtc,wtc,xfd,iad){var pbb=hef();if(xfd==0){wdd(vdf[0],pef);ged(vdf[0],1,0);xdd(vdf[0],0,0,0.2*pbb,0);cfe(vdf[0],1,0.5);led(vdf[0],zyc(10.0/pbb),zyc(12.0/pbb));xee(mef,vtc,wtc,vdf[0],iad,1);}else if(xfd==2){wdd(vdf[2],pef);ged(vdf[2],1,0);xdd(vdf[2],0,0,0.6*pbb,0);cfe(vdf[2],1,0.5);led(vdf[2],zyc(18.0/pbb),zyc(20.0/pbb));xee(mef,vtc,wtc,
vdf[2],iad,1);}else {wdd(vdf[1],pef);ged(vdf[1],1,0);xdd(vdf[1],0,0,0.35*pbb,0);cfe(vdf[1],1,0.5);led(vdf[1],zyc(13.0/pbb),zyc(15.0/pbb));xee(mef,vtc,wtc,vdf[1],iad,1);}}function ref(mef,vtc,wtc,xfd,iad){var pbb=hef();if(xfd==0){wdd(zdf[1],sef);xdd(zdf[1],0.1,0.2,0,0);red(zdf[1],0.5*pbb,3.0*pbb,0.0,0.0);sed(zdf[1],0,360,0,0);ged(zdf[1],1,0.4);led(zdf[1],zyc(15.0/pbb),zyc(25.0/pbb));ved(zdf[1],0.10*pbb,270);xee(mef,vtc,wtc,zdf[1],iad,75);}else if(xfd==2){wdd(zdf[1],sef);xdd(zdf[1],0.1,0.2,0,0);red(zdf[1],
0.5*pbb,8.0*pbb,0.0,0.0);sed(zdf[1],0,360,0,0);ged(zdf[1],1,0.4);led(zdf[1],zyc(30.0/pbb),zyc(40.0/pbb));ved(zdf[1],0.17*pbb,270);xee(mef,vtc,wtc,zdf[1],iad,250);}else {wdd(zdf[1],sef);xdd(zdf[1],0.1,0.2,0,0);red(zdf[1],0.5*pbb,6.0*pbb,0.0,0.0);sed(zdf[1],0,360,0,0);ged(zdf[1],1,0.4);led(zdf[1],zyc(20.0/pbb),zyc(30.0/pbb));ved(zdf[1],0.15*pbb,270);xee(mef,vtc,wtc,zdf[1],iad,150);}}function tef(mef,vtc,wtc,xfd,iad){var i;var pbb=hef();if(xfd==0){wdd(wdf[0],nef);xdd(wdf[0],0.2,0.4,-0.01*pbb,0);ged(wdf[0],
0.4,0);led(wdf[0],zyc(25.0/pbb),zyc(25.0/pbb));for(i=0;i<=5;i++){xee(mef,vtc-5+izc(10),wtc-5+izc(10),wdf[0],iad,1);}}else if(xfd==2){wdd(wdf[2],nef);xdd(wdf[2],0.4,1,-0.01*pbb,0);ged(wdf[2],0.4,0);led(wdf[2],zyc(50.0/pbb),zyc(50.0/pbb));for(i=0;i<=15;i++){xee(mef,vtc-30+izc(60),wtc-30+izc(60),wdf[2],iad,1);}}else {wdd(wdf[1],nef);xdd(wdf[1],0.4,0.7,-0.01*pbb,0);ged(wdf[1],0.4,0);led(wdf[1],zyc(30.0/pbb),zyc(30.0/pbb));for(i=0;i<=10;i++){xee(mef,vtc-15+izc(30),wtc-15+izc(30),wdf[1],iad,1);}}}function uef(mef,
vtc,wtc,xfd,iad){var i;var pbb=hef();if(xfd==0){wdd(aef[0],nef);xdd(aef[0],0.2,0.4,-0.01*pbb,0);ged(aef[0],0.4,0);red(aef[0],3.0*pbb,4.0*pbb,0,0);sed(aef[0],90,90,0,0);led(aef[0],zyc(25.0/pbb),zyc(25.0/pbb));for(i=0;i<=5;i++){xee(mef,vtc-5+izc(10),wtc-5+izc(10),aef[0],iad,1);}}else if(xfd==2){wdd(aef[2],nef);xdd(aef[2],0.4,1,-0.01*pbb,0);ged(aef[2],0.4,0);red(aef[2],6.0*pbb,7.0*pbb,0,0);sed(aef[2],90,90,0,0);led(aef[2],zyc(50.0/pbb),zyc(50.0/pbb));for(i=0;i<=15;i++){xee(mef,vtc-30+izc(60),wtc-30+izc(60),
aef[2],iad,1);}}else {wdd(aef[1],nef);xdd(aef[1],0.4,0.7,-0.01*pbb,0);ged(aef[1],0.4,0);red(aef[1],5.0*pbb,6.0*pbb,0,0);sed(aef[1],90,90,0,0);led(aef[1],zyc(30.0/pbb),zyc(30.0/pbb));for(i=0;i<=10;i++){xee(mef,vtc-15+izc(30),wtc-15+izc(30),aef[1],iad,1);}}}function vef(mef,vtc,wtc,xfd,iad){var pbb=hef();if(xfd==0){wdd(bef[0],wef);xdd(bef[0],0.4,0.3,-0.02*pbb,0);kfe(bef[0],0,360,0,0,false);led(bef[0],zyc(20/pbb),zyc(20/pbb));xee(mef,vtc,wtc,bef[0],iad,1);}else if(xfd==2){wdd(bef[2],wef);xdd(bef[2],1.2,
1.2,-0.04*pbb,0);kfe(bef[2],0,360,0,0,false);led(bef[2],zyc(30/pbb),zyc(30/pbb));xee(mef,vtc,wtc,bef[2],iad,1);}else {wdd(bef[1],wef);xdd(bef[1],0.75,0.75,-0.03*pbb,0);kfe(bef[1],0,360,0,0,false);led(bef[1],zyc(25/pbb),zyc(25/pbb));xee(mef,vtc,wtc,bef[1],iad,1);}}function xef(mef,vtc,wtc,xfd,iad){var pbb=hef();if(xfd==0){wdd(cef[0],yef);xdd(cef[0],0.4,0.4,-0.02*pbb,0);kfe(cef[0],0,360,0,0,false);led(cef[0],zyc(20/pbb),zyc(20/pbb));xee(mef,vtc,wtc,cef[0],iad,1);}else if(xfd==2){wdd(cef[2],yef);xdd(cef[2],
1.2,1.2,-0.04*pbb,0);kfe(cef[2],0,360,0,0,false);led(cef[2],zyc(30/pbb),zyc(30/pbb));xee(mef,vtc,wtc,cef[2],iad,1);}else {wdd(cef[1],yef);xdd(cef[1],0.75,0.75,-0.03*pbb,0);kfe(cef[1],0,360,0,0,false);led(cef[1],zyc(25/pbb),zyc(25/pbb));xee(mef,vtc,wtc,cef[1],iad,1);}}function zef(mef,vtc,wtc,xfd,iad){var pbb=hef();if(xfd==0){wdd(def[0],sef);xdd(def[0],0.4,0.4,-0.02*pbb,0);kfe(def[0],0,360,0,0,false);led(def[0],zyc(20/pbb),zyc(20/pbb));xee(mef,vtc,wtc,def[0],iad,1);}else if(xfd==2){wdd(def[2],sef);xdd(def[2],
1.2,1.2,-0.04*pbb,0);kfe(def[2],0,360,0,0,false);led(def[2],zyc(30/pbb),zyc(30/pbb));xee(mef,vtc,wtc,def[2],iad,1);}else {wdd(def[1],sef);xdd(def[1],0.75,0.75,-0.03*pbb,0);kfe(def[1],0,360,0,0,false);led(def[1],zyc(25/pbb),zyc(25/pbb));xee(mef,vtc,wtc,def[1],iad,1);}}function aff(mef,vtc,wtc,xfd,iad){var pbb=hef();if(xfd==0){wdd(eef[0],nef);xdd(eef[0],2,2,0,0);cfe(eef[0],1,0.5);jfe(eef[0],0,0.3,0);led(eef[0],zyc(100.0/pbb),zyc(100.0/pbb));xee(mef,vtc,wtc,eef[0],iad,1);}else if(xfd==2){wdd(eef[2],nef);
xdd(eef[2],8,8,0,0);cfe(eef[2],1,0.5);jfe(eef[2],0,0.3,0);led(eef[2],zyc(100.0/pbb),zyc(100.0/pbb));xee(mef,vtc,wtc,eef[02],iad,1);}else {wdd(eef[1],nef);xdd(eef[1],4,4,0,0);cfe(eef[1],1,0.5);jfe(eef[1],0,0.3,0);led(eef[1],zyc(100.0/pbb),zyc(100.0/pbb));xee(mef,vtc,wtc,eef[1],iad,1);}}function bff(mef,vtc,wtc,xfd,iad){var i;var pbb=hef();wdd(fef,cff);xdd(fef,0.2,0.3,0.0,0.0);kfe(fef,0,0,0,0,true);red(fef,7*pbb,7*pbb,0,0);sed(fef,260,260,0,0);ife(fef,0.4);led(fef,zyc(0.2*wzc.gde()/pbb),zyc(0.2*wzc.gde()/pbb));
if(xfd==0){for(i=0;i<=1;i++){xee(mef,izc(1)*1.2*wzc.fde(),-30.0+izc(20),fef,iad,1);}}else if(xfd==2){for(i=0;i<=8;i++){xee(mef,izc(1)*1.2*wzc.fde(),-30.0+izc(20),fef,iad,1);}}else {for(i=0;i<=4;i++){xee(mef,izc(1)*1.2*wzc.fde(),-30.0+izc(20),fef,iad,1);}}}function dff(mef,vtc,wtc,xfd,iad){var i;var pbb=hef();wdd(gef,eff);xdd(gef,0.1,0.25,0.0,0.0);ife(gef,0.6);kfe(gef,0,360,0,0,false);red(gef,2.5*pbb,3.0*pbb,0.0,0.0);sed(gef,240,300,0,20);led(gef,zyc(0.5*wzc.gde()/pbb),zyc(0.5*wzc.gde()/pbb));if(xfd==0){
for(i=0;i<=0;i++){xee(mef,izc(1)*1.2*wzc.fde()-60,-30.0+izc(20),gef,iad,1);}}else if(xfd==2){for(i=0;i<=6;i++){xee(mef,izc(1)*1.2*wzc.fde()-60,-30.0+izc(20),gef,iad,1);}}else {for(i=0;i<=2;i++){xee(mef,izc(1)*1.2*wzc.fde()-60,-30.0+izc(20),gef,iad,1);}}}function ugd(tgd,sgd,vtc,wtc,xfd,iad){var fff;jef();if(tgd){fff=ofe;}else {fff=pfe;}switch(sgd){case jdf:lef(fff,vtc,wtc,xfd,iad);break;case kdf:oef(fff,vtc,wtc,xfd,iad);break;case ldf:qef(fff,vtc,wtc,xfd,iad);break;case mdf:ref(fff,vtc,wtc,xfd,iad);break;
case ndf:tef(fff,vtc,wtc,xfd,iad);break;case odf:uef(fff,vtc,wtc,xfd,iad);break;case pdf:vef(fff,vtc,wtc,xfd,iad);break;case qdf:xef(fff,vtc,wtc,xfd,iad);break;case rdf:zef(fff,vtc,wtc,xfd,iad);break;case sdf:aff(fff,vtc,wtc,xfd,iad);break;case tdf:bff(fff,vtc,wtc,xfd,iad);break;case udf:dff(fff,vtc,wtc,xfd,iad);break;}}function gff(){var pfc=wzc.mwd.pfc;for(var hff=0;hff<pfc.length;hff++){var vzc=pfc[hff];var srd=vzc.srd;if(!vzc.fwd){if(srd.iff[jff]){if(sprite_exists(vzc.sprite_index)||sprite_exists(vzc.mask_index)){
var pwd=vzc.ide();if((pwd.qwd<0)||(pwd.left>wzc.fde())||(pwd.bottom<0)||(pwd.top>wzc.gde())){vzc.yzc(jff,kff,vzc,vzc);}}else {if((vzc.x<0)||(vzc.x>wzc.fde())||(vzc.y<0)||(vzc.y>wzc.gde())){vzc.yzc(jff,kff,vzc,vzc);}}}if(srd.iff[lff]){if(sprite_exists(vzc.sprite_index)||sprite_exists(vzc.mask_index)){var pwd=vzc.ide();if((pwd.left<0)||(pwd.qwd>wzc.fde())||(pwd.top<0)||(pwd.bottom>wzc.gde())){vzc.yzc(lff,kff,vzc,vzc);}}else {if((vzc.x<0)||(vzc.x>wzc.fde())||(vzc.y<0)||(vzc.y>wzc.gde())){vzc.yzc(lff,kff,
vzc,vzc);}}}}}}function mff(){for(var ycf in zcf){var nff=ypd.mvc(ycf);var off=nff.pff();for(var haf=0;haf<off.length;haf++){var qff=off[haf];if(!qff.fwd&&qff.stb){var rff=zcf[ycf];for(var sff in rff){var afc=rff[sff];var tff=ypd.mvc(afc);var uff=tff.pff();for(var iaf=0;iaf<uff.length;iaf++){var vff=uff[iaf];if(!vff.fwd&&vff.stb){if((qff.srd==vff.srd)&&(iaf<haf))continue;if(qff.hwd(vff,true)){if((qff.solid)||(vff.solid)){qff.x=qff.xprevious;qff.y=qff.yprevious;qff.path_position=qff.path_positionprevious;vff.x=vff.xprevious;
vff.y=vff.yprevious;vff.path_position=vff.path_positionprevious;}qff.yzc(naf,afc,qff,vff);vff.yzc(naf,ycf,vff,qff);if((qff.solid)||(vff.solid)){qff.wff();vff.wff();qff.vpb(qff.x+qff.hspeed,qff.y+qff.vspeed);vff.vpb(vff.x+vff.hspeed,vff.y+vff.vspeed);if(qff.hwd(vff,true)==true){qff.x=qff.xprevious;qff.y=qff.yprevious;qff.path_position=qff.path_positionprevious;vff.x=vff.xprevious;vff.y=vff.yprevious;vff.path_position=vff.path_positionprevious;}}}}}}}}}}function xff(erd,yff,vtc,wtc){for(i=wzc.mwd.length-1;
i>=0;i--){var ewd=wzc.mwd.mvc(i);with(ewd){if(nwd)owd();if(!fwd&&srd.iff[erd|yff]){var cxd=ibd.mvc(ewd.sprite_index);var vud=cxd.xOrigin;var wud=cxd.yOrigin;if((vtc>=pwd.left)&&(vtc<pwd.qwd)&&(wtc>=pwd.top)&&(wtc<pwd.bottom)){ewd.yzc(erd,yff,ewd,ewd);}}}}}function zff(){if(wzc){var agf;if(!wzc.pte){agf=bgf;}else {agf=wzc.bme;}for(hh in agf){ame=agf[hh];if(ame.visible){if(ame.cgf==-1){ate(jtc,bte);}else {ate(whd.mvc(ame.cgf),bte);}if(((guc.dgf-bte.left)>=ame.oqe)&&((guc.dgf-bte.left)<ame.sqe)&&((guc.egf-bte.top)>=ame.pqe)&&((guc.egf-bte.top)<ame.tqe)){
g_pBuiltIn.mouse_x=((guc.dgf-bte.left-ame.oqe)/ame.fgf)+ame.cme;g_pBuiltIn.mouse_y=((guc.egf-bte.top-ame.pqe)/ame.ggf)+ame.dme;var qud=g_pBuiltIn.mouse_x;var rud=g_pBuiltIn.mouse_y;var hgf=ypd.yce();for(var iwd in hgf){var dwd=hgf[iwd];var igf=dwd.iff;if(igf[jgf]||igf[kgf]||igf[lgf]||igf[mgf]||igf[ngf]||igf[ogf]||igf[pgf]||igf[qgf]||igf[rgf]||igf[sgf]||igf[tgf]||igf[ugf]){if(dwd.vgf.length>0){var wgf=dwd.vgf.pfc;for(var i=wgf.length-1;i>=0;i--){var ewd=wgf[i];if(!ewd.fwd){{if(ewd.nwd)ewd.owd();var cxd=ibd.mvc(ewd.sprite_index);
if((qud>=ewd.pwd.left)&&(qud<ewd.pwd.qwd)&&(rud>=ewd.pwd.top)&&(rud<ewd.pwd.bottom)){var xgf=true;var qfe;for(qfe=0;qfe<3;qfe++){if(guc.sxd[qfe]){if(igf[jgf+qfe]){ewd.yzc(jgf+qfe,0,ewd,ewd);}xgf=false;}}for(qfe=0;qfe<3;qfe++){if(guc.txd[qfe]==true){if(igf[mgf+qfe]){ewd.yzc(mgf+qfe,0,ewd,ewd);}xgf=false;}}for(qfe=0;qfe<3;qfe++){if(guc.uxd[qfe]==true){if(igf[pgf+qfe]){ewd.yzc(pgf+qfe,0,ewd,ewd);}}}if(xgf){ewd.yzc(sgf,0,ewd,ewd);}if(!ewd.ygf){ewd.yzc(tgf,0,ewd,ewd);ewd.ygf=true;}}else {if(ewd.ygf){ewd.yzc(ugf,
0,ewd,ewd);ewd.ygf=false;}}}}}}}}var qfe;for(qfe=0;qfe<3;qfe++){if(guc.sxd[qfe]){dbd.yzc(zgf+qfe);}}for(qfe=0;qfe<3;qfe++){if(guc.txd[qfe]==true){dbd.yzc(ahf+qfe);}}for(qfe=0;qfe<3;qfe++){if(guc.uxd[qfe]==true){dbd.yzc(bhf+qfe);}}}}}}}function chf(){var pfc=wzc.mwd.pfc;for(var vzc=0;vzc<pfc.length;vzc++){var ewd=pfc[vzc];if(!ewd.fwd&&(ewd.timeline_index>=0)){if(!ewd.fhd){var prd=qrd.mvc(ewd.timeline_index);if((prd!=null)&&(prd!=undefined)){var dhf=prd.ehf();if(ewd.timeline_position>dhf){if(ewd.fhf){ewd.timeline_position-=dhf;
}}dhf=prd.ghf(ewd.timeline_position);ewd.timeline_position+=ewd.timeline_speed;var hhf=prd.ghf(ewd.timeline_position);for(var sjb=dhf;sjb<hhf;sjb++){lrd(ewd,ewd,ewd.timeline_index,sjb);}}}}}}function ihf(){var pfc=wzc.mwd.pfc;for(var vzc in pfc){var ewd=pfc[vzc];if(!ewd.fwd){for(var bu=0;bu<jhf;bu++){var event=khf|(bu+1);var dwd=ewd.srd;if(dwd.iff[event]){var lhf=~~array_get_1D(ewd,"__alarm__",bu);if(lhf>=0){lhf--;array_set_1D(ewd,"__alarm__",bu,lhf);}if(lhf==0){ewd.yzc(khf|(bu+1),0,ewd,ewd);}}}}}}function ird(erd,
frd){switch(erd){case mhf:return zzc;case nhf:return jwd;case ohf:switch(frd){case 0:return phf;case 1:return qhf;case 2:return rhf;case 3:return shf;case 4:return thf;case 5:return uhf;case 6:return vhf;case 7:return whf;case 8:return xhf;case 9:return yhf;case 10:return zhf;case 11:return aif;default :return phf;}case bif:switch(frd){case cif:return dif;case eif:return fif;case gif:return hif;default :return fif;}case iif:return naf;case jif:return kif;case lif:switch(frd){case mif:return jgf;case nif:return lgf;case oif:return kgf;case pif:return sgf;
case qif:return mgf;case rif:return ogf;case sif:return ngf;case tif:return pgf;case uif:return rgf;case vif:return qgf;case wif:return 0;case xif:return 0;case yif:return 0;case zif:return 0;case ajf:return 0;case bjf:return 0;case cjf:return 0;case djf:return 0;case ejf:return 0;case fjf:return 0;case gjf:return 0;case hjf:return 0;case ijf:return 0;case jjf:return 0;case kjf:return 0;case ljf:return 0;case mjf:return 0;case njf:return 0;case ojf:return 0;case pjf:return 0;case qjf:return 0;case rjf:return 0;case sjf:return 0;case tjf:return 0;case ujf:return 0;
case vjf:return 0;case wjf:return 0;case xjf:return 0;case yjf:return 0;case zjf:return 0;case akf:return 0;case bkf:return 0;case ckf:return 0;case dkf:return 0;case ekf:return 0;case fkf:return 0;case gkf:return 0;default :return 0;}case mbd:{switch(frd){case hkf:return jff;case ikf:return lff;case jkf:return kkf;case lkf:return mkf;case nkf:return okf;case pkf:return qkf;case rkf:return ebd;case skf:return tkf;case ukf:return vkf;case nbd:return wkf;case xkf:return ykf;case zkf:return alf;case blf:return clf;case urd:return dlf;case elf:return flf;
case glf:return hlf;case ilf:return jlf;case klf:return llf;case mlf:return nlf;case olf:return plf;case qlf:return rlf;case slf:return tlf;case ulf:return vlf;case wlf:return xlf;case ylf:return zlf;case amf:return bmf;case cmf:return dmf;case emf:return fmf;case gmf:return hmf;case imf:return jmf;case kmf:return lmf;mmf:return 0;}}case nmf:return omf;case pmf:return qmf;case rmf:return smf;case tmf:return umf;default :return 0;}}function krd(erd,frd){if(erd==tmf)return frd;return 0;}function vmf(){this.laf=[];this.laf["__background_visible__"]=new maf("__background_visible__",
1);this.laf["__background_foreground__"]=new maf("__background_foreground__",1);this.laf["__background_index__"]=new maf("__background_index__",1);this.laf["__background_x__"]=new maf("__background_x__",1);this.laf["__background_y__"]=new maf("__background_y__",1);this.laf["__background_width__"]=new maf("__background_width__",1);this.laf["__background_height__"]=new maf("__background_height__",1);this.laf["__background_htiled__"]=new maf("__background_htiled__",1);this.laf["__background_vtiled__"]=new maf("__background_vtiled__",
1);this.laf["__background_xscale__"]=new maf("__background_xscale__",1);this.laf["__background_yscale__"]=new maf("__background_yscale__",1);this.laf["__background_hspeed__"]=new maf("__background_hspeed__",1);this.laf["__background_vspeed__"]=new maf("__background_vspeed__",1);this.laf["__background_blend__"]=new maf("__background_blend__",1);this.laf["__background_alpha__"]=new maf("__background_alpha__",1);}var czd=3.14159265,wmf=true,xmf=false,ymf=true,bue=0,zmf=-1,anf=0,bnf=1,cnf=2,due=0;dnf=-1,enf=0,
fnf=1,gnf=2,hnf=3,inf=4,jnf=5,knf=6,aue=0,enf=-1,lnf=0,mnf=0,nnf=1,onf=2,pnf=3,qnf=4,rnf=5,snf=6,fue=0,tnf=-1,zme=-100,ane=-200,unf=-300,vnf=-400;cee=-1,wnf=-2,mgd=-3,zjd=-4,xnf=-5,ynf=-7,znf=-6;var zzc=0x000,jwd=0x100,khf=0x200,aof=0x300,naf=0x400,kif=0x500,bof=0x600,kff=0x700,omf=0x800,qmf=0x900,smf=0xA00,umf=0xB00,fif=aof|1,dif=aof|2,hif=aof|3,jff=kff|1,lff=kff|2,kkf=kff|3,mkf=kff|4,okf=kff|5,qkf=kff|6,ebd=kff|7,tkf=kff|8,vkf=kff|9,wkf=kff|10,ykf=kff|11,alf=kff|12,clf=kff|13,dlf=kff|14;flf=kff|15;
hlf=kff|16;jlf=kff|17;llf=kff|18;nlf=kff|19;plf=kff|20;rlf=kff|21;tlf=kff|22;vlf=kff|23;xlf=kff|24;zlf=kff|25;bmf=kff|26;dmf=kff|27;fmf=kff|28;hmf=kff|29;jmf=kff|60,lmf=kff|61,cof=kff|62,jgf=bof|1;lgf=bof|2;kgf=bof|3;mgf=bof|4;ogf=bof|5;ngf=bof|6;pgf=bof|7;rgf=bof|8;qgf=bof|9;zgf=bof|10;dof=bof|11;eof=bof|12;ahf=bof|13;fof=bof|14;gof=bof|15;bhf=bof|16;hof=bof|17;iof=bof|18;sgf=bof|19;tgf=bof|20;ugf=bof|21;phf=khf|1;qhf=khf|2;rhf=khf|3;shf=khf|4;thf=khf|5;uhf=khf|6;vhf=khf|7;whf=khf|8;xhf=khf|9;yhf=khf|10;
zhf=khf|11;aif=khf|12;mhf=0;nhf=1;ohf=2;bif=3;iif=4;jif=5;lif=6;mbd=7;nmf=8;pmf=9;rmf=10;tmf=11;mif=0;nif=1;oif=2;pif=3;qif=4;rif=5;sif=6;tif=7;uif=8;vif=9;wif=10;xif=11;yif=16;zif=17;ajf=18;bjf=19;cjf=21;djf=22;ejf=23;fjf=24;gjf=25;hjf=26;ijf=27;jjf=28;kjf=31;ljf=32;mjf=33;njf=34;ojf=36;pjf=37;qjf=38;rjf=39;sjf=40;tjf=41;ujf=42;vjf=43;wjf=50;xjf=51;yjf=52;zjf=53;akf=54;bkf=55;ckf=56;dkf=57;ekf=58;fkf=60;gkf=61;eif=0,cif=1,gif=2,hkf=0,ikf=1,jkf=2,lkf=3,nkf=4,pkf=5,rkf=6,skf=7,ukf=8,nbd=9,xkf=30,
zkf=40,blf=50,urd=10,elf=11,glf=12,ilf=13,klf=14,mlf=15,olf=16,qlf=17,slf=18,ulf=19,wlf=20,ylf=21,amf=22,cmf=23,emf=24,gmf=25,imf=60;kmf=61;jof=qmf|0,kof=qmf|1,lof=qmf|1,mof=qmf|8,nof=qmf|9,oof=qmf|13,pof=qmf|16,qof=qmf|17,rof=qmf|18,sof=qmf|19,tof=qmf|27,uof=qmf|32,vof=qmf|33,wof=qmf|34,xof=qmf|35,yof=qmf|36,zof=qmf|37,apf=qmf|38,bpf=qmf|39,cpf=qmf|40,dpf=qmf|45,epf=qmf|46,fpf=qmf|48,gpf=qmf|49,hpf=qmf|50,ipf=qmf|51,jpf=qmf|52,kpf=qmf|53,lpf=qmf|54,mpf=qmf|55,npf=qmf|56,opf=qmf|57,ppf=qmf|65,qpf=qmf|66,
rpf=qmf|67,spf=qmf|68,tpf=qmf|69,upf=qmf|70,vpf=qmf|71,wpf=qmf|72,xpf=qmf|73,ypf=qmf|74,zpf=qmf|75,aqf=qmf|76,bqf=qmf|77,cqf=qmf|78,dqf=qmf|79,eqf=qmf|80,fqf=qmf|81,gqf=qmf|82,hqf=qmf|83,iqf=qmf|84,jqf=qmf|85,kqf=qmf|86,lqf=qmf|87,mqf=qmf|88,nqf=qmf|89,oqf=qmf|90,pqf=qmf|112,qqf=qmf|113,rqf=qmf|114,sqf=qmf|115,tqf=qmf|116,uqf=qmf|117,vqf=qmf|118,wqf=qmf|119,xqf=qmf|120,yqf=qmf|121,zqf=qmf|122,arf=qmf|123,brf=qmf|145,crf=qmf|186,drf=qmf|187,erf=qmf|188,frf=qmf|189,grf=qmf|190,hrf=qmf|191,irf=qmf|192,
jrf=qmf|219,krf=qmf|220,lrf=qmf|221,mrf=qmf|222,nrf=qmf|223,orf=qmf|144,prf=qmf|96,qrf=qmf|97,rrf=qmf|98,srf=qmf|99,trf=qmf|100,urf=qmf|101,vrf=qmf|102,wrf=qmf|103,xrf=qmf|104,yrf=qmf|105,zrf=qmf|106,asf=qmf|107,bsf=qmf|109,csf=qmf|110,dsf=qmf|111,esf=kif|0,fsf=kif|1,gsf=kif|1,hsf=kif|8,isf=kif|9,jsf=kif|13,ksf=kif|16,lsf=kif|17,msf=kif|18,nsf=kif|19,osf=kif|27,psf=kif|32,qsf=kif|33,rsf=kif|34,ssf=kif|35,tsf=kif|36,usf=kif|37,vsf=kif|38,wsf=kif|39,xsf=kif|40,ysf=kif|45,zsf=kif|46,atf=kif|48,btf=kif|49,
ctf=kif|50,dtf=kif|51,etf=kif|52,ftf=kif|53,gtf=kif|54,htf=kif|55,itf=kif|56,jtf=kif|57,ktf=kif|65,ltf=kif|66,mtf=kif|67,ntf=kif|68,otf=kif|69,ptf=kif|70,qtf=kif|71,rtf=kif|72,stf=kif|73,ttf=kif|74,utf=kif|75,vtf=kif|76,wtf=kif|77,xtf=kif|78,ytf=kif|79,ztf=kif|80,auf=kif|81,buf=kif|82,cuf=kif|83,duf=kif|84,euf=kif|85,fuf=kif|86,guf=kif|87,huf=kif|88,iuf=kif|89,juf=kif|90,kuf=kif|112,luf=kif|113,muf=kif|114,nuf=kif|115,ouf=kif|116,puf=kif|117,quf=kif|118,ruf=kif|119,suf=kif|120,tuf=kif|121,uuf=kif|122,
vuf=kif|123,wuf=kif|145,xuf=kif|186,yuf=kif|187,zuf=kif|188,avf=kif|189,bvf=kif|190,cvf=kif|191,dvf=kif|192,evf=kif|219,fvf=kif|220,gvf=kif|221,hvf=kif|222,ivf=kif|223,jvf=kif|144,kvf=kif|96,lvf=kif|97,mvf=kif|98,nvf=kif|99,ovf=kif|100,pvf=kif|101,qvf=kif|102,rvf=kif|103,svf=kif|104,tvf=kif|105,uvf=kif|106,vvf=kif|107,wvf=kif|109,xvf=kif|110,yvf=kif|111,zvf=smf|0,awf=smf|1,bwf=smf|1;cwf=smf|8,dwf=smf|9,ewf=smf|13,fwf=smf|16,gwf=smf|17,hwf=smf|18,iwf=smf|19,jwf=smf|27,kwf=smf|32,lwf=smf|33,mwf=smf|34,
nwf=smf|35,owf=smf|36,pwf=smf|37,qwf=smf|38,rwf=smf|39,swf=smf|40,twf=smf|45,uwf=smf|46,vwf=smf|48,wwf=smf|49,xwf=smf|50,ywf=smf|51,zwf=smf|52,axf=smf|53,bxf=smf|54,cxf=smf|55,dxf=smf|56,exf=smf|57,fxf=smf|65,gxf=smf|66,hxf=smf|67,ixf=smf|68,jxf=smf|69,kxf=smf|70,lxf=smf|71,mxf=smf|72,nxf=smf|73,oxf=smf|74,pxf=smf|75,qxf=smf|76,rxf=smf|77,sxf=smf|78,txf=smf|79,uxf=smf|80,vxf=smf|81,wxf=smf|82,xxf=smf|83,yxf=smf|84,zxf=smf|85,ayf=smf|86,byf=smf|87,cyf=smf|88,dyf=smf|89,eyf=smf|90,fyf=smf|112,gyf=smf|113,
hyf=smf|114,iyf=smf|115,jyf=smf|116,kyf=smf|117,lyf=smf|118,myf=smf|119,nyf=smf|120,oyf=smf|121,pyf=smf|122,qyf=smf|123,ryf=smf|145,syf=smf|186,tyf=smf|187,uyf=smf|188,vyf=smf|189,wyf=smf|190,xyf=smf|191,yyf=smf|192,zyf=smf|219,azf=smf|220,bzf=smf|221,czf=smf|222,dzf=smf|223,ezf=smf|144,fzf=smf|96,gzf=smf|97,hzf=smf|98,izf=smf|99,jzf=smf|100,kzf=smf|101,lzf=smf|102,mzf=smf|103,nzf=smf|104,ozf=smf|105,pzf=smf|106,qzf=smf|107,rzf=smf|109,szf=smf|110,tzf=smf|111;var uzf=0;var vzf=1;var wzf=2;var jhf=12;
var xzf=8,yzf=8,zzf=1,bqd=10;var pcd=0x000000,scd=0x000080,tcd=0x008000,ucd=0x008080,vcd=0x800000,wcd=0x800080,xcd=0x808000,qcd=0x808080,rcd=0xC0C0C0,ycd=0x0000FF,zcd=0x00FF00,add=0x00FFFF,bdd=0xFF0000,cdd=0xFF00FF,ddd=0xFFFF00,aag=0xC0C0C0,bag=0x808080,jbd=0xFFFFFF,cag=0xC0DCC0,dag=0xF0CAA6,eag=0xF0FBFF,fag=0xA4A0A0;var global=ypd=dbd=guc=zke=g_pBuiltIn=gag=hag=mad=dcd=zcf=nce=qrd=sjd=wzc=iag=bgf=jag=kag=lag=mag=ivc=sxc=twc=eyc=obe=fxc=dyc=whd=nag=wue=eqd=fqd=tqd=uqd=vqd=hqd=lqd=oag=bsd=csd=njd=pnd=bte=lqe=kqe=mqe=nqe=pag=qag=gre=rag=sag=tag=uag=vag=wag=xag=yag=zag=null,
jqd=abg=true,lvd,bbg=mse=cbg=dbg=ebg=hmd=iqe=fbg=gbg=hrd=nse=false,hbg=wme=wqd=ibg=jbg=kbg=esd=fsd=dte=ete=cte=fte=yuc=wwd=lbg=tid=sod=btd=ctd=uod=yse=zse=gte=hte=mbg=nqd=oqd=pqd=iqd=gqd=wrd=yrd=zrd=asd=dpd=epd=uyd=vse=nbg=obg=pbg=0;use=qbg=cr_default=cr_none=cr_arrow=cr_cross=cr_beam=cr_size_nesw=cr_size_ns=cr_size_nwse=cr_size_we=cr_uparrow=cr_hourglass=cr_drag=cr_nodrop=cr_hsplit=cr_vsplit=cr_multidrag=cr_sqlwait=cr_no=cr_appstart=cr_help=cr_handpoint=cr_size_all=c_black=c_white=c_red=c_green=c_blue=rbg=sbg=tbg=ubg=vbg=0;
var hoe='canvas';function wbg(){var hzc=false;if((gag.Options)&&(gag.Options.debugMode)&&(gag.Options.debugMode==true)){hzc=true;}if(!hzc){instance_change=zwd;yyInst=xbg;array_get_1D=ybg;array_set_1D=zbg;array_get_2D=acg;array_set_2D=bcg;}else {instance_change=dxd;yyInst=ccg;array_get_1D=dcg;array_set_1D=ecg;array_get_2D=fcg;array_set_2D=gcg;}}function hcg(){icg();var jcg=new Audio();jcg.controls=false;cbg=!!jcg.canPlayType&&""!=jcg.canPlayType('audio/mpeg');dbg=!!jcg.canPlayType&&""!=jcg.canPlayType('audio/ogg; codecs="vorbis"');
jcg=null;if(cbg)hzc("Browser CAN play MP3");if(dbg)hzc("Browser CAN play OGG");wbg();zag=hbg=0;wzc=null;bbg=false;wme=-1;mqe=new kcg();iag=new kcg();nqe=new kcg();lqe=new ooe();kqe=new ooe();iag.visible=true;bgf=[];bgf[0]=iag;kag=[];lag=[];mag=[];ivc=new xge(5);sxc=new xge(5);twc=new xge(5);eyc=new xge(5);obe=new xge(5);fxc=new xge(5);whd=new xge(5);dyc=new xge(5);nag=new bid();pnd=new xge(5);bte=new ooe();qag=new lcg();qag.mcg="DUMMY INSTANCE";hoe="canvas";njd="html5game/";if(typeof(g_GameMakerHTML5Dir)!="undefined"){
njd=g_GameMakerHTML5Dir;}wue=[];eqd=[];fqd=[];tqd="Hiscore Table";uqd="<Nobody>";vqd="Press <ESC> to Continue";nqd=0x000000;gqd=-1;oqd=0xffff00;pqd=0xffffff;hqd="verdana";iqd=16;lqd="";jqd=true;highscore_clear();whd.ncg();yuc=0.0000001;iqe=abg=false;xag=wrd=null;yrd=zrd=-1;uyd=0;lbg=1.0;wqd=0;ibg=-1;jbg=0;kbg=0;ocg=true;mbg=10000000;wwd=100000;tid=1.0;btd=0x00000000;sod=0x000000;ctd=vod(sod);uod=hid(sod,tid);c_black=vod(0x000000);c_white=vod(0xffffff);c_red=vod(0x0000ff);c_green=vod(0x00ff00);c_blue=vod(0xff0000);
rbg=vod(0xff000000);sbg=vod(0xffffffff);tbg=vod(0xff0000ff);ubg=vod(0xff00ff00);vbg=vod(0xffff0000);cr_default=0;cr_none=-1;cr_arrow=-2;cr_cross=-3;cr_beam=-4;cr_size_nesw=-6;cr_size_ns=-7;cr_size_nwse=-8;cr_size_we=-9;cr_uparrow=-10;cr_hourglass=-11;cr_drag=-12;cr_nodrop=-13;cr_hsplit=-14;cr_vsplit=-15;cr_multidrag=-16;cr_sqlwait=-17;cr_no=-18;cr_appstart=-19;cr_help=-20;cr_handpoint=-21;cr_size_all=-22;use=-1;qbg=0;pcg();global.laf=[];if(gag.Options&&gag.Options.showCursor==false){jtc.style.cursor="none";
}gbg=false;if(gag.Options&&gag.Options.CreateEventOrder==true){gbg=true;}if(typeof qcg=='function'){qcg()}}function rcg(scg){return scg*(Math.PI/180.0);}function tcg(vtc,wtc){if(vtc==0)return 0;var rbb=((vtc*0x1000000)%(wtc*0x1000000));rbb=rbb/0x1000000;return rbb;}function fzd(vtc){return vtc*vtc;}function vod(iad){var brd="rgba("+(iad&0xff).toString()+","+((iad>>8)&0xff).toString()+","+((iad>>16)&0xff).toString()+","+((iad>>24)&0xff).toString()+")";return brd;}function hid(iad,bjd){var brd="rgba("+((iad>>16)&0xff).toString()+","+((iad>>8)&0xff).toString()+","+((iad>>0)&0xff).toString()+","+((bjd*255.0)&0xff).toString()+")";
return brd;}function ucg(scg){return czd*scg/180.0;}function iid(iad){return(((iad&0xff)<<16)|(iad&0xff00)|((iad&0xff0000)>>16));}function zgd(vcg){var wcg=YoYo_GetTimer();while(vcg>0){var xcg=YoYo_GetTimer();vcg-=(xcg-wcg);wcg=xcg;}}function yjd(wjd,pxc,xjd,ycg){var bu=yjd.arguments;var qzd=yjd.arguments.length;var zcg=bu[qzd-1];pxc=Math.floor(pxc);if(pxc==mgd){var pfc=dbd.yce();for(var vzc=0;vzc<pfc.length;vzc++){var ewd=pfc[vzc];if((xjd)&&(ewd==wjd))continue;if(ewd.adg)continue;var lq=zcg(ewd);if(lq)return lq;
}}else if(pxc<100000){var dwd=ypd.mvc(pxc);if(dwd===null){return ycg;}var pfc=dwd.pff();for(var vzc=0;vzc<pfc.length;vzc++){var ewd=pfc[vzc];if((xjd)&&(wjd==ewd))continue;if(ewd.adg)continue;var lq=zcg(ewd);if(lq)return lq;}}else {var ewd=dbd.bdg(pxc);if((xjd)&&(wjd==ewd)){return ycg;}if(ewd.adg){return ycg;}return zcg(ewd);}return ycg;}function bee(wjd,pxc,xjd,ycg){var bu=bee.arguments;var qzd=bee.arguments.length;var zcg=bu[qzd-1];var ot=10000000000;var id=-1;pxc=Math.floor(pxc);if(pxc==mgd){var pfc=dbd.yce();for(var vzc=0;
vzc<pfc.length;vzc++){var ewd=pfc[vzc];if((xjd)&&(ewd==wjd))continue;if(ewd.adg)continue;var qv=zcg(ewd);if(qv<ot){ot=qv;}}if(ot!=10000000000)return ot;}else if(pxc<100000){var dwd=ypd.mvc(pxc);if(dwd===null){return ycg;}var pfc=dwd.pff();for(var vzc=0;vzc<pfc.length;vzc++){var ewd=pfc[vzc];if((xjd)&&(wjd==ewd))continue;if(ewd.adg)continue;var qv=zcg(ewd);if(qv<ot){ot=qv;}}if(ot!=10000000000)return ot;}else {var ewd=dbd.bdg(pxc);if((xjd)&&(wjd==ewd)){return ycg;}if(ewd.adg){return ycg;}return zcg(ewd);}return ycg;
}var cdg={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.ddg=this.searchString(this.dataOS)||"an unknown OS";this.os_version=this.edg();},edg:function(){if(navigator.appVersion.indexOf("CPU OS 5_")!=-1){return 5.0;}else if(navigator.appVersion.indexOf("CPU OS 4_")!=-1){return 4.0;}else if(navigator.appVersion.indexOf("CPU OS 3_")!=-1){return 3.0;
}else if(navigator.appVersion.indexOf("Android 4")!=-1){return 4.0;}else if(navigator.appVersion.indexOf("Android 3")!=-1){return 3.0;}else if(navigator.appVersion.indexOf("Android 2")!=-1){return 2.0;}else {return tnf;}},searchString:function(data){for(var i=0;i<data.length;i++){var fdg=data[i].string;var gdg=data[i].prop;this.versionSearchString=data[i].versionSearch||data[i].identity;if(fdg){if(fdg.indexOf(data[i].hdg)!=-1){return data[i].identity;}}else if(gdg){return data[i].identity;}}},searchVersion:function(fdg){
var index=fdg.indexOf(this.versionSearchString);if(index==-1)return;return parseFloat(fdg.substring(index+this.versionSearchString.length+1));},dataBrowser:[{string:navigator.userAgent,hdg:"Chrome",identity:"Chrome"},{string:navigator.userAgent,hdg:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,hdg:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,hdg:"iCab",identity:"iCab"},{string:navigator.vendor,hdg:"KDE",
identity:"Konqueror"},{string:navigator.userAgent,hdg:"Firefox",identity:"Firefox"},{string:navigator.userAgent,hdg:"IceWeasel",identity:"IceWeasel"},{string:navigator.vendor,hdg:"Camino",identity:"Camino"},{string:navigator.userAgent,hdg:"Netscape",identity:"Netscape"},{string:navigator.userAgent,hdg:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,hdg:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,hdg:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}
],dataOS:[{string:navigator.platform,hdg:"Win",identity:"Windows"},{string:navigator.platform,hdg:"Mac",identity:"Mac"},{string:navigator.userAgent,hdg:"iPhone",identity:"iPhone"},{string:navigator.userAgent,hdg:"iPod",identity:"iPhone"},{string:navigator.userAgent,hdg:"iPad",identity:"iPad"},{string:navigator.userAgent,hdg:"Android",identity:"Android"},{string:navigator.platform,hdg:"Linux",identity:"Linux"}]};function icg(){cdg.init();if(cdg.ddg=="Windows"){aue=lnf;}else if(cdg.ddg=="Mac"){aue=nnf;
}else if(cdg.ddg=="iPhone"){aue=pnf;}else if(cdg.ddg=="iPad"){aue=pnf;}else if(cdg.ddg=="Android"){aue=qnf;}else if(cdg.ddg=="Linux"){aue=snf;}else {aue=enf;}fue=cdg.os_version;due=enf;bue=zmf;if(cdg.browser=="Explorer"){hzc("Internet Explorer detected");due=fnf;}else if(cdg.browser=="Firefox"){hzc("Firefox detected");due=gnf;}else if(cdg.browser=="Chrome"){hzc("Chrome detected");due=hnf;}else if(cdg.browser=="Safari"){if(aue==pnf){due=jnf;bue=anf;if(cdg.ddg=="iPad")bue=cnf;hzc("Safari mobile detected");
}else {hzc("Safari detected");due=inf;}}else if(cdg.browser=="Opera"){hzc("BrowserDetect: "+cdg.ddg);hzc("Opera detected");due=knf;}else {hzc("Unknown Browser - Please report these strings");hzc("----------------------------------------------");if(navigator.userAgent)hzc("userAgent: "+navigator.userAgent);if(navigator.vendor)hzc("vendor: "+navigator.vendor);hzc("----------------------------------------------");}}function pcg(){try{if('localStorage' in window&&window['localStorage']!==null){lvd=true;}}
catch(obb){lvd=false;}return lvd;}var idg=0;var jdg=0;var kdg=0;var ldg=0;var mdg=null;var ndg=null;function odg(){global=new vmf();g_pBuiltIn=new pdg();guc=new qdg();rdg(jtc);dbd=new sdg();ypd=new tdg();zke=new udg();ibd=new vdg();dcd=new wdg();mad=new xdg();smd=new ydg();zcf=[];nce=new zdg();qrd=new aeg();sjd=new beg();hcg();}function ceg(deg){switch(deg){case 1:return "MEDIA_ERR_ABORTED";case 2:return "MEDIA_ERR_NETWORK";case 3:return "MEDIA_ERR_DECODE";case 4:return "MEDIA_ERR_SRC_NOT_SUPPORTED";}return "Unknown Error";}function eeg(deg){
switch(deg){case 0:return "NETWORK_EMPTY";case 1:return "NETWORK_IDLE";case 2:return "NETWORK_LOADING";case 3:return "NETWORK_NO_SOURCE";}return "Unknown Error";}function feg(erd){hzc("ImageLoaded: "+this.src);mdg[this.geg]=null;jdg++;}function heg(erd){hzc("ImageError: "+this.src);mdg[this.geg]=null;jdg++;}function ieg(erd){ldg++;hzc("ExtensionLoaded: ");}function jeg(erd){ldg++;hzc("ExtensionError: ");}function keg(jad){jad.removeEventListener('canplaythrough',leg,false);jad.removeEventListener('error',meg,
false);jad.removeEventListener("loadstart",neg,false);jad.removeEventListener("suspend",oeg,false);jad.removeEventListener("stalled",peg,false);jad.removeEventListener("stall",peg,false);}function leg(erd){this.qeg=true;if(mdg[this.geg]!=null){mdg[this.geg]=null;jdg++;}keg(this);hzc("SoundLoaded: "+this.geg);}function meg(erd){hzc("SoundError: "+this.geg+"   NetworkError: "+ceg(this.error["code"]));this.qeg=false;if(mdg[this.geg]!=null){mdg[this.geg]=null;jdg++;}keg(this);}function neg(erd){this.reg=true;
}function oeg(erd){hzc("SoundSuspended: "+this.geg);this.qeg=true;if(mdg[this.geg]!=null){mdg[this.geg]=null;jdg++;}keg(this);}function peg(erd){}function seg(kjd){hzc("Loading: "+kjd);var index=pjd(kjd);var aid=new bid();aid.x=0;aid.y=0;aid.w=63;aid.h=63;aid.XOffset=-32;aid.YOffset=-32;aid.CropWidth=63;aid.CropHeight=63;aid.ow=aid.w;aid.oh=aid.h;aid.tp=index;aid.cid=qid[index];aid.pu=[];aid.spe=32;aid.ay=0;var teg=kag.length;kag[teg]=aid;return teg;}function ueg(veg){hzc("Loading: "+njd+veg);var obb=window.document.createElement('script');
obb.setAttribute('src',njd+veg);obb.setAttribute('type',"text/javascript");obb.onload=ieg;obb.onerror=jeg;window.document.body.appendChild(obb);kdg++;}function weg(xeg){if(xeg.Extensions!=undefined){for(var i=0;i<xeg.Extensions.length;i++){var yeg=xeg.Extensions[i];if(yeg.jsFiles){for(var zeg=0;zeg<yeg.jsFiles.length;zeg++){ueg(yeg.jsFiles[zeg]);}}}}}function afg(xeg){mdg=[];kdg=0;ldg=0;weg(xeg);}function bfg(xeg){if(xeg.mxd)document.title=xeg.mxd;ndg=document.getElementById('GM4HTML5_loadingscreen');
if(cfg==""){afg(xeg);cfg=dfg;}else {try{cfg=eval(cfg);}catch(obb){cfg=dfg;}}jdg=0;for(index=0;index<xeg.Textures.length;index++){idg++;hzc("Loading: "+njd+xeg.Textures[index]);var index=pjd(njd+xeg.Textures[index]);qid[index].onload=feg;qid[index].onerror=heg;qid[index].geg=xeg.Textures[index];mdg[qid[index].geg]=qid[rbb];}for(var i=2;i<16;i++){idg++;var qg=seg(njd+"particles/IDR_GIF"+i+".png");var rbb=kag[qg].tp;qid[rbb].onload=feg;qid[rbb].onerror=heg;qid[rbb].geg="particles/IDR_GIF"+i+".png";mdg[qid[rbb].geg]=qid[rbb];
}for(index=0;index<xeg.Sounds.length;index++){if(xeg.Sounds[index]!=null){idg++;hzc("Loading: "+njd+xeg.Sounds[index].origName);var id=jne(njd+xeg.Sounds[index].origName,xeg.Sounds[index].pName,xeg.Sounds[index].extension,leg,meg);if(id>=0&&mdg[nne[id].geg]){mdg[nne[id].geg]=nne[id];}else {idg--;}}}}function efg(){for(var i in mdg){var ffg=mdg[i];if(ffg){if((ffg.gfg)&&(ffg.readyState)){if((ffg.gfg==1||ffg.gfg==3)&&(ffg.reg)&&(ffg.readyState!=4)){if(ffg.qeg!=true){ffg.qeg=false;jdg++;mdg[i]=null;keg(ffg);
hzc("SoundError: "+ffg.geg+"   NetworkState: "+eeg(ffg.gfg));}}}}}}function hfg(ifg,dwd){if(dwd.jfg)return;if(dwd.vrd!=null){hfg(dwd.vrd.oee,dwd.vrd);}for(var kfg in dwd.lfg){if(zcf[kfg]){if(zcf[kfg][ifg]){continue;}}var hpb=false;var mfg=dwd;while(mfg!=null){var id=mfg.oee;var nfg=ypd.mvc(kfg);while(nfg!=null){var ofg=nfg.oee;if(zcf[ofg]&&zcf[ofg][id]){hpb=true;break;}nfg=nfg.vrd;}mfg=mfg.vrd;}if(!hpb){if(!zcf[ifg]){zcf[ifg]=[];}zcf[ifg][kfg]=kfg;}}dwd.jfg=true;}function pfg(){var pfc=ypd.yce();for(var ifg in pfc){
var dwd=pfc[ifg];if(dwd.vrd!=null){hfg(dwd.vrd.oee,dwd.vrd);}hfg(ifg,dwd);}}function qfg(xeg){var index,ale;wwd=1000000;g_pBuiltIn.game_id=xeg.Options.gameId;pag=new rfg(xeg.Triggers);var id=0;for(index in xeg.GMObjects){var sfg=xeg.GMObjects[index];if(sfg!=null){var srd=tfg(id,sfg);ypd.xnb(srd);}id++;}ypd.ufg();pfg();for(index in xeg.GMRooms){var vfg=xeg.GMRooms[index];if(vfg!=null){ale=new kme();ale.wfg(vfg);zke.xnb(ale);}else {hbg++;zke.xnb(null);}}zke.xfg(xeg.RoomOrder);for(var i=0;i<xeg.RoomOrder.length;i++){
ale=zke.xme(i);ale.ume=i;}g_pBuiltIn.room_first=zke.xme(0).id;g_pBuiltIn.room_last=zke.xme(zke.yme.length-1).id;yfg(xeg.TPageEntries);for(index=0;index<xeg.Sprites.length;index++){if(xeg.Sprites[index]==null){ibd.noe(null);}else {var cxd=zfg(xeg.Sprites[index]);ibd.noe(cxd);}}for(index=0;index<xeg.Backgrounds.length;index++){var agg=dcd.bgg(xeg.Backgrounds[index]);var nid=dcd.qhd(agg);if(nid!=null)nid.qz=cgg;}for(index=0;index<xeg.Fonts.length;index++){smd.xnb(xeg.Fonts[index]);}for(index=0;index<xeg.Paths.length;
index++){var mce=dgg(xeg.Paths[index]);nce.xnb(mce);}for(index=0;index<xeg.Sounds.length;index++){mad.xnb(xeg.Sounds[index]);}if(xeg.Timelines!=undefined){for(index=0;index<xeg.Timelines.length;index++){qrd.xnb(xeg.Timelines[index]);}}if(typeof egg=='function'){yag=new egg();}if(typeof fgg=='function'){fgg();}if(xeg.Extensions!=undefined){for(var i=0;i<xeg.Extensions.length;i++){var yeg=xeg.Extensions[i];try{pFunc=eval(yeg.init);if(pFunc)pFunc();}catch(wnd){hbc("Error calling extension initialisation function: "+yeg.init);
}}}}var ggg=0;var hgg=1;var igg=2;var jgg=3;var kgg=4;var lgg=5;var mgg=6;var ngg=7;var ogg=8;var pgg=9;var qgg=10;var rgg=11;var sgg=12;var tgg=13;var ugg=14;var vgg=15;function wgg(xgg){this.pz=new Float32Array(16);if(wgg.arguments.length>0){for(var i=0;i<16;i++){this.pz[i]=xgg.pz[i];}}else {this.ygg();}};function zgg(xgg){for(var i=0;i<16;i++){if(this.pz[i]!=xgg.pz[i])return false;}return true;};wgg.prototype.identity=function(wt){this.pz[1]=this.pz[2]=this.pz[3]=this.pz[4]=this.pz[6]=this.pz[7]=this.pz[8]=this.pz[9]=this.pz[11]=this.pz[12]=this.pz[13]=this.pz[14]=0.0;
this.pz[0]=this.pz[5]=this.pz[10]=this.pz[15]=1.0;};wgg.prototype.ygg=function(wt){this.pz[1]=this.pz[2]=this.pz[3]=this.pz[4]=this.pz[6]=this.pz[7]=this.pz[8]=this.pz[9]=this.pz[11]=this.pz[12]=this.pz[13]=this.pz[14]=0.0;this.pz[0]=this.pz[5]=this.pz[10]=this.pz[15]=1.0;};wgg.prototype.ahg=function(bhg,chg,dhg){var ehg=new fhg(dhg);var ghg=new fhg();var hhg=chg.ihg(bhg);hhg.jhg();ehg.jhg();ghg.khg(ehg,hhg);ghg.jhg();ehg.khg(hhg,ghg);ehg.jhg();var lhg=bhg.mhg(ghg);var nhg=bhg.mhg(ehg);var ohg=bhg.mhg(hhg);
this.pz[ggg]=ghg.lhg;this.pz[hgg]=ehg.lhg;this.pz[igg]=hhg.lhg;this.pz[jgg]=0.0;this.pz[kgg]=ghg.nhg;this.pz[lgg]=ehg.nhg;this.pz[mgg]=hhg.nhg;this.pz[ngg]=0.0;this.pz[ogg]=ghg.ohg;this.pz[pgg]=ehg.ohg;this.pz[qgg]=hhg.ohg;this.pz[rgg]=0.0;this.pz[sgg]=-lhg;this.pz[tgg]=-nhg;this.pz[ugg]=-ohg;this.pz[vgg]=1;};wgg.prototype.phg=function(qhg,rhg,shg,thg){var uhg=1.0/vhg(qhg*0.5);var whg=uhg/rhg;this.pz[ggg]=whg;this.pz[hgg]=this.pz[igg]=this.pz[jgg]=0.0;this.pz[lgg]=uhg;this.pz[kgg]=this.pz[mgg]=this.pz[ngg]=0.0;
this.pz[ogg]=this.pz[pgg]=0.0;this.pz[rgg]=1.0;this.pz[qgg]=thg/(thg-shg);this.pz[sgg]=this.pz[sgg]=this.pz[vgg]=0.0;this.pz[ugg]=-shg*thg/(thg-shg);};wgg.prototype.xhg=function(bvc,cvc,shg,thg){this.pz[ggg]=2*shg/bvc;this.pz[hgg]=this.pz[igg]=this.pz[jgg]=0.0;this.pz[lgg]=2*shg/cvc;this.pz[kgg]=this.pz[mgg]=this.pz[ngg]=0.0;this.pz[ogg]=this.pz[pgg]=0.0;this.pz[rgg]=1.0;this.pz[qgg]=thg/(thg-shg);this.pz[sgg]=this.pz[tgg]=this.pz[vgg]=0.0;this.pz[ugg]=-shg*thg/(thg-shg);};wgg.prototype.yhg=function(bvc,
cvc,shg,thg){this.pz[ggg]=2.0/bvc;this.pz[hgg]=this.pz[igg]=0.0;this.pz[jgg]=0;this.pz[lgg]=2.0/cvc;this.pz[kgg]=this.pz[mgg]=0.0;this.pz[ngg]=0;this.pz[ogg]=this.pz[pgg]=0.0;this.pz[qgg]=1.0/(thg-shg);this.pz[rgg]=0;this.pz[sgg]=this.pz[tgg]=0.0;this.pz[ugg]=shg/(shg-thg);this.pz[vgg]=1.0;};wgg.prototype.fjb=function(zhg,aig){this.pz[ggg]=(zhg.pz[ggg]*aig.pz[ggg])+(zhg.pz[hgg]*aig.pz[kgg])+(zhg.pz[igg]*aig.pz[ogg])+(zhg.pz[jgg]*aig.pz[sgg]);this.pz[hgg]=(zhg.pz[ggg]*aig.pz[hgg])+(zhg.pz[hgg]*aig.pz[lgg])+(zhg.pz[igg]*aig.pz[pgg])+(zhg.pz[jgg]*aig.pz[tgg]);
this.pz[igg]=(zhg.pz[ggg]*aig.pz[igg])+(zhg.pz[hgg]*aig.pz[mgg])+(zhg.pz[igg]*aig.pz[qgg])+(zhg.pz[jgg]*aig.pz[ugg]);this.pz[jgg]=(zhg.pz[ggg]*aig.pz[jgg])+(zhg.pz[hgg]*aig.pz[ngg])+(zhg.pz[igg]*aig.pz[rgg])+(zhg.pz[jgg]*aig.pz[vgg]);this.pz[kgg]=(zhg.pz[kgg]*aig.pz[ggg])+(zhg.pz[lgg]*aig.pz[kgg])+(zhg.pz[mgg]*aig.pz[ogg])+(zhg.pz[ngg]*aig.pz[sgg]);this.pz[lgg]=(zhg.pz[kgg]*aig.pz[hgg])+(zhg.pz[lgg]*aig.pz[lgg])+(zhg.pz[mgg]*aig.pz[pgg])+(zhg.pz[ngg]*aig.pz[tgg]);this.pz[mgg]=(zhg.pz[kgg]*aig.pz[igg])+(zhg.pz[lgg]*aig.pz[mgg])+(zhg.pz[mgg]*aig.pz[qgg])+(zhg.pz[ngg]*aig.pz[ugg]);
this.pz[ngg]=(zhg.pz[kgg]*aig.pz[jgg])+(zhg.pz[lgg]*aig.pz[ngg])+(zhg.pz[mgg]*aig.pz[rgg])+(zhg.pz[ngg]*aig.pz[vgg]);this.pz[ogg]=(zhg.pz[ogg]*aig.pz[ggg])+(zhg.pz[pgg]*aig.pz[kgg])+(zhg.pz[qgg]*aig.pz[ogg])+(zhg.pz[rgg]*aig.pz[sgg]);this.pz[pgg]=(zhg.pz[ogg]*aig.pz[hgg])+(zhg.pz[pgg]*aig.pz[lgg])+(zhg.pz[qgg]*aig.pz[pgg])+(zhg.pz[rgg]*aig.pz[tgg]);this.pz[qgg]=(zhg.pz[ogg]*aig.pz[igg])+(zhg.pz[pgg]*aig.pz[mgg])+(zhg.pz[qgg]*aig.pz[qgg])+(zhg.pz[rgg]*aig.pz[ugg]);this.pz[rgg]=(zhg.pz[ogg]*aig.pz[jgg])+(zhg.pz[pgg]*aig.pz[ngg])+(zhg.pz[qgg]*aig.pz[rgg])+(zhg.pz[rgg]*aig.pz[vgg]);
this.pz[sgg]=(zhg.pz[sgg]*aig.pz[ggg])+(zhg.pz[tgg]*aig.pz[kgg])+(zhg.pz[ugg]*aig.pz[ogg])+(zhg.pz[vgg]*aig.pz[sgg]);this.pz[tgg]=(zhg.pz[sgg]*aig.pz[hgg])+(zhg.pz[tgg]*aig.pz[lgg])+(zhg.pz[ugg]*aig.pz[pgg])+(zhg.pz[vgg]*aig.pz[tgg]);this.pz[ugg]=(zhg.pz[sgg]*aig.pz[igg])+(zhg.pz[tgg]*aig.pz[mgg])+(zhg.pz[ugg]*aig.pz[qgg])+(zhg.pz[vgg]*aig.pz[ugg]);this.pz[vgg]=(zhg.pz[sgg]*aig.pz[jgg])+(zhg.pz[tgg]*aig.pz[ngg])+(zhg.pz[ugg]*aig.pz[rgg])+(zhg.pz[vgg]*aig.pz[vgg]);};wgg.prototype.cig=function(wgd){
this.ygg();var bu=rcg(wgd);var vm=Math.sin(bu);var c=Math.cos(bu);this.pz[ggg]=c;this.pz[hgg]=-vm;this.pz[kgg]=vm;this.pz[lgg]=c;};wgg.prototype.dig=function(wgd){this.ygg();var bu=rcg(wgd);var vm=Math.sin(bu);var c=Math.cos(bu);this.pz[ggg]=c;this.pz[igg]=vm;this.pz[ogg]=-vm;this.pz[qgg]=c;};wgg.prototype.eig=function(wgd){pz.ygg();var bu=rcg(wgd);var vm=Math.sin(bu);var c=Math.cos(bu);this.pz[lgg]=c;this.pz[mgg]=-vm;this.pz[pgg]=vm;this.pz[qgg]=c;};function bid(){this.x=0;this.y=0;this.w=0;this.h=0;this.XOffset=0;
this.YOffset=0;this.CropWidth=0;this.CropHeight=0;this.ow=0;this.oh=0;this.tp=0;this.qz=cgg;}function cgg(kpe){this.x=kpe.x;this.y=kpe.y;this.w=kpe.w;this.h=kpe.h;this.XOffset=kpe.XOffset;this.YOffset=kpe.YOffset;this.CropWidth=kpe.CropWidth;this.CropHeight=kpe.CropHeight;this.ow=kpe.ow;this.oh=kpe.oh;this.tp=kpe.tp;}function fig(){this.pName="";this.width=0;this.height=0;this.bboxLeft=0;this.bboxRight=0;this.bboxBottom=0;this.bboxTop=0;this.transparent=0;this.smooth=0;this.preload=0;this.bboxMode=0;
this.colCheck=0;this.xOrigin=0;this.yOrigin=0;this.gig=[];}function hig(){this.pName="<object>";this.spriteIndex=0;this.visible=true;this.solid=true;this.depth=0;this.persistent=false;this.parent=-1;this.spritemask=false;}function iig(){this.x=0;this.y=0;this.index=0;this.id=0;this.pCode=null;}function jig(){this.x=0;this.y=0;this.index=0;this.xo=0;this.yo=0;this.w=0;this.h=0;this.depth=0;this.id=0;}function kig(){this.visible=false;this.xview=0;this.yview=0;this.wview=0;this.hview=0;this.xport=0;this.yport=0;
this.wport=0;this.hport=0;this.hborder=0;this.vborder=0;this.hspeed=0;this.vspeed=0;this.index=0;}function lig(){this.visible=false;this.foreground=0;this.index=0;this.x=0;this.y=0;this.mig=0;this.nig=0;this.oig=0;this.pig=0;this.stretch=0;}function qig(){this.pName="<room>";this.pCaption="Game Maker Room";this.width=640;this.height=480;this.speed=30;this.persistent=false;this.colour=0;this.showColour=false;this.pCode=null;this.enableViews=false;this.pInstances=[];this.rig=[];this.agf=[];this.sig=[];
}function tig(){this.GMObjects=[];this.GMRooms=[];this.Textures=[];this.Sprites=[];}function execute_string(){qyc("execute_string()");}function execute_file(){qyc("execute_file()");}function show_info(){qyc("show_info()");}function load_info(uig){qyc("load_info()");}function script_exists(qfe){qyc("script_exists()");}function script_get_name(qfe){qyc("script_get_name()");}function script_get_text(qfe){qyc("script_get_text()");}function game_save(name){qyc("game_save()");}function game_load(name){qyc("game_load()");
}function splash_show_video(uig,loop){qyc("splash_show_video()");}function splash_show_text(uig,vig){qyc("splash_show_text()");}function splash_show_image(uig,vig){qyc("splash_show_image()");}function splash_show_web(wig,vig){qyc("splash_show_web()");}function splash_set_main(xig){qyc("splash_set_main()");}function splash_set_scale(scale){qyc("splash_set_scale()");}function splash_set_cursor(yig){qyc("splash_set_cursor()");}function splash_set_color(brd){qyc("splash_set_color()");}function splash_set_caption(zig){
qyc("splash_set_caption()");}function splash_set_fullscreen(ohd){qyc("splash_set_fullscreen()");}function splash_set_border(ajg){qyc("splash_set_border()");}function splash_set_size(w,h){qyc("splash_set_size()");}function splash_set_position(x,y){qyc("splash_set_position()");}function splash_set_adapt(bjg){qyc("splash_set_adapt()");}function splash_set_top(top){qyc("splash_set_top()");}function splash_set_interrupt(cjg){qyc("splash_set_interrupt()");}function splash_set_stop_key(djg){qyc("splash_set_stop_key()");
}function splash_set_stop_mouse(djg){qyc("splash_set_stop_mouse()");}function splash_set_close_button(ejg){qyc("splash_set_close_button()");}function screen_redraw(){qyc("screen_redraw()");}function screen_refresh(){qyc("screen_refresh()");}function set_automatic_draw(value){qyc("set_automatic_draw()");}function set_synchronization(value){qyc("set_synchronization()");}function screen_wait_vsync(){qyc("screen_wait_vsync()");}function window_set_region_size(w,h,fjg){qyc("window_set_region_size()");}function window_get_region_width(){
qyc("window_get_region_width()");}function window_get_region_height(){qyc("window_get_region_height()");}function screen_save(uig){djd("screen_save()");}function screen_save_part(uig,x,y,w,h){djd("screen_save_part()");}function transition_define(kind,name){djd("transition_define()");}function transition_exists(kind){djd("transition_exists()");}function display_get_width(){qyc("display_get_width")};function display_get_height(){qyc("display_get_height()");}function display_get_colordepth(){qyc("display_get_colordepth()");
}function display_get_frequency(){qyc("display_get_frequency()");}function display_set_size(w,h){qyc("display_set_size()");}function display_set_colordepth(gjg){qyc("display_set_colordepth()");}function display_set_frequency(hjg){qyc("display_set_frequency()");}function display_set_all(w,h,hjg,gjg){qyc("display_set_all()");}function display_test_all(w,h,hjg,gjg){qyc("display_test_all()");}function display_reset(ijg){qyc("display_reset()");}function display_mouse_set(x,y){qyc("display_mouse_set()");}function clipboard_has_text(){
djd("clipboard_has_text()");}function clipboard_get_text(){djd("clipboard_get_text()");}function clipboard_set_text(xad){djd("clipboard_set_text()");}function set_program_priority(jjg){djd("set_program_priority()");}function joystick_exists(id){return false;}function joystick_name(id){qyc("joystick_name")};function joystick_axes(id){qyc("joystick_axes()");}function joystick_buttons(id){qyc("joystick_buttons()");}function joystick_has_pov(id){qyc("joystick_has_pov()");}function joystick_direction(id){qyc("joystick_direction()");
}function joystick_check_button(id,upd){qyc("joystick_check_button()");}function joystick_xpos(id){qyc("joystick_xpos()");}function joystick_ypos(id){qyc("joystick_ypos()");}function joystick_zpos(id){qyc("joystick_zpos()");}function joystick_rpos(id){qyc("joystick_rpos()");}function joystick_upos(id){qyc("joystick_upos()");}function joystick_vpos(id){qyc("joystick_vpos()");}function joystick_pov(id){qyc("joystick_pov()");}function io_handle(){qyc("io_handle()");}function mouse_wait(){qyc("mouse_wait()");
}function keyboard_wait(){qyc("keyboard_wait()");}function keyboard_get_numlock(){qyc("keyboard_get_numlock()");}function keyboard_set_numlock(kjg){qyc("keyboard_set_numlock()");}function background_save(qfe,uig){qyc("background_save()");}function ljg(qfe,uig){qyc("sprite_save_strip()");}function object_add(){qyc("object_add()");}function object_delete(qfe){qyc("object_delete()");}function object_event_add(qfe,mjg,njg,ojg){qyc("object_event_add()");}function object_event_clear(qfe,mjg,njg){qyc("object_event_clear()");
}function part_changer_create(mef){qyc("part_changer_create()");}function part_changer_destroy(mef,kid){qyc("part_changer_destroy()");}function part_changer_destroy_all(mef){qyc("part_changer_destroy_all()");}function part_changer_exists(mef,kid){qyc("part_changer_exists()");}function part_changer_clear(mef,kid){qyc("part_changer_clear()");}function part_changer_region(mef,kid,hfd,ifd,jfd,kfd,ndd){qyc("part_changer_region()");}function part_changer_types(mef,kid,pjg,qjg){qyc("part_changer_types()");}function part_changer_kind(mef,
kid,sgd){qyc("part_changer_kind()");}function part_deflector_create(fff){qyc("part_deflector_create()");}function part_deflector_destroy(fff,qfe){qyc("part_deflector_destroy()");}function part_deflector_destroy_all(fff){qyc("part_deflector_destroy_all()");}function part_deflector_exists(fff,qfe){qyc("part_deflector_exists()");}function part_deflector_clear(fff,qfe){qyc("part_deflector_clear()");}function part_deflector_region(fff,qfe,zce,ade,bde,cde){qyc("part_deflector_region()");}function part_deflector_kind(fff,
qfe,kind){qyc("part_deflector_kind()");}function part_deflector_friction(fff,qfe,friction){qyc("part_deflector_friction()");}function part_destroyer_create(fff){qyc("part_destroyer_create()");}function part_destroyer_destroy(fff,qfe){qyc("part_destroyer_destroy()");}function part_destroyer_destroy_all(fff){qyc("part_destroyer_destroy_all()");}function part_destroyer_exists(fff,qfe){qyc("part_destroyer_exists()");}function part_destroyer_clear(fff,qfe){qyc("part_destroyer_clear()");}function part_destroyer_region(fff,
qfe,zce,ade,bde,cde,qw){qyc("part_destroyer_region()");}function part_attractor_create(fff){qyc("part_attractor_create()");}function part_attractor_destroy(fff,qfe){qyc("part_attractor_destroy()");}function part_attractor_destroy_all(fff){qyc("part_attractor_destroy_all()");}function part_attractor_exists(fff,qfe){qyc("part_attractor_exists()");}function part_attractor_clear(fff,qfe){qyc("part_attractor_clear()");}function part_attractor_position(fff,qfe,x,y){qyc("part_attractor_position()");}function part_attractor_force(fff,
qfe,xqb,ot,kind,rjg){qyc("part_attractor_force()");}function execute_program(sjg,acd,tjg){qyc("execute_program()");}function execute_shell(sjg,acd){qyc("execute_shell()");}var secure_mode=true;function registry_write_string(name,xad){qyc("registry_write_string()");}function registry_write_real(name,x){qyc("registry_write_real()");}function registry_read_string(name){qyc("registry_read_string()");}function registry_read_real(name){qyc("registry_read_real()");}function registry_exists(name){qyc("registry_exists()");
}function registry_write_string_ext(dt,name,xad){qyc("registry_write_string_ext()");}function registry_write_real_ext(dt,name,x){qyc("registry_write_real_ext()");}function registry_read_string_ext(dt,name){qyc("registry_read_string_ext()");}function registry_read_real_ext(dt,name){qyc("registry_read_real_ext()");}function registry_exists_ext(dt,name){qyc("registry_exists_ext()");}function registry_set_root(njb){qyc("registry_set_root()");}function message_text_font(god,xfd,ktc,kqd){qyc("message_text_font()");
}function message_button(tyc){qyc("message_button()");}function message_button_font(god,xfd,ktc,kqd){qyc("message_button_font()");}function message_input_font(god,xfd,ktc,kqd){qyc("message_input_font()");}function ujg(){qyc("message_text_charset()");}function message_mouse_color(brd){qyc("message_mouse_color()");}function message_input_color(brd){qyc("message_input_color()");}function message_caption(ejg,xad){qyc("message_caption()");}function message_position(x,y){qyc("message_position()");}function message_size(w,
h){qyc("message_size()");}function show_menu(xad,nob){qyc("show_menu()");}function show_menu_pos(x,y,xad,nob){qyc("show_menu_pos()");}function get_color(vjg){qyc("get_color()");}function get_open_filename(lxb,uig){qyc("get_open_filename()");}function get_save_filename(lxb,uig){qyc("get_save_filename()");}function get_directory(wjg){qyc("get_directory()");}function get_directory_alt(xjg,njb){qyc("get_directory_alt()");}function show_error(xad,yjg){qyc("show_error()");}function sound_3d_set_sound_position(lad,
x,y,dmb){qyc("sound_3d_set_sound_position()");}function sound_3d_set_sound_velocity(lad,x,y,dmb){qyc("sound_3d_set_sound_velocity()");}function sound_3d_set_sound_distance(lad,zjg,akg){qyc("sound_3d_set_sound_distance()");}function sound_3d_set_sound_cone(lad,x,y,dmb,bkg,ckg,dkg){qyc("sound_3d_set_sound_cone()");}function sound_background_tempo(ekg){qyc("sound_background_tempo()");}function sound_pan(index,value){qyc("sound_pan()");}function sound_set_search_directory(rde){qyc("sound_set_search_directory()");
}function sound_effect_set(lad,fkg){qyc("sound_effect_set()");}function sound_effect_chorus(lad,gkg,depth,hkg,hjg,ikg,vig,jkg){qyc("sound_effect_chorus()");}function sound_effect_echo(lad,gkg,hkg,kkg,lkg,mkg){qyc("sound_effect_echo()");}function sound_effect_flanger(lad,gkg,depth,hkg,hjg,ikg,vig,jkg){qyc("sound_effect_flanger()");}function sound_effect_gargle(lad,nkg,ikg){qyc("sound_effect_gargle()");}function sound_effect_reverb(lad,okg,pkg,rad,hkc){qyc("sound_effect_reverb()");}function sound_effect_compressor(lad,
okg,qkg,rkg,skg,hkc,vig){qyc("sound_effect_compressor()");}function sound_effect_equalizer(lad,jy,tkg,okg){qyc("sound_effect_equalizer()");}function sound_discard(index){qyc("sound_discard()");}function sound_restore(index){qyc("sound_restore()");}function cd_init(){qyc("cd_init()");}function cd_present(){qyc("cd_present()");}function cd_number(){qyc("cd_number()");}function cd_playing(){qyc("cd_playing()");}function cd_paused(){qyc("cd_paused()");}function cd_track(){qyc("cd_track()");}function cd_length(){
qyc("cd_length()");}function cd_track_length(fad){qyc("cd_track_length()");}function cd_position(){qyc("cd_position()");}function cd_track_position(){qyc("cd_track_position()");}function cd_play(first,last){qyc("cd_play()");}function cd_stop(){qyc("cd_stop()");}function cd_pause(){qyc("cd_pause()");}function cd_resume(){qyc("cd_resume()");}function cd_set_position(tnb){qyc("cd_set_position()");}function cd_set_track_position(tnb){qyc("cd_set_track_position()");}function cd_open_door(){qyc("cd_open_door()");
}function cd_close_door(){qyc("cd_close_door()");}function MCI_command(xad){qyc("MCI_command()");}function sprite_get_texture(){qyc("sprite_get_texture()");}function background_get_texture(){qyc("background_get_texture()");}function draw_primitive_begin(kind){qyc("draw_primitive_begin()");}function draw_vertex(x,y){qyc("draw_vertex()");}function draw_vertex_color(x,y,brd,ndb){qyc("draw_vertex_color()");}function draw_primitive_end(){qyc("draw_primitive_end()");}function texture_preload(ukg){qyc("texture_preload()");
}function texture_set_priority(ukg,vkg){qyc("texture_set_priority()");}function texture_get_width(ukg){qyc("texture_get_width()");}function texture_get_height(ukg){qyc("texture_get_height()");}function draw_primitive_begin_texture(kind,ukg){qyc("draw_primitive_begin_texture()");}function draw_vertex_texture(x,y,wkg,xkg){qyc("draw_vertex_texture()");}function draw_vertex_texture_color(x,y,wkg,xkg,brd,ndb){qyc("draw_vertex_texture_color()");}function draw_primitive_end(){qyc("draw_primitive_end()");}function d3d_start(){
qyc("d3d_start()");}function d3d_end(){qyc("d3d_end()");}function d3d_set_hidden(enable){qyc("d3d_set_hidden()");}function d3d_set_perspective(enable){qyc("d3d_set_perspective()");}function d3d_model_create(){qyc("d3d_model_create()");}function d3d_model_destroy(qfe){qyc("d3d_model_destroy()");}function d3d_model_clear(qfe){qyc("d3d_model_clear()");}function d3d_model_save(qfe,uig){qyc("d3d_model_save()");}function d3d_model_load(qfe,uig){qyc("d3d_model_load()");}function d3d_model_draw(qfe,x,y,dmb,ukg){
qyc("d3d_model_draw()");}function d3d_model_primitive_begin(qfe,kind){qyc("d3d_model_primitive_begin()");}function d3d_model_vertex(qfe,x,y,dmb){qyc("d3d_model_vertex()");}function d3d_model_vertex_color(qfe,x,y,dmb,brd,ndb){qyc("d3d_model_vertex_color()");}function d3d_model_vertex_texture(qfe,x,y,dmb,wkg,xkg){qyc("d3d_model_vertex_texture()");}function d3d_model_vertex_texture_color(qfe,x,y,dmb,wkg,xkg,brd,ndb){qyc("d3d_model_vertex_texture_color()");}function d3d_model_vertex_normal(qfe,x,y,dmb,ykg,
zkg,alg){qyc("d3d_model_vertex_normal()");}function d3d_model_vertex_normal_color(qfe,x,y,dmb,ykg,zkg,alg,brd,ndb){qyc("d3d_model_vertex_normal_color()");}function d3d_model_vertex_normal_texture(qfe,x,y,dmb,ykg,zkg,alg,wkg,xkg){qyc("d3d_model_vertex_normal_texture()");}function d3d_model_vertex_normal_texture_color(qfe,x,y,dmb,ykg,zkg,alg,wkg,xkg,brd,ndb){qyc("d3d_model_vertex_normal_texture_color()");}function d3d_model_primitive_end(qfe){qyc("d3d_model_primitive_end()");}function d3d_model_block(qfe,
xdb,uvc,aae,ydb,vvc,blg,clg,dlg){qyc("d3d_model_block()");}function d3d_model_cylinder(qfe,xdb,uvc,aae,ydb,vvc,blg,clg,dlg,closed,xde){qyc("d3d_model_cylinder()");}function d3d_model_cone(qfe,xdb,uvc,aae,ydb,vvc,blg,clg,dlg,closed,xde){qyc("d3d_model_cone()");}function d3d_model_ellipsoid(qfe,xdb,uvc,aae,ydb,vvc,blg,clg,dlg,xde){qyc("d3d_model_ellipsoid()");}function d3d_model_wall(qfe,xdb,uvc,aae,ydb,vvc,blg,clg,dlg){qyc("d3d_model_wall()");}function d3d_model_floor(qfe,xdb,uvc,aae,ydb,vvc,blg,clg,dlg){
qyc("d3d_model_floor()");}function d3d_primitive_begin(kind){qyc("d3d_primitive_begin()");}function d3d_vertex(x,y,dmb){qyc("d3d_vertex()");}function d3d_vertex_color(x,y,dmb,brd,ndb){qyc("d3d_vertex_color()");}function d3d_primitive_end(){qyc("d3d_primitive_end()");}function d3d_primitive_begin_texture(kind,ukg){qyc("d3d_primitive_begin_texture()");}function d3d_vertex_texture(x,y,dmb,wkg,xkg){qyc("d3d_vertex_texture()");}function d3d_vertex_texture_color(x,y,dmb,wkg,xkg,brd,ndb){qyc("d3d_vertex_texture_color()");
}function d3d_vertex_normal(x,y,dmb,ykg,zkg,alg){qyc("d3d_vertex_normal()");}function d3d_vertex_normal_color(x,y,dmb,ykg,zkg,alg,brd,ndb){qyc("d3d_vertex_normal_color()");}function d3d_vertex_normal_texture(x,y,dmb,ykg,zkg,alg,wkg,xkg){qyc("d3d_vertex_normal_texture()");}function d3d_vertex_normal_texture_color(x,y,dmb,ykg,zkg,alg,wkg,xkg,brd,ndb){qyc("d3d_vertex_normal_texture_color()");}function d3d_primitive_end(){qyc("d3d_primitive_end()");}function d3d_set_culling(elg){qyc("d3d_set_culling()");}
function d3d_set_depth(depth){qyc("d3d_set_depth()");}function d3d_set_fog(enable,owb,flg,glg){qyc("d3d_set_fog()");}function d3d_draw_block(xdb,uvc,aae,ydb,vvc,blg,ukg,clg,dlg){qyc("d3d_draw_block()");}function d3d_draw_cylinder(xdb,uvc,aae,ydb,vvc,blg,ukg,clg,dlg,closed,xde){qyc("d3d_draw_cylinder()");}function d3d_draw_cone(xdb,uvc,aae,ydb,vvc,blg,ukg,clg,dlg,closed,xde){qyc("d3d_draw_cone()");}function d3d_draw_ellipsoid(xdb,uvc,aae,ydb,vvc,blg,ukg,clg,dlg,xde){qyc("d3d_draw_ellipsoid()");}function d3d_draw_wall(xdb,
uvc,aae,ydb,vvc,blg,ukg,clg,dlg){qyc("d3d_draw_wall()");}function d3d_draw_floor(xdb,uvc,aae,ydb,vvc,blg,ukg,clg,dlg){qyc("d3d_draw_floor()");}function d3d_set_projection(hlg,ilg,jlg,klg,llg,mlg,nlg,olg,plg){qyc("d3d_set_projection()");}function d3d_set_projection_ext(hlg,ilg,jlg,klg,llg,mlg,nlg,olg,plg,khb,qlg,rlg,slg){qyc("d3d_set_projection_ext()");}function d3d_set_projection_ortho(x,y,w,h,khb){qyc("d3d_set_projection_ortho()");}function d3d_set_projection_perspective(x,y,w,h,khb){qyc("d3d_set_projection_perspective()");
}function d3d_transform_set_identity(){qyc("d3d_transform_set_identity()");}function d3d_transform_set_translation(tlg,ulg,vlg){qyc("d3d_transform_set_translation()");}function d3d_transform_set_scaling(wlg,xlg,ylg){qyc("d3d_transform_set_scaling()");}function d3d_transform_set_rotation_x(khb){qyc("d3d_transform_set_rotation_x()");}function d3d_transform_set_rotation_y(khb){qyc("d3d_transform_set_rotation_y()");}function d3d_transform_set_rotation_z(khb){qyc("d3d_transform_set_rotation_z()");}function d3d_transform_set_rotation_axis(zlg,
amg,bmg,khb){qyc("d3d_transform_set_rotation_axis()");}function d3d_transform_add_translation(tlg,ulg,vlg){qyc("d3d_transform_add_translation()");}function d3d_transform_add_scaling(wlg,xlg,ylg){qyc("d3d_transform_add_scaling()");}function d3d_transform_add_rotation_x(khb){qyc("d3d_transform_add_rotation_x()");}function d3d_transform_add_rotation_y(khb){qyc("d3d_transform_add_rotation_y()");}function d3d_transform_add_rotation_z(khb){qyc("d3d_transform_add_rotation_axis()");}function d3d_transform_add_rotation_axis(zlg,
amg,bmg,khb){qyc("d3d_transform_add_rotation_z()");}function d3d_transform_stack_clear(){qyc("d3d_transform_stack_clear()");}function d3d_transform_stack_empty(){qyc("d3d_transform_stack_empty()");}function d3d_transform_stack_push(){qyc("d3d_transform_stack_push()");}function d3d_transform_stack_pop(){qyc("d3d_transform_stack_pop()");}function d3d_transform_stack_top(){qyc("d3d_transform_stack_top()");}function d3d_transform_stack_discard(){qyc("d3d_transform_stack_discard()");}function d3d_set_lighting(enable){
qyc("d3d_set_shading()");}function d3d_set_shading(smooth){qyc("d3d_set_shading()");}function d3d_light_define_direction(qfe,ljc,mjc,cmg,brd){qyc("d3d_light_define_direction()");}function d3d_light_define_point(qfe,x,y,dmb,dmg,brd){qyc("d3d_light_define_point()");}function d3d_light_enable(qfe,enable){qyc("d3d_light_enable()");}function emg(colour){qyc("d3d_light_define_ambient()");}function texture_preload(ukg){qyc("texture_preload()");}function texture_set_priority(ukg,vkg){qyc("texture_set_priority()");
}function texture_get_width(ukg){qyc("texture_get_width()");}function texture_get_height(ukg){qyc("texture_get_height()");}function texture_set_blending(yre){qyc("texture_set_blending()");}function texture_set_repeat(repeat){qyc("texture_set_repeat()");}function file_open_read(){qyc("file_open_read()");}function file_open_write(){qyc("file_open_write()");}function file_open_append(){qyc("file_open_append()");}function file_read_real(){qyc("file_read_real()");}function file_read_string(){qyc("file_read_string()");
}function file_readln(){qyc("file_readln()");}function file_write_real(){qyc("file_write_real()");}function file_write_string(){qyc("file_write_string()");}function file_writeln(){qyc("file_writeln()");}function file_eof(){qyc("file_eof()");}function fmg(){qyc("file_eoln()");}function file_close(){qyc("file_close()");}function fhg(gmg,hmg,jmg){if(fhg.arguments.length>0){if(fhg.arguments.length==3){this.lhg=gmg;this.nhg=hmg;this.ohg=jmg;}else {this.lhg=gmg.lhg;this.nhg=gmg.nhg;this.ohg=gmg.ohg;}}else {this.lhg=1.0;
this.nhg=0.0;this.ohg=0.0;}}fhg.prototype.kmg=function(wt){return this.lhg==wt.lhg&&this.nhg==wt.nhg&&this.ohg==wt.ohg;};fhg.prototype.xnb=function(wt){return new fhg(this.lhg+wt.lhg,this.nhg+wt.nhg,this.ohg+wt.ohg);};fhg.prototype.lmg=function(){return new fhg(-this.lhg,-this.nhg,-this.ohg);};fhg.prototype.ihg=function(wt){return new fhg(this.lhg-wt.lhg,this.nhg-wt.nhg,this.ohg-wt.ohg);};fhg.prototype.ocb=function(wt){return this.lhg*wt.lhg+this.nhg*wt.nhg+this.ohg*wt.ohg;};fhg.prototype.mge=function(pbb){
return new fhg(pbb*this.lhg,pbb*this.nhg,pbb*this.ohg);};fhg.prototype.jhg=function(){var kmd=1.0/Math.sqrt((this.lhg*this.lhg)+(this.nhg*this.nhg)+(this.ohg*this.ohg));this.lhg=this.lhg*kmd;this.nhg=this.nhg*kmd;this.ohg=this.ohg*kmd;};fhg.prototype.mmg=function(nmg){var x,y,dmb;x=(this.nhg*nmg.ohg)-(this.ohg*nmg.nhg);y=(this.ohg*nmg.lhg)-(this.lhg*nmg.ohg);dmb=(this.lhg*nmg.nhg)-(this.nhg*nmg.lhg);return new fhg(x,y,dmb);};fhg.prototype.khg=function(omg,pmg){this.lhg=(omg.nhg*pmg.ohg)-(omg.ohg*pmg.nhg);
this.nhg=(omg.ohg*pmg.lhg)-(omg.lhg*pmg.ohg);this.ohg=(omg.lhg*pmg.nhg)-(omg.nhg*pmg.lhg);};fhg.prototype.mhg=function(nmg){return(this.lhg*nmg.lhg)+(this.nhg*nmg.nhg)+(this.ohg*nmg.ohg);};function xge(qmg){var pzd=xge.arguments;var qzd=xge.arguments.length;this.pfc=[];this.zx=[];this.length=0;this.ay=0;if(qzd>0){for(var i=0;i<qzd;i++){this.pfc[i]=null;this.zx.push(i);}}}xge.prototype.ncg=function(){var fad;if(this.zx.length==0){fad=this.pfc.length;this.pfc[fad]=null;return fad;}return this.zx.pop();};
xge.prototype.xnb=function(rmg){var index=this.ncg();this.pfc[index]=rmg;this.ay++;this.length=this.pfc.length;return index;};xge.prototype.mvc=function(lae){var gxc=this.pfc[lae];if(gxc==undefined)gxc=null;return gxc;};xge.prototype.zwc=function(smg){for(var hfb=0;hfb<this.pfc.length;hfb++){if(this.pfc[hfb]==smg)return hfb;}return -1;};xge.prototype.tmg=function(smg){var index=zwc(smg);if(index<0)return;pfc[index]=null;zx.push(index);this.ay--;};xge.prototype.jvc=function(lae){if(lae<0||lae>=this.pfc.length)return;
this.pfc[lae]=null;this.zx.push(lae);this.ay--;};xge.prototype.oyb=function(){this.pfc=[];this.zx=[];this.ay=0;this.length=this.pfc.length;};xge.prototype.bo=function(jwc,pvc){if(jwc<0||jwc>=this.pfc.length)return;this.pfc[jwc]=pvc;};var umg=0,vmg=1,zoe=2,tjd=3,mne=4,vyd=5,wmg=0,nyd=1,lyd=-1;var xmg=[];var ymg=[];function zmg(pxc,ang){xmg.push(pxc);ymg.push(ang);}function hyd(pxc){var i=0;for(i=0;i<xmg.length;i++){if(xmg[i]==pxc){var ond=ymg[i];ymg.splice(i,1);xmg.splice(i,1);return ond;}}return undefined;
}function bng(){this.cng="";this.dng=-1;this.kyd=0;this.rxc=null;this.eng=umg;this.jyd=false;}function qjd(erd){var ond=hyd(erd.currentTarget);if(!ond)return;ond.jyd=true;ond.kyd=nyd;if(ond.eng==zoe){var une=ibd.mvc(ond.dng);if(une==null)return;if(!une.coe[0])return;if(!une.coe)return;if(!une.coe[0].cid)return;var fng=une.coe[0].cid;var w=fng.width;var h=fng.height;var gng=w/une.upd;var x=0;une.width=w;une.height=h;une.pwd.qwd=w;une.pwd.bottom=h;une.hng();for(var i=0;i<une.upd;i++){var aid=une.coe[i];aid.x=x;
aid.w=gng;aid.h=h;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.pu=[];aid.ay=0;aid.spe=4;x+=gng;}return;}if(ond.eng==tjd){var rhd=dcd.qhd(ond.dng);if(rhd==null)return;var aid=rhd.shd;var fng=aid.cid;aid.w=fng.width;aid.h=fng.height;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.pu=[];aid.ay=0;aid.spe=4;return;}if(ond.eng==mne){ond.rxc.complete=true;var lne=mad.mvc(ond.dng);lne.ing(nne[ond.cng]);return;}}function rjd(erd){var ond=hyd(erd.currentTarget);if(!ond)return;
ond.jyd=true;ond.kyd=lyd;}function beg(){this.pfc=new xge(5);};beg.prototype.yce=function(){return this.pfc;};beg.prototype.xnb=function(utc,kjd,mdd,jng){var ond=new bng();ond.dng=utc;ond.cng=kjd;ond.rxc=jng;ond.eng=mdd;this.pfc.xnb(ond);zmg(jng,ond);};beg.prototype.kng=function(){var mxc=ds_map_create();g_pBuiltIn.async_load=mxc;var pfc=this.pfc.pfc;for(var i=0;i<pfc.length;i++){var ond=pfc[i];if(ond!=null){if(ond.jyd){ds_map_clear(mxc);if(ond.eng==vyd){ds_map_add(mxc,"filename","");ds_map_add(mxc,"url",
ond.cng);ds_map_add(mxc,"result",ond.myd);ds_map_add(mxc,"http_status",ond.iyd);}else {ds_map_add(mxc,"url","");ds_map_add(mxc,"result","");ds_map_add(mxc,"http_status",0);ds_map_add(mxc,"filename",ond.cng);}ds_map_add(mxc,"id",ond.dng);ds_map_add(mxc,"status",ond.kyd);if(ond.eng==vmg)ypd.lng(jmf,0);else if(ond.eng==zoe)ypd.lng(jmf,0);else if(ond.eng==tjd)ypd.lng(jmf,0);else if(ond.eng==mne)ypd.lng(lmf,0);else if(ond.eng==vyd)ypd.lng(cof,0);this.pfc.jvc(i);}}}ds_map_destroy(mxc);g_pBuiltIn.async_load=-1;
};function zhd(){this.pName="";this.transparent=false;this.smooth=false;this.preload=false;this.shd=null;}function mng(nng){var nid=new zhd();nid.pName=nng.pName;if(nng.transparent!=undefined)nid.transparent=nng.transparent;if(nng.smooth!=undefined)nid.smooth=nng.smooth;if(nng.preload!=undefined)nid.preload=nng.preload;nid.shd=ong(nng.TPEntryIndex);return nid;};function png(nng){this.oyb();if(nng.visible!=undefined)this.visible=nng.visible;if(nng.foreground!=undefined)this.foreground=nng.foreground;if(nng.index!=undefined)this.index=nng.index;
if(nng.x!=undefined)this.x=nng.x;if(nng.y!=undefined)this.y=nng.y;if(nng.htiled!=undefined)this.mig=nng.htiled;if(nng.vtiled!=undefined)this.nig=nng.vtiled;if(nng.hspeed!=undefined)this.oig=nng.hspeed;if(nng.vspeed!=undefined)this.pig=nng.vspeed;if(nng.stretch!=undefined)this.stretch=nng.stretch;if(nng.ndb!=undefined)this.ndb=nng.ndb;if(nng.yre!=undefined)this.yre=nng.yre;}png.prototype.oyb=function(){this.visible=false;this.foreground=false;this.index=-1;this.x=0;this.y=0;this.mig=true;this.nig=true;
this.oig=0;this.pig=0;this.rme=1;this.sme=1;this.stretch=false;this.ndb=1.0;this.yre=0xffffff;};function wdg(){this.qng=[];this.ccd=[];this.length=0;}wdg.prototype.qhd=function(jwc){return this.qng[jwc];};wdg.prototype.mvc=function(jwc){return this.ccd[jwc];};wdg.prototype.lid=function(jwc){if(this.qng[jwc]!=undefined){this.qng[jwc]=undefined;}};wdg.prototype.oyb=function(){this.ccd=[];length=0;};wdg.prototype.bgg=function(nng){var rhd=null;if(nng!=null){rhd=mng(nng);}return this.did(rhd);};wdg.prototype.did=function(rng){
var i=this.qng.length;this.qng[i]=rng;this.length=i+1;return i;};wdg.prototype.rid=function(jwc,rng){this.qng[jwc]=rng;};wdg.prototype.xnb=function(nng){with(this){var rhd=null;if(nng!=null){rhd=new png(nng);}ccd[ccd.length]=rhd;}};function pdg(){this.room=0;this.room_first=0;this.room_last=0;this.transition_kind=0;this.transition_steps=0;this.score=0;this.lives=0;this.health=100;this.game_id=0;this.working_directory="/";this.temp_directory="/";this.program_directory="/";this.room_width=0;this.room_height=0;
this.room_caption="room";this.room_speed=30;this.room_persistent=false;this.background_color=0x00000000;this.background_showcolor=false;this.background_visible=false;this.background_foreground=false;this.background_index=0;this.background_x=0;this.background_y=0;this.background_width=0;this.background_height=0;this.background_htiled=0;this.background_vtiled=0;this.background_xscale=1.0;this.background_yscale=1.0;this.background_hspeed=0;this.background_vspeed=0;this.background_blend=0;this.background_alpha=1.0;
this.view_enabled=false;this.view_current=0;this.view_visible=0;this.view_xview=0;this.view_yview=0;this.view_wview=0;this.view_hview=0;this.view_xport=0;this.view_yport=0;this.view_wport=0;this.view_hport=0;this.view_angle=0;this.view_hborder=0;this.view_vborder=0;this.view_hspeed=0;this.view_vspeed=0;this.view_object=0;this.mouse_x=0;this.mouse_y=0;this.mouse_button=0;this.mouse_lastbutton=0;this.keyboard_key=0;this.keyboard_lastkey=0;this.keyboard_lastchar="";this.keyboard_string="";this.cursor_sprite=-1;
this.show_score=false;this.show_lives=false;this.show_health=false;this.caption_score="score";this.caption_lives="lives";this.caption_health="health";this.fps=0;this.current_time=0;this.current_year=0;this.current_month=0;this.current_day=0;this.current_weekday=0;this.current_hour=0;this.current_minute=0;this.current_second=0;this.event_type=0;this.event_number=0;this.event_object=0;this.event_action=0;this.secure_mode=0;this.error_occurred=0;this.error_last=0;this.gamemaker_registered=true;this.gamemaker_pro=true;
this.sng=8.2;this.async_load=-1;this.debug_mode=false;this.laf=[];this.laf["__view_visible__"]=new maf("__view_visible__",1);this.laf["__view_xview__"]=new maf("__view_xview__",1);this.laf["__view_yview__"]=new maf("__view_yview__",1);this.laf["__view_wview__"]=new maf("__view_wview__",1);this.laf["__view_hview__"]=new maf("__view_hview__",1);this.laf["__view_xport__"]=new maf("__view_xport__",1);this.laf["__view_yport__"]=new maf("__view_yport__",1);this.laf["__view_wport__"]=new maf("__view_wport__",1);
this.laf["__view_hport__"]=new maf("__view_hport__",1);this.laf["__view_angle__"]=new maf("__view_angle__",1);this.laf["__view_hborder__"]=new maf("__view_hborder__",1);this.laf["__view_vborder__"]=new maf("__view_vborder__",1);this.laf["__view_hspeed__"]=new maf("__view_hspeed__",1);this.laf["__view_vspeed__"]=new maf("__view_vspeed__",1);this.laf["__view_object__"]=new maf("__view_object__",1);this.laf["__view_surface_id__"]=new maf("__view_surface_id__",1);}pdg.prototype.tng=function(jwc){return wzc.mwd.mvc(jwc).id;
};pdg.prototype.get_instance_count=function(){return wzc.mwd.length;};pdg.prototype.set_view_enable=function(ung){wzc.pte=ung;};pdg.prototype.get_view_enable=function(){return wzc.pte;};pdg.prototype.get_browser_width=function(){return nte();};pdg.prototype.get_browser_height=function(){return ote();};pdg.prototype.get_os_type=function(){return YoYo_GetPlatform();};pdg.prototype.get_os_device=function(){return YoYo_GetDevice();};pdg.prototype.get_os_browser=function(){return cue();};pdg.prototype.get_os_version=function(){
return eue();};pdg.prototype.get_async_load=function(){return this.async_load;};pdg.prototype.set_current_room=function(fdd){room_goto(fdd);};pdg.prototype.get_current_room=function(){return wzc.id;};pdg.prototype.setbackground_color=function(pvc){wzc.vng=this.background_color=pvc;};pdg.prototype.getbackground_color=function(){return this.background_color;};pdg.prototype.wng=function(pvc){array_set_1D(g_pBuiltIn,"__view_visible__",0,~~pvc);};pdg.prototype.xng=function(pvc){array_set_1D(g_pBuiltIn,"__view_xview__",
0,~~pvc);};pdg.prototype.yng=function(pvc){array_set_1D(g_pBuiltIn,"__view_yview__",0,~~pvc);};pdg.prototype.zng=function(pvc){array_set_1D(g_pBuiltIn,"__view_wview__",0,~~pvc);};pdg.prototype.aog=function(pvc){array_set_1D(g_pBuiltIn,"__view_hview__",0,~~pvc);};pdg.prototype.bog=function(pvc){array_set_1D(g_pBuiltIn,"__view_xport__",0,~~pvc);};pdg.prototype.cog=function(pvc){array_set_1D(g_pBuiltIn,"__view_yport__",0,~~pvc);};pdg.prototype.dog=function(pvc){array_set_1D(g_pBuiltIn,"__view_wport__",
0,~~pvc);};pdg.prototype.eog=function(pvc){array_set_1D(g_pBuiltIn,"__view_hport__",0,~~pvc);};pdg.prototype.fog=function(pvc){array_set_1D(g_pBuiltIn,"__view_angle__",0,pvc);};pdg.prototype.gog=function(pvc){array_set_1D(g_pBuiltIn,"__view_hborder__",0,~~pvc);};pdg.prototype.hog=function(pvc){array_set_1D(g_pBuiltIn,"__view_vborder__",0,~~pvc);};pdg.prototype.iog=function(pvc){array_set_1D(g_pBuiltIn,"__view_hspeed__",0,~~pvc);};pdg.prototype.jog=function(pvc){array_set_1D(g_pBuiltIn,"__view_vspeed__",
0,~~pvc);};pdg.prototype.kog=function(pvc){array_set_1D(g_pBuiltIn,"__view_object__",0,~~pvc);};pdg.prototype.mog=function(pvc){array_set_1D(g_pBuiltIn,"__view_surface_id__",0,~~pvc);};pdg.prototype.nog=function(pvc){return array_get_1D(g_pBuiltIn,"__view_visible__",0);};pdg.prototype.oog=function(pvc){return array_get_1D(g_pBuiltIn,"__view_xview__",0);};pdg.prototype.pog=function(pvc){return array_get_1D(g_pBuiltIn,"__view_yview__",0);};pdg.prototype.qog=function(pvc){return array_get_1D(g_pBuiltIn,
"__view_wview__",0);};pdg.prototype.rog=function(pvc){return array_get_1D(g_pBuiltIn,"__view_hview__",0);};pdg.prototype.sog=function(pvc){return array_get_1D(g_pBuiltIn,"__view_xport__",0);};pdg.prototype.tog=function(pvc){return array_get_1D(g_pBuiltIn,"__view_yport__",0);};pdg.prototype.uog=function(pvc){return array_get_1D(g_pBuiltIn,"__view_wport__",0);};pdg.prototype.vog=function(pvc){return array_get_1D(g_pBuiltIn,"__view_hport__",0);};pdg.prototype.wog=function(pvc){return array_get_1D(g_pBuiltIn,
"__view_angle__",0);};pdg.prototype.xog=function(pvc){return array_get_1D(g_pBuiltIn,"__view_hborder__",0);};pdg.prototype.yog=function(pvc){return array_get_1D(g_pBuiltIn,"__view_vborder__",0);};pdg.prototype.zog=function(pvc){return array_get_1D(g_pBuiltIn,"__view_hspeed__",0);};pdg.prototype.apg=function(pvc){return array_get_1D(g_pBuiltIn,"__view_vspeed__",0);};pdg.prototype.bpg=function(pvc){return array_get_1D(g_pBuiltIn,"__view_object__",0);};pdg.prototype.cpg=function(pvc){return array_get_1D(g_pBuiltIn,
"__view_surface_id__",0);};pdg.prototype.dpg=function(pvc){array_set_1D(global,"__background_visible__",0,pvc);};pdg.prototype.epg=function(pvc){array_set_1D(global,"__background_foreground__",0,pvc);};pdg.prototype.fpg=function(pvc){array_set_1D(global,"__background_index__",0,pvc);};pdg.prototype.gpg=function(pvc){array_set_1D(global,"__background_x__",0,~~pvc);};pdg.prototype.hpg=function(pvc){array_set_1D(global,"__background_y__",0,~~pvc);};pdg.prototype.ipg=function(pvc){array_set_1D(global,
"__background_width__",0,~~pvc);};pdg.prototype.jpg=function(pvc){array_set_1D(global,"__background_height__",0,~~pvc);};pdg.prototype.kpg=function(pvc){array_set_1D(global,"__background_htiled__",0,pvc);};pdg.prototype.lpg=function(pvc){array_set_1D(global,"__background_vtiled__",0,pvc);};pdg.prototype.mpg=function(pvc){array_set_1D(global,"__background_xscale__",0,pvc);};pdg.prototype.npg=function(pvc){array_set_1D(global,"__background_yscale__",0,pvc);};pdg.prototype.opg=function(pvc){array_set_1D(global,
"__background_hspeed__",0,pvc);};pdg.prototype.ppg=function(pvc){array_set_1D(global,"__background_vspeed__",0,pvc);};pdg.prototype.qpg=function(pvc){array_set_1D(global,"__background_blend__",0,pvc&0xffffff);};pdg.prototype.setbackground_showcolor=function(pvc){wzc.rpg=pvc;};pdg.prototype.getbackground_showcolor=function(pvc){return wzc.rpg;};pdg.prototype.spg=function(pvc){if(pvc<0)pvc=0;if(pvc>1)pvc=hfb;array_set_1D(global,"__background_alpha__",0,pvc);};pdg.prototype.tpg=function(){array_get_1D(global,
"__background_visible__",0);};pdg.prototype.upg=function(){array_get_1D(global,"__background_foreground__",0);};pdg.prototype.vpg=function(){array_get_1D(global,"__background_index__",0);};pdg.prototype.wpg=function(){array_get_1D(global,"__background_x__",0);};pdg.prototype.xpg=function(){array_get_1D(global,"__background_y__",0);};pdg.prototype.ypg=function(){array_get_1D(global,"__background_width__",0);};pdg.prototype.zpg=function(){array_get_1D(global,"__background_height__",0);};pdg.prototype.aqg=function(){
array_get_1D(global,"__background_htiled__",0);};pdg.prototype.bqg=function(){array_get_1D(global,"__background_vtiled__",0);};pdg.prototype.cqg=function(){array_get_1D(global,"__background_xscale__",0);};pdg.prototype.dqg=function(){array_get_1D(global,"__background_yscale__",0);};pdg.prototype.eqg=function(){array_get_1D(global,"__background_hspeed__",0);};pdg.prototype.fqg=function(){array_get_1D(global,"__background_vspeed__",0);};pdg.prototype.gqg=function(){array_get_1D(global,"__background_blend__",
0);};pdg.prototype.hqg=function(){array_get_1D(global,"__background_alpha__",0);};pdg.prototype.set_room_speed=function(pvc){return wzc.iqg(pvc);};pdg.prototype.set_room_caption=function(pvc){return wzc.jqg(pvc);};pdg.prototype.set_room_width=function(pvc){return wzc.kqg(pvc);};pdg.prototype.set_room_height=function(pvc){return wzc.lqg(pvc);};pdg.prototype.mqg=function(pvc){return wzc.nqg(pvc);};pdg.prototype.set_lives_function=function(bbd){var cbd=this.lives;this.lives=zyc(bbd);if((cbd>0)&&(this.lives<=0)){
dbd.yzc(ebd,0);}};pdg.prototype.set_health_function=function(kbd){var lbd=0.0;lbd=this.health;this.health=kbd;if((lbd>0)&&(this.health<=0)){dbd.yzc(wkf,0);}};pdg.prototype.gu=function(oqg){for(var hh in oqg){var qg=oqg[hh];this[hh]=qg;}};var pqg=0;var qqg=1;var rqg=2;var sqg=3;var tqg=4;var uqg=5;var vqg=6;var wqg=7;var xqg=8;var yqg=9;var zqg=10;var arg=11;var brg=12;var crg=13;var drg=14;function erg(){this.frg=[];this.oz();}erg.prototype.oz=function(jwc,grg){this.frg.length=0;this.hrg=[];this.hrg[0]=1;this.hrg[1]=1;
this.irg=undefined;};erg.prototype.jrg=function(jwc,grg){if(this.hrg[jwc]==grg)return;this.hrg[jwc]=grg;this.frg.push(qqg);this.frg.push(grg);};erg.prototype.krg=function(lrg){if(this.irg==lrg)return;this.irg=lrg;this.frg.push(arg);this.frg.push(lrg);};erg.prototype.mrg=function(nrg,org){this.frg.push(rqg);this.frg.push(nrg);this.frg.push(org);};erg.prototype.prg=function(nrg,org){this.frg.push(sqg);this.frg.push(nrg);this.frg.push(org);};erg.prototype.qrg=function(nrg,org){this.frg.push(tqg);this.frg.push(nrg);
this.frg.push(org);};erg.prototype.rrg=function(nrg,org){this.frg.push(uqg);this.frg.push(nrg);this.frg.push(org);};erg.prototype.srg=function(nrg,org){this.frg.push(vqg);this.frg.push(nrg);this.frg.push(org);};erg.prototype.trg=function(nrg,org){this.frg.push(wqg);this.frg.push(nrg);this.frg.push(org);};erg.prototype.urg=function(xgg){this.frg.push(xqg);var vrg=new wgg(xgg);this.frg.push(vrg);};erg.prototype.wrg=function(xgg){this.frg.push(yqg);var vrg=new wgg(xgg);this.frg.push(vrg);};erg.prototype.xrg=function(vtc,
wtc,bvc,cvc){this.frg.push(zqg);this.frg.push(vtc);this.frg.push(wtc);this.frg.push(bvc);this.frg.push(cvc);};erg.prototype.yrg=function(aod,iad){this.frg.push(brg);this.frg.push(aod);this.frg.push(~~iad);};erg.prototype.zrg=function(asg){this.frg.push(crg);this.frg.push(asg);};erg.prototype.bsg=function(bjd,qsd,rsd,ssd){this.frg.push(drg);this.frg.push(bjd);this.frg.push(qsd);this.frg.push(rsd);this.frg.push(ssd);};erg.prototype.csg=function(){var i,frg,error;i=0;frg=this.frg;gre.useProgram(gre.dsg);
gre.enable(gre.BLEND);gre.blendFuncSeparate(gre.SRC_ALPHA,gre.ONE_MINUS_SRC_ALPHA,gre.ONE,gre.ONE);gre.activeTexture(gre.TEXTURE0);while(i<frg.length){switch(frg[i]){case xqg:gre.uniformMatrix4fv(gre.dsg.esg,false,frg[i+1].pz);i+=2;break;case yqg:gre.uniformMatrix4fv(gre.dsg.fsg,false,frg[i+1].pz);i+=2;break;case brg:var brd=frg[i+2];gre.clearColor((brd&0xff)/255.0,((brd>>8)&0xff)/255.0,((brd>>16)&0xff)/255.0,((brd>>24)&0xff)/255.0);gre.clear(frg[i+1]);i+=3;break;case zqg:{gre.viewport(frg[i+1],frg[i+2],
frg[i+3],frg[i+4]);i+=5;break;}case crg:{gre.bindFramebuffer(gre.FRAMEBUFFER,frg[i+1]);i+=2;break;}case drg:{gre.colorMask(frg[i+2],frg[i+3],frg[i+4],frg[i+1]);i+=5;break;}case qqg:var cid=frg[i+1];if(cid==null){cid=gre.gsg.cid;gre.activeTexture(gre.TEXTURE0);gre.bindTexture(gre.TEXTURE_2D,cid.hsg);gre.uniform1i(gre.dsg.isg,0);gre.uniform2f(gre.dsg.jsg,1.0/cid.evc,1.0/cid.fvc);}else {gre.activeTexture(gre.TEXTURE0);gre.bindTexture(gre.TEXTURE_2D,cid.hsg);gre.uniform1i(gre.dsg.isg,0);gre.uniform2f(gre.dsg.jsg,
1.0/cid.evc,1.0/cid.fvc);}i+=2;break;case arg:{var ksg=frg[i+1];if(ksg.lsg)ksg.msg();ksg.nsg=osg;gre.bindBuffer(gre.ARRAY_BUFFER,ksg.psg);gre.enableVertexAttribArray(gre.dsg.qsg);gre.vertexAttribPointer(gre.dsg.qsg,2,gre.SHORT,false,0,0);gre.bindBuffer(gre.ARRAY_BUFFER,ksg.rsg);gre.enableVertexAttribArray(gre.dsg.ssg);gre.vertexAttribPointer(gre.dsg.ssg,4,gre.UNSIGNED_BYTE,true,0,0);gre.bindBuffer(gre.ARRAY_BUFFER,ksg.tsg);gre.enableVertexAttribArray(gre.dsg.usg);gre.vertexAttribPointer(gre.dsg.usg,
2,gre.SHORT,false,0,0);i+=2;}break;case rqg:{gre.drawArrays(gre.TRIANGLES,frg[i+1],frg[i+2]);i+=3;break;}case sqg:{gre.drawArrays(gre.TRIANGLE_FAN,frg[i+1],frg[i+2]);i+=3;break;}case tqg:{gre.drawArrays(gre.TRIANGLE_STRIP,frg[i+1],frg[i+2]);i+=3;break;}case uqg:{gre.drawArrays(gre.LINES,frg[i+1],frg[i+2]);i+=3;break;}case vqg:{gre.drawArrays(gre.LINE_STRIP,frg[i+1],frg[i+2]);i+=3;break;}case wqg:{gre.drawArrays(gre.POINT,frg[i+1],frg[i+2]);i+=3;break;}}}error=gre.getError();};function npd(){this.opd=false;
this.spd=false;this.pName="";this.gpd="";this.size=12;this.bold=false;this.italic=false;this.first=32;this.last=127;this.ppd="";this.prop=false;this.vpd=0;this.antialias=0;this.charset=0;this.wpd=1;this.xpd=1;this.glyphs=null;this.shd=null;this.tpd=null;}npd.prototype.vsg=function(nng){this.pName=nng.pName;this.gpd=nng.fontname;this.size=nng.size;this.bold=nng.bold;this.italic=nng.italic;this.first=nng.first&0xffff;this.opd=false;this.antialias=0;this.charset=0;if(((nng.first>>16)&0xff)!==0)this.charset=(nng.first>>16)&0xff;
if(((nng.first>>24)&0xff)!==0)this.antialias=((nng.first>>24)&0xff)-1;this.last=nng.last;this.wpd=nng.scaleX;this.xpd=nng.scaleY;this.glyphs=[];var pbb=99999999;var hfb=-99999999;for(var wsg in nng.glyphs){var index=-2;xsg=nng.glyphs[wsg];if(xsg.c!=undefined)index=xsg.c.charCodeAt(0);else if(xsg.i!=undefined)index=xsg.i;this.glyphs[index]=xsg;if(index<pbb)pbb=index;if(index>hfb)hfb=index;}this.first=pbb;this.last=pbb;this.shd=ong(nng.TPageEntry);};npd.prototype.zod=function(fcd){if(this.opd){if(this.spd){
var c=fcd.charCodeAt(0);if(c<this.first||c>this.last)c=this.first;var aid=this.tpd.coe[c-this.first];return aid.CropHeight;}else {return this.size;}}else {return this.glyphs[this.first].h;}};npd.prototype.apd=function(xad){if(xad==null)return 0;if(this.opd){if(this.spd){var vad=0;var i=0;while(i<xad.length){var c=xad.charCodeAt(i++);if(c<this.first||c>this.last)c=this.first;var aid=this.tpd.coe[c-this.first];if(this.prop)vad+=aid.CropWidth;else vad+=aid.ow;}return vad;}else {ybc.font=this.ppd;var ysg=ybc.measureText(xad);
return ysg.width;}}else {var vad=0;var i=0;while(i<xad.length){var c=xad.charCodeAt(i++);var xsg=this.glyphs[c];if(!xsg)xsg=this.glyphs[this.first];vad=vad+xsg.shift;}return vad;}};npd.prototype.zsg=function(atg){if(this.opd){if(this.spd){var vad=0;if(atg<this.first||atg>this.last)atg=this.first;var aid=this.tpd.coe[atg-this.first];if(this.prop)vad+=aid.CropWidth;else vad+=aid.ow;return vad;}else {ybc.font=this.ppd;var ysg=ybc.measureText(String.fromCharCode(atg));return ysg.width;}}var xsg=this.glyphs[atg];if(xsg){
return xsg.shift;}else if(0x20>=this.first&&0x20<=this.last){return this.glyphs[0x20].shift;}else {return this.glyphs[this.first].shift;}};npd.prototype.btg=function(vtc,wtc,ctg,hcd,icd,wgd,iad,bjd){var dtg;var etg=this.shd;if(!etg.cid.complete)return;var kmd=ctg.length;iad=iad&0xffffff|((bjd*255)<<24);for(var i=0;i<kmd;i++){atg=ctg.charCodeAt(i);var xsg=this.glyphs[atg];if(!xsg)xsg=this.glyphs[0x20];var wlg=xsg.x;var xlg=xsg.y;var ftg=xsg.w;var gtg=xsg.h;if(Math.abs(wgd)<0.001){ybc.koe(etg,wlg+etg.x,xlg+etg.y,
ftg,gtg,vtc+xsg.offset,wtc,ftg*this.wpd*hcd,gtg*this.xpd*icd,iad);}else {ybc.koe(etg,wlg+etg.x,xlg+etg.y,ftg,gtg,vtc+xsg.offset,wtc,ftg,gtg,iad);}vtc+=this.zsg(atg);}};npd.prototype.htg=function(vtc,wtc,ctg,hcd,icd,wgd,iad,bjd){var dtg;var etg=qid[this.shd.tp];if(!etg.complete)return;ybc.globalAlpha=bjd;var kmd=ctg.length;iad=iad&0xffffff;if(iad!=0xffffff){dtg=itg(this.shd,iad);}wgd=ucg(wgd);if(Math.abs(wgd)>0.001){jtg(vtc,wtc,this.wpd*hcd,this.wpd*icd,-wgd);vtc=0;wtc=0;}for(var i=0;i<kmd;i++){atg=ctg.charCodeAt(i);
var xsg=this.glyphs[atg];if(!xsg)xsg=this.glyphs[0x20];var wlg=xsg.x;var xlg=xsg.y;var ftg=xsg.w;var gtg=xsg.h;if((iad!=0xffffff)&&(dtg!=null)){if(Math.abs(wgd)<0.001){ybc.koe(dtg,wlg,xlg,ftg,gtg,vtc+xsg.offset,wtc,ftg*this.wpd*hcd,gtg*this.xpd*icd);}else {ybc.koe(dtg,wlg,xlg,ftg,gtg,vtc+xsg.offset,wtc,ftg,gtg);}}else {if(Math.abs(wgd)<0.001){ybc.koe(etg,wlg+this.shd.x,xlg+this.shd.y,ftg,gtg,vtc+xsg.offset,wtc,ftg*this.wpd*hcd,gtg*this.xpd*icd);}else {ybc.koe(etg,wlg+this.shd.x,xlg+this.shd.y,ftg,gtg,vtc+xsg.offset,
wtc,ftg,gtg);}}vtc+=this.zsg(atg);}if(Math.abs(wgd)>0.001)ktg();};npd.prototype.ltg=function(vtc,wtc,ctg,hcd,icd,wgd,iad,bjd){if(this.tpd==null)return;ybc.globalAlpha=bjd;var kmd=ctg.length;iad=iad&0xffffff;var brd=iad|(tid*255)<<24;wgd=ucg(wgd);var vsd=Math.sin(wgd);var nzb=Math.cos(wgd);var mtg=vsd*hcd;var ntg=nzb*hcd;var otg=this.wpd*hcd;var ptg=this.xpd*icd;for(var i=0;i<kmd;i++){atg=ctg.charCodeAt(i);if(atg<this.first||atg>this.last){}else {var x=vtc;var y=wtc;var aid=this.tpd.coe[atg-this.first];var etg=qid[aid.tp];
if(etg.complete){var vud=aid.XOffset;var wud=aid.YOffset;if(this.prop)vud=0;if(iad!=0xffffff){var dtg;if(!gre){dtg=itg(aid,iad);}else {dtg=aid;}if(Math.abs(wgd)<0.001){ybc.koe(dtg,0,0,aid.CropWidth,aid.CropHeight,x+(vud*otg),y+(wud*ptg),aid.CropWidth*otg,aid.CropHeight*ptg);}else {jtg(x,y,otg,ptg,-wgd);ybc.koe(dtg,0,0,aid.CropWidth,aid.CropHeight,vud,wud,aid.CropWidth,aid.CropHeight);ktg();}}else {if(gre){etg=aid;}if(Math.abs(wgd)<0.001){ybc.koe(etg,aid.x,aid.y,aid.w,aid.h,x+(vud*otg),y+(wud*ptg),aid.CropWidth*otg,
aid.CropHeight*ptg);}else {jtg(x,y,otg,ptg,-wgd);ybc.koe(etg,aid.x,aid.y,aid.w,aid.h,vud,wud,aid.CropWidth,aid.CropHeight);ktg();}}}}var shift=this.zsg(atg);vtc=vtc+ntg*(shift+this.vpd);wtc=wtc-mtg*(shift+this.vpd);}};npd.prototype.qtg=function(vtc,wtc,ctg,hcd,icd,wgd,iad,bjd){if(this.tpd==null)return;ybc.globalAlpha=bjd;var kmd=ctg.length;iad=iad&0xffffff;var brd=iad|(tid*255)<<24;wgd=ucg(wgd);var vsd=Math.sin(wgd);var nzb=Math.cos(wgd);var mtg=vsd*hcd;var ntg=nzb*hcd;var otg=this.wpd*hcd;var ptg=this.xpd*icd;
for(var i=0;i<kmd;i++){atg=ctg.charCodeAt(i);if(atg<this.first||atg>this.last){}else {var x=vtc;var y=wtc;var aid=this.tpd.coe[atg-this.first];var etg=qid[aid.tp];if(etg.complete){var vud=aid.XOffset;var wud=aid.YOffset;if(this.prop)vud=0;if(Math.abs(wgd)<0.001){ybc.koe(aid,aid.x,aid.y,aid.w,aid.h,x+(vud*otg),y+(wud*ptg),aid.CropWidth*otg,aid.CropHeight*ptg,brd);}else {jtg(x,y,otg,ptg,-wgd);ybc.koe(aid,aid.x,aid.y,aid.w,aid.h,vud,wud,aid.CropWidth,aid.CropHeight,brd);ktg();}}}var shift=this.zsg(atg);vtc=vtc+ntg*(shift+this.vpd);
wtc=wtc-mtg*(shift+this.vpd);}};function ydg(){this.Fonts=[];this.length=0;this.yod=null;this.ood=0;this.nod=0;this.mod=0;var fpd=hpd("Arial",12,false,false,32,127,false);this.Fonts[-1]=fpd;nbg=-1;this.ood=nbg;}ydg.prototype.rtg=function(jwc){return this.Fonts[jwc];};ydg.prototype.oyb=function(){this.Fonts=[];length=0;};ydg.prototype.xnb=function(nng){var fpd=null;if(nng!=null){fpd=new npd();fpd.vsg(nng);}this.Fonts[this.Fonts.length]=fpd;return this.Fonts.length-1;};ydg.prototype.qpd=function(stg){this.Fonts[this.Fonts.length]=stg;
return this.Fonts.length-1;};ydg.prototype.wod=function(){if(this.ood>=0&&this.ood<=this.Fonts.length&&this.Fonts[this.ood]!=null){this.yod=this.Fonts[this.ood];}else {this.yod=this.Fonts[-1];}};ydg.prototype.mvc=function(utc){if(utc>=0&&utc<=this.Fonts.length&&this.Fonts[utc]){return this.Fonts[utc];}return null;};function ttg(xad){if(xad==null)return 0;var utg=xad;var vtg="";var i=0;var wtg=0;while(wtg<utg.length){var vm=utg[wtg];if(vm=='#'){if(i>0){if(utg[wtg-1]=='\\'){vtg=vtg.substring(0,vtg.length-1)+'#';
}else {vtg+=String.fromCharCode(0x0a);i++;}}}else {vtg+=vm;i++;}wtg++;}return vtg;}ydg.prototype.tmd=function(ctg,xtg){{var imd=String.fromCharCode(0x0a);if(ctg==null)return;if(xtg<0)xtg=10000000;rmd=[];var ytg=0;ctg=ttg(ctg);var kmd=ctg.length;var yhd=ctg;var flg=0;var glg=0;while(flg<kmd){var ztg=0;if(xtg==10000000){while(glg<kmd&&yhd[glg]!=imd){glg++;}rmd[ytg++]=yhd.substring(flg,glg);}else {while(glg<kmd){if(yhd[glg]!=" ")break;glg++;}while(glg<kmd&&ztg<xtg){c=yhd[glg];if(c==imd)break;ztg+=this.yod.zsg(c.charCodeAt(0));
glg++;}if(ztg>xtg){glg--;ztg-=this.yod.zsg(yhd.charCodeAt(glg));}if(yhd[glg]==imd){rmd[ytg++]=yhd.substring(flg,glg);}else {if(glg==flg)return rmd;if(glg!=kmd){if((yhd[glg]!=" ")||(yhd[glg]!=" "&&yhd[glg+1]!=" ")){while(glg>flg){if(yhd[--glg]==" ")break;}}}if(glg>0){while(yhd[glg-1]==" "){glg--;}}rmd[ytg++]=yhd.substring(flg,glg);}}flg=++glg;}return rmd;}};ydg.prototype.pod=function(xad,x,y,aug,xtg,wgd,hcd,icd){with(this){var rme=hcd;var sme=icd;var bug=0.0;var cug=0.0;var rmd=[];var i=0;wod();rmd=tmd(xad,
xtg);var dug=ucg(wgd);var vsd=Math.sin(dug);var nzb=Math.cos(dug);if(aug<0){aug=yod?yod.zod("M"):20;}var eug=vsd*sme*aug;var fug=nzb*sme*aug;if(nod==1){y=y-Math.round((rmd.length*fug)/2.0);x=x-Math.round((rmd.length*eug)/2.0);}if(nod==2){y=y-Math.round(rmd.length*fug);x=x-Math.round(rmd.length*eug);}if(!yod){ybc.fillStyle=uod;ybc.globalAlpha=tid;for(i=0;i<=rmd.length-1;i++){var gug=rmd[i];if(gug!=null){ybc.fillText(gug,x,y+13);y=y+fug;x=x+eug;}}}else {for(i=0;i<=rmd.length-1;i++){bug=0;cug=0;var gug=rmd[i];
if(gug!=null){if(mod==1)bug=-(rme*yod.apd(gug)/2);if(mod==2)bug=-(rme*yod.apd(gug));var qud=x+nzb*bug+vsd*cug;var rud=y-vsd*bug+nzb*cug;if(yod.opd){if(yod.spd){if(!gre){yod.ltg(qud,rud,gug,rme,sme,wgd,sod,tid);}else {yod.qtg(qud,rud,gug,rme,sme,wgd,sod,tid);}}else {hug(yod.ppd,gug,qud,rud+13,1,1,wgd,sod,tid);}}else {if(gre){yod.btg(qud,rud,gug,rme,sme,wgd,sod,tid);}else {yod.htg(qud,rud,gug,rme,sme,wgd,sod,tid);}}}y=y+fug;x=x+eug;}}}};ydg.prototype.cpd=function(xad,x,y,aug,xtg){with(this){var rmd=[];var i=0;
dpd=epd=0;wod();rmd=tmd(xad,xtg);if(aug<0)aug=yod.zod("M");for(i=0;i<=rmd.length-1;i++){var gug=rmd[i];if(gug!=null){if(dpd<yod.apd(gug))dpd=yod.apd(gug);}epd+=aug;}}};var iug;var qid;var jug=null;var ite=1024;var jte=768;var kug=1;var lte=1;var lsd=0;var msd=0;var nsd=0;var osd=0;var lug=0;var mug=0;var nug=0;var oug=0;var pug=[];var osg=0;var qug=0xffffff;var sid;var vid;var rug;var sug;var ktg;var gsd;var jtg;var ajd;function tug(){return ite;}function uug(){return jte;}function joe(vug){if(!vug)return;vug.wug=vug.transform;
vug.ksd=vug.setTransform;vug.isd=vug.save;vug.psd=vug.restore;vug.gtd=vug.fillRect;vug.ftd=vug.strokeRect;vug.ttd=vug.beginPath;vug.cvd=vug.arc;vug.wtd=vug.stroke;vug.xtd=vug.closePath;vug.lineWidth=vug.lineWidth;vug.utd=vug.moveTo;vug.vtd=vug.lineTo;vug.ytd=vug.fill;vug.koe=vug.drawImage;vug.xqe=vug.getImageData;vug.xug=vug.createImageData;vug.yug=vug.putImageData;vug.zug=vug.clip;vug.avg=vug.rect;}function rdg(bvg){qid=[];jug=null;lsd=0;msd=0;nsd=0;osd=0;lug=0;mug=0;nug=0;oug=0;pug=[];pug[0]=1;
pug[1]=0;pug[2]=0;pug[3]=0;pug[4]=1;pug[5]=0;if(!gre){if(wmf){sid=cvg;}else {sid=dvg;}vid=evg;ere=cjd;rug=fvg;sug=gvg;ktg=hvg;gsd=ivg;jtg=jvg;ajd=kvg;lvg=mvg;nvg=ovg;hug=pvg;qvg=rvg;svg=tvg;if(xmf){if(wmf){qug=0x1ffffff;sid=uvg;}else {sid=vvg;}vid=evg;ere=wvg;}}else {xvg();}rug(0,0,esd,fsd);sug(0,0,esd,fsd);}function mvg(){ybc.isd();}function ovg(){ybc.psd();}function yfg(yvg){jug=yvg;for(var i in yvg){var aid=yvg[i];aid.pu=[];aid.ay=0;aid.spe=4;aid.cqe=0;aid.ujd=null;aid.goe=null;aid.cid=qid[aid.tp];}}function zvg(){
this.nid=null;this.awg=0;}function itg(kpe,eid){var bwg=kpe.pu[eid];if(bwg!=null){bwg.awg=osg;return bwg.nid;}var cwg=-9999999999;bwg=null;dwg=-1;if(kpe.ay<kpe.spe){bwg=new zvg();kpe.ay++;}else {for(var i in kpe.pu){var ewg=kpe.pu[i];if(ewg!=null){var rbb=osg-ewg.awg;if(rbb>cwg){dwg=i;bwg=ewg;cwg=rbb;}}}}if(dwg>=0)kpe.pu[dwg]=null;kpe.pu[eid]=bwg;bwg.awg=osg;bwg.nid=fwg(kpe,eid);return bwg.nid;}function ong(jwc){return jug[jwc];}function hvg(){ybc.ksd(pug[0],pug[3],pug[1],pug[4],pug[2],pug[5]);}function ivg(iad){
ybc.isd();var jsd=[];jsd[0]=1;jsd[1]=0;jsd[2]=0;jsd[3]=1;jsd[4]=0;jsd[5]=0;ybc.ksd(jsd[0],jsd[1],jsd[2],jsd[3],jsd[4],jsd[5]);ybc.fillStyle=vod(iad|0xff000000);ybc.gtd(lsd,msd,nsd,osd);ybc.psd();}function fvg(gwg,hwg,iwg,jwg){lsd=gwg;msd=hwg;nsd=iwg;osd=jwg;}function kwg(vtc,wtc,bvc,cvc,wgd){var lwg=new fhg((vtc+bvc/2.0),(wtc+cvc/2.0),-16000.0);var mwg=new fhg((vtc+bvc/2.0),(wtc+cvc/2.0),0.0);var nwg=new fhg(Math.sin(-wgd*(Math.PI/180.0)),Math.cos(-wgd*(Math.PI/180.0)),0.0);wag.ahg(lwg,mwg,nwg);vag.yhg(bvc,
-cvc*obg,1.0,32000.0);}function jvg(vtc,wtc,ire,jre,wgd){var jsd=[];jsd[0]=Math.cos(wgd);jsd[3]=Math.sin(wgd);jsd[1]=-jsd[3];jsd[4]=jsd[0];jsd[0]*=ire;jsd[3]*=ire;jsd[1]*=jre;jsd[4]*=jre;jsd[2]=vtc;jsd[5]=wtc;ybc.wug(jsd[0],jsd[3],jsd[1],jsd[4],jsd[2],jsd[5]);}function gvg(owg,pwg,qwg,rwg,wgd){pug[0]=1;pug[1]=0;pug[2]=0;pug[3]=1;pug[4]=0;pug[5]=0;ybc.ksd(pug[0],pug[1],pug[2],pug[3],pug[4],pug[5]);ybc.ttd();ybc.avg(lsd,msd,nsd,osd);ybc.zug();var w=nsd/qwg;var h=osd/rwg;lug=owg;mug=pwg;nug=qwg;oug=rwg;
pug[0]=w;pug[1]=0;pug[2]=-(owg*w)+lsd;pug[3]=0;pug[4]=h;pug[5]=-(pwg*h)+msd;ktg();}function pjd(god){var i=qid.length;var cid=new Image();cid.src=god;qid[i]=cid;return i;}function pid(swg){var i=qid.length;qid[i]=swg;return i;}function rvg(){osg++;}function tvg(){}function oid(kpe){var goe=document.createElement(hoe);var xhd=goe.getContext('2d');joe(xhd);goe.width=kpe.w;goe.height=kpe.h;xhd.koe(kpe.cid,kpe.x,kpe.y,kpe.w,kpe.h,0,0,kpe.w,kpe.h);goe.complete=true;return goe;}function ppe(kpe){var goe=document.createElement(hoe);
var xhd=goe.getContext('2d');joe(xhd);var mpe=[];var ibe=kpe.ow*kpe.oh*4;for(var i=0;i<ibe;i++)mpe[i]=0;goe.width=kpe.w;goe.height=kpe.h;xhd.koe(kpe.cid,kpe.x,kpe.y,kpe.w,kpe.h,0,0,kpe.w,kpe.h);goe.complete=true;var data,yqe,twg,uwg;try{data=xhd.getImageData(0,0,kpe.w,kpe.h);}catch(wnd){return mpe;}vwg=data.data;var wwg=(kpe.XOffset+(kpe.YOffset*kpe.ow))*4;for(y=0;y<kpe.h;y++){var xwg=wwg;var ywg=(y*data.width)*4;var zwg=kpe.w*4;for(x=0;x<zwg;x++){mpe[xwg++]=vwg[ywg++];}wwg+=kpe.ow*4;}return mpe;}function cvg(kpe,
vtc,wtc,bjd){if(!kpe.cid)return;if(!kpe.cid.complete)return;if(kpe.goe==null)kpe.goe=oid(kpe);vtc+=kpe.XOffset;wtc+=kpe.YOffset;ybc.globalAlpha=bjd;ybc.koe(kpe.goe,~~vtc,~~wtc);}function uvg(kpe,vtc,wtc,bjd){cvg(kpe,vtc,wtc,bjd);}function dvg(kpe,vtc,wtc,bjd){if(!kpe.cid)return;if(!kpe.cid.complete)return;ybc.globalAlpha=bjd;ybc.koe(kpe.cid,~~kpe.x,~~kpe.y,kpe.w,kpe.h,Math.floor(vtc)+kpe.XOffset,Math.floor(wtc)+kpe.YOffset,kpe.CropWidth,kpe.CropHeight);}function vvg(kpe,vtc,wtc,bjd){dvg(kpe,vtc,wtc,
bjd)}function evg(kpe,vtc,wtc,axg,bxg,iad,bjd){var fng=kpe.cid;if(!fng)return;if(!fng.complete)return;var i=0;if(axg)i=1;if(bxg)i|=2;if(i==0){ybc.globalAlpha=bjd;ybc.koe(fng,kpe.x,kpe.y,kpe.w,kpe.h,vtc+kpe.XOffset,wtc+kpe.YOffset,kpe.CropWidth,kpe.CropHeight);return;}var w=kpe.ow;var h=kpe.oh;if(axg){w=(((((nqe.eme+(kpe.ow-1))/kpe.ow)&0xffffffff)+2)*kpe.ow);vtc=(((~~(lug/kpe.ow))*kpe.ow)+(~~vtc)%kpe.ow)-kpe.ow;}if(bxg){h=(((((nqe.fme+(kpe.oh-1))/kpe.oh)&0xffffffff)+2)*kpe.oh);wtc=(((~~(mug/kpe.oh))*kpe.oh)+(~~wtc)%kpe.oh)-kpe.oh;
}if((kpe.ujd!=null)&&(kpe.ujd.width<w||kpe.ujd.height<h)){kpe.ujd=null;kpe.vjd=0;}if((kpe.cqe!=i)||(!kpe.ujd)){kpe.cqe=i;var xy=document.createElement(hoe);var xhd=xy.getContext('2d');joe(xhd);xy.width=w;xy.height=h;ybc.globalAlpha=1;var ntc=w/kpe.ow;var otc=h/kpe.oh;for(var y=0;y<otc;y++){for(var x=0;x<ntc;x++){xhd.koe(fng,kpe.x,kpe.y,kpe.CropWidth,kpe.CropHeight,kpe.XOffset+(x*kpe.ow),kpe.YOffset+(y*kpe.oh),kpe.CropWidth,kpe.CropHeight);}}kpe.ujd=xy;}ybc.globalAlpha=bjd;ybc.koe(kpe.ujd,vtc,wtc);}function cjd(kpe,
eoe,foe,vtc,wtc,cxg,dxg,jcd,vfd,ncd,itd,jtd,bjd){if(!kpe.cid)return;if(!kpe.cid.complete)return;if((abs(cxg)<=0.0001)||(abs(dxg)<=0.0001)||(bjd<=0))return;vfd&=0xffffff;var vud=-(eoe-kpe.XOffset);var wud=-(foe-kpe.YOffset);vtc=~~vtc;wtc=~~wtc;ybc.globalAlpha=bjd;if(vfd!=qug){var dtg=itg(kpe,vfd);if(Math.abs(jcd)<0.001&&dxg==1&&cxg==1){ybc.koe(dtg,0,0,kpe.w,kpe.h,(vtc+(vud*cxg)),(wtc+(wud*dxg)),(kpe.CropWidth*cxg),(kpe.CropHeight*dxg));}else {jtg(vtc,wtc,cxg,dxg,-jcd);ybc.koe(dtg,0,0,kpe.w,kpe.h,vud,
wud,kpe.CropWidth,kpe.CropHeight);ktg();}}else {if(Math.abs(jcd)<0.001&&dxg==1&&cxg==1){if(kpe.goe==null)kpe.goe=oid(kpe);vtc+=vud;wtc+=wud;ybc.koe(kpe.goe,~~vtc,~~wtc);}else {jtg(vtc,wtc,cxg,dxg,-jcd);ybc.koe(kpe.cid,kpe.x,kpe.y,kpe.w,kpe.h,vud,wud,kpe.CropWidth,kpe.CropHeight);ktg();}}}function wvg(kpe,eoe,foe,vtc,wtc,cxg,dxg,jcd,vfd,ncd,itd,jtd,bjd){try{cjd(kpe.cid,eoe,foe,vtc,wtc,cxg,dxg,jcd,vfd,ncd,itd,jtd,bjd)}catch(wnd){hzc("error drawing image");}}function fwg(kpe,iad){var xy=document.createElement(hoe);
var xhd=xy.getContext('2d');joe(xhd);xy.width=kpe.w;xy.height=kpe.h;xhd.koe(kpe.cid,kpe.x,kpe.y,kpe.w,kpe.h,0,0,kpe.w,kpe.h);if(~~iad!=0xffffff){var data,yqe,twg,uwg;try{data=xhd.xqe(0,0,kpe.w,kpe.h);}catch(wnd){return xy;}yqe=data.data;exg=xhd.xug(kpe.w,kpe.h);uwg=exg.data;var lq=((iad>>16)&0xff)/255;var ard=((iad>>8)&0xff)/255;var jn=(iad&0xff)/255;var ztg=(data.height*data.width*4);for(var i=ztg-4;i>=00;i-=4){uwg[i]=(yqe[i]*lq)|0;uwg[i+1]=(yqe[i+1]*ard)|0;uwg[i+2]=(yqe[i+2]*jn)|0;uwg[i+3]=(yqe[i+3]);
}exg.data=uwg;xhd.yug(exg,0,0);}return xy;}function fxg(kpe,qvc,rvc,svc,tvc,rtd,std,pre,qre,bjd){var fng=kpe.cid;if(!fng)return;if(!fng.complete)return;ybc.globalAlpha=bjd;gxg(fng,qvc,rvc,svc,tvc,rtd,std,kpe.x,kpe.y,kpe.x+kpe.w,kpe.y,kpe.x+kpe.w,kpe.y+kpe.h);gxg(fng,rtd,std,pre,qre,qvc,rvc,kpe.x+kpe.w,kpe.y+kpe.h,kpe.x,kpe.y+kpe.h,kpe.x,kpe.y);}function gxg(agg,hxg,ixg,xdb,uvc,ydb,vvc,jxg,kxg,lxg,mxg,nxg,oxg){ybc.isd();ybc.ttd();ybc.utd(hxg,ixg);ybc.vtd(xdb,uvc);ybc.vtd(ydb,vvc);ybc.xtd();ybc.zug();
var hab=jxg*(oxg-mxg)-lxg*oxg+nxg*mxg+(lxg-nxg)*kxg;if(hab==0)return;var pxg=-(kxg*(ydb-xdb)-mxg*ydb+oxg*xdb+(mxg-oxg)*hxg)/hab;var qxg=(mxg*vvc+kxg*(uvc-vvc)-oxg*uvc+(oxg-mxg)*ixg)/hab;var rxg=(jxg*(ydb-xdb)-lxg*ydb+nxg*xdb+(lxg-nxg)*hxg)/hab;var sxg=-(lxg*vvc+jxg*(uvc-vvc)-nxg*uvc+(nxg-lxg)*ixg)/hab;var ljc=(jxg*(oxg*xdb-mxg*ydb)+kxg*(lxg*ydb-nxg*xdb)+(nxg*mxg-lxg*oxg)*hxg)/hab;var mjc=(jxg*(oxg*uvc-mxg*vvc)+kxg*(lxg*vvc-nxg*uvc)+(nxg*mxg-lxg*oxg)*ixg)/hab;ybc.wug(pxg,qxg,rxg,sxg,ljc,mjc);ybc.koe(agg,
0,0);ybc.psd();};function kvg(kpe,wid,xid,yid,zid,vtc,wtc,hcd,icd,ktc,bjd){if(!kpe)return;if(!kpe.cid)return;if(!kpe.cid.complete)return;ktc&=0xffffff;ybc.globalAlpha=tid;if(wid<kpe.XOffset){var txg=kpe.XOffset-wid;vtc+=txg;yid-=txg;wid=0;}else {wid-=kpe.XOffset;yid-=kpe.XOffset;}if(xid<kpe.YOffset){var txg=kpe.YOffset-xid;wtc+=txg;zid-=txg;xid=0;}else {xid-=kpe.YOffset;zid-=kpe.YOffset;}if(yid>(kpe.CropWidth-wid-kpe.XOffset))yid=kpe.CropWidth-wid-kpe.XOffset;if(zid>(kpe.CropHeight-xid-kpe.YOffset))zid=kpe.CropHeight-xid-kpe.YOffset;
if(yid<=0||zid<=0)return;vtc=~~vtc;wtc=~~wtc;if(ktc!=qug){var dtg=itg(kpe,ktc);ybc.koe(dtg,wid,xid,yid,zid,vtc,wtc,yid*hcd,zid*icd);return;}ybc.koe(kpe.cid,wid+kpe.x,xid+kpe.y,yid,zid,vtc,wtc,yid*hcd,zid*icd);}function uid(kpe,vtc,wtc,bvc,cvc,ktc,bjd){if(!kpe)return;if(!kpe.cid)return;if(!kpe.cid.complete)return;vtc=~~vtc;wtc=~~wtc;var dde=bvc/kpe.ow;var ede=cvc/kpe.oh;ere(kpe,0,0,vtc,wtc,dde,ede,0,ktc,ktc,ktc,ktc,bjd);}function ijd(kpe,wid,xid,yid,zid,vtc,wtc,hcd,icd,jcd,ejd,fjd,gjd,hjd,bjd){if(!kpe)return;
if(!kpe.cid)return;if(!kpe.cid.complete)return;if(wid<kpe.XOffset){var txg=kpe.XOffset-wid;vtc+=txg;yid-=txg;wid=0;}else {var txg=wid-kpe.XOffset;wid-=txg;yid-=txg;}if(xid<kpe.YOffset){var txg=kpe.YOffset-xid;wtc+=txg;zid-=txg;xid=0;}else {var txg=xid-kpe.YOffset;xid-=txg;zid-=txg;}if(yid>(kpe.CropWidth-wid-kpe.XOffset))yid=kpe.CropWidth-wid-kpe.XOffset;if(zid>(kpe.CropHeight-xid-kpe.YOffset))zid=kpe.CropHeight-xid-kpe.YOffset;if(yid<=0||zid<=0)return;nag.x=wid+kpe.x;nag.y=xid+kpe.y;nag.w=yid;nag.h=zid;
nag.XOffset=0;nag.YOffset=0;nag.CropWidth=nag.w;nag.CropHeight=nag.h;nag.ow=nag.w;nag.oh=nag.h;nag.tp=kpe.tp;nag.cid=kpe.cid;nag.pu=[];nag.ay=0;nag.spe=1;nag.cqe=0;nag.ujd=null;nag.goe=null;vtc=~~vtc;wtc=~~wtc;ere(nag,0,0,vtc,wtc,hcd,icd,jcd,ejd,fjd,gjd,hjd,bjd);}function jjd(uxg,vxg){if(gre)return;var xy=document.createElement(hoe);var xhd=xy.getContext('2d');joe(xhd);xy.width=uxg.w;xy.height=uxg.h;xhd.drawImage(vxg.cid,vxg.x,vxg.y,vxg.w,vxg.h,0,0,uxg.w,uxg.h);var wxg,xxg,yxg,zxg,ayg;try{xxg=xhd.getImageData(0,
0,uxg.w,uxg.h);ayg=uxg.cid.getContext('2d');joe(ayg);yxg=ayg.getImageData(uxg.x,uxg.y,uxg.w,uxg.h);}catch(wnd){return false;}wxg=xxg.data;zxg=yxg.data;var ztg=(yxg.height*yxg.width*4);for(var i=ztg-4;i>=00;i-=4){var c=~~((wxg[i]+wxg[i+1]+wxg[i+2])/3);zxg[i+3]=c;}yxg.data=zxg;ayg.putImageData(yxg,0,0);return true;}function pvg(lcd,fcd,vtc,wtc,hcd,icd,wgd,iad,bjd){ybc.globalAlpha=bjd;ybc.fillStyle=hid(iad,1.0);ybc.font=lcd;jtg(vtc,wtc,hcd,icd,-wgd);ybc.fillText(fcd,0,0);ktg();}var byg=0,cyg=0;function nvd(dyg){
this.ovd=false;this.yvd=[];this.eyg=dyg;this.fyg="";this.gyg=0;this.hyg=0;};function mvd(iyg,jyg){var ond=nnd(iyg,jyg);kyg=new nvd(iyg);kyg.fyg=ond;kyg.lyg();var ay=0;for(var i in kyg.yvd){ay++;break;}if(ay==0)return null;return kyg;}nvd.prototype.knd=function(){while((this.fyg.charCodeAt(this.gyg)!=0x0a)&&(this.fyg.charCodeAt(this.gyg)!=0x0d)&&(this.gyg<this.myg)){this.gyg++;}this.hyg++;this.gyg++;if(this.gyg>=this.myg)return;if((this.fyg.charCodeAt(this.gyg)==0x0a)&&(this.fyg.charCodeAt(this.gyg)==0x0d)){
this.gyg++;}};nvd.prototype.nyg=function(){with(this){if(this.gyg>=myg)return false;var c=fyg.charCodeAt(gyg);if(c==0x20||c==0x09||c==0x0a||c==0x0d||c==ord('#')||c==ord(';')){return true;}else {return false;}}};nvd.prototype.lnd=function(){with(this){while(nyg()&&(gyg<myg)){var c=fyg.charCodeAt(gyg);if(c=='#'||c==';'){knd();}else if(c==0x0a){hyg++;}gyg++;}if(gyg>=myg)return;}};nvd.prototype.oyg=function(){with(this){lnd();while((fyg.charAt(gyg)!='[')&&(gyg<myg)){gyg++;}if(gyg>=myg)return null;gyg++;var pyg=gyg;
while((fyg.charAt(gyg)!=']')&&(gyg<myg)){gyg++;}if(gyg>=myg)return null;var kmd=gyg-pyg;var xvd=[];xvd.qyg=fyg.substr(pyg,kmd);gyg++;return xvd;}};nvd.prototype.ryg=function(syg){with(this){lnd();if(gyg>=myg||fyg.charAt(gyg)=='[')return false;var pyg=gyg;var tyg=-1;while((fyg.charAt(gyg)!='=')&&(gyg<myg)){if(nyg()){if(tyg<0)tyg=gyg;}else {tyg=-1;}gyg++;}if(gyg>=myg)return false;if(tyg<0)tyg=gyg;var kmd=tyg-pyg;var vvd=fyg.substr(pyg,kmd);while((fyg.charAt(gyg)!='=')&&(gyg<myg)){gyg++;}if(gyg>=myg)return false;
gyg++;var uyg=hyg;lnd();if(uyg!=hyg)return false;pyg=gyg;var vyg=-1;var c=fyg.charCodeAt(gyg);while((c!=0x0a)&&(c!=0x0d)&&(c!=ord('#'))&&(c!=ord(';'))&&(gyg<myg)){if(c==0x20||c==0x09){if(vyg<0)vyg=gyg;}else {vyg=-1;}if(c==ord('\\'))gyg++;gyg++;c=fyg.charCodeAt(gyg);}if(vyg>=0){kmd=vyg-pyg;}else {kmd=gyg-pyg;}var wyg=fyg.substr(pyg,kmd);syg[vvd]=wyg;return true;}};nvd.prototype.lyg=function(){with(this){if(fyg==null)return false;myg=fyg.length;gyg=0;hyg=0;var xvd=oyg();if(xvd==null){fyg=null;return false;}yvd[xvd.qyg]=xvd;
while(gyg<myg){var hpb=ryg(xvd);if(!hpb){if(gyg<myg){if(fyg.charAt(gyg)=='['){xvd=oyg();if(xvd==null){fyg=null;return true;}yvd[xvd.qyg]=xvd;}}}}fyg=null;return true;}};nvd.prototype.wvd=function(xyg,yyg){with(this){var xvd=yvd[xyg];if(xvd!=null&&xvd!=undefined){var wyg=xvd[yyg];if(wyg!=undefined)return wyg;}return null;}};nvd.prototype.zyg=function(xyg,yyg,rvd){with(this){var vvd=wvd(xyg,yyg);if(vvd!=null){return parseInt(vvd,10);}else {return rvd;}}};nvd.prototype.tvd=function(xyg,yyg,rvd){with(this){var vvd=wvd(xyg,
yyg);if(vvd!=null){return parseFloat(vvd);}else {return rvd;}}};nvd.prototype.svd=function(xyg,yyg,rvd){with(this){var vvd=wvd(xyg,yyg);if(vvd!=null){return vvd;}else {return rvd;}}};nvd.prototype.uvd=function(xyg,yyg,azg){with(this){ovd=true;var xvd=yvd[xyg];if(xvd==null||xvd==undefined){xvd=[];xvd.qyg=xyg;yvd[xvd.qyg]=xvd;}xvd[yyg]=azg;;return true;}};nvd.prototype.zvd=function(xyg,yyg){with(this){var xvd=yvd[xyg];if(xvd==null||xvd==undefined)return false;var vvd=xvd[yyg];if(vvd==null||vvd==undefined)return false;
ovd=true;xvd[yyg]=null;return true;}};nvd.prototype.awd=function(xyg){with(this){var xvd=yvd[xyg];if(xvd==null||xvd==undefined)return false;ovd=true;yvd[xyg]=null;return true;}};nvd.prototype.pvd=function(){with(this){if(ovd==false)return true;var ond="";var imd=chr(0x0d)+chr(0x0a);for(var bzg in yvd){ond=ond+"["+bzg+"]"+imd;var xvd=yvd[bzg];for(var dt in xvd){if(dt!="__m_pIniFileName__"){var wyg=xvd[dt];ond=ond+dt+"="+wyg+imd;}}}rnd(eyg,ond);ovd=false;return true;}};function czg(hhd){try{var dzg=new XMLHttpRequest();
dzg.open('HEAD',hhd,false);dzg.send();cyg=dzg.status;return dzg.status!=404;}catch(obb){return false;}}function ezg(fzg,gzg){try{var lhg=!window.XMLHttpRequest?new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();lhg.open(gzg?'PUT':'GET',fzg,false);lhg.setRequestHeader('Content-Type','text/html');lhg.send(gzg?gzg:'');cyg=lhg.status;return lhg.responseText;}catch(obb){return null;}}function hzg(fzg){try{var lhg=!window.XMLHttpRequest?new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();lhg.open("DELETE",
fzg,false);lhg.send('');cyg=lhg.status;return lhg.status;}catch(obb){return false;}}function rnd(kjd,veg){if('localStorage' in window&&window['localStorage']!==null){try{localStorage["GameMaker."+kjd]=veg;}catch(wnd){return false;}}}function nnd(iyg,jyg){var ond=null;if(jyg){if((iyg.substring(0,7)=="http://")||(iyg.substring(0,8)=="https://"))return;if('localStorage' in window&&window['localStorage']!==null){try{ond=localStorage["GameMaker."+iyg];}catch(wnd){return null;}if((ond==undefined)||(ond==null))return null;
}}else {var mjd;if((iyg.substring(0,7)=="http://")||(iyg.substring(0,8)=="https://")){mjd=iyg;}else {mjd=njd+iyg;}ond=ezg(mjd,false);if((ond==null)||(ond==undefined))return null;if(cyg==404)return null;}return ond;}function vnd(iyg,jyg){var ond=null;if(jyg){if('localStorage' in window&&window['localStorage']!==null){try{if(localStorage["GameMaker."+iyg])return true;return false;}catch(wnd){return false;}}}else {return czg(njd+iyg);}}function izg(kjd){var jzg=new XMLHttpRequest();jzg.open("GET",kjd,false);jzg.send(null);
xy=jzg.kzg;if(xy){var lzg=new Uint8Array(xy);for(var i=0;i<lzg.mzg;i++){}}}function nzg(kjd){var ozg=new XMLHttpRequest();ozg.open('GET',kjd,false);ozg.pzg('text/plain; charset=x-user-defined');ozg.send(null);if(ozg.status!=200)return '';return ozg.responseText;}var qzg=new Array("StepEvent","DrawEvent","LeftButtonPressed","RightButtonPressed","NoButtonPressed");var rzg=new ooe(0,0,0,0);var szg=null;var tzg=-1;var uzg=-1;function lcg(){this.laf=[];}function vwd(qge,rge,utc,vzg,wzg){this.laf=[];this.x=qge;this.y=rge;
this.xprevious=qge;this.yprevious=rge;this.xstart=qge;this.ystart=rge;this.hspeed=0;this.vspeed=0;this.direction=0;this.speed=0;this.friction=0;this.gravity=0;this.gravity_direction=270;this.object_index=vzg;this.id=utc;this.stb=true;for(var i=0;i<=(jhf-1);i++){array_set_1D(this,"__alarm__",i,-1);}this.solid=true;this.visible=true;this.persistent=false;this.depth=0;this.pwd=new ooe(0,0,0,0);this.sprite_index=0;this.image_index=0;this.image_number=0;this.sprite_width=0;this.sprite_height=0;this.sprite_xoffset=0;
this.sprite_yoffset=0;this.image_xscale=1;this.image_yscale=1;this.image_angle=0;this.image_alpha=1;this.image_blend=0xffffff;this.image_speed=1;this.mask_index=-1;this.path_index=-1;this.path_position=0;this.path_positionprevious=0;this.path_speed=0;this.path_scale=1;this.path_orientation=0;this.path_endaction=0;this.path_end=0;this.xzg=0;this.yzg=0;this.timeline_index=-1;this.timeline_position=0;this.timeline_speed=1;this.fhd=false;this.fhf=false;this.zzg=-1;this.aah=false;this.fwd=false;this.bah=null;
this.cah=false;this.nwd=true;this.ygf=false;this.srd=null;this.axd(vzg,wzg,true);this.sprite_index=this.srd.bxd;var cxd=ibd.mvc(this.sprite_index);if(cxd){this.pwd.left=cxd.pwd.left;this.pwd.qwd=cxd.pwd.qwd;this.pwd.top=cxd.pwd.top;this.pwd.bottom=cxd.pwd.bottom;}this.sie=null;}vwd.prototype.get_bbox_left=function(){if(this.nwd)this.owd();return this.pwd.left;};vwd.prototype.get_bbox_right=function(){if(this.nwd)this.owd();return this.pwd.qwd;};vwd.prototype.get_bbox_top=function(){if(this.nwd)this.owd();
return this.pwd.top;};vwd.prototype.get_bbox_bottom=function(){if(this.nwd)this.owd();return this.pwd.bottom;};vwd.prototype.setx=function(vtc){this.x=vtc;this.nwd=true;};vwd.prototype.sety=function(wtc){this.y=wtc;this.nwd=true;};vwd.prototype.setangle=function(dah){this.image_angle=dah;this.nwd=true;};vwd.prototype.setxscale=function(xyc){this.image_xscale=xyc;this.nwd=true;};vwd.prototype.setyscale=function(xyc){this.image_yscale=xyc;this.nwd=true;};vwd.prototype.eah=function(xsb){this.nwd=xsb;
};vwd.prototype.fah=function(){return this.nwd;};vwd.prototype.getdepth=function(){return this.depth;};vwd.prototype.set_imageblend=function(iad){this.image_blend=iid(iad);};vwd.prototype.get_imageblend=function(){return iid(this.image_blend);};vwd.prototype.set_timeline_running=function(gah){if(gah>=0.5){this.fhd=false;}else {this.fhd=true;}};vwd.prototype.get_timeline_running=function(){if(this.fhd){return 1;}else {return 0;}};vwd.prototype.set_timeline_loop=function(kad){if(kad>=0.5){this.fhf=true;}
else {this.fhf=false;}};vwd.prototype.get_timeline_loop=function(){if(this.fhf){return 1;}else {return 0;}};vwd.prototype.get_image_single=function(){if(this.image_speed==0){return this.image_index;}else {return -1;}};vwd.prototype.set_image_single=function(zyd){if(zyd<0){this.image_speed=1;}else {this.image_speed=0;this.image_index=zyd;}};vwd.prototype.set_image_index=function(hah){var dqd=this.get_image_number();if(hah<0){hah=dqd-tcg(Math.abs(hah),dqd);}else {hah=tcg(Math.abs(hah),dqd);}this.image_index=hah;
};vwd.prototype.get_image_number=function(){var cxd=ibd.mvc(this.sprite_index);if(!cxd)return 0;return cxd.coe.length;};vwd.prototype.get_sprite_width=function(){var cxd=ibd.mvc(this.sprite_index);if(!cxd)return 0;return cxd.width*this.image_xscale;};vwd.prototype.get_sprite_height=function(){var cxd=ibd.mvc(this.sprite_index);if(!cxd)return 0;return cxd.height*this.image_yscale;};vwd.prototype.get_sprite_xoffset=function(){var cxd=ibd.mvc(this.sprite_index);if(!cxd)return 0;return cxd.xOrigin;};vwd.prototype.get_sprite_yoffset=function(){
var cxd=ibd.mvc(this.sprite_index);if(!cxd)return 0;return cxd.yOrigin;};vwd.prototype.setdepth=function(oxc){this.depth=oxc;wzc.iah[wzc.iah.length]=this;};vwd.prototype.vpb=function(jah,hmg){if((this.x==jah)&&(this.y==hmg))return;this.x=jah;this.y=hmg;this.nwd=true;};vwd.prototype.xwd=function(wjd,kah){if(this.srd!=null){this.srd.lah(this);this.srd=null;}for(var hh in wjd){var qg=wjd[hh];this[hh]=qg;}this.pwd.gu(wjd.pwd);for(var i=0;i<=jhf-1;i++){var bu=array_get_1D(wjd,"__alarm__",i);array_set_1D(this,
"__alarm__",i,bu);}if(kah&&this.srd!=null){this.srd.mah(this);}};vwd.prototype.axd=function(rwd,kah,nah){this.object_index=rwd;if(this.srd!=null){this.srd.lah(this);this.srd=null;}if(rwd==-1)rwd=0;this.srd=ypd.mvc(rwd);if(this.srd!=null){if(kah){this.srd.mah(this);}this.iff=this.srd.iff;this.mask_index=this.srd.hee;if(nah){this.depth=this.srd.fee;}else {this.setdepth(this.srd.fee);}this.solid=this.srd.dee;this.visible=this.srd.eee;this.persistent=this.srd.gee;this.nwd=true;}};vwd.prototype.oah=function(){
with(this){if(this.hspeed==0){if(this.vspeed>0){this.direction=270;}else if(this.vspeed<0){this.direction=90;}else {this.direction=0;}}else {var pud=pah(180*(Math.atan2(this.vspeed,this.hspeed))/czd);if(pud<=0){this.direction=-pud;}else {this.direction=360.0-pud;}}if(Math.abs(this.direction-zyc(this.direction))<0.0001){this.direction=zyc(this.direction);}this.direction=tcg(this.direction,360.0);this.speed=Math.sqrt(fzd(this.hspeed)+fzd(this.vspeed));if(Math.abs(this.speed-zyc(this.speed))<0.0001)this.speed=zyc(this.speed);
}};vwd.prototype.qah=function(){this.hspeed=this.speed*pah(Math.cos(this.direction*0.0174532925));this.vspeed=-this.speed*pah(Math.sin(this.direction*0.0174532925));if(Math.abs(this.hspeed-zyc(this.hspeed))<0.0001){this.hspeed=zyc(this.hspeed);}if(Math.abs(this.vspeed-zyc(this.vspeed))<0.0001){this.vspeed=zyc(this.vspeed);}};function pah(rah){return pud=(~~(rah*1000000))/1000000.0;}vwd.prototype.bzc=function(azc,qld){this.hspeed+=qld*pah(Math.cos(azc*0.0174532925));this.vspeed-=qld*pah(Math.sin(azc*0.0174532925));
this.oah();};vwd.prototype.sah=function(){if(this.friction!=0.0){var tah;if(this.speed>0){tah=this.speed-this.friction;}else {tah=this.speed+this.friction;}if((this.speed>0)&&(tah<0)){this.setspeed(0);}else if((this.speed<0)&&(tah>0)){this.setspeed(0);}else if(this.speed!=0){this.setspeed(tah);}}if(this.gravity!=0){this.bzc(this.gravity_direction,this.gravity);}};vwd.prototype.uah=function(){return ibd.vah(this.sprite_index);};vwd.prototype.yzc=function(erd,jwc,wjd,drd){var wah=szg;var xah=tzg;var yah=uzg;
var em=false;var zah=false;if(erd==naf){var abh=drd.srd;while(abh!=null&&!zah){var dwd=this.srd;while(dwd!=null&&!zah){if(dwd.Event[erd]){if(dwd.lfg[abh.oee]){szg=dwd;tzg=erd;uzg=abh.oee;em=dwd.yzc(erd,abh.oee,wjd,drd);zah=true;break;}}dwd=dwd.vrd;}abh=abh.vrd;}}else {var dwd=this.srd;var bbh=erd|jwc;while(dwd!=null){if(dwd.Event[bbh]){szg=dwd;tzg=erd;uzg=jwc;em=dwd.yzc(erd,jwc,wjd,drd);break;}dwd=dwd.vrd;}}szg=wah;tzg=xah;uzg=yah;return em;};vwd.prototype.sethspeed=function(pvc){if(this.hspeed==pvc)return;
this.hspeed=pvc;this.oah();};vwd.prototype.setvspeed=function(pvc){if(this.vspeed==pvc)return;this.vspeed=pvc;this.oah();};vwd.prototype.setdirection=function(pvc){this.direction=tcg(pvc,360.0);this.qah();};vwd.prototype.setspeed=function(pvc){if(this.speed==pvc)return;this.speed=pvc;this.qah();};vwd.prototype.owd=function(){var hbd,rbb;if(this.mask_index>=0){hbd=ibd.mvc(this.mask_index);;}else {hbd=ibd.mvc(this.sprite_index);;}var pwd=this.pwd;if(hbd===null){this.pwd.left=-100000;this.pwd.top=-100000;
this.pwd.qwd=-100000;this.pwd.bottom=-100000;this.cah=false;}else if(this.image_angle==0){var cbh=hbd.pwd;pwd.left=zyc(this.x+this.image_xscale*(cbh.left-hbd.xOrigin));pwd.qwd=zyc(this.x+this.image_xscale*(cbh.qwd-hbd.xOrigin+1)-1);if(pwd.left>pwd.qwd){rbb=pwd.left;pwd.left=pwd.qwd;pwd.qwd=rbb;}pwd.top=zyc(this.y+this.image_yscale*(cbh.top-hbd.yOrigin));pwd.bottom=zyc(this.y+this.image_yscale*(cbh.bottom-hbd.yOrigin+1)-1);if(pwd.top>pwd.bottom){rbb=pwd.top;pwd.top=pwd.bottom;pwd.bottom=rbb;}this.cah=hbd.dbh();
}else {var cbh=hbd.pwd;var zce,ade;zce=this.image_xscale*(cbh.left-hbd.xOrigin);ade=this.image_xscale*(cbh.qwd-hbd.xOrigin+1)-1;var bde,cde;bde=this.image_yscale*(cbh.top-hbd.yOrigin);cde=this.image_yscale*(cbh.bottom-hbd.yOrigin+1)-1;var nzb,vsd;nzb=Math.cos(this.image_angle*czd/180.0);vsd=Math.sin(this.image_angle*czd/180.0);var ebh=nzb*ade;var fbh=nzb*zce;var gbh=vsd*cde;var hbh=vsd*bde;var rbb;if(ebh<fbh){rbb=fbh;fbh=ebh;ebh=rbb;}if(gbh<hbh){rbb=hbh;hbh=gbh;gbh=rbb;}pwd.left=(this.x+fbh+hbh)|0;pwd.qwd=(this.x+ebh+gbh)|0;
var ibh=nzb*cde;var jbh=nzb*bde;var kbh=vsd*ade;var lbh=vsd*zce;if(ibh<jbh){rbb=jbh;jbh=ibh;ibh=rbb;}if(kbh<lbh){rbb=lbh;lbh=kbh;kbh=rbb;}pwd.top=(this.y+jbh-kbh)|0;pwd.bottom=(this.y+ibh-lbh)|0;this.cah=hbd.dbh();}this.pwd=pwd;this.nwd=false;};vwd.prototype.ckd=function(vtc,wtc,xuc){if(this.fwd)return false;if(this.nwd)this.owd();var pwd=this.pwd;if(vtc>=pwd.qwd+1)return false;if(vtc<pwd.left)return false;if(wtc>=pwd.bottom+1)return false;if(wtc<pwd.top)return false;if((!xuc)||(!this.cah))return true;var une;
if(this.mask_index<0){une=ibd.mvc(this.sprite_index);}else {une=ibd.mvc(this.mask_index);}if((une===null)||(une.upd==0))return false;var vad=une.mbh(Math.floor(this.image_index),pwd,zyc(this.x),zyc(this.y),this.image_xscale,this.image_yscale,this.image_angle,zyc(vtc),zyc(wtc));return vad;};vwd.prototype.dkd=function(qvc,rvc,svc,tvc,xuc){if(this.fwd)return false;if(this.nwd)this.owd();var pwd=this.pwd;if(xvc(qvc,svc)>=pwd.qwd+1)return false;if(wvc(qvc,svc)<pwd.left)return false;if(xvc(rvc,tvc)>=pwd.bottom+1)return false;
if(wvc(rvc,tvc)<pwd.top)return false;if((!xuc)||(!this.cah))return true;var une;if(this.mask_index<0){une=ibd.mvc(this.sprite_index);}else {une=ibd.mvc(this.mask_index);}if((une===null)||(une.upd==0))return false;rzg.left=zyc(xvc(qvc,svc));rzg.top=zyc(xvc(rvc,tvc));rzg.qwd=zyc(wvc(qvc,svc));rzg.bottom=zyc(wvc(rvc,tvc));var vad=une.nbh(Math.floor(this.image_index),pwd,zyc(this.x),zyc(this.y),this.image_xscale,this.image_yscale,this.image_angle,rzg);return vad;};vwd.prototype.hkd=function(qvc,rvc,svc,tvc,
xuc){if(this.fwd)return false;if(this.nwd)this.owd();qvc=zyc(qvc);svc=zyc(svc);rvc=zyc(rvc);tvc=zyc(tvc);var obh,pbh,qbh,rbh;if(qvc<svc){qbh=qvc;obh=svc;}else {qbh=svc;obh=qvc;}if(rvc<tvc){sbh=rvc;pbh=tvc;}else {sbh=tvc;pbh=rvc;}var pwd=this.pwd;if(qbh>=pwd.qwd)return false;if(obh<pwd.left)return false;if(sbh>=pwd.bottom)return false;if(pbh<pwd.top)return false;if((qvc==svc)||(rvc==tvc)){return this.dkd(qvc,rvc,svc,tvc,xuc);}if((!xuc)||(!this.cah))return true;rzg.left=qbh;rzg.top=sbh;rzg.qwd=obh;rzg.bottom=pbh;
var une;if(this.mask_index<0){une=ibd.mvc(this.sprite_index);}else {une=ibd.mvc(this.mask_index);}if((une===null)||(une.upd==0))return false;tbh++;return une.ubh(Math.floor(this.image_index),pwd,zyc(this.x),zyc(this.y),this.image_xscale,this.image_yscale,this.image_angle,rzg);};vwd.prototype.kkd=function(qvc,rvc,svc,tvc,xuc){if(this.fwd){return false;}if(this.nwd){this.owd();}var vbh=this.pwd;if(xvc(qvc,svc)>=vbh.qwd+1){return false;}if(wvc(qvc,svc)<vbh.left){return false;}if(xvc(rvc,tvc)>=vbh.bottom+1){
return false;}if(wvc(rvc,tvc)<vbh.top){return false;}if(svc<qvc){var bcd=svc;svc=qvc;qvc=bcd;bcd=tvc;tvc=rvc;rvc=bcd;}if(qvc<vbh.left){rvc=rvc+(vbh.left-qvc)*(tvc-rvc)/(svc-qvc);qvc=vbh.left;}if(svc>(vbh.qwd+1)){tvc=tvc+(vbh.qwd+1-svc)*(tvc-rvc)/(svc-qvc);svc=vbh.qwd+1;}if((rvc<vbh.top)&&(tvc<vbh.top)){return false;}if((rvc>=vbh.bottom+1)&&(tvc>=vbh.bottom+1)){return false;}if(!xuc||!this.cah){return true;}var une=null;if(this.mask_index<0){une=ibd.mvc(this.sprite_index);}else {une=ibd.mvc(this.mask_index);
}if((une==null)||(une==undefined)||(une.wbh()==0)){return false;}return une.xbh(this.image_index|0,vbh,zyc(this.x),zyc(this.y),this.image_xscale,this.image_yscale,this.image_angle,zyc(qvc),zyc(rvc),zyc(svc),zyc(tvc));};vwd.prototype.hwd=function(wjd,xuc){if(!(this==wjd)&&!this.fwd&&!wjd.fwd){if(this.nwd)this.owd();if(wjd.nwd)wjd.owd();var ybh=wjd.pwd;var zbh=this.pwd;if(ybh.left>=(zbh.qwd+1))return false;if((ybh.qwd+1)<=zbh.left)return false;if(ybh.top>=(zbh.bottom+1))return false;if((ybh.bottom+1)<=zbh.top)return false;
if(!xuc||(!this.cah&&!wjd.cah))return true;var ach=null;var bch=null;if(this.mask_index<0){ach=ibd.mvc(this.sprite_index);}else {ach=ibd.mvc(this.mask_index);}if((ach==null)||(ach.upd==0))return false;if(wjd.mask_index<0){bch=ibd.mvc(wjd.sprite_index);}else {bch=ibd.mvc(wjd.mask_index);}if((bch==null)||(bch.upd==0))return false;return ach.cch(this.image_index|0,this.pwd,zyc(this.x),zyc(this.y),this.image_xscale,this.image_yscale,this.image_angle,bch,wjd.image_index|0,wjd.pwd,zyc(wjd.x),zyc(wjd.y),wjd.image_xscale,
wjd.image_yscale,wjd.image_angle);}return false;};vwd.prototype.jgd=function(kid,czc,xyc,dch,ege,ech){this.path_index=-1;if(kid<0)return;var mce=nce.Paths[kid];if(!mce)return;if(mce.length<=0)return;if(xyc<0)return;this.path_index=kid;this.path_speed=czc;if(this.path_speed>=0){this.path_position=0;}else {this.path_position=1;}this.path_positionprevious=this.path_position;this.path_scale=xyc;this.path_orientation=dch;this.path_end=ech;if(ege){if(this.path_speed>=0){this.vpb(mce.sfe(0),mce.tfe(0));}else {
this.vpb(mce.sfe(1),mce.tfe(1));}}this.xzg=this.x;this.yzg=this.y;};vwd.prototype.wff=function(){var ige,qud,rud;if(this.path_index<0)return false;if(this.path_speed==0)return false;var mce=nce.Paths[this.path_index];if(!mce)return;if(mce.length<=0)return;var fch=false;var gch=this.path_orientation*Math.PI/180.0;var yxc=mce.upb(this.path_position);qud=yxc.x;rud=yxc.y;ige=yxc.speed;yxc=null;ige=ige/(100*this.path_scale);this.path_position=this.path_position+this.path_speed*ige/mce.length;var hch=mce.upb(0);
if((this.path_position>=1)||(this.path_position<=0)){fch=true;switch(this.path_end){case 0:{this.path_position=1;this.path_index=-1;break;}case 1:{if(this.path_position<0){this.path_position++;}else {this.path_position--;}break;}case 2:{var ich=mce.upb(1);qud=ich.x-hch.x;rud=ich.y-hch.y;var jch=this.path_scale*(qud*Math.cos(gch)+rud*Math.sin(gch));var kch=this.path_scale*(rud*Math.cos(gch)-qud*Math.sin(gch));if(this.path_position<0){this.xzg=this.xzg-jch;this.yzg=this.yzg-kch;this.path_position++;}else {
this.xzg=this.xzg+jch;this.yzg=this.yzg+kch;this.path_position--;}break;}case 3:{if(this.path_position<0){this.path_position=-this.path_position;this.path_speed=Math.abs(this.path_speed);}else {this.path_position=2-this.path_position;this.path_speed=-Math.abs(this.path_speed);}break;}default :{this.path_position=1;this.path_index=-1;}}}yxc=mce.upb(this.path_position);qud=yxc.x-hch.x;rud=yxc.y-hch.y;var nae=this.xzg+this.path_scale*(qud*Math.cos(gch)+rud*Math.sin(gch));var oae=this.yzg+this.path_scale*(rud*Math.cos(gch)-qud*Math.sin(gch));
this.sethspeed(nae-this.x);this.setvspeed(oae-this.y);this.setspeed(0);this.vpb(nae,oae);return fch;};vwd.prototype.sad=function(jwc){var vad=-1;if((jwc>=0)&&(jwc<jhf)){vad=array_get_1D(this,"__alarm__",jwc);}return vad;};vwd.prototype.tad=function(jwc,pvc){if((jwc>=0)&&(jwc<jhf)){array_set_1D(this,"__alarm__",jwc,pvc);}};vwd.prototype.ide=function(){if(this.nwd){this.owd();}return this.pwd;};vwd.prototype.ozc=function(jde,ltd){var w,h;if(!sprite_exists(this.sprite_index)){w=h=0;}else {var une=ibd.mvc(this.sprite_index);
w=une.width*this.image_xscale;h=une.height*this.image_yscale;}if(jde){if((this.hspeed<0)&&(this.x<0)){this.vpb(this.x+wzc.fde()+w,this.y);}if((this.hspeed>0)&&(this.x>=wzc.fde())){this.vpb(this.x-wzc.fde()-w,this.y);}}if(ltd){if((this.vspeed<0)&&(this.y<0)){this.vpb(this.x,this.y+wzc.gde()+h);}if((this.vspeed>0)&&(this.y>=wzc.gde())){this.vpb(this.x,this.y-wzc.gde()-h);}}};vwd.prototype.set_physics_rotation=function(bye){this.sie.aye(bye);};vwd.prototype.set_physics_omega=function(gye){this.sie.cqb(gye);
};vwd.prototype.set_physics_position_x=function(xwc){this.sie.cye(xwc*wzc.uze.aie);};vwd.prototype.set_physics_position_y=function(xwc){this.sie.eye(xwc*wzc.uze.aie);};vwd.prototype.set_physics_linear_velocity_x=function(iye){this.sie.hye(iye);};vwd.prototype.set_physics_linear_velocity_y=function(iye){this.sie.kye(iye);};vwd.prototype.set_physics_speed_x=function(czc){this.sie.hye(czc*wzc.uze.aie*wzc.ghe());};vwd.prototype.set_physics_speed_y=function(czc){this.sie.kye(czc*wzc.uze.aie*wzc.ghe());
};vwd.prototype.set_physics_bullet=function(lye){this.sie.wsb((lye>0.5)?true:false);};function sdg(){this.lch=new rwc();this.lch.swc=true;this.mch=[];}sdg.prototype.oyb=function(){this.mch=[];this.lch.oyb();};sdg.prototype.yce=function(){return this.lch.pfc;};sdg.prototype.xnb=function(ewd){this.mch[ewd.id]=ewd;this.lch.xnb(ewd);};sdg.prototype.bdg=function(utc){return this.mch[utc];};sdg.prototype.mvc=function(utc){var ewd=this.mch[utc];if(ewd!=null)return ewd;var dwd=ypd.mvc(utc);if(dwd!=null){ewd=dwd.zpd.pfc[0];
if(ewd!=null)return ewd;}return null;};sdg.prototype.nch=function(wjd){this.lch.tmg(wjd);var id=wjd.id;this.mch[id]=null;};sdg.prototype.och=function(){var pfc=wzc.mwd.pfc;for(var index=0;index<pfc.length;index++){var ewd=pfc[index];ewd.xprevious=ewd.x;ewd.yprevious=ewd.y;ewd.path_positionprevious=ewd.path_position;}};sdg.prototype.pch=function(){var pfc=wzc.mwd.pfc;for(var index=0;index<pfc.length;index++){var ewd=pfc[index];ewd.sah();if(ewd.wff()){ewd.yzc(vkf,0,ewd,ewd);}ewd.x+=ewd.hspeed;ewd.y+=ewd.vspeed;
ewd.nwd=true;}};sdg.prototype.qch=function(){var pfc=wzc.mwd.pfc;for(var index=0;index<pfc.length;index++){var ewd=pfc[index];ewd.image_index+=ewd.image_speed;var dqd=ewd.uah();if(ewd.image_index>=dqd){ewd.image_index-=dqd;var srd=ewd.srd;if(srd.iff[tkf]){ewd.yzc(tkf,0,ewd,ewd);}}}};sdg.prototype.yzc=function(erd,jwc){var rch=true;if(wzc){var bbh=erd;if(bbh!=naf)bbh|=jwc;var pfc=wzc.mwd.pfc;for(var index=0;index<pfc.length;index++){var ewd=pfc[index];if(!ewd.fwd){var srd=ewd.srd;if(srd.iff[bbh]){rch=ewd.yzc(erd,
jwc,ewd,ewd);}}}}return rch;};var yyInst;function xbg(utc){var ewd=dbd.mvc(utc);if(!ewd){ewd=ypd.mvc(utc);if(!ewd)ewd=ewd.vgf.mvc(0);}return ewd;}function ccg(utc){var ewd=dbd.mvc(utc);if(!ewd){ewd=ypd.mvc(utc);if(!ewd){lmd("Unknown instance ID: "+utc);return qag;}ewd=ewd.vgf.mvc(0);lmd("Warning: Object ID being used to access instance"+utc);}return ewd;}var dyd=256;var sch=3;var tch=1024;var sue=1;var xue=2;var uch=4;var ouc=1;var muc=2;var nuc=0x80000000;var vch=128;var wch=0,huc=0,iuc=0,juc=0,xch=-1,ych=0,zch=0,
adh=0,bdh=0,cdh=0;ddh=false;var edh=[];var fdh=[];var gdh=[];var tue=[];var hdh=[];var kuc=[];var idh=0;var jdh={8:String.fromCharCode(8),9:0,13:0,16:0,17:0,18:0,19:0,20:0,27:0,22:0,32:" ",34:0,35:0,36:0,37:0,38:0,39:0,40:0,45:0,46:0,47:0,48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",58:"0",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",91:0,
92:0,93:0,96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:0,113:0,114:0,115:0,116:0,117:0,118:0,119:0,120:0,121:0,122:0,123:0,144:0,145:0,186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"'",219:"[",220:"\\",221:"]",222:"#",223:"`"};var kdh={8:String.fromCharCode(8),9:0,13:0,16:0,17:0,18:0,19:0,20:0,27:0,22:0,32:" ",34:0,35:0,36:0,37:0,38:0,39:0,40:0,45:0,46:0,47:0,48:")",49:"!",50:"\"",51:"\£",52:"$",53:"%",54:"^",55:"&",
56:"*",57:"(",58:")",59:":",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:0,92:0,93:0,96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:0,113:0,114:0,115:0,116:0,117:0,118:0,119:0,120:0,121:0,122:0,123:0,144:0,145:0,186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"@",219:"{",220:"|",221:"}",
222:"~",223:"¬"};function ldh(){ddh=true;}function mdh(){ddh=false;ndh();}function odh(which){if(!document.getElementById)return;if(which.style.display=="block"){which.style.display="none";}else {which.style.display="block";}}function pdh(qdh,rdh){if(qdh){if(qdh.JSON_game){if(qdh.JSON_game.Options){if(qdh.JSON_game.Options.gameGuid){if(qdh.JSON_game.Options.gameGuid==JSON_game.Options.gameGuid){qdh.focus();rdh.focus();return true;}}}}}return false;}function sdh(){var xse=document.getElementById(hoe);var tdh;
if((due==hnf)||(due==gnf)||(due==inf)||(due==jnf)){tdh=parent.frames;for(var udh=0;udh<tdh.length;udh++){var vdh=tdh[udh];if(pdh(vdh,xse))break;}}else {tdh=parent.document.getElementsByTagName("IFRAME");for(var udh in tdh){var vdh=tdh[udh].contentWindow;if(pdh(vdh,xse))break;}}}function wdh(xdh){if(xdh.repeat){return;}var ydh;if(xdh==null){ydh=window.event.which;if(ydh==122)return;if(ydh!=121)window.event.preventDefault();else nse=true;window.event.preventDefault();}else {ydh=xdh.which;if(ydh==122)return;if(ydh==120){
if(hmd)odh(document.getElementById('debug_console'));}else if(ydh!=121)xdh.preventDefault();else {if(!mse)ose();nse=true;}xdh.preventDefault();}if(edh[ydh])return;edh[ydh]=1;fdh[ydh]=1;cdh=ydh;if(due==fnf){bdh=xdh.char;}else {if(xdh.shiftKey){bdh=kdh[ydh];}else {bdh=jdh[ydh];}}if(!bdh)bdh="";}function zdh(xdh){var ydh;if(xdh==null){ydh=window.event.which;if(ydh==122)return;window.event.preventDefault();}else {ydh=xdh.which;if(ydh==122)return;xdh.preventDefault();}gdh[ydh]=1;edh[ydh]=0;return false;}function aeh(beh){
}function ceh(god,beh){var target,deh;var eeh=jtc.style.display;jtc.style.display="none";target=document.elementFromPoint(beh.clientX,beh.clientY);jtc.style.display=eeh;target="canvas";deh=document.createEvent('MouseEvents');deh.initMouseEvent(god,true,true,document.feh,1,beh.screenX,beh.screenY,beh.clientX,beh.clientY,false,false,false,false,beh.button,null);deh.target=target;target.dispatchEvent(deh);}function dqe(beh){{huc=beh.pageX;iuc=beh.pageY;kuc[beh.button].x=huc;kuc[beh.button].y=iuc;}}function eqe(beh){
{if(!ddh){sdh();}wch=beh.button;if(wch==2)wch=1;else if(wch==1)wch=2;zch=xch;xch=wch;juc|=(1<<wch);{kuc[beh.button].luc=muc|nuc|ouc;kuc[beh.button].x=beh.pageX-dte;kuc[beh.button].y=beh.pageY-cte;}}return beh;}function fqe(beh){wch=beh.button;if(wch==2)wch=1;else if(wch==1)wch=2;adh=ych;ych=wch;juc&=~(1<<wch);xch=-1;kuc[beh.button].luc=0;return false;}function qdg(){this.geh="a";this.heh=[];this.ieh=this.jeh=-1;this.yxd=[];this.ayd=[];this.zxd=[];this.keh=this.leh=0;this.sxd=[];this.uxd=[];this.txd=[];
this.meh=this.neh=false;this.eyd=[];this.oeh=this.rxd=this.peh=this.qeh=this.dgf=this.egf=this.reh=0;for(var hfb=0;hfb<tch;hfb++){this.heh[hfb]="";}for(var hfb=0;hfb<dyd;hfb++){this.yxd[hfb]=this.ayd[hfb]=this.zxd[hfb]=false;this.eyd[hfb]=hfb;}for(var hfb=0;hfb<sch;hfb++){this.sxd[hfb]=this.uxd[hfb]=this.txd[hfb]=false;}this.qvb=seh;this.teh=ueh;this.veh=veh;this.weh=weh;this.xeh=xeh;this.yeh=yeh;this.zeh=zeh;this.afh=afh;this.bfh=bfh;this.cfh=cfh;this.dfh=dfh;this.efh=efh;this.ffh=ffh;this.fgd=fgd;
this.gfh=gfh;this.hfh=hfh;this.dgd=dgd;this.ifh=ifh;this.egd=egd;this.jfh=jfh;this.kfh=kfh;this.lfh=lfh;this.mfh=mfh;this.nfh=ofh;this.nxd=pfh;this.oxd=qfh;this.rfh=rfh;for(var hfb=0;hfb<dyd;hfb++){edh[hfb]=gdh[hfb]=false;}jtc.onmousemove=dqe;jtc.onmousedown=eqe;jtc.onmouseup=fqe;document.body.onfocusin=ldh;document.body.onfocusout=mdh;document.onfocusin=ldh;document.onfocusout=mdh;window.sfh=ldh;window.tfh=mdh;window.onkeydown=function(){wdh(arguments[0]||window.event);};window.onkeyup=function(){
zdh(arguments[0]||window.event);};hdh=new Array(vch);kuc=new Array(vch);for(var ufh=0;ufh<vch;ufh++){hdh[ufh]=new vfh();kuc[ufh]=new vfh();}}function vfh(){this.luc=0;this.x=0;this.y=0;}function ndh(){wfh();xfh();g_pBuiltIn.keyboard_key=0;g_pBuiltIn.keyboard_key="";cdh=0;bdh="";}qdg.prototype.oyb=function(){this.yfh();this.mfh();g_pBuiltIn.keyboard_key=0;g_pBuiltIn.keyboard_lastkey=0;g_pBuiltIn.keyboard_key="";cdh=0;bdh="";g_pBuiltIn.keyboard_lastchar="";g_pBuiltIn.keyboard_string="";};function veh(){return this.geh;
}function weh(zfh){this.geh=atg;}function xeh(){return this.jeh;}function yeh(){return this.ieh;}function zeh(fu){if(fu<0||fu>255)return false;this.jeh=fu;}function afh(fu){if(fu<0||fu>255)return false;this.ieh=fu;}function bfh(fu){if(fu<0||fu>255)return false;return this.yxd[fu];}function cfh(fu){if(fu<0||fu>255)return false;return this.zxd[fu];}function dfh(fu){if(fu<0||fu>255)return false;return this.ayd[fu];}function efh(fu){if(fu<0||fu>255)return;this.yxd[fu]=0;this.zxd[fu]=0;this.ayd[fu]=0;}qdg.prototype.yfh=function(){
this.jeh=0;this.ieh=0;this.geh=0;for(var i=0;i<=dyd;i++){this.yxd[i]=0;this.zxd[i]=0;this.ayd[i]=0;}};function wfh(){for(var i=0;i<dyd;i++){fdh[i]=0;gdh[i]=0;edh[i]=0;}}function ffh(){return this.keh;}function fgd(){return this.leh;}function gfh(xxd){if((xxd<1)||(xxd>3))return;this.keh=xxd;}function hfh(xxd){if((xxd<1)||(xxd>3))return;this.leh=xxd;}function dgd(xxd){xxd--;if(xxd>=0&&xxd<sch){return this.sxd[xxd];}return false;}function ifh(xxd){xxd--;if(xxd>=0&&xxd<sch){return this.txd[xxd];}}function egd(xxd){
xxd--;if(xxd>=0&&xxd<sch){return this.uxd[xxd];}return false;}function jfh(){return this.neh;}function kfh(){return this.meh;}function lfh(xxd){xxd--;if(xxd>=0&&xxd<sch){this.sxd[xxd]=false;this.txd[xxd]=false;this.uxd[xxd]=false;}}function mfh(){this.keh=0;this.leh=0;for(var i=0;i<=sch;i++){this.sxd[i]=false;this.txd[i]=false;this.uxd[i]=false;}this.neh=false;this.meh=false;}function xfh(){adh=-1;ych=-1;xch=-1;juc=0;kuc[0].luc=0;kuc[0].x=0;kuc[0].y=0;wch=-1;}function seh(){for(var ufh=0;ufh<kuc.length;ufh++){
hdh[ufh].luc=kuc[ufh].luc;hdh[ufh].x=kuc[ufh].x;hdh[ufh].y=kuc[ufh].y;kuc[ufh].luc&=~ouc;}if(g_pBuiltIn.keyboard_key!=0)g_pBuiltIn.keyboard_lastkey=g_pBuiltIn.keyboard_key;g_pBuiltIn.keyboard_key=cdh;if(cdh){if(bdh){if(cdh==13){}else if(cdh==8){g_pBuiltIn.keyboard_lastchar=bdh;if(g_pBuiltIn.keyboard_string.length>0){g_pBuiltIn.keyboard_string=g_pBuiltIn.keyboard_string.substring(0,g_pBuiltIn.keyboard_string.length-1);}}else {g_pBuiltIn.keyboard_lastchar=bdh;g_pBuiltIn.keyboard_string+=g_pBuiltIn.keyboard_lastchar;
if(g_pBuiltIn.keyboard_string.length>1024){g_pBuiltIn.keyboard_string=g_pBuiltIn.keyboard_string.substring(1,g_pBuiltIn.keyboard_string.length-1);}}}cdh=0;}this.dgf=huc;this.egf=iuc;this.rxd=juc;if((this.rxd&1)!=0){this.sxd[0]=1;if((this.peh^this.rxd)!=0){this.txd[0]=1;}}else {this.sxd[0]=0;if((this.rxd^this.peh)==1){this.uxd[0]=1;}}if((this.rxd&2)!=0){this.sxd[1]=1;if((this.peh^this.rxd)!=0){this.txd[1]=1;}}else {this.sxd[1]=0;if((this.rxd^this.peh)==2){this.uxd[1]=1;}}if((this.rxd&4)!=0){this.sxd[2]=1;
if((this.peh^this.rxd)!=0){this.txd[2]=1;}}else {this.sxd[2]=0;if((this.rxd^this.peh)==2){this.uxd[2]=1;}}this.peh=this.rxd;g_pBuiltIn.mouse_x=this.dgf;g_pBuiltIn.mouse_y=this.egf;g_pBuiltIn.mouse_button=xch+1;g_pBuiltIn.mouse_lastbutton=zch;this.rfh();}function rfh(){var agh=0;var sx=0;var w=wzc.fde();var h=wzc.gde();var agf=wzc.pte?wzc.bme:bgf;if(agf[0].visible){w=agf[0].ime;h=agf[0].jme;}for(var ufh in hdh){var bgh=hdh[ufh];if((bgh.luc&nuc)!=0){sx=1;for(var cgh in tue){var que=tue[cgh];if((que.tvb&sue)!=0){
var x=(w*bgh.x)/ite;var y=(h*bgh.y)/jte;if((x>=que.x)&&(x<que.ydb)&&(y>=que.y)&&(y<que.vvc)){agh|=sx;}}sx<<=1;}bgh.luc=0;}}sx=1;var dgh=idh^agh;for(var cgh in tue){var que=tue[cgh];if((que.tvb&sue)!=0){var egh=agh&sx;var zld=dgh&sx;if(que.dt!=0){this.zxd[que.dt]|=(egh&&zld);this.yxd[que.dt]|=(egh&&!zld);this.ayd[que.dt]|=(!egh&&zld);}else {this.txd[que.button-1]|=(egh&&zld);this.sxd[que.button-1]|=(egh&&!zld);this.uxd[que.button-1]|=(!egh&&zld);}}sx<<=1;}idh=agh;}function nfh(fgh){var pfc=wzc.mwd.pfc;var xdh=kif|fgh;
for(var iwd=0;iwd<pfc.length;iwd++){var ewd=pfc[iwd];var dwd=ewd.srd;if(dwd.iff[xdh]){ewd.yzc(kif,fgh,ewd,ewd);}}}function ggh(hgh){var pfc=wzc.mwd.pfc;var xdh=qmf|hgh;for(var iwd=0;iwd<pfc.length;iwd++){var ewd=pfc[iwd];var dwd=ewd.srd;if(dwd.iff[xdh]){ewd.yzc(qmf,hgh,ewd,ewd);}}}function oxd(igh){var pfc=wzc.mwd.pfc;var xdh=smf|igh;for(var iwd=0;iwd<pfc.length;iwd++){var ewd=pfc[iwd];var dwd=ewd.srd;if(dwd.iff[xdh]){ewd.yzc(smf,igh,ewd,ewd);}}}function ofh(){var jgh=0;for(var i=2;i<dyd;i++){if(this.yxd[i]){jgh=1;
nfh(i);}}nfh(jgh);}function pfh(){var kgh=0;for(var i=2;i<dyd;i++){if(this.zxd[i]){kgh=1;ggh(i);}}ggh(kgh);}function qfh(){var lgh=0;for(var i=2;i<dyd;i++){if(this.ayd[i]){lgh=1;oxd(i);}}oxd(lgh);}function ueh(){this.reh++;for(var i=0;i<dyd;i++){this.zxd[i]=this.ayd[i]=this.yxd[i]=0;}var mgh=0;var ngh=0;for(var i=0;i<dyd;i++){var dt=this.eyd[i];this.zxd[dt]|=fdh[i];this.ayd[dt]|=gdh[i];this.yxd[dt]|=edh[i];mgh|=fdh[i];ngh|=edh[i];fdh[i]=0;gdh[i]=0;}this.zxd[1]=mgh;this.yxd[1]=ngh;this.zxd[0]=mgh^1;this.yxd[0]=ngh^1;
for(var i=0;i<=sch;i++){this.txd[i]=false;this.uxd[i]=false;}this.neh=false;this.meh=false;this.qvb();var agf;if(!wzc.pte){agf=bgf;}else {agf=wzc.bme;}for(var hh=7;hh>=0;hh--){ame=agf[hh];if(ame&&ame.visible){if(ame.cgf==-1){ate(jtc,bte);}else {ate(whd.mvc(ame.cgf),bte);}if(((this.dgf-bte.left)>=ame.oqe)&&((this.dgf-bte.left)<ame.sqe)&&((this.egf-bte.top)>=ame.pqe)&&((this.egf-bte.top)<ame.tqe)){g_pBuiltIn.mouse_x=((guc.dgf-bte.left-ame.oqe)/ame.fgf)+ame.cme;g_pBuiltIn.mouse_y=((guc.egf-bte.top-ame.pqe)/ame.ggf)+ame.dme;
break;}}}}function ogh(){guc.nfh();guc.nxd();guc.oxd();}function pgh(index){this.tvb=0;this.index=index;this.x=0;this.y=0;this.ydb=0;this.vvc=0;this.w=0;this.h=0;this.omb=0;this.hh=0;this.dt=0;this.button=0;}function rue(){for(var hfb=0;hfb<tue.length;++hfb){if(tue[hfb].tvb==0){return tue[hfb];}}var i=tue.length;tue[i]=new pgh(i);return tue[i];}function uue(qgh){tue[qgh].tvb=0;}qdg.prototype.rgh=function(){lvg();var jsd=[];jsd[0]=1;jsd[1]=0;jsd[2]=0;jsd[3]=1;jsd[4]=0;jsd[5]=0;ktg(jsd);for(var hfb=0;hfb<wue.length;
++hfb){var vvd=wue[hfb];}nvg();};function rwc(){this.pfc=[];this.swc=false;this.length=0;this.ay=0;}rwc.prototype.ncg=function(){for(var hfb=0;hfb<this.pfc.length;hfb++){if(this.pfc[hfb]==null)return hfb;}return this.pfc.length;};rwc.prototype.xnb=function(rmg){var index=this.ncg();this.pfc[index]=rmg;this.ay++;this.length=this.pfc.length;return index;};rwc.prototype.mvc=function(lae){if(lae<0||lae>=this.pfc.length)return null;return this.pfc[lae];};rwc.prototype.zwc=function(smg){for(var hfb=0;hfb<this.pfc.length;
hfb++){if(this.pfc[hfb]==smg)return hfb;}};rwc.prototype.tmg=function(smg){for(var hfb=0;hfb<this.pfc.length;hfb++){if(this.pfc[hfb]==smg){if(this.swc){this.pfc.splice(hfb,1);}else {this.pfc[hfb]=null;}this.ay--;this.length=this.pfc.length;return true;break;}}return false;};rwc.prototype.jvc=function(lae){if(lae<0||lae>=this.pfc.length)return false;if(this.swc){this.pfc.splice(lae,1);}else {this.pfc[lae]=null;}this.ay--;this.length=this.pfc.length;return true;};rwc.prototype.oyb=function(){this.pfc=[];this.ay=0;
this.length=this.pfc.length;};rwc.prototype.ywc=function(jwc,pvc){if(jwc<0||jwc>this.pfc.length)return;this.pfc.splice(jwc,0,pvc);this.ay++;this.length=this.pfc.length;};rwc.prototype.bo=function(jwc,pvc){if(jwc<0||jwc>=this.pfc.length)return;this.pfc[jwc]=pvc;};rwc.prototype.bxc=function(axc){if(axc){this.pfc.sort(function(bu,jn){return bu-jn});}else {this.pfc.sort(function(bu,jn){return jn-bu});}};rwc.prototype.sgh=function(){this.pfc.sort(function(){return 0.5-Math.random()});};rwc.prototype.cxc=function(){
this.pfc.sort(function(){return 0.5-Math.random()});};rwc.prototype.gu=function(gvc){this.pfc=gvc.pfc.slice();this.swc=gvc.swc;this.length=gvc.length;this.ay=gvc.ay;};function tgh(){this.ugh=null;this.vgh=0;this.wgh=null;}function xgh(){this.ugh=null;this.ygh=false;this.rxc=null;}function taf(zgh,god){this.luc=0;this.oee=zgh;this.mxd=god;this.hee=-1;this.bxd=0;this.fee=0;this.dee=false;this.eee=false;this.gee=false;this.xrd=0;this.vrd=null;this.ahh=-1;this.jfg=false;this.vgf=new rwc();this.zpd=new rwc();
this.vgf.swc=true;this.zpd.swc=true;this.bhh=[];for(var bu=0;bu<jhf;bu++){this.bhh[bu]=null;}this.chh=[];this.dhh=[];this.ehh=[];this.lfg=[];this.Triggers=[];this.Event=[];this.iff=[];}taf.prototype.yce=function(){return this.vgf.pfc;};taf.prototype.pff=function(){return this.zpd.pfc;};function tfg(fhh,ghh){var dwd=new taf(fhh,ghh.pName);with(dwd){if(ghh.spriteIndex!=undefined)bxd=ghh.spriteIndex;if(ghh.visible!=undefined)eee=ghh.visible;if(ghh.solid!=undefined)dee=ghh.solid;if(ghh.depth!=undefined)fee=ghh.depth;
if(ghh.persistent!=undefined)gee=ghh.persistent;if(ghh.parent!=undefined)xrd=ghh.parent;if(ghh.spritemask!=undefined)hee=ghh.spritemask;if(ghh.CreateEvent){dwd.CreateEvent=ghh.CreateEvent;dwd.Event[zzc]=true;}if(ghh.DestroyEvent){dwd.DestroyEvent=ghh.DestroyEvent;dwd.Event[jwd]=true;}if(ghh.StepBeginEvent){dwd.StepBeginEvent=ghh.StepBeginEvent;dwd.Event[dif]=true;}if(ghh.StepNormalEvent){dwd.StepNormalEvent=ghh.StepNormalEvent;dwd.Event[fif]=true;}if(ghh.StepEndEvent){dwd.StepEndEvent=ghh.StepEndEvent;
dwd.Event[hif]=true;}if(ghh.DrawEvent){dwd.DrawEvent=ghh.DrawEvent;dwd.Event[omf]=true;}if(ghh.NoButtonPressed){dwd.NoButtonPressed=ghh.NoButtonPressed;dwd.Event[sgf]=true;}if(ghh.LeftButtonDown){dwd.LeftButtonDown=ghh.LeftButtonDown;dwd.Event[jgf]=true;}if(ghh.RightButtonDown){dwd.RightButtonDown=ghh.RightButtonDown;dwd.Event[lgf]=true;}if(ghh.MiddleButtonDown){dwd.MiddleButtonDown=ghh.MiddleButtonDown;dwd.Event[kgf]=true;}if(ghh.LeftButtonPressed){dwd.LeftButtonPressed=ghh.LeftButtonPressed;dwd.Event[mgf]=true;
}if(ghh.RightButtonPressed){dwd.RightButtonPressed=ghh.RightButtonPressed;dwd.Event[ogf]=true;}if(ghh.MiddleButtonPressed){dwd.MiddleButtonPressed=ghh.MiddleButtonPressed;dwd.Event[ngf]=true;}if(ghh.LeftButtonReleased){dwd.LeftButtonReleased=ghh.LeftButtonReleased;dwd.Event[pgf]=true;}if(ghh.RightButtonReleased){dwd.RightButtonReleased=ghh.RightButtonReleased;dwd.Event[rgf]=true;}if(ghh.MiddleButtonReleased){dwd.MiddleButtonReleased=ghh.MiddleButtonReleased;dwd.Event[qgf]=true;}if(ghh.GlobalLeftButtonDown){
dwd.GlobalLeftButtonDown=ghh.GlobalLeftButtonDown;dwd.Event[zgf]=true;}if(ghh.GlobalRightButtonDown){dwd.GlobalRightButtonDown=ghh.GlobalRightButtonDown;dwd.Event[dof]=true;}if(ghh.GlobalMiddleButtonDown){dwd.GlobalMiddleButtonDown=ghh.GlobalMiddleButtonDown;dwd.Event[eof]=true;}if(ghh.GlobalLeftButtonPressed){dwd.GlobalLeftButtonPressed=ghh.GlobalLeftButtonPressed;dwd.Event[ahf]=true;}if(ghh.GlobalRightButtonPressed){dwd.GlobalRightButtonPressed=ghh.GlobalRightButtonPressed;dwd.Event[fof]=true;
}if(ghh.GlobalMiddleButtonPressed){dwd.GlobalMiddleButtonPressed=ghh.GlobalMiddleButtonPressed;dwd.Event[gof]=true;}if(ghh.GlobalLeftButtonReleased){dwd.GlobalLeftButtonReleased=ghh.GlobalLeftButtonReleased;dwd.Event[bhf]=true;}if(ghh.GlobalRightButtonReleased){dwd.GlobalRightButtonReleased=ghh.GlobalRightButtonReleased;dwd.Event[hof]=true;}if(ghh.GlobalMiddleButtonReleased){dwd.GlobalMiddleButtonReleased=ghh.GlobalMiddleButtonReleased;dwd.Event[iof]=true;}if(ghh.MouseEnter){dwd.MouseEnter=ghh.MouseEnter;
dwd.Event[tgf]=true;}if(ghh.MouseLeave){dwd.MouseLeave=ghh.MouseLeave;dwd.Event[ugf]=true;}if(ghh.OutsideEvent){dwd.OutsideEvent=ghh.OutsideEvent;dwd.Event[jff]=true;}if(ghh.BoundaryEvent){dwd.BoundaryEvent=ghh.BoundaryEvent;dwd.Event[lff]=true;}if(ghh.StartGameEvent){dwd.StartGameEvent=ghh.StartGameEvent;dwd.Event[kkf]=true;}if(ghh.EndGameEvent){dwd.EndGameEvent=ghh.EndGameEvent;dwd.Event[mkf]=true;}if(ghh.StartRoomEvent){dwd.StartRoomEvent=ghh.StartRoomEvent;dwd.Event[okf]=true;}if(ghh.EndRoomEvent){
dwd.EndRoomEvent=ghh.EndRoomEvent;dwd.Event[qkf]=true;}if(ghh.NoLivesEvent){dwd.NoLivesEvent=ghh.NoLivesEvent;dwd.Event[ebd]=true;}if(ghh.AnimationEndEvent){dwd.AnimationEndEvent=ghh.AnimationEndEvent;dwd.Event[tkf]=true;}if(ghh.EndOfPathEvent){dwd.EndOfPathEvent=ghh.EndOfPathEvent;dwd.Event[vkf]=true;}if(ghh.NoHealthEvent){dwd.NoHealthEvent=ghh.NoHealthEvent;dwd.Event[wkf]=true;}if(ghh.CloseButtonEvent){dwd.CloseButtonEvent=ghh.CloseButtonEvent;dwd.Event[ykf]=true;}if(ghh.OutsideView0Event){dwd.OutsideView0Event=ghh.OutsideView0Event;
dwd.Event[alf]=true;}if(ghh.BoundaryView0Event){dwd.BoundaryView0Event=ghh.BoundaryView0Event;dwd.Event[clf]=true;}if(ghh.UserEvent0){dwd.UserEvent0=ghh.UserEvent0;dwd.Event[dlf]=true;}if(ghh.UserEvent1){dwd.UserEvent1=ghh.UserEvent1;dwd.Event[flf]=true;}if(ghh.UserEvent2){dwd.UserEvent2=ghh.UserEvent2;dwd.Event[hlf]=true;}if(ghh.UserEvent3){dwd.UserEvent3=ghh.UserEvent3;dwd.Event[jlf]=true;}if(ghh.UserEvent4){dwd.UserEvent4=ghh.UserEvent4;dwd.Event[llf]=true;}if(ghh.UserEvent5){dwd.UserEvent5=ghh.UserEvent5;
dwd.Event[nlf]=true;}if(ghh.UserEvent6){dwd.UserEvent6=ghh.UserEvent6;dwd.Event[plf]=true;}if(ghh.UserEvent7){dwd.UserEvent7=ghh.UserEvent7;dwd.Event[rlf]=true;}if(ghh.UserEvent8){dwd.UserEvent8=ghh.UserEvent8;dwd.Event[tlf]=true;}if(ghh.UserEvent9){dwd.UserEvent9=ghh.UserEvent9;dwd.Event[vlf]=true;}if(ghh.UserEvent10){dwd.UserEvent10=ghh.UserEvent10;dwd.Event[xlf]=true;}if(ghh.UserEvent11){dwd.UserEvent11=ghh.UserEvent11;dwd.Event[zlf]=true;}if(ghh.UserEvent12){dwd.UserEvent12=ghh.UserEvent12;dwd.Event[bmf]=true;
}if(ghh.UserEvent13){dwd.UserEvent13=ghh.UserEvent13;dwd.Event[dmf]=true;}if(ghh.UserEvent14){dwd.UserEvent14=ghh.UserEvent14;dwd.Event[fmf]=true;}if(ghh.UserEvent15){dwd.UserEvent15=ghh.UserEvent15;dwd.Event[hmf]=true;}if(ghh.WebImageLoadedEvent){dwd.WebImageLoadedEvent=ghh.WebImageLoadedEvent;dwd.Event[jmf]=true;}if(ghh.WebSoundLoadedEvent){dwd.WebSoundLoadedEvent=ghh.WebSoundLoadedEvent;dwd.Event[lmf]=true;}if(ghh.WebAsyncEvent){dwd.WebAsyncEvent=ghh.WebAsyncEvent;dwd.Event[cof]=true;}if(ghh.ObjAlarm0){
dwd.bhh[0]=ghh.ObjAlarm0;dwd.Event[phf]=true;}if(ghh.ObjAlarm1){dwd.bhh[1]=ghh.ObjAlarm1;dwd.Event[qhf]=true;}if(ghh.ObjAlarm2){dwd.bhh[2]=ghh.ObjAlarm2;dwd.Event[rhf]=true;}if(ghh.ObjAlarm3){dwd.bhh[3]=ghh.ObjAlarm3;dwd.Event[shf]=true;}if(ghh.ObjAlarm4){dwd.bhh[4]=ghh.ObjAlarm4;dwd.Event[thf]=true;}if(ghh.ObjAlarm5){dwd.bhh[5]=ghh.ObjAlarm5;dwd.Event[uhf]=true;}if(ghh.ObjAlarm6){dwd.bhh[6]=ghh.ObjAlarm6;dwd.Event[vhf]=true;}if(ghh.ObjAlarm7){dwd.bhh[7]=ghh.ObjAlarm7;dwd.Event[whf]=true;}if(ghh.ObjAlarm8){
dwd.bhh[8]=ghh.ObjAlarm8;dwd.Event[xhf]=true;}if(ghh.ObjAlarm9){dwd.bhh[9]=ghh.ObjAlarm9;dwd.Event[yhf]=true;}if(ghh.ObjAlarm10){dwd.bhh[10]=ghh.ObjAlarm10;dwd.Event[zhf]=true;}if(ghh.ObjAlarm11){dwd.bhh[11]=ghh.ObjAlarm11;dwd.Event[aif]=true;}if(ghh.KeyPressed_NOKEY){dwd.dhh[jof]=ghh.KeyPressed_NOKEY;dwd.Event[jof]=true;}if(ghh.KeyPressed_ANYKEY){dwd.dhh[lof]=ghh.KeyPressed_ANYKEY;dwd.Event[lof]=true;}if(ghh.KeyPressed_BACKSPACE){dwd.dhh[mof]=ghh.KeyPressed_BACKSPACE;dwd.Event[mof]=true;}if(ghh.KeyPressed_TAB){
dwd.dhh[nof]=ghh.KeyPressed_TAB;dwd.Event[nof]=true;}if(ghh.KeyPressed_ENTER){dwd.dhh[oof]=ghh.KeyPressed_ENTER;dwd.Event[oof]=true;}if(ghh.KeyPressed_SHIFT){dwd.dhh[pof]=ghh.KeyPressed_SHIFT;dwd.Event[pof]=true;}if(ghh.KeyPressed_CTRL){dwd.dhh[qof]=ghh.KeyPressed_CTRL;dwd.Event[qof]=true;}if(ghh.KeyPressed_ALT){dwd.dhh[rof]=ghh.KeyPressed_ALT;dwd.Event[rof]=true;}if(ghh.KeyPressed_PAUSE){dwd.dhh[sof]=ghh.KeyPressed_PAUSE;dwd.Event[sof]=true;}if(ghh.KeyPressed_ESCAPE){dwd.dhh[tof]=ghh.KeyPressed_ESCAPE;
dwd.Event[tof]=true;}if(ghh.KeyPressed_SPACE){dwd.dhh[uof]=ghh.KeyPressed_SPACE;dwd.Event[uof]=true;}if(ghh.KeyPressed_PAGEUP){dwd.dhh[vof]=ghh.KeyPressed_PAGEUP;dwd.Event[vof]=true;}if(ghh.KeyPressed_PAGEDOWN){dwd.dhh[wof]=ghh.KeyPressed_PAGEDOWN;dwd.Event[wof]=true;}if(ghh.KeyPressed_END){dwd.dhh[xof]=ghh.KeyPressed_END;dwd.Event[xof]=true;}if(ghh.KeyPressed_HOME){dwd.dhh[yof]=ghh.KeyPressed_HOME;dwd.Event[yof]=true;}if(ghh.KeyPressed_LEFT){dwd.dhh[zof]=ghh.KeyPressed_LEFT;dwd.Event[zof]=true;
}if(ghh.KeyPressed_UP){dwd.dhh[apf]=ghh.KeyPressed_UP;dwd.Event[apf]=true;}if(ghh.KeyPressed_RIGHT){dwd.dhh[bpf]=ghh.KeyPressed_RIGHT;dwd.Event[bpf]=true;}if(ghh.KeyPressed_DOWN){dwd.dhh[cpf]=ghh.KeyPressed_DOWN;dwd.Event[cpf]=true;}if(ghh.KeyPressed_INSERT){dwd.dhh[dpf]=ghh.KeyPressed_INSERT;dwd.Event[dpf]=true;}if(ghh.KeyPressed_DELETE){dwd.dhh[epf]=ghh.KeyPressed_DELETE;dwd.Event[epf]=true;}if(ghh.KeyPressed_0){dwd.dhh[fpf]=(ghh.KeyPressed_0);dwd.Event[fpf]=true;}if(ghh.KeyPressed_1){dwd.dhh[gpf]=(ghh.KeyPressed_1);
dwd.Event[gpf]=true;}if(ghh.KeyPressed_2){dwd.dhh[hpf]=(ghh.KeyPressed_2);dwd.Event[hpf]=true;}if(ghh.KeyPressed_3){dwd.dhh[ipf]=(ghh.KeyPressed_3);dwd.Event[ipf]=true;}if(ghh.KeyPressed_4){dwd.dhh[jpf]=(ghh.KeyPressed_4);dwd.Event[jpf]=true;}if(ghh.KeyPressed_5){dwd.dhh[kpf]=(ghh.KeyPressed_5);dwd.Event[kpf]=true;}if(ghh.KeyPressed_6){dwd.dhh[lpf]=(ghh.KeyPressed_6);dwd.Event[lpf]=true;}if(ghh.KeyPressed_7){dwd.dhh[mpf]=(ghh.KeyPressed_7);dwd.Event[mpf]=true;}if(ghh.KeyPressed_8){dwd.dhh[npf]=(ghh.KeyPressed_8);
dwd.Event[npf]=true;}if(ghh.KeyPressed_9){dwd.dhh[opf]=(ghh.KeyPressed_9);dwd.Event[opf]=true;}if(ghh.KeyPressed_A){dwd.dhh[ppf]=(ghh.KeyPressed_A);dwd.Event[ppf]=true;}if(ghh.KeyPressed_B){dwd.dhh[qpf]=(ghh.KeyPressed_B);dwd.Event[qpf]=true;}if(ghh.KeyPressed_C){dwd.dhh[rpf]=(ghh.KeyPressed_C);dwd.Event[rpf]=true;}if(ghh.KeyPressed_D){dwd.dhh[spf]=(ghh.KeyPressed_D);dwd.Event[spf]=true;}if(ghh.KeyPressed_E){dwd.dhh[tpf]=(ghh.KeyPressed_E);dwd.Event[tpf]=true;}if(ghh.KeyPressed_F){dwd.dhh[upf]=(ghh.KeyPressed_F);
dwd.Event[upf]=true;}if(ghh.KeyPressed_G){dwd.dhh[vpf]=(ghh.KeyPressed_G);dwd.Event[vpf]=true;}if(ghh.KeyPressed_H){dwd.dhh[wpf]=(ghh.KeyPressed_H);dwd.Event[wpf]=true;}if(ghh.KeyPressed_I){dwd.dhh[xpf]=(ghh.KeyPressed_I);dwd.Event[xpf]=true;}if(ghh.KeyPressed_J){dwd.dhh[ypf]=(ghh.KeyPressed_J);dwd.Event[ypf]=true;}if(ghh.KeyPressed_K){dwd.dhh[zpf]=(ghh.KeyPressed_K);dwd.Event[zpf]=true;}if(ghh.KeyPressed_L){dwd.dhh[aqf]=(ghh.KeyPressed_L);dwd.Event[aqf]=true;}if(ghh.KeyPressed_M){dwd.dhh[bqf]=(ghh.KeyPressed_M);
dwd.Event[bqf]=true;}if(ghh.KeyPressed_N){dwd.dhh[cqf]=(ghh.KeyPressed_N);dwd.Event[cqf]=true;}if(ghh.KeyPressed_O){dwd.dhh[dqf]=(ghh.KeyPressed_O);dwd.Event[dqf]=true;}if(ghh.KeyPressed_P){dwd.dhh[eqf]=(ghh.KeyPressed_P);dwd.Event[eqf]=true;}if(ghh.KeyPressed_Q){dwd.dhh[fqf]=(ghh.KeyPressed_Q);dwd.Event[fqf]=true;}if(ghh.KeyPressed_R){dwd.dhh[gqf]=(ghh.KeyPressed_R);dwd.Event[gqf]=true;}if(ghh.KeyPressed_S){dwd.dhh[hqf]=(ghh.KeyPressed_S);dwd.Event[hqf]=true;}if(ghh.KeyPressed_T){dwd.dhh[iqf]=(ghh.KeyPressed_T);
dwd.Event[iqf]=true;}if(ghh.KeyPressed_U){dwd.dhh[jqf]=(ghh.KeyPressed_U);dwd.Event[jqf]=true;}if(ghh.KeyPressed_V){dwd.dhh[kqf]=(ghh.KeyPressed_V);dwd.Event[kqf]=true;}if(ghh.KeyPressed_W){dwd.dhh[lqf]=(ghh.KeyPressed_W);dwd.Event[lqf]=true;}if(ghh.KeyPressed_X){dwd.dhh[mqf]=(ghh.KeyPressed_X);dwd.Event[mqf]=true;}if(ghh.KeyPressed_Y){dwd.dhh[nqf]=(ghh.KeyPressed_Y);dwd.Event[nqf]=true;}if(ghh.KeyPressed_Z){dwd.dhh[oqf]=(ghh.KeyPressed_Z);dwd.Event[oqf]=true;}if(ghh.KeyPressed_F1){dwd.dhh[pqf]=(ghh.KeyPressed_F1);
dwd.Event[pqf]=true;}if(ghh.KeyPressed_F2){dwd.dhh[qqf]=(ghh.KeyPressed_F2);dwd.Event[qqf]=true;}if(ghh.KeyPressed_F3){dwd.dhh[rqf]=(ghh.KeyPressed_F3);dwd.Event[rqf]=true;}if(ghh.KeyPressed_F4){dwd.dhh[sqf]=(ghh.KeyPressed_F4);dwd.Event[sqf]=true;}if(ghh.KeyPressed_F5){dwd.dhh[tqf]=(ghh.KeyPressed_F5);dwd.Event[tqf]=true;}if(ghh.KeyPressed_F6){dwd.dhh[uqf]=(ghh.KeyPressed_F6);dwd.Event[uqf]=true;}if(ghh.KeyPressed_F7){dwd.dhh[vqf]=(ghh.KeyPressed_F7);dwd.Event[vqf]=true;}if(ghh.KeyPressed_F8){dwd.dhh[wqf]=(ghh.KeyPressed_F8);
dwd.Event[wqf]=true;}if(ghh.KeyPressed_F9){dwd.dhh[xqf]=(ghh.KeyPressed_F9);dwd.Event[xqf]=true;}if(ghh.KeyPressed_F10){dwd.dhh[yqf]=(ghh.KeyPressed_F10);dwd.Event[yqf]=true;}if(ghh.KeyPressed_F11){dwd.dhh[zqf]=(ghh.KeyPressed_F11);dwd.Event[zqf]=true;}if(ghh.KeyPressed_F12){dwd.dhh[arf]=(ghh.KeyPressed_F12);dwd.Event[arf]=true;}if(ghh.KeyPressed_NUM_LOCK){dwd.dhh[orf]=(ghh.KeyPressed_NUM_LOCK);dwd.Event[orf]=true;}if(ghh.KeyPressed_NUM_0){dwd.dhh[prf]=(ghh.KeyPressed_NUM_0);dwd.Event[prf]=true;
}if(ghh.KeyPressed_NUM_1){dwd.dhh[qrf]=(ghh.KeyPressed_NUM_1);dwd.Event[qrf]=true;}if(ghh.KeyPressed_NUM_2){dwd.dhh[rrf]=(ghh.KeyPressed_NUM_2);dwd.Event[rrf]=true;}if(ghh.KeyPressed_NUM_3){dwd.dhh[srf]=(ghh.KeyPressed_NUM_3);dwd.Event[srf]=true;}if(ghh.KeyPressed_NUM_4){dwd.dhh[trf]=(ghh.KeyPressed_NUM_4);dwd.Event[trf]=true;}if(ghh.KeyPressed_NUM_5){dwd.dhh[urf]=(ghh.KeyPressed_NUM_5);dwd.Event[urf]=true;}if(ghh.KeyPressed_NUM_6){dwd.dhh[vrf]=(ghh.KeyPressed_NUM_6);dwd.Event[vrf]=true;}if(ghh.KeyPressed_NUM_7){
dwd.dhh[wrf]=(ghh.KeyPressed_NUM_7);dwd.Event[wrf]=true;}if(ghh.KeyPressed_NUM_8){dwd.dhh[xrf]=(ghh.KeyPressed_NUM_8);dwd.Event[xrf]=true;}if(ghh.KeyPressed_NUM_9){dwd.dhh[yrf]=(ghh.KeyPressed_NUM_9);dwd.Event[yrf]=true;}if(ghh.KeyPressed_NUM_STAR){dwd.dhh[zrf]=(ghh.KeyPressed_NUM_STAR);dwd.Event[zrf]=true;}if(ghh.KeyPressed_NUM_PLUS){dwd.dhh[asf]=(ghh.KeyPressed_NUM_PLUS);dwd.Event[asf]=true;}if(ghh.KeyPressed_NUM_MINUS){dwd.dhh[bsf]=(ghh.KeyPressed_NUM_MINUS);dwd.Event[bsf]=true;}if(ghh.KeyPressed_NUM_DOT){
dwd.dhh[csf]=(ghh.KeyPressed_NUM_DOT);dwd.Event[csf]=true;}if(ghh.KeyPressed_NUM_DIV){dwd.dhh[dsf]=(ghh.KeyPressed_NUM_DIV);dwd.Event[dsf]=true;}if(ghh.Key_NOKEY){dwd.chh[esf]=(ghh.Key_NOKEY);dwd.Event[esf]=true;}if(ghh.Key_ANYKEY){dwd.chh[gsf]=(ghh.Key_ANYKEY);dwd.Event[gsf]=true;}if(ghh.Key_BACKSPACE){dwd.chh[hsf]=(ghh.Key_BACKSPACE);dwd.Event[hsf]=true;}if(ghh.Key_TAB){dwd.chh[isf]=(ghh.Key_TAB);dwd.Event[isf]=true;}if(ghh.Key_ENTER){dwd.chh[jsf]=(ghh.Key_ENTER);dwd.Event[jsf]=true;}if(ghh.Key_SHIFT){
dwd.chh[ksf]=(ghh.Key_SHIFT);dwd.Event[ksf]=true;}if(ghh.Key_CTRL){dwd.chh[lsf]=(ghh.Key_CTRL);dwd.Event[lsf]=true;}if(ghh.Key_ALT){dwd.chh[msf]=(ghh.Key_ALT);dwd.Event[msf]=true;}if(ghh.Key_PAUSE){dwd.chh[nsf]=(ghh.Key_PAUSE);dwd.Event[nsf]=true;}if(ghh.Key_ESCAPE){dwd.chh[osf]=(ghh.Key_ESCAPE);dwd.Event[osf]=true;}if(ghh.Key_SPACE){dwd.chh[psf]=(ghh.Key_SPACE);dwd.Event[psf]=true;}if(ghh.Key_PAGEUP){dwd.chh[qsf]=(ghh.Key_PAGEUP);dwd.Event[qsf]=true;}if(ghh.Key_PAGEDOWN){dwd.chh[rsf]=(ghh.Key_PAGEDOWN);
dwd.Event[rsf]=true;}if(ghh.Key_END){dwd.chh[ssf]=(ghh.Key_END);dwd.Event[ssf]=true;}if(ghh.Key_HOME){dwd.chh[tsf]=(ghh.Key_HOME);dwd.Event[tsf]=true;}if(ghh.Key_LEFT){dwd.chh[usf]=(ghh.Key_LEFT);dwd.Event[usf]=true;}if(ghh.Key_UP){dwd.chh[vsf]=(ghh.Key_UP);dwd.Event[vsf]=true;}if(ghh.Key_RIGHT){dwd.chh[wsf]=(ghh.Key_RIGHT);dwd.Event[wsf]=true;}if(ghh.Key_DOWN){dwd.chh[xsf]=(ghh.Key_DOWN);dwd.Event[xsf]=true;}if(ghh.Key_INSERT){dwd.chh[ysf]=(ghh.Key_INSERT);dwd.Event[ysf]=true;}if(ghh.Key_DELETE){
dwd.chh[zsf]=(ghh.Key_DELETE);dwd.Event[zsf]=true;}if(ghh.Key_0){dwd.chh[atf]=(ghh.Key_0);dwd.Event[atf]=true;}if(ghh.Key_1){dwd.chh[btf]=(ghh.Key_1);dwd.Event[btf]=true;}if(ghh.Key_2){dwd.chh[ctf]=(ghh.Key_2);dwd.Event[ctf]=true;}if(ghh.Key_3){dwd.chh[dtf]=(ghh.Key_3);dwd.Event[dtf]=true;}if(ghh.Key_4){dwd.chh[etf]=(ghh.Key_4);dwd.Event[etf]=true;}if(ghh.Key_5){dwd.chh[ftf]=(ghh.Key_5);dwd.Event[ftf]=true;}if(ghh.Key_6){dwd.chh[gtf]=(ghh.Key_6);dwd.Event[gtf]=true;}if(ghh.Key_7){dwd.chh[htf]=(ghh.Key_7);
dwd.Event[htf]=true;}if(ghh.Key_8){dwd.chh[itf]=(ghh.Key_8);dwd.Event[itf]=true;}if(ghh.Key_9){dwd.chh[jtf]=(ghh.Key_9);dwd.Event[jtf]=true;}if(ghh.Key_A){dwd.chh[ktf]=(ghh.Key_A);dwd.Event[ktf]=true;}if(ghh.Key_B){dwd.chh[ltf]=(ghh.Key_B);dwd.Event[ltf]=true;}if(ghh.Key_C){dwd.chh[mtf]=(ghh.Key_C);dwd.Event[mtf]=true;}if(ghh.Key_D){dwd.chh[ntf]=(ghh.Key_D);dwd.Event[ntf]=true;}if(ghh.Key_E){dwd.chh[otf]=(ghh.Key_E);dwd.Event[otf]=true;}if(ghh.Key_F){dwd.chh[ptf]=(ghh.Key_F);dwd.Event[ptf]=true;
}if(ghh.Key_G){dwd.chh[qtf]=(ghh.Key_G);dwd.Event[qtf]=true;}if(ghh.Key_H){dwd.chh[rtf]=(ghh.Key_H);dwd.Event[rtf]=true;}if(ghh.Key_I){dwd.chh[stf]=(ghh.Key_I);dwd.Event[stf]=true;}if(ghh.Key_J){dwd.chh[ttf]=(ghh.Key_J);dwd.Event[ttf]=true;}if(ghh.Key_K){dwd.chh[utf]=(ghh.Key_K);dwd.Event[utf]=true;}if(ghh.Key_L){dwd.chh[vtf]=(ghh.Key_L);dwd.Event[vtf]=true;}if(ghh.Key_M){dwd.chh[wtf]=(ghh.Key_M);dwd.Event[wtf]=true;}if(ghh.Key_N){dwd.chh[xtf]=(ghh.Key_N);dwd.Event[xtf]=true;}if(ghh.Key_O){dwd.chh[ytf]=(ghh.Key_O);
dwd.Event[ytf]=true;}if(ghh.Key_P){dwd.chh[ztf]=(ghh.Key_P);dwd.Event[ztf]=true;}if(ghh.Key_Q){dwd.chh[auf]=(ghh.Key_Q);dwd.Event[auf]=true;}if(ghh.Key_R){dwd.chh[buf]=(ghh.Key_R);dwd.Event[buf]=true;}if(ghh.Key_S){dwd.chh[cuf]=(ghh.Key_S);dwd.Event[cuf]=true;}if(ghh.Key_T){dwd.chh[duf]=(ghh.Key_T);dwd.Event[duf]=true;}if(ghh.Key_U){dwd.chh[euf]=(ghh.Key_U);dwd.Event[euf]=true;}if(ghh.Key_V){dwd.chh[fuf]=(ghh.Key_V);dwd.Event[fuf]=true;}if(ghh.Key_W){dwd.chh[guf]=(ghh.Key_W);dwd.Event[guf]=true;
}if(ghh.Key_X){dwd.chh[huf]=(ghh.Key_X);dwd.Event[huf]=true;}if(ghh.Key_Y){dwd.chh[iuf]=(ghh.Key_Y);dwd.Event[iuf]=true;}if(ghh.Key_Z){dwd.chh[juf]=(ghh.Key_Z);dwd.Event[juf]=true;}if(ghh.Key_F1){dwd.chh[kuf]=(ghh.Key_F1);dwd.Event[kuf]=true;}if(ghh.Key_F2){dwd.chh[luf]=(ghh.Key_F2);dwd.Event[luf]=true;}if(ghh.Key_F3){dwd.chh[muf]=(ghh.Key_F3);dwd.Event[muf]=true;}if(ghh.Key_F4){dwd.chh[nuf]=(ghh.Key_F4);dwd.Event[nuf]=true;}if(ghh.Key_F5){dwd.chh[ouf]=(ghh.Key_F5);dwd.Event[ouf]=true;}if(ghh.Key_F6){
dwd.chh[puf]=(ghh.Key_F6);dwd.Event[puf]=true;}if(ghh.Key_F7){dwd.chh[quf]=(ghh.Key_F7);dwd.Event[quf]=true;}if(ghh.Key_F8){dwd.chh[ruf]=(ghh.Key_F8);dwd.Event[ruf]=true;}if(ghh.Key_F9){dwd.chh[suf]=(ghh.Key_F9);dwd.Event[suf]=true;}if(ghh.Key_F10){dwd.chh[tuf]=(ghh.Key_F10);dwd.Event[tuf]=true;}if(ghh.Key_F11){dwd.chh[uuf]=(ghh.Key_F11);dwd.Event[uuf]=true;}if(ghh.Key_F12){dwd.chh[vuf]=(ghh.Key_F12);dwd.Event[vuf]=true;}if(ghh.Key_NUM_LOCK){dwd.chh[jvf]=(ghh.Key_NUM_LOCK);dwd.Event[jvf]=true;}if(ghh.Key_NUM_0){
dwd.chh[kvf]=(ghh.Key_NUM_0);dwd.Event[kvf]=true;}if(ghh.Key_NUM_1){dwd.chh[lvf]=(ghh.Key_NUM_1);dwd.Event[lvf]=true;}if(ghh.Key_NUM_2){dwd.chh[mvf]=(ghh.Key_NUM_2);dwd.Event[mvf]=true;}if(ghh.Key_NUM_3){dwd.chh[nvf]=(ghh.Key_NUM_3);dwd.Event[nvf]=true;}if(ghh.Key_NUM_4){dwd.chh[ovf]=(ghh.Key_NUM_4);dwd.Event[ovf]=true;}if(ghh.Key_NUM_5){dwd.chh[pvf]=(ghh.Key_NUM_5);dwd.Event[pvf]=true;}if(ghh.Key_NUM_6){dwd.chh[qvf]=(ghh.Key_NUM_6);dwd.Event[qvf]=true;}if(ghh.Key_NUM_7){dwd.chh[rvf]=(ghh.Key_NUM_7);
dwd.Event[rvf]=true;}if(ghh.Key_NUM_8){dwd.chh[svf]=(ghh.Key_NUM_8);dwd.Event[svf]=true;}if(ghh.Key_NUM_9){dwd.chh[tvf]=(ghh.Key_NUM_9);dwd.Event[tvf]=true;}if(ghh.Key_NUM_STAR){dwd.chh[uvf]=(ghh.Key_NUM_STAR);dwd.Event[uvf]=true;}if(ghh.Key_NUM_PLUS){dwd.chh[vvf]=(ghh.Key_NUM_PLUS);dwd.Event[vvf]=true;}if(ghh.Key_NUM_MINUS){dwd.chh[wvf]=(ghh.Key_NUM_MINUS);dwd.Event[wvf]=true;}if(ghh.Key_NUM_DOT){dwd.chh[xvf]=(ghh.Key_NUM_DOT);dwd.Event[xvf]=true;}if(ghh.Key_NUM_DIV){dwd.chh[yvf]=(ghh.Key_NUM_DIV);
dwd.Event[yvf]=true;}if(ghh.KeyReleased_NOKEY){dwd.ehh[zvf]=(ghh.KeyReleased_NOKEY);dwd.Event[zvf]=true;}if(ghh.KeyReleased_ANYKEY){dwd.ehh[bwf]=(ghh.KeyReleased_ANYKEY);dwd.Event[bwf]=true;}if(ghh.KeyReleased_BACKSPACE){dwd.ehh[cwf]=(ghh.KeyReleased_BACKSPACE);dwd.Event[cwf]=true;}if(ghh.KeyReleased_TAB){dwd.ehh[dwf]=(ghh.KeyReleased_TAB);dwd.Event[dwf]=true;}if(ghh.KeyReleased_ENTER){dwd.ehh[ewf]=(ghh.KeyReleased_ENTER);dwd.Event[ewf]=true;}if(ghh.KeyReleased_SHIFT){dwd.ehh[fwf]=(ghh.KeyReleased_SHIFT);
dwd.Event[fwf]=true;}if(ghh.KeyReleased_CTRL){dwd.ehh[gwf]=(ghh.KeyReleased_CTRL);dwd.Event[gwf]=true;}if(ghh.KeyReleased_ALT){dwd.ehh[hwf]=(ghh.KeyReleased_ALT);dwd.Event[hwf]=true;}if(ghh.KeyReleased_PAUSE){dwd.ehh[iwf]=(ghh.KeyReleased_PAUSE);dwd.Event[iwf]=true;}if(ghh.KeyReleased_ESCAPE){dwd.ehh[jwf]=(ghh.KeyReleased_ESCAPE);dwd.Event[jwf]=true;}if(ghh.KeyReleased_SPACE){dwd.ehh[kwf]=(ghh.KeyReleased_SPACE);dwd.Event[kwf]=true;}if(ghh.KeyReleased_PAGEUP){dwd.ehh[lwf]=(ghh.KeyReleased_PAGEUP);
dwd.Event[lwf]=true;}if(ghh.KeyReleased_PAGEDOWN){dwd.ehh[mwf]=(ghh.KeyReleased_PAGEDOWN);dwd.Event[mwf]=true;}if(ghh.KeyReleased_END){dwd.ehh[nwf]=(ghh.KeyReleased_END);dwd.Event[nwf]=true;}if(ghh.KeyReleased_HOME){dwd.ehh[owf]=(ghh.KeyReleased_HOME);dwd.Event[owf]=true;}if(ghh.KeyReleased_LEFT){dwd.ehh[pwf]=(ghh.KeyReleased_LEFT);dwd.Event[pwf]=true;}if(ghh.KeyReleased_UP){dwd.ehh[qwf]=(ghh.KeyReleased_UP);dwd.Event[qwf]=true;}if(ghh.KeyReleased_RIGHT){dwd.ehh[rwf]=(ghh.KeyReleased_RIGHT);dwd.Event[rwf]=true;
}if(ghh.KeyReleased_DOWN){dwd.ehh[swf]=(ghh.KeyReleased_DOWN);dwd.Event[swf]=true;}if(ghh.KeyReleased_INSERT){dwd.ehh[twf]=(ghh.KeyReleased_INSERT);dwd.Event[twf]=true;}if(ghh.KeyReleased_DELETE){dwd.ehh[uwf]=(ghh.KeyReleased_DELETE);dwd.Event[uwf]=true;}if(ghh.KeyReleased_0){dwd.ehh[vwf]=(ghh.KeyReleased_0);dwd.Event[vwf]=true;}if(ghh.KeyReleased_1){dwd.ehh[wwf]=(ghh.KeyReleased_1);dwd.Event[wwf]=true;}if(ghh.KeyReleased_2){dwd.ehh[xwf]=(ghh.KeyReleased_2);dwd.Event[xwf]=true;}if(ghh.KeyReleased_3){
dwd.ehh[ywf]=(ghh.KeyReleased_3);dwd.Event[ywf]=true;}if(ghh.KeyReleased_4){dwd.ehh[zwf]=(ghh.KeyReleased_4);dwd.Event[zwf]=true;}if(ghh.KeyReleased_5){dwd.ehh[axf]=(ghh.KeyReleased_5);dwd.Event[axf]=true;}if(ghh.KeyReleased_6){dwd.ehh[bxf]=(ghh.KeyReleased_6);dwd.Event[bxf]=true;}if(ghh.KeyReleased_7){dwd.ehh[cxf]=(ghh.KeyReleased_7);dwd.Event[cxf]=true;}if(ghh.KeyReleased_8){dwd.ehh[dxf]=(ghh.KeyReleased_8);dwd.Event[dxf]=true;}if(ghh.KeyReleased_9){dwd.ehh[exf]=(ghh.KeyReleased_9);dwd.Event[exf]=true;
}if(ghh.KeyReleased_A){dwd.ehh[fxf]=(ghh.KeyReleased_A);dwd.Event[fxf]=true;}if(ghh.KeyReleased_B){dwd.ehh[gxf]=(ghh.KeyReleased_B);dwd.Event[gxf]=true;}if(ghh.KeyReleased_C){dwd.ehh[hxf]=(ghh.KeyReleased_C);dwd.Event[hxf]=true;}if(ghh.KeyReleased_D){dwd.ehh[ixf]=(ghh.KeyReleased_D);dwd.Event[ixf]=true;}if(ghh.KeyReleased_E){dwd.ehh[jxf]=(ghh.KeyReleased_E);dwd.Event[jxf]=true;}if(ghh.KeyReleased_F){dwd.ehh[kxf]=(ghh.KeyReleased_F);dwd.Event[kxf]=true;}if(ghh.KeyReleased_G){dwd.ehh[lxf]=(ghh.KeyReleased_G);
dwd.Event[lxf]=true;}if(ghh.KeyReleased_H){dwd.ehh[mxf]=(ghh.KeyReleased_H);dwd.Event[mxf]=true;}if(ghh.KeyReleased_I){dwd.ehh[nxf]=(ghh.KeyReleased_I);dwd.Event[nxf]=true;}if(ghh.KeyReleased_J){dwd.ehh[oxf]=(ghh.KeyReleased_J);dwd.Event[oxf]=true;}if(ghh.KeyReleased_K){dwd.ehh[pxf]=(ghh.KeyReleased_K);dwd.Event[pxf]=true;}if(ghh.KeyReleased_L){dwd.ehh[qxf]=(ghh.KeyReleased_L);dwd.Event[qxf]=true;}if(ghh.KeyReleased_M){dwd.ehh[rxf]=(ghh.KeyReleased_M);dwd.Event[rxf]=true;}if(ghh.KeyReleased_N){dwd.ehh[sxf]=(ghh.KeyReleased_N);
dwd.Event[sxf]=true;}if(ghh.KeyReleased_O){dwd.ehh[txf]=(ghh.KeyReleased_O);dwd.Event[txf]=true;}if(ghh.KeyReleased_P){dwd.ehh[uxf]=(ghh.KeyReleased_P);dwd.Event[uxf]=true;}if(ghh.KeyReleased_Q){dwd.ehh[vxf]=(ghh.KeyReleased_Q);dwd.Event[vxf]=true;}if(ghh.KeyReleased_R){dwd.ehh[wxf]=(ghh.KeyReleased_R);dwd.Event[wxf]=true;}if(ghh.KeyReleased_S){dwd.ehh[xxf]=(ghh.KeyReleased_S);dwd.Event[xxf]=true;}if(ghh.KeyReleased_T){dwd.ehh[yxf]=(ghh.KeyReleased_T);dwd.Event[yxf]=true;}if(ghh.KeyReleased_U){dwd.ehh[zxf]=(ghh.KeyReleased_U);
dwd.Event[zxf]=true;}if(ghh.KeyReleased_V){dwd.ehh[ayf]=(ghh.KeyReleased_V);dwd.Event[ayf]=true;}if(ghh.KeyReleased_W){dwd.ehh[byf]=(ghh.KeyReleased_W);dwd.Event[byf]=true;}if(ghh.KeyReleased_X){dwd.ehh[cyf]=(ghh.KeyReleased_X);dwd.Event[cyf]=true;}if(ghh.KeyReleased_Y){dwd.ehh[dyf]=(ghh.KeyReleased_Y);dwd.Event[dyf]=true;}if(ghh.KeyReleased_Z){dwd.ehh[eyf]=(ghh.KeyReleased_Z);dwd.Event[eyf]=true;}if(ghh.KeyReleased_F1){dwd.ehh[fyf]=(ghh.KeyReleased_F1);dwd.Event[fyf]=true;}if(ghh.KeyReleased_F2){
dwd.ehh[gyf]=(ghh.KeyReleased_F2);dwd.Event[gyf]=true;}if(ghh.KeyReleased_F3){dwd.ehh[hyf]=(ghh.KeyReleased_F3);dwd.Event[hyf]=true;}if(ghh.KeyReleased_F4){dwd.ehh[iyf]=(ghh.KeyReleased_F4);dwd.Event[iyf]=true;}if(ghh.KeyReleased_F5){dwd.ehh[jyf]=(ghh.KeyReleased_F5);dwd.Event[jyf]=true;}if(ghh.KeyReleased_F6){dwd.ehh[kyf]=(ghh.KeyReleased_F6);dwd.Event[kyf]=true;}if(ghh.KeyReleased_F7){dwd.ehh[lyf]=(ghh.KeyReleased_F7);dwd.Event[lyf]=true;}if(ghh.KeyReleased_F8){dwd.ehh[myf]=(ghh.KeyReleased_F8);
dwd.Event[myf]=true;}if(ghh.KeyReleased_F9){dwd.ehh[nyf]=(ghh.KeyReleased_F9);dwd.Event[nyf]=true;}if(ghh.KeyReleased_F10){dwd.ehh[oyf]=(ghh.KeyReleased_F10);dwd.Event[oyf]=true;}if(ghh.KeyReleased_F11){dwd.ehh[pyf]=(ghh.KeyReleased_F11);dwd.Event[pyf]=true;}if(ghh.KeyReleased_F12){dwd.ehh[qyf]=(ghh.KeyReleased_F12);dwd.Event[qyf]=true;}if(ghh.KeyReleased_NUM_LOCK){dwd.ehh[ezf]=(ghh.KeyReleased_NUM_LOCK);dwd.Event[ezf]=true;}if(ghh.KeyReleased_NUM_0){dwd.ehh[fzf]=(ghh.KeyReleased_NUM_0);dwd.Event[fzf]=true;
}if(ghh.KeyReleased_NUM_1){dwd.ehh[gzf]=(ghh.KeyReleased_NUM_1);dwd.Event[gzf]=true;}if(ghh.KeyReleased_NUM_2){dwd.ehh[hzf]=(ghh.KeyReleased_NUM_2);dwd.Event[hzf]=true;}if(ghh.KeyReleased_NUM_3){dwd.ehh[izf]=(ghh.KeyReleased_NUM_3);dwd.Event[izf]=true;}if(ghh.KeyReleased_NUM_4){dwd.ehh[jzf]=(ghh.KeyReleased_NUM_4);dwd.Event[jzf]=true;}if(ghh.KeyReleased_NUM_5){dwd.ehh[kzf]=(ghh.KeyReleased_NUM_5);dwd.Event[kzf]=true;}if(ghh.KeyReleased_NUM_6){dwd.ehh[lzf]=(ghh.KeyReleased_NUM_6);dwd.Event[lzf]=true;
}if(ghh.KeyReleased_NUM_7){dwd.ehh[mzf]=(ghh.KeyReleased_NUM_7);dwd.Event[mzf]=true;}if(ghh.KeyReleased_NUM_8){dwd.ehh[nzf]=(ghh.KeyReleased_NUM_8);dwd.Event[nzf]=true;}if(ghh.KeyReleased_NUM_9){dwd.ehh[ozf]=(ghh.KeyReleased_NUM_9);dwd.Event[ozf]=true;}if(ghh.KeyReleased_NUM_STAR){dwd.ehh[pzf]=(ghh.KeyReleased_NUM_STAR);dwd.Event[pzf]=true;}if(ghh.KeyReleased_NUM_PLUS){dwd.ehh[qzf]=(ghh.KeyReleased_NUM_PLUS);dwd.Event[qzf]=true;}if(ghh.KeyReleased_NUM_MINUS){dwd.ehh[rzf]=(ghh.KeyReleased_NUM_MINUS);
dwd.Event[rzf]=true;}if(ghh.KeyReleased_NUM_DOT){dwd.ehh[szf]=(ghh.KeyReleased_NUM_DOT);dwd.Event[szf]=true;}if(ghh.KeyReleased_NUM_DIV){dwd.ehh[tzf]=(ghh.KeyReleased_NUM_DIV);dwd.Event[tzf]=true;}var i=0;if(ghh.TriggerEvents!=undefined){while(i<ghh.TriggerEvents.length){var dt=parseInt(ghh.TriggerEvents[i])+1;var pFunc=ghh.TriggerEvents[i+1];var hhh=pag.mvc(dt);dwd.Event[umf]=true;dwd.Event[umf|dt]=true;var ihh=new tgh();ihh.ugh=pFunc;ihh.wgh=hhh;ihh.vgh=dt;dwd.Triggers[umf|dt]=ihh;i+=2;}}i=0;if(ghh.CollisionEvents!=undefined){
while(i<ghh.CollisionEvents.length){dwd.Event[naf]=true;var dt=parseInt(ghh.CollisionEvents[i]);var jhh=ghh.CollisionEvents[i+1];var khh=new xgh();khh.ugh=jhh;khh.lhh=false;khh.rxc=this;dwd.lfg[dt]=khh;i+=2;}}}return dwd;}taf.prototype.mhh=function(erd,frd){if(this.Event[erd])return true;return false;};taf.prototype.yzc=function(erd,index,wjd,drd){var nhh=yrd;var ohh=zrd;var phh=wrd;var qhh=fyc;wrd=this;yrd=erd;zrd=index;fyc=false;var rch=true;switch(erd){case zzc:if(this.CreateEvent)this.CreateEvent(wjd,drd);
else rch=false;break;case jwd:if(this.DestroyEvent)this.DestroyEvent(wjd,drd);else rch=false;break;case khf:rch=false;break;case aof:rch=false;break;case naf:if(this.lfg[index])this.lfg[index].ugh(wjd,drd);break;case kif:if(this.chh[erd|index])this.chh[erd|index](wjd,drd);else rch=false;break;case bof:rch=false;break;case kff:rch=false;break;case omf:if(this.DrawEvent)this.DrawEvent(wjd,drd);else rch=false;break;case qmf:if(this.dhh[erd|index])this.dhh[erd|index](wjd,drd);else rch=false;break;case smf:if(this.ehh[erd|index])this.ehh[erd|index](wjd,
drd);else rch=false;break;case umf:if(this.Triggers[erd|index]){var rhh=this.Triggers[erd|index];var ihh=rhh.wgh;var em=ihh.pFunc(wjd,drd);if(em|hrd){rhh.ugh(wjd,drd);}}break;case dif:if(this.StepBeginEvent)this.StepBeginEvent(wjd,drd);else rch=false;break;case fif:if(this.StepNormalEvent)this.StepNormalEvent(wjd,drd);else rch=false;break;case hif:if(this.StepEndEvent)this.StepEndEvent(wjd,drd);else rch=false;break;case jff:if(this.OutsideEvent)this.OutsideEvent(wjd,drd);else rch=false;break;case lff:if(this.BoundaryEvent)this.BoundaryEvent(wjd,
drd);else rch=false;break;case kkf:if(this.StartGameEvent)this.StartGameEvent(wjd,drd);else rch=false;break;case mkf:if(this.EndGameEvent)this.EndGameEvent(wjd,drd);else rch=false;break;case okf:if(this.StartRoomEvent)this.StartRoomEvent(wjd,drd);else rch=false;break;case qkf:if(this.EndRoomEvent)this.EndRoomEvent(wjd,drd);else rch=false;break;case ebd:if(this.NoLivesEvent)this.NoLivesEvent(wjd,drd);else rch=false;break;case tkf:if(this.AnimationEndEvent)this.AnimationEndEvent(wjd,drd);else rch=false;break;case vkf:if(this.EndOfPathEvent)this.EndOfPathEvent(wjd,
drd);else rch=false;break;case wkf:if(this.NoHealthEvent)this.NoHealthEvent(wjd,drd);else rch=false;break;case ykf:if(this.CloseButtonEvent)this.CloseButtonEvent(wjd,drd);else rch=false;break;case alf:if(this.OutsideView0Event)this.OutsideView0Event(wjd,drd);else rch=false;break;case clf:if(this.BoundaryView0Event)this.BoundaryView0Event(wjd,drd);else rch=false;break;case jmf:if(this.WebImageLoadedEvent)this.WebImageLoadedEvent(wjd,drd);else rch=false;break;case lmf:if(this.WebSoundLoadedEvent)this.WebSoundLoadedEvent(wjd,
drd);else rch=false;break;case cof:if(this.WebAsyncEvent)this.WebAsyncEvent(wjd,drd);else rch=false;break;case dlf:if(this.UserEvent0)this.UserEvent0(wjd,drd);else rch=false;break;case flf:if(this.UserEvent1)this.UserEvent1(wjd,drd);else rch=false;break;case hlf:if(this.UserEvent2)this.UserEvent2(wjd,drd);else rch=false;break;case jlf:if(this.UserEvent3)this.UserEvent3(wjd,drd);else rch=false;break;case llf:if(this.UserEvent4)this.UserEvent4(wjd,drd);else rch=false;break;case nlf:if(this.UserEvent5)this.UserEvent5(wjd,
drd);else rch=false;break;case plf:if(this.UserEvent6)this.UserEvent6(wjd,drd);else rch=false;break;case rlf:if(this.UserEvent7)this.UserEvent7(wjd,drd);else rch=false;break;case tlf:if(this.UserEvent8)this.UserEvent8(wjd,drd);else rch=false;break;case vlf:if(this.UserEvent9)this.UserEvent9(wjd,drd);else rch=false;break;case xlf:if(this.UserEvent10)this.UserEvent10(wjd,drd);else rch=false;break;case zlf:if(this.UserEvent11)this.UserEvent11(wjd,drd);else rch=false;break;case bmf:if(this.UserEvent12)this.UserEvent12(wjd,
drd);else rch=false;break;case dmf:if(this.UserEvent13)this.UserEvent13(wjd,drd);else rch=false;break;case fmf:if(this.UserEvent14)this.UserEvent14(wjd,drd);else rch=false;break;case hmf:if(this.UserEvent15)this.UserEvent15(wjd,drd);else rch=false;break;case sgf:if(this.NoButtonPressed)this.NoButtonPressed(wjd,drd);else rch=false;break;case jgf:if(this.LeftButtonDown)this.LeftButtonDown(wjd,drd);else rch=false;break;case lgf:if(this.RightButtonDown)this.RightButtonDown(wjd,drd);else rch=false;break;case kgf:if(this.MiddleButtonDown)this.MiddleButtonDown(wjd,
drd);else rch=false;break;case mgf:if(this.LeftButtonPressed)this.LeftButtonPressed(wjd,drd);else rch=false;break;case ogf:if(this.RightButtonPressed)this.RightButtonPressed(wjd,drd);else rch=false;break;case ngf:if(this.MiddleButtonPressed)this.MiddleButtonPressed(wjd,drd);else rch=false;break;case pgf:if(this.LeftButtonReleased)this.LeftButtonReleased(wjd,drd);else rch=false;break;case rgf:if(this.RightButtonReleased)this.RightButtonReleased(wjd,drd);else rch=false;break;case qgf:if(this.MiddleButtonReleased)this.MiddleButtonReleased(wjd,
drd);else rch=false;break;case zgf:if(this.GlobalLeftButtonDown)this.GlobalLeftButtonDown(wjd,drd);else rch=false;break;case dof:if(this.GlobalRightButtonDown)this.GlobalRightButtonDown(wjd,drd);else rch=false;break;case eof:if(this.GlobalMiddleButtonDown)this.GlobalMiddleButtonDown(wjd,drd);else rch=false;break;case ahf:if(this.GlobalLeftButtonPressed)this.GlobalLeftButtonPressed(wjd,drd);else rch=false;break;case fof:if(this.GlobalRightButtonPressed)this.GlobalRightButtonPressed(wjd,drd);else rch=false;break;
case gof:if(this.GlobalMiddleButtonPressed)this.GlobalMiddleButtonPressed(wjd,drd);else rch=false;break;case bhf:if(this.GlobalLeftButtonReleased)this.GlobalLeftButtonReleased(wjd,drd);else rch=false;break;case hof:if(this.GlobalRightButtonReleased)this.GlobalRightButtonReleased(wjd,drd);else rch=false;break;case iof:if(this.GlobalMiddleButtonReleased)this.GlobalMiddleButtonReleased(wjd,drd);else rch=false;break;case tgf:if(this.MouseEnter)this.MouseEnter(wjd,drd);else rch=false;break;case ugf:if(this.MouseLeave)this.MouseLeave(wjd,
drd);else rch=false;break;case phf:if(this.bhh[0]!=null)this.bhh[0](wjd,drd);else rch=false;break;case qhf:if(this.bhh[1]!=null)this.bhh[1](wjd,drd);else rch=false;break;case rhf:if(this.bhh[2]!=null)this.bhh[2](wjd,drd);else rch=false;break;case shf:if(this.bhh[3]!=null)this.bhh[3](wjd,drd);else rch=false;break;case thf:if(this.bhh[4]!=null)this.bhh[4](wjd,drd);else rch=false;break;case uhf:if(this.bhh[5]!=null)this.bhh[5](wjd,drd);else rch=false;break;case vhf:if(this.bhh[6]!=null)this.bhh[6](wjd,drd);else rch=false;
break;case whf:if(this.bhh[7]!=null)this.bhh[7](wjd,drd);else rch=false;break;case xhf:if(this.bhh[8]!=null)this.bhh[8](wjd,drd);else rch=false;break;case yhf:if(this.bhh[9]!=null)this.bhh[9](wjd,drd);else rch=false;break;case zhf:if(this.bhh[10]!=null)this.bhh[10](wjd,drd);else rch=false;break;case aif:if(this.bhh[11]!=null)this.bhh[11](wjd,drd);else rch=false;break;default :rch=false;}fyc=qhh;yrd=nhh;zrd=ohh;wrd=phh;return rch;};taf.prototype.mah=function(akd){this.vgf.xnb(akd);var dwd=this;while(dwd!=null){
dwd.zpd.xnb(akd);dwd=dwd.vrd;}};taf.prototype.lah=function(akd){this.vgf.tmg(akd);var shh=this;while(shh!=null){shh.zpd.tmg(akd);shh=shh.vrd;}};taf.prototype.thh=function(erd,jwc){if(!this.Event[erd|jwc])return;var pfc=this.vgf.pfc;for(var i=0;i<pfc.length;i++){var ewd=pfc[i];this.yzc(erd,jwc,ewd,ewd);}};function tdg(){this.uhh=[];this.vhh=[];this.length=0;}tdg.prototype.yce=function(){return this.vhh;};tdg.prototype.xnb=function(whh){this.length++;this.uhh[whh.mxd]=whh;this.vhh[whh.oee]=whh;};tdg.prototype.mvc=function(fhh){
return this.vhh[fhh];};tdg.prototype.exd=function(utc){if(!this.vhh[utc])return false;else return true;};tdg.prototype.xhh=function(fhh){var dwd=this.vhh[jwc];if(!dwd){return "<undefined>";}else {return dwd.mxd;}};tdg.prototype.yhh=function(god){var dwd=this.uhh[god];if(dwd!=null)return dwd.oee;return -1;};tdg.prototype.lng=function(erd,jwc){for(var iwd in ypd.vhh){var dwd=ypd.vhh[iwd];if(dwd.Event[erd|jwc]){dwd.thh(erd|jwc);}}};tdg.prototype.ufg=function(){var pfc=this.vhh;for(var index in pfc){var dwd=pfc[index];
dwd.vrd=ypd.mvc(dwd.xrd);if(!dwd.vrd)dwd.vrd=null;for(var obb in dwd.Event){var xdh=dwd.Event[obb];if(xdh){dwd.iff[obb]=true;}}}for(var index in pfc){var zhh=pfc[index];var dwd=zhh.vrd;while(dwd!=null){for(var obb in dwd.Event){var xdh=dwd.Event[obb];if(xdh){zhh.iff[obb]=true;}}dwd=dwd.vrd;}}};function GetWithArray(fhh){if(fhh==mgd){return wzc.yce().slice(0);}var dwd=ypd.mvc(fhh);if(dwd!=null){return dwd.zpd.pfc.slice(0);}var ewd=dbd.mvc(fhh);if(ewd!=null){var rbb=[];rbb[0]=ewd;return rbb;}return null;}function object_set_sprite(kid,
tyc){var dwd=ypd.vhh[kid];if(!dwd)return;var une=ibd.mvc(tyc);if(!une)return;dwd.bxd=tyc;}function object_set_solid(kid,iee){var dwd=ypd.vhh[kid];if(!dwd)return;var jn=false;if(iee>0.5)jn=true;dwd.dee=jn;}function object_set_visible(kid,jee){var dwd=ypd.vhh[kid];if(!dwd)return;var jn=false;if(jee>0.5)jn=true;dwd.eee=jn;}function object_set_depth(kid,oxc){var dwd=ypd.vhh[kid];if(!dwd)return;dwd.fee=oxc;}function object_set_persistent(kid,kee){var dwd=ypd.vhh[kid];if(!dwd)return;var jn=false;if(kee>0.5)jn=true;
dwd.gee=jn;}function object_set_mask(kid,tyc){djd("object_set_mask()")}function object_set_parent(kid,pxc){djd("object_set_parent()")}function txc(){this.pfc=[];this.length=0;this.ay=0;this.aih=-1;}txc.prototype.mvc=function(jwc){return this.pfc[jwc];};txc.prototype.xnb=function(rmg){for(var i=0;i<this.pfc.length;i++){if(rmg.depth<this.pfc[i].depth){this.pfc.splice(i,0,rmg);this.ay++;this.length=this.pfc.length;return i;}}this.pfc[this.pfc.length]=rmg;this.ay++;this.length=this.pfc.length;return this.length-1;
};txc.prototype.ixd=function(rmg){if(this.aih<0){this.aih=this.pfc.length;}this.pfc[this.pfc.length]=rmg;this.ay++;this.length=this.pfc.length;return this.length-1;};txc.prototype.bxc=function(rmg){var i=this.aih;if(i<0)return;var uwc=[];while(i<this.pfc.length){uwc[uwc.length]=this.pfc[i];i++;}this.pfc.splice(this.aih,this.pfc.length-this.aih);for(i=0;i<uwc.length;i++){this.xnb(uwc[i]);}this.aih=-1;};txc.prototype.zxc=function(rmg){for(var i=0;i<this.pfc.length;i++){if(rmg==this.pfc[i]){this.pfc.splice(i,
1);this.ay--;this.length=this.pfc.length;return true;}}return false};txc.prototype.oyb=function(){this.pfc=[];this.length=this.ay=0;};txc.prototype.mvc=function(jwc){return this.pfc[jwc];};txc.prototype.gu=function(gvc){this.pfc=gvc.pfc.slice();this.length=gvc.length;this.ay=gvc.ay;this.aih=gvc.aih;};var bih=0,cih=1,dih=2,cff=3,wef=4,eih=5,pef=6,fih=7,sef=8,yef=9,nef=10,gih=11,hih=12,eff=13,iih=14,jih=0,kih=1,lih=2,mih=3,nih=4,oih=5,pfd=0,pih=1,qih=2,rih=0,sih=1,tih=2,uih=3;function vih(){this.oz=wih;
this.oyb=wih;this.oz();}function wih(){this.aad=true;this.yvb=-1;this.xih=true;this.yih=false;this.zih=false;this.qw=bih;this.ajh=1.0;this.bjh=1.0;this.cjh=0.0;this.djh=0.0;this.rme=1.0;this.sme=1.0;this.ejh=100;this.fjh=100;this.gjh=0;this.hjh=0;this.ijh=0;this.jjh=0;this.kjh=0.0;this.ljh=0.0;this.mjh=0.0;this.njh=0.0;this.ojh=0.0;this.pjh=0.0;this.qjh=0.0;this.rjh=0.0;this.sjh=0.0;this.tjh=0.0;this.ujh=0.0;this.vjh=0.0;this.wjh=0.0;this.xjh=0.0;this.yjh=270.0;this.zjh=jih;this.akh=[];this.akh[0]=jbd;
this.akh[1]=jbd;this.akh[2]=jbd;this.bkh=1.0;this.ckh=1.0;this.dkh=1.0;this.ekh=false;;}function fkh(){this.oyb=gkh;this.oz=gkh;this.oz();}function gkh(){this.aad=true;this.sfd=0;this.hkh=0;this.zce=0.0;this.ade=0.0;this.bde=0.0;this.cde=0.0;this.qw=rih;this.ikh=pfd;}function jkh(){this.kkh;this.hkh;this.lkh;this.mkh;this.x;this.y;this.speed;this.rde;this.dug;this.owb;this.ndb;this.size;this.nkh;this.okh;};function pkh(){this.oyb=qkh;this.oz=qkh;this.oz();}function qkh(){this.aad=false;this.rkh=[];this.skh=[];
this.tkh=false;this.depth=0.0;this.ukh=0.0;this.vkh=0.0;this.wkh=true;this.xkh=true;};function izc(lzd){var lq=kzd();return lq*lzd;}function ykh(zkh,alh,blh){var dmg=alh-zkh;if(dmg<=0)return zkh;var qud=0.0;var vad=0.0;switch(blh){case pfd:vad=zkh+izc(1)*dmg;break;case pih:{do {qud=(izc(1)-0.5)*6.0;}while(!(exp(-(qud*qud)*0.5)>izc(1)));vad=zkh+((qud+3.0)*(1.0/6.0))*dmg;}break;case qih:{do {qud=(izc(1)-0.5)*6.0;}while(!(exp(-(qud*qud)*0.5)>izc(1)));if(qud<0.0)qud+=6.0;vad=zkh+(qud*(1.0/6.0))*dmg;}break;default :vad=zkh+izc(1)*dmg;
}return vad;}function clh(cvc,lzd){var rde;if(cvc==0){if(lzd>0){rde=270;}else if(lzd<0){rde=90;}else {rde=0;}}else {var pud=180.0*(Math.atan2(lzd,cvc))/Math.PI;if(pud<=0){rde=-pud;}else {rde=360.0-pud;}}return rde-360.0*Math.floor(rde/360.0);}function dlh(azc,elh){return elh*Math.cos(azc*Math.PI/180.0);}function flh(azc,elh){return -elh*Math.sin(azc*Math.PI/180.0);}function glh(hlh){ilh=lag[hlh.hkh];{if(hlh.lkh<=0||hlh.mkh<=0){switch(ilh.zjh){case jih:hlh.owb=ilh.akh[0];break;case kih:hlh.owb=ilh.akh[0];break;case lih:hlh.owb=ilh.akh[0];
break;case mih:{var lq=~~(ykh(ilh.akh[0],ilh.akh[1],pfd));var ard=~~(ykh(ilh.akh[2],ilh.akh[3],pfd));var jn=~~(ykh(ilh.akh[4],ilh.akh[5],pfd));hlh.owb=(lq<<16)+(brd.ard<<8)+brd.jn;}break;case nih:{var h=~~(ykh(ilh.akh[0],ilh.akh[1],pfd));var vm=~~(ykh(ilh.akh[2],ilh.akh[3],pfd));var hh=~~(ykh(ilh.akh[4],ilh.akh[5],pfd));hlh.owb=0xffffff;}break;case oih:hlh.owb=iid(crd(ilh.akh[0],ilh.akh[1],izc(1)));break;}}else {switch(ilh.zjh){case kih:{var bcd=hlh.lkh/hlh.mkh;if(bcd>1)bcd=1;hlh.owb=crd((ilh.akh[0]),(ilh.akh[1]),
bcd);}break;case lih:{var bcd=2.0*hlh.lkh/hlh.mkh;if(bcd>2)bcd=2;if(bcd<1){hlh.owb=crd(ilh.akh[0],ilh.akh[1],bcd);}else {hlh.owb=crd(ilh.akh[1],ilh.akh[2],bcd-1);}}break;}}}}function jlh(vtc,wtc,klh){var vad=new jkh;llh=lag[klh];if(llh==null||llh==undefined)return null;vad.kkh=true;vad.hkh=klh;vad.x=vtc;vad.y=wtc;vad.speed=ykh(llh.kjh,llh.ljh,0);vad.rde=ykh(llh.ojh,llh.pjh,0);vad.dug=ykh(llh.sjh,llh.tjh,0);vad.mkh=ykh(llh.ejh,llh.fjh,0);vad.lkh=0;vad.owb=0xffffff;glh(vad);vad.ndb=llh.bkh;vad.size=ykh(llh.ajh,
llh.bjh,0);if(llh.zih){vad.nkh=izc(10000);}else {vad.nkh=0;}vad.okh=izc(100000);return vad;}function udd(){var qfe=lag.length;lag[qfe]=new vih();return qfe;}function zee(kid){var mlh=lag[kid];if(mlh==null||mlh==undefined)return false;lag[kid]=null;return true;}function bfe(kid){var mlh=lag[kid];if(mlh==null||mlh==undefined)return false;lag[kid].oyb();return true;}function nlh(){lag=[];}function afe(kid){var mlh=lag[kid];if(mlh==null||mlh==undefined)return false;return true;}function wdd(kid,ndd){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;
mlh.qw=ndd;mlh.yvb=-1;}function aed(kid,mre,olh,plh,qlh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.yvb=mre;mlh.xih=olh;mlh.yih=plh;mlh.zih=qlh;}function xdd(kid,rlh,slh,tlh,ulh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.ajh=rlh;mlh.bjh=slh;mlh.cjh=tlh;mlh.djh=ulh;}function cfe(kid,hcd,icd){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.rme=hcd;mlh.sme=icd;}function led(kid,vlh,wlh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.ejh=vlh;mlh.fjh=wlh;}function efd(kid,
xlh,ylh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.hjh=xlh;mlh.gjh=ylh;}function ffd(kid,zlh,amh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.jjh=zlh;mlh.ijh=amh;}function red(kid,bmh,cmh,dmh,emh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.kjh=bmh;mlh.ljh=cmh;mlh.mjh=dmh;mlh.njh=emh;}function sed(kid,fmh,gmh,hmh,imh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.ojh=fmh;mlh.pjh=gmh;mlh.qjh=hmh;mlh.rjh=imh;}function kfe(kid,jmh,kmh,lmh,mmh,nmh){var mlh=lag[kid];
if(mlh==null||mlh==undefined)return;mlh.sjh=jmh;mlh.tjh=kmh;mlh.ujh=lmh;mlh.vjh=mmh;mlh.wjh=nmh;}function ved(kid,omh,pmh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.xjh=omh;mlh.yjh=pmh;}function gfe(kid,qmh,rmh,smh,tmh,umh,vmh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.zjh=mih;mlh.akh[0]=qmh;mlh.akh[1]=rmh;mlh.akh[2]=smh;mlh.akh[3]=tmh;mlh.akh[4]=umh;mlh.akh[5]=vmh;}function fed(kid,vfd,ncd){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.zjh=oih;mlh.akh[0]=iid(vfd);
mlh.akh[1]=iid(ncd);}function hfe(kid,wmh,xmh,ymh,zmh,anh,bnh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.zjh=nih;mlh.akh[0]=wmh;mlh.akh[1]=xmh;mlh.akh[2]=ymh;mlh.akh[3]=zmh;mlh.akh[4]=anh;mlh.akh[5]=bnh;}function efe(kid,cnh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.zjh=jih;mlh.akh[0]=iid(cnh);}function ydd(kid,cnh,dnh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.zjh=kih;mlh.akh[0]=iid(cnh);mlh.akh[1]=iid(dnh);}function ffe(kid,cnh,enh,dnh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;
mlh.zjh=jih;mlh.akh[0]=iid(cnh);mlh.akh[1]=iid(enh);mlh.akh[2]=iid(dnh);}function ife(kid,fnh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.bkh=fnh;mlh.ckh=fnh;mlh.dkh=fnh;}function ged(kid,fnh,gnh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.bkh=fnh;mlh.ckh=(fnh+gnh)/2.0;mlh.dkh=gnh;}function jfe(kid,fnh,hnh,gnh){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.bkh=fnh;mlh.ckh=hnh;mlh.dkh=gnh;}function inh(kid,dfe){var mlh=lag[kid];if(mlh==null||mlh==undefined)return;mlh.ekh=dfe;
}function mfd(mef){var jnh=mag[mef];if(jnh==null||jnh==undefined)return -1;var qfe=jnh.skh.length;jnh.skh[qfe]=new fkh();return qfe;}function qfd(mef,kid){var jnh=mag[mef];if(jnh==null||jnh==undefined)return false;var knh=jnh.skh[kid];if(knh==null||knh==undefined)return false;jnh.skh[kid]=null;return true;}function lfe(mef){var jnh=mag[mef];if(jnh==null||jnh==undefined)return false;jnh.skh=[];return true;}function mfe(mef,kid){var jnh=mag[mef];if(jnh==null||jnh==undefined)return false;var knh=jnh.skh[kid];if(knh==null||knh==undefined)return false;
return true;}function nfe(mef,kid){var jnh=mag[mef];if(jnh==null||jnh==undefined)return false;var knh=jnh.skh[kid];if(knh==null||knh==undefined)return false;knh.oz();}function ofd(mef,kid,hfd,ifd,jfd,kfd,ndd,lnh){var jnh=mag[mef];if(jnh==null||jnh==undefined)return;var knh=jnh.skh[kid];if(knh==null||knh==undefined)return;knh.zce=hfd;knh.ade=ifd;knh.bde=jfd;knh.cde=kfd;knh.qw=ndd;knh.ikh=lnh;}function tfd(mef,kid,mnh,aqd){if(aqd<0){var kzd=izc(-aqd)|0;if(kzd==0){aqd=1;}else {return;}}var jnh=mag[mef];if(jnh==null||jnh==undefined)return;
var knh=jnh.skh[kid];if(knh==null||knh==undefined)return;for(var i=0;i<=aqd-1;i++){var qud,rud;var nnh=false;while(nnh==false){qud=ykh(0.0,1.0,knh.ikh);rud=ykh(0.0,1.0,knh.ikh);if((knh.ikh==qih)&&(knh.qw!=uih)){if(izc()<0.5){qud=ykh(0.0,1.0,0);}else {rud=ykh(0.0,1.0,0);}}switch(knh.qw){case rih:nnh=true;break;case sih:if((fzd(qud-0.5)+fzd(rud-0.5))<=fzd(0.5))nnh=true;break;case tih:if((Math.abs(qud-0.5)+Math.abs(rud-0.5))<=0.5)nnh=true;break;case uih:nnh=true;break;default :nnh=true;break;}}if(knh.qw==uih){
wee(mef,knh.zce+(knh.ade-knh.zce)*qud,knh.bde+(knh.cde-knh.bde)*qud,mnh,1);}else {wee(mef,knh.zce+(knh.ade-knh.zce)*qud,knh.bde+(knh.cde-knh.bde)*rud,mnh,1);}}}function ufd(mef,kid,mnh,aqd){var jnh=mag[mef];if(jnh==null||jnh==undefined)return;var knh=jnh.skh[kid];if(knh==null||knh==undefined)return;knh.sfd=aqd;knh.hkh=mnh;}function wee(mef,vtc,wtc,klh,aqd){aqd=~~aqd;klh=~~klh;var jnh=mag[mef];if(jnh==null||jnh==undefined)return;var llh=lag[klh];if(llh==null||llh==undefined)return false;for(var i=0;i<aqd;
i++){var index=jnh.rkh.length;jnh.rkh[index]=jlh(vtc,wtc,klh);}}function xee(mef,vtc,wtc,klh,iad,aqd){var jnh=mag[mef];if(jnh==null||jnh==undefined)return;var llh=lag[klh];if(llh==null||llh==undefined)return false;for(var i=1;i<=aqd;i++){var index=jnh.rkh.length;jnh.rkh[index]=jlh(vtc,wtc,klh);jnh.rkh[index].owb=iid(iad);}}function ldd(mef){var jnh=mag[mef];if(jnh==null||jnh==undefined)return false;jnh.rkh=[];return true;}function onh(pnh,jwc){qnh.splice(jwc,1);}function yee(mef){var jnh=mag[mef];if(jnh==null||jnh==undefined)return 0;
return jnh.rkh.ay;}function hdd(){var index=mag.length;mag[index]=new pkh();mag[index].oyb();return index;}function pee(mef){var jnh=mag[mef];if(jnh==null||jnh==undefined)return false;return true;}function kdd(mef){var jnh=mag[mef];if(jnh==null||jnh==undefined)return;mag[mef]=null;return true;}function rnh(){mag=[];}function idd(mef){var jnh=mag[mef];if(jnh==null||jnh==undefined)return;jnh.oyb();}function snh(){for(var fff in mag){var jnh=mag[fff];if(jnh){jnh.rkh=[];}}}function qee(mef,tnh){var jnh=mag[mef];if(jnh==null||jnh==undefined)return;
jnh.tkh=tnh;}function jdd(mef,oxc){var jnh=mag[mef];if(jnh==null||jnh==undefined)return;jnh.depth=oxc;}function ree(mef,vtc,wtc){var jnh=mag[mef];if(jnh==null||jnh==undefined)return;jnh.ukh=vtc;jnh.vkh=wtc;}function see(mef,unh){var jnh=mag[mef];if(jnh==null||jnh==undefined)return;jnh.wkh=unh;}function tee(mef,unh){var jnh=mag[mef];if(jnh==null||jnh==undefined)return;jnh.xkh=unh;}function vnh(mef){var i=0;var upd=0;var qfe=0;var jnh=mag[mef];var qnh=jnh.rkh;i=0;while(i<qnh.length){var wnh=qnh[i];var llh=lag[wnh.hkh];
wnh.lkh++;if(wnh.lkh>=wnh.mkh){upd=llh.jjh;if(upd<0){if(izc(-upd)==0)upd=1;}if(upd>0){wee(mef,wnh.x,wnh.y,llh.ijh,upd);}qnh.splice(i,1);}else {upd=llh.hjh;if(upd<0){if(izc(-upd)==0)upd=1;}if(upd>0){wee(mef,wnh.x,wnh.y,llh.gjh,upd);}i++;}}}function xnh(mef){var i=0;var sjb=0;var hspeed=0.0;var vspeed=0.0;var ynh=0.0;var wt=0.0;var znh=0.0;var aoh=0.0;var boh=0.0;var coh=0.0;var doh=0.0;var eoh=0.0;var foh=0.0;var jnh=mag[mef];var qnh=jnh.rkh;for(i=0;i<qnh.length;i++){var wnh=qnh[i];var llh=lag[wnh.hkh];wnh.speed=wnh.speed+llh.mjh;
if(wnh.speed<0)wnh.speed=0;wnh.rde=wnh.rde+llh.qjh;wnh.dug=wnh.dug+llh.ujh;coh=0;doh=0;if((llh.xjh!=0)||(jnh.goh>0)){hspeed=dlh(wnh.rde,wnh.speed);vspeed=flh(wnh.rde,wnh.speed);if(llh.xjh!=0){ynh=dlh(llh.yjh,llh.xjh);wt=flh(llh.yjh,llh.xjh);hspeed=hspeed+ynh;vspeed=vspeed+wt;}wnh.rde=clh(hspeed,vspeed);wnh.speed=Math.sqrt(hspeed*hspeed+vspeed*vspeed);}eoh=((wnh.lkh+3*wnh.okh)%24)/6.0;if(eoh>2.0)eoh=4.0-eoh;eoh=eoh-1.0;foh=((wnh.lkh+4*wnh.okh)%20)/5.0;if(foh>2.0){foh=4.0-foh;}foh=foh-1.0;hspeed=dlh(wnh.rde+eoh*llh.rjh,
wnh.speed+foh*llh.njh);vspeed=flh(wnh.rde+eoh*llh.rjh,wnh.speed+foh*llh.njh);wnh.x=wnh.x+hspeed+coh;wnh.y=wnh.y+vspeed+doh;}}function hoh(mef){var jnh=mag[mef];var qnh=jnh.rkh;for(var i=0;i<qnh.length;i++){var wnh=qnh[i];var llh=lag[wnh.hkh];wnh.size=wnh.size+llh.cjh;if(wnh.size<0){wnh.size=0;}glh(wnh);var ioh;if(wnh.mkh>0){ioh=2.0*wnh.lkh/wnh.mkh;}else {ioh=1;}if(ioh<1){wnh.ndb=llh.bkh*(1-ioh)+llh.ckh*ioh;}else {wnh.ndb=llh.ckh*(2-ioh)+llh.dkh*(ioh-1);}}}function uee(mef){var jnh=mag[mef];if(jnh==null||jnh==undefined)return 0;
vnh(mef);xnh(mef);hoh(mef);var joh=jnh.skh;for(var i=0;i<joh.length;i++){if(joh[i].sfd!=0){tfd(mef,i,joh[i].hkh,joh[i].sfd);}}}function koh(){for(var i=0;i<mag.length;i++){var jnh=mag[i];if(jnh!=null){if(jnh.wkh){uee(i);}}}}function loh(hlh,gge,hge){var hbd=null;var fng=null;if(hlh.mkh<=0)return;var llh=lag[hlh.hkh];hbd=ibd.mvc(llh.yvb);if(hbd==null){var qw=llh.qw;if((qw>=0)&&(qw<iih)){fng=kag[qw];}else {return;}}var fad;if(fng!=null){}else {if(hbd.dqd<=0)return;if(!llh.xih){fad=hlh.nkh;}else if(llh.yih){fad=hlh.nkh+(hbd.upd*hlh.lkh/hlh.mkh);
}else {fad=hlh.nkh+hlh.lkh;}}var lq=((hlh.lkh+2*hlh.okh)%16)/4.0;if(lq>2.0)lq=4.0-lq;lq=lq-1.0;var moh=hlh.dug;if(llh.wjh)moh=moh+hlh.rde;moh=moh+lq*llh.vjh;lq=((hlh.lkh+hlh.okh)%16)/4.0;if(lq>2.0)lq=4.0-lq;lq=lq-1.0;var vm=hlh.size+lq*llh.djh;var c=hlh.owb;if(fng!=null){var rme,sme,dug;var otg=llh.rme*vm;var ptg=llh.sme*vm;var noh=moh;var ooh=~~(hlh.x+gge);var poh=~~(hlh.y+hge);if(otg==1&&ptg==1&&noh==0&&hlh.owb==0xffffff){sid(fng,hlh.ndb);}else {ere(fng,0,0,ooh,poh,otg,ptg,noh*0.017453293,c,c,c,c,hlh.ndb);
}}else {hbd.fcc(fad,hlh.x+gge,hlh.y+hge,lag[hlh.hkh].rme*vm,lag[hlh.hkh].sme*vm,moh,c,hlh.ndb);}}function vee(mef){var jnh=mag[mef];if(jnh==null||jnh==undefined)return;var qnh=jnh.rkh;if(jnh.tkh){for(var i=0;i<jnh.rkh.length;i++){loh(qnh[i],jnh.ukh,jnh.vkh);}}else {for(var i=jnh.rkh.length-1;i>=0;i--){loh(qnh[i],jnh.ukh,jnh.vkh);}}}function qoh(roh){for(var i=0;i<mag.length;i++){var jnh=mag[i];if(jnh!=null){if(jnh.xkh){if(Math.abs(jnh.depth-roh)<0.01)vee(i);}}}}function soh(){var vad=-1000000000;for(var i=0;
i<mag.length;i++){var jnh=mag[i];if(jnh!=null&&jnh.rkh.length>0){if(jnh.xkh){if(jnh.depth>vad)vad=jnh.depth;}}}return vad;}function toh(roh){var vad=-1000000000;for(var i=0;i<mag.length;i++){var jnh=mag[i];if(jnh!=null&&jnh.rkh.length>0){if(jnh.xkh){if((jnh.depth>vad)&&(jnh.depth<roh))vad=jnh.depth;}}}return vad;}var tce=0,uoh=1;var voh=0;function woh(vtc,wtc,czc){this.x=vtc;this.y=wtc;this.speed=czc;this.hfb=0;}function zfe(){this.name="";this.id=voh++;this.kind=0;this.closed=0;this.precision=0;this.oyb();
}zfe.prototype.oyb=function(){this.points=[];this.xoh=[];this.ay=0;this.yoh=0;this.length=0;};function zoh(jwc){if((jwc<0)||(jwc>=ay)){return woh(0,0,0);}return this.points[jwc];}zfe.prototype.vfe=function(pvc){if((pvc<0)||(pvc>1)){this.kind=0;}else {this.kind=pvc;}this.aph();};zfe.prototype.xfe=function(pvc){this.closed=pvc;this.aph();};zfe.prototype.yfe=function(pvc){if(pvc<0)pvc=0;if(pvc>8)pvc=8;this.precision=pvc;this.aph();};zfe.prototype.bph=function(){var i=0;this.length=0;if(this.yoh<=0)return;
this.xoh[0].hfb=0;for(i=1;i<this.yoh;i++){this.xoh[i].hfb=this.length=this.length+sqrt(fzd(this.xoh[i].x-this.xoh[i-1].x)+fzd(this.xoh[i].y-this.xoh[i-1].y));}};zfe.prototype.cph=function(qge,rge,dph){with(this){this.yoh++;if(this.yoh>this.xoh.length){}var eph=new woh();this.xoh[yoh-1]=eph;eph.x=qge;eph.y=rge;eph.speed=dph;}};zfe.prototype.fph=function(){this.yoh=0;if(this.ay<=0)return;for(var i=0;i<this.ay;i++){this.cph(this.points[i].x,this.points[i].y,this.points[i].speed);}if(this.closed){this.cph(this.points[0].x,
this.points[0].y,this.points[0].speed);}};zfe.prototype.gph=function(oxc,qvc,rvc,hph,svc,tvc,iph,rtd,std,jph){if(oxc==0)return;var qpe=(qvc+svc+svc+rtd)/4.0;var rpe=(rvc+tvc+tvc+std)/4.0;var kph=(hph+iph+iph+jph)/4.0;if(fzd(svc-qvc)+fzd(tvc-rvc)>16.0){this.gph(oxc-1,qvc,rvc,hph,(svc+qvc)/2.0,(tvc+rvc)/2.0,(iph+hph)/2.0,qpe,rpe,kph);}this.cph(qpe,rpe,kph);if(fzd(svc-rtd)+fzd(tvc-std)>16.0){this.gph(oxc-1,qpe,rpe,kph,(rtd+svc)/2.0,(std+tvc)/2.0,(jph+iph)/2.0,rtd,std,jph);}};zfe.prototype.lph=function(){
var i=0;var fad=0;this.yoh=0;if(this.ay<=0)return;if(!this.closed){this.cph(this.points[0].x,this.points[0].y,this.points[0].speed);}if(this.closed){fad=this.ay-1;}else {fad=this.ay-3;}for(i=0;i<=fad;i++){var ncc=this.points[i%this.ay];var occ=this.points[(i+1)%this.ay];var mph=this.points[(i+2)%this.ay];this.gph(this.precision,(ncc.x+occ.x)/2.0,(ncc.y+occ.y)/2.0,(ncc.speed+occ.speed)/2.0,occ.x,occ.y,occ.speed,(occ.x+mph.x)/2.0,(occ.y+mph.y)/2.0,(occ.speed+mph.speed)/2.0);}if(!this.closed){this.cph(this.points[this.ay-1].x,
this.points[this.ay-1].y,this.points[this.ay-1].speed);}else {this.cph(this.xoh[0].x,this.xoh[0].y,this.xoh[0].speed);}};zfe.prototype.aph=function(){if(this.kind==1){this.lph();}else {this.fph();}this.bph();};function dgg(nng){var mce=new zfe();if((nng!=undefined)&&(nng!=null)){if(nng.precision!=undefined){mce.precision=nng.precision;}if(nng.closed!=undefined){mce.closed=nng.closed;}if(nng.kind!=undefined){mce.kind=nng.kind;}if(nng.pName!=undefined){mce.name=nng.pName;}if(nng.points!=undefined){mce.ay=nng.points.length;
}for(var qg in nng.points){var nph=nng.points[qg];var oph=new woh(nph.x,nph.y,nph.speed);mce.points[mce.points.length]=oph;}mce.aph();}return mce;}var pph=new woh(0,0,100);zfe.prototype.upb=function(kid){var tnb=0;if(this.yoh<=0){pph.x=0;pph.y=0;pph.speed=0;return pph;}if((this.yoh==1)||(this.length==0)||(kid<=0)){return this.xoh[0];}if(kid>=1){return this.xoh[this.yoh-1];}var hfb=this.length*kid;tnb=0;while((tnb<this.yoh-2)&&(hfb>=this.xoh[tnb+1].hfb)){tnb++;}var yxc=this.xoh[tnb];hfb=hfb-yxc.hfb;var w=this.xoh[tnb+1].hfb-yxc.hfb;
if(w!=0){tnb++;pph.x=yxc.x+hfb*(this.xoh[tnb].x-yxc.x)/w;pph.y=yxc.y+hfb*(this.xoh[tnb].y-yxc.y)/w;pph.speed=yxc.speed+hfb*(this.xoh[tnb].speed-yxc.speed)/w;yxc=pph;}return yxc;};zfe.prototype.sfe=function(kid){qg=this.upb(kid);return qg.x;};zfe.prototype.tfe=function(kid){qg=this.upb(kid);return qg.y;};zfe.prototype.ufe=function(kid){qg=this.upb(kid);return qg.speed;};zfe.prototype.xwd=function(qph){this.points=null;this.xoh=null;this.name=qph.name;this.ay=qph.ay;this.kind=qph.kind;this.closed=qph.closed;
this.precision=qph.precision;this.yoh=qph.yoh;this.length=qph.length;this.points=[];var rph;var sph=qph.points;var hvd=this.points;for(var qg=0;qg<sph.length;qg++){nph=sph[qg];rph=new woh(nph.x,nph.y,nph.speed);rph.hfb=nph.hfb;hvd[hvd.length]=rph;}this.xoh=[];var tph=qph.xoh;var hvd=this.xoh;for(var qg=0;qg<tph.length;qg++){nph=tph[qg];rph=new woh(nph.x,nph.y,nph.speed);rph.hfb=nph.hfb;hvd[hvd.length]=rph;}};zfe.prototype.lge=function(gge,hge){for(var i=0;i<=this.ay-1;i++){this.points[i].x+=gge;this.points[i].y+=hge;
}this.aph();};zfe.prototype.uph=function(){var zce=100000000;var ade=-100000000;var bde=100000000;var cde=-100000000;for(var i=0;i<=this.ay-1;i++){if(this.points[i].x<zce)zce=this.points[i].x;if(this.points[i].x>ade)ade=this.points[i].x;if(this.points[i].y<bde)bde=this.points[i].y;if(this.points[i].y>cde)cde=this.points[i].y;}return new woh((zce+ade)/2.0,(bde+cde)/2.0,0);};zfe.prototype.wce=function(){if(this.ay<=1)return;var vph=[];for(var i=this.ay-1;i>=0;i--){vph[vph.length]=this.points[i];}this.points=vph;
this.aph();};zfe.prototype.pge=function(){var wph=this.uph();this.lge(-wph.x,-wph.y);for(var i=0;i<=this.ay-1;i++){this.points[i].x=-this.points[i].x;}this.lge(wph.x,wph.y);this.aph();};zfe.prototype.oge=function(){var wph=this.uph();this.lge(-wph.x,-wph.y);for(var i=0;i<=this.ay-1;i++){this.points[i].y=-this.points[i].y;}this.lge(wph.x,wph.y);this.aph();};zfe.prototype.nge=function(wgd){var wph=this.uph();this.lge(-wph.x,-wph.y);for(var i=0;i<=this.ay-1;i++){var qud=this.points[i].x;var rud=this.points[i].y;
var xph=wgd*Math.PI/180.0;this.points[i].x=qud*Math.cos(xph)+rud*Math.sin(xph);this.points[i].y=rud*Math.cos(xph)-qud*Math.sin(xph);}this.lge(wph.x,wph.y);this.aph();};zfe.prototype.mge=function(hcd,icd){var wph=this.uph();this.lge(-wph.x,-wph.y);for(var i=0;i<=this.ay-1;i++){this.points[i].x=this.points[i].x*hcd;this.points[i].y=this.points[i].y*icd;}this.lge(wph.x,wph.y);this.aph();};zfe.prototype.sge=function(kid,qge,rge,dph){if(kid<0||kid>=this.ay)return;this.points[kid].x=qge;this.points[kid].y=rge;
this.points[kid].speed=dph;this.aph();};zfe.prototype.vge=function(kid){if(kid<0||kid>=this.ay)return;this.points.splice(kid,1);this.ay--;this.aph();};zfe.prototype.tge=function(qph){if(qph.ay==0)return;for(var i=0;i<=qph.ay-1;i++){this.points[this.points.length]=qph.points[i];this.ay++;}this.aph();};zfe.prototype.uge=function(kid,qge,rge,dph){if(kid<0||kid>this.ay)return;this.ay++;nph=new woh(qge,rge,dph);this.points.splice(kid,0,nph);this.aph();};zfe.prototype.vce=function(qge,rge,dph){nph=new woh(qge,
rge,dph);if(!this.points)this.points=[];this.points[this.points.length]=nph;this.ay++;this.aph();};function zdg(){this.Paths=[];voh=0;}zdg.prototype.xnb=function(qph){this.Paths[qph.id]=qph;};zdg.prototype.zxc=function(qph){this.Paths[qph.id]=undefined;};function yph(oxc){this.depth=oxc;this.visible=true;this.zph=new rwc();}yph.prototype.xnb=function(aqh){this.zph.xnb(aqh);};yph.prototype.zxc=function(aqh){this.zph.tmg(aqh);};yph.prototype.fcc=function(avg){var pfc=this.zph.pfc;for(var index=0;index<pfc.length;
index++){var tre=pfc[index];if(tre!=null){if(((tre.x+tre.w)>avg.left)&&(tre.x<avg.qwd)){tre.fcc();}}}};yph.prototype.yce=function(){return this.zph.pfc;};function bqh(){this.cqh=new txc();this.dqh=-1;}bqh.prototype.mvc=function(oxc){var dse;for(var index=0;index<this.cqh.ay;index++){dse=this.cqh.mvc(index);if(dse.depth==oxc)return dse;}return null;};bqh.prototype.zxc=function(oxc){var dse=this.mvc(oxc);if(dse){cqh.zxc(dse);}};bqh.prototype.xnb=function(aqh){var dse;dse=this.mvc(aqh.depth);if(!dse){dse=new yph(aqh.depth);
this.cqh.xnb(dse);}dse.xnb(aqh);};bqh.prototype.wre=function(aqh){dse=this.mvc(aqh.depth);if(dse){dse.zxc(aqh);}};bqh.prototype.eqh=function(){this.dqh=this.cqh.length-1;return this.cqh.mvc(this.dqh);};bqh.prototype.ntb=function(){this.dqh--;if(this.dqh<0)return null;return this.cqh.mvc(this.dqh);};bqh.prototype.bse=function(oxc,jee){var dse=this.mvc(oxc);if(dse)dse.visible=(jee>=0.5);};function oce(){this.fdc=[];this.offset=0;this.rce=oce.prototype.fqh;this.pce=oce.prototype.gqh;};oce.prototype.jw=function(){
return(this.fdc.length-this.offset);};oce.prototype.qce=function(xpe){return((this.fdc.length-this.offset)>=xpe);};oce.prototype.hqh=function(){return(this.fdc.length==0);};oce.prototype.gqh=function(smg){this.fdc.push(smg);};oce.prototype.fqh=function(){if(this.hqh())return undefined;var iqh=this.fdc[this.offset];if((++this.offset*2)>=this.fdc.length){this.fdc=this.fdc.slice(this.offset);this.offset=0;}return iqh;};oce.prototype.jqh=function(){if(this.fdc.length>0){return this.fdc[this.offset];}else {
return undefined;}};function kme(){this.id=hbg++;this.kqh();}kme.prototype.kqh=function(){this.lqh="";this.fle="";this.mqh=30;this.cle=1024;this.ele=768;this.gle=false;this.nqh=false;this.vng=0xc0c0c0;this.rpg=true;this.oqh=true;this.pqh=[];for(var rbb=0;rbb<xzf;rbb++){this.pqh[rbb]=null;}this.pte=false;this.hle=null;this.mwd=new txc();this.gxd=new rwc();this.gxd.swc=true;this.iah=[];this.qqh=0;this.xre=[];this.ase=new bqh();this.bme=[];this.rqh=[];this.dle=null;this.ble="Room";this.hhe=null;};kme.prototype.sqh=function(){
return this.pte;};kme.prototype.fde=function(){return this.cle;};kme.prototype.gde=function(){return this.ele;};kme.prototype.ghe=function(){return this.mqh;};kme.prototype.tqh=function(){return this.ble;};kme.prototype.uqh=function(){return this.fle;};kme.prototype.vqh=function(){return this.gle;};kme.prototype.yce=function(){return this.mwd.pfc;};kme.prototype.kqg=function(pvc){this.cle=pvc;g_pBuiltIn.room_width=pvc;};kme.prototype.lqg=function(pvc){this.ele=pvc;g_pBuiltIn.room_height=pvc;};kme.prototype.iqg=function(pvc){
this.mqh=pvc;g_pBuiltIn.room_speed=pvc;};kme.prototype.wqh=function(god){this.ble=god;};kme.prototype.jqg=function(qqd){this.fle=qqd;g_pBuiltIn.room_caption=qqd;};kme.prototype.nqg=function(pvc){this.gle=pvc;g_pBuiltIn.room_persistent=pvc;};kme.prototype.lme=function(){this.dle={pName:"room_empty_"+this.id,width:640,height:480,backgrounds:[{},{},{},{},{},{},{},{}],views:[{},{},{},{},{},{},{},{}],pInstances:[],tiles:[]};this.wfg(this.dle);};kme.prototype.xqh=function(nng){if(nng!=null){this.dle.width=nng.width;
this.dle.height=nng.height;this.dle.colour=nng.colour;this.dle.showColour=nng.showColour;this.dle.enableViews=nng.enableViews;this.dle.viewClearScreen=nng.viewClearScreen;this.dle.pCaption=nng.pCaption;this.dle.speed=nng.speed;this.dle.persistent=nng.persistent;for(var i=0;i<nng.backgrounds.length;i++){var yqh=nng.backgrounds[i];if(yqh!=null){this.dle.backgrounds[i]={visible:yqh.visible,index:yqh.index,vspeed:yqh.vspeed,hspeed:yqh.hspeed,foreground:yqh.foreground,x:yqh.x,y:yqh.y,htiled:yqh.htiled,
vtiled:yqh.vtiled,hspeed:yqh.hspeed,vspeed:yqh.vspeed,stretch:yqh.stretch,ndb:yqh.ndb,yre:yqh.yre};}}for(var i=0;i<nng.views.length;i++){var zqh=nng.views[i];if(zqh){this.dle.views[i]={visible:zqh.visible,xview:zqh.xview,yview:zqh.yview,wview:zqh.wview,hview:zqh.hview,xport:zqh.xport,yport:zqh.yport,wport:zqh.wport,hport:zqh.hport,hborder:zqh.hborder,vborder:zqh.vborder,hspeed:zqh.hspeed,vspeed:zqh.vspeed,index:zqh.index};}}this.dle.pInstances=new Array(nng.pInstances.length);for(var i=0;i<nng.pInstances.length;
i++){var arh=nng.pInstances[i];if(arh){this.dle.pInstances[i]={x:arh.x,y:arh.y,index:arh.index,id:arh.id};}}this.dle.tiles=new Array(nng.pInstances.length);for(var i=0;i<nng.tiles.length;i++){var brh=nng.tiles[i];if(brh!=null){this.dle.tiles[i]={x:brh.x,y:brh.y,index:brh.index,xo:brh.xo,yo:brh.yo,w:brh.w,h:brh.h,depth:brh.depth,id:brh.id};}}}};kme.prototype.wfg=function(crh){with(this){kqh();dle=crh;if(crh.pName!=undefined)wqh(crh.pName);if(crh.pCaption!=undefined)jqg(crh.pCaption);if(crh.width!=undefined)kqg(crh.width);
if(crh.height!=undefined)lqg(crh.height);if(crh.speed!=undefined)iqg(crh.speed);if(crh.persistent!=undefined)nqg(crh.persistent);if(crh.colour!=undefined)vng=crh.colour;if(crh.showColour!=undefined)rpg=crh.showColour;if(crh.enableViews!=undefined)pte=crh.enableViews;if(crh.viewClearScreen!=undefined)oqh=crh.viewClearScreen;this.kqg(this.cle);this.lqg(this.ele);this.iqg(this.mqh);this.jqg(this.fle);this.nqg(this.gle);bme=[];qqh=0;for(var index in crh.tiles){var drh=crh.tiles[index];if(drh!=null){var tre=erh(drh);
this.ase.xnb(tre);this.xre[tre.id]=tre;this.qqh++;}}if(crh.pCode!=undefined)hle=crh.pCode;var i=0;for(var hh in crh.views){bme[hh]=frh(crh.views[hh]);}}};kme.prototype.grh=function(){var i;var hrh=0;var irh=[];for(i=this.mwd.length-1;i>=0;i--){this.jrh(this.mwd.mvc(0));}for(i=this.gxd.length-1;i>=0;i--){this.jrh(this.gxd.mvc(0));}};kme.prototype.pme=function(){this.dle.pInstances=[];};kme.prototype.krh=function(){var i,w,h;if(wzc.sqh()){}else {w=wzc.fde();h=wzc.gde();}if(w>tug())w=tug();if(h>uug())h=uug();
};kme.prototype.xzc=function(vtc,wtc,tzc){return this.mah(vtc,wtc,wwd++,tzc,true);};kme.prototype.mah=function(vtc,wtc,utc,rwd){var lrh=new vwd(vtc,wtc,utc,rwd,true);this.mwd.ixd(lrh);dbd.xnb(lrh);return lrh;};kme.prototype.ywd=function(wjd){this.mwd.ixd(wjd);dbd.xnb(wjd);};kme.prototype.mrh=function(){var index=0;for(i in this.bme){ame=this.bme[i];array_set_1D(g_pBuiltIn,"__view_visible__",index,ame.visible);array_set_1D(g_pBuiltIn,"__view_xview__",index,ame.cme);array_set_1D(g_pBuiltIn,"__view_yview__",
index,ame.dme);array_set_1D(g_pBuiltIn,"__view_wview__",index,ame.eme);array_set_1D(g_pBuiltIn,"__view_hview__",index,ame.fme);array_set_1D(g_pBuiltIn,"__view_xport__",index,ame.gme);array_set_1D(g_pBuiltIn,"__view_yport__",index,ame.hme);array_set_1D(g_pBuiltIn,"__view_wport__",index,ame.ime);array_set_1D(g_pBuiltIn,"__view_hport__",index,ame.jme);array_set_1D(g_pBuiltIn,"__view_angle__",index,ame.khb);array_set_1D(g_pBuiltIn,"__view_hborder__",index,ame.hborder);array_set_1D(g_pBuiltIn,"__view_vborder__",
index,ame.vborder);array_set_1D(g_pBuiltIn,"__view_hspeed__",index,ame.hspeed);array_set_1D(g_pBuiltIn,"__view_vspeed__",index,ame.vspeed);array_set_1D(g_pBuiltIn,"__view_object__",index,ame.uzc);array_set_1D(g_pBuiltIn,"__view_surface_id__",index,ame.cgf);index++;}};kme.prototype.nrh=function(){var index=0;for(i in this.bme){ame=this.bme[i];ame.visible=array_get_1D(g_pBuiltIn,"__view_visible__",index);ame.cme=array_get_1D(g_pBuiltIn,"__view_xview__",index);ame.dme=array_get_1D(g_pBuiltIn,"__view_yview__",
index);ame.eme=array_get_1D(g_pBuiltIn,"__view_wview__",index);ame.fme=array_get_1D(g_pBuiltIn,"__view_hview__",index);ame.gme=array_get_1D(g_pBuiltIn,"__view_xport__",index);ame.hme=array_get_1D(g_pBuiltIn,"__view_yport__",index);ame.ime=array_get_1D(g_pBuiltIn,"__view_wport__",index);ame.jme=array_get_1D(g_pBuiltIn,"__view_hport__",index);ame.khb=array_get_1D(g_pBuiltIn,"__view_angle__",index);ame.hborder=array_get_1D(g_pBuiltIn,"__view_hborder__",index);ame.vborder=array_get_1D(g_pBuiltIn,"__view_vborder__",
index);ame.hspeed=array_get_1D(g_pBuiltIn,"__view_hspeed__",index);ame.vspeed=array_get_1D(g_pBuiltIn,"__view_vspeed__",index);ame.uzc=array_get_1D(g_pBuiltIn,"__view_object__",index);ame.cgf=array_get_1D(g_pBuiltIn,"__view_surface_id__",index);index++;}};kme.prototype.orh=function(){for(var i=0;i<dcd.ccd.length;i++){var hh=array_get_1D(global,"__background_visible__",i);var pbb=array_get_1D(global,"__background_foreground__",i);if(hh&&!pbb){var rhd=dcd.mvc(i);rhd.hspeed=array_get_1D(global,"__background_hspeed__",
i);rhd.vspeed=array_get_1D(global,"__background_vspeed__",i);rhd.x=array_get_1D(global,"__background_x__",i);rhd.y=array_get_1D(global,"__background_y__",i);rhd.x+=rhd.hspeed;rhd.y+=rhd.vspeed;array_set_1D(global,"__background_x__",i,rhd.x);array_set_1D(global,"__background_y__",i,rhd.y);}}};kme.prototype.prh=function(){var i;var hfb,rbb,yvc,qrh;var ame;var ewd;if(!this.pte)return;this.nrh();for(i in this.bme){ame=this.bme[i];if((ame.visible)&&(ame.uzc>=0)){ewd=null;if(ame.uzc<100000){var dwd=ypd.mvc(ame.uzc);
if(dwd!=null){var pfc=dwd.pff();for(var iwd in pfc){ewd=pfc[iwd];if(!ewd.fwd)break;ewd=null;}}}else {ewd=dbd.mvc(ame.uzc);if(!ewd&&ewd.fwd)ewd=null;}if(ewd!=null){hfb=ame.cme;rbb=ame.dme;yvc=Math.round(ewd.x);qrh=Math.round(ewd.y);if(2*ame.hborder>=ame.eme){hfb=yvc-ame.eme/2;}else if(yvc-ame.hborder<ame.cme){hfb=yvc-ame.hborder;}else if(yvc+ame.hborder>ame.cme+ame.eme){hfb=yvc+ame.hborder-ame.eme;}if(2*ame.vborder>=ame.fme){rbb=qrh-ame.fme/2;}else if(qrh-ame.vborder<ame.dme){rbb=qrh-ame.vborder;}else if(qrh+ame.vborder>ame.dme+ame.fme){
rbb=qrh+ame.vborder-ame.fme;}if(hfb<0)hfb=0;if(hfb+ame.eme>this.cle)hfb=this.cle-ame.eme;if(rbb<0)rbb=0;if(rbb+ame.fme>this.ele)rbb=this.ele-ame.fme;if(ame.hspeed>=0){if((hfb<ame.cme)&&(ame.cme-hfb>ame.hspeed))hfb=ame.cme-ame.hspeed;if((hfb>ame.cme)&&(hfb-ame.cme>ame.hspeed))hfb=ame.cme+ame.hspeed;}if(ame.vspeed>=0){if((rbb<ame.dme)&&(ame.dme-rbb>ame.vspeed))rbb=ame.dme-ame.vspeed;if((rbb>ame.dme)&&(rbb-ame.dme>ame.vspeed))rbb=ame.dme+ame.vspeed;}ame.cme=hfb;ame.dme=rbb;}}}this.mrh();};var rrh=false;
kme.prototype.srh=function(avg){var dse=this.ase.eqh();var trh=dse.depth;for(var i=this.mwd.length-1;i>=0;i--){var ewd=this.mwd.mvc(i);if(ewd.fwd||ewd.visible==0)continue;while(trh>ewd.depth){dse.fcc(avg);dse=this.ase.ntb();if(dse){trh=dse.depth;}else {trh=-1000000000000;}}if(!ewd.iff[omf]){var cxd=ibd.mvc(ewd.sprite_index);if(cxd){if((ewd.image_xscale==1.0)&&(ewd.image_yscale==1.0)&&(ewd.image_angle==0.0)&&(ewd.image_blend==0xffffff)){cxd.ore(ewd.image_index,ewd.x,ewd.y,ewd.image_alpha);}else {cxd.fcc(ewd.image_index,
ewd.x,ewd.y,ewd.image_xscale,ewd.image_yscale,ewd.image_angle,ewd.image_blend,ewd.image_alpha);}}}else {ewd.yzc(omf,0,ewd,ewd);}}while(dse){dse.fcc(avg);dse=this.ase.ntb();}};kme.prototype.urh=function(avg){var cxd,ewd,i,pfc,tpd;pfc=this.mwd.pfc;tpd=ibd.Sprites;for(i=pfc.length-1;i>=0;i--){ewd=pfc[i];if(ewd.fwd||!ewd.visible)continue;if(!ewd.iff[omf]){cxd=tpd[ewd.sprite_index];if(cxd){if((ewd.image_xscale==1.0)&&(ewd.image_yscale==1.0)&&(ewd.image_angle==0.0)&&(ewd.image_blend==0xffffff)){cxd.ore(ewd.image_index,
ewd.x,ewd.y,ewd.image_alpha);}else {cxd.fcc(ewd.image_index,ewd.x,ewd.y,ewd.image_xscale,ewd.image_yscale,ewd.image_angle,ewd.image_blend,ewd.image_alpha);}}}else {ewd.yzc(omf,0,ewd,ewd);}}};kme.prototype.vrh=function(avg){var wrh=soh();for(var i=this.mwd.length-1;i>=0;i--){var ewd=this.mwd.mvc(i);if(ewd.fwd||ewd.visible==0)continue;while(wrh>ewd.depth){qoh(wrh);wrh=toh(wrh);}if(!ewd.iff[omf]){var cxd=ibd.mvc(ewd.sprite_index);if(cxd){if((ewd.image_xscale==1.0)&&(ewd.image_yscale==1.0)&&(ewd.image_angle==0.0)&&(ewd.image_blend==0xffffff)){
cxd.ore(ewd.image_index,ewd.x,ewd.y,ewd.image_alpha);}else {cxd.fcc(ewd.image_index,ewd.x,ewd.y,ewd.image_xscale,ewd.image_yscale,ewd.image_angle,ewd.image_blend,ewd.image_alpha);}}}else {ewd.yzc(omf,0,ewd,ewd);}}while(wrh>-1000000000){qoh(wrh);wrh=toh(wrh);}};kme.prototype.xrh=function(avg){for(var index in this.xre){var tre=this.xre[index];if(((tre.x+tre.w)>avg.left)&&(tre.x<avg.qwd)){tre.fcc();}}var wrh=soh();for(var i=this.mwd.length-1;i>=0;i--){var ewd=this.mwd.mvc(i);if(ewd.fwd||ewd.visible==0)continue;
while(wrh>ewd.depth){qoh(wrh);wrh=toh(wrh);}if(!ewd.iff[omf]){var cxd=ibd.mvc(ewd.sprite_index);if(cxd){if((ewd.image_xscale==1.0)&&(ewd.image_yscale==1.0)&&(ewd.image_angle==0.0)&&(ewd.image_blend==0xffffff)){cxd.ore(ewd.image_index,ewd.x,ewd.y,ewd.image_alpha);}else {cxd.fcc(ewd.image_index,ewd.x,ewd.y,ewd.image_xscale,ewd.image_yscale,ewd.image_angle,ewd.image_blend,ewd.image_alpha);}}}else {ewd.yzc(omf,0,ewd,ewd);}}while(wrh>-1000000000){qoh(wrh);wrh=toh(wrh);}};kme.prototype.yrh=function(avg){
lqe=avg;if(this.rpg){gsd(g_pBuiltIn.background_color);}for(var i=0;i<dcd.ccd.length;i++){var rhd=dcd.mvc(i);if(rhd){rhd.visible=array_get_1D(global,"__background_visible__",i);rhd.foreground=array_get_1D(global,"__background_foreground__",i);rhd.x=array_get_1D(global,"__background_x__",i);rhd.y=array_get_1D(global,"__background_y__",i);rhd.index=array_get_1D(global,"__background_index__",i);rhd.mig=array_get_1D(global,"__background_htiled__",i);rhd.nig=array_get_1D(global,"__background_vtiled__",i);
rhd.ndb=array_get_1D(global,"__background_alpha__",i);rhd.yre=array_get_1D(global,"__background_blend__",i);rhd.hspeed=array_get_1D(global,"__background_hspeed__",i);rhd.vspeed=array_get_1D(global,"__background_vspeed__",i);if(rhd!=null&&rhd.visible&&!rhd.foreground){var nid=dcd.qhd(rhd.index);if(nid!=null){if(rhd.stretch){uid(nid.shd,rhd.x,rhd.y,this.cle,this.ele,rhd.yre,rhd.ndb);}else {vid(nid.shd,rhd.x,rhd.y,rhd.mig,rhd.nig,rhd.yre,rhd.ndb);}}}}}if(this.ase.cqh.ay>0){if(mag.length!=0){this.xrh(avg)}
else {this.srh(avg);}}else if(mag.length!=0){this.vrh(avg);}else {this.urh(avg);}for(var i=0;i<dcd.ccd.length;i++){var rhd=dcd.mvc(i);if(rhd!=null&&rhd.visible&&rhd.foreground){var nid=dcd.qhd(rhd.index);if(nid!=null){if(rhd.stretch){uid(nid.shd,rhd.x,rhd.y,this.cle,this.ele,rhd.yre,rhd.ndb);}else {vid(nid.shd,rhd.x,rhd.y,rhd.mig,rhd.nig);}}}}};kme.prototype.zrh=function(){var une=ibd.mvc(use);if(une!=null){une.fcc(qbg,guc.dgf-bte.left,guc.egf-bte.top,1.0,1.0,0,0xffffff,1.0);}qbg++;if(qbg>une.upd)qbg-=une.upd;
};kme.prototype.fcc=function(){var lq=new ooe();this.prh();var agf;if(!this.pte){agf=bgf;kug=esd/wzc.cle;lte=fsd/wzc.ele;}else {agf=this.bme;if(this.oqh)gsd(vse);}var ash=kug;var bsh=lte;zag=0;for(i in agf){nqe=agf[i];if(nqe.visible){var csh=vqe;lvg();if(nqe.cgf!=-1){hqe(nqe.cgf);kug=1.0;lte=1.0;}nqe.oqe=nqe.gme*kug;nqe.pqe=nqe.hme*lte;nqe.qqe=nqe.ime*kug;nqe.rqe=nqe.jme*lte;nqe.sqe=nqe.oqe+nqe.qqe;nqe.tqe=nqe.pqe+nqe.rqe;nqe.fgf=nqe.qqe/nqe.eme;nqe.ggf=nqe.rqe/nqe.fme;rug(nqe.oqe,nqe.pqe,nqe.qqe,nqe.rqe);
sug(nqe.cme,nqe.dme,nqe.eme,nqe.fme,nqe.khb);lq.left=nqe.cme;lq.top=nqe.dme;lq.qwd=nqe.cme+nqe.eme;lq.bottom=nqe.dme+nqe.fme;g_pBuiltIn.view_current=zag;this.yrh(lq);if(nqe.cgf!=-1)surface_reset_target();zag++;nvg();vqe=jtc.getContext('2d');kug=ash;lte=bsh;}}if(use>=0)this.zrh();};kme.prototype.dsh=function(){var ch=[];var cwd=dbd.lch.pfc;for(var i in cwd){var ewd=cwd[i];if(ewd.fwd){ch[ch.length]=ewd;}}for(var i=0;i<ch.length;i++){var ewd=ch[i];this.jrh(ewd);}};kme.prototype.jrh=function(ewd){if(this.hhe&&ewd.sie){
this.hhe.pac(ewd.sie);}dbd.nch(ewd);this.mwd.zxc(ewd);this.gxd.tmg(ewd);ewd.srd.lah(ewd);};kme.prototype.hxd=function(wjd){if(wjd.stb){this.mwd.zxc(wjd);wjd.srd.lah(wjd);this.gxd.xnb(wjd);wjd.stb=false;}};kme.prototype.jxd=function(wjd){if(!wjd.stb){this.gxd.tmg(wjd);this.mwd.ixd(wjd);wjd.srd.mah(wjd);wjd.stb=true;}};kme.prototype.vre=function(aqh){this.ase.xnb(aqh);this.xre[aqh.id]=aqh;this.qqh++;};kme.prototype.wre=function(utc){var tre=this.xre[utc];if(tre){this.ase.wre(tre);this.xre[utc]=null;
this.qqh--;}};kme.prototype.cse=function(oxc){var dse=this.ase.mvc(oxc);var pfc=dse.yce();for(var ese in pfc){var tre=pfc[ese];if(tre){this.xre[tre.id]=null;this.qqh--;}}ase.zxc(oxc);};kme.prototype.esh=function(){this.qqh=0;this.xre=[];};kme.prototype.tme=function(){this.dle.tiles=[];};kme.prototype.fsh=function(){if(this.iah.length==0)return;var uwc=this.iah;for(var i=0;i<this.iah.length;i++){var ewd=uwc[i];this.mwd.zxc(ewd);this.mwd.xnb(ewd,ewd.depth);}this.iah=[];};function udg(){this.vme=[];this.yme=[];
}udg.prototype.xfg=function(gsh){this.yme=gsh;};udg.prototype.xnb=function(hsh){return this.vme[this.vme.length]=hsh;};udg.prototype.mvc=function(ish){return this.vme[ish];};udg.prototype.xme=function(ish){return this.vme[this.yme[ish]];};udg.prototype.zxc=function(ish){this.vme[ish]=null;};udg.prototype.mme=function(ish){var jsh=zke.mvc(ish);var ksh=new kme();ksh.lme();ksh.xqh(jsh.dle);this.xnb(ksh);return ksh.id;};udg.prototype.nme=function(hxc,kvc){var lsh=this.vme[hxc];var msh=this.vme[kvc];if(!lsh||!msh){
return;}lsh.xqh(msh.dle);};var nne=[];function nsh(osh){}function psh(yx){try{var qsh=new Audio();if(qsh.canPlayType('audio/mpeg')=="probably")yx(true);qsh.addEventListener('canplaythrough',function(obb){yx(true);},false);qsh.addEventListener('error',function(obb){yx(false,this.error)},false);qsh.src="data:audio/mpeg;base64,/+MYxAAAAANIAAAAAExBTUUzLjk4LjIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";qsh.load();}catch(obb){yx(false,obb);}}function rsh(){this.pName="";this.kind=0;this.extension="";
this.origName="";this.effects=0;this.volume=1;this.pan=0;this.preload=true;this.ssh=1.0;this.tsh=0;this.one=[];}rsh.prototype.ush=function(nng){this.pName=nng.pName;this.kind=nng.kind;this.extension=nng.extension;this.origName=nng.origName;this.effects=nng.effects;this.volume=nng.volume;this.pan=nng.pan;this.preload=nng.preload;this.ssh=1.0;this.ing(this.pName);};rsh.prototype.ing=function(jad){this.tsh=0;this.one=[];for(var i=0;i<zzf;i++){if(nne[this.pName]!=null){this.one[i]=nne[this.pName];}}}
;function jne(hhd,utc,vsh,wsh,xsh){if(ymf==false){return -1;}var ysh=false;var ine;var index;index=hhd.indexOf(vsh);if(index>=0){hhd=hhd.substr(0,index);}if(dbg){vsh="ogg";}else if(cbg){vsh="mp3";}else {vsh="ogg";}ysh=true;if(ysh){hhd=hhd+"."+vsh;var lad=new Audio();lad.geg=hhd;lad.autobuffer=true;if(typeof lad.loop=='boolean')lad.loop=false;lad.preload='auto';lad.reg=false;lad.zsh=false;var wwc=document.createElement('source');wwc.setAttribute("src",hhd);if(vsh=="ogg"){wwc.setAttribute("type",'audio/ogg');
wwc.setAttribute("codecs",'vorbis');}else {wwc.setAttribute("type",'audio/mpeg');}lad.setAttribute("networkState",0);lad.insertBefore(wwc,null);document.body.appendChild(lad);nne[utc]=lad;lad.addEventListener('canplaythrough',wsh,false);lad.addEventListener('error',xsh,false);lad.addEventListener("loadstart",neg,false);lad.addEventListener("suspend",oeg,false);lad.addEventListener("stalled",peg,false);lad.addEventListener("stall",peg,false);lad.load();}return utc;}function xdg(){this.Sounds=[];this.length=0;
}xdg.prototype.zxc=function(jwc){if(this.Sounds[jwc]){this.qgd(jwc);this.Sounds[jwc]=undefined;}};function ath(){bth.zsh=false;}xdg.prototype.oad=function(jwc){var bth=this.Sounds[jwc];if(!bth)return;var bth=bth.one[this.Sounds[jwc].tsh];this.Sounds[jwc].tsh++;if(this.Sounds[jwc].tsh>=zzf)this.Sounds[jwc].tsh=0;if(bth!=null){try{bth.removeEventListener('ended',cth,false);bth.removeEventListener('ended',ath,false);if(typeof bth.loop=='boolean'){bth.loop=false;}try{if(bth.currentTime!=0){bth.currentTime=0;
}}catch(wnd){if(ebg)hzc("Error setting current sound time: "+this.Sounds[jwc].pName);}bth.volume=this.Sounds[jwc].ssh*lbg;bth.addEventListener('ended',ath,false);bth.zsh=true;bth.play();}catch(wnd){if(ebg)hzc("Error playing sound: "+this.Sounds[jwc].pName);}}};xdg.prototype.qgd=function(mdd){with(this){var dth=this.Sounds[mdd];if(!dth)return;dth=dth.one;for(var i in dth){bth=dth[i];if(bth!=null){try{bth.pause();bth.zsh=false;}catch(wnd){if(ebg)hzc("Error stopping sound: "+this.Sounds[mdd].pName);}}}
}};xdg.prototype.bne=function(){for(var eth in this.Sounds){if(this.Sounds[eth]){var dth=this.Sounds[eth].one;for(var i in dth){bth=dth[i];if(bth!=null){try{bth.pause();bth.zsh=false;}catch(wnd){if(ebg)hzc("Error stopping sound: "+bth.pName);}}}}}};xdg.prototype.dne=function(fth){lbg=fth;for(var eth in this.Sounds){if(this.Sounds[eth]){var dth=this.Sounds[eth].one;for(var i in dth){bth=dth[i];if(bth!=null){try{bth.volume=dth.ssh*lbg;}catch(wnd){if(ebg)hzc("Error setting volume: "+this.Sounds[eth].pName);}}}}}
};function cth(){try{this.currentTime=0;}catch(wnd){if(ebg)hzc("Error setting current sound time: "+this.Sounds[jwc].pName);}this.play();}xdg.prototype.nad=function(mdd){var gth=this.Sounds[mdd];if(!gth)return;var dth=gth.one;for(var i in dth){var bth=dth[i];if(bth!=null){try{if(typeof bth.loop=='boolean'){bth.loop=true;}else {bth.removeEventListener('ended',cth,false);bth.removeEventListener('ended',ath,false);bth.addEventListener('ended',cth,false);bth.hth=null;}try{if(bth.currentTime!=0){bth.currentTime=0;
}}catch(wnd){if(ebg)hzc("Error setting current sound time: "+this.Sounds[jwc].pName);}bth.volume=this.Sounds[mdd].ssh*lbg;bth.zsh=true;bth.play();}catch(wnd){if(ebg)hzc("Error looping sound: "+this.Sounds[mdd].pName);}}}};xdg.prototype.cne=function(mdd,ith){with(this){var dth=this.Sounds[mdd];if(!dth)return;dth=dth.one;for(var i in dth){bth=dth[i];if(bth!=null){try{Sounds[mdd].ssh=ith;bth.volume=ith*lbg;}catch(wnd){if(ebg)hzc("Error volume: "+this.Sounds[mdd].pName);}}}}};xdg.prototype.ene=function(jwc,
ith,pad){var gne=this.Sounds[jwc];if(!gne)return;var dth=gne.one;for(var i in dth){var bth=dth[i];if(bth!=null){try{var jth=50;var kth=gne.ssh;var lth=ith;var mth=Math.abs(kth-lth)/(pad/jth);function nth(){setTimeout(function(){var oth;if((kth<lth)&&(bth.volume<lth)){oth=gne.ssh+mth;}else if((kth>lth)&&(bth.volume>lth)){oth=gne.ssh-mth;}else {return;}if(oth<0){oth=0;}if(oth>1){oth=1;}gne.ssh=oth;bth.volume=oth*lbg;nth();},jth);}nth();}catch(wnd){if(ebg)hzc("Error volume: "+gne.pName);}}}};xdg.prototype.rgd=function(mdd){
with(this){var dth=Sounds[mdd];if(!dth)return;dth=dth.one;var pth=false;for(var i in dth){bth=dth[i];if(bth!=null){try{if(bth.zsh){pth=true;break;}}catch(wnd){if(ebg)hzc("Error checking play state: "+this.Sounds[mdd].pName);}}}return pth;}};xdg.prototype.mvc=function(jwc){return this.Sounds[jwc];};xdg.prototype.oyb=function(){this.Sounds=[];length=0;};xdg.prototype.xnb=function(nng){with(this){var rhd=null;if(nng!=null){rhd=new rsh();rhd.ush(nng);}Sounds[Sounds.length]=rhd;}};xdg.prototype.rob=function(){
var lne=new rsh();this.Sounds[this.Sounds.length]=lne;return this.Sounds.length-1;};function ooe(){this.left=0;this.top=0;this.qwd=0;this.bottom=0;}ooe.prototype.gu=function(lpe){this.left=lpe.left;this.qwd=lpe.qwd;this.top=lpe.top;this.bottom=lpe.bottom;};function moe(){this.pName="sprite";this.width=16;this.height=16;this.pwd=new ooe;this.transparent=true;this.smooth=true;this.preload=true;this.poe=0;this.chd=false;this.xOrigin=0;this.yOrigin=0;this.qz=false;this.upd=0;this.qoe=8;this.roe=false;this.soe=false;
this.toe=[];this.qth=[];this.coe=[];this.Masks=[];}moe.prototype.dbh=function(){return this.chd;};moe.prototype.rth=function(){return this.xOrigin;};moe.prototype.sth=function(){return this.yOrigin;};moe.prototype.tth=function(){return this.pwd;};moe.prototype.wbh=function(){return this.upd;};moe.prototype.hng=function(){var uth=(this.yOrigin*this.yOrigin);var vth=(this.xOrigin*this.xOrigin);var wth=(this.width-this.xOrigin)*(this.width-this.xOrigin);var xth=(this.height-this.yOrigin)*(this.height-this.yOrigin);
var yth=~~ceil(sqrt(vth+uth));var zth=~~ceil(sqrt(wth+uth));var auh=~~ceil(sqrt(vth+xth));var buh=~~ceil(sqrt(wth+xth));this.qoe=wvc(yth,wvc(zth,wvc(auh,buh)));};function cuh(duh,aod){if(duh.Masks[aod]!=null){var pz=[];var src=0;var hvd=0;var qv;while(src<duh.Masks[aod].length){var euh=duh.Masks[aod][src++];if(euh&0x80){euh=(euh&0x7f)+1;qv=duh.Masks[aod][src++];for(var hh=0;hh<euh;hh++){pz[hvd++]=qv;}}else {euh++;for(var hh=0;hh<euh;hh++){pz[hvd++]=duh.Masks[aod][src++];}}}}duh.Masks[aod]=pz;}function zfg(fuh){
var cxd=new moe();if(fuh.pName!=undefined)cxd.pName=fuh.pName;if(fuh.width!=undefined)cxd.width=fuh.width;if(fuh.height!=undefined)cxd.height=fuh.height;if(fuh.bboxLeft!=undefined)cxd.pwd.left=fuh.bboxLeft;if(fuh.bboxRight!=undefined)cxd.pwd.qwd=fuh.bboxRight;if(fuh.bboxTop!=undefined)cxd.pwd.top=fuh.bboxTop;if(fuh.bboxBottom!=undefined)cxd.pwd.bottom=fuh.bboxBottom;if(fuh.transparent!=undefined)cxd.transparent=fuh.transparent;if(fuh.smooth!=undefined)cxd.smooth=fuh.smooth;if(fuh.preload!=undefined)cxd.preload=fuh.preload;
if(fuh.bboxMode!=undefined)cxd.poe=fuh.bboxMode;if(fuh.colCheck!=undefined)cxd.chd=fuh.colCheck;if(fuh.xOrigin!=undefined)cxd.xOrigin=fuh.xOrigin;if(fuh.yOrigin!=undefined)cxd.yOrigin=fuh.yOrigin;cxd.Masks=null;if(fuh.Masks!=undefined)cxd.Masks=fuh.Masks;cxd.coe=[];for(var i=fuh.TPEntryIndex.length-1;i>=0;i--){cxd.coe[i]=fuh.TPEntryIndex[i];}cxd.upd=cxd.coe.length;cxd.hng();for(var i=0;i<cxd.coe.length;i++){cxd.coe[i]=ong(cxd.coe[i]);if(cxd.coe[i].CropWidth==0)cxd.coe[i].CropWidth=1;if(cxd.coe[i].CropHeight==0)cxd.coe[i].CropHeight=1;
}if(cxd.Masks){for(var i=0;i<fuh.Masks.length;i++){if(!fuh.guh)cuh(cxd,i);cxd.roe=true;var size=cxd.width*cxd.height;var huh=[];huh[size-1]=0;var iuh=((cxd.width+7)>>3);var juh=0;for(var y=0;y<cxd.height;++y,juh+=iuh){var pz=0x80;var kuh=juh;for(var x=0;x<cxd.width;++x,pz>>=1){if(pz==0){pz=0x80;++kuh;}huh[x+(y*cxd.width)]=((cxd.Masks[i][kuh]&pz)!=0);}}cxd.toe[i]=huh;}}fuh.guh=true;return cxd;}moe.prototype.ore=function(luh,vtc,wtc,bjd){if(this.upd<=0)return;var qoe=this.qoe;if(((lqe.top-wtc)<=qoe)&&((wtc-lqe.bottom)<=qoe)&&((lqe.left-vtc)<=qoe)&&((vtc-lqe.qwd)<=qoe)){
luh=(~~luh)%this.upd;if(luh<0)luh=luh+this.upd;sid(this.coe[luh],vtc-this.xOrigin,wtc-this.yOrigin,bjd);}};moe.prototype.fcc=function(kid,vtc,wtc,hcd,icd,wgd,eid,bjd){if(this.upd<=0)return;var muh=abs(this.qoe*hcd);var nuh=abs(this.qoe*icd);var qoe;if(muh>nuh){qoe=muh}else {qoe=nuh;}if(((lqe.top-wtc)<=qoe)&&((wtc-lqe.bottom)<=qoe)&&((lqe.left-vtc)<=qoe)&&((vtc-lqe.qwd)<=qoe)){kid=(~~kid)%this.upd;if(kid<0)kid+=this.upd;wgd=tcg(wgd,360.0);ere(this.coe[kid],this.xOrigin,this.yOrigin,vtc,wtc,hcd,icd,wgd*Math.PI/180.0,
eid,eid,eid,eid,bjd);}};moe.prototype.rre=function(luh,qvc,rvc,svc,tvc,rtd,std,pre,qre,bjd){if(this.upd<=0)return;luh=(~~luh)%this.upd;if(luh<0)luh=luh+this.upd;fxg(this.coe[luh],qvc,rvc,svc,tvc,rtd,std,pre,qre,bjd);};moe.prototype.mbh=function(ouh,puh,qvc,rvc,quh,ruh,wgd,vtc,wtc){var qud,rud;if(!this.roe)return true;if(this.upd<=0)return false;ouh=ouh%this.toe.length;if(ouh<0)ouh=ouh+this.toe.length;if(Math.abs(wgd)<0.0001){qud=Math.floor((vtc-qvc)/quh+this.xOrigin);rud=Math.floor((wtc-rvc)/ruh+this.yOrigin);
}else {var vsd=Math.sin(-wgd*Math.PI/180.0);var nzb=Math.cos(-wgd*Math.PI/180.0);qud=Math.floor((nzb*(vtc-qvc)+vsd*(wtc-rvc))/quh+this.xOrigin);rud=Math.floor((nzb*(wtc-rvc)-vsd*(vtc-qvc))/ruh+this.yOrigin);}if((qud<0)||(qud>=this.width))return false;if((rud<0)||(rud>=this.height))return false;return this.toe[ouh][qud+(rud*this.width)];};moe.prototype.nbh=function(ouh,puh,qvc,rvc,quh,ruh,wgd,suh){if(!this.roe)return true;if(this.upd<=0)return false;ouh=ouh%this.toe.length;if(ouh<0){ouh=ouh+this.toe.length;
}var hfb=wvc(puh.left,suh.left);var lq=xvc(puh.qwd,suh.qwd);var rbb=wvc(puh.top,suh.top);var jn=xvc(puh.bottom,suh.bottom);if((quh==1)&&(ruh==1)&&(Math.abs(this.khb)<0.0001)){for(var i=hfb;i<=lq;i++){for(var sjb=rbb;sjb<=jn;sjb++){var qud=i-qvc+this.xOrigin;var rud=sjb-rvc+this.yOrigin;if((qud<0)||(qud>=this.w))continue;if((rud<0)||(rud>=this.h))continue;if(this.toe[ouh][qud+(rud*this.w)]==true)return true;}}}else {var vsd=Math.sin(-wgd*czd/180.0);var nzb=Math.cos(-wgd*czd/180.0);var tuh=1.0/quh;var uuh=1.0/ruh;
for(var i=hfb;i<=lq;i++){for(var sjb=rbb;sjb<=jn;sjb++){var qud=Math.floor((nzb*(i-qvc)+vsd*(sjb-rvc))*tuh+this.xOrigin);var rud=Math.floor((nzb*(sjb-rvc)-vsd*(i-qvc))*uuh+this.yOrigin);if((qud<0)||(qud>=this.width))continue;if((rud<0)||(rud>=this.height))continue;if(this.toe[ouh][qud+(rud*this.width)])return true;}}}return false;};moe.prototype.ubh=function(ouh,puh,qvc,rvc,quh,ruh,wgd,suh){var i,sjb;if(!this.roe)return true;if(tbh>3){tbh=(1+tbh)-1;}if(this.upd<=0)return false;ouh=ouh%this.toe.length;if(ouh<0)ouh=ouh+this.toe.length;
var hfb=wvc(puh.left,suh.left);var lq=xvc(puh.qwd,suh.qwd);var rbb=wvc(puh.top,suh.top);var jn=xvc(puh.bottom,suh.bottom);var qpe=((suh.qwd+suh.left)/2);var rpe=((suh.bottom+suh.top)/2);var zwg=1.0/((suh.qwd-suh.left)/2);var usd=1.0/((suh.bottom-suh.top)/2);var vuh=this.toe[ouh];if((quh==1)&&(ruh==1)&&(Math.abs(wgd)<0.0001)){for(i=hfb;i<=lq;i++){var wuh=fzd((i-qpe)*zwg);var qud=i-qvc+this.xOrigin;if((qud<0)||(qud>=this.width))continue;for(sjb=rbb;sjb<=jn;sjb++){if(wuh+fzd((sjb-rpe)*usd)>1)continue;var rud=sjb-rvc+this.yOrigin;
if((rud<0)||(rud>=this.height))continue;if(vuh[qud+(rud*this.width)])return true;}}}else {var vsd=Math.sin(-wgd*Math.PI/180.0);var nzb=Math.sin(-wgd*Math.PI/180.0);var tuh=1.0/quh;var uuh=1.0/ruh;for(i=hfb;i<=lq;i++){var xuh=(i-qvc);var yuh=nzb*xuh;var zuh=vsd*xuh;var avh=fzd((i-qpe)*zwg);for(sjb=rbb;sjb<=jn;sjb++){var bvh=(sjb-rpe)*usd;if((avh+(bvh*bvh))>1)continue;var cvh=sjb-rvc;var qud=~~((yuh+vsd*cvh*tuh)+this.xOrigin);if((qud<0)||(qud>=this.width))continue;var rud=~~((nzb*cvh-zuh*uuh)+this.yOrigin);if((rud<0)||(rud>=this.height))continue;
if(vuh[qud+(rud*this.width)])return true;}}}return false;};moe.prototype.cch=function(ouh,puh,qvc,rvc,dvh,evh,fvh,gvh,hvh,ivh,svc,tvc,jvh,kvh,lvh){if(gvh==null)return false;if(this.upd<=0)return false;if(gvh.upd<=0)return false;if(this.toe.length>0)ouh=ouh%this.toe.length;if(ouh<0){ouh=ouh+this.toe.length;;}if(gvh.toe.length>0)hvh=hvh%gvh.toe.length;if(hvh<0){hvh=hvh+gvh.toe.length;}dvh=1.0/dvh;evh=1.0/evh;jvh=1.0/jvh;kvh=1.0/kvh;var hfb=wvc(puh.left,ivh.left);var lq=xvc(puh.qwd,ivh.qwd);var rbb=wvc(puh.top,
ivh.top);var jn=xvc(puh.bottom,ivh.bottom);if((dvh==1)&&(jvh==1)&&(evh==1)&&(kvh==1)&&(fvh==0)&&(lvh==0)){for(var i=hfb;i<=lq;i++){for(var sjb=rbb;sjb<=jn;sjb++){var qud=i-qvc+this.xOrigin;var rud=sjb-rvc+this.yOrigin;if((qud<0)||(qud>=this.width))continue;if((rud<0)||(rud>=this.height))continue;if(this.roe){if(!this.toe[ouh][qud+(rud*this.width)])continue;}qud=i-svc+gvh.xOrigin;rud=sjb-tvc+gvh.yOrigin;if((qud<0)||(qud>=gvh.width))continue;if((rud<0)||(rud>=gvh.height))continue;if(gvh.roe){if(!gvh.toe[hvh][qud+(rud*gvh.width)])continue;
}return true;}}}else if((fvh==0)&&(lvh==0)){for(var i=hfb;i<=lq;i++){for(var sjb=rbb;sjb<=jn;sjb++){var qud=Math.floor(((i-qvc)*dvh+this.xOrigin));var rud=Math.floor(((sjb-rvc)*evh+this.yOrigin));if((qud<0)||(qud>=this.width))continue;if((rud<0)||(rud>=this.height))continue;if(this.roe){if(!this.toe[ouh][qud+(rud*this.width)])continue;}qud=Math.floor(((i-svc)*jvh+gvh.xOrigin));rud=Math.floor(((sjb-tvc)*kvh+gvh.yOrigin));if((qud<0)||(qud>=gvh.width))continue;if((rud<0)||(rud>=gvh.height))continue;if(gvh.roe){
if(!gvh.toe[hvh][qud+(rud*gvh.width)])continue;}return true;}}}else {var mvh=Math.sin(-fvh*czd/180);var nvh=Math.cos(-fvh*czd/180);var ovh=Math.sin(-lvh*czd/180);var pvh=Math.cos(-lvh*czd/180);for(var i=hfb;i<=lq;i++){for(var sjb=rbb;sjb<=jn;sjb++){var qud=Math.floor(((nvh*(i-qvc)+mvh*(sjb-rvc))*dvh+this.xOrigin));var rud=Math.floor(((nvh*(sjb-rvc)-mvh*(i-qvc))*evh+this.yOrigin));if((qud<0)||(qud>=this.width))continue;if((rud<0)||(rud>=this.height))continue;if(this.roe){if(!this.toe[ouh][qud+(rud*this.width)])continue;
}qud=Math.floor(((pvh*(i-svc)+ovh*(sjb-tvc))*jvh+gvh.xOrigin));rud=Math.floor(((pvh*(sjb-tvc)-ovh*(i-svc))*kvh+gvh.yOrigin));if((qud<0)||(qud>=gvh.width))continue;if((rud<0)||(rud>=gvh.height))continue;if(gvh.roe){if(!gvh.toe[hvh][qud+(rud*gvh.width)])continue;}return true;}}}return false;};moe.prototype.xbh=function(ouh,puh,qvc,rvc,quh,ruh,wgd,qvh,rvh,svh,tvh){if(!this.roe){return true;}if(this.upd<=0){return false;}ouh=ouh%this.toe.length;if(ouh<0){ouh=ouh+this.toe.length;}if((qvh==svh)||(rvh==tvh)){
var uvh=new ooe();uvh.left=qvh;uvh.top=xvc(rvh,tvh);uvh.qwd=svh;uvh.bottom=wvc(rvh,tvh);return this.nbh(ouh,puh,qvc,rvc,quh,ruh,wgd,uvh);}var vsd=Math.sin(-wgd*Math.PI/180.0);var nzb=Math.cos(-wgd*Math.PI/180.0);if(Math.abs(svh-qvh)>=Math.abs(tvh-rvh)){if(svh<qvh){var bcd=svh;svh=qvh;qvh=pvc;bcd=tvh;tvh=vvh;rvh=bcd;}var pud=(tvh-rvh)/(svh-qvh);for(var i=wvc(puh.left,qvh);i<=xvc(puh.qwd,svh);i++){var qud=Math.floor((nzb*(i-qvc)+vsd*(rvh+(i-qvh)*pud-rvc))/quh+this.xOrigin);var rud=Math.floor((nzb*(rvh+(i-qvh)*pud-rvc)-vsd*(i-qvc))/ruh+this.yOrigin);
if((qud<0)||(qud>=this.width))continue;if((rud<0)||(rud>=this.height))continue;if(this.toe[ouh][qud+(rud*this.width)])return true;}}else {if(tvh<rvh){var bcd=tvh;tvh=rvh;rvh=bcd;bcd=svh;svh=qvh;qvh=bcd;}var pud=(svh-qvh)/(tvh-rvh);for(var i=wvc(puh.top,rvh);i<=xvc(puh.bottom,tvh);i++){var qud=Math.floor((nzb*(qvh+(i-rvh)*pud-qvc)+vsd*(i-rvc))/quh+this.xOrigin);var rud=Math.floor((nzb*(i-rvc)-vsd*(qvh+(i-rvh)*pud-qvc))/ruh+this.yOrigin);if((qud<0)||(qud>=this.width))continue;if((rud<0)||(rud>=this.height))continue;
if(this.toe[ouh][qud+(rud*this.width)])return true;}}return false;};function vdg(){this.Sprites=[];}vdg.prototype.noe=function(duh){var fad=this.Sprites.length;this.Sprites[fad]=duh;return fad;};vdg.prototype.vah=function(wvh){if(wvh<0||wvh>this.Sprites.length)return null;return this.Sprites[wvh].coe.length;};vdg.prototype.mvc=function(wvh){if(wvh<0||wvh>this.Sprites.length)return null;return this.Sprites[wvh];};vdg.prototype.zxc=function(utc){if(this.Sprites[utc]!=undefined)this.Sprites[utc]=undefined;}
;function ure(){this.x=0;this.y=0;this.index=0;this.xo=0;this.yo=0;this.w=0;this.h=0;this.depth=0.0;this.id=mbg++;this.rme=1.0;this.sme=1.0;this.yre=0xffffff;this.ndb=1.0;this.visible=true;}function erh(xvh){var tre=new ure();if(xvh.x!=undefined)tre.x=xvh.x;if(xvh.y!=undefined)tre.y=xvh.y;if(xvh.index!=undefined)tre.index=xvh.index;if(xvh.xo!=undefined)tre.xo=xvh.xo;if(xvh.yo!=undefined)tre.yo=xvh.yo;if(xvh.w!=undefined)tre.w=xvh.w;if(xvh.h!=undefined)tre.h=xvh.h;if(xvh.depth!=undefined)tre.depth=xvh.depth;
if(xvh.id!=undefined)tre.id=xvh.id;if(xvh.rme!=undefined)tre.rme=xvh.rme;if(xvh.sme!=undefined)tre.sme=xvh.sme;if(xvh.ndb!=undefined)tre.ndb=xvh.ndb;if(xvh.scaleX!=undefined)tre.rme=xvh.scaleX;if(xvh.scaleY!=undefined)tre.sme=xvh.scaleY;if(xvh.colour!=undefined)tre.yre=xvh.colour;if(mbg<xvh.id)mbg=xvh.id+1;return tre;}ure.prototype.fcc=function(){var nid=dcd.qhd(this.index);if(nid!=null){var aid=nid.shd;if(aid.tp>=qid.length)return;if(!qid[aid.tp].complete)return;if(!gre){ybc.globalAlpha=this.ndb;ybc.koe(qid[aid.tp],
aid.x+this.xo,aid.y+this.yo,this.w,this.h,this.x,this.y,this.w*this.rme,this.h*this.sme);}else {var brd=this.yre|((this.ndb*255)<<24);ybc.koe(aid,aid.x+this.xo,aid.y+this.yo,this.w,this.h,this.x,this.y,this.w*this.rme,this.h*this.sme,brd);}}};function yvh(nng){if((nng!=null)&&(nng!=undefined)){this.pName=nng.pName;this.Events=nng.Events;}else {this.pName="";this.Events=[];}}yvh.prototype.ghf=function(zvh){if(this.Events.length==0){return 0;}if(zvh>this.Events[this.Events.length-1]){return this.Events.length;
}for(var i=0;i<this.Events.length;i++){if(this.Events[i].Time>=zvh){return i;}}return this.Events.length;};yvh.prototype.ehf=function(){return this.Events[this.Events.length-1].Time;};function aeg(){this.Timelines=[];}aeg.prototype.xnb=function(nng){var rhd=null;if(nng!=null){rhd=new yvh(nng);}this.Timelines[this.Timelines.length]=rhd;};aeg.prototype.mvc=function(kid){if((kid<0)||(kid>=this.Timelines.length)){return undefined;}return this.Timelines[kid];};aeg.prototype.awh=function(god){for(var i=0;i<this.Timelines.length;
i++){if(this.Timelines[i].pName==god){return i;}}return -1;};aeg.prototype.oyb=function(kid){if((kid>=0)||(kid<this.Timelines.length)){this.Timelines[kid].Events.oyb();}};aeg.prototype.bwh=function(){var index=this.Timelines.length;var prd=new yvh(null);prd.pName="__newtimeline"+index;this.Timelines[index]=prd;return index;};aeg.prototype.zxc=function(kid){if((kid>=0)||(kid<this.Timelines.length)){this.Timelines[kid]=null;}};aeg.prototype.cwh=function(kid,zvh,kse){if((kid>=0)||(kid<this.Timelines.length)){
var prd=this.Timelines[kid];var ufh=prd.Events.length;prd.Events[ufh].Time=zvh;prd.Events[ufh].Event=kse;}};aeg.prototype.dwh=function(kid,zvh){if((kid>=0)||(kid<this.Timelines.length)){var prd=this.Timelines[kid];for(var i=0;i<prd.Events.length;i++){if(prd.Events[i].Time==zvh){prd.Events[i]=null;break;}}}};function ewh(){pName="";moment=0;fwh="";pFunc=null;}function rfg(gwh){this.pfc=gwh;}rfg.prototype.awh=function(zcg){for(var i=1;i<this.pfc.length;i++){if(this.pfc[i].pFunc==zcg){return i;}}return -1;}
;rfg.prototype.mvc=function(jwc){return this.pfc[jwc];};rfg.prototype.kng=function(hwh){for(var i=1;i<this.pfc.length;i++){var hhh=this.pfc[i];if(hhh.moment==hwh){dbd.yzc(umf,i);}}};function maf(dyg,iwh){this.ble=dyg;this.jwh=[];this.kwh=iwh;}var array_get_1D,array_set_1D,array_get_2D,array_set_2D;function lwh(god){return "\""+god.substr(5,god.length-7)+"\"";}function mwh(god){return god.substr(5,god.length-7);}function ecg(wjd,dyg,zyd,pvc){try{if(!wjd){lmd("ERROR: Accessing array with in an invalid instance/global");
return;}var nwh=wjd.laf[dyg];if(!nwh){nwh=global.laf[dyg];if(!nwh){nwh=new maf(dyg,1);wjd.laf[dyg]=nwh;}}if(nwh.kwh!=1){lmd("ERROR: Illegal number of dimensions when accessing array "+lwh(nwh.ble));return;}nwh.jwh[~~zyd]=pvc;}catch(wnd){lmd("ERROR: Accessing array "+lwh(dyg));}}function zbg(wjd,dyg,zyd,pvc){var nwh=wjd.laf[dyg];if(!nwh){nwh=global.laf[dyg];if(!nwh){nwh=new maf(dyg,1);wjd.laf[dyg]=nwh;}}nwh.jwh[~~zyd]=pvc;}function dcg(wjd,dyg,zyd){try{var nwh=wjd.laf[dyg];if(!nwh){nwh=global.laf[dyg];if(!nwh){
lmd("Error: Trying to access unknown array "+lwh(dyg));return 0;}}else if(nwh.kwh!=1){lmd("ERROR: Illegal number of dimensions when accessing array "+lwh(nwh.ble));return 0;}zyd=~~zyd;if(nwh.jwh[zyd]===undefined){lmd("Error: Out of bounds trying to access \""+mwh(dyg)+"["+zyd+"]\", or value never written.");return 0;}return nwh.jwh[zyd];}catch(wnd){lmd("Error: Trying to access unknown array "+lwh(dyg));return 0;}}function ybg(wjd,dyg,zyd){zyd=~~zyd;var nwh=wjd.laf[dyg];if(nwh)return nwh.jwh[zyd];return global.laf[dyg].jwh[zyd];
}function gcg(wjd,dyg,zyd,ikb,pvc){try{var nwh=wjd.laf[dyg];if(!nwh){nwh=new maf(dyg,2);wjd.laf[dyg]=nwh;}else if(nwh.kwh!=2){lmd("ERROR: Illegal number of dimensions when accessing array "+lwh(nwh.ble));return 0;}zyd=~~zyd;ikb=~~ikb;if(!nwh.jwh[zyd])nwh.jwh[zyd]=[];nwh.jwh[zyd][ikb]=pvc;}catch(wnd){lmd("Error: Trying to access unknown array "+lwh(dyg));return 0;}}function bcg(wjd,dyg,zyd,ikb,pvc){var nwh=wjd.laf[dyg];if(!nwh){nwh=new maf(dyg,2);wjd.laf[dyg]=nwh;}zyd=~~zyd;ikb=~~ikb;if(!nwh.jwh[zyd])nwh.jwh[zyd]=[];
nwh.jwh[zyd][ikb]=pvc;}function fcg(wjd,dyg,zyd,ikb){try{var nwh=wjd.laf[dyg];if(!nwh){lmd("Error: Trying to access unknown array "+lwh(dyg));return 0;}else if(nwh.kwh!=2){lmd("ERROR: Illegal number of dimensions when accessing array "+lwh(nwh.ble));return 0;}zyd=~~zyd;ikb=~~ikb;if(nwh.jwh[zyd]==undefined||nwh.jwh[zyd][ikb]==undefined){lmd("Error: Out of bounds trying to access \""+mwh(nwh.ble)+"["+zyd+"]["+ikb+"]\", or value never written.",false);return 0;}return nwh.jwh[zyd][ikb];}catch(wnd){lmd("Error: Trying to access unknown array "+lwh(dyg));
return 0;}}function acg(wjd,dyg,zyd,ikb){zyd=~~zyd;ikb=~~ikb;var nwh=wjd.laf[dyg];return nwh.jwh[zyd][ikb];}function variable_global_exists(wad){qyc("variable_global_exists");}function variable_local_exists(wjd,wad){qyc("variable_local_exists");}function variable_global_get(wad){qyc("variable_global_get");}function variable_global_set(god,pvc){qyc("variable_global_set");}function variable_local_get(wjd,wad){qyc("variable_local_get");return wad;}function variable_local_set(god,pvc){qyc("variable_local_set");
}function variable_global_array_get(god,kid){qyc("variable_global_array_get");return 0;}function variable_global_array_set(god,mee,obd){qyc("variable_global_array_set");}function variable_global_array2_get(god,mee,nee){qyc("variable_global_array2_get");return 0;}function variable_global_array2_set(god,mee,nee,obd){qyc("variable_global_array2_set");return 0;}function variable_local_array_get(wyc,god,kid){qyc("variable_local_array_get");return 0;}function variable_local_array_set(wyc,god,mee,obd){qyc("variable_local_array_set");
}function variable_local_array2_get(wyc,god,mee,nee){qyc("variable_local_array2_get");return 0;}function variable_local_array2_set(wyc,god,mee,nee,obd){qyc("variable_local_array2_set");}var owh=6*32000;var pwh=-1;var qwh=0;var rwh=1;var swh=2;var twh=3;var uwh=4;var vwh=5;var wwh=20;function xwh(xfd,ywh){this.nsg=-1;this.zwh=new Int16Array(xfd*2);this.axh=new Int16Array(xfd*2);this.bxh=new Int32Array(xfd);this.max=xfd;this.cxh=0;this.dxh=ywh;this.lsg=false;this.psg=gre.createBuffer();this.tsg=gre.createBuffer();
this.rsg=gre.createBuffer();gre.bindBuffer(gre.ARRAY_BUFFER,this.psg);gre.bufferData(gre.ARRAY_BUFFER,this.zwh,gre.DYNAMIC_DRAW);gre.bindBuffer(gre.ARRAY_BUFFER,this.tsg);gre.bufferData(gre.ARRAY_BUFFER,this.axh,gre.DYNAMIC_DRAW);gre.bindBuffer(gre.ARRAY_BUFFER,this.rsg);gre.bufferData(gre.ARRAY_BUFFER,this.bxh,gre.DYNAMIC_DRAW);}xwh.prototype.msg=function(){gre.bindBuffer(gre.ARRAY_BUFFER,this.psg);gre.bufferSubData(gre.ARRAY_BUFFER,0,this.zwh);gre.bindBuffer(gre.ARRAY_BUFFER,this.rsg);gre.bufferSubData(gre.ARRAY_BUFFER,
0,this.bxh);gre.bindBuffer(gre.ARRAY_BUFFER,this.tsg);gre.bufferSubData(gre.ARRAY_BUFFER,0,this.axh);this.cxh=0;this.lsg=false;};function exh(){this.fxh=[];this.fxh[wwh]=new rwc();this.fxh[wwh].swc=true;this.gxh=0;this.hrg=null;this.hxh=null;this.ixh=pwh;}exh.prototype.jxh=function(){if(this.hxh==null)return;var size=this.hxh.cxh-this.gxh;switch(this.ixh){case qwh:sag.jrg(0,this.hrg);sag.krg(this.hxh);sag.mrg(this.gxh,size);break;case rwh:sag.jrg(0,this.hrg);sag.krg(this.hxh);sag.prg(this.gxh,size);break;
case swh:sag.jrg(0,this.hrg);sag.krg(this.hxh);sag.qrg(this.gxh,size);break;case twh:sag.jrg(0,null);sag.krg(this.hxh);sag.rrg(this.gxh,size);break;case uwh:sag.jrg(0,null);sag.krg(this.hxh);sag.srg(this.gxh,size);break;case vwh:sag.jrg(0,null);sag.krg(this.hxh);sag.trg(this.gxh,size);break;}this.hxh=this.hrg=null;this.ixh=pwh;};exh.prototype.kxh=function(lxh,kpe,mxh,nxh){var i,oxh,ksg,fng;if(kpe!=null)fng=kpe.cid;else fng=null;if(this.hxh!=null){if((this.hxh.dxh==mxh)&&((this.hxh.cxh+nxh)<=this.hxh.max)&&(this.hrg==fng)&&(this.ixh==lxh)&&((lxh!=uwh)&&(lxh!=swh)&&(lxh!=rwh))){
return this.hxh;}else {var pxh=this.hxh;this.jxh();if((pxh.dxh==mxh)&&((pxh.cxh+nxh)<=pxh.max)){this.hxh=pxh;this.gxh=pxh.cxh;this.ixh=lxh;this.hrg=fng;return this.hxh;}}}this.ixh=lxh;this.hrg=fng;oxh=this.fxh[mxh].pfc;for(i=oxh.length-1;i>=0;i--){ksg=oxh[i];if((ksg.nsg!=osg)&&(ksg.cxh+nxh)<=ksg.max){ksg.lsg=true;this.gxh=ksg.cxh;this.hxh=ksg;return ksg;}}if(nxh<owh)nxh=owh;ksg=new xwh(nxh,mxh);ksg.lsg=true;this.gxh=ksg.cxh;this.hxh=ksg;this.fxh[mxh].xnb(ksg);return ksg;};function kcg(){this.visible=false;
this.cme=0;this.dme=0;this.eme=640;this.fme=480;this.gme=0;this.hme=0;this.ime=640;this.jme=480;this.khb=0;this.oqe=0;this.pqe=0;this.sqe=0;this.tqe=0;this.qqe=0;this.rqe=0;this.fgf=1;this.ggf=1;this.hborder=32;this.vborder=32;this.hspeed=-1;this.vspeed=-1;this.uzc=-1;this.cgf=-1;}kcg.prototype.gu=function(gvc){this.visible=gvc.visible;this.cme=gvc.cme;this.dme=gvc.dme;this.eme=gvc.eme;this.fme=gvc.fme;this.gme=gvc.gme;this.hme=gvc.hme;this.ime=gvc.ime;this.jme=gvc.jme;this.khb=gvc.khb;this.oqe=gvc.oqe;
this.pqe=gvc.pqe;this.sqe=gvc.sqe;this.tqe=gvc.tqe;this.qqe=gvc.qqe;this.rqe=gvc.rqe;this.fgf=gvc.fgf;this.ggf=gvc.ggf;this.hborder=gvc.hborder;this.vborder=gvc.vborder;this.hspeed=gvc.hspeed;this.vspeed=gvc.vspeed;this.uzc=gvc.uzc;this.cgf=gvc.cgf;};function frh(qxh){rxh=new kcg();if(qxh.visible!=undefined)rxh.visible=qxh.visible;if(qxh.xview!=undefined)rxh.cme=qxh.xview;if(qxh.yview!=undefined)rxh.dme=qxh.yview;if(qxh.wview!=undefined)rxh.eme=qxh.wview;if(qxh.hview!=undefined)rxh.fme=qxh.hview;if(qxh.xport!=undefined)rxh.gme=qxh.xport;
if(qxh.yport!=undefined)rxh.hme=qxh.yport;if(qxh.wport!=undefined)rxh.ime=qxh.wport;if(qxh.hport!=undefined)rxh.jme=qxh.hport;if(qxh.khb!=undefined)rxh.jme=qxh.khb;if(qxh.hborder!=undefined)rxh.hborder=qxh.hborder;if(qxh.vborder!=undefined)rxh.vborder=qxh.vborder;if(qxh.hspeed!=undefined)rxh.hspeed=qxh.hspeed;if(qxh.vspeed!=undefined)rxh.vspeed=qxh.vspeed;if(qxh.index!=undefined)rxh.uzc=qxh.index;return rxh;}var sxh=0;var txh=1;var uxh=2;var vxh=16;var wxh=24;var xxh=[];var yxh=[];var zxh=0;var ayh=0;function byh(bvg){
gre=cyh(bvg);if(!gre)return false;if(!dyh())return false;if(!eyh())return false;rag=new exh();sag=new erg();tag=[];tag[sxh]=new wgg();tag[txh]=new wgg();tag[uxh]=new wgg();uag=[];for(var i=0;i<vxh;i++){uag[i]=new wgg();}pbg=0;obg=1;vag=new wgg();wag=new wgg();fyh(wxh);return true;}function xvg(){sid=gyh;vid=hyh;ere=iyh;sug=jyh;rug=kyh;ktg=lyh;gsd=myh;jtg=nyh;ajd=oyh;lvg=pyh;nvg=qyh;hug=ryh;qvg=syh;svg=tyh;draw_rectangle=uyh;draw_roundrect_color=vyh;draw_rectangle_color=wyh;wfd=xyh;draw_point=yyh;draw_getpixel=zyh;
draw_triangle=azh;draw_triangle_color=bzh;draw_ellipse_color=czh;draw_circle_color=dzh;draw_point_color=ezh;draw_line_width_color=fzh;draw_clear_alpha=gzh;surface_create=hzh;surface_set_target=izh;surface_reset_target=jzh;surface_free=kzh;surface_getpixel=lzh;draw_surface=mzh;surface_copy=nzh;surface_copy_part=ozh;sprite_add_from_surface=pzh;sprite_create_from_surface=qzh;sprite_add_from_screen=rzh;sprite_add_from_screen=rzh;sprite_create_from_surface=qzh;sprite_add_from_surface=pzh;mp_grid_draw=szh;
draw_path=tzh;gre.koe=uzh;}function cyh(bvg){var vzh=null;var wzh=["webgl","experimental-webgl","moz-webgl","webkit-3d"];{for(var i=0;i<wzh.length;i++){try{vzh=bvg.getContext(wzh[i],{antialias:false,ndb:true,xzh:false});if(vzh)break;}catch(wnd){return null;}}}if(vzh){vzh.viewportWidth=bvg.width;vzh.viewportHeight=bvg.height;zxh=vzh.viewportWidth;ayh=vzh.viewportHeight;}return vzh;}function eyh(){var gsg=document.createElement(hoe);gsg.evc=gsg.width=16;gsg.fvc=gsg.height=16;gsg.complete=true;gsg.aqe=false;
gsg.name="";gsg.ybc=gsg.getContext('2d');gsg.ybc.save();gsg.ybc.setTransform(1,0,0,1,0,0);gsg.ybc.globalAlpha=1;gsg.ybc.fillStyle='#ffffff';gsg.ybc.fillRect(0,0,16,16);gsg.ybc.restore();var aid=new bid();aid.x=0;aid.y=0;aid.w=15;aid.h=15;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=15;aid.CropHeight=15;aid.ow=aid.w;aid.oh=aid.h;aid.tp=-1;aid.cid=gsg;aid.pu=[];aid.spe=1;aid.ay=0;yzh(aid);gre.gsg=aid;return true;}var zzh=function(sjg,type,source){var vm=gre.createShader((type=='vertex')?gre.VERTEX_SHADER:gre.FRAGMENT_SHADER);
gre.shaderSource(vm,source);gre.compileShader(vm);if(!gre.getShaderParameter(vm,gre.COMPILE_STATUS)){return;}gre.attachShader(sjg,vm);};function dyh(){var aai="uniform mat4 pmatrix;"+"uniform mat4 vmatrix;"+"uniform vec2 oneoveruv;"+" "+"attribute vec2 vertex;"+"attribute vec4 color;"+"attribute vec2 UV;"+"varying vec4 fcolor;"+"varying vec2 texc;"+" "+"void main(void)"+"{"+"    fcolor = color;"+"    texc   = UV * oneoveruv;"+"    gl_Position = (pmatrix * vmatrix) * vec4( vertex.x, vertex.y, 1, 1);"+"}";
var bai="precision mediump float;"+"uniform sampler2D pTexure;"+" "+"varying vec4 fcolor;"+"varying vec2 texc;"+" "+"void main(void)"+"{"+"    vec4 color   = texture2D( pTexure, texc ).rgba * fcolor.bgra;"+"    gl_FragColor = color;"+"}";var cai=gre.createProgram();var error=gre.getError();zzh(cai,"vertex",aai);zzh(cai,"fragment",bai);gre.linkProgram(cai);error=gre.getError();if(!gre.getProgramParameter(cai,gre.LINK_STATUS)){alert("Could not initialise shaders\n\n"+gre.getShaderInfoLog(dai));return false;
}gre.useProgram(cai);cai.eai=gre.getUniformLocation(cai,"ViewMatrix");gre.dsg=cai;cai.qsg=gre.getAttribLocation(cai,"vertex");cai.ssg=gre.getAttribLocation(cai,"color");cai.usg=gre.getAttribLocation(cai,"UV");cai.esg=gre.getUniformLocation(cai,"pmatrix");cai.fsg=gre.getUniformLocation(cai,"vmatrix");cai.jsg=gre.getUniformLocation(cai,"oneoveruv");cai.isg=gre.getUniformLocation(cai,"pTexure");return true;}function pyh(){}function qyh(){}function jyh(owg,pwg,qwg,rwg,wgd){kwg(owg,pwg,qwg,rwg,wgd);sag.wrg(wag);
sag.urg(vag);lug=owg;mug=pwg;nug=qwg;oug=rwg;kyh(lsd,msd,nsd,osd);}function kyh(gwg,hwg,iwg,jwg){lsd=gwg;msd=hwg;nsd=iwg;osd=jwg;sag.xrg(gwg,hwg,iwg,jwg);}function syh(){sag.oz();gre.disable(gre.CULL_FACE);}function tyh(){rag.jxh();osg++;sag.csg();}function yzh(kpe){var fai=gre.createTexture();kpe.cid.hsg=fai;fai.ojd=kpe.cid;kpe.cid.evc=kpe.cid.width;kpe.cid.fvc=kpe.cid.height;gre.bindTexture(gre.TEXTURE_2D,fai);gre.pixelStorei(gre.UNPACK_WEBGL,true);gre.texImage2D(gre.TEXTURE_2D,0,gre.RGBA,gre.RGBA,
gre.UNSIGNED_BYTE,kpe.cid);gre.texParameteri(gre.TEXTURE_2D,gre.TEXTURE_MAG_FILTER,gre.NEAREST);gre.texParameteri(gre.TEXTURE_2D,gre.TEXTURE_MIN_FILTER,gre.NEAREST);gre.texParameteri(gre.TEXTURE_2D,gre.TEXTURE_MIN_FILTER,gre.LINEAR);gre.texParameteri(gre.TEXTURE_2D,gre.TEXTURE_WRAP_S,gre.CLAMP_TO_EDGE);gre.texParameteri(gre.TEXTURE_2D,gre.TEXTURE_WRAP_T,gre.CLAMP_TO_EDGE);gre.bindTexture(gre.TEXTURE_2D,null);}function gyh(kpe,vtc,wtc,bjd){var ksg,egh,gai,hai,iai,jai,brd;if(!kpe.cid.hsg)yzh(kpe);ksg=rag.kxh(qwh,
kpe,wwh,6);kai=ksg.cxh<<1;gai=ksg.cxh;ksg.cxh+=6;hai=ksg.zwh;iai=ksg.bxh;jai=ksg.axh;vtc=~~(vtc+kpe.XOffset);wtc=~~(wtc+kpe.YOffset);hai[kai+0]=hai[kai+8]=hai[kai+10]=vtc;hai[kai+1]=hai[kai+3]=hai[kai+11]=wtc;hai[kai+2]=hai[kai+6]=hai[kai+4]=vtc+kpe.CropWidth;hai[kai+5]=hai[kai+7]=hai[kai+9]=wtc+kpe.CropHeight;jai[kai+0]=jai[kai+8]=jai[kai+10]=kpe.x;jai[kai+1]=jai[kai+3]=jai[kai+11]=kpe.y;jai[kai+2]=jai[kai+4]=jai[kai+6]=kpe.x+kpe.w;jai[kai+5]=jai[kai+7]=jai[kai+9]=kpe.y+kpe.h;brd=((bjd*255.0)<<24)|0xffffff;
iai[gai]=iai[gai+1]=iai[gai+2]=iai[gai+3]=iai[gai+4]=iai[gai+5]=brd;}function uzh(kpe,lai,mai,nai,oai,vtc,wtc,bvc,cvc,iad){var ksg,egh,gai,hai,iai,jai,brd;if(!kpe.cid.hsg)yzh(kpe);if(iad==undefined)iad=0xffffffff;ksg=rag.kxh(qwh,kpe,wwh,6);kai=ksg.cxh<<1;gai=ksg.cxh;ksg.cxh+=6;hai=ksg.zwh;iai=ksg.bxh;jai=ksg.axh;vtc=~~vtc;wtc=~~wtc;hai[kai+0]=hai[kai+8]=hai[kai+10]=vtc;hai[kai+1]=hai[kai+3]=hai[kai+11]=wtc;hai[kai+2]=hai[kai+6]=hai[kai+4]=vtc+bvc;hai[kai+5]=hai[kai+7]=hai[kai+9]=wtc+cvc;jai[kai+0]=jai[kai+8]=jai[kai+10]=lai;
jai[kai+1]=jai[kai+3]=jai[kai+11]=mai;jai[kai+2]=jai[kai+4]=jai[kai+6]=lai+nai;jai[kai+5]=jai[kai+7]=jai[kai+9]=mai+oai;iai[gai]=iai[gai+1]=iai[gai+2]=iai[gai+3]=iai[gai+4]=iai[gai+5]=iad;}function myh(iad){sag.yrg(gre.COLOR_BUFFER_BIT|gre.DEPTH_BUFFER_BIT,iad|0xff000000);}function gzh(iad,bjd){iad=((bjd*255.0)<<24)|iid(iad);sag.yrg(gre.COLOR_BUFFER_BIT|gre.DEPTH_BUFFER_BIT,iad);}function lyh(uad){if(lyh.arguments.length>0){var jsd=lyh.arguments[0];}else {}}function nyh(vtc,wtc,ire,jre,wgd){}function hyh(kpe,
vtc,wtc,vtiled,htiled,iad,bjd){var ksg,egh,gai,hai,iai,jai,w,h;if(!kpe.cid.hsg)yzh(kpe);pai=kpe.ow+~~vtc;qai=kpe.oh+~~wtc;if(htiled){vtc=(((~~(lug/kpe.ow))*kpe.ow)+(~~vtc)%kpe.ow)-kpe.ow;pai=(((((nqe.eme+(kpe.ow-1))/kpe.ow)&0xffffffff)+2)*kpe.ow)+~~vtc;}if(vtiled){wtc=(((~~(mug/kpe.oh))*kpe.oh)+(~~wtc)%kpe.oh)-kpe.oh;qai=(((((nqe.fme+(kpe.oh-1))/kpe.oh)&0xffffffff)+2)*kpe.oh)+~~wtc;}vtc=~~vtc;wtc=~~wtc;var cxg=1;var dxg=1;var eoe=0;var foe=0;var zwg=~~(cxg*kpe.ow);var usd=~~(dxg*kpe.oh);if((zwg<=0)||(usd<=0))return;
var colour=~~((bjd*255.0)<<24)|(iad&0xffffff);var xdb=(-cxg*(eoe-kpe.XOffset));var uvc=(-dxg*(foe-kpe.YOffset));var rai=cxg*kpe.CropWidth;var sai=dxg*kpe.CropHeight;var qud=vtc+xdb;var rud=~~wtc+uvc;var omb=kpe.x;var yt=omb+kpe.w;var hh=kpe.y;var wt=kpe.y+kpe.h;var wud=rud;while(qud<pai){rud=wud;var jud=qud+rai;while(rud<qai){ksg=rag.kxh(qwh,kpe,wwh,6);kai=ksg.cxh<<1;gai=ksg.cxh;ksg.cxh+=6;hai=ksg.zwh;iai=ksg.bxh;jai=ksg.axh;var lud=rud+sai;iai[gai]=iai[gai+1]=iai[gai+2]=iai[gai+3]=iai[gai+4]=iai[gai+5]=colour;
hai[kai+0]=(qud);hai[kai+1]=(rud);jai[kai+0]=(omb);jai[kai+1]=(hh);hai[kai+2]=(jud);hai[kai+3]=(rud);jai[kai+2]=(yt);jai[kai+3]=(hh);hai[kai+4]=(jud);hai[kai+5]=(lud);jai[kai+4]=(yt);jai[kai+5]=(wt);hai[kai+6]=(jud);hai[kai+7]=(lud);jai[kai+6]=(yt);jai[kai+7]=(wt);hai[kai+8]=(qud);hai[kai+9]=(lud);jai[kai+8]=(omb);jai[kai+9]=(wt);hai[kai+10]=(qud);hai[kai+11]=(rud);jai[kai+10]=(omb);jai[kai+11]=(hh);if(!vtiled){break;}rud=rud+usd;}if(!htiled){break;}qud=qud+zwg;}}function iyh(kpe,eoe,foe,vtc,wtc,
cxg,dxg,jcd,iad,ncd,itd,jtd,bjd){var ksg,egh,gai,hai,iai,jai;if(!kpe.cid.hsg)yzh(kpe);ksg=rag.kxh(qwh,kpe,wwh,6);kai=ksg.cxh<<1;gai=ksg.cxh;ksg.cxh+=6;hai=ksg.zwh;iai=ksg.bxh;jai=ksg.axh;var xdb=~~(-cxg*(eoe-kpe.XOffset));var uvc=~~(-dxg*(foe-kpe.YOffset));var ydb=~~(xdb+cxg*(kpe.CropWidth));var vvc=~~(uvc+dxg*(kpe.CropHeight));if(Math.abs(jcd)<0.001){hai[kai+0]=hai[kai+8]=hai[kai+10]=vtc+xdb;hai[kai+1]=hai[kai+3]=hai[kai+11]=wtc+uvc;hai[kai+2]=hai[kai+6]=hai[kai+4]=vtc+ydb;hai[kai+5]=hai[kai+7]=hai[kai+9]=wtc+vvc;
}else {var vsd=Math.sin(jcd);var nzb=Math.cos(jcd);var tai=xdb*nzb;var uai=ydb*nzb;var vai=uvc*nzb;var wai=vvc*nzb;var xai=xdb*vsd;var yai=ydb*vsd;var zai=uvc*vsd;var abi=vvc*vsd;hai[kai+0]=hai[kai+10]=vtc+tai+zai;hai[kai+1]=hai[kai+11]=wtc-xai+vai;hai[kai+4]=hai[kai+6]=vtc+uai+abi;hai[kai+5]=hai[kai+7]=wtc-yai+wai;hai[kai+3]=wtc-yai+vai;hai[kai+2]=vtc+uai+zai;hai[kai+8]=vtc+tai+abi;hai[kai+9]=wtc-xai+wai;}jai[kai+0]=jai[kai+8]=jai[kai+10]=kpe.x;jai[kai+1]=jai[kai+3]=jai[kai+11]=kpe.y;jai[kai+2]=jai[kai+4]=jai[kai+6]=kpe.x+kpe.w;
jai[kai+5]=jai[kai+7]=jai[kai+9]=kpe.y+kpe.h;var bu=(bjd*255.0)<<24;iad=bu|(iad&0xffffff);if(ncd==undefined){ncd=iad;itd=iad;jtd=iad;}else {ncd=ncd|bu;itd=itd|bu;jtd=jtd|bu;}iai[gai]=iai[gai+5]=iad;iai[gai+1]=ncd;iai[gai+2]=iai[gai+3]=itd;iai[gai+4]=jtd;}function oyh(kpe,wid,xid,yid,zid,vtc,wtc,hcd,icd,ktc,bjd){if(!kpe)return;if(!kpe.cid)return;if(!kpe.cid.complete)return;ktc&=0xffffff;ktc|=(tid*255)<<24;if(wid<kpe.XOffset){var txg=kpe.XOffset-wid;vtc+=txg;yid-=txg;wid=0;}else {wid-=kpe.XOffset;yid-=kpe.XOffset;
}if(xid<kpe.YOffset){var txg=kpe.YOffset-xid;wtc+=txg;zid-=txg;xid=0;}else {xid-=kpe.YOffset;zid-=kpe.YOffset;}if(yid>(kpe.CropWidth-wid-kpe.XOffset))yid=kpe.CropWidth-wid-kpe.XOffset;if(zid>(kpe.CropHeight-xid-kpe.YOffset))zid=kpe.CropHeight-xid-kpe.YOffset;if(yid<=0||zid<=0)return;vtc=~~vtc;wtc=~~wtc;uzh(kpe,wid+kpe.x,xid+kpe.y,yid,zid,vtc,wtc,yid*hcd,zid*icd,ktc);}function ryh(lcd,fcd,vtc,wtc,hcd,icd,wgd,iad,bjd){}function bbi(xgg){pbg++;uag[pbg].fjb(uag[pbg-1],xgg);}function cbi(xgg){if(pbg>0)pbg--;
;}function uyh(qvc,rvc,svc,tvc,kcd){var ksg,egh,gai,hai,iai,jai;qvc=~~qvc;rvc=~~rvc;svc=~~svc;tvc=~~tvc;var dbi=qwh;var ay=6;if(kcd){dbi=twh;ay=8;}ksg=rag.kxh(dbi,null,wwh,ay);kai=ksg.cxh<<1;gai=ksg.cxh;ksg.cxh+=ay;hai=ksg.zwh;iai=ksg.bxh;jai=ksg.axh;var brd=~~((tid*255.0)<<24)|(sod&0xffffff);if(!kcd){hai[kai+10]=hai[kai+8]=hai[kai+0]=qvc;hai[kai+11]=hai[kai+3]=hai[kai+1]=rvc;hai[kai+6]=hai[kai+4]=hai[kai+2]=svc;hai[kai+9]=hai[kai+7]=hai[kai+5]=tvc;iai[gai]=iai[gai+1]=iai[gai+2]=iai[gai+3]=iai[gai+4]=iai[gai+5]=brd;
}else {iai[gai]=iai[gai+1]=iai[gai+2]=iai[gai+3]=iai[gai+4]=iai[gai+5]=iai[gai+6]=iai[gai+7]=brd;hai[kai+10]=hai[kai+14]=hai[kai+12]=hai[kai+0]=qvc;hai[kai+15]=hai[kai+5]=hai[kai+3]=hai[kai+1]=rvc;hai[kai+8]=hai[kai+6]=hai[kai+4]=hai[kai+2]=svc;hai[kai+7]=hai[kai+9]=hai[kai+11]=hai[kai+13]=tvc;}}function fyh(aqd){var i=0;wxh=4*(xvc(64,wvc(4,aqd))/4);for(i=0;i<=wxh;i++){xxh[i]=Math.cos(i*2*Math.PI/wxh);yxh[i]=Math.sin(i*2*Math.PI/wxh);}}function vyh(qvc,rvc,svc,tvc,vfd,ncd,kcd){var i,w,h;w=10;h=10;if(w>Math.abs(svc-qvc))w=Math.abs(svc-qvc);
if(h>Math.abs(tvc-rvc))h=Math.abs(tvc-rvc);mlb=(vfd&0xffffff)|((tid*255.0)<<24);nlb=(ncd&0xffffff)|((tid*255.0)<<24);var dbi=rwh;var ay=wxh+6;if(kcd){dbi=uwh;}var zud=(qvc+svc)*0.5;var avd=(rvc+tvc)*0.5;var ebi=Math.abs(svc-qvc)*0.5-w*0.5;var fbi=Math.abs(tvc-rvc)*0.5-h*0.5;ksg=rag.kxh(dbi,null,wwh,ay);kai=ksg.cxh<<1;gai=ksg.cxh;hai=ksg.zwh;iai=ksg.bxh;hai[kai]=zud;hai[kai+1]=avd;iai[gai]=mlb;kai+=2;gai++;for(i=0;i<=wxh/4;i++){hai[kai]=(zud+ebi+w*xxh[i]/2);hai[kai+1]=(avd+fbi+h*yxh[i]/2);iai[gai]=nlb;
kai+=2;gai++;}for(i=wxh/4;i<=wxh/2;i++){hai[kai]=(zud-ebi+w*xxh[i]/2);hai[kai+1]=(avd+fbi+h*yxh[i]/2);iai[gai]=nlb;kai+=2;gai++;}for(i=wxh/2;i<=3*(wxh/4);i++){hai[kai]=(zud-ebi+w*xxh[i]/2);hai[kai+1]=(avd-fbi+h*yxh[i]/2);iai[gai]=nlb;kai+=2;gai++;}for(i=3*(wxh/4);i<=wxh;i++){hai[kai]=(zud+ebi+w*xxh[i]/2);hai[kai+1]=(avd-fbi+h*yxh[i]/2);iai[gai]=nlb;kai+=2;gai++;}hai[kai]=hai[(ksg.cxh<<1)+2];hai[kai+1]=hai[(ksg.cxh<<1)+3];iai[gai]=nlb;if(kcd){var gbi=ksg.cxh<<1;hai[gbi]=hai[gbi+2];hai[gbi+1]=hai[gbi+3];
iai[ksg.cxh]=iai[ksg.cxh+1];}ksg.cxh+=ay;}function wyh(qvc,rvc,svc,tvc,vfd,ncd,itd,jtd,kcd){var ksg,egh,gai,hai,iai,jai;qvc=~~qvc;rvc=~~rvc;svc=~~svc;tvc=~~tvc;var bu=((tid*255.0)<<24);vfd=iid(vfd)|bu;ncd=iid(ncd)|bu;itd=iid(itd)|bu;jtd=iid(jtd)|bu;var dbi=qwh;var ay=6;if(kcd){dbi=twh;ay=8;}ksg=rag.kxh(dbi,null,wwh,ay);kai=ksg.cxh<<1;gai=ksg.cxh;ksg.cxh+=ay;hai=ksg.zwh;iai=ksg.bxh;jai=ksg.axh;var brd=~~((tid*255.0)<<24)|(sod&0xffffff);if(!kcd){hai[kai+10]=hai[kai+8]=hai[kai+0]=qvc;hai[kai+11]=hai[kai+3]=hai[kai+1]=rvc;
hai[kai+6]=hai[kai+4]=hai[kai+2]=svc;hai[kai+9]=hai[kai+7]=hai[kai+5]=tvc;iai[gai+0]=iai[gai+5]=vfd;iai[gai+2]=iai[gai+3]=itd;iai[gai+1]=ncd;iai[gai+4]=jtd;}else {iai[gai+0]=iai[gai+7]=vfd;iai[gai+1]=iai[gai+2]=ncd;iai[gai+3]=iai[gai+4]=itd;iai[gai+5]=iai[gai+6]=jtd;hai[kai+10]=hai[kai+14]=hai[kai+12]=hai[kai+0]=qvc;hai[kai+15]=hai[kai+5]=hai[kai+3]=hai[kai+1]=rvc;hai[kai+8]=hai[kai+6]=hai[kai+4]=hai[kai+2]=svc;hai[kai+7]=hai[kai+9]=hai[kai+11]=hai[kai+13]=tvc;}}function xyh(qvc,rvc,svc,tvc,vfd,ncd,
ltd,kcd){}function yyh(vtc,wtc){ezh(vtc,wtc,btd);}function ezh(vtc,wtc,iad){var ksg,egh,gai,hai,iai,jai;ksg=rag.kxh(vwh,null,wwh,1);kai=ksg.cxh<<1;hai=ksg.zwh;iai=ksg.bxh;jai=ksg.axh;var brd=~~((tid*255.0)<<24)|iid(iad);hai[kai+0]=~~vtc;hai[kai+1]=~~wtc;iai[ksg.cxh]=brd;ksg.cxh++;}function hbi(qvc,rvc,svc,tvc,bvc){}function zyh(vtc,wtc){var ibi=new Uint8Array(16);vtc=~~vtc;wtc=~~wtc;rag.jxh();sag.csg();gre.readPixels(vtc,ayh-wtc,1,1,gre.RGBA,gre.UNSIGNED_BYTE,ibi);var brd=ibi[2]<<16|(ibi[1]<<8)|(ibi[0]);
sag.oz();return brd;}function azh(qvc,rvc,svc,tvc,rtd,std,kcd){var ksg,egh,gai,hai,iai,jai;ksg=rag.kxh(qwh,null,wwh,3);kai=ksg.cxh<<1;gai=ksg.cxh;hai=ksg.zwh;iai=ksg.bxh;hai[kai+0]=~~qvc;hai[kai+1]=~~rvc;hai[kai+2]=~~svc;hai[kai+3]=~~tvc;hai[kai+4]=~~rtd;hai[kai+5]=~~std;iai[gai]=iai[gai+1]=iai[gai+2]=((tid*255.0)<<24)|sod;;ksg.cxh+=3;}function bzh(qvc,rvc,svc,tvc,rtd,std,ejd,fjd,gjd,kcd){var ksg,egh,gai,hai,iai,jai;var bu=((tid*255.0)<<24);ejd=bu|iid(ejd);fjd=bu|iid(fjd);gjd=bu|iid(gjd);ksg=rag.kxh(qwh,
null,wwh,3);kai=ksg.cxh<<1;gai=ksg.cxh;hai=ksg.zwh;iai=ksg.bxh;hai[kai+0]=~~qvc;hai[kai+1]=~~rvc;hai[kai+2]=~~svc;hai[kai+3]=~~tvc;hai[kai+4]=~~rtd;hai[kai+5]=~~std;iai[gai]=ejd;iai[gai+1]=fjd;iai[gai+2]=gjd;ksg.cxh+=3;}function czh(qvc,rvc,svc,tvc,vfd,ncd,kcd){var zud=(qvc+svc)/2;var avd=(rvc+tvc)/2;var ebi=Math.abs((qvc-svc)/2);var fbi=Math.abs((rvc-tvc)/2);var bu=((tid*255.0)<<24);vfd=bu|iid(vfd);ncd=bu|iid(ncd);var jbi;var hh;if(kcd){ksg=rag.kxh(uwh,null,wwh,wxh+1);kai=ksg.cxh<<1;gai=ksg.cxh;hai=ksg.zwh;
iai=ksg.bxh;ksg.cxh+=wxh+1;for(var i=0;i<=(wxh+1);i++){hai[kai]=(zud+ebi*xxh[i]);hai[kai+1]=(avd+fbi*yxh[i]);iai[gai]=ncd;kai+=2;gai++;}}else {ksg=rag.kxh(qwh,null,wwh,(wxh*3));kai=ksg.cxh<<1;gai=ksg.cxh;hai=ksg.zwh;iai=ksg.bxh;ksg.cxh+=(wxh*3);for(var i=0;i<=wxh;i++){hai[kai+0]=zud;hai[kai+1]=avd;iai[gai]=vfd;hai[kai+2]=(zud+ebi*xxh[i]);hai[kai+3]=(avd+fbi*yxh[i]);iai[gai+1]=ncd;hai[kai+4]=(zud+ebi*xxh[i+1]);hai[kai+5]=(avd+fbi*yxh[i+1]);iai[gai+2]=ncd;kai+=6;gai+=3;}}}function dzh(vtc,wtc,gkb,vfd,
ncd,kcd){czh(vtc-gkb,wtc-gkb,vtc+gkb,wtc+gkb,vfd,ncd,kcd);}function fzh(qvc,rvc,svc,tvc,bvc,vfd,ncd){var bu=((tid*255.0)<<24);vfd=bu|iid(vfd);ncd=bu|iid(ncd);ksg=rag.kxh(rwh,null,wwh,4);kai=ksg.cxh<<1;gai=ksg.cxh;hai=ksg.zwh;iai=ksg.bxh;ksg.cxh+=4;var qud=(svc-qvc);var rud=(tvc-rvc);var hfb=Math.sqrt((qud*qud)+(rud*rud));if(hfb<0.0001)return;qud=0.5*bvc*qud/hfb;rud=0.5*bvc*rud/hfb;hai[kai]=(qvc-rud);hai[kai+1]=(rvc+qud);iai[gai]=vfd;hai[kai+2]=(svc-rud);hai[kai+3]=(tvc+qud);iai[gai+1]=ncd;hai[kai+4]=(svc+rud);
hai[kai+5]=(tvc-qud);iai[gai+2]=ncd;hai[kai+6]=(qvc+rud);hai[kai+7]=(rvc-qud);iai[gai+3]=vfd;}function kbi(kpe,bvc,cvc){var lbi=gre.createFramebuffer();gre.bindFramebuffer(gre.FRAMEBUFFER,lbi);lbi.width=bvc;lbi.height=cvc;kpe.mbi=lbi;nbi=gre.createTexture();gre.bindTexture(gre.TEXTURE_2D,nbi);gre.texParameteri(gre.TEXTURE_2D,gre.TEXTURE_MAG_FILTER,gre.NEAREST);gre.texParameteri(gre.TEXTURE_2D,gre.TEXTURE_MIN_FILTER,gre.NEAREST);gre.texParameteri(gre.TEXTURE_2D,gre.TEXTURE_MIN_FILTER,gre.LINEAR);gre.texParameteri(gre.TEXTURE_2D,
gre.TEXTURE_WRAP_S,gre.CLAMP_TO_EDGE);gre.texParameteri(gre.TEXTURE_2D,gre.TEXTURE_WRAP_T,gre.CLAMP_TO_EDGE);kpe.cid.hsg=nbi;gre.texImage2D(gre.TEXTURE_2D,0,gre.RGBA,lbi.width,lbi.height,0,gre.RGBA,gre.UNSIGNED_BYTE,null);var obi=gre.createRenderbuffer();gre.bindRenderbuffer(gre.RENDERBUFFER,obi);gre.renderbufferStorage(gre.RENDERBUFFER,gre.DEPTH_COMPONENT16,lbi.width,lbi.height);gre.framebufferTexture2D(gre.FRAMEBUFFER,gre.COLOR_ATTACHMENT0,gre.TEXTURE_2D,nbi,0);gre.framebufferRenderbuffer(gre.FRAMEBUFFER,
gre.pbi,gre.RENDERBUFFER,obi);kpe.obi=obi;gre.bindTexture(gre.TEXTURE_2D,null);gre.bindRenderbuffer(gre.RENDERBUFFER,null);gre.bindFramebuffer(gre.FRAMEBUFFER,null);}function hzh(bvc,cvc){var aid=new bid();aid.cid=document.createElement("surf");aid.evc=bvc;aid.fvc=cvc;aid.cid.width=8;aid.cid.height=8;aid.cid.evc=bvc;aid.cid.fvc=cvc;kbi(aid,bvc,cvc);aid.x=0;aid.y=0;aid.w=bvc;aid.h=cvc;aid.XOffset=0;aid.YOffset=0;aid.CropWidth=aid.w;aid.CropHeight=aid.h;aid.ow=aid.w;aid.oh=aid.h;aid.tp=whd.xnb(aid);aid.bqe=aid;
aid.cid.complete=true;aid.pu=[];aid.ay=0;aid.spe=4;aid.cqe=0;aid.ujd=null;aid.goe=aid.cid;return aid.tp;}function izh(utc){var gid=whd.mvc(utc);if(gid!=null){rag.jxh();zxh=gid.evc;ayh=gid.fvc;kqe.left=lqe.left;kqe.top=lqe.top;kqe.qwd=lqe.qwd;kqe.bottom=lqe.bottom;lqe.left=0;lqe.top=0;lqe.qwd=gid.evc;lqe.bottom=gid.fvc;mqe.gu(nqe);nqe.cme=0;nqe.dme=0;nqe.eme=gid.evc;nqe.fme=gid.fvc;nqe.gme=0;nqe.hme=0;nqe.ime=gid.evc;nqe.jme=gid.fvc;nqe.oqe=0;nqe.pqe=0;nqe.qqe=gid.evc;nqe.rqe=gid.fvc;nqe.sqe=nqe.oqe+nqe.qqe;
nqe.tqe=nqe.pqe+nqe.rqe;xag=gid.mbi;sag.zrg(gid.mbi);obg=-1;sug(nqe.cme,nqe.dme,nqe.eme,nqe.fme,nqe.khb);iqe=true;}}function jzh(){rag.jxh();if(iqe){lqe.left=kqe.left;lqe.qwd=kqe.qwd;lqe.top=kqe.top;lqe.bottom=kqe.bottom;nqe.gu(mqe);}obg=1;xag=null;sag.zrg(null);sug(nqe.cme,nqe.dme,nqe.eme,nqe.fme,nqe.khb);zxh=gre.viewportWidth;ayh=gre.viewportHeight;}function kzh(utc){var gid=whd.mvc(utc);if(gid!=null){gre.deleteFramebuffer(gid.mbi);gre.deleteRenderbuffer(gid.obi);gre.deleteTexture(gid.cid.hsg);gid.cid.hsg=undefined;
whd.jvc(utc);}}function lzh(utc,vtc,wtc){var gid=whd.mvc(utc);if(gid!=null){var ibi=new Uint8Array(16);vtc=~~vtc;wtc=~~wtc;rag.jxh();sag.csg();gre.bindFramebuffer(gre.FRAMEBUFFER,gid.mbi);gre.readPixels(vtc,wtc,1,1,gre.RGBA,gre.UNSIGNED_BYTE,ibi);gre.bindFramebuffer(gre.FRAMEBUFFER,xag);var brd=ibi[2]|(ibi[1]<<8)|(ibi[0]<<16);sag.oz();return brd;}return 0x00000000;}function mzh(utc,vtc,wtc){var gid=whd.mvc(utc);if(!gid)return;vtc=~~vtc;wtc=~~wtc;ybc.koe(gid,0,0,gid.evc,gid.fvc,vtc,wtc,gid.evc,gid.fvc,0xffffffff);
}function nzh(hre,vtc,wtc,kvc){djd("surface_copy() (WebGL)");}function ozh(hre,vtc,wtc,kvc,ire,jre,kre,lre){var vwc=whd.mvc(hre);var wwc=whd.mvc(kvc);if(vwc!=null&&wwc!=null){}djd("surface_copy_part() (WebGL)");}function rzh(kid,vtc,wtc,bvc,cvc,thd,uhd){djd("sprite_add_from_screen() (WebGL)");return -1;}function qzh(utc,vtc,wtc,bvc,cvc,thd,uhd,eoe,foe){djd("sprite_create_from_surface() (WebGL)");return -1;}function pzh(kid,utc,vtc,wtc,bvc,cvc,thd,uhd){djd("sprite_add_from_surface() (WebGL)");return -1;}function szh(utc){
var pbe=obe.mvc(utc);if(pbe){var ksg,egh,gai,hai,iai,jai,qvc,rvc,svc,tvc;var ube=~~((tid*255.0)<<24)|(0xff0000&0xffffff);var vbe=~~((tid*255.0)<<24)|(0x00ff00&0xffffff);var ay=6*(pbe.ebe*pbe.dbe);ksg=rag.kxh(qwh,null,wwh,ay);kai=ksg.cxh<<1;gai=ksg.cxh;ksg.cxh+=ay;hai=ksg.zwh;iai=ksg.bxh;for(var y=0;y<pbe.ebe;y++){for(var x=0;x<pbe.dbe;x++){var brd=vbe;if(pbe.hbe[y+pbe.dbe*x]<0)brd=ube;qvc=~~(pbe.bbe+x*pbe.fbe);rvc=~~(pbe.cbe+y*pbe.gbe);svc=qvc+pbe.fbe;tvc=rvc+pbe.gbe;hai[kai+10]=hai[kai+8]=hai[kai+0]=qvc;
hai[kai+11]=hai[kai+3]=hai[kai+1]=rvc;hai[kai+6]=hai[kai+4]=hai[kai+2]=svc;hai[kai+9]=hai[kai+7]=hai[kai+5]=tvc;iai[gai]=iai[gai+1]=iai[gai+2]=iai[gai+3]=iai[gai+4]=iai[gai+5]=brd;kai+=12;gai+=6;}}return;}hbc("Error: invalid mp_grid ID (mp_grid_draw)");}function tzh(utc,gge,hge,ege){var mce=nce.Paths[utc];if(!mce)return;var ksg,egh,gai,hai,iai,jai;var brd=~~((tid*255.0)<<24)|(sod&0xffffff);var qud,rud,ige;var jge=0;var kge=mce.upb(0);if(!ege){gge=gge-kge.x;hge=hge-kge.y;}else {gge=0;hge=0;}jge=zyc(mce.length/4.0);
if(jge==0)return;var ay=jge*2;ksg=rag.kxh(twh,null,wwh,ay);kai=ksg.cxh<<1;gai=ksg.cxh;ksg.cxh+=ay;hai=ksg.zwh;iai=ksg.bxh;jai=ksg.axh;for(var i=0;i<jge;i++){kge=mce.upb(i/jge);qvc=~~(gge+kge.x);rvc=~~(hge+kge.y);kge=mce.upb((i+1)/jge);svc=~~(gge+kge.x);tvc=~~(hge+kge.y);iai[gai]=iai[gai+1]=brd;hai[kai+0]=qvc;hai[kai+1]=rvc;hai[kai+2]=svc;hai[kai+3]=tvc;kai+=4;gai+=2;}}var qbi=0;var rbi=100;var jtc=null;var sbi,tbi,ubi,vbi,wbi,xbi,ybi;var ybc=null;var vqe=null;var zbi=0;var aci=0;var bci=0;var cci=0;var dci=0;
var zld=0;var eci=0;var ief=60;var fci;window.onload=gci;window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(yx,jmd){fci=window.setTimeout(yx,1000/60);};})();function hci(){var c=document.getElementById(hoe);var y=document.createElement('textarea');y.setAttribute("id","debug_console");y.setAttribute("cols","100");y.setAttribute("rows","20");y.style.display="none";
var pg=c.parentNode;pg.insertBefore(y,c.nextSibling);ute=0x71562;}function ate(bvg,avg){avg.left=0;avg.top=0;yxc=bvg;if(yxc.offsetParent){while(yxc!=null){avg.left+=yxc.offsetLeft;avg.top+=yxc.offsetTop;yxc=yxc.offsetParent;}}avg.qwd=avg.left+esd;avg.bottom=avg.top+fsd;}function ici(hhd){oag=[];bsd=[];csd=[];asd=0;var hwe=hhd.search;var wig=hhd.protocol+"//"+hhd.host+hhd.pathname;bsd[0]=wig;csd[0]=null;if(hwe[0]=="?")hwe=hwe.substring(1,hwe.length);var index=flg=0;var acd="";var bcd=null;while(index<hwe.length){
var c=hwe[index];if(c=="&"){if(acd!=""){if(flg!=index)bcd=hwe.substring(flg,index);bsd[bsd.length]=acd;csd[csd.length]=bcd;oag[acd]=bcd;asd++;acd="";bcd=null;}flg=index+1;}else if(c=="="){acd=hwe.substring(flg,index);bcd=null;flg=index+1;}index++;}if(acd!=""){if(flg!=index)bcd=hwe.substring(flg,index);bsd[bsd.length]=acd;csd[csd.length]=bcd;oag[acd]=bcd;asd++;acd=bcd="";}}function ose(){sbi=jtc.style.position;tbi=jtc.style.left;ubi=jtc.style.top;vbi=jtc.style;wbi=jtc.parentNode;xbi=jtc.nextSibling;
ybi=false;if(wbi==document.body){ybi=true;}}function gci(){if(!document.getElementById||!document.createElement)return;jtc=document.getElementById(hoe);ybc=null;if(!jtc)return;ici(window.location);gag=JSON_game;fbg=false;gre=null;if((gag.Options.WebGL)&&(gag.Options.WebGL!=0)){var jci=byh(jtc);if(jci){ybc=gre;}else {if(gag.Options.WebGL==1){fbg=true;}ybc=jtc.getContext('2d');}}else {ybc=jtc.getContext('2d');}vqe=ybc;kci=gre;hci();ose();joe(ybc);document.body.oncontextmenu=function(){return false;};yse=jtc.width;
zse=jtc.height;esd=yse;fsd=zse;bte=new ooe();ate(jtc,bte);cte=bte.top;dte=bte.left;ete=bte.qwd;fte=bte.bottom;puc();ndg=document.getElementById('GM4HTML5_loadingscreen');if(gag.Options&&gag.Options.debugMode){hmd=true;odh(document.getElementById('debug_console'));}if(gre)hzc("WebGL Enabled!");odg();cve();if(fbg){zbi=-2;}else {if(hmd)g_pBuiltIn.debug_mode=gag.Options.debugMode;cfg="";if(gag.Options){if(gag.Options.loadingBarCallback){cfg=gag.Options.loadingBarCallback;}}if(cfg!=""){afg(gag);zbi=-1;
}else {bfg(gag);zbi=0;}}requestAnimFrame(lci);}function lci(){requestAnimFrame(lci);switch(zbi){case -2:{mci(ybc,esd,fsd);break;}case -1:if(kdg==ldg){bfg(gag);zbi=0;cfg(ybc,esd,fsd,idg,jdg,ndg);}break;case 0:if(jdg>=idg){jdg=idg;zbi=1;}efg();cfg(ybc,esd,fsd,idg,jdg,ndg);break;case 1:qfg(gag);zbi=2;break;case 2:nci();zbi=3;break;case 3:oci();break;}}function pci(x,y,colour,gmd){ybc.fillStyle=colour;ybc.lineStyle=colour;ybc.font="14px Verdana";;ybc.textAlign="center";ybc.fillText(gmd,x,y);ybc.textAlign="left";
}function mci(vug,yid,zid){ybc.fillStyle=hid(0x151515,1.0);ybc.fillRect(0,0,yid,zid);pci(yid/2,(zid/2),hid(0x8d8f90,1.0),"WebGL is Required to run this application.");}function dfg(ybc,yid,zid,qci,rci,sci){if(gre)return;if(sci){draw_clear_alpha(0,0);ybc.drawImage(ndg,0,0,yid,zid);}else {var tci=(yid/100)*50;var uci=2;var x=(yid-tci)/2;var y=10+(zid-uci)/2;ybc.fillStyle=hid(0x151515,1.0);ybc.fillRect(0,0,yid,zid);if(rci!=0){var w=(tci/qci)*rci;ybc.fillStyle=hid(0x404040,1.0);ybc.fillRect(x,y,tci,uci);ybc.fillStyle=hid(0x8d8f90,
1.0);ybc.fillRect(x,y,w,uci);}pci(yid/2,(zid/2),hid(0x8d8f90,1.0),"Loading");}}function vci(hsh){dcd.oyb();var rig=hsh.dle.backgrounds;for(var i=0;i<rig.length;i++){dcd.xnb(rig[i]);var rhd=dcd.mvc(i);array_set_1D(global,"__background_visible__",i,rhd.visible);array_set_1D(global,"__background_foreground__",i,rhd.foreground);array_set_1D(global,"__background_index__",i,rhd.index);array_set_1D(global,"__background_x__",i,rhd.x);array_set_1D(global,"__background_y__",i,rhd.y);array_set_1D(global,"__background_width__",
i,rhd.width);array_set_1D(global,"__background_height__",i,rhd.height);array_set_1D(global,"__background_htiled__",i,rhd.mig);array_set_1D(global,"__background_vtiled__",i,rhd.nig);array_set_1D(global,"__background_xscale__",i,rhd.rme);array_set_1D(global,"__background_yscale__",i,rhd.sme);array_set_1D(global,"__background_vspeed__",i,rhd.pig);array_set_1D(global,"__background_hspeed__",i,rhd.oig);array_set_1D(global,"__background_blend__",i,rhd.yre);array_set_1D(global,"__background_alpha__",i,
rhd.ndb);}g_pBuiltIn.background_color=hsh.vng;}function wci(aqd,xci){var yci=wzc;dbd.yzc(qkf,0);var persistent=[];if(yci!=null){var i;for(i=yci.mwd.length-1;i>=0;i--){var ewd=yci.mwd.mvc(i);if(ewd.persistent===true){persistent[persistent.length]=ewd;ewd.zci=true;}}for(i=persistent.length-1;i>=0;i--){yci.mwd.zxc(persistent[i]);}if(yci.gle===false){yci.grh();}}wme=-1;guc.oyb();snh();wzc=zke.mvc(aqd);var adi=wzc.gle;if(adi===true&&wzc.nqh===false){adi=false;}if(adi===false){wzc.wfg(wzc.dle);wzc.mrh();}g_pBuiltIn.room=wzc.id;
wzc.krh();bdi();vci(wzc);if(adi===false){wzc.grh();with(wzc){wzc.grh();mwd=new txc();var cdi=dle.pInstances;for(var hfb=0;hfb<dle.pInstances.length;hfb++){var hpb=false;var ddi=dle.pInstances[hfb];for(var omb=persistent.length-1;omb>=0;omb--){if(ddi.id==persistent[omb].id){hpb=true;break;}}if(!hpb){var xce=wzc.mah(ddi.x,ddi.y,ddi.id,ddi.index);if(ddi.scaleX!=undefined)xce.image_xscale=ddi.scaleX;if(ddi.scaleY!=undefined)xce.image_yscale=ddi.scaleY;if(ddi.colour!=undefined)xce.image_blend=ddi.colour;xce.zci=false;
}}var cdi=dle.pInstances;for(var hfb=0;hfb<dle.pInstances.length;hfb++){var ddi=dle.pInstances[hfb];var xce=dbd.mvc(ddi.id);if(xce.zci==false){xce.zci=true;if(!gbg){if(ddi.pCode)ddi.pCode(xce);xce.yzc(zzc,0,xce,xce);}else {xce.yzc(zzc,0,xce,xce);if(ddi.pCode)ddi.pCode(xce);}}}}}for(var omb=0;omb<persistent.length;omb++){wzc.mwd.xnb(persistent[omb]);}if(xci){dbd.yzc(kkf,0);}if((adi==false)&&(wzc.hle!=null)){edi=new lcg();wzc.hle(edi);edi=null;}dbd.yzc(okf,0);wzc.nqh=true;}function fdi(gdi){wci(gdi,false);
}function nci(){g_pBuiltIn.score=0;g_pBuiltIn.lives=-1;wqd=0;ibg=-1;jbg=0;kbg=0;wci(zke.xme(0).id,true);aci=bci=YoYo_GetTimer();dci=~~(aci/1000000)+4;g_pBuiltIn.fps=ief;}function hdi(){lag=[];mag=[];pfe=-1;ofe=-1;idf=0;wzc.mwd.oyb();wzc.gxd.oyb();var pfc=ypd.vhh;for(var i in pfc){var dwd=pfc[i];dwd.vgf.oyb();dwd.zpd.oyb();}dbd.oyb();}function idi(){guc.rgh();}function jdi(){if(wzc.mwd.aih>=0)wzc.mwd.bxc();if(wzc.iah.length>0)wzc.fsh();}function kdi(){if(wzc.hhe){wzc.hhe.qvb(wzc.mqh);}else {dbd.pch();}}function ldi(){
if((wzc.hhe==null)||(wzc.hhe==undefined)){mff();}}function mdi(){guc.teh();dbd.och();pag.kng(uzf);dbd.yzc(dif,0);jdi();if(wme!=-1)return;sjd.kng();jdi();if(wme!=-1)return;chf();jdi();if(wme!=-1)return;ihf();jdi();if(wme!=-1)return;ogh();jdi();if(wme!=-1)return;zff();jdi();if(wme!=-1)return;pag.kng(vzf);dbd.yzc(fif,0);jdi();if(wme!=-1)return;kdi();gff();jdi();if(wme!=-1)return;ldi();jdi();if(wme!=-1)return;pag.kng(wzf);dbd.yzc(hif,0);jdi();if(wme!=-1)return;koh();if(wzc!=null){wzc.dsh();wzc.fcc();
jdi();}wzc.orh();dbd.qch();jdi();idi();}function bdi(){var left,qwd,top,bottom;left=0;qwd=-999999;top=0;bottom=-999999;with(wzc){if(pte){for(i in bme){ame=bme[i];if(ame.visible&&ame.cgf==-1){if(qwd<ame.gme+ame.ime)qwd=ame.gme+ame.ime;if(bottom<ame.hme+ame.jme)bottom=ame.hme+ame.jme;}}}else {left=0;qwd=wzc.cle;top=0;bottom=wzc.ele;}}ite=esd;jte=fsd;kug=esd/(qwd-left);lte=fsd/(bottom-top);iag.ime=ite/kug;iag.jme=jte/lte;iag.eme=ite/kug;iag.fme=jte/lte;var lq=new ooe();lq.left=left;lq.top=top;lq.qwd=qwd;lq.bottom=bottom;
lqe=lq;}function nte(){var w=640;if(typeof(window.innerWidth)=='number'){w=window.innerWidth;}else if(document.documentElement&&document.documentElement.clientWidth){w=document.documentElement.clientWidth;}else if(document.body&&document.body.clientWidth){w=document.body.clientWidth;}return w;}function ote(){var h=480;if(typeof(window.innerHeight)=='number'){h=window.innerHeight;}else if(document.documentElement&&document.documentElement.clientHeight){h=document.documentElement.clientHeight;}else if(document.body&&document.body.clientHeight){
h=document.body.clientHeight;}return h;}function ndi(){ate(jtc,bte);cte=bte.top;dte=bte.left;ete=bte.qwd;fte=bte.bottom;if(!JSON_game.interpolatePixels){ybc.mozImageSmoothingEnabled=false;}var w=nte();var h=ote();if((mse)&&(!nse)){if((gte!=w)||(hte!=h)){nse=true;mse=false;}}if(nse){nse=false;if(mse){w=yse;h=zse;mse=false;jtc.style.position=sbi;jtc.style.left=tbi;jtc.style.top=ubi;jtc.style=vbi;if(!ybi){if(jtc.parentNode!=wbi){wbi.insertBefore(jtc,xbi);}}}else {mse=true;window_set_position(0,0);if(!ybi){
if(jtc.parentNode==wbi){wbi.removeChild(jtc);document.body.insertBefore(jtc,null);}}}jtc.width=w;jtc.height=h;esd=jtc.width;fsd=jtc.height;dte=jtc.offsetLeft;ete=dte+esd;cte=jtc.offsetTop;fte=dte+fsd;gte=esd;hte=fsd;ite=w;jte=hkug=1;lte=1;bdi();}}var odi=0;var pdi=0.0;function oci(){bci=YoYo_GetTimer();if(bci<aci||((bci-aci)>2000000)){aci=bci;dci=aci;}if(wzc.ghe()<=0){wzc.iqg(1);}zld=~~(bci-aci);pdi=~~(1000000.0/wzc.ghe())-zld;cci=max(0,pdi);cci=min(cci,1000000.0);var qdi=1000000.0/wzc.ghe();if(cci>14000)return;
aci=bci+cci;if(aci<dci){dci=aci;}if(~~aci>(dci+1000000)){ief=eci;eci=0;dci=~~aci;aci=0;}eci++;g_pBuiltIn.fps=ief;if(!bbg){tbh=0;ndi();if(wzc===null){iag.sqe=iag.qqe=iag.ime=iag.eme=esd;iag.tqe=iag.rqe=iag.jme=iag.fme=fsd;}else {bdi();}if(wme==-1)qvg();{mdi();}if(odi<tbh)odi=tbh;if(wme<0)svg();switch(wme){case -1:break;;case zme:case vnf:rdi=false;return;case ane:hdi();nci();break;case unf:qfg();break;default :fdi(wme);}}}