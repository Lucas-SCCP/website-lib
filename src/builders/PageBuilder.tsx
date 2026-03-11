import { Suspense } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { Menu } from '../layouts/Menu'
import { ComponentFactory } from '../factories/ComponentFactory'
import type { WebsiteType } from '../types/WebsiteType'
import type { PageType } from '../types/PageType'
import type { ComponentType } from '../types/ComponentType'

export function PageBuilder({ website, page, editionMode }: { readonly website: WebsiteType; readonly page: PageType; readonly editionMode: boolean }) {
  const componentFactory = new ComponentFactory()
  const pageProperties = page.properties
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
      <Menu page={page} />
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
          <Row id="page-row">
            <Col
              id="page-col"
              xs={{ span: pageProperties.size.xs.span, offset: pageProperties.size.xs.offset }}
              sm={{ span: pageProperties.size.sm.span, offset: pageProperties.size.sm.offset }}
              md={{ span: pageProperties.size.md.span, offset: pageProperties.size.md.offset }}
              lg={{ span: pageProperties.size.lg.span, offset: pageProperties.size.lg.offset }}
              style={page.styles}
            >
              <Row id="component-row">
                {components.map((component) => (
                  componentFactory.build(component)
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Suspense>
  )
}
