import React from 'react';

const lesson = {
    url: 'https://chinesepod.com/library',
    label: 'Lesson Library'
}
const how = {
    url: 'https://class.chinesepod.com/#how-it-works',
    label: 'How It Works'
}
const teachers = {
    url: 'https://class.chinesepod.com/#our-teachers',
    label: 'Our Teachers'
}
const pricing = {
    url: '/#pricing-plans',
    label: 'Pricing Plans'
}

const MenuItems = () => {
    return(
        <ul>
            <li><a href={lesson.url}>{lesson.label}</a></li>
            <li><a href={how.url}>{how.label}</a></li>
            <li><a href={teachers.url}>{teachers.label}</a></li>
            <li><a href={pricing.url}>{pricing.label}</a></li>
            <li><a href="/">Login</a></li>
        </ul>
    )
}

export default MenuItems;