### Roster Details<br />
Team Name: Bushido Wildcats<br />
Roster: cacan, cadnyx, Darendeli, Muk0s, Vej<br />
Global Rank: [88](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [66]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  980.9<br />
<br />
Final Rank Value (980.9) = Starting Rank Value (842.4) + Head To Head Adjustments (138.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.361[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.264[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.232<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 842.4
- 400 + ( ( 0.232 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 842.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           56 |       99 | 2026-09-04 | 1win                 | L   | 1.000      | -            | -                | -                | -         |    -4.43 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           55 |      210 | 2026-09-01 | Permitta             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.39 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           54 |      242 | 2026-08-31 | ex-RUSTEC            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.21 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           53 |      259 | 2026-08-30 | ex-Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -13.10 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           52 |      298 | 2026-08-30 | Nordic Partners      | W   | 1.000      | 0.371        | 0.008 (0.003)    | -                | 0 (0.000) |    10.81 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           51 |      314 | 2026-08-30 | Entropy              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.39 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           50 |      350 | 2026-08-29 | UNiTY                | L   | 1.000      | -            | -                | -                | -         |   -17.12 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           49 |      366 | 2026-08-29 | Endless Journey      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.86 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           48 |      383 | 2026-08-28 | SINNERS              | L   | 1.000      | -            | -                | -                | -         |   -10.63 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           47 |      406 | 2026-08-28 | Metizport            | W   | 1.000      | 0.371        | 0.020 (0.008)    | 0.586 (0.217)    | 0 (0.000) |    20.08 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           46 |      499 | 2026-08-26 | G2 Ares              | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.684 (0.263)    | 0 (0.000) |    14.24 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           45 |      557 | 2026-08-24 | Honvéd               | W   | 1.000      | 0.371        | 0.011 (0.004)    | 0.869 (0.322)    | 0 (0.000) |    10.40 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           44 |      568 | 2026-08-24 | PCIFIC               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.74 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           43 |      612 | 2026-08-22 | benched gods         | L   | 1.000      | -            | -                | -                | -         |   -20.66 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           42 |      617 | 2026-08-22 | Noir Verse           | L   | 1.000      | -            | -                | -                | -         |   -21.00 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           41 |      624 | 2026-08-22 | Lavked               | W   | 1.000      | 0.384        | 0.009 (0.004)    | 0.826 (0.317)    | 0 (0.000) |    13.06 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           40 |      644 | 2026-08-21 | Honvéd               | W   | 1.000      | 0.303        | 0.011 (0.003)    | 0.869 (0.263)    | -         |    11.24 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           39 |      660 | 2026-08-20 | Leo                  | L   | 1.000      | -            | -                | -                | -         |   -19.01 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           38 |      663 | 2026-08-20 | mellren              | L   | 1.000      | -            | -                | -                | -         |   -22.32 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           37 |      677 | 2026-08-20 | Raccoons             | W   | 1.000      | -            | -                | -                | -         |     4.25 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           36 |      683 | 2026-08-19 | Honvéd               | L   | 1.000      | -            | -                | -                | -         |   -21.79 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           35 |      690 | 2026-08-19 | Black Phoenix        | L   | 1.000      | -            | -                | -                | -         |   -17.99 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           34 |      704 | 2026-08-19 | Endless Journey      | W   | 1.000      | -            | -                | -                | -         |     6.95 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           33 |      717 | 2026-08-18 | Misa                 | W   | 1.000      | 0.303        | -                | 0.641 (0.194)    | -         |     6.35 | cacan, cadnyx, Darendeli, ekg, Vej   |
|           32 |      739 | 2026-08-17 | Permitta             | W   | 1.000      | 0.384        | -                | 0.683 (0.262)    | -         |     8.70 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           31 |      740 | 2026-08-17 | Inner Circle Academy | W   | 1.000      | 0.344        | -                | 0.744 (0.256)    | -         |     9.25 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           30 |      777 | 2026-08-16 | Fortress             | W   | 1.000      | -            | -                | -                | -         |     5.88 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           29 |      782 | 2026-08-16 | Nexus                | W   | 1.000      | -            | -                | -                | -         |    16.79 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           28 |      863 | 2026-08-13 | ex-RUSTEC            | W   | 1.000      | 0.344        | 0.018 (0.006)    | 0.908 (0.313)    | -         |    16.61 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           27 |      897 | 2026-08-12 | ex-MANA              | W   | 1.000      | -            | -                | -                | -         |     8.33 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           26 |     1099 | 2026-08-04 | ex-MANA              | W   | 0.967      | -            | -                | -                | -         |     8.64 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           25 |     1106 | 2026-08-04 | Leo                  | W   | 0.966      | -            | -                | -                | -         |    15.53 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           24 |     1123 | 2026-08-03 | Noir Verse           | W   | 0.960      | -            | -                | -                | -         |    12.26 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           23 |     1149 | 2026-08-02 | Fire Flux            | W   | 0.953      | 0.317        | 0.010 (0.003)    | -                | -         |    11.15 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           22 |     1171 | 2026-08-02 | Mai Tai              | W   | 0.952      | -            | -                | -                | -         |     5.91 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           21 |     1731 | 2026-07-13 | QUAZAR               | L   | 0.820      | -            | -                | -                | -         |   -10.06 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           20 |     1747 | 2026-07-12 | SPARTA               | W   | 0.814      | 0.317        | -                | 0.904 (0.233)    | -         |    12.12 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           19 |     1761 | 2026-07-12 | MOUZ NXT             | W   | 0.812      | -            | -                | -                | -         |    11.89 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           18 |     2456 | 2026-06-05 | ex-RUBY              | L   | 0.566      | -            | -                | -                | -         |    -4.37 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           17 |     2484 | 2026-06-04 | Nemiga               | W   | 0.557      | 0.384        | 0.058 (0.012)    | -                | -         |    13.09 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           16 |     2519 | 2026-06-02 | DragonClaw           | W   | 0.546      | 0.384        | 0.013 (0.003)    | -                | -         |     9.06 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           15 |     2559 | 2026-05-31 | HEROIC Academy       | W   | 0.532      | -            | -                | -                | -         |     4.27 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           14 |     2613 | 2026-05-30 | Phantom              | L   | 0.525      | -            | -                | -                | -         |    -4.22 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           13 |     2732 | 2026-05-27 | Privateer            | L   | 0.506      | -            | -                | -                | -         |   -10.85 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           12 |     2744 | 2026-05-27 | RBLS                 | W   | 0.505      | -            | -                | -                | -         |     7.70 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           11 |     2756 | 2026-05-26 | KOLESIE              | L   | 0.500      | -            | -                | -                | -         |    -6.05 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|           10 |     2782 | 2026-05-26 | DONSTU               | W   | 0.498      | -            | -                | -                | -         |     7.03 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|            9 |     2842 | 2026-05-24 | Misa                 | L   | 0.486      | -            | -                | -                | -         |   -10.49 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|            8 |     2851 | 2026-05-24 | Hashiras             | W   | 0.485      | -            | -                | -                | -         |     4.87 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|            7 |     2920 | 2026-05-23 | Just Players         | W   | 0.477      | -            | -                | -                | -         |     9.49 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|            6 |     2950 | 2026-05-22 | Lilmix               | W   | 0.472      | -            | -                | -                | -         |     5.00 | cacan, cadnyx, Darendeli, Muk0s, Vej |
|            5 |     2974 | 2026-05-21 | Rune Eaters          | L   | 0.467      | -            | -                | -                | -         |    -2.71 | cacan, cadnyx, Darendeli, Etsu, Vej  |
|            4 |     5579 | 2026-03-19 | STATE                | L   | 0.046      | -            | -                | -                | -         |    -0.45 | cadnyx, Darendeli, eNs, Maiko, Vej   |
|            3 |     5608 | 2026-03-18 | Lilmix               | W   | 0.041      | -            | -                | -                | -         |     0.14 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            2 |     5668 | 2026-03-17 | K27                  | L   | 0.032      | -            | -                | -                | -         |    -0.03 | cadnyx, Darendeli, eNs, scolleN, Vej |
|            1 |     5716 | 2026-03-16 | cirahvi              | W   | 0.026      | -            | -                | -                | -         |     0.19 | cadnyx, Darendeli, eNs, scolleN, Vej |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,583.48)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-30 |      1.000 | $4,000.00      | $4,000.00       |
| 2026-08-04 |      0.967 | $4,000.00      | $3,867.07       |
| 2026-06-06 |      0.573 | $1,250.00      | $716.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
