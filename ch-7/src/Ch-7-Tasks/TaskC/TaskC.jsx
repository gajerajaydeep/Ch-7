import React from 'react'
import Tab from './Tab'
import Tabs from './Tabs'

export default function TaskC() {
    return (
        <>
            <Tabs >
                <Tab label="Tab 1">
                    <p>Content for Tab 1</p>
                </Tab>
                <Tab label="Tab 2">
                    <p>Content for Tab 2</p>
                </Tab>
                <Tab label="Tab 3">
                    <p>Content for Tab 3</p>
                </Tab>
            </Tabs>
        </>
    )
}
