import react, {useState} from 'react';
import './styles/home.css';

const leftContent = [
    {value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', id: '1'},
    {value: 'Ldolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .', id: '2'},
    {value: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.', id: '3'},
    {value: 'Lorem ipsum dol labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', id: '4'},
    {value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, s', id: '5', img: 'https://source.unsplash.com/Hmcpg4cnSRA/150x150', class: 'z-0 absolute mt-12 ml-20 transition-all duration-500 ease-in-out opacity-100'},
];
   

export const Home = () => {

    const [content, setContent] = useState(leftContent[0]);
    

    const openNav = () => {
        document.getElementById("myNav").style.height = "100%";
    }

    const closeNav = () => {
        document.getElementById("myNav").style.height = "0%";
    }



    const handleOnMouseOver = (id) => {
        const content = leftContent.find(item => item.id === id );
        setContent(content);

    }
    
    return (
        <div>
            <div id="myNav" className="h-0 fixed z-10 top-0 left-0 overflow-hidden bg-black transition-all duration-500 text-white">
            <div className="relative grid gap-4 grid-cols-3 bg-gray w-full h-screen">
                <div className="text-right ml-56 flex flex-col space-y-64 mt-8">
                    <div className=" h-64 mb-48">
                        {content.value}
                    </div>
                    <div className="text-5xl font-black">
                        {content.id}
                    </div>
                </div>
                <div className="text-5xl font-black ml-56 flex flex-col justify-center text-left uppercase">
                   <div className="relative image-wrapper" onMouseOver={()=> handleOnMouseOver('1')}>
                        <img src="https://source.unsplash.com/LTSbkU5BVuQ/150x150" alt="placeholder" className="img-effect" />
                       <p className="line-effect inline-block relative z-10">Helias</p>
                    </div>
                   <div className="relative image-wrapper" onMouseOver={()=> handleOnMouseOver('2')}>
                   <img src="https://source.unsplash.com/riB77IbfYuQ/150x150" alt="placeholder" className="img-effect" />
                       <p className="line-effect inline-block relative z-10">Someting Yogi</p>
                    </div>
                   <div className="relative image-wrapper" onMouseOver={()=> handleOnMouseOver('3')}>
                   <img src="https://source.unsplash.com/SaVWRO-ljqw/150x150" alt="placeholder" className="img-effect" />
                       <p className="line-effect inline-block relative z-10">Buzzworthy</p>
                    </div>
                   <div className="relative image-wrapper" onMouseOver={()=> handleOnMouseOver('4')}>
                   <img src="https://source.unsplash.com/GUlkqCDP6TY/150x150" alt="placeholder" className="img-effect" />
                       <p className="line-effect inline-block relative z-10">Gatto</p>
                    </div>
                   <div className="relative image-wrapper" onMouseOver={()=> handleOnMouseOver('5')}>
                   <img src="https://source.unsplash.com/Hmcpg4cnSRA/150x150" alt="placeholder" className="img-effect" />
                       <p className="line-effect inline-block relative z-10">Snooze</p>
                    </div>
                </div>
                <div className="text-black mr-10 mt-16" onClick={closeNav}>
                    <p className="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center text-4xl float-right m-2 cursor-pointer">&times;</p>
                </div>
            </div>
            </div>
            <div className="bg-black text-white h-screen">
                <div className="p-5 text-xl">
                    Logo and Sidebar here
                </div>
                <div className="float-right">
                    <div className="p-6 text-orientation-v cursor-pointer" onClick={openNav}>Abouit</div>
                    <div className="p-6 text-orientation-v cursor-pointer" onClick={openNav}>Abouit</div>
                    <div className="p-6 text-orientation-v cursor-pointer" onClick={openNav}>Abouit</div>
                    <div className="p-6 text-orientation-v cursor-pointer" onClick={openNav}>Abouit</div>
                    <div className="p-6 text-orientation-v cursor-pointer" onClick={openNav}>Abouit</div>
                </div>
                <div className="h-64 m-auto bg-gray w-1/4 my-56">
                    <div>About</div>
                    <div className="text-6xl font-bold">Hello I am Elizabeth Lola, designer and front-end developer</div>
                </div>
            </div>
        </div>
    )
}
