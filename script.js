$(function () {
    $('.r1').on('click', function () {
        $('.partners_emblems_blocks_one1').css('display', 'block');
        $('.partners_emblems_blocks_one2').css('display', 'none');
        $('.partners_emblems_blocks_one3').css('display', 'none');
        $('.partners_emblems_blocks_one4').css('display', 'none');

        $('.sertCambridge').css('display', 'block');
        $('.sertHarvard').css('display', 'none');
        $('.sertMit').css('display', 'none');
        $('.sertUCLA').css('display', 'none');
    })

    $('.r2').on('click', function () {
        $('.partners_emblems_blocks_one1').css('display', 'none');
        $('.partners_emblems_blocks_one2').css('display', 'block');
        $('.partners_emblems_blocks_one3').css('display', 'none');
        $('.partners_emblems_blocks_one4').css('display', 'none');

        $('.sertCambridge').css('display', 'none');
        $('.sertHarvard').css('display', 'block');
        $('.sertMit').css('display', 'none');
        $('.sertUCLA').css('display', 'none');
    })

    $('.r3').on('click', function () {
        $('.partners_emblems_blocks_one1').css('display', 'none');
        $('.partners_emblems_blocks_one2').css('display', 'none');
        $('.partners_emblems_blocks_one3').css('display', 'block');
        $('.partners_emblems_blocks_one4').css('display', 'none');

        $('.sertCambridge').css('display', 'none');
        $('.sertHarvard').css('display', 'none');
        $('.sertMit').css('display', 'block');
        $('.sertUCLA').css('display', 'none');
    })

    $('.r4').on('click', function () {
        $('.partners_emblems_blocks_one1').css('display', 'none');
        $('.partners_emblems_blocks_one2').css('display', 'none');
        $('.partners_emblems_blocks_one3').css('display', 'none');
        $('.partners_emblems_blocks_one4').css('display', 'block');

        $('.sertCambridge').css('display', 'none');
        $('.sertHarvard').css('display', 'none');
        $('.sertMit').css('display', 'none');
        $('.sertUCLA').css('display', 'block');
    })



    $('.getCAMBRIDGE').on('click', function () {
        $('.getCAMBRIDGE').css('color', '#ba271f');
        $('.getHARVARD').css('color', 'black');
        $('.getMIT').css('color', 'black');
        $('.getUCLA').css('color', 'black');

        $('.sertCambridge').css('display', 'block');
        $('.sertHarvard').css('display', 'none');
        $('.sertMit').css('display', 'none');
        $('.sertUCLA').css('display', 'none');
    })

    $('.getHARVARD').on('click', function () {
        $('.getCAMBRIDGE').css('color', 'black');
        $('.getHARVARD').css('color', '#ba271f');
        $('.getMIT').css('color', 'black');
        $('.getUCLA').css('color', 'black');

        $('.sertCambridge').css('display', 'none');
        $('.sertHarvard').css('display', 'block');
        $('.sertMit').css('display', 'none');
        $('.sertUCLA').css('display', 'none');
    })

    $('.getMIT').on('click', function () {
        $('.getCAMBRIDGE').css('color', 'black');
        $('.getHARVARD').css('color', 'black');
        $('.getMIT').css('color', '#ba271f');
        $('.getUCLA').css('color', 'black');

        $('.sertCambridge').css('display', 'none');
        $('.sertHarvard').css('display', 'none');
        $('.sertMit').css('display', 'block');
        $('.sertUCLA').css('display', 'none');
    })

    $('.getUCLA').on('click', function () {
        $('.getCAMBRIDGE').css('color', 'black');
        $('.getHARVARD').css('color', 'black');
        $('.getMIT').css('color', 'black');
        $('.getUCLA').css('color', '#ba271f');

        $('.sertCambridge').css('display', 'none');
        $('.sertHarvard').css('display', 'none');
        $('.sertMit').css('display', 'none');
        $('.sertUCLA').css('display', 'block');
    })

})


const getS = selector => document.querySelector(selector);
let loginExp = /^[a-zA-Z]{4,16}$/;
let passExp = /^[a-zA-Z0-9 \_\-\.]{4,16}$/;
let emailExp = /^[a-zA-Z0-9 \_\-\.]+@[a-zA-Z]+\.[a-zA-Z]+$/;

$('.heder_form_beginButton').click(function () {
    let testEmail = emailExp.test(getS('.heder_form_email').value);
    let testPass = passExp.test(getS('.heder_form_password').value);
    if (testEmail == false) {
        alert(`Помилка Email. Усі букви повинні бути англійською. Загальні вимоги наступні(будь-яка кількість букв, цифр, тире і крапок, символ '@', будь-яка кількість букв символ '.', будь-яка кількість букв.`)
    }
    else if (testPass == false) {
        alert(`Помилка Password. В паролі можуть бути букви, цифри, символ нижнього підкреслювання(_), тире(-) та символ крапки(.) від 4 до 16 символів`)
    }
    else if (testPass && testEmail) {
        alert(`Ви успішно увійшли.`);
        $('.heder_form').css('display', 'none');
    }
})

$('.form_reg_submit').click(function () {
    let testLogin = loginExp.test(getS('.form_reg_inName').value);
    let testEmail = emailExp.test(getS('.form_reg_inEmail').value);
    if (testLogin == false) {
        alert(`Помилка Name. Логін може бути слово англійською з великої або маленької букви від 4 до 16 символів.`)
    }
    else if (testEmail == false) {
        alert(`Помилка Email. Усі букви повинні бути англійською. Загальні вимоги наступні(будь-яка кількість букв, цифр, тире і крапок, символ '@', будь-яка кількість букв символ '.', будь-яка кількість букв.`)
    }
    else if (testLogin && testEmail) {
        alert(`Вітаємо! Ви успішно зареєструвались.`)
    }
})