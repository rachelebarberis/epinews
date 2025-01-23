import { Article } from "../Types/Article"
import { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import SingleArticle from "../Components/SingleArticle"
const MainComponents = () => {
    const [article, setArticle] = useState<Article[]>([])
   
    const getArticle= async() => {
        try {
            const response = await fetch(
                "https://api.spaceflightnewsapi.net/v4/articles"
            )
            if (response.ok) {
              const data = await response.json()
              setArticle(data.results)
            } else {
              throw new Error('errore nel recupero dei film')
            }
          } catch (error) {
            console.log('error', error)
          }
        }

        useEffect(() => {
            getArticle()
          }, [])

          return (
            <div>
              <Container>
                <Row className="justify-content-center">
                  {article.map((article) => {
                    return <SingleArticle key={article.id} article={article} />
                  })}
                </Row>
              </Container>
            </div>
          )
    } 

export default MainComponents