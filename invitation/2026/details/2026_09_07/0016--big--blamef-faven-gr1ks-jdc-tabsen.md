### Roster Details<br />
Team Name: BIG<br />
Roster: blameF, faveN, gr1ks, JDC, tabseN<br />
Global Rank: [16](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [13]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1479.3<br />
<br />
Final Rank Value (1479.3) = Starting Rank Value (1582.2) + Head To Head Adjustments (-102.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.549[<sup>1</sup>](#table2)
- Bounty Collected: 0.533[<sup>2</sup>](#table1)
- Opponent Network: 0.407[<sup>2</sup>](#table1)
- LAN Wins: 0.994[<sup>2</sup>](#table1)

The average of these factors is 0.621<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1582.2
- 400 + ( ( 0.621 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1582.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |      132 | 2026-09-03 | magic             | L   | 1.000      | -            | -                | -                | -         |   -19.24 | blameF, faveN, gr1ks, JDC, tabseN    |
|           53 |      148 | 2026-09-02 | paiN              | W   | 1.000      | 0.143        | 0.300 (0.043)    | -                | -         |     6.93 | blameF, faveN, gr1ks, JDC, tabseN    |
|           52 |      164 | 2026-09-02 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -29.14 | blameF, faveN, gr1ks, JDC, tabseN    |
|           51 |      786 | 2026-08-15 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -2.42 | blameF, faveN, gr1ks, JDC, tabseN    |
|           50 |      865 | 2026-08-13 | G2                | L   | 1.000      | -            | -                | -                | -         |    -8.24 | blameF, faveN, gr1ks, JDC, tabseN    |
|           49 |      898 | 2026-08-12 | Aurora            | W   | 1.000      | 1.000        | 0.413 (0.413)    | 0.425 (0.425)    | 1 (1.000) |    17.32 | blameF, faveN, gr1ks, JDC, tabseN    |
|           48 |      915 | 2026-08-09 | Sashi             | W   | 1.000      | 0.818        | 0.055 (0.045)    | 0.621 (0.508)    | 1 (1.000) |     6.22 | blameF, faveN, gr1ks, JDC, tabseN    |
|           47 |      925 | 2026-08-09 | GenOne            | W   | 0.999      | 0.818        | 0.055 (0.045)    | 1.000 (0.817)    | 1 (0.999) |     3.07 | blameF, faveN, gr1ks, JDC, tabseN    |
|           46 |      942 | 2026-08-09 | Eternal Fire      | W   | 0.998      | 0.818        | -                | 0.704 (0.575)    | 1 (0.998) |     1.54 | blameF, faveN, gr1ks, JDC, tabseN    |
|           45 |     1030 | 2026-08-07 | Fluxo             | W   | 0.985      | 0.818        | 0.065 (0.053)    | 0.485 (0.391)    | 1 (0.985) |     2.95 | blameF, faveN, gr1ks, JDC, tabseN    |
|           44 |     1048 | 2026-08-07 | z to forward      | W   | 0.984      | -            | -                | -                | 1 (0.984) |     0.07 | blameF, faveN, gr1ks, JDC, tabseN    |
|           43 |     1804 | 2026-07-10 | PARIVISION        | L   | 0.798      | -            | -                | -                | -         |   -14.73 | blameF, faveN, gr1ks, JDC, tabseN    |
|           42 |     1867 | 2026-07-05 | B8                | W   | 0.765      | 1.000        | 0.262 (0.200)    | 0.567 (0.434)    | 1 (0.765) |    10.60 | blameF, faveN, gr1ks, JDC, tabseN    |
|           41 |     1883 | 2026-07-04 | Ninjas in Pyjamas | W   | 0.758      | 1.000        | 0.196 (0.148)    | 0.424 (0.321)    | 1 (0.758) |     6.67 | blameF, faveN, gr1ks, JDC, tabseN    |
|           40 |     1899 | 2026-07-03 | MIBR              | L   | 0.751      | -            | -                | -                | -         |   -13.92 | blameF, faveN, gr1ks, JDC, tabseN    |
|           39 |     1915 | 2026-07-02 | BETBOOM           | L   | 0.745      | -            | -                | -                | -         |   -11.25 | blameF, faveN, gr1ks, JDC, tabseN    |
|           38 |     1930 | 2026-07-01 | Lynn Vision       | W   | 0.739      | 1.000        | 0.205 (0.152)    | 0.328 (0.242)    | 1 (0.739) |     5.22 | blameF, faveN, gr1ks, JDC, tabseN    |
|           37 |     2345 | 2026-06-09 | B8                | L   | 0.593      | -            | -                | -                | -         |   -10.08 | blameF, faveN, gr1ks, JDC, tabseN    |
|           36 |     2367 | 2026-06-08 | G2                | L   | 0.587      | -            | -                | -                | -         |    -4.86 | blameF, faveN, gr1ks, JDC, tabseN    |
|           35 |     2397 | 2026-06-07 | MIBR              | W   | 0.579      | 0.809        | 0.207 (0.097)    | 0.456 (0.214)    | 1 (0.579) |     7.03 | blameF, faveN, gr1ks, JDC, tabseN    |
|           34 |     2417 | 2026-06-06 | paiN              | W   | 0.573      | 0.809        | 0.300 (0.139)    | 0.318 (0.147)    | -         |     4.31 | blameF, faveN, gr1ks, JDC, tabseN    |
|           33 |     2427 | 2026-06-06 | Luminosity        | L   | 0.572      | -            | -                | -                | -         |   -15.20 | blameF, faveN, gr1ks, JDC, tabseN    |
|           32 |     2445 | 2026-06-05 | NRG               | W   | 0.567      | -            | -                | -                | -         |     1.82 | blameF, faveN, gr1ks, JDC, tabseN    |
|           31 |     2472 | 2026-06-04 | GamerLegion       | L   | 0.559      | -            | -                | -                | -         |   -11.72 | blameF, faveN, gr1ks, JDC, tabseN    |
|           30 |     2500 | 2026-06-03 | THUNDER dOWNUNDER | W   | 0.552      | -            | -                | -                | -         |     0.90 | blameF, faveN, gr1ks, JDC, tabseN    |
|           29 |     2513 | 2026-06-02 | Gaimin Gladiators | W   | 0.547      | -            | -                | -                | -         |     0.18 | blameF, faveN, gr1ks, JDC, tabseN    |
|           28 |     2524 | 2026-06-02 | Liquid            | L   | 0.545      | -            | -                | -                | -         |   -10.80 | blameF, faveN, gr1ks, JDC, tabseN    |
|           27 |     3765 | 2026-04-27 | Nemiga            | L   | 0.305      | -            | -                | -                | -         |    -9.21 | blameF, faveN, gr1ks, prosus, tabseN |
|           26 |     3838 | 2026-04-26 | SPARTA            | W   | 0.297      | -            | -                | -                | -         |     0.21 | blameF, faveN, gr1ks, JDC, tabseN    |
|           25 |     3854 | 2026-04-25 | Ninjas in Pyjamas | L   | 0.294      | -            | -                | -                | -         |    -7.39 | blameF, faveN, gr1ks, JDC, tabseN    |
|           24 |     3910 | 2026-04-25 | DENDELE           | W   | 0.291      | -            | -                | -                | -         |     2.04 | blameF, faveN, gr1ks, JDC, tabseN    |
|           23 |     3950 | 2026-04-24 | HEROIC            | L   | 0.286      | -            | -                | -                | -         |    -6.83 | blameF, faveN, gr1ks, JDC, tabseN    |
|           22 |     3959 | 2026-04-24 | Acend             | W   | 0.284      | -            | -                | -                | -         |     1.96 | blameF, faveN, gr1ks, JDC, tabseN    |
|           21 |     3979 | 2026-04-23 | 100 Thieves       | W   | 0.280      | -            | -                | -                | -         |     2.63 | blameF, faveN, gr1ks, JDC, tabseN    |
|           20 |     4243 | 2026-04-10 | Nemesis           | L   | 0.193      | -            | -                | -                | -         |    -5.62 | blameF, faveN, gr1ks, JDC, tabseN    |
|           19 |     4251 | 2026-04-10 | PsychoFace        | W   | 0.191      | -            | -                | -                | -         |     0.17 | blameF, faveN, gr1ks, JDC, tabseN    |
|           18 |     4271 | 2026-04-09 | Black Phoenix     | W   | 0.186      | -            | -                | -                | -         |     0.12 | blameF, faveN, gr1ks, JDC, tabseN    |
|           17 |     4291 | 2026-04-08 | Bebop             | W   | 0.180      | -            | -                | -                | -         |     0.06 | blameF, faveN, gr1ks, JDC, tabseN    |
|           16 |     4392 | 2026-04-05 | FaZe              | W   | 0.160      | -            | -                | -                | -         |     2.67 | blameF, faveN, gr1ks, JDC, tabseN    |
|           15 |     4403 | 2026-04-05 | magic             | W   | 0.159      | -            | -                | -                | -         |     1.18 | blameF, faveN, gr1ks, JDC, tabseN    |
|           14 |     4417 | 2026-04-05 | ex-Zero Tenacity  | W   | 0.158      | -            | -                | -                | -         |     0.12 | blameF, faveN, gr1ks, JDC, tabseN    |
|           13 |     4461 | 2026-04-04 | Betclic           | W   | 0.154      | -            | -                | -                | -         |     0.07 | blameF, faveN, gr1ks, JDC, tabseN    |
|           12 |     4473 | 2026-04-04 | Luminous          | W   | 0.153      | -            | -                | -                | -         |     0.01 | blameF, faveN, gr1ks, JDC, tabseN    |
|           11 |     5017 | 2026-03-29 | OG                | L   | 0.112      | -            | -                | -                | -         |    -3.38 | blameF, faveN, gr1ks, JDC, tabseN    |
|           10 |     5023 | 2026-03-29 | SINNERS           | W   | 0.111      | -            | -                | -                | -         |     0.22 | blameF, faveN, gr1ks, JDC, tabseN    |
|            9 |     5032 | 2026-03-29 | JiJieHao          | L   | 0.111      | -            | -                | -                | -         |    -2.40 | blameF, faveN, gr1ks, JDC, tabseN    |
|            8 |     5176 | 2026-03-26 | SINNERS           | L   | 0.094      | -            | -                | -                | -         |    -2.78 | blameF, faveN, gr1ks, JDC, tabseN    |
|            7 |     5193 | 2026-03-26 | HOTU              | W   | 0.092      | -            | -                | -                | -         |     0.93 | blameF, faveN, gr1ks, JDC, tabseN    |
|            6 |     5216 | 2026-03-25 | Iberian Soul      | W   | 0.087      | -            | -                | -                | -         |     0.21 | blameF, faveN, gr1ks, JDC, tabseN    |
|            5 |     5231 | 2026-03-25 | MOUZ NXT          | W   | 0.086      | -            | -                | -                | -         |     0.01 | blameF, faveN, gr1ks, JDC, tabseN    |
|            4 |     5525 | 2026-03-20 | K27               | L   | 0.053      | -            | -                | -                | -         |    -1.15 | blameF, faveN, gr1ks, JDC, tabseN    |
|            3 |     5550 | 2026-03-20 | FAVBET            | W   | 0.051      | -            | -                | -                | -         |     0.01 | blameF, faveN, gr1ks, JDC, tabseN    |
|            2 |     5574 | 2026-03-19 | CYBERSHOKE        | W   | 0.047      | -            | -                | -                | -         |     0.02 | blameF, faveN, gr1ks, JDC, tabseN    |
|            1 |     5612 | 2026-03-18 | ex-Zero Tenacity  | W   | 0.040      | -            | -                | -                | -         |     0.03 | blameF, faveN, gr1ks, JDC, tabseN    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($75,591.27)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-23 |      1.000 | $20,000.00     | $20,000.00      |
| 2026-07-12 |      0.811 | $50,000.00     | $40,553.14      |
| 2026-06-09 |      0.593 | $10,000.00     | $5,933.16       |
| 2026-04-27 |      0.306 | $5,000.00      | $1,529.66       |
| 2026-04-26 |      0.300 | $7,500.00      | $2,250.87       |
| 2026-04-10 |      0.193 | $10,000.00     | $1,928.14       |
| 2026-04-05 |      0.160 | $12,000.00     | $1,923.88       |
| 2026-03-26 |      0.094 | $10,000.00     | $937.84         |
| 2026-03-20 |      0.053 | $10,000.00     | $534.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
