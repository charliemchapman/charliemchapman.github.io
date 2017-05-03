import reactLogo from '../assets/react-logo.svg';
import mochaLogo from '../assets/mocha-logo.svg';
import nightmareLogo from '../assets/nightmare-logo.svg';
import nodeLogo from '../assets/node-logo.svg';
import jqueryLogo from '../assets/jquery-logo.svg';
import dotnetLogo from '../assets/dotnet-logo.png';
import xamlLogo from '../assets/xaml-logo.png';
import windowsLogo from '../assets/windows-logo.png';
import windowsPhoneLogo from '../assets/windows-phone-logo.png';
import moqLogo from '../assets/moq-logo.png';
import seleniumLogo from '../assets/selenium-logo.png';
import htmlLogo from '../assets/html5-logo.png';
import cssLogo from '../assets/css-logo.png';
import jenkinsLogo from '../assets/jenkins-logo.png';
import azureLogo from '../assets/azure-logo.svg';

export const skillSections = [
    {
        sectionName: "Javascript",
        skills: [
            { text: "React", logo: reactLogo },
            { text: "Mocha", logo: mochaLogo },
            { text: "Nightmare Js", logo: nightmareLogo },
            { text: "Node", logo: nodeLogo },
            { text: "jQuery", logo: jqueryLogo }
        ]
    },
    {
        sectionName: ".Net",
        skills: [
            { text: "MVC", logo: dotnetLogo },
            { text: "Web Api", logo: dotnetLogo },
            { text: "XAML", logo: xamlLogo },
            { text: "Windows 8", logo: windowsLogo },
            { text: "Windows Phone", logo: windowsPhoneLogo },
            { text: "Moq", logo: moqLogo },
            { text: "Selenium", logo: seleniumLogo }
        ]
    },
    {
        sectionName: "Other",
        skills: [
            { text: "HTML5", logo: htmlLogo },
            { text: "CSS", logo: cssLogo },
            { text: "Jenkins", logo: jenkinsLogo },
            { text: "Azure", logo: azureLogo }
        ]
    },
];