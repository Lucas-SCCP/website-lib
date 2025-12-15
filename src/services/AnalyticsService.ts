import ReactGAImport from 'react-ga4'

type ReactGAType = typeof ReactGAImport;

const ReactGA: ReactGAType =
  (ReactGAImport as unknown as { default: ReactGAType })?.default ??
  ReactGAImport;

class AnalyticsService {
  private initialized = false;

  initialize(trackingId: string) {
    if (!trackingId || this.initialized) return;
    ReactGA.initialize(trackingId);
    this.initialized = true;
  }
  pageView(page: string, title: string) {
    ReactGA.send({ hitType: "pageview", page: page, title: title });
  }
  sendEvent(category: string, action: string, label?: string, value?: number) {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
      value: value,
      nonInteraction: true,
      transport: "xhr",
    });
  }
}

export const analyticsService = new AnalyticsService();
