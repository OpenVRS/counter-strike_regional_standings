### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: aiM, ASTRA, Emmsan, Hanka, sosya<br />
Global Rank: [276](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [176]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  586.9<br />
<br />
Final Rank Value (586.9) = Starting Rank Value (619.9) + Head To Head Adjustments (-33.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 619.9
- 400 + ( ( 0.114 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 619.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.067
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2282 | 2026-04-01 | Grindas                | L   | 0.746      | -            | -                | -                | -         |   -14.07 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           15 |     2376 | 2026-03-31 | EXSAD Gaming           | W   | 0.739      | 0.384        | 0.000 (0.000)    | 0.002 (0.001)    | 0 (0.000) |     5.78 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           14 |     2437 | 2026-03-30 | The Last Resort        | L   | 0.734      | -            | -                | -                | -         |    -3.32 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           13 |     2980 | 2026-03-21 | Leo Team               | L   | 0.674      | -            | -                | -                | -         |    -3.94 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           12 |     3066 | 2026-03-20 | Ursa                   | L   | 0.666      | -            | -                | -                | -         |    -2.17 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           11 |     3199 | 2026-03-17 | Persona Grata          | L   | 0.646      | -            | -                | -                | -         |    -5.15 | aiM, ASTRA, Emmsan, Hanka, sosya |
|           10 |     3974 | 2026-03-01 | PsychoFace             | L   | 0.539      | -            | -                | -                | -         |    -1.27 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            9 |     4123 | 2026-02-26 | FUZOS                  | L   | 0.519      | -            | -                | -                | -         |    -4.83 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            8 |     4737 | 2026-02-14 | Let Her Cook           | L   | 0.441      | -            | -                | -                | -         |    -6.62 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            7 |     4755 | 2026-02-14 | Clutchain Female       | L   | 0.440      | -            | -                | -                | -         |    -5.80 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            6 |     4797 | 2026-02-13 | Fingers Crossed Female | W   | 0.434      | 0.384        | 0.001 (0.000)    | 0.029 (0.005)    | 0 (0.000) |     6.42 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            5 |     4871 | 2026-02-12 | Hashiras               | L   | 0.426      | -            | -                | -                | -         |    -4.09 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            4 |     4886 | 2026-02-11 | Let Her Cook           | W   | 0.421      | 0.384        | 0.004 (0.001)    | 0.044 (0.007)    | 0 (0.000) |     6.91 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            3 |     4936 | 2026-02-10 | Confidence             | W   | 0.414      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.60 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            2 |     4946 | 2026-02-10 | Nexus Gaming           | L   | 0.412      | -            | -                | -                | -         |    -4.15 | aiM, ASTRA, Emmsan, Hanka, sosya |
|            1 |     4959 | 2026-02-09 | TNC Esport             | L   | 0.408      | -            | -                | -                | -         |    -1.31 | aiM, ASTRA, Emmsan, Hanka, sosya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($893.79)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.447 | $2,000.00      | $893.79         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
