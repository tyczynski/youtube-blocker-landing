import React, { useState } from 'react'
import { Option } from './Option'
import { IModifierSign, GModifierSign } from './modifierSigns'
import {
  Background,
  Container,
  ExampleBlock,
  Results,
  Result,
  Options,
  Modifiers,
  Modifier,
  Title,
  Expressions,
  Expression,
} from './HowToUse.style'

const results = [
  'YouTube Blocker',
  'YouTube~Blocke',
  'YouTube-Blocker',
  'YouTube-Blocke',
  'youtube-Blckr',
  'YouTube',
  'youtube',
]

export const HowToUse: React.FC = () => {
  const [active, setActive] = useState('regex')
  const [global, setGlobal] = useState(false)
  const [caseIn, setCaseIn] = useState(false)

  /**
   * Test if result match to expression
   *
   * @param result
   */
  const testResult = (result: string) => {
    if (active === 'regex') {
      let modifiers = ''
      if (global) modifiers += 'g'
      if (caseIn) modifiers += 'i'
      const r = new RegExp('^Y(\\w*?e)(\\s|-)(B\\w+?r)', modifiers)
      return r.test(result)
    } else {
      let val = result
      if (caseIn) val = val.toLowerCase()
      if (global) {
        return val.includes('youtube')
      }

      return val === 'youtube'
    }
  }

  return (
    <Background id="how-to-use">
      <Container>
        <ExampleBlock>
          <div>
            <Title>Expression</Title>

            <Expressions>
              <Expression $visible={active === 'regex'}>
                ^Y(\w*?e)(\s|-)(B\w+?r)
              </Expression>
              <Expression $visible={active === 'text'}>youtube</Expression>
            </Expressions>
          </div>
          <div>
            <Title $highlight>What will get block</Title>

            <Results>
              {results.map((result) => (
                <Result key={result} $active={testResult(result)}>
                  <button type="button">{result}</button>
                </Result>
              ))}
            </Results>
          </div>
        </ExampleBlock>
        <Options>
          <Option
            title="Regex"
            description="If you can write Regex expressions then the sky is not the limit."
            number={1}
            isActive={active === 'regex'}
            onClick={() => setActive('regex')}
          />

          <Option
            title="Text"
            description="You can easily create an expression using plain text with the modifier <i>global</i> and <i>case insensitive</i>."
            number={2}
            isActive={active === 'text'}
            onClick={() => setActive('text')}
          />

          <Modifiers>
            <Title>Modifiers</Title>
            <Modifier onClick={() => setGlobal(!global)}>
              <GModifierSign $active={global} />
              global
            </Modifier>

            <Modifier $margin onClick={() => setCaseIn(!caseIn)}>
              <IModifierSign $active={caseIn} />
              case Insensitive
            </Modifier>
          </Modifiers>
        </Options>
      </Container>
    </Background>
  )
}
