@file:Suppress("CanBeVal")

//FindCommonGematria
/*
0 hechrachi_num,
1 gadol_num,
2 siduri_num,
3 katan_num,
4 perati_num,
5 shemi_num,
6 musafi_num,
7 atbash_num,
8 albam_num,
9 boneeh_num,
10 kidmi_num,
11 neelam_num,
12 meshulash_num,
13 haakhor_num,
14 mispari_num,
15 achbi_num,
16 atbach_num,
17 ayakbakar_num,
18 ofanim_num,
19 achasbeta_num,
20 avgad_num,
21 reverseavgad_num
*/
fun main() {
    var word1 = "ABC"
    var word2 = "DEF"
    var listOfGematrias1: Array<Int> = calcGematria(word1)
    var listOfGematrias2: Array<Int> = calcGematria(word2)

    var typeOfGematriaRepresentedAsIndexInListOfMainGematriaBeingCalculated = 5/*randomly chosen gematria type for the sake of example: Mispar Shemi*/
    var valueOfGematria = -1 //value common to both lists, -1 = not found
    var etc1 = 0
    var etc2 = 0
    var commonGematriasWithRespectToFirstWord: Map<Int, Int> = mapOf(typeOfGematriaRepresentedAsIndexInListOfMainGematriaBeingCalculated to valueOfGematria, etc1 to etc2)
    var commonGematriasWithRespectToSecondWord: Map<Int, Int> = mapOf(typeOfGematriaRepresentedAsIndexInListOfMainGematriaBeingCalculated to valueOfGematria, etc1 to etc2)
    var mapOfIndexesToGematriaNames: Map<Int, String> = mapOf(
            0 to "Mispar Hechrachi",
            1 to "Mispar Gadol",
            2 to "Mispar Siduri",
            3 to "Mispar Katan",
            4 to "Mispar Perati",
            5 to "Mispar Shemi",
            6 to "Mispar Musafi",
            7 to "Atbash",
            8 to "Albam",
            9 to "Mispar Boneeh",
            10 to "Mispar Kidmi",
            11 to "Mispar Neelam",
            12 to "Mispar Meshulash",
            13 to "Mispar Haakhor",
            14 to "Mispar Mispari",
            15 to "Achbi",
            16 to "Atbach",
            17 to "Ayakbakar",
            18 to "Ofanim",
            19 to "Achasbeta",
            20 to "Avgad",
            21 to "Reverse Avgad")
    for (gematria1 in listOfGematrias1) {
        for (gematria2 in listOfGematrias2) {
            if (gematria1 == gematria2) {
                commonGematriasWithRespectToFirstWord+=(listOfGematrias1.indexOf(gematria1) to gematria1)
                commonGematriasWithRespectToSecondWord+=(listOfGematrias2.indexOf(gematria2) to gematria2)
            }
        }
    }
    var numberOfCommonValues = commonGematriasWithRespectToFirstWord.size //would equally work if queried with respect to list of second word, just chose first artbitrarily
//    for(i in 1..numberOfCommonValues){
//        println("The "+mapOfIndexesToNames[i] )
//    }
//    for(i in numberOfCommonValues){
//
//    }
    commonGematriasWithRespectToFirstWord.forEach {entry->
        println("The " + mapOfIndexesToGematriaNames[entry.key] + " of " + word1 + " (" + mapOfIndexesToGematriaNames[entry.key] + ")" + " = " + "the "+entry.value)//e.g. "The Mispar Musafi of אחד (41) =

    }
}

fun calcGematria(word: String): Array<Int> {
//TODO call gematria4Js.calcGematria(word)
    //dummy data:
    return if (word == "ABC") arrayOf(4, 5, 7, 9)
    else arrayOf(19, 23, 9, 57)
}

//@JsName("findCommonGematriaBetween")
//fun findCommonGematria(word1:String,word2:String,hechrachi_num,gadol_num,siduri_num,katan_num,perati_num,shemi_num,musafi_num,atbash_num,albam_num,boneeh_num,kidmi_num,neelam_num,meshulash_num,haakhor_num,mispari_num,achbi_num,atbach_num,ayakbakar_num,ofanim_num,achasbeta_num,avgad_num,reverseavgad_num) {

//}