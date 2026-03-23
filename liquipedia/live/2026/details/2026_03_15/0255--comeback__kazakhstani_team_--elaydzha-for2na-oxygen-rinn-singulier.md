### Roster Details<br />
Team Name: ComeBack (Kazakhstani team)<br />
Roster: ElayDzha, for2na, OxygeN, rinn, singulier<br />
Global Rank: [255](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [163]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  617.8<br />
<br />
Final Rank Value (617.8) = Starting Rank Value (604.2) + Head To Head Adjustments (13.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.203[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.2
- 400 + ( ( 0.104 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 604.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.028
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3268 | 2025-11-21 | MANA eSports       | W   | 0.437      | 0.333        | 0.000 (0.000)    | 0.409 (0.060)    | 0 (0.000) |    10.80 | dosikzz, ElayDzha, for2na, OxygeN, rinn   |
|           13 |     4890 | 2025-10-04 | EYEBALLERS         | L   | 0.117      | -            | -                | -                | -         |    -0.07 | ElayDzha, for2na, OxygeN, rinn, singulier |
|           12 |     4943 | 2025-10-02 | RUBY               | L   | 0.106      | -            | -                | -                | -         |    -1.09 | ElayDzha, for2na, OxygeN, rinn, singulier |
|           11 |     4955 | 2025-10-02 | KONO.ECF           | L   | 0.104      | -            | -                | -                | -         |    -0.95 | for2na, OxygeN, R3LiFwOw, rinn, singulier |
|           10 |     4984 | 2025-10-01 | Fire Flux Esports  | L   | 0.098      | -            | -                | -                | -         |    -0.96 | ElayDzha, for2na, OxygeN, rinn, singulier |
|            9 |     5008 | 2025-09-30 | KHAN               | W   | 0.093      | 0.303        | 0.000 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     1.09 | ElayDzha, for2na, OxygeN, rinn, singulier |
|            8 |     5022 | 2025-09-30 | CYBERSHOKE Esports | L   | 0.092      | -            | -                | -                | -         |    -0.10 | ElayDzha, for2na, OxygeN, rinn, singulier |
|            7 |     5055 | 2025-09-29 | Team Pigeons       | W   | 0.086      | 0.303        | 0.049 (0.001)    | 0.328 (0.009)    | 0 (0.000) |     2.09 | ElayDzha, for2na, OxygeN, R3LiFwOw, rinn  |
|            6 |     5072 | 2025-09-29 | FORZE Reload       | W   | 0.084      | 0.384        | 0.002 (0.000)    | 0.461 (0.015)    | 0 (0.000) |     2.08 | ElayDzha, for2na, OxygeN, rinn, singulier |
|            5 |     5110 | 2025-09-28 | Eternal Fire       | W   | 0.078      | 0.384        | 0.001 (0.000)    | 0.176 (0.005)    | 0 (0.000) |     1.55 | ElayDzha, for2na, OxygeN, rinn, singulier |
|            4 |     5153 | 2025-09-27 | Fire Flux Esports  | L   | 0.072      | -            | -                | -                | -         |    -0.67 | ElayDzha, for2na, OxygeN, rinn, singulier |
|            3 |     5262 | 2025-09-25 | GLORE              | W   | 0.058      | 0.384        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.44 | ElayDzha, for2na, OxygeN, rinn, singulier |
|            2 |     5290 | 2025-09-24 | Fire Flux Esports  | L   | 0.052      | -            | -                | -                | -         |    -0.49 | ElayDzha, for2na, OxygeN, rinn, singulier |
|            1 |     5470 | 2025-09-17 | THE (Russian team) | L   | 0.006      | -            | -                | -                | -         |    -0.12 | ElayDzha, for2na, OxygeN, rinn, singulier |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($49.80)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-01 |      0.100 | $500.00        | $49.80          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
