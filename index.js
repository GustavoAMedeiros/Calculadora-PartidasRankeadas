let nome = "Elendil"
let vit = 253
let der = 253
let res = vit - der
let rank = ""
let rankFinal = ranking(res, rank)

if (vit > der){ 
    console.log(`O campeão ${nome} possui o rank ${rankFinal}. Seu total de vitórias é de ${res}.`)
} else {
    console.log("ERRO: Número de derrotas é maior ou igual ao de vitórias.")
}

function ranking(res, rank){
    switch(true){
        case res <= 10:
            rank = "Ferro"
            break
        case res > 10 && res <= 20:
            rank = "Bronze"
            break
        case res > 20 && res <= 50:
            rank = "Prata"
            break
        case res > 50 && res <= 80:
            rank = "Ouro"
            break
        case res > 80 && res <= 90:
            rank = "Diamante"
            break
        case res > 90 && res <= 100:
            rank = "Lendário"
            break
        case res > 100:
            rank = "Imortal"
            break
    }
    return rank
}
