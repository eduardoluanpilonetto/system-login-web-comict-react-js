import { Content, Conteiner, Card } from "./style";
import img1 from "../../../assets/1.jpg"
import img2 from "../../../assets/2.jpg"
import img3 from "../../../assets/3.jpg"
import img4 from "../../../assets/4.jpg"
import img5 from "../../../assets/5.jpg"
import img6 from "../../../assets/6.jpg"
import img7 from "../../../assets/7.jpg"
import img8 from "../../../assets/8.jpg"
import img9 from "../../../assets/9.jpg"
import img10 from "../../../assets/10.jpg"

export function Dashboard(){
    return (
        <Conteiner>
            <Content>
                <Card> 
                 
                        <img src={img1} alt="deadpool" />
                        <h1>Deadpool</h1>
                        <p>R$9.99</p>
                        <button>Buy Now</button>
            
                </Card>
                <Card> 
                 
                        <img src={img2} alt="deadpool" />
                        <h1>Hulk vs Wolwerini</h1>
                        <p>R$5.97</p>
                        <button>Buy Now</button>
            
                </Card>
                <Card> 
                 
                        <img src={img3} alt="deadpool" />
                        <h1>Yoda</h1>
                        <p>R$8.69</p>
                        <button>Buy Now</button>
            
                </Card>
                <Card> 
                 
                        <img src={img4} alt="deadpool" />
                        <h1>S.H.I.E.L.D</h1>
                        <p>R$3.91</p>
                        <button>Buy Now</button>
            
                </Card>
                <Card> 
                 
                        <img src={img5} alt="deadpool" />
                        <h1>Spawn</h1>
                        <p>R$4.31</p>
                        <button>Buy Now</button>
            
                </Card>
                <Card> 
                 
                        <img src={img6} alt="deadpool" />
                        <h1>Spider Man</h1>
                        <p>R$8.61</p>
                        <button>Buy Now</button>
            
                </Card>
                <Card> 
                 
                        <img src={img7} alt="deadpool" />
                        <h1>Thor</h1>
                        <p>R$7.99</p>
                        <button>Buy Now</button>
            
                </Card>
                <Card> 
                 
                        <img src={img8} alt="deadpool" />
                        <h1>Iron Man</h1>
                        <p>R$7.98</p>
                        <button>Buy Now</button>
            
                </Card>
                <Card> 
                 
                        <img src={img9} alt="deadpool" />
                        <h1>Batman</h1>
                        <p>R$8.49</p>
                        <button>Buy Now</button>
            
                </Card>
                <Card> 
                 
                        <img src={img10} alt="deadpool" />
                        <h1>Jocker</h1>
                        <p>R$9.99</p>
                        <button>Buy Now</button>
            
                </Card>
               
            </Content>
        </Conteiner>

    )
}