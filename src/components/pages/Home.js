import self from '../../assets/images/self.jpg';
import Image from 'react-bootstrap/Image'

const styles = {
    self: {
        height: "600px",
        width: "450px"
    },
  };

function Home() {
    return (
        <container style={styles.margin}>
        <picture>
            <div>
                <img src={self} alt="Joel Cunningham" style={styles.self} />
                <h2>Joel Cunningham</h2>
            </div>
        </picture>
        <div>
            <h2>About Me</h2>
            <p>text to come later</p>
        </div>
    </container>
    )
}

export default Home