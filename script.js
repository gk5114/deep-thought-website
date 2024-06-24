"use strict"

import jsonData from './project.json' with {type:'json'}

const RightArrow=document.querySelector("#right-arrow")
const journeyBoard = document.querySelector('.journey-board');

function getAllAssetTitles(jsonData) {
    const assetTitles = [];
    const tasks = jsonData.tasks;

    for (let i = 0; i < tasks.length; i++) {
        const assets = tasks[i].assets;
        for (let j = 0; j < assets.length; j++) {
            assetTitles.push(assets[j].asset_title);
        }
    }

    return assetTitles;
}

const list_heading=document.getElementById('journey-board-heading-1')

const assetTitles = getAllAssetTitles(jsonData);
console.log(assetTitles)

function writeAssetTitlesToHTML(assetTitles) {
    const list = document.getElementById('journey-list');
    list.innerHTML = '';  
    list_heading.innerHTML="Journey board"
    list_heading.className='main-heading-2'

    list.innerHTML="<li class='main-heading-2'>Explore the world of management</li>"

    assetTitles.forEach(title => {
        const listItem = document.createElement('li');
        listItem.textContent = title;
        listItem.className='m-x-10 font-monsterrat'
        console.log(title)
        list.appendChild(listItem);
    });
}

function removeAssetTitlesFromHTML() {
    const list = document.getElementById('journey-list');
    list_heading.innerHTML=''
    list.innerHTML = '';
}

RightArrow.addEventListener('click',()=>{
    if (journeyBoard.style.width === '20%') {
        journeyBoard.style.width = '5%';
        RightArrow.src="./images/right-arrow.png";
        removeAssetTitlesFromHTML();
    } else {
        journeyBoard.style.width = '20%';
        RightArrow.src="./images/left-arrow.png";
        writeAssetTitlesToHTML(assetTitles);
    }
});

const heading_2=document.getElementById("heading-2-json")
heading_2.innerHTML=jsonData.tasks[0].task_title
const content_2=document.getElementById("content-2-json")
content_2.innerHTML=jsonData.tasks[0].task_description

const boxHeading=document.querySelectorAll(".g-heading")

for (let index = 0; index < boxHeading.length; index++) {
    boxHeading[index].innerHTML=jsonData.tasks[0].assets[index].asset_title
    
}

const boxDescJson=document.querySelectorAll('.box-desc-json')

let emptyArray = new Array(4);

for (let i = 0; i < emptyArray.length; i++) {
    emptyArray[i]=jsonData.tasks[0].assets[i].asset_description
}

for (let index = 0; index < boxDescJson.length; index++) {
    boxDescJson[index].innerHTML=`<span class="bold-h">Description:</span>&nbsp;&nbsp;${emptyArray[index]}`
    }

