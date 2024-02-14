'use strict';

const UserWantPlay = confirm('Сыгрыем в игру "Больше Меньше"?')
if (UserWantPlay == true){
    const NumForGame = prompt("дайте Другому чедловеку загадать число от 0 до 50!", "")
    if (NumForGame > 50) {
        alert("Не загадывайте число, которе больше 50!")
    }else if (NumForGame <= 50){
        if (UserWantPlay == true) {
            let numUser = prompt("Попробуте угадать загаданное число, у вас 3 попытки", "")
            if (numUser < NumForGame) {
                let choose = confirm("Больше, хотите продолжить?")
                if (choose == true) {
                    let numUser = prompt("Я верю в вас, но осталось 2 попытки", "")
                    if (numUser > NumForGame) {
                        let choose = confirm("Меньше, хотите продолжить?")
                        if (choose == true) {
                            let numUser = prompt("Я до сих пор верю в вас, но осталось 1 попытка", "")
                            if (numUser > NumForGame) {
                                let choose = confirm("Меньше, хотите продолжить?")
                                if (choose == true) {
                                    let numUser = prompt("Я до сих пор верю в вас, но осталось 0 попыток", "")
                                    if (numUser > NumForGame) {
                                        confirm(`К сожалению вы не угадали, вам загадали ${NumForGame}`)
                                    } else if (numUser < NumForGame) {
                                        confirm(`К сожалению вы не угадали, вам загадали ${NumForGame}`)
                                    } else if (numUser == NumForGame) { alert("Молодец, вы угадали") }
                                } else if (choose == false) {
                                    alert("Спасибо, что вы поучаствовали")
                                } else if (numUser == NumForGame) { alert("Молодец, вы угадали") }
                            } else if (numUser < NumForGame) {
                                let choose = confirm("Больше, хотите продолжить?")
                                if (choose == true) {
                                    let numUser = prompt("Я до сих пор верю в вас, но осталось 0 попыток", "")
                                    if (numUser > NumForGame) {
                                        confirm(`К сожалению вы не угадали, вам загадали ${NumForGame}`)
                                    } else if (numUser < NumForGame) {
                                        confirm(`К сожалению вы не угадали, вам загадали ${NumForGame}`)
                                    } else if (numUser == NumForGame) { alert("Молодец, вы угадали") }
                                } else if (choose == false) {
                                    alert("Спасибо, что вы поучаствовали")
                                } else if (numUser == NumForGame) { alert("Молодец, вы угадали") }
                            } else if (numUser == NumForGame) { "Молодец, вы угадали!" }
                        } else if (choose == false) {
                            alert("Ну значит в следующий раз, спасибо за участие")
                        } else if (numUser == NumForGame) { alert("Молодец, вы угадал") }
        
                    } else if (numUser < NumForGame) {
                        let choose = confirm("Больше, хотите продолжить?")
                        if (choose == true) {
                            let numUser = prompt("Я до сих пор верю в вас, но осталось 1 попытка", "")
                            if (numUser > NumForGame) {
                                let choose = confirm("Меньше, хотите продолжить?")
                                if (choose == true) {
                                    let numUser = prompt("Я до сих пор верю в вас, но осталось 0 попыток", "")
        
                                } else if (choose == false) { alert("Спасибо, что вы поучаствовали") }
                            } else if (numUser < NumForGame) {
                                let choose = confirm("Больше, хотите продолжить?")
                                if (choose == true) {
                                    let numUser = prompt("Я до сих пор верю в вас, но осталось 0 попыток", "")
        
                                } else if (choose == false) { alert("Спасибо, что вы поучаствовали") }
                            }
                        } else if (choose == false) {
                            alert("Ну значит в следующий раз")
                        } else if (numUser == NumForGame) { "Молодец, вы угадали!🎉🎉" }
                    } else if (numUser == NumForGame) {
                        alert("Молодец, вы угадали!🎉🎉")
                    }
                } else if (choose == false) { alert("Спасибо за участие") }
            } else if (numUser > NumForGame) {
                let choose = confirm("Меньше, хотите продолжить?")
                if (choose == true) {
                    let numUser = prompt("Я верю в вас, но осталось 2 попытки", "")
                    if (numUser > NumForGame) {
                        let choose = confirm("Меньше, хотите продолжить?")
                        if (choose == true) {
                            let numUser = prompt("Я верю в вас, но осталось 1 попытка", "")
                            if (numUser > NumForGame) {
                                let choose = confirm("Меньше, хотите продолжить?")
                                if (choose == true) {
                                    let numUser = prompt("Я верю в вас, но осталось 0 попыток", "")
                                    if (numUser > NumForGame) {
                                        confirm(`К сожалению вы не угадали, вам загадали ${NumForGame}`)
                                    } else if (numUser < NumForGame) {
                                        aconfirmlert(`К сожалению вы не угадали, вам загадали ${NumForGame}`)
                                    } else if (numUser == NumForGame) {
                                        alert("Молодец, вы угадали!🎉🎉")
                                    }
                                } else if (choose != true) {
                                    alert("спасибо, что поучаствовали ")
                                } else if (numUser == NumForGame) {
                                    alert("Молодец, вы угадали!🎉🎉")
                                }
                            } else if (numUser < NumForGame) {
                                let choose = confirm("Больше, хотите продолжить?")
                            } else if (numUser == NumForGame) {
                                alert("Молодец, вы угадали!🎉🎉")
                            }
                        } else if (choose == false) {
                            alert("Ну значит в следующий раз")
                        } else if (numUser == NumForGame) {
                            alert("Молодец, вы угадали!🎉🎉")
                        }
                    } else if (numUser < NumForGame) {
                        let choose = confirm("Больше, хотите продолжить?")
                        if (choose == true) {
                            let numUser = prompt("Я верю в вас, но осталось 1 попытка", "")
                            if (numUser > NumForGame) {
                                let choose = confirm("Меньше, хотите продолжить?")
                                if (choose == true) {
                                    let numUser = prompt("Я верю в вас, но осталось 0 попыток", "")
                                    if (numUser > NumForGame){
                                        confirm(`К сожалению вы не угадали, вам загадали ${NumForGame}`)
                                    }else if (numUser < NumForGame){
                                        confirm(`К сожалению вы не угадали, вам загадали ${NumForGame}`)
                                    } else if (numUser == NumForGame){
                                        alert("Молодец, вы угадали!🎉🎉")
                                    }
                                } else if (choose != true) {
                                    alert("Спасибо за участие")
                                } else if (numUser == NumForGame) {
                                    alert("Молодец, вы угадали!🎉🎉")
                                }
                            } else if (numUser < NumForGame) {
                                let choose = confirm("Больше, хотите продолжить?")
                                if (choose == true) {
                                    let numUser = prompt("Я верю в вас, но осталось 0 попыток", "")
                                    if (numUser > NumForGame){
                                        confirm(`К сожалению вы не угадали, вам загадали ${NumForGame}`)
                                    }else if (numUser < NumForGame){
                                        confirm(`К сожалению вы не угадали, вам загадали ${NumForGame}`)
                                    } else if (numUser == NumForGame){
                                        alert("Молодец, вы угадали!🎉🎉")
                                    }
                                } else if (choose != true) {
                                    alert("Спасибо за участие")
                                } else if (numUser == NumForGame) {
                                    alert("Молодец, вы угадали!🎉🎉")
                                }
                            } else if (numUser == NumForGame) {
                                alert("Молодец, вы угадали!🎉🎉")
                            }
                        } else if (choose == false) {
                            alert("Ну значит в следующий раз")
                        } else if (numUser == NumForGame) {
                            alert("Молодец, вы угадали!🎉🎉")
                        }
                    } else if (numUser == NumForGame) {
                        alert("Молодец, вы угадали!🎉🎉")
                    }
                } else if (choose != true) {
                    alert("Спасибо, что поучавствовали")
                } else if (numUser == NumForGame) {
                    alert("Молодец, вы угадали!🎉🎉")
                }
        
                if (choose == false) { alert("Ну значит в следующий раз") }
            } else if (numUser == NumForGame) {
                alert("Молодец вы угадали!🎉🎉")
            }
        } else {
            alert("Ну ладно до встречи")
        }
        
    }
    
    
}else if (UserWantPlay != true){alert("Ну ладно, до свидания")}

