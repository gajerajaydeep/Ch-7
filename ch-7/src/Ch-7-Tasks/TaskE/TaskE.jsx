import React, { Component } from 'react'
import Hero from './Hero'
import ErrorBoundary from './ErrorBoundry'

export default class TaskE extends Component {
    render() {
        return (
            <>
                <ErrorBoundary>
                    <Hero name="batman" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero name="spidermen" />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Hero name="joker" />
                </ErrorBoundary>

            </>
        )
    }
}
