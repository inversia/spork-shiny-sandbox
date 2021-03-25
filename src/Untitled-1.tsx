/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react'
import { union } from 'lodash'

function TextInput({
    icon = '',
    text = '',
    onChange = (newText: string) => {},
    onKeyDown = (key: string) => {}
}) {
    return <input></input>
}

function Tags({
    tags = [] as string[],
    onChange = undefined as ((tags: string[]) => void) | undefined
}) {
    return <></>
}

function TagsInput({ tags, onChange }: { tags: string[]; onChange: (tags: string[]) => void }) {
    const [text, setText] = useState('')

    const onKeyDown = useCallback((key: string) => {
        if (key === 'Enter') {
            const newTags = text.split(',').map(x => x.trim())
            onChange(union(tags, newTags))
        }
    }, [])

    return (
        <>
            <TextInput text={text} onChange={setText} onKeyDown={onKeyDown} />
            <Tags tags={tags} onChange={onChange} />
        </>
    )
}
