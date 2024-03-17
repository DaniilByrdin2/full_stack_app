window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.myb-MyBetsHeader_Button').forEach( element => {

        element.addEventListener('click', (event) => {

            document.querySelectorAll('.myb-MyBetsHeader_Button').forEach(element => {
                element.classList.remove('myb-MyBetsHeader_ButtonSelected');
            });
            const selectedButton = event.target.closest('.myb-MyBetsHeader_Button');
            selectedButton.classList.add('myb-MyBetsHeader_ButtonSelected');

            //document.querySelector('.myb-MyBetsHeader_Slider').style.left = selectedButton.offsetLeft - 45 + 'px';
            //document.querySelector('.myb-MyBetsHeader_Slider').style.width = selectedButton.offsetWidth + 'px';
            //console.log(selectedButton.offsetWidth )
        });
    });
    const slider = document.querySelector('.myb-NavBarSlider');


    const sliderButtons = document.querySelectorAll('.myb-HeaderButton');
    sliderButtons.forEach((element, index) => {
        element.addEventListener('click', (event) => {
            sliderButtons.forEach(element => {
               element.classList.remove('myb-HeaderButton-selected');
               element.classList.remove('myb-HeaderButton-animate');
            });
            const left = event.target.offsetLeft;
            const width = event.target.offsetWidth;
            slider.style.left = left + 'px';
            slider.style.width = width + 'px';
            element.classList.add('myb-HeaderButton-selected');
            element.classList.add('myb-HeaderButton-animate');
            console.log('index', index);
            switch (index) {
                case 2:
                case 3:
                case 4:
                    document.querySelector('.myb-BetItemsContainer_SettledViewOlderBetsWrapper').classList.add('Hidden');
                    document.querySelector('.myb-BetItemsContainer_BetItemsContainer').classList.remove('Hidden');

                    break;

                default:
                    document.querySelector('.myb-BetItemsContainer_SettledViewOlderBetsWrapper').classList.remove('Hidden');
                    document.querySelector('.myb-BetItemsContainer_BetItemsContainer').classList.add('Hidden');
            }

            // animation
            document.querySelectorAll('.myb-WinLossIndicator').forEach(element => {
                element.classList.remove('myb-WinLossIndicator-won');
            })
            // firing animations
            setTimeout(() => {
                document.querySelectorAll('.myb-WinLossIndicator').forEach(element => {
                    element.classList.add('myb-WinLossIndicator-won');
                })
            }, 100)
        });
    });
    sliderButtons[3].classList.add('myb-HeaderButton-selected');
    sliderButtons[3].classList.add('myb-HeaderButton-animate');
    const sliderActiveElement = document.querySelector('.myb-HeaderButton-selected');
    const left = sliderActiveElement.offsetLeft;
    const width = sliderActiveElement.offsetWidth;
    slider.style.left = left + 'px';
    slider.style.width = width + 'px';
    slider.classList.remove('Hidden');

});


function toggleTab(element) {

    document.getElementById('results').classList.toggle('result-hidden');

    if (element.parentElement.classList.contains('myb-SettledBetItem_Collapsed')) {
        element.parentElement.classList.remove('myb-SettledBetItem_Collapsed')
        element.parentElement.classList.add('myb-SettledBetItem_DefaultOpen')
        document.querySelectorAll('.myb-WinLossIndicator').forEach(element => {
            element.classList.remove('myb-WinLossIndicator-won');
        })
        // firing animations
        setTimeout(() => {
            document.querySelectorAll('.myb-WinLossIndicator').forEach(element => {
                element.classList.add('myb-WinLossIndicator-won');
            })
        }, 100)
    } else {
        element.parentElement.classList.add('myb-SettledBetItem_Collapsed')
        element.parentElement.classList.remove('myb-SettledBetItem_DefaultOpen')
    }

}




function toggleBal() {

    const el = document.getElementById("el-bal-custom")

    if( el.classList.contains('none') ) {

        el.classList.remove( 'none' )

    } else {
        el.classList.add('none')
    }
}

function animateSvg() {

    console.log("animate");

    const el = document.getElementById("el-animate-svg")

    el.classList.add('animated')



    setTimeout( () => {
        el.classList.remove( 'animated' )
    } , 2000 )
}