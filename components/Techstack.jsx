"use client"

import React, { useState, useEffect } from 'react';

function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('tech-stack-section');
      if (!element) return;
      
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const technologies = [
    {
      name: "Flutter",
      description: "Cross-platform UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.314 0L2.3 12 6 15.7 21.684 0H14.314Z" fill="#47C5FB"/>
          <path d="M14.314 9.9L6.8 17.5 10.5 21.3 14.2 17.6 21.7 10H14.314Z" fill="#47C5FB"/>
          <path d="M10.5 21.3L14.3 24H21.7L14.2 17.6L10.5 21.3Z" fill="#00569E"/>
          <path d="M6.7 17.5L10.5 13.7L14.3 17.6L10.5 21.3L6.7 17.5Z" fill="#00B5F8"/>
        </svg>
      ),
      category: "Mobile Development"
    },
    {
      name: "FlutterFlow",
      description: "Visual builder platform that enables rapid application development with Flutter without writing extensive code.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 19H22L12 2Z" fill="#0098FA"/>
          <path d="M14 15L12 19L10 15H14Z" fill="#0059AC"/>
        </svg>
      ),
      category: "Development Tools"
    },
    {
      name: "Next.js",
      description: "React framework that enables server-side rendering, static site generation, and more for production-grade React applications.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" fill="white"/>
        </svg>
      ),
      category: "Web Development"
    },
    {
      name: "React",
      description: "JavaScript library for building user interfaces, especially single-page applications where UI updates are frequent.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 9.861a2.139 2.139 0 1 0 0 4.278 2.139 2.139 0 0 0 0-4.278zm-8.244 5.079c-.418.756-.588 1.462-.511 2.075.092.63.542 1.177 1.26 1.554 1.135.597 2.82.544 4.639-.142 1.255-.467 2.525-1.225 3.737-2.195-.886-.968-1.688-2.015-2.378-3.121-.886-1.272-1.673-2.603-2.338-3.963-1.261.232-2.431.553-3.455.933-2.195.822-3.372 1.926-3.372 3.267 0 .51.155.966.418 1.592zm18.487-1.592c0-.732-.291-1.489-.835-2.206-.725-.956-1.929-1.737-3.441-2.284-1.049-.383-2.255-.705-3.561-.935-.664 1.362-1.447 2.694-2.333 3.964-.679 1.11-1.48 2.159-2.367 3.127 1.431 1.199 2.93 2.091 4.392 2.618 1.819.686 3.504.739 4.64.142.717-.377 1.167-.923 1.26-1.554.076-.613-.093-1.32-.511-2.075.264-.627.418-1.083.418-1.592l.008-.005zm-5.17-6.608c2.761 1.055 4.506 2.702 4.506 4.509 0 .577-.154 1.134-.41 1.665.306.783.468 1.509.405 2.17-.144.998-.757 1.744-1.718 2.246-1.377.725-3.28.647-5.263-.166-1.642-.616-3.308-1.638-4.837-2.973-.89.968-1.841 1.843-2.831 2.612.636.757 1.324 1.468 2.059 2.124.815.731 1.646 1.349 2.471 1.856 2.348 1.446 4.71 2.147 6.789 2.147 1.666 0 3.19-.427 4.449-1.302 1.268-.879 2.172-2.15 2.547-3.647.113-.466.173-.946.173-1.446 0-2.551-1.909-5.187-5.34-7.277-1.036-.63-2.195-1.177-3.447-1.629-.013-.067-.05-.106-.063-.17zm-5.009.339c.418.076.824.16 1.242.25.05.103.088.205.138.308.694 1.464 1.495 2.909 2.404 4.323.818 1.25 1.727 2.415 2.694 3.472-.064.053-.134.103-.198.156a39.876 39.876 0 0 1-2.426-2.214 31.359 31.359 0 0 1-2.327-2.707c-.489-.672-.935-1.349-1.351-2.029 0-.013-.025-.013-.025-.026-.026-.763-.064-1.538-.151-2.313v.78zm2.076-5.079c-1.497 0-2.745.465-3.639 1.296-.895.825-1.441 2.029-1.441 3.395 0 1.463.557 3.1 1.59 4.753.445-.737.946-1.456 1.496-2.15.006-.007.012-.007.012-.013.304-2.197.792-4.323 1.468-6.317-.305-.17-.624-.304-.953-.402-.316-.085-.588-.123-.867-.123-.306 0-.591.037-.876.128-.293.097-.585.242-.858.43.073-.062.147-.114.226-.17.394-.27.84-.445 1.354-.526.35-.055.737-.075 1.126-.04.273.02.542.073.81.158.266.085.53.207.8.357-.097-.17-.194-.331-.304-.483-.548-.731-1.2-1.184-1.944-1.293zm8.143 11.484c.291-.231.574-.475.84-.726-.306-.332-.625-.664-.954-.983.05.362.088.731.114 1.101v.608zm-1.598 1.341a28.33 28.33 0 0 0 1.879-1.393c-.331-1.331-.82-2.737-1.456-4.179.33.231.648.47.948.709.294.232.574.476.84.72.45 1.324.931 2.603 1.442 3.847a35.91 35.91 0 0 1-2.779 2.127c-.321.219-.637.424-.958.624a3.33 3.33 0 0 0 .084-2.455zm-9.029-13.248a5.991 5.991 0 0 1 1.223-1.694c.705-.731 1.531-1.272 2.443-1.607.906-.331 1.889-.466 2.879-.39a5.56 5.56 0 0 1 1.424.3 5.8 5.8 0 0 1 1.272.63 6.062 6.062 0 0 1 1.695 1.675c.41.559.738 1.177.98 1.85-1.177-.604-2.364-1.112-3.561-1.519-1.63-.559-3.279-.946-4.928-1.166a5.025 5.025 0 0 1-1.696-1.678c-.474.558-.881 1.147-1.184 1.77a4.16 4.16 0 0 0-.398 1.118c-.65.352-.1.725-.1 1.112 0 .337.031.669.094 1.009.062.337.154.674.279 1.016-.517-.85-.9-1.677-1.132-2.425-.237-.747-.26-1.404-.063-1.89.194-.49.603-.872 1.173-1.111zM12 6.988c.598 0 1.177.034 1.738.103 1.182.142 2.332.432 3.444.848 1.326.491 2.589 1.178 3.777 2.01a5.35 5.35 0 0 0-.4-1.046 5.491 5.491 0 0 0-.641-1.01 5.83 5.83 0 0 0-1.795-1.613c-1.142-.67-2.532-1.06-4.033-1.06-.691 0-1.373.091-2.029.272a6.394 6.394 0 0 0-1.853.787c.372-.082.754-.139 1.149-.182.54-.064 1.088-.097 1.643-.109z" fill="#61DAFB"/>
        </svg>
      ),
      category: "Web Development"
    },
    {
      name: "WordPress",
      description: "Content management system and website builder focused on usability and web standards for blogs and dynamic content websites.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .387.045 1.2.075 1.186 3.651.046 5.471.79 9.076-1.305-1.256-2.89-2.986-2.89-4.696 0-1.828 1.335-2.779 2.147-3.585 1.019-.916 1.858-1.656 1.858-2.701 0-1.05-.67-1.935-1.603-2.701 1.215-.12 2.4-.168 3.39-.168 1.558 0 3.153.21 4.569.585-.235-.015-.424-.046-.643-.046-1.215 0-3.18.96-3.18 3.526 0 .15.008.293.021.435m-6.4 5.64c.113.825.42 1.785.898 2.94l-1.286-3.631c.223.292.391.594.391.691m12.165-.394c.877-.132 1.35-.707 1.35-1.367 0-.21-.052-.405-.133-.585-.137-.3-.337-.54-.563-.735.217-.022.419-.045.599-.045 1.081 0 2.755.833 2.755 2.787 0 1.187-.69 2.236-1.624 2.756.09-1.297-.3-2.488-1.068-3.492.268.582.403 1.214.403 1.875 0 .98-.233 2.01-.675 2.86-.462.885-1.07 1.537-1.674 1.537-.312 0-.63-.132-.9-.405-.48-.48-.976-1.6-.976-3.54 0-1.29.495-2.609 1.508-4.246ZM12 16.165c.765-.45 1.543-.944 1.543-1.8 0-.434-.16-.824-.494-1.095-.199-.17-.451-.285-.75-.357-.254-.06-.54-.09-.885-.09-1.2 0-2.55.524-2.55 2.76 0 .614.194 1.178.502 1.656l1.221-3.371c.236-.651.985-1.301 1.413-.375.02.45.045.074.045.135 0 .12-.045.253-.045.253v2.055c-.337.405-.487.63-.945.99-.225.18-.585.404-.945.614ZM12 4.215c3.311 0 6.291 1.35 8.441 3.54C18.293 5.095 15.314 3.6 12 3.6 6.477 3.6 2.015 8.056 2.015 13.575c0 4.152 2.527 7.712 6.124 9.235A9.883 9.883 0 0 1 2.015 13.5C2.015 8.28 6.477 4.215 12 4.215ZM2.1 12.375c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.1 17.76 2.1 12.375Z" fill="white"/>
        </svg>
      ),
      category: "CMS & Web Development"
    },
    {
      name: "AppSheet",
      description: "No-code application development platform that allows users to create mobile, tablet, and web applications using data sources like Google Sheets.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" fill="#4285F4" />
          <path d="M12 2L4 6V18L12 22V2Z" fill="#5BB974" />
          <path d="M12 2V22L20 18V6L12 2Z" fill="#4285F4" />
          <path d="M12 6L7 8.5V15.5L12 18L17 15.5V8.5L12 6Z" fill="white" />
          <path d="M12 6L7 8.5V15.5L12 18V6Z" fill="#E6F4EA" />
          <path d="M12 6V18L17 15.5V8.5L12 6Z" fill="#CEEAD6" />
        </svg>
      ),
      category: "No-Code Development"
    }
  ];

  return (
    <section id="tech-stack-section" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white mb-4">Tech Stack / Tools We Use</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build performant, scalable, and beautiful digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name}
              className={`bg-gray-900 rounded-lg overflow-hidden transition-all duration-1000 group hover:bg-gray-800 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-amber-600/20 rounded-full transform -rotate-12 group-hover:rotate-12 transition-all duration-500"></div>
                  <div className="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center p-2">
                    {tech.icon}
                  </div>
                </div>
                
                <span className="px-3 py-1 text-xs text-amber-300 bg-amber-900/30 rounded-full mb-4">
                  {tech.category}
                </span>
                
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
              
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;