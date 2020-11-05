import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="text-center container">
      <h2 className="text-muted mt-5 pt-3 nothingCall">Projects</h2>
      <div className="row mt-5 ml-2 justify-content-center">
        <Card
          img="empcrud.png"
          title="Employee crud"
          para="Here you can save Employee Detals."
          link="Click Here"
          linkSrc="https://sankalp-crud-r-redux.netlify.app/"
          gitSrc="https://github.com/sankalpmishra2795/Crud-R-Redux"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
            "https://cdn.svgporn.com/logos/react.svg",
            "https://cdn.svgporn.com/logos/react-router.svg",
            "https://cdn.svgporn.com/logos/redux.svg",
          ]}
        />
        <Card
          img="todo.png"
          title="ToDo List"
          para="Here your Todo list"
          link="Todo"
          linkSrc="https://sankalp-todo-r-r.netlify.app/"
          gitSrc="https://github.com/sankalpmishra2795/ToDo-React-Redux"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
            "https://cdn.svgporn.com/logos/react.svg",
            "https://cdn.svgporn.com/logos/react-router.svg",
            "https://cdn.svgporn.com/logos/redux.svg",
          ]}
        />
        <Card
          img="hunger.png"
          title="Hunger Website"
          para="Use react for forntend & Node for Backend"
          link=""
          linkSrc="https://help-hunger.netlify.app/"
          gitSrc="https://github.com/sankalpmishra2795/hunger-backend"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
            "https://cdn.svgporn.com/logos/react.svg",
            "https://cdn.svgporn.com/logos/redux.svg",
            "https://cdn.svgporn.com/logos/nodejs.svg",
            "https://cdn.svgporn.com/logos/express.svg",
          ]}
        />
          <Card
          img="movie.png"
          title="Movie Finder"
          para="Use of JS. use third party API"
          link="Movie Finder"
          linkSrc="https://sankalp-movie-finder.netlify.app/"
          gitSrc="https://github.com/sankalpmishra2795/Moviefinderl"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
          ]}
        />
        <Card
          img="empcrud2.png"
          title="Employee Crud"
          para="Use of class component for making it.Here you can save Employee Detals."
          link="Click Here"
          linkSrc="https://sankalp-crud2.netlify.app/"
          gitSrc="https://github.com/sankalpmishra2795/Crud2_Project"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
            "https://cdn.svgporn.com/logos/react.svg",
          ]}
        />
          <Card
          img="github.png"
          title="Github Finder"
          para="Search user by username or by repositry name."
          link="Find User"
          linkSrc="https://sankalp-github-finder.netlify.app/"
          gitSrc="https://github.com/SuyashMishra-dev/Git-hub-finder"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
          ]}
        />
        <Card
          img="calculator.png"
          title="Calculator"
          para="Calculate your expense"
          link="Click Here"
          linkSrc="https://sankalp-calculator.netlify.app/"
          gitSrc="https://github.com/sankalpmishra2795/Calculator_Reactjs"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
            "https://cdn.svgporn.com/logos/react.svg",
            "https://cdn.svgporn.com/logos/react-router.svg",
            "https://cdn.svgporn.com/logos/redux.svg",
          ]}
        />

        <Card
          img="stack.png"
          title="Template"
          para="This temlated copy from TEMPLATE.COM"
          link="Click Me"
          linkSrc="https://slack-clone-sankalp.netlify.app/"
          gitSrc="https://github.com/sankalpmishra2795/slack_clone"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
          ]}
        />
        <Card
          img="templatecopy.png"
          title="Template Copy"
          para="This temlated copy from TEMPLATE.COM"
          link="Click Me"
          linkSrc="https://sankalp-templet.netlify.app/"
          gitSrc="https://github.com/sankalpmishra2795/horizon_template"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            // "https://cdn.svgporn.com/logos/bootstrap.svg",
          ]}
        />
      
              
        {/* <Card
          img="restorent.jpeg"
          title="Blog App"
          para="Come and start writing."
          link="Click Here"
          linkSrc="#"
          gitSrc="#"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
            "https://cdn.svgporn.com/logos/react.svg",
            "https://cdn.svgporn.com/logos/redux.svg",
            "https://cdn.svgporn.com/logos/python.svg",
            "https://cdn.svgporn.com/logos/flask.svg",
            "https://cdn.svgporn.com/logos/mysql.svg"
          ]}
        />
        <Card
          img="hackathon.jpeg"
          title="Hackathon"
          para="Full flash application."
          link="Click Here"
          linkSrc="#"
          gitSrc="#"
          arr={[
            "https://cdn.svgporn.com/logos/html-5.svg",
            "https://cdn.svgporn.com/logos/css-3.svg",
            "https://cdn.svgporn.com/logos/bootstrap.svg",
            "https://cdn.svgporn.com/logos/javascript.svg",
            "https://cdn.svgporn.com/logos/react.svg",
            "https://cdn.svgporn.com/logos/react-router.svg",
            "https://cdn.svgporn.com/logos/redux.svg",
            "https://cdn.svgporn.com/logos/firebase.svg"
          ]}
        /> */}
      </div>
    </div>
  );
};

export default Projects;
