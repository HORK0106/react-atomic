import styled from "styled-components"
import React from 'react'
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
    const { children } = props;
    return (
        <SButton>{children}</SButton>
    )
}

const SButton = styled(BaseButton)`
    background-color: #40514e;
`