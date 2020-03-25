import React, { useState } from "react";


const SplashListPage: React.FC = () => {
    return(
        <>      
           <div>
            <style
                dangerouslySetInnerHTML={{
                __html:
                    "\n  body { text-align: center; padding: 150px; }\n  h1 { font-size: 50px; }\n  body { font: 20px Helvetica, sans-serif; color: #333; }\n  article { display: block; text-align: left; width: 650px; margin: 0 auto; }\n  a { color: #dc8100; text-decoration: none; }\n  a:hover { color: #333; text-decoration: none; }\n"
                }}
            />
            <article>
                <h1>We’ll be back soon!</h1>
                <div>
                <p>
                    Sorry for the inconvenience but we’re performing some maintenance at the
                    moment. We’ll be back online shortly!
                </p>
                <p>— Ruman Dangol</p>
                <p>— rumancha12@gmail.com</p>
                <a href="https://www.linkedin.com/in/ruman-dangol-013b0111a/"> LinkedIn </a>
                </div>
            </article>
            </div>; 
        </>
    )
}

const SplashPage: React.FC = () => {

    const [isSplash, setSplash] = useState(true);

    return(
        <>
        {isSplash ? <> <SplashListPage/> </> :  <> </>}
        </>
    )
}

export default SplashPage;


