
export default  class waves{
    
    static waveTimer1;
    static waveTimer2;
    static waveTimer3;
    static waveTimer4;
    static waveTimer5;
    static waveTimer6;
    static enemyArray = [];
    static enemyCounter = 1;
    static wave1Check = false;
    static wave2Check = false;
    static wave3Check = false;
    static wave4Check = false;
    static wave5Check = false;
    static wave6Check = false;



    static wave()
    {
        Engine.redEnemy.start("red", ("redEnemy" + waves.enemyCounter), (24 - (1 * 2)) * 1, 14 * 1)

        waves.enemyCounter++;
    }


    static startWave1(){

        waves.waveTimer1 = setInterval(waves.wave, 1000);
        let stopTimer1 = setTimeout(waves.stopWave1, 10000);


    }

    static startWave2(){

        waves.waveTimer2 = setInterval(waves.wave, 700);
        let stopTimer2 = setTimeout(waves.stopWave2, 10000);

    }

    static startWave3(){

        waves.waveTimer3 = setInterval(waves.wave, 500);
        let stopTimer3 = setTimeout(waves.stopWave3, 10000);

    }
    static startWave4(){

        waves.waveTimer4 = setInterval(waves.wave, 300);
        let stopTimer4 = setTimeout(waves.stopWave4, 10000);

    }
    static startWave5(){

        waves.waveTimer5 = setInterval(waves.wave, 100);
        let stopTimer5 = setTimeout(waves.stopWave5, 10000);

    }
    static startWave6(){

        waves.waveTimer6 = setInterval(waves.wave, 50);
        let stopTimer6 = setTimeout(waves.stopWave6, 10000);

    }

    static stopWave1()
    {
        waves.wave1Check = true;
        clearInterval(waves.waveTimer1);
    }

    static stopWave2()
    {
        waves.wave2Check = true;
        clearInterval(waves.waveTimer2);
    }

    static stopWave3()
    {
        waves.wave3Check = true;
        clearInterval(waves.waveTimer3);
    }

    static stopWave4()
    {
        waves.wave4Check = true;
        clearInterval(waves.waveTimer4);
    }

    static stopWave5()
    {
        waves.wave5Check = true;
        clearInterval(waves.waveTimer5);
    }

    static stopWave6()
    {
        waves.wave6Check = true;
        clearInterval(waves.waveTimer6);
    }


}