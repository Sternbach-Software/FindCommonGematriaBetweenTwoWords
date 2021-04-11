    //
// Gematria Calculator
// by Jonah Eliyahu Lawrence, TorahCalc.com
// (c) 2015-2019 TorahCalc.com, All Rights Reserved.
//

var Gematria_Values = [
/* hechrachi */[1,2,3,4,5,6,7,8,9,10,20,20,30,40,40,50,50,60,70,80,80,90,90,100,200,300,400], 
/* gadol */[1,2,3,4,5,6,7,8,9,10,500,20,30,600,40,700,50,60,70,800,80,900,90,100,200,300,400], 
/* siduri */[1,2,3,4,5,6,7,8,9,10,23,11,12,24,13,25,14,15,16,26,17,27,18,19,20,21,22], 
/* katan */[1,2,3,4,5,6,7,8,9,1,2,2,3,4,4,5,5,6,7,8,8,9,9,1,2,3,4], 
/* perati */[1,4,9,16,25,36,49,64,81,100,400,400,900,1600,1600,2500,2500,3600,4900,6400,6400,8100,8100,10000,40000,90000,160000], 
/* shemi (not used) */[111,412,83,434,6,12,67,418,419,20,100,100,74,80,80,106,106,120,130,81,81,104,104,186,510,350,406], 
/* atbash */[400,300,200,100,90,80,70,60,50,40,30,30,20,10,10,9,9,8,7,6,6,5,5,4,3,2,1], 
/* albam */[30,40,50,60,70,80,90,100,200,300,400,400,1,2,2,3,3,4,5,6,6,7,7,8,9,10,20],
/* kidmi */[1,3,6,10,15,21,28,36,45,55,75,75,105,145,145,195,195,255,325,405,405,495,495,595,795,1095,1495], 
/* meshulash */[1,8,27,64,125,216,343,512,729,1000,8000,8000,27000,64000,64000,125000,125000,216000,343000,512000,512000,729000,729000,1000000,8000000,27000000,64000000], 
/* mispari */[13,760,636,273,348,600,372,401,770,570,620,620,686,323,323,408,408,660,422,446,446,820,820,46,501,1083,720],
/* achbi */[20,10,9,8,7,6,5,4,3,2,1,1,400,300,300,200,200,100,90,80,80,70,70,60,50,40,30],
/* atbach */[9,8,7,6,5,4,3,2,1,90,500,80,70,400,60,300,50,40,30,200,20,100,10,900,800,700,600], 
/* ayakbakar */[10,20,30,40,50,60,70,80,90,100,5,200,300,6,400,7,500,600,700,8,800,9,900,1,2,3,4], 
/* ofanim */[80,400,30,400,1,6,50,400,400,4,80,80,4,40,40,50,50,20,50,1,1,10,10,80,300,50,6], 
/* achasbeta */[8,9,10,20,30,40,50,60,70,80,90,90,100,200,200,300,300,1,2,3,3,4,4,5,6,7,400],
/* avgad */[2,3,4,5,6,7,8,9,10,20,30,30,40,50,50,60,60,70,80,90,90,100,100,200,300,400,1],
/* reverse avgad */[400,1,2,3,4,5,6,7,8,9,10,10,20,30,30,40,40,50,60,70,70,80,80,90,100,200,300],
];

