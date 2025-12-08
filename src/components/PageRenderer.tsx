import { Suspense } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { ConstructorService } from '../services/ConstructorService'
import type { WebsiteType } from '../types/WebsiteType'
import type { PageType } from '../types/PageType'
import type { ComponentType } from '../types/ComponentType'
import type { PropertiesType } from '../types/PropertiesType'

export function PageRenderer({ website, page, editionMode }: { readonly website: WebsiteType; readonly page: PageType; readonly editionMode: boolean }) {
  const constructorService = new ConstructorService()
  const pageProperties = page.properties as PropertiesType
  const components: ComponentType[] = page.components
  const websiteStyles = website.styles
  return (
    <Suspense fallback={<div>{website.properties.loadingMessage}</div>}>
      {!editionMode && (
        <Helmet>
          <title>{page.title}</title>
          <meta name="description" content={page.title} />
          <meta property="og:title" content={page.title} />
          <meta property="og:description" content={page.title} />
          <meta property="og:image" content={page.title} />
        </Helmet>
      )}
      <div
        style={{
          backgroundImage: `linear-gradient(${website.styles.backgroundGradientColorStart}, ${website.styles.backgroundGradientColorEnd}), url(${website.styles.backgroundImage})`,
          backgroundSize: website.styles.backgroundSize,
          backgroundPosition: website.styles.backgroundPosition,
          width: website.styles.width,
          height: website.styles.height
        }}
      >
        <Container fluid={page.styles.fluid || undefined}  style={websiteStyles}>
          <Row id="pageRow">
            <Col
              id="pageCol"
              xs={{ span: pageProperties.size.xs.span, offset: pageProperties.size.xs.offset }}
              sm={{ span: pageProperties.size.sm.span, offset: pageProperties.size.sm.offset }}
              md={{ span: pageProperties.size.md.span, offset: pageProperties.size.md.offset }}
              lg={{ span: pageProperties.size.lg.span, offset: pageProperties.size.lg.offset }}
              style={page.styles}
            >
              <Row id="componentRow">
                {components.map((component) => (
                  constructorService.createComponent(component)
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Suspense>
  )
}
