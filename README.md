# General
The current app is mainly composed with a static post tab,and a dynamic contact list tab.
ImageGallert tab and chat tab are still in the proccess of implementation if have more time.
Date: 2018/3/11

# Operations on Contact List
- Add Name using input field
- Delete names by swiping to the left
- Scroll down to check more names that currently existing on the list 
- Data are posted to firebase using unique keys 

# Static Post Tab
- make comment to post
- like, star

# ImageGallery
- can try to swipe to left to check more images...
- a lot of parts that need to be completed

# Todo
- clear input field after submission 
- search name and show (need to figure out what kind of Object does firebase add_child callback return)
- sort contact list by order (this can be solved once child callback is resolved)
- Put styles in StyleSheet
- debugging tests using jest

# Screenshoots 
https://github.com/raylinhonghu/React-Native-Firebase-ContactList-/tree/master/sreenshots

# UI instagrem mock exercise using 'native-base' can visit
https://github.com/raylinhonghu/react-native-instagram-mock

# Dependencies 
    "firebase": "^4.11.0",
    "native-base": "^2.3.10",
    "react": "16.3.0-alpha.1",
    "react-native": "0.54.1",
    "react-navigation": "^1.5.1"
