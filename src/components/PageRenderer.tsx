import { Suspense } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { ConstructorService } from '../services/ConstructorService'
import type { WebsiteType } from '../types/WebsiteType'
import type { PageType } from '../types/PageType'
import type { ComponentType } from '../types/ComponentType'
import type { PropertiesType } from '../types/PropertiesType'
import type { StylesType } from '../types/StylesType'

export function PageRenderer({ website, page }: { readonly website: WebsiteType; readonly page: PageType}) {
  const constructorService = new ConstructorService()
  const websiteStyles = website.styles as StylesType
  const pageProperties = page.properties as PropertiesType
  const components: ComponentType[] = page.components
  return (
    <Suspense fallback={<div>{website.properties.loadingMessage}</div>}>
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.title} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.title} />
        <meta property="og:image" content={page.title} />
      </Helmet>
      <Container
        fluid
        style={{
          backgroundImage: websiteStyles.backgroundImage,
          backgroundSize: websiteStyles.backgroundSize,
          backgroundPosition: websiteStyles.backgroundPosition,
          width: websiteStyles.width
        }}
      >
        <Row id="pageRow">
          <Col
            id="pageCol"
            xs={{ span: pageProperties.size.xs.span, offset: pageProperties.size.xs.offset }}
            sm={{ span: pageProperties.size.sm.span, offset: pageProperties.size.sm.offset }}
            md={{ span: pageProperties.size.md.span, offset: pageProperties.size.md.offset }}
            lg={{ span: pageProperties.size.lg.span, offset: pageProperties.size.lg.offset }}
            style={page.styles}
          >
            {components.map((component) => (
              <Row id="componentRow" key={component.id}>
                {constructorService.createComponent(component)}
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </Suspense>
  )
}
