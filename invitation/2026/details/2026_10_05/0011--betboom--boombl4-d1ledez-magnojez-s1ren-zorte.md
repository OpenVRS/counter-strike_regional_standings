### Roster Details<br />
Team Name: BETBOOM<br />
Roster: Boombl4, d1Ledez, Magnojez, S1ren, zorte<br />
Global Rank: [11](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [9]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1595.8<br />
<br />
Final Rank Value (1595.8) = Starting Rank Value (1525.3) + Head To Head Adjustments (70.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.703[<sup>1</sup>](#table2)
- Bounty Collected: 0.616[<sup>2</sup>](#table1)
- Opponent Network: 0.291[<sup>2</sup>](#table1)
- LAN Wins: 0.642[<sup>2</sup>](#table1)

The average of these factors is 0.563<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1525.3
- 400 + ( ( 0.563 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 1525.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     1028 | 2026-09-12 | G2                | L   | 1.000      | -            | -                | -                | -         |    -6.02 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           28 |     1151 | 2026-09-10 | MIBR              | W   | 1.000      | 1.000        | 0.421 (0.421)    | 0.484 (0.484)    | 1 (1.000) |    14.93 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           27 |     1206 | 2026-09-09 | Astralis          | W   | 1.000      | 1.000        | 0.344 (0.344)    | 0.478 (0.478)    | 1 (1.000) |    20.89 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           26 |     1256 | 2026-09-08 | BIG               | W   | 1.000      | 1.000        | 0.166 (0.166)    | 0.365 (0.365)    | 1 (1.000) |    13.33 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           25 |     2201 | 2026-08-14 | Ninjas in Pyjamas | L   | 0.852      | -            | -                | -                | -         |   -13.19 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           24 |     2238 | 2026-08-12 | FaZe              | L   | 0.840      | -            | -                | -                | -         |   -15.66 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           23 |     3153 | 2026-07-10 | FaZe              | L   | 0.619      | -            | -                | -                | -         |   -12.55 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           22 |     3243 | 2026-07-03 | Nemesis           | W   | 0.574      | 1.000        | 0.157 (0.090)    | 0.774 (0.445)    | 1 (0.574) |     6.80 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           21 |     3267 | 2026-07-02 | BIG               | W   | 0.566      | 1.000        | 0.166 (0.094)    | 0.365 (0.206)    | 1 (0.566) |     7.04 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           20 |     3285 | 2026-07-01 | SINNERS           | W   | 0.560      | 1.000        | -                | 0.705 (0.395)    | 1 (0.560) |     4.53 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |
|           19 |     3504 | 2026-06-18 | Aurora            | L   | 0.473      | -            | -                | -                | -         |    -4.83 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           18 |     3535 | 2026-06-15 | FUT               | W   | 0.453      | 1.000        | 0.866 (0.393)    | -                | 1 (0.453) |    10.98 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           17 |     3556 | 2026-06-14 | Vitality          | L   | 0.447      | -            | -                | -                | -         |    -1.49 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           16 |     3585 | 2026-06-13 | FURIA             | L   | 0.441      | -            | -                | -                | -         |    -2.02 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           15 |     3640 | 2026-06-12 | Falcons           | W   | 0.434      | 1.000        | 1.000 (0.434)    | 0.308 (0.134)    | 1 (0.434) |    11.01 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           14 |     3674 | 2026-06-11 | The MongolZ       | W   | 0.425      | 1.000        | 0.258 (0.110)    | -                | 1 (0.425) |     2.49 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           13 |     3721 | 2026-06-08 | Luminosity        | W   | 0.407      | -            | -                | -                | 1 (0.407) |     7.01 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           12 |     3747 | 2026-06-07 | M80               | W   | 0.400      | 0.809        | -                | 0.469 (0.152)    | -         |     6.03 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           11 |     3764 | 2026-06-06 | GamerLegion       | W   | 0.394      | 0.809        | 0.299 (0.095)    | -                | -         |     6.52 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|           10 |     3777 | 2026-06-06 | Spirit            | L   | 0.393      | -            | -                | -                | -         |    -0.83 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|            9 |     3847 | 2026-06-03 | GamerLegion       | W   | 0.373      | -            | -                | -                | -         |     6.34 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|            8 |     3863 | 2026-06-02 | Liquid            | W   | 0.368      | 0.624        | -                | 0.547 (0.126)    | -         |     6.12 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|            7 |     3877 | 2026-06-02 | Gaimin Gladiators | W   | 0.366      | -            | -                | -                | -         |     0.04 | Boombl4, d1Ledez, FL4MUS, Magnojez, zorte |
|            6 |     4457 | 2026-05-17 | Legacy            | L   | 0.260      | -            | -                | -                | -         |    -0.64 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|            5 |     4470 | 2026-05-16 | Natus Vincere     | L   | 0.255      | -            | -                | -                | -         |    -5.59 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|            4 |     4553 | 2026-05-13 | paiN              | W   | 0.235      | -            | -                | -                | -         |     2.31 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|            3 |     4597 | 2026-05-12 | Vitality          | W   | 0.228      | 1.000        | 1.000 (0.228)    | -                | -         |     6.62 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|            2 |     4643 | 2026-05-11 | B8                | W   | 0.221      | 1.000        | -                | 0.596 (0.131)    | -         |     3.56 | Boombl4, FL4MUS, Magnojez, S1ren, zorte   |
|            1 |     5292 | 2026-04-24 | Black Phoenix     | L   | 0.107      | -            | -                | -                | -         |    -3.19 | Boombl4, d1Ledez, Magnojez, S1ren, zorte  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($180,803.70)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.38) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-13 |      1.000 | $93,000.00     | $93,000.00      |
| 2026-08-23 |      0.914 | $10,000.00     | $9,135.15       |
| 2026-07-12 |      0.632 | $50,000.00     | $31,601.69      |
| 2026-06-21 |      0.494 | $45,000.00     | $22,223.99      |
| 2026-05-17 |      0.262 | $95,000.00     | $24,842.87      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