function calcGematria() {
	var word = document.getElementById("word").value.trim();
	if (word.length == 0) {numOfWords = 0;}
	else {
		// replace vbar/paseq, hyphen/maqaf with space
		tempword = word.replace(/[\u05C0]|[\u007C]|[\u05BE]|[\u002D]/g, " ");
		// remove basic ascii (inc. '{' and '}')
		tempword = tempword.replace(/[\u0000-\u0100]+/g, " ");
		// replace multiple spaces with single and remove spaces on ends
		tempword = tempword.replace(/ +/g, " ").trim();
		// find number of words separated by spaces
		numOfWords = tempword.split(' ').length;
	}
	var word1 = [];
	var i;
	for (i = 0; i < word.length; i++) {
		word1.push(word.substr(i,1))
	}
	word = word1.join(' ');
	while (/[\u0000-\u05CF]|[\u05EB-\uFFFF]/.test(word)) {
	word = word.replace(/[\u05F0]/, "יב");
	word = word.replace(/[\u05F1]/, "טז");
	word = word.replace(/[\u05F2]|[\uFB1F]/, "כ");
	word = word.replace(/[\uFB2E-\uFB30]|[\uFB4F]|[\uFB21]/, "א");
	word = word.replace(/[\uFB31]|[\uFB4C]/, "ב");
	word = word.replace(/[\uFB32]/, "ג");
	word = word.replace(/[\uFB33]|[\uFB22]/, "ד");
	word = word.replace(/[\uFB34]|[\uFB23]/, "ה");
	word = word.replace(/[\uFB4B]/, "ו");
	word = word.replace(/[\uFB35]/, "ו");
	word = word.replace(/[\uFB36]/, "ז");
	word = word.replace(/[\uFB38]/, "ט");
	word = word.replace(/[\uFB39]|[\uFB1D]/, "י");
	word = word.replace(/[\uFB3A]/, "ך");
	word = word.replace(/[\uFB3B]|[\uFB4D]|[\uFB24]/, "כ");
	word = word.replace(/[\uFB3C]|[\uFB25]/, "ל");
	word = word.replace(/[\uFB26]/, "ם");
	word = word.replace(/[\uFB3E]/, "מ");
	word = word.replace(/[\uFB40]|[\u05C6]/, "נ");
	word = word.replace(/[\uFB41]/, "ס");
	word = word.replace(/[\uFB42]|[\uFB20]/, "ע");
	word = word.replace(/[\uFB43]/, "ף");
	word = word.replace(/[\uFB44]|[\uFB4E]/, "פ");
	word = word.replace(/[\uFB46]/, "צ");
	word = word.replace(/[\uFB47]/, "ק");
	word = word.replace(/[\uFB48]|[\uFB27]/, "ר");
	word = word.replace(/[\uFB49]|[\uFB2A-\uFB2D]/, "ש");
	word = word.replace(/[\uFB4A]|[\uFB28]/, "ת");
	word = word.replace(/[\u0000-\u05CF]|[\u05EB-\uFFFF]/, "");
	}
	var i = 0;
	var hechrachi_num = 0;
	var gadol_num = 0;
	var siduri_num = 0;
	var katan_num = 0;
	var perati_num = 0;
	var shemi_num = 0;
	var musafi_num = 0;
	var atbash_num = 0;
	var albam_num = 0;
	var boneeh_num = 0;
	var kidmi_num = 0;
	var neelam_num = 0;
	var meshulash_num = 0;
	var haakhor_num = 0;
	var mispari_num = 0;
	var achbi_num = 0;
	var atbach_num = 0;
	var ayakbakar_num = 0;
	var ofanim_num = 0;
	var achasbeta_num = 0;
	var avgad_num = 0;
	var reverseavgad_num = 0;
	Gematria_Values[5] = getMiluiValues();
	for (i = 0; i < word.length; i++) {
		letter = word.charCodeAt(i)-1488;
		hechrachi_num += Gematria_Values[0][letter];
		gadol_num += Gematria_Values[1][letter];
		siduri_num += Gematria_Values[2][letter];
		katan_num += Gematria_Values[3][letter];
		perati_num += Gematria_Values[4][letter];
		shemi_num += Gematria_Values[5][letter];
		musafi_num += Gematria_Values[0][letter]+1;
		atbash_num += Gematria_Values[6][letter];
		albam_num += Gematria_Values[7][letter];
		boneeh_num += Gematria_Values[0][letter]*(word.length-i);
		kidmi_num += Gematria_Values[8][letter];
		neelam_num += Gematria_Values[5][letter]-Gematria_Values[0][letter];
		meshulash_num += Gematria_Values[9][letter];
		haakhor_num += Gematria_Values[0][letter]*(i+1);
		mispari_num += Gematria_Values[10][letter];
		achbi_num += Gematria_Values[11][letter];
		atbach_num += Gematria_Values[12][letter];
		ayakbakar_num += Gematria_Values[13][letter];
		ofanim_num += Gematria_Values[14][letter];
		achasbeta_num += Gematria_Values[15][letter];
		avgad_num += Gematria_Values[16][letter];
		reverseavgad_num += Gematria_Values[17][letter];
	}
	//findCommonGematriaBetween(word1,word2,hechrachi_num,gadol_num,siduri_num,katan_num,perati_num,shemi_num,musafi_num,atbash_num,albam_num,boneeh_num,kidmi_num,neelam_num,meshulash_num,haakhor_num,mispari_num,achbi_num,atbach_num,ayakbakar_num,ofanim_num,achasbeta_num,avgad_num,reverseavgad_num);
	document.getElementById("hechrachi_value").value = hechrachi_num;
	document.getElementById("gadol_value").value = gadol_num;
	document.getElementById("siduri_value").value = siduri_num;
	document.getElementById("katan_value").value = katan_num;
	document.getElementById("perati_value").value = perati_num;
	document.getElementById("shemi_value").value = shemi_num;
	document.getElementById("musafi_value").value = musafi_num;
	document.getElementById("atbash_value").value = atbash_num;
	document.getElementById("albam_value").value = albam_num;
	document.getElementById("boneeh_value").value = boneeh_num;
	document.getElementById("kidmi_value").value = kidmi_num;
	document.getElementById("neelam_value").value = neelam_num;
	document.getElementById("hamerubahhaklali_value").value = hechrachi_num*hechrachi_num;
	document.getElementById("meshulash_value").value = meshulash_num;
	document.getElementById("haakhor_value").value = haakhor_num;
	document.getElementById("mispari_value").value = mispari_num;
	document.getElementById("katanmispari_value").value = (1 + (hechrachi_num - 1) % 9);
	document.getElementById("kolel_value").value = hechrachi_num + numOfWords;
	document.getElementById("achbi_value").value = achbi_num;
	document.getElementById("atbach_value").value = atbach_num;
	document.getElementById("ayakbakar_value").value = ayakbakar_num;
	document.getElementById("ofanim_value").value = ofanim_num;
	document.getElementById("achasbeta_value").value = achasbeta_num;
	document.getElementById("avgad_value").value = avgad_num;
	document.getElementById("reverseavgad_value").value = reverseavgad_num;
	document.getElementById("main_value").innerHTML = "=&nbsp;" + document.getElementById(document.getElementById("selectMethod").value).value;
}

