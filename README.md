# theCommoner
My blog for random stuff that I like.

View it online https://commoner-spa.vercel.app/

View Next.js 15 implementation https://github.com/wecreus/theCommoner-next

<div align="center">

![LOGO](./public/theCommoner.png) 
</div>

## Implementation

This project was build as Front-end only SPA with [React](https://react.dev/), [Firebase](https://firebase.google.com/) for basic database manipulation, [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) and [Three-Globe](https://github.com/vasturiano/three-globe) for creating an interactive 3D Globe. And a Candy heart shape by Google [CC-BY](https://creativecommons.org/licenses/by/3.0/)

## Features
* Home page tracks what user is looking at with IntersectionObserver and lazy loads sections based on scroll position
  * Reviews is loading data from Firebase and, if present, parses markdown recieved and converts them to DOM elements with [DOMPurify.sanitize](https://github.com/cure53/DOMPurify?tab=readme-ov-file#how-do-i-use-it)
  * Gallery and Reviews is using external url's to load pictures to reduce bundle size
  * Globe is based around [Three-Globe](https://github.com/vasturiano/three-globe) with ligting from [Environment](https://github.com/pmndrs/drei?tab=readme-ov-file#environment)
    * Globe points and data is stored in the bundle but is custom, with some points deleted/modified by me to reduce file size.
    * Heart animations are done with [React-Spring](https://github.com/pmndrs/react-spring) and all the camera animations are done with [CameraControls](https://github.com/pmndrs/drei?tab=readme-ov-file#cameracontrols)
    * You can click on the heart or on an emty space in the embedded html to center the camera around Ukraine
* Header tracks scroll position and collapses when user scrolls down. Also allows for quick scroll to top by clicking on an empty space
* User selected themes are stored in Redux and are loaded/saved to LocalStorage
  * Themes can be easily added or modified in /assets/styles/_variables.scss wich then exports to other .scss files or javascript to create user interaction 
* Contact page is built just for opening an email application already installed on user's device. Since this is a front-end only app, storing API key's is rather difficult for sending actual emails.

## Usage

This project is bundled with [Vite](https://vitejs.dev/)

```bash
yarn install    # use Yarn for managing dependencies
yarn run dev    # live website will be served locally at http://localhost:5173/
```
