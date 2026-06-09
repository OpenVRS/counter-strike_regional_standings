### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: aiM, ASTRA, Emmsan, Hanka, sosya<br />
Global Rank: [284](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [180]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  586.6<br />
<br />
Final Rank Value (586.6) = Starting Rank Value (620.8) + Head To Head Adjustments (-34.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.263[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 620.8
- 400 + ( ( 0.116 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 620.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.073
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2172 | 2026-04-01 | Grindas                | L   | 0.798      | -            | -                | -                | -         |   -14.81 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           15 |     2266 | 2026-03-31 | EXSAD Gaming           | W   | 0.791      | 0.384        | 0.000 (0.000)    | 0.004 (0.001)    | 0 (0.000) |     6.24 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           14 |     2327 | 2026-03-30 | The Last Resort        | L   | 0.786      | -            | -                | -                | -         |    -3.30 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           13 |     2870 | 2026-03-21 | Leo Team               | L   | 0.726      | -            | -                | -                | -         |    -4.14 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           12 |     2956 | 2026-03-20 | Ursa                   | L   | 0.718      | -            | -                | -                | -         |    -2.19 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           11 |     3089 | 2026-03-17 | Persona Grata          | L   | 0.698      | -            | -                | -                | -         |    -5.17 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           10 |     3864 | 2026-03-01 | PsychoFace             | L   | 0.591      | -            | -                | -                | -         |    -1.33 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            9 |     4013 | 2026-02-26 | FUZOS                  | L   | 0.571      | -            | -                | -                | -         |    -5.18 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            8 |     4627 | 2026-02-14 | Let Her Cook           | L   | 0.493      | -            | -                | -                | -         |    -7.39 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            7 |     4645 | 2026-02-14 | Clutchain Female       | L   | 0.492      | -            | -                | -                | -         |    -6.53 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            6 |     4687 | 2026-02-13 | Fingers Crossed Female | W   | 0.487      | 0.384        | 0.001 (0.000)    | 0.032 (0.006)    | 0 (0.000) |     7.17 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            5 |     4761 | 2026-02-12 | Hashiras               | L   | 0.478      | -            | -                | -                | -         |    -4.61 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            4 |     4776 | 2026-02-11 | Let Her Cook           | W   | 0.473      | 0.384        | 0.004 (0.001)    | 0.049 (0.009)    | 0 (0.000) |     7.77 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            3 |     4826 | 2026-02-10 | Confidence             | W   | 0.466      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.16 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            2 |     4836 | 2026-02-10 | Nexus Gaming           | L   | 0.464      | -            | -                | -                | -         |    -4.47 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            1 |     4849 | 2026-02-09 | TNC Esport             | L   | 0.460      | -            | -                | -                | -         |    -1.51 | aiM, ASTRA, Emmsan, Hanka, sosya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($998.33)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.499 | $2,000.00      | $998.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
