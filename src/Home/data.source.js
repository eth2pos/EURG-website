import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://i.imgur.com/dXkH57i.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item koha01z31n-editor_css',
        children: {
          href: '#',
          children: [{ children: '导航一', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title koha0jlubke-editor_css',
    children: 'https://i.imgur.com/Cf6GYuI.png',
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <span>
          <p>A Stablecoin Backed by ETH2.0 Staking and Staking Rewards</p>
        </span>
      </span>
    ),
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>What is EURG</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/money-bag_1f4b0.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>1:1 EUR Peg</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    EURG is a stablecoin cryptocurrency 1:1 pegged to EUR.&nbsp;
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/gem-stone_1f48e.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>ETH Collateralized</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    Each EURG is minted from the same dollar worth
                    collateralized ETH. Users who deposit $1000 worth ETH can
                    mint the 1000 EURG.
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/party-popper_1f389.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Mining While Holding</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    Whenever a new EURG is minted, previous holders could get
                    rewards. Rewards come from the new ETH produced in ETH2.0
                    staking program.{' '}
                  </p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children:
      'https://cdn.shopifycdn.net/s/files/1/1061/1924/products/Money_with_Wings_Emoji_large.png?v=1571606064',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <span>
          <p>EURG Price Stability</p>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          Ethereum core developer team is upgrading ETH to make it more
          scalable, more secure and more sustainable. The Beacon Chain is the
          first addition to ETH2.0 network, transferring from PoW to PoS. The
          official ETH2.0 staking reward is 8.1%, and produces new ETH every 6
          minutes. The staked ETH and newly produced ETH become the value
          backing EURG.{' '}
        </p>
      </span>
    ),
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children:
      'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>Mining While Holding</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          In the traditional financial world, newly issued currencies create
          inflation, which results in the reduction of purchasing power per unit
          of money. Every holder of that currency suffers from a loss of real
          value.
        </p>
        <p>
          Instead of reducing purchasing power, whenever a new EURG is minted,
          previous holders could get reward. Again, the rewards are backed by
          new ETH generated from ETH2.0 staking program. EURG team also creates
          a model of FTC to further accomplish the goal.&nbsp;
        </p>
      </span>
    ),
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children:
      'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>First Transfer Contract (FTC)</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <span>
          <p>
            After the transfer is broadcasted, the mutual relationship between
            you and your recipient is forever locked on the blockchain by FTC,
            and the hierarchy is up to 6 levels.{' '}
          </p>
          <p>
            You will get bonus rewards from total EURG of the 6 levels below,
            currently at 1% APY.
          </p>
          <p>
            Through involving more people in EURG, you could take the bonus in
            minting every additional EURG.
          </p>
        </span>
      </span>
    ),
  },
};
export const Feature21DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children:
      'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/274/currency-exchange_1f4b1.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <span>
          <p>Exchange of EURG</p>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <span>
          <p>
            As a stablecoin, EURG is designed as an EUR peg. You can exchange
            EURG like any other stablecoins.
          </p>
          <p>
            The official way to burn EURG is to exchange EURG to ETH through the
            official website. There are two exchange options.
          </p>
          <p>Option 1: exchange immediately, and there will be a 10% fee.</p>
          <p>Option 2: Be in the line, and there will be 0 fee.</p>
          <p />
        </span>
      </span>
    ),
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>
          <span>©2021 EURG&nbsp;All Rights Reserved</span>
        </span>
      </span>
    ),
  },
};
