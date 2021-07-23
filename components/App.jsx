import React from 'react'
import Memo from './memo/memo'
import Counter from './counter/Counter'
import Layout from './context/Layout'
import Index from './styledComponent/index'
import Game from './game/Game'
import Comment from './comment/Commnet'
import {Counter as TestCounter} from './test/Counter'
const App = () => {
    return (
        <>
            {/* <Memo /> */}
            {/* <Counter /> */}
            {/* <Layout /> */}
            {/* <Index /> */}
            {/* <Game /> */}
            {/* <Comment /> */}
            <TestCounter />
        </>
    )
}

export default App