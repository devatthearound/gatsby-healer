import React from "react"
import { graphql } from "gatsby"

type Props = {
    data: {
        allContentfulNutritionalSupplements: {
            nodes: [{
                id: string
                price: string
                name: string
                createdAt: string
            }]
        }
    }
}

const ComponentName = ({ data }: Props) => {
    return (
        <>
            <p>{data.allContentfulNutritionalSupplements.nodes[0].name}</p>
        </>
    )
}


export const query = graphql`
  {
    allContentfulNutritionalSupplements {
      nodes {
        id
        price
        name
        createdAt
      }
    }
  }
`

export default ComponentName