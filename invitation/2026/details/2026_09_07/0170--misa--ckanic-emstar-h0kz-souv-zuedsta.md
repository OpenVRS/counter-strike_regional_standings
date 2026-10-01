### Roster Details<br />
Team Name: Misa<br />
Roster: Ckanic, EMSTAR, h0kz, souv, Zuedsta<br />
Global Rank: [170](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [123]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  743.2<br />
<br />
Final Rank Value (743.2) = Starting Rank Value (730.5) + Head To Head Adjustments (12.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.236[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.171[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.5
- 400 + ( ( 0.174 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 730.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           69 |      171 | 2026-09-01 | UNiTY                | L   | 1.000      | -            | -                | -                | -         |    -7.22 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           68 |      202 | 2026-08-31 | BAKS                 | L   | 1.000      | -            | -                | -                | -         |    -7.70 | cyber, EMSTAR, h0kz, souv, Zuedsta       |
|           67 |      213 | 2026-08-31 | Mai Tai              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.51 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           66 |      235 | 2026-08-30 | Entropy              | L   | 1.000      | -            | -                | -                | -         |   -13.92 | cyber, EMSTAR, h0kz, souv, Zuedsta       |
|           65 |      251 | 2026-08-30 | BAKS                 | W   | 1.000      | 0.317        | 0.010 (0.003)    | -                | 0 (0.000) |    24.02 | cyber, EMSTAR, h0kz, souv, Zuedsta       |
|           64 |      370 | 2026-08-28 | ex-MANA              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.59 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           63 |      410 | 2026-08-27 | Permitta             | L   | 1.000      | -            | -                | -                | -         |   -14.10 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           62 |      669 | 2026-08-19 | ex-Sashi Academy     | L   | 1.000      | -            | -                | -                | -         |   -18.13 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           61 |      671 | 2026-08-19 | The Last Resort      | L   | 1.000      | -            | -                | -                | -         |    -9.82 | Ckanic, EMSTAR, Mertowsk1, souv, Zuedsta |
|           60 |      684 | 2026-08-18 | Strael Bora          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    16.53 | Ckanic, EMSTAR, Mertowsk1, souv, Zuedsta |
|           59 |      689 | 2026-08-18 | Bushido Wildcats     | L   | 1.000      | -            | -                | -                | -         |    -6.34 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           58 |      700 | 2026-08-18 | Color                | L   | 1.000      | -            | -                | -                | -         |    -6.03 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           57 |      741 | 2026-08-16 | UNiTY                | L   | 1.000      | -            | -                | -                | -         |   -10.23 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           56 |      761 | 2026-08-15 | INOX Division        | L   | 1.000      | -            | -                | -                | -         |    -4.83 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           55 |      770 | 2026-08-15 | Leo                  | W   | 1.000      | 0.317        | -                | 0.421 (0.133)    | 0 (0.000) |    20.54 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           54 |      780 | 2026-08-15 | ex-MANA              | W   | 1.000      | 0.303        | 0.004 (0.001)    | 0.553 (0.167)    | 0 (0.000) |    16.55 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           53 |      784 | 2026-08-15 | Mai Tai              | W   | 1.000      | 0.344        | -                | 0.353 (0.121)    | 0 (0.000) |    10.72 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           52 |      792 | 2026-08-14 | EAC                  | L   | 1.000      | -            | -                | -                | -         |    -4.87 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           51 |      809 | 2026-08-14 | Leo                  | W   | 1.000      | 0.317        | -                | 0.421 (0.133)    | 0 (0.000) |    22.64 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           50 |      824 | 2026-08-14 | Enjoy                | L   | 1.000      | -            | -                | -                | -         |   -10.07 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           49 |     1102 | 2026-08-03 | MOUZ NXT             | L   | 0.965      | -            | -                | -                | -         |   -15.42 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           48 |     1125 | 2026-08-02 | WBT                  | L   | 0.959      | -            | -                | -                | -         |   -12.10 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           47 |     1146 | 2026-08-02 | Jam                  | W   | 0.957      | 0.317        | 0.014 (0.004)    | -                | 0 (0.000) |    27.15 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           46 |     1267 | 2026-07-29 | Bebop                | L   | 0.932      | -            | -                | -                | -         |   -12.17 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           45 |     1293 | 2026-07-28 | Falcons Force        | L   | 0.925      | -            | -                | -                | -         |   -15.20 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           44 |     1332 | 2026-07-27 | Black Phoenix        | W   | 0.918      | 0.396        | 0.017 (0.006)    | 0.952 (0.346)    | 0 (0.000) |    20.50 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           43 |     1379 | 2026-07-26 | Mai Tai              | L   | 0.910      | -            | -                | -                | -         |   -14.87 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           42 |     1437 | 2026-07-24 | Privateer            | W   | 0.899      | -            | -                | -                | -         |    13.93 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           41 |     1464 | 2026-07-23 | ROUNDS               | W   | 0.892      | -            | -                | -                | -         |    12.04 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           40 |     1521 | 2026-07-21 | Honvéd               | L   | 0.878      | -            | -                | -                | -         |    -9.09 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           39 |     1534 | 2026-07-20 | Lilmix               | W   | 0.872      | -            | -                | -                | -         |    12.11 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           38 |     1538 | 2026-07-20 | SAW Youngsters       | L   | 0.871      | -            | -                | -                | -         |   -12.29 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           37 |     1546 | 2026-07-19 | ex-MANA              | W   | 0.866      | 0.344        | -                | 0.553 (0.165)    | -         |    13.89 | Ckanic, EMSTAR, h0kz, souv, Zuedsta      |
|           36 |     1585 | 2026-07-18 | benched gods         | L   | 0.859      | -            | -                | -                | -         |   -12.40 | Ckanic, EMSTAR, Mertowsk1, souv, Zuedsta |
|           35 |     1616 | 2026-07-17 | OlyBet               | W   | 0.852      | -            | -                | -                | -         |     8.61 | Ckanic, EMSTAR, Mertowsk1, souv, Zuedsta |
|           34 |     1634 | 2026-07-17 | G2 Ares              | L   | 0.850      | -            | -                | -                | -         |    -5.54 | Ckanic, EMSTAR, Mertowsk1, souv, Zuedsta |
|           33 |     1664 | 2026-07-16 | Entropy              | W   | 0.843      | 0.384        | 0.008 (0.003)    | 0.571 (0.185)    | -         |    16.84 | Ckanic, EMSTAR, Mertowsk1, souv, Zuedsta |
|           32 |     1717 | 2026-07-12 | QUAZAR               | L   | 0.820      | -            | -                | -                | -         |    -5.42 | Ckanic, EMSTAR, Mertowsk1, souv, Zuedsta |
|           31 |     1731 | 2026-07-12 | fnatic               | L   | 0.818      | -            | -                | -                | -         |    -1.00 | Ckanic, EMSTAR, Mertowsk1, souv, Zuedsta |
|           30 |     1886 | 2026-07-02 | WBT                  | L   | 0.751      | -            | -                | -                | -         |   -10.50 | Ckanic, EMSTAR, Mertowsk1, souv, Zuedsta |
|           29 |     1910 | 2026-07-01 | Inner Circle Academy | L   | 0.744      | -            | -                | -                | -         |    -6.20 | Ckanic, EMSTAR, Mertowsk1, souv, Zuedsta |
|           28 |     1913 | 2026-07-01 | Lilmix               | L   | 0.743      | -            | -                | -                | -         |   -13.91 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           27 |     1927 | 2026-06-30 | Endless Journey      | L   | 0.737      | -            | -                | -                | -         |   -10.65 | EMSTAR, Mertowsk1, Obyj, souv, Zuedsta   |
|           26 |     1992 | 2026-06-27 | Wampirki             | W   | 0.717      | -            | -                | -                | -         |     4.83 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           25 |     1996 | 2026-06-27 | WBT                  | W   | 0.717      | 0.333        | 0.008 (0.002)    | 0.539 (0.129)    | -         |    11.65 | Ckanic, EMSTAR, Mertowsk1, souv, Zuedsta |
|           24 |     2229 | 2026-06-13 | Butterfly            | L   | 0.623      | -            | -                | -                | -         |    -3.31 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           23 |     2324 | 2026-06-09 | Lavked               | L   | 0.597      | -            | -                | -                | -         |    -4.03 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           22 |     2335 | 2026-06-08 | eternal premium      | L   | 0.592      | -            | -                | -                | -         |   -12.00 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           21 |     2420 | 2026-06-05 | JUMBO                | W   | 0.572      | -            | -                | -                | -         |     3.71 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           20 |     2429 | 2026-06-05 | Butterfly            | W   | 0.571      | 0.371        | 0.034 (0.007)    | 0.841 (0.178)    | -         |    15.50 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           19 |     2490 | 2026-06-02 | DragonClaw           | W   | 0.551      | 0.333        | 0.013 (0.002)    | -                | -         |    11.79 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           18 |     2506 | 2026-06-01 | Falcons Force        | L   | 0.546      | -            | -                | -                | -         |    -9.09 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           17 |     2676 | 2026-05-28 | Hashiras             | W   | 0.517      | -            | -                | -                | -         |     7.85 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           16 |     2717 | 2026-05-27 | SAW Youngsters       | W   | 0.510      | -            | -                | -                | -         |     7.97 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           15 |     2745 | 2026-05-26 | G2 Ares              | L   | 0.504      | -            | -                | -                | -         |    -2.65 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           14 |     2791 | 2026-05-25 | Permitta             | L   | 0.497      | -            | -                | -                | -         |    -6.27 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           13 |     2814 | 2026-05-24 | Bushido Wildcats     | W   | 0.492      | 0.303        | 0.017 (0.003)    | 1.000 (0.149)    | -         |    10.63 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           12 |     2878 | 2026-05-23 | Bebop                | L   | 0.484      | -            | -                | -                | -         |    -6.78 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           11 |     3039 | 2026-05-19 | Bebop                | L   | 0.457      | -            | -                | -                | -         |    -6.50 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|           10 |     3131 | 2026-05-15 | Endless Journey      | L   | 0.432      | -            | -                | -                | -         |    -6.66 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|            9 |     3773 | 2026-04-26 | UPGRADE              | L   | 0.306      | -            | -                | -                | -         |    -1.43 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|            8 |     3846 | 2026-04-25 | aAa                  | L   | 0.299      | -            | -                | -                | -         |    -4.96 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|            7 |     3939 | 2026-04-23 | 9INE                 | W   | 0.286      | 0.384        | 0.018 (0.002)    | -                | -         |     7.76 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|            6 |     3982 | 2026-04-22 | Subtop De France     | W   | 0.279      | -            | -                | -                | -         |     3.10 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|            5 |     5027 | 2026-03-28 | NEW VISION           | L   | 0.113      | -            | -                | -                | -         |    -1.76 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|            4 |     5111 | 2026-03-27 | ROUNDS               | W   | 0.106      | -            | -                | -                | -         |     1.38 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|            3 |     5760 | 2026-03-14 | Young Ninjas         | L   | 0.019      | -            | -                | -                | -         |    -0.38 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|            2 |     5815 | 2026-03-13 | Inner Circle Academy | W   | 0.012      | -            | -                | -                | -         |     0.27 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |
|            1 |     5862 | 2026-03-12 | DONSTU               | L   | 0.006      | -            | -                | -                | -         |    -0.07 | Ckanic, Mertowsk1, rim3, souv, Zuedsta   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($298.30)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.119 | $2,500.00      | $298.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
