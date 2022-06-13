import React, {MouseEvent, useState} from "react";
import GlobalFonts from './fonts'
import {Container, PageBody, Panel} from "./styles";

const ExpandingCard: React.FC = () => {
    const [activeId, setActiveId] = useState<string | undefined>(undefined)

    const onClickPanel = (event: MouseEvent<HTMLElement>) => {
        if(event.currentTarget && event.currentTarget.id){
            setActiveId(event.currentTarget.id)
        }
    }

    return <PageBody>
        <GlobalFonts/>
        <Container>
            <Panel
                className={activeId == 'p1' ? 'active' : ''}
                onClick={onClickPanel}
                id="p1"
                imgUrl={'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}>
                <h3>Explore The World</h3>
            </Panel>
            <Panel
                className={activeId == 'p2' ? 'active' : ''}
                onClick={onClickPanel}
                id="p2"
                imgUrl='https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'>
                <h3>Wild Forest</h3>
            </Panel>
            <Panel
                className={activeId == 'p3' ? 'active' : ''}
                onClick={onClickPanel}
                id="p3"
                imgUrl='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'>
                <h3>Sunny Beach</h3>
            </Panel>
            <Panel
                className={activeId == 'p4' ? 'active' : ''}
                onClick={onClickPanel}
                id="p4"
                imgUrl='https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'>
                <h3>City on Winter</h3>
            </Panel>
            <Panel
                className={activeId == 'p5' ? 'active' : ''}
                onClick={onClickPanel}
                id="p5"
                imgUrl='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'>
                <h3>Mountains - Clouds</h3>
            </Panel>
        </Container>
    </PageBody>
}

export default ExpandingCard;