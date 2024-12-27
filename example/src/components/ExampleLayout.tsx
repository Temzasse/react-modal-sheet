import { useRef, type ReactNode } from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import { Link } from 'react-router';
import { FiChevronLeft } from 'react-icons/fi';
import { useScroll, motion, useTransform } from 'motion/react';
import {
  useOverlayTriggerState,
  type OverlayTriggerState,
} from 'react-stately';

import { Button, ScrollView } from './common';

type Props = {
  title: string;
  description?: string;
  children: (state: OverlayTriggerState) => ReactNode;
};

export function ExampleLayout({ title, description, children }: Props) {
  const state = useOverlayTriggerState({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ axis: 'y', container: scrollRef });
  const fabOpacity = useTransform(scrollY, [200, 220], [0, 1]);
  const fabTranslateY = useTransform(scrollY, [200, 220], [20, 0]);

  return (
    <ScrollView ref={scrollRef}>
      <Wrapper>
        <BackLink to="..">
          <FiChevronLeft size={16} />
          <span>Back</span>
        </BackLink>

        <Title>{title}</Title>

        {description && <Description>{description}</Description>}

        <Button onPress={state.open}>Open sheet</Button>

        <Content>
          <strong>Example content to make the page scrollable...</strong>

          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            sint cupiditate eum quibusdam consequuntur quae! Rem error alias
            placeat aliquid qui facere dicta veniam tenetur suscipit? Quibusdam
            eos est similique excepturi officiis sequi maxime sunt blanditiis
            nulla aperiam rem cum totam eligendi eius voluptatem, dolores
            repellendus! Iste accusantium vero, sint ipsam dicta saepe
            laudantium blanditiis et corporis aliquid deleniti quae vitae
            nostrum, repellat illo explicabo accusamus odit pariatur ex. Placeat
            dolorum in laboriosam repudiandae maiores aut incidunt eos sequi
            consectetur, autem nihil.
          </Paragraph>
          <Paragraph>
            Quae corrupti veritatis voluptates molestiae ipsam beatae sit quia
            aperiam rem! Natus earum quas, quos rerum nisi nostrum deserunt
            voluptatibus perspiciatis? Hic, animi harum quam, fugit explicabo ab
            accusantium laborum iste rem omnis obcaecati quis earum eligendi in
            inventore, mollitia asperiores numquam amet architecto porro at!
            Minus, non porro. Harum dolor nihil nemo quisquam! Omnis ipsum
            deleniti id laborum incidunt temporibus, ipsa suscipit eius dolorum
            voluptatem aut, voluptas a provident tempore. Voluptas asperiores ea
            delectus. Ipsa laborum error numquam perferendis similique
            voluptates animi suscipit dolore at modi dicta minima, asperiores
            corporis nemo, voluptate repellendus, aspernatur illo quo. Aliquid
            voluptatem excepturi odio accusamus dignissimos expedita eveniet,
            impedit consequatur. Illo fugit placeat possimus est doloremque?
            Veritatis quidem, similique sed non sint architecto aliquam
            doloribus accusamus aspernatur fugit corporis quae voluptates maxime
            at.
          </Paragraph>
          <Paragraph>
            Aut praesentium, quia architecto ea natus dicta nihil laborum
            tempora animi quas voluptas recusandae adipisci nostrum vero amet,
            nisi temporibus fugit sequi beatae. Natus fugiat ullam nemo neque
            laborum nesciunt, iure totam aut doloribus ea! Fugiat similique eos
            vel dicta maxime? Cumque hic perferendis accusantium molestias
            laboriosam quod consequuntur, cupiditate fuga accusamus cum
            explicabo, magni enim nobis velit numquam atque! Maxime et explicabo
            velit distinctio! Quis ad, ipsa eaque iusto adipisci laboriosam
            fugiat nihil blanditiis explicabo fugit repudiandae. Quaerat odio
            porro doloribus? Perferendis, sit blanditiis. Ab, eligendi impedit.
            Consectetur, officia provident! Sed dignissimos suscipit
            consequuntur fugit ullam odio incidunt quo sint enim. Ratione modi
            aperiam rem non quaerat consectetur, natus maiores impedit et
            exercitationem, suscipit facilis debitis, mollitia in molestiae sunt
            sit cum optio laboriosam? Fugit officia consequuntur eos voluptate,
            quo dicta quas! In nulla sapiente cupiditate sequi!
          </Paragraph>
          <Paragraph>
            Animi culpa cumque, et voluptas, autem odio tenetur iusto quas amet
            quidem ipsam quos dicta dolorem libero, expedita minima maiores
            exercitationem esse eos. Vero cumque molestias porro iusto neque,
            officiis quaerat nemo. Sunt atque corrupti nobis id sapiente quidem.
            Animi officiis corrupti dicta, excepturi, quod, reprehenderit nam
            sint accusamus deserunt obcaecati beatae illum ipsum minus nisi
            necessitatibus omnis aspernatur eligendi saepe aliquid aperiam.
            Ipsam, perspiciatis? Temporibus iure cumque optio accusamus itaque
            laboriosam nemo facilis earum, asperiores libero. Quia eveniet
            inventore asperiores fuga impedit deserunt iure magni ipsam tenetur.
            Eos omnis officia unde quisquam natus eius beatae aperiam. Facilis
            vitae veniam aut ducimus consequatur excepturi labore modi dolorum
            eveniet? Ex maxime placeat dolore minima hic at necessitatibus
            similique voluptatem facilis, ipsa nisi nihil tempora nemo mollitia
            nulla dolorum dolor fuga cupiditate veniam assumenda, voluptas,
            aspernatur nobis! Minima magni perspiciatis doloribus officia
            veritatis, ratione, quas dolore eos impedit numquam doloremque ex
            delectus!
          </Paragraph>
        </Content>

        <ButtonWrapper style={{ opacity: fabOpacity, y: fabTranslateY }}>
          <Button onPress={state.open}>Open sheet</Button>
        </ButtonWrapper>

        {children(state)}

        <MadeBy>
          <p>
            Made in Finland 🇫🇮 by{' '}
            <a
              href="https://x.com/teemu_taskula"
              target="_blank"
              rel="noopener noreferrer"
            >
              Teemu Taskula
            </a>
          </p>
        </MadeBy>

        <SheetOverrides />
      </Wrapper>
    </ScrollView>
  );
}

const maxWidth = 720;

const SheetOverrides = createGlobalStyle`
  @media (min-width: 720px) {
    .react-modal-sheet-container {
      max-width: ${maxWidth}px;
      left: calc(50% - ${maxWidth / 2}px) !important;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  padding-bottom: 80px;
  max-width: ${maxWidth}px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 900;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 20px;
  text-wrap: balance;
  line-height: 1.5;
`;

const Content = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  margin-top: 24px;
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  line-height: 1.5;
  font-size: 16px;
  color: #888;
`;

const ButtonWrapper = styled(motion.div)`
  position: fixed;
  bottom: max(16px, env(safe-area-inset-bottom));
  right: 16px;

  & button {
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.4);
  }
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  padding-left: 2px;
  border-radius: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const MadeBy = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  padding-top: 16px;

  p {
    margin: 0;
  }

  a {
    color: #000;
    font-weight: 500;
    text-decoration: underline;
  }
`;
