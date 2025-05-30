import '../../styles/theme.css';
import '../../styles/global.css';

import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { Menu } from '../../components/Menu';
import { Logo } from '../../components/Logo';

type MainTemplateProps = {
    children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            {children}
            <Container>
                <Footer />
            </Container>
        </>
    );
}

// export default App;
// export { App };