function addletter(letterToAdd) {
	document.getElementById("word").value += letterToAdd;
	calcGematria();
}

function deleteletter() {
	var word = document.getElementById("word").value;
	document.getElementById("word").value = word.substr(0,word.length-1);
	calcGematria();
}

function clearletters() {
	document.getElementById("word").value = "";
	calcGematria();
}

function getMiluiValues() {
	var vals = [];
    var radios = document.getElementById("miluiOptions").getElementsByTagName("INPUT");
    for (var i=0, len=radios.length; i<len; i++) {
        if (radios[i].checked) {
            vals.push(parseInt(radios[i].value));
            var rbn = radios[i].name;
            if (rbn=="כ"||rbn=="מ"||rbn=="נ"||rbn=="פ"||rbn=="צ") {
    	    	vals.push(parseInt(radios[i].value)); // double if sofit
        	}
        }
    }
    return vals;
}

function toggleMiluiOptions() {
	document.getElementById('miluiOptions').style.display = document.getElementById('miluiOptions').style.display == "block" ? "none" : "block";
	document.getElementById('miluiOptionsToggle').value = document.getElementById('miluiOptionsToggle').value == "Show Shemi/Milui Options" ? "Hide Shemi/Milui Options" : "Show Shemi/Milui Options";
}

/*function charcodes() {
	var word = document.getElementById("word").value;
	var charchodes = ""
	for (i = 0; i < word.length; i++) {
		number = word.charCodeAt(i);
		if (number < 0) {number = 0xFFFFFFFF + number + 1;}
		charchodes += number.toString(16).toUpperCase() + ", ";
	}
	alert(charchodes);
}*/