"use strict";

var scripts = [
    "./js/jquery.min.js",
    "./js/jquery.contextMenu.min.js",
    "./js/jquery.ui.position.min.js",
    "./js/plotly-latest.min.js",
    "./js/codemirror.js",
    "./js/codemirror_pypen.js",
    "./js/zlib.min.js",
    './dncl.min.js',
    './setting.js',
    "./pypen.js",
    // "./sample.js",
    "./quiz.js",
    // "./answer.js",
    "./base64.js",
    "./fileio.js",
    // "./run.min.js"
];

function load_js(js)
{
    return new Promise(resolve =>{
        var script = document.createElement('script');
        script.defer = 1;
        script.src = js;
        script.type = "text/javascript";
        script.addEventListener('load', () => resolve('ok'));
        document.body.appendChild(script);    
    });
}

function load_js_witherror(js)
{
    return new Promise(resolve =>{
        var script = document.createElement('script');
        script.defer = 1;
        script.src = js;
        script.type = "text/javascript";
        script.addEventListener('load', () => resolve('ok'));
        script.addEventListener('error', () => resolve('error'));
        document.body.appendChild(script);    
    });
}

var answer_load = false, sample_load = false;

(async () => {
    for(var i = 0; i < scripts.length; i++)
    {
        await load_js(scripts[i]);
    }
    var result = await load_js_witherror('./answer.js');
    answer_load = (result === 'ok');
    result = await load_js_witherror('./sample.js');
    sample_load = (result === 'ok');
    await load_js('./run.min.js');
    var input_status = document.getElementById('input_status');
    input_status.style.visibility = 'hidden';
    input_status.innerText = '入力待ち';
})();
