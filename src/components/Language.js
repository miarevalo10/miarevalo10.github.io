import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { Box } from 'rebass/styled-components';
import LinkAnimated from './LinkAnimated';

const languageName = {
  en: "English",
  es: "Español"
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            currentLocale !== language && <Box key={language} ml={[3, 3]} color="background" fontSize={[2, 3]}>
              <LinkAnimated
                      onClick={() => changeLocale(language)}>
                {languageName[language]}
              </LinkAnimated>
            </Box>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language