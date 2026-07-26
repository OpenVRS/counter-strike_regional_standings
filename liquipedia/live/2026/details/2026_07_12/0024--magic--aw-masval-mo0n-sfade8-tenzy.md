### Roster Details<br />
Team Name: Magic<br />
Roster: AW, MaSvAl, mo0N, sFade8, tenzy<br />
Global Rank: [24](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [18]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  1460.5<br />
<br />
Final Rank Value (1460.5) = Starting Rank Value (1472.1) + Head To Head Adjustments (-11.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.601[<sup>1</sup>](#table2)
- Bounty Collected: 0.537[<sup>2</sup>](#table1)
- Opponent Network: 0.328[<sup>2</sup>](#table1)
- LAN Wins: 0.796[<sup>2</sup>](#table1)

The average of these factors is 0.566<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1472.1
- 400 + ( ( 0.566 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 1472.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.573
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |       35 | 2026-07-10 | IC Esports                | L   | 1.000      | -            | -                | -                | -         |   -18.45 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           52 |       53 | 2026-07-09 | Esport Academy Copenhagen | W   | 1.000      | -            | -                | -                | -         |     2.16 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           51 |      825 | 2026-05-30 | Ninjas in Pyjamas         | L   | 0.911      | -            | -                | -                | -         |   -17.38 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           50 |      862 | 2026-05-29 | Ninjas in Pyjamas         | W   | 0.905      | 0.500        | 0.153 (0.069)    | -                | 1 (0.905) |    10.26 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           49 |      902 | 2026-05-28 | FaZe Clan                 | W   | 0.898      | 0.500        | 0.472 (0.212)    | 0.478 (0.215)    | 1 (0.898) |    18.24 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           48 |      974 | 2026-05-27 | 3DMAX                     | W   | 0.889      | 0.500        | 0.232 (0.103)    | -                | 1 (0.889) |     9.69 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           47 |     1342 | 2026-05-17 | MOUZ                      | L   | 0.822      | -            | -                | -                | -         |    -3.00 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           46 |     1362 | 2026-05-16 | Team Falcons              | L   | 0.817      | -            | -                | -                | -         |    -1.28 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           45 |     1394 | 2026-05-15 | 9z Team                   | W   | 0.810      | 1.000        | 0.786 (0.636)    | 0.778 (0.630)    | 1 (0.810) |    23.78 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           44 |     1461 | 2026-05-12 | Gentle Mates              | W   | 0.795      | 1.000        | 0.124 (0.098)    | 0.461 (0.366)    | 1 (0.795) |     6.66 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           43 |     1503 | 2026-05-11 | HEROIC                    | W   | 0.788      | 1.000        | 0.111 (0.087)    | 0.356 (0.281)    | 1 (0.788) |     9.20 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           42 |     1534 | 2026-05-11 | K27                       | W   | 0.783      | 1.000        | 0.082 (0.064)    | 0.665 (0.521)    | 1 (0.783) |     6.64 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           41 |     1563 | 2026-05-10 | Luminosity Gaming         | L   | 0.777      | -            | -                | -                | -         |    -8.41 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           40 |     1605 | 2026-05-08 | The MongolZ               | L   | 0.769      | -            | -                | -                | -         |    -4.57 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           39 |     1719 | 2026-05-03 | Gentle Mates              | W   | 0.730      | 0.435        | 0.124 (0.039)    | -                | -         |     5.85 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           38 |     1761 | 2026-05-02 | Eternal Fire              | W   | 0.723      | -            | -                | -                | -         |     2.51 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           37 |     1861 | 2026-04-30 | Echo                      | W   | 0.710      | 0.435        | -                | 0.651 (0.201)    | -         |     5.83 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           36 |     2132 | 2026-04-25 | Nuclear TigeRES           | L   | 0.677      | -            | -                | -                | -         |   -16.28 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           35 |     2619 | 2026-04-05 | Illwill                   | L   | 0.545      | -            | -                | -                | -         |   -16.12 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           34 |     2630 | 2026-04-05 | BIG                       | L   | 0.544      | -            | -                | -                | -         |    -7.38 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           33 |     2660 | 2026-04-05 | Drama Esports             | W   | 0.542      | -            | -                | -                | 1 (0.542) |     0.11 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           32 |     2725 | 2026-04-04 | CYBERSHOKE Esports        | W   | 0.536      | -            | -                | -                | 1 (0.536) |     1.75 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           31 |     2736 | 2026-04-04 | PIVOSQUAD                 | W   | 0.536      | -            | -                | -                | 1 (0.536) |     0.05 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           30 |     2743 | 2026-04-04 | Re`Di                     | W   | 0.535      | -            | -                | -                | -         |     0.05 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           29 |     2795 | 2026-04-03 | K27                       | W   | 0.531      | 0.769        | 0.082 (0.034)    | 0.665 (0.271)    | -         |     4.70 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           28 |     2889 | 2026-04-02 | K27                       | W   | 0.524      | 0.769        | 0.082 (0.033)    | 0.665 (0.268)    | -         |     4.67 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           27 |     2971 | 2026-04-01 | AKPO6ATbI                 | W   | 0.518      | -            | -                | -                | -         |     0.13 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           26 |     3080 | 2026-03-31 | 100 Thieves               | W   | 0.511      | 0.769        | -                | 0.767 (0.301)    | -         |     4.57 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           25 |     3573 | 2026-03-23 | Nuclear TigeRES           | W   | 0.458      | 0.624        | -                | 0.786 (0.225)    | -         |     3.09 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           24 |     3588 | 2026-03-23 | IC Academy                | W   | 0.458      | -            | -                | -                | -         |     0.47 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           23 |     4229 | 2026-03-10 | PsychoFace                | L   | 0.369      | -            | -                | -                | -         |   -10.84 | AW, MaSvAl, mo0N, sFade8, tENZY |
|           22 |     4505 | 2026-03-05 | ECSTATIC                  | L   | 0.337      | -            | -                | -                | -         |    -9.96 | AW, h1te, MaSvAl, sFade8, tENZY |
|           21 |     4541 | 2026-03-04 | HOTU                      | W   | 0.331      | -            | -                | -                | -         |     3.01 | AW, h1te, MaSvAl, sFade8, tENZY |
|           20 |     4590 | 2026-03-03 | TDK                       | W   | 0.324      | -            | -                | -                | -         |     1.59 | AW, h1te, MaSvAl, sFade8, tENZY |
|           19 |     4940 | 2026-02-24 | SPARTA Esports            | L   | 0.277      | -            | -                | -                | -         |    -7.90 | AW, h1te, MaSvAl, sFade8, tENZY |
|           18 |     5309 | 2026-02-17 | MOUZ NXT                  | L   | 0.231      | -            | -                | -                | -         |    -7.01 | AW, h1te, MaSvAl, sFade8, tENZY |
|           17 |     5485 | 2026-02-14 | Gentle Mates              | L   | 0.210      | -            | -                | -                | -         |    -5.27 | AW, h1te, MaSvAl, sFade8, tENZY |
|           16 |     5537 | 2026-02-13 | Misa Esports              | W   | 0.204      | -            | -                | -                | -         |     0.12 | AW, h1te, MaSvAl, sFade8, tENZY |
|           15 |     5577 | 2026-02-12 | Fire Flux Esports         | W   | 0.197      | -            | -                | -                | -         |     0.08 | AW, h1te, MaSvAl, sFade8, tENZY |
|           14 |     5759 | 2026-02-06 | BetBoom Team              | W   | 0.158      | -            | -                | -                | -         |     4.29 | AW, h1te, MaSvAl, sFade8, tENZY |
|           13 |     5767 | 2026-02-06 | FAVBET Team               | W   | 0.157      | -            | -                | -                | -         |     0.12 | AW, h1te, MaSvAl, sFade8, tENZY |
|           12 |     5790 | 2026-02-05 | EYEBALLERS                | W   | 0.151      | -            | -                | -                | -         |     1.98 | AW, h1te, MaSvAl, sFade8, tENZY |
|           11 |     5834 | 2026-02-03 | SINNERS Esports           | W   | 0.138      | -            | -                | -                | -         |     0.89 | AW, h1te, MaSvAl, sFade8, tENZY |
|           10 |     5856 | 2026-02-03 | Ex-RUBY                   | L   | 0.136      | -            | -                | -                | -         |    -4.09 | AW, h1te, MaSvAl, sFade8, tENZY |
|            9 |     5885 | 2026-02-02 | DragonClaw                | L   | 0.130      | -            | -                | -                | -         |    -3.94 | AW, h1te, MaSvAl, sFade8, tENZY |
|            8 |     5910 | 2026-02-01 | Persona Grata             | W   | 0.123      | -            | -                | -                | -         |     0.03 | AW, h1te, MaSvAl, sFade8, tENZY |
|            7 |     5916 | 2026-02-01 | 1w Team                   | W   | 0.122      | -            | -                | -                | -         |     0.56 | AW, h1te, MaSvAl, sFade8, tENZY |
|            6 |     5969 | 2026-01-30 | DragonClaw                | L   | 0.112      | -            | -                | -                | -         |    -3.40 | AW, h1te, MaSvAl, sFade8, tENZY |
|            5 |     6012 | 2026-01-29 | Johnny Speeds             | W   | 0.103      | -            | -                | -                | -         |     0.48 | AW, h1te, MaSvAl, sFade8, tENZY |
|            4 |     6023 | 2026-01-28 | Tung Tung Sahur           | W   | 0.098      | -            | -                | -                | -         |     0.02 | AW, h1te, MaSvAl, sFade8, tENZY |
|            3 |     6078 | 2026-01-26 | SIXSEVEN                  | W   | 0.083      | -            | -                | -                | -         |     0.01 | AW, h1te, MaSvAl, sFade8, tENZY |
|            2 |     6136 | 2026-01-24 | MOUZ NXT                  | W   | 0.070      | -            | -                | -                | -         |     0.07 | AW, h1te, MaSvAl, sFade8, tENZY |
|            1 |     6292 | 2026-01-20 | Ex-MANA eSports           | W   | 0.044      | -            | -                | -                | -         |     0.03 | AW, h1te, MaSvAl, sFade8, tENZY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($116,282.48)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-30 |      0.911 | $17,500.00     | $15,944.44      |
| 2026-05-17 |      0.823 | $112,000.00    | $92,182.22      |
| 2026-04-05 |      0.545 | $4,000.00      | $2,180.00       |
| 2026-03-05 |      0.338 | $5,000.00      | $1,690.05       |
| 2026-02-14 |      0.212 | $3,125.00      | $661.46         |
| 2026-02-06 |      0.158 | $22,000.00     | $3,481.81       |
| 2026-02-04 |      0.142 | $1,000.00      | $142.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
