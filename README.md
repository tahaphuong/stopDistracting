# Stop distracting!!! 
My first time writing a chrome extension.
I posted a video testing this, and a lot of people have asked me about it (I also made a few customizations for my friends), so I think I would bring it up here, hopefully it could be helpful to somebody :3

## First words
Since I know that writing a chrome extension requires only basic website knowledge, I decided to make one for my own.
It's called **Stop distracting!!!**

#### Background story
Everytime when I'm bored, I always (as a habit) type the letter "f" on the url bar...
As you can guest, this is the beginning of 2 hours straight non-stop scrolling facebook.

#### So what would this Chrome Extension do??
When I enter a *time-wasted website*, a box would appear and you have 2 choices: Keep relaxing or go to another web page.
When you choose number 2, you will see a screen with options, to navigate you to other websites, which are more helpful to you.

***You can see a demo gif below:***

![demo gif](https://github.com/tahaphuong/stopDistracting/blob/master/demo.gif)


## Setup
1. Download all the files and pack it in a folder
2. Choose the three dots at the top right corner of your chrome browser -> More tools -> Extensions
3. Turn on the **Developer Mode**
4. Choose **Load unpacked**
5. Choose the folder to upload

=> And you doneeeeee

## Customization
To customize it, you should have a basic knowledge of Javascript and HTML/CSS. 

#### To customize the "time-wasted websites"
Go to the **manifest.js**, on the "matches" of "content_script", you will write patterns website, which match to the url you dont want to visit

#### To customize the "good websites options"
Go to **content.js**, edit the ```<a>``` tags of the ```const suggestions = ...```

### The bottom line
Shoutout to **The Coding Train** !!
[This video](https://www.youtube.com/watch?v=9Tl3OmwrSaM) is a step-to-step tutorial for you to have a deeper understanding of **Chrome Extension**

## Thank you for visiting!!
My name is Phuong Ta, a newbie coder coming from Vietnam, started coding in July 2019. I'm currently looking for the chance to improve my skills as well as get more experience working on real projects.
